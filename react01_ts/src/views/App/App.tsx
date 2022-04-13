import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import { BrowserRouter,Link, Route,Switch } from 'react-router-dom';
import Alert from '../Alert/Alert'
import UseMemo from '../UseMemo/index'
import UseRef from '../UseRef'
import ReactMemo from '../ReactMemo'
import UseContext from '../UseContext'
import ReactRouterDom from '../ReactRouterDom'
import UseEffect from '../UseEffect'


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
        <Link to="/UseEffect">UseEffect</Link>

      </div>
      <div className='right'>
        <Switch>
          <Route path="/useMemo" component={UseMemo} />
          <Route path="/useRef" component={UseRef} />
          <Route path="/reactMemo" component={ReactMemo} />
          <Route path="/useContext" component={UseContext} />
          <Route path="/ReactRouterDom/:slug" component={ReactRouterDom} />
          <Route path="/UseEffect" component={UseEffect} />

        </Switch>
      </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
