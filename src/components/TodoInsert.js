import React from 'react';
import { MdAdd } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components';

const Insert = styled.form`
  display: flex;
  background: #495057;
`;

const TodoInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const InsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = () => {
  return (
    <Insert>
      <TodoInput placeholder="할 일을 등록하세요." />
      <InsertButton type="submit">
        <MdAdd />
      </InsertButton>
    </Insert>
  );
};

export default TodoInsert;
