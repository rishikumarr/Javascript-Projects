// Look Good in Chrome //

const yellow = {
    // "dark" : "#fbd486",
    "dark" : "#FF871F",
    "light" : "#FF9233",
    'paperColor' : "rgba(255, 222, 194, 0.5)",
    "containerBackground" : "#FFBE85",
    "bodyBackground" : "#FFDEC2"
}

const blue = {
    "dark" : "#0096c7",
    "light" : "#00b4d8",
    "paperColor" : "rgba(224, 224, 224,0.5)",
    "containerBackground" : "#90e0ef",
    "bodyBackground" : "#caf0f8",
}

const black = {
    "dark" : "#1e2022",
    "light" : "#292c35",
    "paperColor": "rgba(224, 224, 224,0.5)",
    "containerBackground" : "#adb5bd",
    "bodyBackground" : "#e9ecef",
}

const rose = {
    "dark" : "#8534c3",
    "light" : "#9d4edd",
    "paperColor" : "rgba(224, 170, 255, 0.5)",
    "containerBackground" : "#deaaff",
    "bodyBackground": "#ffcbf2",
}

const green = {
    "dark" : "#248277",
    "light" : "#358f80",
    "paperColor" : "rgba(136, 212, 171, 0.5)",
    "containerBackground" : "#78c6a3",
    "bodyBackground" : "#99e2b4",
}

const palettes = document.querySelectorAll('span');
const folder = document.querySelector('.folder');
const root = document.querySelector(":root");

palettes.forEach((palette)=>{
    palette.addEventListener('click',function(){
        changeColor(palette.id);
        folder.classList.add('spin');
        setTimeout(() => {
            folder.classList.remove('spin');
        }, 500);
    });
});

function changeColor(color){
    if(color === 'blue'){
        root.style.setProperty('--bodyBackground',blue.bodyBackground);
        root.style.setProperty('--containerBackground',blue.containerBackground);
        root.style.setProperty('--dark',blue.dark);
        root.style.setProperty('--light',blue.light);
        root.style.setProperty('--paperColor',blue.paperColor);
    }
    if(color === 'black'){
        root.style.setProperty('--bodyBackground',black.bodyBackground);
        root.style.setProperty('--containerBackground',black.containerBackground);
        root.style.setProperty('--dark',black.dark);
        root.style.setProperty('--light',black.light);
        root.style.setProperty('--paperColor',black.paperColor);
    }
    if(color === 'green'){
        root.style.setProperty('--bodyBackground',green.bodyBackground);
        root.style.setProperty('--containerBackground',green.containerBackground);
        root.style.setProperty('--dark',green.dark);
        root.style.setProperty('--light',green.light);
        root.style.setProperty('--paperColor',green.paperColor);
    }
    if(color === 'yellow'){
        root.style.setProperty('--bodyBackground',yellow.bodyBackground);
        root.style.setProperty('--containerBackground',yellow.containerBackground);
        root.style.setProperty('--dark',yellow.dark);
        root.style.setProperty('--light',yellow.light);
        root.style.setProperty('--paperColor',yellow.paperColor);
    }
    if(color === 'rose'){
        root.style.setProperty('--bodyBackground',rose.bodyBackground);
        root.style.setProperty('--containerBackground',rose.containerBackground);
        root.style.setProperty('--dark',rose.dark);
        root.style.setProperty('--light',rose.light);
        root.style.setProperty('--paperColor',rose.paperColor);
    }
}
