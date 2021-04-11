import React from 'react';
import styled from 'styled-components';
import ThemeProvider from '../provider/ThemeProvider';
import Todo from './Todo';

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Todo />
        {/* <TodoList /> */}
      </AppWrapper>
    </ThemeProvider>
  );
};

// global style
const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  z-index: 21474836456;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  position: fixed;
  width: 50%;
`;

export default App;
