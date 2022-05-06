import React, { useCallback, useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import {api} from '../../../services/api'
import { pathToFileURL } from 'url';
import useTable from '../../../hooks/useTable';

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
		render:(text,record) => {
			// 所有内容
			// console.log('text',text)
			// 当前对象内容
			// console.log('record',record)
			return <div>{text}+++111</div>
		}
	},
];

const PackageTable:React.FC = function() {
	let [selectedRowKeys, setSelectedRowKeys] = useState<[]>([]);
    let {tableQuery,tableLoading,tableList,apiFetch} = useTable({page:1,pageSize:10},'getTableList02')

	// 清空选项列表
	let clearSelecte = useCallback(() => {
	},[])

	// table选择了某个选项
	let onSelectChange = (selectedRowKeys,selectedRows) => {
		// console.log(`selectedRowKeys=${selectedRowKeys}`,`selectedRows=${selectedRows}`);
		setSelectedRowKeys(selectedRowKeys)
	};
	// 页数发生改变
	let pageChange = useCallback((page, pageSize) => {
		apiFetch({page, pageSize})
	},[])

	// table配置项
	const rowSelection = {
		selectedRowKeys,// 选择所有的数组
		onChange: onSelectChange,
		selections:true,// 默认下拉框
	};
	const pagination = {
		total:tableQuery.total,
		showTotal:total => `共${total}页`,
		onChange:pageChange,
		current:tableQuery.page,
		pageSize: tableQuery.pageSize,
	}

	return (
		<div>
			<div style={{ marginBottom: 16 }}>
				<Button type="primary" onClick={clearSelecte} disabled={!selectedRowKeys.length} loading={tableLoading}>
					Reload
				</Button>
				<span style={{ marginLeft: 8 }}>
					{selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
				</span>
			</div>
			<Table rowKey={record=>record.name} rowSelection={rowSelection} columns={columns} dataSource={tableList} pagination={pagination} loading={tableLoading} />
		</div>
	);
	
}

export default PackageTable
