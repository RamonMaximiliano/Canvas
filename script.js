function cleanBoard(){
    window.location.reload()
}

document.getElementById("canvas").addEventListener("mousedown", function mouseDown(){
    console.log("Mouse down")
    document.getElementById("canvas").addEventListener("mousemove", function mouseDown(){
        console.log("mousemove")
    })
})

document.getElementById("canvas").addEventListener("mouseup", function mouseDown(){
    console.log("mouseup")
})


/*COLOR PICKING*/

/*Getting array with color elements*/
let colors= document.querySelectorAll(".colorind")

/*Looping the array to check which one was clicked, then adding active class to highlight it*/ 
for (let item of colors){
    item.addEventListener("click", function colorChange(){
        if(item.classList.contains("active")){
            console.log("already has it")
        }
        else {
            for (item2 of colors){
                if (item2 == item) {
                    item.classList.add("active")
                } else {
                    item2.classList.remove("active")
                }
            }
        }
})}

/*COLOR PICKING*/