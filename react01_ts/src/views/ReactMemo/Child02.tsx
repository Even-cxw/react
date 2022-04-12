interface Iprops {
	info: {
		son:string,
		age:number
	}
}
const Child02: React.FC<any>= (props:Iprops) => {
	let {info} = props
	console.log('child的生命周期',info)
	return (
		<div>
			{info.age}
		</div>
	)
}

export default Child02





