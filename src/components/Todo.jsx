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

// 다른 변수명 사용
const App = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  border-radius: 4px;
`;

export default Todo;
