const calcRem = (pxSize) => `${pxSize / 16}rem`;

const size = {
  // responsive size
};

const colors = {
  // color to use
};

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
  calcRem,
  size,
  flexSet,
  flexColumnSet,
  colors,
};

export default theme;
