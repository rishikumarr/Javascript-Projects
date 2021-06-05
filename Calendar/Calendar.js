const baseUrl = "https://raw.githubusercontent.com/rishikumarr/images/main/images-for-calendar/";

const months = ["January","February","March","April","May","June","July","August","September","October","November",'December'];

const images = ['1.jpg','2.jpg','3.jpg','4.jpg','10.jpg','6.jpg','7.jpg','8.jpg','9.jpg','5.jpg','11.jpg','12.jpg'];


const dt = new Date();
let month = dt.getMonth();
const year = dt.getFullYear();
const thisMonth = dt.getMonth();
console.log(thisMonth);
const today = dt.getDate();

const nextButton = document.querySelector('[data-next]');
const prevButton = document.querySelector('[data-previous]');
const image = document.querySelector('img');
const currentMonthEle = document.querySelector('[data-current-month]');
const currentYearEle = document.querySelector('[data-current-year]');

const daysContainer = document.querySelector('[data-days]');

nextButton.addEventListener('click',function (){
    month+=1;

    if(month>=12){
        month = 0;
    }

    image.src = baseUrl + `${images[month]}`;   
    load();
    currentMonthEle.textContent = months[month]; 
     
});

prevButton.addEventListener('click',function (){
    month-=1;

    if(month<0){
        month = 0;
    }

    image.src = baseUrl + `${images[month]}`;   
    load();
    currentMonthEle.textContent = months[month];      
});

function load(){
    image.src = baseUrl + `${images[month]}`
    currentMonthEle.textContent = months[month];
    currentYearEle.textContent = year;

    const lastDateOfMonth = new Date(year,month+1,0).getDate(); //This gives the last date of the current month...
    let firstDayOfMonth = new Date(year,month,1).getDay(); // This gives the first "day" (0-6) of the month...
    const blankDays = firstDayOfMonth;
    
    let date = 1;

    daysContainer.innerHTML = "";
    
    for(let i=0; i<lastDateOfMonth + blankDays; i++){
        const eachDay = document.createElement('li');

        if(i<blankDays){
            eachDay.classList.add('blank');
        }else{
            if(date==today && month==thisMonth){
                eachDay.classList.add('today');
            }
            eachDay.classList.add('notblank');
            eachDay.innerText = date;
            date+=1;
        }

        daysContainer.appendChild(eachDay);
    }

}

load();
