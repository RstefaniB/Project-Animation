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
    }
    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height > canvas.height)
            this.velocity.y = 0
        if (this.position.x < 0)
            this.position.x = 0
        if (this.position.y < 0)
            this.velocity.y = 0
    }
}

const player = new Player()
player.update()

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
    
}


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

