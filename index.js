import React, { createContext, useContext, useState } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const { children, theme } = props;

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const makeStyles = (styles) => {
  return () => {
    const { theme } = useContext(ThemeContext);
    return StyleSheet.create(styles(theme));
  };
};

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
