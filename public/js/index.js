const inputValue = document.querySelector('#text');
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
        if (data.results.length > 0) {
          data.results.forEach((element) => {
            const photo = document.createElement('img');
            photo.src = element.urls.full;
            photo.setAttribute('class', 'photo');
            image.appendChild(photo);
          });
        } else {
          const h3 = document.createElement('h3');
          h3.textContent = `no photo about ${inputValue.value}`;
          image.appendChild(h3);
        }
      }));
});
