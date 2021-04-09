import React from 'react';
import ThemeProvider from '../provider/ThemeProvider';
import TodoContainer from './Todo';

const App = () => {
  return (
    <ThemeProvider>
      <TodoContainer />
    </ThemeProvider>
  );
};

export default App;
