fetch('/getPhoto')
  .then((response) => response.json()
    .then((data) => {
      data.forEach((element) => {
        const photo1 = document.createElement('img');
        photo1.src = element.urls.full;
        photo1.setAttribute('class', 'photo');
        image.appendChild(photo1);
      });
    }));
window.addEventListener('scroll', () => {
  if (inputValue.value === '') {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable) {
      fetch('/getPhoto')
        .then((response) => response.json()
          .then((data) => {
            data.forEach((element) => {
              const photo1 = document.createElement('img');
              photo1.src = element.urls.full;
              photo1.setAttribute('class', 'photo');
              image.appendChild(photo1);
            });
          }));
    }
  }
});
