const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//set canvas width and height consistent w style.css for canvas1
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//name your code to call image
const playerImage = new Image();
playerImage.src = 'sprite/alpaca.png';
const spriteWidth = 601;
const spriteHeight = 600;
//setting the square parameter as frame

let gameFrame = 0;
let staggerFrames = 7;


//create a function on what you want to do
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 9; 
    //Math.floor forces results to be integers 
    //after the % indicates the frame number on the horizontal axis
    let frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, 0, 
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        //sx, sy, sw, sh is where we want to cut;
        //the dx dy dw dh is where we want to place the image

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();