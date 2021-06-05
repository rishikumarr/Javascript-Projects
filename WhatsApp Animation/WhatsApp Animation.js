const container = document.querySelector('.container');
const paperClip = document.querySelector('.paperclip');

paperClip.addEventListener('click',function(){
    container.classList.toggle('open');
});
