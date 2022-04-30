import React, { useEffect,useContext } from 'react';
import { useStore } from '../../store';
import { Form, Input, Button, Checkbox } from 'antd';
import {StoreContext} from '../../utils/context';
const Login: React.FC = () => {
	let {theme} = useContext(StoreContext).state
	console.log('theme',theme)
	const onFinish = (values) => {
		console.log('Success:', values);
		let {password,username} = values;
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className='f-c-c vh_100 vw_100' style={{background:theme['background-color-base']}}>
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
		</div>
	);
};


export default Login