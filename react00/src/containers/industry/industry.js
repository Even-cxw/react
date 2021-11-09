import React, {Component} from 'react';
import Documentation from '~/components/documentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Industry extends Component {
  state = {
  };
  componentWillUnmount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  render() {
    return (
      <div>
        <div>industry</div>
      </div>
    );
  }
}

export default Industry;
