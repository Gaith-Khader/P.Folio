// nav bar animation
let navBar=document.getElementById("navBar");
window.addEventListener("scroll",function(){
    if(window.scrollY>100){
        navBar.classList.add("shadow-sm");
        navBar.classList.replace("bg-transparent","bg-white");
    }else if(this.window.scrollY<50){
        navBar.classList.replace("bg-white","bg-transparent");
        navBar.classList.remove("shadow-sm");
    }
    navBar.style.transition='0.5s';
})


// btt btn animation
let bttBtn=document.getElementById("bttBtn");
window.addEventListener("scroll",function(){
    if(window.scrollY>950){
        bttBtn.classList.remove("d-none");
    }else{
        bttBtn.classList.add("d-none");
    }
})



bttBtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior: "smooth"
    })
})

