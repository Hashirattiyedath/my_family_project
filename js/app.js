
//===============> Hamburger Menu <==============//
let toggle_menu = document.querySelector('.toggle_menu');
let nav_list = document.querySelector('.nav_list');

toggle_menu.addEventListener('click', function () {
    nav_list.classList.toggle('active')
    this.classList.toggle('change')
})


//===============> Logo animation <==============//
function gsapFun() {
    let tl = gsap.timeline({
        opacity: 0,
        delay: 1
    });    
    
    tl.from("#main-head", {scale: 0, duration: 1.1, transformOrigin: 'center'})
    .from("#main_x5F_hand", {scaleX: 0, scaleY: 0, duration: 3, transformOrigin: 'top'})
    .from(".peoples", {scale: 0, transformOrigin: 'center', stagger: 0.6, ease: Back.easeOut.config(2)})
    
    
    let spelling = gsap.timeline({
        opacity: 0,
        delay: 7
    });   
    spelling.from("#letter-1", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-2", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-3", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-4", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-5", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-6", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-7", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
    .from("#letter-8", {scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2)})
}



//===============> Preloader script <==============//
var loadingVar;
let preloader__wrapper = document.querySelector('.preloader__wrapper');
let preloader__img = document.querySelector('.preloader__img');

window.addEventListener('load', () => {
    loadingVar = setTimeout(showPage, 850)
})

const showPage = () => {
    preloader__wrapper.classList.add("bg_done");
    preloader__img.classList.add("loader_done");

        //====> enable GSAP
        gsapFun()
        
        //====> enable WOW
        new WOW().init();
}
