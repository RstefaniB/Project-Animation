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
        this.bullets = []
        
        const image = new Image()
        image.src = '/cupHead/Images/pngwing.com (5).png'
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
        this.key = {
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
        
       
    }
    

    draw() {
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        // c.fillStyle = 'blue'
        
        if (this.image) 
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        
    }

    update() {
        this.draw()
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

    continuity() {
        if (this.key.left.pressed) {
            this.velocity.x = -5




        }
        else if (this.key.right.pressed) {
            this.velocity.x = 5
        } 
        else{
            this.velocity.x = 0
        }
        if (this.key.up.pressed) {    
            this.velocity.y = -5
        }
        else if (this.key.down.pressed) {
            this.velocity.y = 5
        }else{
            this.velocity.y = 0
        }
        if (this.key.space.pressed){
            const bullet = new Bullet(c, this.position.x + this.width / 2, this.position.y + this.height / 2)
                this.bullets.push(bullet)


            }

            
       
        //     oneShot() {
        //     counter++

        //     this.bullets.forEach(el => {
        //         el.update()
        //     })
        //     if (this.player.key.space.pressed) {
        //         const bullet = new Bullet(c, this.player.position.x + this.player.width / 2, this.player.position.y + this.player.height / 2)
        //         this.bullets.push(bullet)


        //     }
        // }
        
    
        if (this.key.left.pressed && this.key.right.pressed) {
            this.velocity.x = -5 
            this.velocity.y = 0
            this.rotation = .15
        }
        if (this.key.up.pressed && this.key.down.pressed) {
            this.velocity.x = 0 
            this.velocity.y = -5    
            this.rotation = -.15
        
        }
        
    }
    eventListener() { 

        addEventListener('keyup', ({ keyCode }) => {
        
            switch (keyCode) {
                case 87:
                    // player.velocity.y = -0.5
                    this.key.up.pressed = false
                    break;
                case 65:
                    // player.velocity.x = -0.5
                    this.key.left.pressed = false
                    break;
                case 83:
                    // player.velocity.y = 0.5
                    this.key.down.pressed = false
        
                    break;
                case 68:
                    // player.velocity.x = 0.5
                    this.key.right.pressed = false
                    break;
                case 32:
        
                    this.key.space.pressed = false
                    break;
        
        
            }
        }),
        
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode) {
                case 87:
                    // player.velocity.y = -5
                    this.key.up.pressed = true
        
                    break;
                case 65:
                    // player.velocity.x = -5
                    this.key.left.pressed = true
                    break;
                case 83:
                    // player.velocity.y = 5
                    this.key.down.pressed = true
                    break;
                case 68:
                    // player.velocity.x = 5
                    this.key.right.pressed = true
                    break;
                case 32:
        
                    this.key.space.pressed = true
                    break;
                }
            }
        );
        }
        
    
    
     
}












    // if (key.up.pressed && key.right.pressed) {
    //     // player.velocity.x = 2.5
    //     player.velocity.y = -5
    //     player.result = player.velocity.y / 0.85
        

    // }


    
      
    
    
    // window.addEventListener('keydown', ({ keyCode }) => {
    //     switch (keyCode) {
    //         case 87:
    //             // player.velocity.y = -5
    //             key.up.pressed = true
    
    //             break;
    //         case 65:
    //             // player.velocity.x = -5
    //             key.left.pressed = true
    //             break;
    //         case 83:
    //             // player.velocity.y = 5
    //             key.down.pressed = true
    //             break;
    //         case 68:
    //             // player.velocity.x = 5
    //             key.right.pressed = true 
    //             break;
    //         case 32:
                
    //             key.space.pressed = true   
    //             break;
    //     }
    // }
    //  ) 
    
    
        
    
    // window.addEventListener('keyup', ({ keyCode }) => {
    
    //     switch (keyCode) {
    //         case 87:
    //             // player.velocity.y = -0.5
    //             key.up.pressed = false
    //             break;
    //         case 65:
    //             // player.velocity.x = -0.5
    //             key.left.pressed = false
    //             break;
    //         case 83:
    //             // player.velocity.y = 0.5
    //             key.down.pressed = false
    
    //             break;
    //         case 68:
    //             // player.velocity.x = 0.5
    //             key.right.pressed = false
    //             break;
    //         case 32:
    
    //             key.space.pressed = false          
    //             break;
    
    
    //     }
    // })
    

