let landingPage = document.querySelector('.landing-page')

let mainColors = localStorage.getItem("color_option");
if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");

        if(element.dataset.color === mainColors){
            element.classList.add("active")
        }
    })
}


let ImagesArray = ["01.jpg", "05.jpeg", "06.jpg", "07.png", "08.png", "010.jpg", "03.jpg"];

        let backgroundOption = true;
        let backgroundInterval;

setInterval(()=> {
    let randomNumber = Math.floor(Math.random() * ImagesArray.length)

    landingPage.style.backgroundImage = 'url("imgs/' + ImagesArray[randomNumber] + '")'

},5000)

       
let background = localStorage.getItem("random_background");
if(background !== null){
    if(background === 'true'){
        background = true
    }
else{
        background = false
    }

    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active")

        if(background === 'false'){
            document.querySelector(".random-background .no").classList.add("active");
        }else{
            document.querySelector(".random-background .yes").classList.add("active");
        }
    })
}


document.querySelector(".toggle .fa-gear").onclick = function (){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}



let randomBackEl = document.querySelectorAll(".random-background span");
randomBackEl.forEach(span => {
    span.addEventListener("click", (e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")

        if(e.target.dataset.background === 'yes'){
            backgroundOption === true
            randomImage()
            localStorage.setItem("random_background", true)
        }
        else{
            backgroundOption === false
            clearInterval(backgroundInterval)
            localStorage.setItem("random_background", false)
        }
    })
})

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color_option", e.target.dataset.color );
        e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")

    })
});