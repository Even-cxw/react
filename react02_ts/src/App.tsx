import React, { FC } from 'react';
import './App.less';
import { Result } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '@/config/ui';
function onError(err:Error) {
  console.error(err)
}

let FallbackComponentContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - ${HEADER_HEIGHT}px);
`

const FallbackComponent = () => {
  return (
    <FallbackComponentContainer>
      <Result status={500} subTitle="哔哔哔... 貌似出了一些问题" />
    </FallbackComponentContainer>
  );
};

const App: FC = () => (
  <div className="App">
    <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>

    </ErrorBoundary>
  </div>
);

export default App;
