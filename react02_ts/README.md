

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


## 项目开发规范

### 入口文件
1. 每个文件夹下面有`index.ts入口文件`，整合所有`方法` 、`接口`对外暴露

2. 定义接口:数据前面加大写I， eg:如下
```ts
interface Idata {
  key:string
}
let data:Idata ={
  key:'asdf123'
}

```