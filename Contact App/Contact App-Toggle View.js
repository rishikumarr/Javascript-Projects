'use strict';

// ------------------------- Changing the View Functionality --------------------------------------- //

let listView = true; // To toggle between Views , if true - List view,else - Grid view

const view = document.querySelector('.contacts'); // this contains all the contacts.. if we change its class, all the child elements inside act accordingly

const changeView = document.querySelector('#switchView'); // listening to the icon in the top right corner to switch mode on click

changeView.addEventListener('click',function(){
    if(listView){ // if this is true we're currently in list view 
        // Switching List view to Grid View
        view.classList.replace('list','grid');

        // Changing icon
        changeView.classList.replace('bi-grid','bi-list-ul');
        
        // Changing title while hovering over icon
        changeView.title = "Switch to List View";
        
        //Switching to false to toggle between views
        listView = false;
    }
    else{// we're currently in grid view 
        // Switching Grid view to List View
        view.classList.replace('grid','list')
        
        // Changing icon
        changeView.classList.replace('bi-list-ul','bi-grid');

        // Changing title while hovering over icon
        changeView.title = "Switch to Grid View";

        //Switching to true to toggle between views
        listView = true;
    }
});


