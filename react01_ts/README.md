

## ts全局变量
```ts
let route = (window as any).__ROUTE_MODE__ === 'hash' ? '111':'222';
```

## 复杂应用场景

- useMemo/useEffect
1. 监听复杂结构（对象里面的属性）


- react.memo
1. 监听复杂结构 ReactMemo/child01.tsx
```js
// ReactMemo只能监听基本数据类型，当碰到引用数据类型时，需要使用第二个参数来做判断
export default React.memo(MyComponent,function(pre:any,next:any):boolean {
	if (pre.info.age == next.info.age) {
		return false
	} else {
		return true;
	}
	/**
	 * @desc 判断是否更新
	 * @return true 更新，false 不更新
	 */
});
```

- useContext


- useHistory


- useMemo 监听组件变化


- props.children
