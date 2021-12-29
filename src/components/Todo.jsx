import React from 'react';
import styled from 'styled-components';
import TodoContainer from './TodoContainer';
import TodoInsert from './TodoInsert';
<<<<<<< HEAD
import TodoListItems from './TodoListItems';

const Todo = () => {
  return (
    <TodoApp>
      <TodoContainer>
        <TodoInsert />
        <TodoListItems />
      </TodoContainer>
    </TodoApp>
  );
};
=======
import TodoList from './TodoList';

const Todo = () => (
  <TodoApp>
    <TodoContainer>
      <TodoInsert />
      <TodoList />
    </TodoContainer>
  </TodoApp>
);
>>>>>>> 54f98d41d9dc8e127ee610588138d8aec6bde4ac

const TodoApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  border-radius: 4px;
`;

export default Todo;
