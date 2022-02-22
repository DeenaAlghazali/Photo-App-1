const inputValue=document.querySelector("#text")
const search = document.querySelector("#btn")




search.addEventListener("click",()=>{
  console.log(inputValue.value)
  fetch("http://localhost:2220/search",{
    method:"POST",
    body: inputValue.value
  })
  .then(response => response.json()
  .then(data => { console.log(data);
    })
  );
})




// , {
    // headers : { 
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    //  }
//   }