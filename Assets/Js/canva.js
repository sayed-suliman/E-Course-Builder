
console.log("Canva file is working propely")

// const myCanvas = new fabric.Canvas("demoCanvas");
// var rect = new fabric.Rect({
//     left:100,
//     top:150,
//     fill:'red',
//     width:200,
//     height:200
// })
// myCanvas.add(rect)

const myCanvas = new fabric.Canvas("demoCanvas", {
    // backgroundColor: "blue",
    width: 1295,
    height: 770,
    // freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 }),
    // isDrawingMode: true,
});
const toggleDraw = () => {
    myCanvas.set({
        isDrawingMode: !myCanvas.get("isDrawingMode"),
    })
}
const createTextbox = () => {
    const textbox = new fabric.Textbox("Write something", {
        width: 400,
        left: 110,
        top: 70,
        fontSize: 12,
        fill: "orange",
        enteredScaling: false,
        // stroke: "green",
        // textAlign: "center",
    });
    myCanvas.add(textbox);
    // textbox.enterEditing()
    // textbox.hiddenTextarea.focus();
    // textbox.selectAll()
    // myCanvas.set({isDrawingMode:false})
};
const deleteObject = () => {
    if (myCanvas.getActiveObject()) {
        myCanvas.remove(myCanvas.getActiveObject());
    }
}
const eraseObj = () => {

    myCanvas.set({
        isDrawingMode: false
    })
    myCanvas.remove(myCanvas.getActiveObject())


    // if (myCanvas.isDrawingMode == false) {
    //     console.log(myCanvas.get("isDrawingMode"))
    //     myCanvas.freeDrawingBrush = new fabric.PencilBrush(myCanvas)
    //     myCanvas.freeDrawingBrush.color = "red"
    //     myCanvas.freeDrawingBrush.width = 20
    //     myCanvas.isDrawingMode = true
    // }

}
// for triangle
const triangleDraw = () => {
    // myCanvas.set({isDrawingMode: false})
    // Initialize a circle object
    var triangle = new fabric.Triangle({
        left: 250,
        top: 100,
        height:100,
        width:100,
        // radius: 20,
        fill: 'purple'
    })

    // Add objects to the canvas
    myCanvas.add(triangle)
}
const clearBoard = () => {
    myCanvas.clear()

}
const setBackground = (url) => {
    fabric.Image.fromURL(url, (img) => {
        img.scaleToWidth(myCanvas.width);
        // img.scaleToHeight(myCanvas.height);
        myCanvas.setBackgroundImage(img)
        myCanvas.renderAll()
    })
}


// background image from css code
// function setBackgroundImg(e){
//     console.log(e.target.src)
//     document.querySelector("#white-board .white-board").style.background = `url(${e.target.src})`
//     document.querySelector("#white-board .white-board").style.backgroundRepeat = `no-repeat`
//     document.querySelector("#white-board .white-board").style.backgroundSize = `cover`
// }


// fabric.Image.fromURL("/Assets/Images/icons/arrow-left.svg", (img) => {
//     myCanvas.add(img)
// })