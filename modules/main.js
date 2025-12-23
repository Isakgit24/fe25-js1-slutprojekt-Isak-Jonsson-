import { getPop, getTop, search, imgForSlideshow } from "./api.js";
import { slideshow } from "./slideShow.js";

const nameForm = document.querySelector('#nameForm')
const sh = document.querySelector('#sh')
const topBtn = document.querySelector('#topBtn')
const popBtn = document.querySelector('#PopBtn')
const popOrTop = document.querySelector('#popOrTop')

slideshow()
imgForSlideshow()

topBtn.addEventListener('click', e => {
    e.preventDefault
    getTop()
    popOrTop.innerHTML = ' '
    sh.innerHTML = ' '
    sh.classList.remove('redBorder')
    const h1 = document.createElement('h1')
     h1.classList.add('topH1')
    h1.innerText = 'Top Rated Movies';
    popOrTop.appendChild(h1)
})


popBtn.addEventListener('click', e => {
    e.preventDefault
    getPop()
popOrTop.innerHTML = ' '
sh.innerHTML = ' '
   sh.classList.remove('redBorder')
  const h1 = document.createElement('h1')
     h1.classList.add('topH1')
    h1.innerText = 'Populer Movies';
    popOrTop.appendChild(h1)
})


nameForm.addEventListener('submit', e => {
    e.preventDefault()
    let searchRes = nameForm.Search.value

    sh.classList.add('redBorder')




search(searchRes)

sh.innerHTML = 'Search Result'


})
  