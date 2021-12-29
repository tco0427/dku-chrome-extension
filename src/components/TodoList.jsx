import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import moment from 'moment';
import EditForm from './EditForm';

const re = require('@alexfrankcodes/random-emoji');

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
        <Header>
          <TodoTitle isDone={todo.completed}>
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
          <DoneButton>{todo.completed ? '✅' : ''}</DoneButton>
        </Header>
        <DDay>
          D -{' '}
          {Math.abs(
            Math.floor(
              moment.duration(moment(Date.now()).diff(todo.end_at)).asDays(),
            ),
          )}
        </DDay>

        <ActionButtonContainer>
          {todo.completed ? null : (
            <CompleteButton
              onClick={() => checkSubjectHandler({ subjectId: todo.id })}
            >
              완료
            </CompleteButton>
          )}
          <EditButton
            onClick={() =>
              addDetailHandler({
                todoItem: todo,
              })
            }
          >
            메모
          </EditButton>
          <EditButton
            onClick={() =>
              editSpaceIsVisibleHandler({
                subjectId: todo.id,
              })
            }
          >
            수정
          </EditButton>
          <DeleteButton
            onClick={() => removeSubjectHandler({ subjectId: todo.id })}
          >
            삭제
          </DeleteButton>
        </ActionButtonContainer>
        {todo.children.map(val => (
          <Child key={val}>
            {re.random()}
            {val}
          </Child>
        ))}
      </Todo>
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

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Child = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 15px;
  padding: 0 16px;
`;

const DoneButton = styled.div`
  margin-left: 6px;
`;

const TodoIcon = styled.div`
  margin-right: 10px;
`;

const DDay = styled.div`
  margin-left: 6px;
  font-weight: bold;
  font-size: 18px;
  color: red;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  text-decoration-line: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  algin-items: center;
`;

const Todo = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 120px;
  padding: 8px;
`;

const DeleteButton = styled.div`
  padding: 6px;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  color: red;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  right: 0px;
  justify-content: space-evenly;
  height: 120px;
  display: flex;
  flex-direction: column;
`;

const CompleteButton = styled.div`
  background-color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 6px;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
`;

const EditButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 6px;
  text-align: center;
  line-height: 14px;
  font-size: 14px;
`;

export default TodoList;
