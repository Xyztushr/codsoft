let nav = document.querySelector("#nav-menu")
const menu = document.querySelector(".ri-menu-line")
const closebtn = document.querySelector(".ri-close-circle-line")
const Open = () =>{
    menu.style.display = "none"
    closebtn.style.display = "block"
    nav.style.display = "flex"
}
const Close = () =>{
    closebtn.style.display = "none"
        menu.style.display = "flex"
    nav.style.display = "none"
}

