import React,{useState,useMemo} from 'react';

// 优化 - 
const UseMemo:React.FC = () => {
	let [info, setInfo] = useState<{name:string,age:number}>({name:'Even',age:12})

	let newName = useMemo(() =>{
		console.log('useMemo有被执行吗？')
		return info.name+','
	},[info.name])

	

	return (
		<div>
			 <div>名字{newName}</div>
			 <div>个数{info.age}</div>
			 {/* <button onClick={() => setInfo({name: 'Levi'})}>修改名字</button> */}
			 {/* <button onClick={() => setInfo(info.age+1)}>修改年龄</button> */}
		</div>
	)
}



export default UseMemo