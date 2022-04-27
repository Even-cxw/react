import { Theme } from '../src/config/theme'
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		// 自定义其他样式
	}
}