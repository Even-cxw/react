import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter,Link, Route,Switch } from 'react-router-dom';
import Alert from '../Alert/Alert'
import UseMemo from '../UseMemo/index02'
import UseRef from '../UseRef'
import ReactMemo from '../ReactMemo'
import UseContext from '../UseContext'
import ReactRouterDom from '../ReactRouterDom'
import UseEffect from '../UseEffect'
import CreateContext from '../CreateContext'
import StyledComponents from '../StyledComponents'
import UseRaf from '../../reactUse/UseRaf'

// StyledComponents
const App:React.FC<any> =  () => {
  const [pathname, setPathname] = useState<string>(window.location.pathname);
  const activeBaseName = useMemo<string>(() => pathname.split('/')[1], [pathname]);
  useEffect(() => {
    console.log('activeBaseName', activeBaseName);
  })
  return (
    <BrowserRouter>
    <div className='content'>
      <div className='left'>
        <Link to="/useMemo">useMemo实践</Link>
        <Link to="/useRef">useRef实践</Link>
        <Link to="/reactMemo">ReactMemo实践</Link>
        <Link to="/useContext">UseContext实践</Link>
        <Link to={`/ReactRouterDom/${11111}?name='Even'`}>ReactRouterDom实践</Link>
        <Link to="/UseEffect">UseEffect实践</Link>
        <Link to="/CreateContext">CreateContext实践</Link>
        <Link to="/StyledComponents">StyledComponents实践</Link>
        <Link to="/UseRaf">UseRaf</Link>

      </div>
      <div className='right'>
        <Switch>
          <Route path="/useMemo" component={UseMemo} />
          <Route path="/useRef" component={UseRef} />
          <Route path="/reactMemo" component={ReactMemo} />
          <Route path="/useContext" component={UseContext} />
          <Route path="/ReactRouterDom/:slug" component={ReactRouterDom} />
          <Route path="/UseEffect" component={UseEffect} />
          <Route path="/CreateContext" component={CreateContext} />
          <Route path="/StyledComponents" component={StyledComponents} />
          <Route path="/UseRaf" component={UseRaf} />
          
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
