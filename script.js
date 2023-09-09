
let srbtn = document.getElementById('searchBtn')
let searchInput = document.getElementById('searchInput')


srbtn.onclick = ()=> {
    if (searchInput.style.display === "block") {
        searchInput.style.display = "none"
    }
    else{
        searchInput.style.display = "block"
    }
}




/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }