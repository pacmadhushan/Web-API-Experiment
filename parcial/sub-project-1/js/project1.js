const cursorelm =document.getElementById('cursor');
window.addEventListener('mousemove',(eventData)=>{
    cursorelm.style.left=`${eventData.pageX}px`;
    cursorelm.style.top=`${eventData.pageY}px`;
});

const cursorelm2 =document.getElementById('cursor-1');
window.addEventListener('mousemove',(eventData)=>{
    cursorelm2.style.left=`${eventData.pageX}px`;
    cursorelm2.style.top=`${eventData.pageY}px`;
});


