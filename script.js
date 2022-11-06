// sidebar
const bar = document.querySelector(".bar");
const cancel = document.querySelector(".cancel");
const sideBar = document.querySelector(".side-solid");


function barclick()  {
    bar.style.display = 'none'
    cancel.style.display = 'block'
    sideBar.style.display = 'block'
    
  }
  
  function closeclick() {
    cancel.style.display = 'none'
    bar.style.display = 'block'
    sideBar.style.display = 'none'
  }

  // sideBar ends 