import React,{useEffect, useRef} from 'react';

// 优化
const UseRef:React.FC = () => {
	let dom = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// console.log('dom',dom.current);
		if (dom.current) 
			dom.current.innerHTML = 'lalala'
			// console.log('dom.current!.clientWidth', dom.current!.clientWidth)
	})
	return (
		<div>
			 <div ref={dom}>我是dom元素</div>
		</div>
	)
}

export default UseRef