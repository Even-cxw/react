import React, { FC, useMemo, Suspense, useRef, useState, createContext } from 'react';
import './App.less';
import { Result, ConfigProvider, Spin } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { HEADER_HEIGHT } from '../config/ui';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StoreContext } from './utils/context';
import AlertMonitorCreateAndEdit from './components/MonitorCreateAndEdit';
import Table from './components/Table/Table';
import EditTable from './components/Table/EditTable';
import Filter from './components/Table/Filter'
import PackageTable from './components/Table/PackageTable'
import Nav from './components/Nav';
import NotFound from './components/NotFound/notFound';
import Login from './components/Login/login'
import Pagination from './components/Pagination/Pagination'
import {useStore,store, Itheme} from './store';

function onError(err: Error) {
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

const App: FC = (props) => {
  // loading要挂在的位置
  const alertConfigProvider = useRef<HTMLDivElement>(null);
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  console.log('pathname', pathname);
  let [theme] = useStore<Itheme>(store, 'theme');
  const renderAlertRoutes = useMemo(() => {
    return (
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Nav />}>
          {/* <Route index element={<AlertMonitorCreateAndEdit/>}></Route> */}
          <Route path="/monitor/cae" element={<AlertMonitorCreateAndEdit />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/Pagination" element={<Pagination />}></Route>
          <Route path="/editTable" element={<EditTable />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
          <Route path="/packageTable" element={<PackageTable />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/404" element={<NotFound />}></Route>
      </Routes>
    )
  }, [])


  // 路由组件
  const renderBrowser = useMemo(() => {
    return (
      /**浏览器模式 */
      <BrowserRouter basename={'/'}>
        {/**容错组件 */}
        <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
          {/**类似vue-bus组件，注入数据状态 */}
          <StoreContext.Provider value={store}>
            <ThemeProvider theme={theme as DefaultTheme}>
              {/**antd全局组件设置 eg:loading位置等 */}
              <ConfigProvider getPopupContainer={() => alertConfigProvider.current || document.body}>
                <div ref={alertConfigProvider}>
                  {/**组件懒加载时 提供loading */}
                  <Suspense fallback={<Spin />}>{renderAlertRoutes}</Suspense>
                  {/* {<NotFound></NotFound>} */}
                </div>
              </ConfigProvider>
            </ThemeProvider>
          </StoreContext.Provider>
        </ErrorBoundary>
      </BrowserRouter>
    )
  }, [])


  return (
    <div>{renderBrowser}</div>
  )
};

export default App;
