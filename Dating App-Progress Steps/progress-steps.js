const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide').length;
const body = document.querySelector('body');
const subContainer = document.querySelector('.subcontainer');
const modal = document.querySelector('.modal');

let slide  = 0;
let translate = 0;

nextButton.addEventListener('click',function(){
    slide +=1;

    if(slide==1){
        generateContent(1);
        setTimeout(() => {body.classList.add('overlay');}, 500);
        moveFurther();
    }
    else if(slide==2){
        removeModalContent();
        setTimeout(() => {generateContent(2)}, 500);
        moveFurther();
    }
    else if(slide==3){
        removeModalContent();
        setTimeout(() => {generateContent(3)}, 500);
        removebutton();
        moveFurther();
    }
});

function moveFurther(remove=true){
    translate += 25;
    slider.style.transform = `translateX(-${translate}%)`;
}

function removebutton(){
    const button = document.querySelector('button');
    subContainer.removeChild(button);
    console.log(subContainer);
}

function removeModalContent(){
    modal.innerHTML = "";
    body.classList.remove('overlay');
}

function generateContent(slideNum){
    if(slideNum==1){
        const secondSlide = document.querySelector('#second-slide');
        const slideContent = document.importNode(secondSlide.content,true);
        modal.appendChild(slideContent);
    }
    if(slideNum==2){
        body.classList.add('overlay');
        const thirdSlide = document.querySelector('#third-slide');
        const slideContent = document.importNode(thirdSlide.content,true);
        modal.appendChild(slideContent);
    }
    if(slideNum==3){
        body.classList.add('overlay');
        const fourthSlide = document.querySelector('#fourth-slide');
        const slideContent = document.importNode(fourthSlide.content,true);
        modal.appendChild(slideContent);
    }
    
}