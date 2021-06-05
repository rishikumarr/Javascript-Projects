const dropArea = document.querySelector('[data-area]');
const folder = document.querySelector('.folder');
const description = document.querySelector('h3');

dropArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    folder.classList.add('open');
    description.textContent = "Release to Upload file";
});

dropArea.addEventListener('dragleave',function(){
    folder.classList.remove('open');
    description.textContent = "Drag and Drop your files here"
});

dropArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    triggerAnimation();
    
});


function triggerAnimation(){
    const cloud = document.querySelector("#cloud");
    const icon = "<i class='fas fa-long-arrow-alt-up' id='uploading'></i>";
    
    folder.classList.add("upload");
    folder.insertAdjacentHTML("beforeend",icon);
    
    description.textContent = "File uploading...."
    
    setTimeout(()=>{
        folder.classList.add('uploaded');
        cloud.classList.replace('fa-cloud','fa-cloud-upload-alt');
        description.textContent = "File uploaded successfully";
    },4500);
}

folder.addEventListener('click',function(){
    folder.classList.toggle('open');
});

const button = document.querySelector('button');

button.addEventListener('click',function(){
    folder.classList.add('open');
    triggerAnimation();
    button.disabled = true;
});

const image = document.querySelector('img');
const link = document.querySelector('a');

image.onclick = ()=>{
    link.click();
}
