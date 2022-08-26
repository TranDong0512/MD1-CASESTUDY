canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

class Ract {
    constructor(x, y, width, height, id) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.id = id;
        this.speedX = 10;
        this.speedY = 10;
        // this.draw();
    }

    image() {
        ctx.canvas.getContext("2d")
        let base1_img = new Image();
        ctx.drawImage(base1_img, this.x, this.y, this.w, this.h);

    }

    draw() {
        canvas = document.getElementById("canvas")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        let img = document.getElementById(this.id);
        this.image();
        img.style.position = 'absolute';
        img.style.width = this.w + "px";
        img.style.height = this.h + "px";
        img.style.top = this.y + "px";
        img.style.left = this.x + "px";
    }

    ckeckmover() {
        if (canvas.width - hero1.x <= hero1.w) {
            hero1.x = canvas.width - hero1.w
        }
        if (hero1.x + hero1.w <= hero1.w + 10) {
            hero1.x = 5;
        }
        if (canvas.height - hero1.y <= hero1.h) {
            hero1.y = canvas.height - hero1.h
        }
        if (hero1.y + hero1.h <= hero1.h + 10) {
            hero1.y = 5;
        }
        this.x -= 0.1;
        this.y -= 0.1;
    }

    ckeckmover2() {
        if (canvas.width - hero2.x <= hero2.w) {
            hero2.x = canvas.width - hero2.w
        }
        if (hero2.x + hero2.w <= hero2.w + 10) {
            hero2.x = 5;
        }
        if (canvas.height - hero2.y <= hero2.h) {
            hero2.y = canvas.height - hero2.h
        }
        if (hero2.y + hero2.h <= hero2.h + 10) {
            hero2.y = 5;
        }
        this.x -= 0.1;
        this.y -= 0.1;
    }

    moverToLeft() {
        this.x -= this.speedX;
        this.draw();
    }

    moverToRight() {
        this.x += this.speedX;
        this.draw();
    }

    moverToTop() {
        this.y -= this.speedY;
        this.draw();
    }

    moverToBot() {
        this.y += this.speedY;
        this.draw();
    }

}

function checkCollision(cir, rect) {
    let Ax = cir.x;
    let Ay = cir.y;

    let rect_left = rect.x;
    let rect_top = rect.y;
    let rect_right = rect.x + rect.w;
    let rect_bottom = rect.y + rect.h;

    if (cir.x < rect_left)
        Ax = rect_left
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











