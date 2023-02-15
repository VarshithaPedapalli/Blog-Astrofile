hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.nav-bar');
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});

// window.addEventListener('scroll', function(){
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky",this.window.scroll > 0);
// });
