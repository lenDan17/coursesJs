let subTitle = Array.from( document.querySelectorAll('.perguntas__subtitle'))
console.log(subTitle)

for (const title of subTitle) {
    title.addEventListener('click',() => {
        title.nextElementSibling.classList.toggle('active')
    })
    
}

// footer
let titles = Array.from( document.querySelectorAll('.footer__title'))
console.log(titles)

for (const title of titles) {
    title.addEventListener('click',() => {
        title.nextElementSibling.classList.toggle('active')
    })
    
}