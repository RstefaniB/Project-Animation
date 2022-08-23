class Bullet {
    constructor(c, positionX, positionY) {
        this.c = c
        this.positionX = positionX
        this.positionY = positionY
        this.velocity = 5
        this.radius = 3

    }

    draw() {
        c.beginPath()
        c.arc(this.positionX, this.positionY, this.radius,
            0, Math.PI * 2)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()

    }
    update() {
        this.draw()
        this.positionX += this.velocity

        
       
    }

    shoting() {
        this.player.bullets.forEach(el => {
          el.update()
        })
        if (this.counter % 60 === 0) {
          const bullet  = new Bullet(c, this.position.x + this.width / 2, this.position.y + this.height / 2)
          this.bullets.push(bullet)

        }
    }
       
}


            
 


