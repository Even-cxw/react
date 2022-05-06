import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api'
let page: number = 1;
let pageSize: number = 10;
let total: number | null = null
function useTable(query: any, name: string) {
	let [apiName] = useState<string>(name)
	let [tableQuery, setTableQuery] = useState<{ page, pageSize, total }>(query)
	let [tableLoading, setTableLoading] = useState<boolean>(false)
	let [tableList, setTableList] = useState([])
	let apiFetch = useCallback((query = { page, pageSize }) => {
		setTableLoading(true)
		return api[apiName](query).then((res) => {
			let { page, pageSize, total } = res;
			setTableList(res.data)
			setTableLoading(false)
			setTableQuery({ ...query, page, pageSize, total })
		})
	}, [])

	useEffect(() => {
		apiFetch()
	}, [])

	return { tableQuery, tableLoading, tableList, apiFetch }
}


export default useTable