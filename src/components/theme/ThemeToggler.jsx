import React, { useState, useEffect } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import PropTypes from 'prop-types';
import AppContext from '../../app/AppContext';

function ThemeToggler(props) {
  const { onClick } = props;

  const [theme, settheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  const handleOnChange = (darkMode) => {
    settheme(theme === "dark" ? "light" : "dark");
    darkMode.toggle();
    onClick();
  };

  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div style={{ marginBottom: 8 }}>
            <DarkModeToggle
              onChange={() => handleOnChange(values.darkMode)}
              checked={values.darkMode.value}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func,
};
ThemeToggler.defaultProps = {
  onClick: () => {},
};

export default ThemeToggler;
