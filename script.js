const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// this line code when we click search bar it will be active response

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})