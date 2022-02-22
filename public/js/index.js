fetch("http://localhost:2220/search")
.then(response => response.json()
.then(data => { console.log(data);
  })
);

// , {
    // headers : { 
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    //  }
//   }