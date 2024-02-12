let slidesCount=0;
let slides=document.querySelectorAll(".slides");
showSlides(slidesCount);
loopSlides(slidesCount);

let prevButton=document.querySelector(".prev-btn");
prevButton.onclick= function(){
    
    if(slidesCount==0){
       showSlides(slidesCount = slides.length-1);
    }else{
    showSlides((slidesCount -= 1));
    }
};
let nextButton=document.querySelector(".next-btn");
nextButton.onclick= function(){
    
    if(slidesCount >= slides.length-1){
      showSlides(slidesCount = 0);
    }else{
    showSlides((slidesCount += 1));
    }
};

function showSlides(){
    
    for (i=0 ; i<slides.length; i++){
        slides[i].style.display="none";
    }               
    slides[slidesCount].style.display="block";
};

function loopSlides(){
    slidesCount++; 
    if(slidesCount> slides.length) {
        slidesCount = 1;
    }else if (slidesCount < 0 ){
        slidesCount = slides.length -1;
    };
    for (i=0 ; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[slidesCount-1].style.display="block";
    setTimeout(loopSlides,3000);   
}


for (i=0; i<slides.length; i++){
    let dots=document.createElement("span");
    dots.setAttribute("class","dot");
    dots.setAttribute("slide-count", i+1);
    let dotNav=document.querySelectorAll(".dots-container");
    dotNav[0].appendChild(dots);
}

let dot=document.querySelectorAll(".dot");
dot.forEach(function(ele){
    ele.addEventListener("click", function(e){
        let value=e.target.getAttribute( "slide-count" );
        dotSlide(value);
    })
})

function dotSlide(n){
    for (i=0 ; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[n-1].style.display="block";
}