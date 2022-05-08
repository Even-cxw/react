import React, { useRef, useEffect, useState } from 'react';

const PropsChildren: React.FC = () => {
	return (
		<MouseEeventLister>
			<div style={{ height: '500px', width: '500px', background: 'red' }}>111</div>
		</MouseEeventLister>
	)
}


export default PropsChildren;

// 当鼠标超出当前MouseEeventLister组件包裹的元素就报conlose
const MouseEeventLister: React.FC = (props) => {
	let dom = useRef<HTMLDivElement>(null)
	let [domInfo,setDomInfo] = useState<{x:number,y:number}>({x:0,y:0})
	useEffect(() => {
		if (!dom.current) return;
    const container = dom.current
		console.log(container.style)
		console.log('domInfo',domInfo);
	},[])

	return (
		<div ref={dom} style={{ display: 'inline-block' }}>{props.children}</div>
	)
}