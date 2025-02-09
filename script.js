const hero = document.querySelectorAll(".hero-slider img")
const previousBtn = document.querySelector(".control-previous")
const nextBtn = document.querySelector(".control-next")

let n = 1;
function changeSlide(){
    for (let i = 0 ; i < hero.length ; i++) {
        hero[i].style.display = "none";
    }
    hero[n].style.display = "block";
}
changeSlide();

previousBtn.addEventListener("click", (e)=>{
    if (n>0){
        n--;
    }else{
        n = hero.length -1
    }
    changeSlide()
})
nextBtn.addEventListener("click", (e)=>{
    if (n < (hero.length -1)){
        n++;
    }else{
        n = 0
    }
    changeSlide()
})


