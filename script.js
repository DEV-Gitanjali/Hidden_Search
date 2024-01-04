const search=document.querySelector('.search')
const btn=document.querySelector('.btn')
const input =Document.querySelector('.input')



// this line code for when we toggle search bar it will be active
btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})