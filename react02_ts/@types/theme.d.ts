import { Theme } from '../src/views/store/theme'
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		// 自定义其他样式
	}
}