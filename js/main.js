const menu=document.querySelector('.menu');
const burger=document.querySelector('.burger');
menu.addEventListener('click',function(){
    burger.classList.toggle('open');
    $('.nav-links').toggleClass('slide');
    
});
