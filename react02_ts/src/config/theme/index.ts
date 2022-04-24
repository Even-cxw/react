export interface Theme {
  /* 颜色 */
  'primary-color': string, // 全局主色
  'success-color': string, // 成功色
  'warning-color': string, // 警告色
  'error-color': string, // 错误色
  'normal-color': string, // 错误色

  /* 文字颜色 */
  'text-color': string, // 主文本色
  'text-color-secondary': string, // 次文本色
  'text-color-inverse': string, // 文本色反色
  'disabled-color': string, // 失效色
  'disabled-color-dark': string, // 深色背景下的失效色 
  'icon-color-hover': string, // 图标hover色
  'heading-color': string, // 标题色
  'link-color': string, // 链接色
  'link-hover-color': string, // 链接hover色
  'link-active-color': string, // 链接active色

  /* 背景颜色 */
  'background-color-base': string, // 背景色
  'background-color-light': string, // 浅背景色
  'body-background': string, // 背景色
  'component-background': string, // 背景色
  'popover-background': string, // 浮层背景色
  'item-active-bg': string, // 列表项active背景色
  'item-hover-bg': string, // 列表项hover背景色
  'disabled-bg': string, // 禁用背景色

  /* 边框颜色 */
  'border-color-base': string, // 边框色
  'border-color-split': string, // 内部分割边框颜色
  'divider-color': string

  /* 其它 */
  'font-size-base': string, // 主字号
  'font-size-lg': string, // 主字号
  'font-size-sm': string, // 主字号
  'heading-1-size': string, // 主字号
  'heading-2-size': string, // 主字号
  'heading-3-size': string, // 主字号
  'heading-4-size': string, // 主字号
  'heading-5-size': string, // 主字号
  'border-radius-base': string, // 组件/浮层圆角
  'box-shadow-base': string, // 浮层阴影
  'font-family': string, // 字体
  'code-family': string, // 代码字体
}

const theme: Theme = require('./theme.js')

export default theme
