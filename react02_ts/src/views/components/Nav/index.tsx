import { Layout, Menu, Button, MenuProps } from 'antd';
import Styled from 'styled-components'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React, { useCallback, useState } from 'react'
import { useNavigate,Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

let TitleContent = Styled.div`
display: flex;
align-items: center;
justify-content: center;
color:#fff
`


const Nav: React.FC = () => {
  let [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <MenuC handleCollapsed={{collapsed,setCollapsed}}></MenuC>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, height: 60 }}>
          <TitleContent>Even控制台</TitleContent>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            height: 'calc(100vh - 60px)',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Nav;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/monitor/cae', <PieChartOutlined />),
  getItem('table表单', 'subone', <DesktopOutlined />,[
    getItem('基本表单', '/table'),
    getItem('可编辑表单', '/editTable'),
    getItem('分页', '/Pagination'),
    getItem('测试filter', '/filter'),
  ]),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];


interface IMenuC {
  handleCollapsed:any
}

function useMenuC(props) {
  let {collapsed,setCollapsed} = props.handleCollapsed;
  let navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  let menuClick = useCallback(({ item, key, keyPath, domEvent }) => {
    console.log(111,{ item, key, keyPath, domEvent })
    navigate(key)
  },[])
  return (
    <div style={{ width: '100%', paddingTop: 60 }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        onClick={menuClick}
      />
    </div>
  );
}

const MenuC = React.memo(useMenuC)