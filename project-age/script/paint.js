const drawBtn = document.getElementById("draw-btn");
const enterBtn = document.getElementById("enter-btn");
// const drawEndBtn = document.getElementById("drawend-btn");

let canPaint = false;

drawBtn.addEventListener("click", function(){
    if(!canPaint){
        canPaint = true;
        console.log(canPaint);
        enterBtn.style.display = "none";
        drawBtn.style.right = "45%";
        drawBtn.innerText = "Draw End";
    } else {
        canPaint = false;
        enterBtn.style.display = "block";
        drawBtn.style.right = "40%";
        drawBtn.innerText = "Draw";
    }
})
// drawEndBtn.addEventListener("click", function(){
//     canPaint = false;
//     console.log(canPaint);
// })

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


