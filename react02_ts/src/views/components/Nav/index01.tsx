import React from 'react';
import { Routes, Route,BrowserRouter,Outlet} from 'react-router-dom';
import AlertMonitorCreateAndEdit from '../MonitorCreateAndEdit';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Nav:React.FC = (props) => {
  console.log('props',props);
  return (
    <>
     <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
    {/* <Outlet/> */}
    </>
  )
}

export default Nav
