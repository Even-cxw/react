import { OmitProps } from 'antd/lib/transfer/ListBody';
import React,{useEffect, useRef, useState} from 'react';
import Child01 from './Child01';
// 优化
const ReactMemo:React.FC = () => {
	let [info,setInfo] = useState({name:'Even',age:12,children:{son:'77',age:2}})
	function handle() {
		info.children.age++;
		console.log('info',info);
		return setInfo({...info})
	}
	return (
		<div>
			{info.name}
			<Child01 info={info.children}></Child01>
			<button onClick={handle}>修改女儿年龄</button>
		</div>
	)
}

export default ReactMemo

