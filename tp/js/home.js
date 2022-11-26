let button    = document.getElementById('theme')
  , navbar    = document.getElementById('header')
  , bgColor   = document.getElementById('background')
  , firstImg  = document.getElementById('first-image')
  , secondImg = document.getElementById('second-image')
  , thirdImg  = document.getElementById('third-image')
  , formItems = document.getElementsByClassName('input');

let actualTheme = 'dark'; // true: dark theme; false: light theme

// Saca las clases bg-light y agrega bg-dark
button.addEventListener('click', () => {
  // Aplica el inverso del tema actual
  setTheme([bgColor, navbar, formItems]);
});

const setTheme = (elements) => {
  // El tema inverso al actual 
  let themeToApply = actualTheme == 'dark' ? 'light' : 'dark';
  
  elements.forEach((element) => {
    if (notNull(element)) {
      // Aplica el tema {themeToApply} a {element}, quitando {themeApplied}
      modifyElement(element, actualTheme, themeToApply);
    }
  });

  // Acá no paso las imágenes, sólo el tema a aplicar
  if (notNull(firstImg))
    changeImages(themeToApply);

  // Acá cambio el color de la fuente, la clase datos
  changeFontColor(themeToApply);

  // Setea el boton con el emoji del tema inverso
  button.text = actualTheme == 'light' ? '🌞' : '🌙';
  actualTheme = actualTheme == 'light' ? 'dark' : 'light';
};

const notNull = (item) => {
  return (item !== undefined) && (item !== null);
}

const modifyElement = (element, themeApplied, themeToApply) => {
  // Lista de clases
  let classList = element.classList;

  // Saca el {tema actual} y reemplaza por {tema inverso}
  if (classList.contains(`navbar-${themeApplied}`)) {
    classList.remove(`navbar-${themeApplied}`);
    classList.add(`navbar-${themeToApply}`);
  }
  
  classList.remove(`bg-${themeApplied}`);
  classList.add(`bg-${themeToApply}`);
};

const changeImages = (themeToApply) => {
  firstImg.src  = `./img/1-${themeToApply}.jpg`;
  secondImg.src = `./img/2-${themeToApply}.jpg`;
  thirdImg.src  = `./img/3-${themeToApply}.jpg`;
};

const changeFontColor = (themeToApply) => {
  // Llamo la clase
  let fonts = document.getElementsByClassName('datos');

  for (let i = 0; i < fonts.length; i++) {
    fonts[i].style.color = themeToApply == 'dark' ? '#adb5bd' : '#1e1e1f';
  }
};