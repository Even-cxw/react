import { Pagination } from 'antd';
import React,{useCallback,useState} from 'react';

const Paginations:React.FC = () => {
	let [total,setTotal] = useState<number>(85)
	let [defaultPageSize, setDefaultPageSize] = useState(10)
	let pageChange = useCallback((page, pageSize) => {
		console.log(page,pageSize);
	},[])


	return (
		<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
		<Pagination
			total={total}
			showTotal={total => `共${total}页`}
			defaultPageSize={defaultPageSize} // 默认的每页条数
			defaultCurrent={1}
			onChange={pageChange}
		/>
		<br />
	</div>
	)
};


export default Paginations