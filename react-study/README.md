
react001 （react-router学习）
  - index.html：不使用react-router实现组件切换
  - 使用 IndexRoute 设置默认页面
    ```javascript
    <IndexRoute component={Dashboard} />
    ```
  - 绝对路径让UI从URL中解耦出来、使用绝对路径可以使路由匹配行为忽略嵌套关系。
  ```javascript
    {/* 使用 /messages/:id 替换 messages/:id */}
    <Route path="/messages/:id" component={Message} />
  ```
  - 兼容旧的 URL
  ```javascript
    <Route path="inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message} />
        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
        <Redirect from="messages/:id" to="/messages/:id" />
    </Route>
  ```
  - 路由钩子
  ```javascript
    import { Lifecycle } from 'react-router'
    const Home = React.createClass({
    // 假设 Home 是一个 route 组件，它可能会使用
    // Lifecycle mixin 去获得一个 routerWillLeave 方法。
    mixins: [ Lifecycle ],
    routerWillLeave(nextLocation) {
        if (!this.state.isSaved)
        return 'Your work is not saved! Are you sure you want to leave?'
    },
    })
  ```