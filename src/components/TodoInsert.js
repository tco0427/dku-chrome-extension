import React, { useRef } from 'react';
import { MdAdd as AddButtonIcon } from 'react-icons/md';
import styled from 'styled-components';

const TodoForm = () => {
  let todoList = ['오픈소스'];
  const todoInput = useRef(null);
  const addTodo = () => {
    const output = localStorage.getItem('todoList');
    const localTodoList = JSON.parse(output);
    if (localTodoList == null) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    } else {
      todoList = localTodoList;
    }
    todoList.push(todoInput.current.value);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    todoInput.current.value = '';
  };
  return (
    <TodoFormWrapper>
      <Input
        id="input"
        type="text"
        placeholder="할 일을 등록하세요."
        ref={todoInput}
      />
      <InsertButton onClick={addTodo}>
        <AddButtonIcon />
      </InsertButton>
    </TodoFormWrapper>
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
  color: black; //아래 InsertButton처럼 적용을 했을 때 글씨가 왜인지 white로 보이네요..한 번 check해주시면 감사하겠습니다.
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
    background-color: ${({ theme }) => theme.primaryTintColor};
  }
`;

export default TodoForm;
