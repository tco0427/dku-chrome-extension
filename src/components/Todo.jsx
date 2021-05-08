import React from 'react';
import styled from 'styled-components';
import TodoContainer from './TodoContainer';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <TodoApp>
      <TodoContainer>
        <TodoInsert />
        <TodoList />
      </TodoContainer>
    </TodoApp>
  );
};

// 다른 변수명 사용
const TodoApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  border-radius: 4px;
`;

export default Todo;
