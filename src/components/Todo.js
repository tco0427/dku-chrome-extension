import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubjectForm from './SubjectForm';
import { TODO_LIST_KEY } from '../common/constants/index';
import TodoList from './TodoList';
import Toggler from './Toggler';

const Todo = ({ toggleTheme }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosInString = localStorage.getItem(TODO_LIST_KEY);
    if (todosInString === null) return;
    const todosObj = JSON.parse(todosInString);
    setTodos(todosObj);
  }, []);

  const addSubjectHanlder = ({ subject }) => {
    if (!subject.title) {
      window.alert('과목명에 내용을 입력 해주세요 ');
      return;
    }
    if (!subject.end_at) {
      window.alert('마감일을 선택 해주세요 ');
      return;
    }

    setTodos(prevTodos => {
      const newTodos = [...prevTodos, subject];
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const checkSubjectHandler = ({ subjectId }) => {
    const isContinue = window.confirm('완료로 변경 하시겠어요?');

    if (!isContinue) return;

    setTodos(prev => {
      const newTodos = prev.map(item => {
        if (item.id === subjectId) {
          return { ...item, completed: true };
        }
        return item;
      });

      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const removeSubjectHandler = ({ subjectId }) => {
    const isContinue = window.confirm('정말로 삭제 하시겠어요?');

    if (!isContinue) return;

    setTodos(prev => {
      const removedTodos = prev.filter(v => v.id !== subjectId);
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(removedTodos));
      return removedTodos;
    });
  };

  const editSpaceIsVisibleHandler = ({ subjectId }) => {
    setTodos(
      todos.map(item => {
        if (item.id === subjectId) {
          return { ...item, editSpace: true };
        }
        return item;
      }),
    );
  };

  const addDetailHandler = ({ todoItem }) => {
    const val = window.prompt('메모를 작성 해주세요');
    if (!val) {
      alert('내용을 입력 해주세요');
      return;
    }
    setTodos(prev => {
      const newTodo = prev.map(item =>
        item.id === todoItem.id
          ? { ...item, children: [...item.children, val] }
          : item,
      );
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodo));
      return newTodo;
    });
  };

  return (
    <TodoConatiner>
      <Toggler toggleTheme={toggleTheme} />
      <SubjectForm addSubjectHanlder={addSubjectHanlder} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        editSpaceIsVisibleHandler={editSpaceIsVisibleHandler}
        addSubjectHanlder={addSubjectHanlder}
        removeSubjectHandler={removeSubjectHandler}
        addDetailHandler={addDetailHandler}
        checkSubjectHandler={checkSubjectHandler}
      />
    </TodoConatiner>
  );
};

const TodoConatiner = styled.div`
  width: 100%;
`;

export default Todo;
