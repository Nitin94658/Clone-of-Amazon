const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn= document.querySelector(".control_prev");
const next_btn=document.querySelector(".control_next");

let n=0;

function changeSLide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSLide();

prev_btn.addEventListener('click',()=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSLide();
})

next_btn.addEventListener('click',()=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSLide(); 
})

const scrollContainer=document.querySelectorAll(".products");
for (const item of scrollContainer) {
    item.addEventListener('wheel',(event)=>{
        event.preventDefault();
        item.scrollLeft+=event.deltaY;
    });
}