let canvasResolution = 16;

function pixelOnHover() {
    this.style.backgroundColor = "#040F16";
}

function createCanvas(res) {
    let canvas = document.querySelector(".canvas");

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
            pixel.style.width = (canvasWidth / res).toString() + "px";
            pixel.style.height = (canvasHeight / res).toString() + "px";
            pixel.style.backgroundColor = "red";

            pixel.addEventListener("mouseover", pixelOnHover);

            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

createCanvas(canvasResolution);