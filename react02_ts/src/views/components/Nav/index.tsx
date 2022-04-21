import React from 'react';
import { Routes, Route,BrowserRouter,Outlet} from 'react-router-dom';
import AlertMonitorCreateAndEdit from '../MonitorCreateAndEdit';


const Nav:React.FC = (props) => {
  console.log('props',props);
  return (
    <>
    <div>Nav</div>
    <Outlet/>
    </>
  )
}

export default Nav
