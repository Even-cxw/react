import React,{useCallback, useEffect,useState} from 'react';

const UseEffect: React.FC = () => {
	let [info,setInfo] = useState<{name:string,age:number}>({name:'Even',age:12})
	useEffect(() => {
		console.log('监听深数据结构',info)
	},[info.name])
	let handleName = useCallback(() => {
		info.name = 'Levi'
		setInfo({...info});
	},[])
	return (
		<div>
			<div>{info.name}</div>
			<button onClick={handleName}>改变名字</button>
		</div>
	)
}


export default UseEffect;