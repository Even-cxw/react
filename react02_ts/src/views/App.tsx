import React, { FC,useMemo,Suspense,useRef,useState } from 'react';
import './App.less';
import { Result,ConfigProvider,Spin } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../config/ui';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import AlertContext, { AlertContextState } from './utils/context';
import AlertMonitorCreateAndEdit from './components/MonitorCreateAndEdit';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function onError(err:Error) {
  console.error(err)
}

let FallbackComponentContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - ${HEADER_HEIGHT}px);
`

const FallbackComponent = () => {
  return (
    <FallbackComponentContainer>
      <Result status={500} subTitle="哔哔哔... 貌似出了一些问题" />
    </FallbackComponentContainer>
  );
};



const App:FC = (props) => {
  // loading要挂在的位置
  const alertConfigProvider = useRef<HTMLDivElement>(null);
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  console.log('pathname',pathname);
  // debugger;

  const renderAlertRoutes = useMemo(() => {
    return(
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<AlertMonitorCreateAndEdit/>}></Route>
          {/* <Route path="/monitor/cae" element={<AlertMonitorCreateAndEdit/>}></Route> */}
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
        <Route path="/404" element={<NotFound/>}></Route>
      </Routes>
    )
  },[])


  // 路由组件
  const renderBrowser = useMemo(() => {
    return(
    /**浏览器模式 */
    <BrowserRouter basename={'/'}>
      {/**容错组件 */}
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
        {/**类似vue-bus组件，注入数据状态 */}
        <AlertContext.Provider value={AlertContextState}>
          {/**antd全局组件设置 eg:loading位置等 */}
          <ConfigProvider  getPopupContainer={() => alertConfigProvider.current || document.body}>
            <div style={{height:'100%',width:'100%'}} ref={alertConfigProvider}>
              {/**react类似promise当接口调用时显示loading */}
              <Suspense fallback={<Spin />}>{renderAlertRoutes}</Suspense>
            </div>
          </ConfigProvider>
        </AlertContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
    )
  },[])



  return (
    <div>{renderBrowser}</div>
  )
};

export default App;
