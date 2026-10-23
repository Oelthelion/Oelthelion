window.addEventListener("load", function(){
    const canva = documetn.getElementById('canvas1');
    const ctx = canva.getcontext('2d');
    canva.width = 500;
    canva.height = 500;

});
class Game {
        constructor(width, height){
                this.width = width;
                this.height = height;
        }
        update(){

        }
        draw(){
            
        }

}


let x = Math.random () * 720
let y = Math.random () * 720
ctx.fillRect(x,y,10,10); 
