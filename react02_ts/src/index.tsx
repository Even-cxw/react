import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

axios({
  method: 'get',
  url: 'https://www.fastmock.site/mock/a7ee1b5f557457fbd73deb545a856747/base/test',
  responseType: 'json'
}).then(function (response) {
  console.log(response)
});
