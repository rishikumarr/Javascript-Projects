const hourHand = document.querySelector('[data-hour]');
const minuteHand = document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');

function changeTime(){
    const time = new Date;

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

changeTime();

setInterval(changeTime,1000);
