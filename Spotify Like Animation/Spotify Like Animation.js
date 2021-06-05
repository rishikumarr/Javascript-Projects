const likeButton = document.querySelector('[data-like-button]');;
const likeContainer = document.querySelector('.container');

likeButton.addEventListener('click',function(){
    likeContainer.classList.contains('active') ? removeActive() : addActive();
});


function addActive(){
    likeContainer.classList.add('active');
}

function removeActive(){
    likeContainer.classList.remove('active');
    likeContainer.classList.add('remove-active')
    setTimeout(()=>{
        likeContainer.classList.remove('remove-active');
    },1000);
}
