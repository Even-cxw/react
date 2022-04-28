const { getThemeVariables } = require('antd/dist/theme')
const FontSizeBase = 12;

const customTheme = {
  /* 颜色 */
  // 'primary-color': '#1890ff', // 全局主色
  'primary-color': '#003e95', // 全局主色
  'success-color': '#52c41a', // 成功色
  'warning-color': '#faad14', // 警告色
  'error-color': '#f5222d', // 错误色
  'normal-color': '#cbd1d8',
  'processing-color': '#1890ff',

  /* 文字颜色 */
  'text-color': '#3a3c3f', // 主文本色
  'text-color-secondary': '#6b6f73', // 次文本色
  'text-color-inverse': '#fff', // 文本色反色
  'disabled-color': '#a5abb2', // 失效色
  'disabled-color-dark': '#a4a8ae', // 深色背景下的失效色
  'icon-color-hover': '#303234', // 图标hover色
  'heading-color': '#1d1e1f', // 标题色
  'link-color': '#096dd9', // 链接色
  'link-hover-color': '#1890ff', // 链接hover色
  'link-active-color': '#0050b3', // 链接active色

  /* 背景颜色 */
  'background-color-base': '#f4f5f6', // 背景色
  'background-color-light': '#f8f9fa', // 浅背景色
  'body-background': '#eaecf2', // 背景色
  'component-background': '#fff', // 背景色
  'popover-background': '#fff', // 浮层背景色
  'item-active-bg': '#e6f7ff', // 列表项active背景色
  'item-hover-bg': '#f0f2f5', // 列表项hover背景色
  'disabled-bg': '#f5f5f5', // 禁用背景色

  /* 边框颜色 */
  'border-color-base': '#cbd1d8', // 边框色
  'border-color-split': '#eef2f7', // 内部分割边框颜色
  'divider-color': '#eaecef',

  /* 其它 */
  'font-size-base': `${FontSizeBase}px`, // 主字号
  'font-size-sm': `12px`,
  'font-size-lg': `${FontSizeBase + 2}px`,
  'heading-1-size': `${FontSizeBase * 2.71}px`,
  'heading-2-size': `${FontSizeBase * 2.14}px`,
  'heading-3-size': `${FontSizeBase * 1.71}px`,
  'heading-4-size': `${FontSizeBase * 1.42}px`,
  'heading-5-size': `${FontSizeBase * 1.14}px`,
  'border-radius-base': '2px', // 组件/浮层圆角
  'box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // 浮层阴影
  'font-family': `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`, // 字体
  'code-family': `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`, // 代码字体

  /* 组件样式修改，不需要在Theme接口中定义 */
  'btn-shadow': '0 2px 0 rgba(29, 30, 31, 0.015)',
  'btn-primary-shadow': '0 2px 0 rgba(29, 30, 31, 0.045)',
  'btn-text-shadow': '0 -1px 0 rgba(29, 30, 31, 0.12)',
  'btn-text-hover-bg': 'rgba(29, 30, 31, 0.018)',
  'descriptions-bg': '#f8fafc',
  'radio-dot-disabled-color': '#a5abb2',
  'radio-disabled-button-checked-bg': 'tint(#1d1e1f)',
  'input-placeholder-color': '#a5abb2',
  'input-number-handler-active-bg': '#f4f6f8',
  'input-icon-hover-color': '#1d1e1f',
  'select-multiple-item-disabled-color': '#a5abb2',
  'tooltip-bg': 'rgba(29, 30, 31, 0.8)',
  'modal-mask-bg': 'fade(#1d1e1f, 45%)',
  'progress-steps-item-bg': '#f0f2f5',
  'table-body-sort-bg': '#f8fafc',
  'table-expanded-row-bg': '#faf8fc',
  'table-sticky-scroll-bar-bg': 'fade(#1d1e1f, 40%)',
  'card-shadow': '0 1px 2px -2px rgba(29, 30, 31, 0.16), 0 3px 6px 0 rgba(29, 30, 31, 0.12), 5px 12px 4px rgba(29, 30, 31, 0.09)',
  'comment-author-time-color': '#ccd0d4',
  'comment-action-hover-color': '#3a3c3f',
  'avatar-bg': '#ccd0d4',
  'slider-rail-background-color-hover': '#e1e4e7',
  'skeleton-color': 'rgba(190, 192, 194, 0.2)',
  'steps-nav-arrow-color': '#bfc2c5',
  'image-bg': '#f0f2f5'
}

module.exports = Object.assign({}, getThemeVariables({ compact: false }), customTheme)