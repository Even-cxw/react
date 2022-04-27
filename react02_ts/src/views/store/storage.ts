import { deepEqual } from "fast-equals"
import copy from 'fast-copy'

type State = Record<string, any>

type Listener<T = any> = (next: T | null, prev: T | null) => void
type Listeners = Record<string, Listener[]>

type SyncWithLocalStorage = Record<string, boolean>

const emptyWarning = (key: string) => console.warn(`Storage @bizseer-x-portal: no state named ${key}`)

const localStorageKeyPrefix = 'bizseer_x_portal_'

const fromLocalStorage = (key: string) => {
  const str = window.localStorage.getItem(localStorageKeyPrefix + key)
  try {
    return JSON.parse(str as string)
  } catch (err) {
    return null
  }
}

const toLocalStorage = (key: string, value: any) => {
  const str = JSON.stringify(value)
  window.localStorage.setItem(localStorageKeyPrefix + key, str)
}


class Storage {
  state: State = {}
  listeners: Listeners = {}
  syncWithLocalStorage: SyncWithLocalStorage = {}

  constructor (
    initState: State,
    syncWithLocalStorage: Record<string, boolean> = {}
  ) {
    this.state = { ...initState }
    this.syncWithLocalStorage = { ...syncWithLocalStorage }
    
    for (const key in syncWithLocalStorage) {
      if (syncWithLocalStorage[key]) {
        const prevLocalValue = fromLocalStorage(key)
        const currInitValue = initState[key]

        if ((currInitValue === undefined || currInitValue === null) && prevLocalValue !== null) {
          this.state[key] = prevLocalValue
        } else {
          toLocalStorage(key, initState[key])
        }
      }
    }
  }

  get<T = any> (key: string) {
    if (Object.prototype.hasOwnProperty.call(this.state, key)) {
      if (this.syncWithLocalStorage[key]) {
        const value = fromLocalStorage(key)
        this.state[key] = value
      }

      return this.state[key] as T
    } else emptyWarning(key)
  }

  set<T = any> (key: string, value: T) {
    if (Object.prototype.hasOwnProperty.call(this.state, key)) {
      const prev = this.get(key)

      if (deepEqual(prev, value)) return

      this.state[key] = copy(value)

      if (this.syncWithLocalStorage[key]) {
        toLocalStorage(key, this.state[key])
      }

      if (this.listeners[key] && this.listeners[key].length) {
        this.listeners[key].forEach(listener => {
          listener(this.get(key), prev)
        })
      }
    } else emptyWarning(key)
  }

  onChange<T = any> (key: string, listener: Listener<T>): void {
    if (Object.prototype.hasOwnProperty.call(this.state, key)) {
      if (!Object.prototype.hasOwnProperty.call(this.listeners, key)) {
        this.listeners[key] = []
      }

      if (!this.listeners[key].includes(listener)) {
        this.listeners[key].push(listener)
      }
    } else emptyWarning(key)
  }

  offChange (key: string, listener: Listener) {
    if (Object.prototype.hasOwnProperty.call(this.listeners, key)) {
      const index = this.listeners[key].findIndex(item => item === listener)
      if (index !== -1) {
        this.listeners[key].splice(index, 1)
      }
    } else emptyWarning(key)
  }

}

export default Storage
