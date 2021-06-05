const rightArrow = document.querySelector('[data-arrow-right]');
const leftArrow = document.querySelector('[data-arrow-left]');
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('[data-slider]')

let translate = 0;
let maxSlide = -(((slides.length)*10)-10);
console.log(maxSlide);


leftArrow.addEventListener('click',function(){
    if(translate<0){
        translate +=10;
        slider.style.transform = `translateX(${translate}%)`;
    }
});


rightArrow.addEventListener('click',function(){
    if(translate<=maxSlide+(Math.trunc(window.innerWidth/46))){
        translate=10;
    }else{
        translate -=10;
        slider.style.transform=`translateX(${translate}%)`;
    }
});


// Fetching movies from 3rd party API

const prefix_url = 'https://api.themoviedb.org/3';
const suffix_url ='&api_key=9062d5325e9fedc92f8550d136d0092b&page=1';

// const movie_drama = "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10";
const movie_theatres ='/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
const IMAGE_PATH ='https://image.tmdb.org/t/p/w1280';

async function getMovies(url){
    const responses = await fetch(url);
    const responsesJson = await responses.json();
    showMovies(responsesJson.results.splice(0,10));
}


const slideTemplate = document.querySelector('[data-sample-slide]');

function showMovies(movies){
    slider.classList.remove('loading');
    slider.innerHTML = "";
    movies.forEach((movie)=>{
        const {title,poster_path,overview} = movie;
        const slide = document.importNode(slideTemplate.content,true);
        slide.querySelector('.slide-image').src = IMAGE_PATH + poster_path;
        slide.querySelector('.slide-content-heading').textContent = title;
        slide.querySelector('.slide-content-overview').textContent = overview;
        slider.appendChild(slide);
    });
}

setTimeout(()=>{
    getMovies(prefix_url+movie_theatres+suffix_url)
}, 2000);

