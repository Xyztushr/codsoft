const nav = document.querySelector("#nav-zone")
const body = document.querySelector("header")

const Open = () =>{
    body.style.display = 'none'
    nav.style.display = 'flex'
}
const Close = () =>{
    body.style.display = 'block'
    nav.style.display = 'none'
}