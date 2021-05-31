import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import SubjectForm from './SubjectForm';
import { TODO_LIST_KEY } from '../common/constants/index';

const EditForm = ({
  todos,
  setTodos,
  todoId,
  todoEditSpace,
  todoCompleted,
  todoChildren,
  addSubjectHandler,
}) => {
  const [editInput, setEditInput] = useState('');

  const handleEditedTitleChange = e => {
    e.preventDefault();
    setEditInput(e.target.value);
  };

  const editSubmitHandler = () => {
    if (!editInput) {
      window.alert('수정할 내용을 입력하세요');
      return;
    }

    setTodos(prev => {
      const newTodos = prev.map(v =>
        v.id === todoId
          ? { ...v, children: v.children, title: editInput, editSpace: false }
          : v,
      );
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <Form>
      <Input
        placeholder="수정할 내용을 입력하세요"
        onChange={handleEditedTitleChange}
      />
      <EditButton onClick={editSubmitHandler}>완료</EditButton>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 4px;
  font-size: 14px;
  color: black;
  height: 24p
  border-radius: 16px;
  border: none;
  border-bottom: 1px solid #eee;
`;

const EditButton = styled.div`
  cursor: pointer;
  width: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default EditForm;
