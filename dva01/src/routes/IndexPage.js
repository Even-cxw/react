import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Table, Popconfirm, Button } from 'antd';

function IndexPage(props) {
  console.log('props',props)
  let {name, age, dispatch} = props;
  function plusAge() {
    dispatch({
      type: 'example/fetch', // 如果在 model 外调用，需要添加 namespace
      payload: {age:age+1}, // 需要传递的信息
    });
  }
  function reduceAge() {
    dispatch({
      type: 'example/add', // 如果在 model 外调用，需要添加 namespace
      payload: {age:age-1}, // 需要传递的信息
    });
  }
  return (
    <div className={styles.normal}>
      {name}的年龄是{age}
      <div>
        <Button onClick={plusAge}>+</Button>
        <Button onClick={reduceAge}>-</Button>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return state.example
}
// 状态与组件相互关联；
export default connect(mapStateToProps)(IndexPage);
