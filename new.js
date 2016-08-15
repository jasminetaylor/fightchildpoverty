
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function changeimg1 (){
  var img = document.getElementById("F1");
  img.src = "F1.JPG";
}function changeimg2 (){
  var img = document.getElementById("F2");
  img.src = "F2.JPG";
}function changeimg3 (){
  var img = document.getElementById("F3");
  img.src = "F3.JPG";
}function changeimg4 (){
  var img = document.getElementById("F4");
  img.src = "F4.jpg";
}


