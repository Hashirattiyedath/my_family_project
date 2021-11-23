
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

    tl.from("#main-head", { scale: 0, duration: 1.1, transformOrigin: 'center' })
        .from("#main_x5F_hand", { scaleX: 0, scaleY: 0, duration: 3, transformOrigin: 'top' })
        .from(".peoples", { scale: 0, transformOrigin: 'center', stagger: 0.6, ease: Back.easeOut.config(2) })


    let spelling = gsap.timeline({
        opacity: 0,
        delay: 7
    });
    spelling.from("#letter-1", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-2", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-3", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-4", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-5", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-6", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-7", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
        .from("#letter-8", { scale: 0, transformOrigin: 'center', ease: Back.easeOut.config(2) })
}

//===============> AOS initializtion <==============//
AOS.init();


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
    wow = new WOW(
        {
  animateClass: 'animated',
  offset:       100,
  callback:     function(box) {
  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
        }
      );
  wow.init();
  
}


//===============> Discover section searchbar <==============//
let AllLi = document.querySelectorAll('.discover_section');
console.log(AllLi);

let liOption = {
    root: null,
    rootMargin: '0px',
    threshold: '0.5',   // 0.5 = 50%;
    // 0.2 = 20%
} 						 // 0.9 = 90%

let liObserver = new IntersectionObserver(function (entries) {
    /*console.log(entries);*/
    entries.forEach(function (entry) {
        if (entry.isIntersecting === true) {
            document.querySelector('.search_input_wrapper').classList.toggle('fadez');
        }
        else { /*or false*/
            document.querySelector('.search_input_wrapper').classList.remove('fadez');
        }
    })
}, liOption);

AllLi.forEach((myList) => {
    liObserver.observe(myList);
})


var swiper = new Swiper('.stories_section .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    clickable: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     speed: 550,
     autoplay: {
       delay: 2000,
       disableOnInteraction: false
     },
     keyboard: {
        enabled: true,
      },
          breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
           
          },
          500: {
            slidesPerView: 1,
           
          },
          // when window width is >= 480px
          670: {
            slidesPerView: 2,
            spaceBetween: 9
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 992px
          992: {
            slidesPerView:3,
            spaceBetween: 20
          }
        }
  });

  $('.matrimony_content_area').tilt({
    glare: true,
    maxGlare: .5
})