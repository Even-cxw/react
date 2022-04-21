## npm创建项目
1. 全局安装

```javascript
npm install create-react-app
```
2. 初始化项目
```javascript
create-react-app react01
```

- 初始化react+typescript项目
```javascript
create-react-app react02_ts --template typescript
```
### 项目
- react只做逻辑层
- react-dom去渲染实际的dom
[antd地址](https://ant-design.gitee.io/docs/react/introduce-cn)



## yarn创建项目
```js
yarn create react-app antd-demo-ts --template typescript
```

- 引入antd
```js
yarn add antd
```

- 配置升级
```js
yarn add @craco/craco
```

- 修改package.json文件
```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```
- 使用create-react-app创建的项目默认是`无法修改`其内部的webpack配置的
- 根目录新增 craco.config.js配置文件
```js
/* craco.config.js */
module.exports = {
  // ...
};
```

## craco自定义主题色
- 下载插件
```js
yarn add babel-plugin-import craco-less -D
```
-修改craco.config.js文件
```js
const CracoLessPlugin = require("craco-less");
module.exports = {
	 //按需引入
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    //可以设置为true即是less,注意！！！！此时不需要加引号
                    //也可以设置为css,css需要加引号
                    "style": true 
                }
            ]
        ]
    },
    //自定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
                lessLoaderOptions: {
                    lessOptions: {
                  		 //颜色即为自定义颜色
                        modifyVars: { '@primary-color': '#ffff00' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}
```

## 错误边界之react-error-boundary
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary):容错组件
```js
yarn add react-error-boundary -S
```

```js
// FallbackComponent => 错误组件样式
// onError => 方法输出err日志
<ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
</ErrorBoundary>
```

## 样式组件styled-components
```js
 yarn add styled-components @types/styled-components -D
```

```js
import styled, { DefaultTheme, ThemeProvider, StyleSheetManager } from 'styled-components';
const FallbackComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;
```

## react路由
- 
```js
yarn add react-router-dom -S
yarn add @types/react-router-dom -D
```