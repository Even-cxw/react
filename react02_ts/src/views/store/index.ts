
import Storage from './storage';
import theme, { ITheme } from '../../config/theme'
import { UserInfo } from './shard';
type IinitState = Record<string, any>

let initState: IinitState = {
	'theme': theme as ITheme,
	'userInfo': null,
}
let storage = new Storage(initState)
export type IStorage = Storage;
export type IStore = Storage;
export type IUserInfo = UserInfo;
export let store = initState
export default storage
