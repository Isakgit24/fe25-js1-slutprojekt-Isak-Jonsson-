import { getPop, getTop, search } from "./api.js";
import { slideshow } from "./slideShow.js";

const nameForm = document.querySelector('#nameForm')
const sh = document.querySelector('#sh')
const scroll = document.querySelector('#scroll')
const topBtn = document.querySelector('#topBtn')

slideshow()
getPop()

topBtn.addEventListener('click', e => {
    e.preventDefault
    getTop()
})

function scroller() {
        scroll.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
    })
}
nameForm.addEventListener('submit', e => {
    e.preventDefault()
    let searchRes = nameForm.Search.value

    sh.classList.add('blueBorder')
   sh.classList.add('test')
scroller()

search(searchRes)

sh.innerHTML = 'Search Result'


})
  