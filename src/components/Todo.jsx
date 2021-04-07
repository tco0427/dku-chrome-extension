import React from 'react';
import styled from 'styled-components';

const Todo = () => {
  return (
    <App>
      <header className="App-header">
        <h1 className="App-title">DKU Chrome Extension</h1>
      </header>
      <p className="App-intro">단국대학교 크롬 익스텐션 입니다.</p>
    </App>
  );
};

const App = styled.div`
  width: 512px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  border-radius: 4px;
`;

export default Todo;
