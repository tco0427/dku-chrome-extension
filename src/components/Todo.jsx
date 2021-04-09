import React from 'react';
import styled from 'styled-components';
import TodoContainer from './TodoContainer';
import TodoInsert from './TodoInsert';

const Todo = () => {
  return (
    <App>
      <TodoContainer>
        <TodoInsert />
      </TodoContainer>
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
