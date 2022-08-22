const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

class Player {
    constructor() {
        this.position = {
            x: canvas.width * 0.1,
            y: canvas.height / 4
        }
        // this.width = 100
        // this.height = 100
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0
        this.result = this.velocity.y / 0.850903
        
        const image = new Image()
        image.src = './pngwing.com (5).png'
        image.onload = () => {
            const scale = 0.05
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width /2,
                y: canvas.height / 4
            }
        }
        
       
    }
    

    draw() {
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        // c.fillStyle = 'blue'
        
        if (this.image) 
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        



    }
    update() {
        player.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height > canvas.height)
            this.position.y = canvas.height * 0.92 // ojo bug
        
        if (this.position.x < 0)
            this.position.x = 0
        if (this.position.y < 0)
            this.position.y = 0
        if (this.position.y + this.height > canvas.height)
            this.position.y = canvas.height - this.height
    }
}

class Obstacle {
    constructor () {
        this.position = {
            x: innerWidth - 100,
            y: innerHeight * 0.2
        }
        this.width = 30
        this.height = 30
    }        
    draw() {
        c.fillStyle = 'black';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        
    }   
  
}

class Boss {
    constructor () {
        this.position = {
            x: 800,
            y:0
        }
        this.width = 400
        this.height = 400
    }
         draw() { 
        c.fillStyle = 'red'
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x


    }
}


class Meteorite {
    
}

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
        

const player = new Player() 
const obstacle = new Obstacle()
const bullets = [new Bullet( {position: {
    x: player.position.x,
    y: player.position.y
},
velocity:{
    x: -5,
    y: 0
}})]







key = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

function animation() {


    requestAnimationFrame(animation)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    projectile() 
    obstacle.draw()
   
    continuity()
    
    // shouting()
    
    
 
    
    
}
// tratar de mejorar el movimiento

animation()



window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 87:
            // player.velocity.y = -5
            key.up.pressed = true

            break;
        case 65:
            // player.velocity.x = -5
            key.left.pressed = true
            break;
        case 83:
            // player.velocity.y = 5
            key.down.pressed = true
            break;
        case 68:
            // player.velocity.x = 5
            key.right.pressed = true
            break;
        case 32:
            one_shot()
            key.space.pressed = true
            
            break;
        

    }
})


window.addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
        case 87:
            // player.velocity.y = -0.5
            key.up.pressed = false
            break;
        case 65:
            // player.velocity.x = -0.5
            key.left.pressed = false
            break;
        case 83:
            // player.velocity.y = 0.5
            key.down.pressed = false

            break;
        case 68:
            // player.velocity.x = 0.5
            key.right.pressed = false
            break;
        case 32:
            key.space.pressed = false
            
            break;


    }
})

function continuity() {
    if (key.left.pressed) {
        player.velocity.x = -5
    }
    else if (key.right.pressed) {
        player.velocity.x = 5
    } 
    else{
        player.velocity.x = 0
    }
    if (key.up.pressed) {    
            player.velocity.y = -5
    }
    else if (key.down.pressed) {
            player.velocity.y = 5
    }else{
        player.velocity.y = 0
    }

    if (key.left.pressed && key.right.pressed) {
        player.velocity.x = -5 
        player.velocity.y = 0
        player.rotation = .15
    }
    if (key.up.pressed && key.down.pressed) {
        player.velocity.x = 0 
        player.velocity.y = -5    
        player.rotation = -.15
    
    }
    // if (key.up.pressed && key.right.pressed) {
    //     // player.velocity.x = 2.5
    //     player.velocity.y = -5
    //     player.result = player.velocity.y / 0.85
        

    // }
}

// function result () {
//     player.result = player.velocity.y / 0.85
    
// }


function projectile() {
    bullets.forEach(bullet => {
       bullet.update()
    })
   
}

function shouting() {
    if (key.space.pressed) 
    {bullets.push(new Bullet( {position: {
        x: player.position.x + player.width / 2,
        y: player.position.y + player.height / 2
    },
    velocity: {
        x: 1,
        y: 0
    }})
    )
    
    }
}


function one_shot () {

    bullets.push(new Bullet( {position: {
        x: player.position.x + player.width / 2,
        y: player.position.y + player.height / 2
    },
    velocity: {
        x: 10,
        y: 0
    }})
    )
    console.log(bullets);
    
 
}