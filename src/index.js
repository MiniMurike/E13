window.onload = () => {
  let data = null;
  fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((x) => {
        data = x;
        main(data);
      })
      .catch((e) => {
        console.log(e);
      });
};

/**
 * Основная функция скрипта
 * @param {array} data Массив словарей, полученных с "БД"
 * @return {void}
 */
function main(data) {
  data.forEach(function(item) {
    const element = document.createElement('div');
    element.innerHTML = '' +
        `<h2>${item.title}</h2>` +
        `<h3>${item.content}</h3>`;
    document.body.appendChild(element);
  });
}
