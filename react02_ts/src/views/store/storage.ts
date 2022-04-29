import { deepEqual } from "fast-equals"
import copy from 'fast-copy'

type State = Record<string, any>

type Listener<T = any> = (next: T | null, prev: T | null) => void
type Listeners = Record<string, Listener[]>

type SyncWithLocalStorage = Record<string, boolean>

const emptyWarning = (key: string) => console.warn(`Storage @bizseer-x-portal: no state named ${key}`)

const localStorageKeyPrefix = 'bizseer_x_portal_'

// 取localStorage值
export const fromLocalStorage = (key: string) => {
  const str = window.localStorage.getItem(localStorageKeyPrefix + key)
  try {
    return JSON.parse(str as string)
  } catch (err) {
    return null
  }
}
// 存值到localStorage中
export const toLocalStorage = (key: string, value: any) => {
  const str = JSON.stringify(value)
  window.localStorage.setItem(localStorageKeyPrefix + key, str)
}

export class Storage {
  state: State = {}
  listeners: Listeners = {}
  syncWithLocalStorage: SyncWithLocalStorage = {}

  /**
   * @desc 实例化Storage
   * @param {object} initState 实例化保存当前数据
   * @param {Record<string:boolean>} syncWithLocalStorage eg:{theme:true} => 像localstorage里存值/将localStorage赋值给state
   */
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
        // 当前state对象里没值，而storage里面有值,会把storage赋值给state
          this.state[key] = prevLocalValue
        } else {
        // 当前state有值，存储到localStorage
          toLocalStorage(key, initState[key])
        }
      }
    }
  }

  /**
   * @desc 初始化设置了async, localstorage取值优先级高于state,localStorage会覆盖state
   * @param {string} key 
   * @returns {any}
   */
  get<T = any> (key: string) {
    if (Object.prototype.hasOwnProperty.call(this.state, key)) {
      if (this.syncWithLocalStorage[key]) {
        const value = fromLocalStorage(key)
        this.state[key] = value
      }

      return this.state[key] as T
    } else emptyWarning(key)
  }

  /**
   * @desc 
   * @param key 
   * @param value 
   * @returns 
   */
  set<T = any> (key: string, value: T) {
    if (Object.prototype.hasOwnProperty.call(this.state, key)) {
      const prev = this.get(key)
      // deep比较是否相等
      if (deepEqual(prev, value)) return
      // 深拷贝
      this.state[key] = copy(value)
      // 将值存储到localStorage里
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

  /**
   * @desc 改变state的函数存到listeners中
   * @other listeners数据结构，eg: {'theme':[fun01,func02]}
   * @param {string} key 
   * @param {function} listener 
   */
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

  /**
   * @desc 移除listeners里面的函数
   * @param {string} key 
   * @param {function} listener 
   */
  offChange (key: string, listener: Listener) {
    if (Object.prototype.hasOwnProperty.call(this.listeners, key)) {
      const index = this.listeners[key].findIndex(item => item === listener)
      if (index !== -1) {
        this.listeners[key].splice(index, 1)
      }
    } else emptyWarning(key)
  }

}

