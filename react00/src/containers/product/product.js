import React, {Component} from 'react';
import Documentation from '~/components/documentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getTime(),
    }
  }
  componentWillUnmount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  // 生命周期： 组件将要挂载。
  componentWillMount() {
    this.setState({
      time: new Date().getTime(),
    })
  }
  render() {
    return (
      <div>
        <div>product+ {this.state.time}</div>
      </div>
    );
  }
}

export default Product;
