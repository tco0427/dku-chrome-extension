import React from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';

const ICON = ['📓', '📕', '📒', '📙', '📘', '📗'];

const TodoList = ({ todos, removeSubjectHandler, addDetailHandler }) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id}>
        <TodoTitle>
          <TodoIcon>{ICON[todo.id % 6]}</TodoIcon>
          {todo.title}
        </TodoTitle>
        <DetailsButton
          onClick={() =>
            addDetailHandler({
              todoItem: todo,
              todoId: todo.id,
              subjectDetail: todo.children,
            })
          }
        >
          <IoIosAddCircle size="24" />
        </DetailsButton>
        <DeleteButton
          onClick={() => removeSubjectHandler({ subjectId: todo.id })}
        >
          ❌
        </DeleteButton>
      </Todo>
    ))}
  </div>
);
const DetailsButton = styled.div`
  color: green;
`;
const TodoIcon = styled.div`
  margin-right: 10px;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  display: flex;
`;

const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
  padding: 16px;
`;

const DeleteButton = styled.div`
  color: red;
`;

export default TodoList;
