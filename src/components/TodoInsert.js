import React from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const TodoInsert = () => {
  return (
    <Insert>
      <Input placeholder="할 일을 등록하세요." />
      <InsertButton type="submit">
        <MdAdd />
      </InsertButton>
    </Insert>
  );
};

const Insert = styled.form`
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

const InsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

export default TodoInsert;
