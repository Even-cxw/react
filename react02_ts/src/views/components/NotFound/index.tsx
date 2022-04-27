import React from 'react'
import { Result } from 'antd'
// import {useStore} from '../../store/shard'
import NotFoundImage from '../../../assets/images/404.png'
import ClassStorage from '../../store/storage'
export type IStorage = ClassStorage
interface Itheme {
  name:string
}
let store = new ClassStorage({'theme':{name:'Even'}},{});
interface Context {
  store: IStorage
}

export const initial: Context = { store } as Context

const NotFound: React.FC = (props) => {
  // const [theme,setTheme]= useStore<Itheme>(initial.store, 'theme')
  // console.log('theme',theme);
  return (
    <Result title="404" subTitle="您要访问的页面, 它去了遥远的星球, 暂时访问不了" icon={<img src={NotFoundImage} alt="404" />} />
  )
}

export default NotFound