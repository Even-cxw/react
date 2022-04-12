import React,{useMemo} from 'react';
interface Iprops {
	info: {
		son:string,
		age:number
	}
}

function MyComponent(props:Iprops) {
	let {info} = props
	console.log('child的生命周期',info)
	let age = useMemo(() =>info.age,[info.age]);
	return (
		<div>
			{age}
		</div>
	)
}

export default React.memo(MyComponent,function(pre:any,next:any):boolean {
	if (pre.info.age == next.info.age) {
		return false
	} else {
		return true;
	}
	/**
	 * @desc 判断是否更新
	 * @return true 更新，false 不更新
	 */
});