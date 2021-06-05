const ripple = document.querySelector('.ripple');
const circle = document.querySelector('.circle');

ripple.addEventListener('click',function(e) {
   const x = e.clientX;
   const y = e.clientY;
   
   const buttonLeft = e.target.offsetLeft;
   const buttonTop = e.target.offsetTop;

   const xInside = x-buttonLeft;
   const yInside = y-buttonTop;

   const circle = document.createElement('span');
   circle.classList.add('circle');
   
   circle.style.top = yInside + 'px';
   circle.style.left = xInside +"px";

   this.appendChild(circle);

   setInterval(()=>circle.remove(),500);
});
