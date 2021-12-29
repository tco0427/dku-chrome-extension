import React from 'react';
import styled from 'styled-components';

const TodoListItems = () => {
  let todoList = [];
  const localTodoList = localStorage.getItem('todoList');
  todoList = localTodoList;
  const todoItems = todoList.map(todo => <li key={todo.id}> {todo}</li>);
  return (
    <TodoListWrapper>
      <ul>{todoItems}</ul>
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default TodoListItems;
