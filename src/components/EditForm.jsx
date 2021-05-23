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

    const newTodos = todos.map(item => {
      if (item.id === todoId) {
        return {
          ...item,
          id: todoId,
          title: editInput,
          editSpace: false,
          completed: todoCompleted,
          children: todoChildren,
        };
      }
      return item;
    });
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodos));
    setTodos(newTodos);
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

const EditButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  color: purple;
`;

export default EditForm;
