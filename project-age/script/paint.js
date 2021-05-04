const drawBtn = document.getElementById("draw-btn");
const nextBtn = document.getElementById("next-btn");
const drawEndBtn = document.getElementById("drawend-btn");

let canPaint = false;

drawBtn.addEventListener("click", function(){
    canPaint = true;
    console.log(canPaint);
    drawBtn.classList.replace("inline", "hide");
    nextBtn.classList.replace("inline", "hide");
    drawEndBtn.classList.replace("hide","inline");
})
drawEndBtn.addEventListener("click", function(){
    canPaint = false;
    console.log(canPaint);
    drawBtn.classList.replace("hide", "inline");
    nextBtn.classList.replace("hide", "inline");
    drawEndBtn.classList.replace("inline","hide");
})

// ==================================================================

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = "#000";
ctx.lineWidth = 1;



let painting = false;

function stopPainting(){
    painting = false;
}


function startPainting(){
    painting = true;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y);
    if(canPaint == true){
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);   
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function onMouseDown(event){
    painting = true;
    console.log(painting);
}

// function onMouseUp(event){
//     stopPainting();
//     console.log(painting);
// }

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


