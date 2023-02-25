let initialCanvasResolution = 16;
let mouseDown = false;

function pixelOnHover() {
    if (mouseDown) this.style.backgroundColor = "#040F16";
}

function resetCanvas(event) {
    document.querySelectorAll(".pixel").forEach((pixel) => {
        pixel.style.backgroundColor = "#FBFBFF";
    });
}

function destroyCanvas(){
    let canvas = document.querySelector(".canvas");
    canvas.innerHTML = "";
}

function createCanvas(res) {
    let canvas = document.querySelector(".canvas");
    document.querySelector(".resolution-text").textContent = `Resolution: ${res}x${res}`

    let canvasBB = canvas.getBoundingClientRect();
    let borderSize = 32;
    let canvasWidth = canvasBB.width - borderSize;
    let canvasHeight = canvasBB.height - borderSize;

    for (let rI = 0; rI < res; rI++) {
        let row = document.createElement("div");
        row.classList.toggle("canvas-row");
        row.style.width = (canvasWidth).toString() + "px";
        row.style.height = (canvasHeight / res).toString() + "px";
        for (let pI = 0; pI < res; pI++) {
            let pixel = document.createElement("div");
            pixel.classList.toggle("pixel")
            pixel.style.width = (canvasWidth / res).toString() + "px";
            pixel.style.height = (canvasHeight / res).toString() + "px";

            pixel.addEventListener("mouseover", pixelOnHover);

            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

document.addEventListener("mousedown", (event) => {
    mouseDown = true;
});
document.addEventListener("mouseup", (event) => {
    mouseDown = false;
});

document.querySelector("#btn-clear").addEventListener("click", resetCanvas);

document.querySelector("#btn-res").addEventListener("click", (event)=> {
    let newRes = +prompt("Chose a new resolution (single number)");
    if(Number.isNaN(newRes)){
        alert("Not a valid number.");
        return;
    }
    destroyCanvas();
    createCanvas(newRes);
});

createCanvas(initialCanvasResolution);