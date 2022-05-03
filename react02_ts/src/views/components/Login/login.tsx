import React, { useEffect,useContext, useCallback, useState } from 'react';
import { useStore } from '../../store';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import {StoreContext} from '../../utils/context';
import {api} from '../../../services/api'
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
	let {theme} = useContext(StoreContext).state
  let navigate = useNavigate();
	let [loading,setLoading] = useState<boolean>(false)
	// 提交按钮
	const onFinish = useCallback((values) => {
		console.log('Success:', values);
		setLoading(true)
		let {password,username} = values;
		api.getInfo({password,username}).then(res => {
			console.log(res)
			setLoading(false)
			navigate('/')
		})
	},[])

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className='f-c-c vh_100 vw_100' style={{background:theme['background-color-base']}}>
			<Spin spinning={loading}>
			<div className="py_45 px_20 vw_50">
				<Form name="basic"
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 24 }}
					initialValues={{ remember: true, }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off">
					<Form.Item label="用户名" name="username"
						rules={[{
							required: true,
							message: '请输入用户名',
						},]}>
						<Input allowClear={true} />
					</Form.Item>

					<Form.Item label="密码" name="password"
						rules={[{
							required: true,
							message: '请输入密码',
						},]}>
						<Input.Password allowClear={true}/>
					</Form.Item>

					<Form.Item wrapperCol={{
						offset: 11,
					}}>
						<Button type="primary" htmlType="submit">
							提交
						</Button>
					</Form.Item>
				</Form>
			</div>
			</Spin>
		</div>
	);
};


export default Login