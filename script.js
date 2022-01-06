function cleanBoard(){
    window.location.reload()
}

let currentColor = "black"
let drawActive = false
let mouseX = 0;
let mouseY = 0;
let screen = document.querySelector(".main-canvas");
let ctx = screen.getContext("2d");


document.getElementById("canvas").addEventListener("mousedown", function mouseDown(e){
    drawActive = true
    //esta pegando posição inicial do mouse na hora que clica
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
    console.log("Mouse down")
    console.log(mouseX)
    console.log(mouseY)
})

document.getElementById("canvas").addEventListener("mouseup", function mouseUp(){
    drawActive = false
    console.log("mouseup")
})

//o pageX e pageY abaixo estão pegando o mousemove conforme movimento dentro do canvas.
document.getElementById("canvas").addEventListener("mousemove", function mouseMove(movement){
    if(drawActive == true){
    console.log(movement.pageX, movement.pageY)
    draw(movement.pageX, movement.pageY);
}
})


/*COLOR PICKING*/

/*Getting array with color elements*/
let colors= document.querySelectorAll(".colorind")

/*Looping the array to check which one was clicked, then adding active class to highlight it*/ 
for (let item of colors){
    item.addEventListener("click", function colorChange(){
        if(item.classList.contains("active")){
            console.log("already has it")
            let color = item.getAttribute("id")
            currentColor = color
            console.log(color)
        }
        else {
            for (item2 of colors){
                if (item2 == item) {
                    item.classList.add("active")
                    color = item2.getAttribute("id")
                    currentColor = color
                    console.log(color)

                } else {
                    item2.classList.remove("active")
                }
            }
        }
})}

/*COLOR PICKING*/

console.log(currentColor)
 
function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;
}




