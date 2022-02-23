const inputValue = document.querySelector('#text');
const search = document.querySelector('#btn');
const image = document.querySelector('.image');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  image.innerHTML = '';
  fetch('/search', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ search: inputValue.value }),
  })
    .then((response) => response.json()
      .then((data) => {
        data.results.forEach((element) => {
          const photo = document.createElement('img');
          photo.src = element.urls.full;
          photo.setAttribute('class', 'photo');
          image.appendChild(photo);
        });
      }));
});
