const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const lateral = document.getElementById('lateral-activate');
const lateral_nav= document.getElementById('lateral-nav');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
burger.addEventListener('click', ()=>{
  ul.classList.toggle('show');
  burger.classList.toggle('change') 
});

lateral.addEventListener('click', ()=>{
  lateral.classList.toggle('activate-animation');
  lateral_nav.classList.toggle('show-side');
  btn.classList.toggle('show-text');
  btn1.classList.toggle('show-text')
  btn2.classList.toggle('show-text');
  btn3.classList.toggle('show-text');
  btn4.classList.toggle('show-text');
  btn5.classList.toggle('show-text');
  btn6.classList.toggle('show-text');
  btn7.classList.toggle('show-text');

});

