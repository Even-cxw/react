import { useState, useCallback, useEffect } from 'react'
import {Istore} from './index'

export const useStore  = <T>(store: Istore, key: string) => {
  const [state, setValue] = useState(store.get<T>(key))
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
