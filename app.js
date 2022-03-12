
let bars = document.getElementById('bars');
let sidebar = document.querySelector('.sidebar');
bars.addEventListener("click", openMenu);



function openMenu(){
  
    $('.sidebar').show();
sidebar.classList.add('open-bar')

}