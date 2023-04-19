let imgArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
let slider = document.getElementById("slider");

for( let i = 0 ; i < imgArray.length ; i++){
    let currentImg = imgArray[i];
    
    if(i == 0){
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentImg}`
        newImg.className = "my-slide"
        slider.append(newImg);
    }else{
        let newImg = document.createElement("img");
        newImg.src = `../img/${currentImg}`
        newImg.className = "my-slide hidden"
        slider.append(newImg);
    }

    
}