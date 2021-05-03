/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BiTrash, BiCheck } from 'react-icons/bi';

const TodoItems = ({ text, todos, todo, setTodos }) => {
  const [editedTodoInput, setEditedTodo] = useState('');

  const deleteButtonClickHandler = () =>
    setTodos(todos.filter(el => el.id !== todo.id));

  const checkButtonClickHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: true };
        }
        return item;
      }),
    );
  };

  const inputTodoItemHandler = e => {
    e.preventDefault();
    setEditedTodo(e.target.value);
    console.log(editedTodoInput);
  };

  return (
    <TodoListOuterContainer>
      <TodoListItem
        type="text"
        id={todo.id}
        defaultValue={text}
        onChange={inputTodoItemHandler}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            setTodos(
              todos.map(item => {
                if (item.id === todo.id) {
                  return { ...item, text: editedTodoInput };
                }
                return item;
              }),
            );
          }
        }}
      />
      <CompleteButton type="submit" onClick={checkButtonClickHandler}>
        <BiCheck
          name="completeButton"
          size={30}
          color="#00ff4c"
          padding={8}
          margin={7}
        />
      </CompleteButton>
      <DeleteButton type="submit" onClick={deleteButtonClickHandler}>
        <BiTrash
          name="deleteButton"
          size={30}
          color="#e33057"
          padding={8}
          margin={7}
        />
      </DeleteButton>
    </TodoListOuterContainer>
  );
};

const TodoListOuterContainer = styled.div`
  height: 65px;
  align-item: center;
  padding: 3px;
  margin-bottom: 12px;
`;

const TodoListItem = styled.input`
  padding: 10px;
  background-color: #ffffff;
  border: 0;
  height-width: 40px;
  margin-left: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.textColor};
  font-size: 25px;
  &: focus {
    outline: none;
  }
`;

const DeleteButton = styled.button`
  margin: 5px;
  margin-top: 12px;
  align-item: center;
`;

const CompleteButton = styled.button`
  margin-left: 5px;
  margin-right: 2px;
  margin-top: 12px;
  align-item: center;
`;

export default TodoItems;
