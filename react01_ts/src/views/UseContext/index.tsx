import React, {useContext,createContext,useState, useCallback} from 'react';

const Monitor = createContext({})

const UseContext:React.FC = () => {
	let [info,setInfo] = useState({name:'Even',age:12})
  return (
		<div>
			我是父组件
			<Monitor.Provider value={{info,setInfo}}>
				<Child></Child>
			</Monitor.Provider>
		</div>
	)
}

const Child:React.FC = () => {
	return (
		<div>
			我是子组件
			<Bar></Bar>
		</div>
	)
}

const Bar:React.FC = () => {
	let {info,setInfo} = useContext<any>(Monitor)
	console.log('info',info)
	const handleInfo = useCallback(() => {
		info.name = 'Levi'
		setInfo({...info})
	},[])
	return (
		<div>
			我是子孙组件{info.name}
			<button onClick={handleInfo}>改变名字</button>
		</div>
	)
}


export default UseContext