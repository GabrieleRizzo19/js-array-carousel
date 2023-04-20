let imgArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
let big_img = document.getElementById("big-img");
let thumbnails = document.getElementById("thumbnails");
let currentSlide = 0;


for( let i = 0 ; i < imgArray.length ; i++){
    let currentArrayImg = imgArray[i];
    
    if(i == 0){
        let newImg = document.createElement("img");
        newImg.src = `./img/${currentArrayImg}`
        newImg.className = "slide"
        big_img.append(newImg);
    }else{
        let newImg = document.createElement("img");
        newImg.src = `./img/${currentArrayImg}`
        newImg.className = "slide hidden"
        big_img.append(newImg);
    }
    
}

for( let i = 0 ; i < imgArray.length ; i++){
    let currentArrayImg = imgArray[i];
    
    let newImg = document.createElement("img");
    newImg.src = `./img/${currentArrayImg}`
    newImg.className = "thumb"
    newImg.addEventListener("click", function(){
        
        slideElements[currentSlide].classList.add("hidden");
        currentSlide = i;
        slideElements[currentSlide].classList.remove("hidden");
        for(let c = 0 ; c < thumbnailsElements.length ; c++){
            let thumb = thumbnailsElements[c];
            
            if(c == currentSlide){
                thumb.classList.add("green-border");
                thumb.classList.remove("dark-img");        
            }else{
                thumb.classList.remove("green-border");
                thumb.classList.add("dark-img");        
            }
        }
    })
    thumbnails.append(newImg);
    
}


let previous = document.getElementById("previous-arrow");
let next = document.getElementById("next-arrow");

let slideElements = document.getElementsByClassName("slide");
// console.log(slideElements);

let thumbnailsElements = document.getElementsByClassName("thumb");
// console.log(thumbnailsElements);


for(let i = 0 ; i < thumbnailsElements.length ; i++){
    let thumb = thumbnailsElements[i];
    
    if(i == currentSlide){
        thumb.classList.add("green-border");
        thumb.classList.remove("dark-img");        
    }else{
        thumb.classList.remove("green-border");
        thumb.classList.add("dark-img");        
    }
}

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

    for(let i = 0 ; i < thumbnailsElements.length ; i++){
        let thumb = thumbnailsElements[i];
        
        if(i == currentSlide){
            thumb.classList.add("green-border");
            thumb.classList.remove("dark-img");        
        }else{
            thumb.classList.remove("green-border");
            thumb.classList.add("dark-img");        
        }
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

    for(let i = 0 ; i < thumbnailsElements.length ; i++){
        let thumb = thumbnailsElements[i];
        
        if(i == currentSlide){
            thumb.classList.add("green-border");
            thumb.classList.remove("dark-img");        
        }else{
            thumb.classList.remove("green-border");
            thumb.classList.add("dark-img");        
        }
    }
})
