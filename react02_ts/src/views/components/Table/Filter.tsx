import { Table } from 'antd';
import React, { useState } from 'react';

interface IcolumnsObj {
	title: string,
	dataIndex: string,
	filters?: any,
	onFilter?: any,
	sorter?: any,
	sortDirections?: [string],
	defaultSortOrder?: string,
}
const columnsState = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
		]
	},
	{
		title: 'Address',
		dataIndex: 'address',
		// 替换所有列表内容
		render: (text, record) => {
			// 所有内容
			console.log('text', text)
			// 当前对象内容
			console.log('record', record)
			return <div>{text}+++111</div>
		}
	},
];
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
];

function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
}

let Filter: React.FC = () => {
	let [columns, setColumns] = useState(columnsState)
	return (<Table columns={columns} dataSource={data} onChange={onChange} />)
}

export default Filter