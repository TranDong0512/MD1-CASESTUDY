canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

class Goal {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    drawgoal() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.fillStyle = "rgba(226,231,226,0.4)"
        ctx.fill();
        ctx.closePath()
    }
}

function checkscore() {
    if (diemdo == 1) {
        hero2.speedX = 20;
        hero2.speedY = 20;
    }
    if (diemxanh == 1) {
      hero1.speedX= 20
        hero1.speedY = 20;

    }
    start()
}

let gon1 = new Goal(0, canvas.height / 2 - 85, 45, 127)
let gon2 = new Goal(650, canvas.height / 2 - 85, 45, 127)

