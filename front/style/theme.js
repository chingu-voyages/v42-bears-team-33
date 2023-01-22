const size = {
  mobile: '600px',
  desktop: '992px',
};

const media = {
  mobile: `screen and (max-width: ${size.mobile})`,
  desktop: `screen and (max-width: ${size.desktop})`,
};

const colors = {
  primary: '#f5f5f5',
  primaryDark: '#434343',
  button: '#1890ff',
};

const calcRem = (pxSize) => `${pxSize / 16}rem`;

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const theme = {
  media,
  colors,
  calcRem,
  flexSet,
  flexColumnSet,
};

export default theme;
