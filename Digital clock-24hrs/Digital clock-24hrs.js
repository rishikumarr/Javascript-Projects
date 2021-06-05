const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');

const glowingHr = document.querySelector('[data-glow-hr]');
const glowingMin = document.querySelector('[data-glow-min]');
const glowingSec = document.querySelector('[data-glow-sec]');

function changeTime(){
    const date = new Date();

    if(date.getSeconds()!== 1 || date.getSeconds()!== 0){
        glowingSec.textContent = 'sec\'s';
    }
    
    if(date.getSeconds()=== 0 || date.getSeconds()=== 1) {
        glowingSec.textContent = 'sec';
    }

    if(date.getMinutes() !== 1 || date.getMinutes() !== 0){
        glowingMin.textContent = 'min\'s';
    }
    
    if(date.getMinutes() === 0 || date.getMinutes() === 1){
        glowingMin.textContent = 'min';
    }

    if(date.getHours() !== 1 || date.getHours() !== 0){
        glowingHr.textContent = 'hr\'s';
    }
    
    if(date.getHours() === 0 || date.getHours() === 1){
        glowingHr.textContent = 'hr';
    }

    hour.textContent = `${date.getHours().toString().padStart(2,"0")}`;
    minute.textContent = `${date.getMinutes().toString().padStart(2,"0")}`;
    second.textContent = `${date.getSeconds().toString().padStart(2,"0")}`;
}

setInterval(changeTime,1000);


