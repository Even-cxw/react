import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router'; 
import * as homeActions from '../redux/reduces/home';
// 路由跳转使用
import { Link } from 'react-router-dom';
@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
// 为了解决hsitory.push 可以跳转到指定页面；
@withRouter
class Aheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {title:'产品服务', path: 'product', children: [
          {title: '车主服务', path: '/product'},
          {title: '客户运维', path: '/product'},
          {title: '查勘定损', path: '/product'},
          {title: '门店管理', path: '/product'}
        ]},
        {title:'行业方案', path: 'industry', children: [
          {title: '保险机构', path: '/industry'},
          {title: '银行机构', path: '/industry'},
          {title: '整车厂商', path: '/industry'},
          {title: '汽车服务商', path: '/industry'},
        ]},
        {title:'一路通科技', path: 'technology', children: [
          {title: '人工智能', path: '/technology'},
          {title: '图形识别', path: '/technology'},
          {title: '语音识别', path: '/technology'},
          {title: '隐私安全', path: '/technology'},
        ]},
        {title:'关于我们', path: 'about', children: [
          {title: '公司介绍', path: '/about'},
          {title: '合作加盟', path: '/about'},
          {title: '媒体报道', path: '/about'},
        ]},
      ]
    };
  }

  clickTopath(e, listItem) {
    let {history} = this.props;
    history.push({
      pathname: listItem.path,
      state: {key: 'value'},
    });
  }
  render() {
    const {Documentations} = this.state;
    return (
      <div className="header-wrap vw_100 fixed_lt background_black20">
        <div className="header-content f-c-c">
          {this.state.list.map((item, index) => {
            return (
              <div className="f_1 color_fff f-c-c" key={index} >
                <div className="py_20 px_20 pointer header-item">
                  {item.title}
                  <div className="header-list background_black20">
                    {
                      item.children.map((listItem, listIndex) => {
                        return (
                        <div key={listIndex} className="header-list-item flex_d_c p_y10 f-c-c my_20" onClick={(e) => {this.clickTopath(e,listItem)}}>{listItem.title}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}


export default Aheader;
