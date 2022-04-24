import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
// tslrfc	无状态的函数式react组件  快捷键
interface IAppProps {
}

// 生成Button组件
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const theme = {
  main: "mediumseagreen"
};

const StyledComponents: React.FC = (props) => {
  return (
    <div>
      <Button>Normal</Button>
  
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
};

export default StyledComponents;
