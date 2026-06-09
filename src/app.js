const accor = document.querySelectorAll('.accor')
const hamber=document.querySelector('.hamber')
const nav = document.querySelector('.nav')
const divhamber=document.querySelector('.divhamber')



hamber.addEventListener('click', () => {
  if(window.innerWidth >= 1024) return
 
  nav.classList.toggle('opacity-0');
  nav.classList.toggle('invisible');
  nav.classList.toggle('-translate-y-3');
 hamber.classList.toggle('icon-hamburger-menu-linear');
  hamber.classList.toggle('icon-close-linear');

  const submenu = accor.nextElementSibling
  submenu.style.maxHeight=submenu.scrollHeight+"px"
  
});
 console.log(window.innerWidth)
accor.forEach(item=>{
    item.addEventListener('click',(e)=>{
         if (window.innerWidth >= 1024) return;
        e.preventDefault()
        const menu= item.nextElementSibling
        const icon = item.querySelector('.icon-arrow-2-down-linear')
        if(menu.style.maxHeight){
            menu.style.maxHeight=null
            icon.classList.remove('rotate-180')
        }else{
            menu.style.maxHeight=menu.scrollHeight +'px'
            icon.classList.add('rotate-180')
        }
    })
})

/////////////////////////////////////

const head = document.getElementById("head");

window.addEventListener("scroll", () => {
  head.classList.toggle("py-4", window.scrollY > 50);
});


//////////////slider/////////////////

const swiper = new Swiper(".mySwipper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: false,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "slide",

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },

 
  
});

//////////////////////////////////////

const slider = document.querySelector(".category-slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});