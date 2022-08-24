class Meteorite {
    constructor(ctx) {

        this.c = ctx
        this.x = canvas.width,
        this.y = Math.floor(Math.random() * canvas.height)

        this.width = 30
        this.height = 30
        this.velocityX = -1;
    }

    draw() {
        this.c.fillStyle = 'black';
        this.c.fillRect(this.x, this.y, this.width, this.height);
    }
    
    update() {
        this.draw()
        this.x += this.velocityX
    }
}
   


