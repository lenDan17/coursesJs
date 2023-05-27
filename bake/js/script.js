// burger
const getBurger = document.querySelector('.header__burger');
if (getBurger) {
    const navigation = document.querySelector('.header__navigation')
    getBurger.addEventListener("click", function (e){
        getBurger.classList.toggle('_active')
        navigation.classList.toggle('_active')
    } )
}
//==========================================================
//swipper section 2 escolha================================
//==========================================================
const escolhaSwiper = new Swiper('.escolha__swiper', {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    
    navigation: {
      nextEl: '.escolha__button-next',
      prevEl: '.escolha__button-prev',
    },
    breakpoints: {
      998: {
          slidesPerView: 3, 
      },
      778: {
          slidesPerView: 2,  
      },
      320: {
          slidesPerView: 1,   
      },

  }
   
  });
  //===================ana galeria

let image = document.querySelectorAll('.ana__img')
let i = 0
function getShow() {
    if(i === image.length -1){
        image[i].style.display = 'none'
        i = 0
        image[0].style.display = 'block'
    }
    else{
        image[i].style.display = 'none'  
        image[i+1].style.display = 'block' 
        i++ 
    }
}
setInterval(getShow, 3000)
//   console.log(slideShow());

// footer=========================
let titles = Array.from( document.querySelectorAll('.footer__title'))
console.log(titles)

for (const title of titles) {
    title.addEventListener('click',() => {
        title.nextElementSibling.classList.toggle('active')
    })
    
}