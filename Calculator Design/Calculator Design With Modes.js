'use strict';

//--------------------------- Toggle Between Modes Functionality --------------------------- //

const checkbox = document.querySelector('input[name=darkLight]');

let lightDark = document.querySelector('.fas');

// Adding Event Listener to checkbox and changing the attribute of html
checkbox.addEventListener('change', function(){
    if (this.checked){
        trans();
        document.documentElement.setAttribute('data-theme','light');
    }
    else{
        trans();
        document.documentElement.setAttribute('data-theme','dark');
    }
});

let trans = ()=>{
    document.documentElement.classList.add('transition');
    window.setTimeout( () =>{
        document.documentElement.classList.remove('transition');
    },700);
}

// Changing The icon and title according to the mode
lightDark.addEventListener('click',function(){
    if(lightDark.classList.contains('fa-moon')){
        lightDark.classList.replace('fa-moon','fa-sun');
        lightDark.title = "Switch to Dark Mode";
}else{
    lightDark.classList.replace('fa-sun','fa-moon');
    lightDark.title = 'Switch to Light Mode';
}
});


