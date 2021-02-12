const saveData = data => {
  window.localStorage.setItem('movies', JSON.stringify(data));
};
const getData = () => {
  return JSON.parse(window.localStorage.getItem('movies'));
};

export { saveData, getData };
