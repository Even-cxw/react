import React, {useContext} from 'react'
import { Result } from 'antd'
import {StoreContext} from '../../utils/context'
import NotFoundImage from '../../../assets/images/404.png'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

const TestTyle = styled.div`
color: ${props => props.theme['primary-color']}
`

const NotFound: React.FC = (props) => {
  let {state} = useContext(StoreContext)
  console.log('props',props);
  console.log('state',state);
  return (
    <>
    <TestTyle>niaho</TestTyle>
    <Result title="404" subTitle="您要访问的页面, 它去了遥远的星球, 暂时访问不了" icon={<img src={NotFoundImage} alt="404" />} />
    </>
  )
}

export default NotFound