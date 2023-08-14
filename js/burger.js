var burger=document.querySelector('.burger');
var navbar2=document.querySelector('.navbar2-ii');
var background2=document.querySelector('.background2');
burger.addEventListener('click',()=>{
    navbar2.style.transition='width 0.5s linear 0s';
    background2.style.transition='width 0.5s linear 0s';
    if(burger.innerHTML=='Menu' || navbar2.style.width=='0'){
        burger.innerHTML='Close';
        navbar2.style.width='300px';
        background2.style.opacity='0.2';
        background2.style.zIndex='3';
    }
    else{
        burger.innerHTML='Menu';
        navbar2.style.width='0';
        background2.style.opacity='0';
        background2.style.zIndex='0';
    }
});