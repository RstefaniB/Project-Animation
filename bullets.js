class Bullet {
    constructor({ position, velocity }){
        this.position = position
        this.velocity = velocity
        this.radius = 3
        
    }
    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 
            0 , Math.PI * 2)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()

    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
    }
}

function shouting() {
    if (key.space.pressed) {
        bullets.push(new Bullet({
            position: {
                x: player.position.x + player.width / 2,
                y: player.position.y + player.height / 2
            },
            velocity: {
                x: 1,
                y: 0
            }
        })
        )

    }
}


function one_shot() {

    bullets.push(new Bullet({
        position: {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2
        },
        velocity: {
            x: 10,
            y: 0
        }
    })
    )
    console.log(bullets);


}

function projectile() {
    bullets.forEach(bullet => {
        bullet.update()
    })

}
