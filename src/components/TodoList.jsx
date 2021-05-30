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
      <>
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
            <DoneButton>{todo.completed ? '✅' : ''}</DoneButton>
          </TodoTitle>
          <AddButton
            onClick={() =>
              addDetailHandler({
                todoItem: todo,
              })
            }
          >
            메모 작성
          </AddButton>
          <ActionButtonContainer>
            {todo.completed ? null : (
              <CompleteButton
                onClick={() => checkSubjectHandler({ subjectId: todo.id })}
              >
                완료
              </CompleteButton>
            )}
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
        {todo.children.map(val => (
          <Child>👉{val}</Child>
        ))}
      </>
    ))}
  </div>
);

const AddButton = styled.div`
  cursor: pointer;
  color: blue;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
`;

const Child = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 15px;
  font-weight: bold;
  padding: 0 16px;
`;

const DoneButton = styled.div`
  margin-left: 6px;
`;

const TodoIcon = styled.div`
  margin-right: 10px;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  algin-items: center;
`;

const Todo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 120px;
  padding: 8px;
`;

const DeleteButton = styled.div`
  padding: 8px;
  cursor: pointer;
  color: red;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  margin-top: 16px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 16px;
`;

const CompleteButton = styled.div`
  color: green;
  padding: 8px;
`;

const EditButton = styled.div`
  cursor: pointer;
  color: pink;
  padding: 8px;
`;

export default TodoList;
