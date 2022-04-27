import { useState, useCallback, useEffect } from 'react'
import IStorage from './storage'

export interface UserInfo {
  id: number
  username?: string
  nickname: string
  token: string
  email?: string
  description?: string
  disabled?: number
}


const useStore  = <T>(store: IStorage, key: string) => {
  const [state, setValue] = useState(store.get<T>(key))
//   const [state, setValue] = useState({name:"Even"})


  const changeHandler = useCallback(v => {
    setValue(v)
  }, [])

  useEffect(() => {
    store.onChange(key, changeHandler)

    return () => {
      store.offChange(key, changeHandler)
    }
  }, [store, key, changeHandler])

  const setState = useCallback((v: Partial<T> | null, sync: boolean = true) => {
    setValue(v as T)
    sync && store.set(key, v)
  }, [store, key])

  return [state, setState] as [typeof state, typeof setState]
}

export default useStore;