const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');
const amPm = document.querySelector('[data-amPm]');

function changeTime(){
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

setInterval(changeTime,1000);
