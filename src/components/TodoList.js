import React from 'react';

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map(todo => (
        <div key={todos}>{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;
