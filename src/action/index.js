
export const update = (code) => ({
  code,
  type: 'UPDATE'
});

export const generate = () => ({
  type: 'GENERATE'
});

export const toggleOptions = () => ({
  type: 'TOGGLE_OPTIONS'
});

export const changeOptions = (name) => ({
  name,
  type: 'CHANGE_OPTIONS'
});

export const setOptions = (options) => ({
  options,
  type: 'SET_OPTIONS'
});
