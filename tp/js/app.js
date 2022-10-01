let button = document.getElementById('theme')
  , navbar = document.getElementById('header')
  , bgColor = document.getElementById('background');

let actualTheme = true; // true: dark theme; false: light theme

const getInverseTheme = () => {
  return !actualTheme ? 'dark' : 'light';
}

const getActualTheme = () => {
  return actualTheme ? 'dark' : 'light';
}

const setTheme = (elements) => {
  elements.forEach((element) => {
    // Lista de clases
    let classList    = element.classList
      , themeToApply = getInverseTheme()
      , themeApplied = getActualTheme()

    if (classList.contains(`navbar-${themeApplied}`)) {
      classList.remove(`navbar-${themeApplied}`);
      classList.add(`navbar-${themeToApply}`);
    }
    
    classList.remove(`bg-${themeApplied}`);
    classList.add(`bg-${themeToApply}`);
  });

  // Setea el boton con el tema contrario
  button.text = getInverseTheme() == 'light' ? '🌙' : '🌞';
  actualTheme = !actualTheme;
};

/*
if (classList.contains('navbar-dark')) {
      classList.remove('navbar-dark');
      classList.add('navbar-light');
    }
    
    classList.remove(`bg-dark`);
    classList.add(`bg-light`);
*/

// Saca las clases bg-light y agrega bg-dark
button.addEventListener('click', () => {
  // Aplica el inverso del tema actual
  setTheme([bgColor, navbar]);
})