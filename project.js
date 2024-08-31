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


let landingPage = document.querySelector(".landing-page");
let ImagesArray = ["imgs/01.jpg", "imgs/05.jpeg","imgs/06.jpg", "imgs/07.png","imgs/08.png","imgs/010.jpg","imgs/03.jpg"];
let backgroundOption = true
let backgroundInterval;

// Call the function to load images when the page loads
window.onload = function() {
  loadImages(imageNames, imageFolderPath);
};

// Call the function to load images when the page loads
window.onload = function() {
  loadImages(imageNames, imageFolderPath);
};





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

function randomImage(){
    if(backgroundOption === true){
        backgroundInterval = setInterval( () => {
            let randomNumber = Math.floor(Math.random()* ImagesArray.length );
            landingPage.style.backgroundImage = 'url(" ' + ImagesArray[randomNumber]+'")';
        },4000)
    }
}
randomImage()


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