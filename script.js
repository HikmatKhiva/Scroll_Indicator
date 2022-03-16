const scrollWeb = document.querySelector(".scroll-indicator")

document.addEventListener("scroll",() => {
    let webMaxHeight = document.body.scrollHeight - window.innerHeight
    scrollWeb.style.width = ((window.scrollY / webMaxHeight *100)+"%" )
})