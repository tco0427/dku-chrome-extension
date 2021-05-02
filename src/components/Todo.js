import React, { useRef, useState, useEffect } from 'react';
import { MdAdd as AddButtonIcon } from 'react-icons/md';
import styled from 'styled-components';
import { TODO_LIST_KEY } from '../common/constants/index';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  const deleteButtonClickHanlder = index =>
    setTodos(prev => prev.filter((v, i) => i !== index));

  useEffect(() => {
    const todosFromLocalStorageInString = localStorage.getItem(TODO_LIST_KEY);
    if (todosFromLocalStorageInString === null) return;
    const todosFromLocalStorageInObj = JSON.parse(
      todosFromLocalStorageInString,
    );
    setTodos(todosFromLocalStorageInObj);
  }, []);

  const onClickHandler = () => {
    const newTodo = todoInputRef.current.value;
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <>
      <TodoFormWrapper>
        <Input
          id="input"
          type="text"
          placeholder="할 일을 등록하세요."
          ref={todoInputRef}
        />
        <InsertButton onClick={onClickHandler}>
          <AddButtonIcon />
        </InsertButton>
      </TodoFormWrapper>
      <TodoList
        todos={todos}
        deleteButtonClickHanlder={deleteButtonClickHanlder}
      />
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
  color: black;
  flex: 1;
`;

const InsertButton = styled.div`
  color: ${({ theme }) => theme.textColor};
  padding-left: 16px;
  padding-right: 16px;
  font-size: 25px;
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
