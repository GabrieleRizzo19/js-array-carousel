let imgArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
let slider = document.getElementById("slider");

for( let i = 0 ; i < imgArray.length ; i++){
    let currentArrayImg = imgArray[i];
    
    if(i == 0){
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentArrayImg}`
        newImg.className = "slide"
        slider.append(newImg);
    }else{
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentArrayImg}`
        newImg.className = "slide hidden"
        slider.append(newImg);
    }
    
}

let previous = document.getElementById("previous-arrow");
let next = document.getElementById("next-arrow");

let slideElements = document.getElementsByClassName("slide");
// console.log(slideElements);

let currentSlide = 0;

if(currentSlide == 0){
    previous.style.display = "none";
}

previous.addEventListener("click", function(){
    // console.log("previous clicked");

    for(let i = (slideElements.length-1) ; i >= 0  ; i--){
        const slide = slideElements[i];

        if(i == currentSlide-1){
            slide.classList.remove("hidden");
        }else{
            slide.classList.add("hidden")
        }
    }

    currentSlide--;

    if(currentSlide == 0){
        previous.style.display = "none";
    }else{
        previous.style.display = "initial";
    }
    
    if(currentSlide == slideElements.length-1){
        next.style.display = "none";
    }else{
        next.style.display = "initial";
    }
})

next.addEventListener("click", function(){
    // console.log("next clicked");

    for(let i = 0 ; i < slideElements.length ; i++){
        const slide = slideElements[i];

        if(i == currentSlide+1){
            slide.classList.remove("hidden");
        }else{
            slide.classList.add("hidden")
        }
    }

    currentSlide++;

    if(currentSlide == 0){
        previous.style.display = "none";
    }else{
        previous.style.display = "initial";
    }

    if(currentSlide == slideElements.length-1){
        next.style.display = "none";
    }else{
        next.style.display = "initial";
    }
})
