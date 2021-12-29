import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';
import COLOR from '../common/constants/index';

const Toggler = ({ toggleTheme }) => {
  const { mode } = React.useContext(ThemeContext);
  return (
    <TogglerContainer>
      <Title>단국대학교 학생을 위한 Todo List</Title>
      <TogglerSwitch
        onChange={toggleTheme}
        checked={mode === COLOR.DARK_MODE}
        size={40}
      />
    </TogglerContainer>
  );
};

const Title = styled.span`
  font-size: 22px;
  word-break: keep-all;
`;

const TogglerSwitch = styled(DarkModeToggle)`
  position: fixed;
  right: 10px;
  z-index: 99999;
`;

const TogglerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justfiy-content: space-between;
  padding: 16px;
`;

export default Toggler;
