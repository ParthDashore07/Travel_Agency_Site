let searchBtn = document.querySelector('#btn-search');
let searchBar = document.querySelector('.search-bar-container');
let FormBtn = document.querySelector('#btn-login');
let LoginForm = document.querySelector('.login-form-container');
let FormClose = document.querySelector('#close');
let MenuBar = document.querySelector('#menubar');
let NavBar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll= ()=>
{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');  
    LoginForm.classList.remove('active'); 
    MenuBar.classList.remove('fa-times');
    NavBar.classList.remove('active');
}

searchBtn.addEventListener('click', ()=>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
}); 

videoBtn.forEach(btn => {
    btn.addEventListener('click',()=>
    {
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#vid-slider').src= src;
    });
});

MenuBar.addEventListener('click', ()=>{
    MenuBar.classList.toggle('fa-times');
    NavBar.classList.toggle('active');
    }); 

FormBtn.addEventListener('click',()=>{
 LoginForm.classList.add('active');
});
FormClose.addEventListener('click',()=>{
    LoginForm.classList.remove('active');
   });