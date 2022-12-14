let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
let diemdo = 0;
let diemxanh = 0;

class Ball {
    dx = 2;
    dy = -2;
    radius;

    constructor(x, y, radius, width, height) {
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height
        this.radius = radius;
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    draw() { //bật khi va chạm vien canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx * 0.8;

        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy * 0.8;

        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ball.drawBall()

    }

}

let ball = new Ball(350, 275, 15, 30, 50, 10);
let hero1 = new Ract(50, 230, 50, 50, "img1")
let hero2 = new Ract(600, 230, 50, 50, "img2")
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        hero1.ckeckmover();
        hero1.moverToRight()
    }
    if (e.keyCode == 83) {
        hero1.ckeckmover();
        hero1.moverToBot();
    }
    if (e.keyCode == 87) {
        hero1.ckeckmover();
        hero1.moverToTop();
    }
    if (e.keyCode == 65) {
        hero1.ckeckmover();
        hero1.moverToLeft();
    }

})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        hero2.ckeckmover2()
        hero2.moverToRight()
    }
    if (e.keyCode == 40) {
        hero2.ckeckmover2()
        hero2.moverToBot()
    }
    if (e.keyCode == 38) {
        hero2.ckeckmover2()
        hero2.moverToTop()
    }
    if (e.keyCode == 37) {
        hero2.ckeckmover2()
        hero2.moverToLeft()
    }

})

function start() {
    hero1.draw();
    hero2.draw();
    ball.draw();
    gon1.drawgoal();
    gon2.drawgoal();
    if (checkCollision(ball, hero1)) {
        ball.dy = -(ball.dy - 1) * 0.8;
        ball.dx = -(ball.dx - 1) * 0.8;

    }
    if (checkCollision(ball, hero2)) {
        ball.dy = -(ball.dy - 1) * 0.8;
        ball.dx = -(ball.dx - 1) * 0.8;
    }
    if (checkCollision(ball, gon1)) {
        ball.dy = -(ball.dy - 1) * 0.8;
        ball.dx = -(ball.dx - 1) * 0.8;
        document.getElementById("scoreblue").innerHTML = diemxanh += 1
        checkscore();
    }
    if (checkCollision(ball, gon2)) {
        ball.dy = -(ball.dy - 1) * 0.8;
        ball.dx = -(ball.dx - 1) * 0.8;
        document.getElementById("scorered").innerHTML = diemdo += 1
        checkscore()
    }
    window.requestAnimationFrame(start);

}

start();

