import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import COLOR from '../common/constants/index';
import themes from './theme';

const getDefaultColorMode = () => {
  const defaultColorMode = window.localStorage.getItem(COLOR.LOCAL_STORAGE_KEY);

  if (typeof defaultColorMode === 'string') {
    return defaultColorMode;
  }

  const defaultMediaQuery = window.matchMedia(COLOR.MEDIA_KEY);

  if (typeof defaultMediaQuery.matches === 'boolean')
    return defaultMediaQuery.matches ? COLOR.DARK_MODE : COLOR.LIGHT_MODE;

  return COLOR.LIGHT_MODE;
};

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(COLOR.LIGHT_MODE);

  useEffect(() => {
    setTheme(getDefaultColorMode());
  }, []);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Provider;
