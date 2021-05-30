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
        v.id === todoId ? { ...v, title: editInput, editSpace: false } : prev,
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
  width: 400px;
`;

const Input = styled.input`
  padding: 4px;
  width: 400px;
  font-size: 14px;
  color: black;
  height: 24p
  border-radius: 16px;
  border: none;
  border-bottom: 1px solid #eee;
`;

const EditButton = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: purple;
`;

export default EditForm;
