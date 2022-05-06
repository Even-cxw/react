import { resolve } from 'dns';
import React,{useCallback, useEffect,useState} from 'react';

function api () {
	return new Promise(resolve => {
		setTimeout(() => {resolve(1111)},2000)
	})
}

const UseEffect: React.FC = () => {
	let [info,setInfo] = useState<{name:string,age:number}>({name:'Even',age:12})
	useEffect(() => {
		console.log('监听深数据结构',info)
	},[info.name])
	let handleName = useCallback(() => {
		info.name = 'Levi'
		setInfo({...info});
	},[])

	// 如何在useEffect中使用await方法
	useEffect(() => {
		(async() => {
			let a = await api()
			console.log('a',a)
		})()
	},[])
	return (
		<div>
			<div>{info.name}</div>
			<button onClick={handleName}>改变名字</button>
		</div>
	)
}


export default UseEffect;