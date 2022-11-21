import React, { useCallback, useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import {api} from '../../../services/api'
import { pathToFileURL } from 'url';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		// 替换所有列表内容
		render:(text,record,index) => {
			console.log('record', record);
			// return <div>{text}+++111</div>
			if (index == 4) {
				return {
					children: text,
					props: {
						rowSpan: 2,
					},
				}
			} else {
				return text
			}
		
		}
	},
];

/**
 * @desc 请求与回显最好分开
 * @请求 控制参数
 * @回显 控制样式
 * @eg 当点击第一页时，样式并不会第一时间切换，而是当数据回显之后才做切换，所以要有一个保留当前请求数据的状态，当样式回显之后再把请求参数切回去；
 */
const paginationParams = {
	page: 1, // 当前页数
	pageSize: 10, // 一页多少条
	total: 10, // 总多少页 
}

const Table01:React.FC = function() {
	let [loading,setLoading] = useState<boolean>(false);
	let [selectedRowKeys, setSelectedRowKeys] = useState<[]>([]);
	let [tableList, setTableList] = useState([]);
	let [page,setPage] = useState(paginationParams);

	useEffect(() => {
		apiGetTableList(paginationParams);
	},[])
	//接口
	let apiGetTableList = useCallback((paginationParams) => {
		let data = {...paginationParams}
		setLoading(true)
		api.getTableList(data).then(res => {
			// console.log('res数据源',res)
			let {page,pageSize,total} = res;
			paginationParams = Object.assign({},{page,pageSize,total});
			setLoading(false)
			setPage({page,pageSize,total})
			setTableList(res.data)
		})
	},[])

	// 清空选项列表
	let clearSelecte = useCallback(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSelectedRowKeys([])
		}, 1000);
	},[])

	// table选择了某个选项
	let onSelectChange = (selectedRowKeys,selectedRows) => {
		// console.log(`selectedRowKeys=${selectedRowKeys}`,`selectedRows=${selectedRows}`);
		setSelectedRowKeys(selectedRowKeys)
	};
	// 页数发生改变
	let pageChange = useCallback((page, pageSize) => {
		paginationParams.page = page;
		paginationParams.pageSize = pageSize;
		apiGetTableList(paginationParams)
	},[])

	// table配置项
	const rowSelection = {
		selectedRowKeys,// 选择所有的数组
		onChange: onSelectChange,
		selections:true,// 默认下拉框
	};
	const pagination = {
		total:page.total,
		showTotal:total => `共${total}页`,
		onChange:pageChange,
		current:page.page,
		pageSize: page.pageSize,
	}

	return (
		<div>
			<div style={{ marginBottom: 16 }}>
				<Button type="primary" onClick={clearSelecte} disabled={!selectedRowKeys.length} loading={loading}>
					Reload
				</Button>
				<span style={{ marginLeft: 8 }}>
					{selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
				</span>
			</div>
			<Table rowKey={record=>record.name} rowSelection={rowSelection} columns={columns} dataSource={tableList} pagination={pagination} loading={loading} />
		</div>
	);
	
}

export default Table01
