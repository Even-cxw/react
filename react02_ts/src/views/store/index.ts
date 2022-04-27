
import Storage from './storage';
import theme,{ITheme} from '../../config/theme'
import {UserInfo} from './shard';
let data = {
    'theme': theme as ITheme
}
let storage = new Storage(data)
export type IStorage = Storage;
export type IUserInfo = UserInfo;
export default storage