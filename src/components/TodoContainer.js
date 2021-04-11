import React from 'react';

import styled from 'styled-components';

const TodoContainer = ({ children }) => {
  return (
    <Container>
      <AppTitle>할 일 목록</AppTitle>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 512px;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 60px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
`;

export default TodoContainer;
