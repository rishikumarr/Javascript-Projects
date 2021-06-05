// Toggling between clocks

const analog = document.querySelector('[data-analogClock]');
const digital = document.querySelector('[data-digitalClock]');

let root = document.querySelector(':root');

const toggleClock = document.querySelector('[data-clocktoggle]');
const palette = document.querySelector('.palette'); 
const palettes = document.querySelector('.palettes');


// Toggling between Clocks

toggleClock.addEventListener('click',function(e){
    const target = e.target;
    // target.textContent==="Digital Clock" ? toggleClock.classList.replace("analog","digital") : toggleClock.classList.replace("digital",'analog');
    if(target.textContent === "Digital Clock"){
        toggleClock.classList.replace("analog","digital");
        digital.classList.remove("hidden");
        analog.classList.add("hidden");
    }else{
        toggleClock.classList.replace("digital",'analog');
        analog.classList.remove("hidden");
        digital.classList.add("hidden");
        isAnalog = true;
    }
});


palette.addEventListener('click',function(){
    palettes.classList.toggle('open');
});


palettes.addEventListener('click',function(e){
    const target = e.target;
    root.style.setProperty('--currentColor',target.id);
    palettes.classList.remove('open');
});



// Analog Clock

function analogClock(){
    
    const minuteHand = document.querySelector('[data-minute]');
    const hourHand = document.querySelector('[data-hour]');
    const secondHand = document.querySelector('[data-second]');

    const time = new Date;

    changeGreetMsg(time);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourDeg = (hour * 30) + (minute * 0.5);
    const minuteDeg = (minute * 6) + (minute * 0.1);
    const secondDeg = (second * 6);

    hourHand.style.transform = `rotateZ(${hourDeg}deg)`
    minuteHand.style.transform = `rotateZ(${minuteDeg}deg)`;
    secondHand.style.transform = `rotateZ(${secondDeg}deg)`;

}

function changeGreetMsg(time){
    const hr = time.getHours();
    const greetMsg = document.querySelector('.time');

    if(hr>=0 && hr<=11){
        greetMsg.textContent = "Morning";
    }

    if(hr>=15 && hr<=20){
        greetMsg.textContent = "Evening";
    }

    if(hr>=12 && hr<15){
        greetMsg.textContent = "Afternoon";
    }

    if(hr>20 && hr<0){
        greetMsg.textContent = "Night";
    }
}

setInterval(analogClock,1000);


// Digital Clock
function digitalClock(){

    const hour = document.querySelector('[data-digi-hour]');
    const minute = document.querySelector('[data-digi-minute]');
    const second = document.querySelector('[data-digi-second]');
    const amPm = document.querySelector('[data-digi-amPm]');

    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am = true;

    if(hr<10){
        hr = padAtStart(hr);
    }

    if(min<10){
        min = padAtStart(min);
    }

    if(sec<10){
        sec = padAtStart(sec);        
    }

    if(hr==="0"){
        hr = 12;
    }

    if(hr>12){
        hr = Math.trunc(hr%12);
        if(hr < 10){
            hr = padAtStart(hr);
        }
        am = false;
    }

    changeGlowingText(date);

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    am ? amPm.textContent = "AM" : amPm.textContent = "PM";
        
}


function padAtStart(passed){
    return passed.toString().padStart(2,"0");
}

function changeGlowingText(date){
    const hourGlow = document.querySelector('[data-hour-glow]');
    const minuteGlow = document.querySelector('[data-minute-glow]');
    const secondGlow = document.querySelector('[data-second-glow]');

    if(date.getSeconds()!== 1 || date.getSeconds()!== 0){
        secondGlow.textContent = 'sec\'s';
    }
    
    if(date.getSeconds()=== 0 || date.getSeconds()=== 1) {
        secondGlow.textContent = 'sec'; 
    }

    if(date.getMinutes() !== 1 || date.getMinutes() !== 0){
        minuteGlow.textContent = 'min\'s';
    }
    
    if(date.getMinutes() === 0 || date.getMinutes() === 1){
        minuteGlow.textContent = 'min';
    }

    if(date.getHours() !== 1 || date.getHours() !== 0){
        hourGlow.textContent = 'hr\'s';
    }
    
    if(date.getHours() === 0 || date.getHours() === 1){
        hourGlow.textContent = 'hr';
    }
}

setInterval(digitalClock,1000);

// Focus for the day
const form = document.querySelector('[data-form]');
const focus = document.querySelector('[data-focus]')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const userInput = form.querySelector('input').value.trim();
    if(userInput!==""){
        form.querySelector('input').value ="";
        renderTodo(userInput);
    }
});

const todo = document.importNode(focus.content,true);
function renderTodo(userInput){
    form.style.display="none";
    todo.querySelector('label').textContent = userInput[0].toUpperCase() + userInput.slice(1);
    document.querySelector('.focus').appendChild(todo);
}


// Map
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
// }


// function showPosition(position){
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;
//     const coords = [latitude,longitude];
    
//     document.querySelector('.mapimg').classList.remove("blur");
//     const map = L.map('map').setView(coords, 10);
    
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);
    
//     L.marker(coords).addTo(map).openPopup();
// }

// Greeting User
const userNameInput = document.querySelector('.usernameinput');

let userName;

userNameInput.addEventListener('submit',function(e){
    e.preventDefault();
    let value = document.querySelector('.username').value.trim();
    if(value!==""){
        value = value[0].toUpperCase()+value.slice(1);
        userNameInput.style.display = "none";
        const parent = document.querySelector('.greetuser');
        const child = `<span class='user'>${value}<span>`;
        parent.insertAdjacentHTML('beforeend',child);
    }
});


// Date 

const now = new Date();
const date = new Intl.DateTimeFormat(navigator.language).format(now);
document.querySelector('.date').textContent = date;
// console.log(date);

