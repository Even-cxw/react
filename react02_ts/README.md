

### yarn创建项目
```js
yarn create react-app antd-demo-ts --template typescript
```

### 引入antd
```js
yarn add antd
```

### 配置升级
```js
yarn add @craco/craco
```

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

```js
/* craco.config.js */
module.exports = {
  // ...
};
```