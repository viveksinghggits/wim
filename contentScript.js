document.addEventListener("keyup", function (event){
    if (event.keyCode == 74){
        scrollUp();
    }
    else if (event.keyCode == 75){
        scrollDown();
    }
    else if (event.keyCode == 76){
        scrollLeft();
    }
    else if (event.keyCode == 72){
        scrollRight()
    }
});

let initUp = 0;
let scrollUpBy = 10 
function scrollUp(){
    if (initUp == scrollUpBy){
        scrollUpBy = 10;
        initUp = 0;
        cancelAnimationFrame(upAnimFrameId);
        return;
    }

    window.scrollBy(0, initUp);
    initUp++;
    upAnimFrameId = requestAnimationFrame(scrollUp)
} 

let initDown = 0;
let scrollDownBy = -10;
function scrollDown(){
    if (initDown == scrollDownBy){
        scrollDownBy = -10;
        initDown = 0;
        cancelAnimationFrame(downAnimFrameId);
        return;
    }

    window.scrollBy(0, initDown);
    initDown--;
    downAnimFrameId = requestAnimationFrame(scrollDown)
}

let initLeft = 0;
let scrollLeftBy = 10;
function scrollLeft(){
    if (initLeft == scrollLeftBy){
        scrollLeftBy = 10;
        initLeft = 0;
        cancelAnimationFrame(leftAnimFramId);
        return;
    }

    window.scrollBy(initLeft, 0);
    initLeft++;
    leftAnimFramId = requestAnimationFrame(scrollLeft);
}

let initRight = 0;
let scrollRightBy = -10;
function scrollRight(){
    if (initRight == scrollRightBy){
        scrollRightBy = -10;
        initRight = 0;
        cancelAnimationFrame(rAnimFrameId);
        return;
    }

    window.scrollBy(initRight, 0);
    initRight--;
    rAnimFrameId = requestAnimationFrame(scrollRight)
}
