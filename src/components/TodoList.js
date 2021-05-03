import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItems
          todos={todos}
          todo={todo}
          key={todo.id}
          text={todo.text}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
