canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

class Goal {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h= h;
    }
    drawgoal() {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle= "#131"
        ctx.fill();
        ctx.closePath()
    }
}
function checkCollision1(cir, rect) {
    let Ax = cir.x;
    let Ay = cir.y;

    let rect_left = rect.x;
    let rect_top = rect.y;
    let rect_right = rect.x + rect.w;
    let rect_bottom = rect.y + rect.h;

    if (cir.x < rect_left)
        Ax = rect_left;
    else if (cir.x > rect_right)
        Ax = rect_right;

    if (cir.y < rect_top)
        Ay = rect_top;
    else if (cir.y > rect_bottom)
        Ay = rect_bottom;

    let dx = cir.x - Ax;
    let dy = cir.y - Ay;

    return (dx * dx + dy * dy) <= cir.radius * cir.radius;
}

let gon1 = new Goal(0,canvas.height / 2 - 50, 30,90)
let gon2 = new Goal(670,canvas.height / 2 - 50,30,90)

