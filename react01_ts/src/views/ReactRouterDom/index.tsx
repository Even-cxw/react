
import React,{} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const ReactRouterDom:React.FC = () => {
    let history = useHistory();
    let location = useLocation();
    console.log('location',location);
    return (<div>
        React-router-dom
        <div onClick={() => {history.push("/useMemo")}}>利用useHistory跳转到其他页面</div>
    </div>)
}


export default ReactRouterDom;