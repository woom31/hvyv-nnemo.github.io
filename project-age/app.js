const btn = document.getElementById("paintToggle");

let canPaint = false;

btn.addEventListener("click", function(){
    if(!canPaint){
        canPaint = true;
        console.log(canPaint);
        btn.innerHTML = "";
        btn.innerHTML += "Draw Off";
    } else {
        canPaint = false;
        console.log(canPaint);
        btn.innerHTML = "";
        btn.innerHTML += "Draw On";
    }
})

// ==================================================================

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = "#000";
ctx.lineWidth = 5;



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


