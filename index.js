const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

class Player {
    constructor() {
        this.position = {
            x: canvas.width * 0.1,
            y: canvas.height / 2
        }
        this.width = 50
        this.height = 50
        this.velocity = {
            x: 0,
            y: 0
        }
        this.result = this.velocity.y / 0.850903
    }
    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.fillStyle = 'blue'

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
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.fillStyle = 'red';
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        
    }   
  
}
        

const player = new Player() 
const obstacle = new Obstacle()





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
    }
}

function animation() {


    requestAnimationFrame(animation)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    obstacle.draw()
    continuity()

    
    
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


    }
})

function continuity() {
    if (key.left.pressed) {
        player.velocity.x = -5
    }
    else if (key.right.pressed) {
        player.velocity.x = 5
    } else{
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
    }
    if (key.up.pressed && key.down.pressed) {
        player.velocity.x = 0 
        player.velocity.y = -5    
    
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

