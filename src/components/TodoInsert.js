import React from 'react';
import { MdAdd as AddButtonIcon } from 'react-icons/md';
import styled from 'styled-components';

const TodoForm = () => {
  return (
    <TodoFormWrapper>
      <Input placeholder="할 일을 등록하세요." />
      <InsertButton>
        <AddButtonIcon />
      </InsertButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
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
