/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { MdAdd as AddButtonIcon } from 'react-icons/md';
import styled from 'styled-components';
import { TODO_LIST_KEY } from '../common/constants/index';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    const todosFromLocalStorageInString = localStorage.getItem(TODO_LIST_KEY);
    if (todosFromLocalStorageInString === null) return;
    const todosFromLocalStorageInObj = JSON.parse(
      todosFromLocalStorageInString,
    );
    setTodos(todosFromLocalStorageInObj);
  }, []);

  const inputTextHandler = e => {
    console.log(e.target.value);
    setTodoInput(e.target.value);
  };

  const onClickHandler = e => {
    e.preventDefault();
    const todoId = Date.now();
    setTodos(prev => [
      ...prev,
      { text: todoInput, content: '', completed: false, id: todoId },
    ]);
    setTodoInput('');
  };

  return (
    <>
      <TodoFormWrapper>
        <Input
          onChange={inputTextHandler}
          value={todoInput}
          id="input"
          type="text"
          placeholder="할 일을 등록하세요."
        />
        <InsertButton onClick={onClickHandler}>
          <AddButtonIcon />
        </InsertButton>
      </TodoFormWrapper>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Input = styled.input`
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
  margin 5px;
  color: black;
  flex: 1;
`;

const InsertButton = styled.div`
  color: ${({ theme }) => theme.textColor};
  padding-left: 15px;
  padding-right: 15px;
  font-size: 25px;
  margin: 5px;
  height: 55px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  background-color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background - color: ${({ theme }) => theme.primaryTintColor};
  }
`;

export default Todo;
