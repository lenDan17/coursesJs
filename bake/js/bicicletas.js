// footer=========================
let titles = Array.from( document.querySelectorAll('.footer__title'))
console.log(titles)

for (const title of titles) {
    title.addEventListener('click',() => {
        title.nextElementSibling.classList.toggle('active')
    })
    
}