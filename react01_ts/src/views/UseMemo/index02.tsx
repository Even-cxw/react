import React,{useCallback, useMemo, useState} from 'react';

// 监听组件变化
export default function UseMemo02() {
	let [info,setInfo] = useState({name:'Even',age:12})
	let render01 = useMemo(() => {
		return (
			<>
			<div>我是组件render01</div>
			<div>名字:{info.name}</div>
			</>
		)
	},[info])

	let render02 = useMemo(() => {
		console.log('render02')
		return(
			<div>render02</div>
		)
	},[render01])

	let changeName = useCallback(() => {
		info.name='Levi'
		setInfo({...info})
	},[])
	return (
		<div>
			<button onClick={changeName}>修改名字</button>
			{render01}
			{render02}
		</div>
	)
} 