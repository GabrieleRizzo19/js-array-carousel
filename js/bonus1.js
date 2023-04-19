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

previous.addEventListener("click", function(){
    // console.log("previous clicked");

    if(currentSlide > 0){
        for(let i = 0 ; i < slideElements.length ; i++){
            let slide = slideElements[i];
    
            
            if(i == currentSlide-1){
                slide.classList.remove("hidden");
            }else{
                slide.classList.add("hidden")
            }
            
        }
        currentSlide--;
    }else{
        let slide = slideElements[0];
        slide.classList.add("hidden");
        slide = slideElements[slideElements.length-1];
        slide.classList.remove("hidden");
        currentSlide = (slideElements.length-1);
    }


})

next.addEventListener("click", function(){
    // console.log("next clicked");

    if(currentSlide < (slideElements.length-1)){
        for(let i = 0 ; i < slideElements.length ; i++){
            let slide = slideElements[i];
    
            
            if(i == currentSlide+1){
                slide.classList.remove("hidden");
            }else{
                slide.classList.add("hidden")
            }
            
        }
        currentSlide++;
    }else{
        let slide = slideElements[slideElements.length-1];
        slide.classList.add("hidden");
        slide = slideElements[0];
        slide.classList.remove("hidden");
        currentSlide = 0;
    }

})
