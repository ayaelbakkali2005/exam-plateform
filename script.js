
let uniforms;
const gl =initShader();
createControls();

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
render();

window.addEventListener("mousemove", e  => {
     updateMousePosition(e.clientX, e.clientX); 
     });

window.addEventListener("touchmove", e => {  
     updateMousePosition(e.targetTouches[0].clientX, e.targetTouches [0].clientY); 
    });

window.addEventListener("click", e => {
     updateMousePosition(e.clientX, e.clientY); 
    });