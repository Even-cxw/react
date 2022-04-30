
import {get,post} from './fetch'
interface Iapi{
    getInfo:() => void
}

let apiConfig = new Map([
    ['base', 'https://www.fastmock.site/mock/a7ee1b5f557457fbd73deb545a856747/base/']
])

export let api = {
    getInfo(data={}) {return get({url:apiConfig.get('base')+'test',data})}
}
