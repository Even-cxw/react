import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';
import Aheader from '../components/aheader';

@connect(
  // 将home模块注入props里；
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    // redux里大方法；
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    // 调用redux里的方法 changeRoute；
    changeRoute();
    history.push('/docs');
  }
  evenChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/even');
  }
  render() {
    // 解构movelogo变量；
    // console.log('this.props', this.props);
    const {home: {movelogo}} = this.props;
    return (
      //根元素
      <div className="app_wrap vw_100 vh_100">
        <Aheader/>
        {/* <div className={`center ${movelogo ? 'logo-move' : ''}`} onClick={this.evenChange}>
          <div className="logo-box">
            <img src={logo} className="logo" />
          </div>
          <h1>React Project</h1>
        </div> */}
        <div style={{width: '1000px', margin: '0 auto'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
