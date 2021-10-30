//get all the required elements.
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");


const funcForDrag = (e) => {
    const x = e.layerX;
    before.style.width = x +"px";
    slider.style.left = x+ "px";
    let size = container.offsetWidth;
    console.log(size);

    //for the smooth transition at the left end
    if(x < 50){
        before.style.width = 0;
        slider.style.left = 0;
    }

    //now for the smooth transition at the right end we need to get containers size so lets get it above in a var
    if( x+50 > size){
        before.style.width = size + "px";
        slider.style.left = size + "px";
    }

}

//for the mobile i guess we need to use touchmove instead of mousemove
container.addEventListener("mousemove",funcForDrag);