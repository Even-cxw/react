import React, { createContext, useMemo, useContext, useState, useCallback } from 'react';

let Context = createContext<any>(null)


export default function CreateContext() {
	let [info, setInfo] = useState({ name: 'Even', age: 12 })


	let Children03 = useMemo(() => {
		console.log('Children03生命周期')
		return (
			<div>Children03组件</div>
		)
	}, [])

	const changeAge4 = useCallback(() => {
		info.age += 1
		setInfo({ ...info })
	},[])

	let Children04 = useMemo(() => {
		console.log('Children04生命周期')
		return (
			<div>
				<div>名字：{info.name},年龄：{info.age}</div>
				<button onClick={changeAge4}>修改年龄04</button>
			</div>
		)
	},[])

	return (
		<Context.Provider value={{ info, setInfo }}>
			<Children01></Children01>
			<Children02></Children02>
			{Children03}
			{Children04}
		</Context.Provider>
	)
}


function Children01() {
	let ctx = useContext(Context);
	let { info, setInfo } = ctx;
	function changeAge() {
		info.age += 1
		setInfo({ ...info })
	}
	const changeAge1 = useCallback(() => {
		info.age += 1
		setInfo({ ...info })
	},[])
	console.log('Children01生命周期')
	return (
		<div>
			<div>名字：{info.name},年龄：{info.age}</div>
			<button onClick={changeAge1}>修改年龄01</button>
		</div>
	)
}


function Children02() {
	console.log('Children02生命周期')
	return (
		<div>Children02组件</div>
	)
}