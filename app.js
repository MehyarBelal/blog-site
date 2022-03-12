
let bars = document.getElementById('bars');
let sidebar = document.querySelector('.sidebar');
bars.addEventListener("click", openMenu);

$('#btnclose').hide();
$('.sidebar').hide();

function openMenu(){
    sidebar.classList.remove('close-bar')
    $('.sidebar').show();
sidebar.classList.add('open-bar')
$('#btnclose').show();
}


$('#btnclose').click(function(){
    sidebar.classList.remove('open-bar')


   sidebar.classList.add('close-bar');
   $('#btnclose').hide();
})