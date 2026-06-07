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