class Bullet {
    constructor(ctx, positionX, positionY) {
        this.c = ctx
        this.positionX = positionX
        this.positionY = positionY
        this.velocity = 5
        this.radius = 3

    }

    draw() {
        this.c.beginPath()
        this.c.arc(this.positionX, this.positionY, this.radius,
            0, Math.PI * 2)
        this.c.fillStyle = 'red'
        this.c.fill()
        this.c.closePath()

    }
    update() {
        this.draw()
        this.positionX += this.velocity

        
       
    }

    
       
}


            
 


