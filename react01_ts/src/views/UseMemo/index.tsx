import React,{useState,useMemo} from 'react';

// 优化 - 减少不必要的渲染函数；类似于vue的computed计算属性
const UseMemo:React.FC = () => {
	let [num, setNum] = useState<number>(0)
	let [name, setName] = useState<string>('Even')
	let newName = useMemo(() =>(name+','),[name])
	return (
		<div>
			 <div>个数{num}</div>
			 <div>名字{newName}</div>
			 <button onClick={() => setNum(num+1)}>个数加一</button>
			 <button onClick={() => setName(name+1)}>修改名字</button>
		</div>
	)
}

// 未优化 newName函数会执行多次；
const UseMemo1:React.FC = () => {
	let [num, setNum] = useState<number>(0)
	let [name, setName] = useState<string>('Even')
	function newName() {
		console.log('newName函数')
		return name+','
	}
	return (
		<div>
			 <div>个数{num}</div>
			 <div>名字{newName()}</div>
			 <button onClick={() => setNum(num+1)}>个数加一</button>
			 <button onClick={() => setName(name+1)}>修改名字</button>
		</div>
	)
}

export default UseMemo