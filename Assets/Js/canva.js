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
    width: window.innerWidth - 200,
    // height: window.innerHeight - 100,
    backgroundColor: "blue",
    isDrawingMode: true,
  });
  const toggleDraw = ()=>{
    myCanvas.set({isDrawingMode:!myCanvas.get("isDrawingMode")})
  }
  const createTextbox = () => {
    const textbox = new fabric.Textbox("Hakuna Matata",{
      width : 400,
    });
    myCanvas.add(textbox);
  };
  const deleteObject = () => {
    if(myCanvas.getActiveObject()){ myCanvas.remove(myCanvas.getActiveObject());
    }
  }