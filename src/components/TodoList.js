import React from 'react';
import styled from 'styled-components';

const TodoList = ({ todos, deleteButtonClickHanlder }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoContainer key={todo}>
          {todo}
          <TodoDeleteButton onClick={() => deleteButtonClickHanlder(index)}>
            삭제
          </TodoDeleteButton>
        </TodoContainer>
      ))}
    </div>
  );
};

const TodoContainer = styled.div`
  width: 300px;
  height: 54px;
  position: relative;
  padding: 16px;
`;

const TodoDeleteButton = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 16px;
  right: 16px;
  color: red;
`;

export default TodoList;
