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
