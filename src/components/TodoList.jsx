import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import EditForm from './EditForm';

const ICON = ['📓', '📕', '📒', '📙', '📘', '📗'];

const TodoList = ({
  todos,
  setTodos,
  addSubjectHandler,
  editSpaceIsVisibleHandler,
  removeSubjectHandler,
  checkSubjectHandler,
  addDetailHandler,
}) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id}>
        <TodoTitle>
          <TodoIcon>{ICON[todo.id % 6]}</TodoIcon>
          {todo.editSpace ? (
            <EditForm
              todos={todos}
              setTodos={setTodos}
              todoId={todo.id}
              todoEditSpace={todo.editSpace}
              addSubjectHandler={addSubjectHandler}
            />
          ) : (
            todo.title
          )}
        </TodoTitle>

        {/* <CompleteButton
          onClick={() => checkSubjectHandler({ subjectId: todo.id })}
        >
          Check
        </CompleteButton> */}
        {/* <DetailButton
          onClick={() =>
            addDetailHandler({
              todoItem: todo,
              todoId: todo.id,
              subjectDetail: todo.children,
            })
          }
        >
          <IoIosAddCircle size="24" />
        </DetailButton> */}
        <ActionButtonContainer>
          <EditButton
            onClick={() => editSpaceIsVisibleHandler({ subjectId: todo.id })}
          >
            수정
          </EditButton>
          <DeleteButton
            onClick={() => removeSubjectHandler({ subjectId: todo.id })}
          >
            삭제
          </DeleteButton>
        </ActionButtonContainer>
      </Todo>
    ))}
  </div>
);

const DetailButton = styled.div`
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
  height: 60px;
  padding: 16px;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  color: red;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 16px;
`;

const CompleteButton = styled.div`
  color: green;
  padding-left: 40px;
  margin-left: 300px;
  align-items: center;
`;

const EditButton = styled.div`
  cursor: pointer;
  color: pink;
`;

export default TodoList;
