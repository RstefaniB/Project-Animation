class Player {
    constructor() {
        this.position = {
            x: canvas.width * 0.1,
            y: canvas.height / 4
        }
        this.width = 50
        this.height = 50
        this.velocity = {
            x: 0,
            y: 0
        }
        this.rotation = 0
        this.bullets = []

        
        
        // const image = new Image()
        // image.src = '/Images/pngwing.com (6).png'
        // image.onload = () => {
        //     const scale = 0.125
        //     this.image = image
        //     this.width = image.width * scale
        //     this.height = image.height * scale
        //     this.position = {
        //         x: canvas.width / 2 - this.width /2,
        //         y: canvas.height / 4
        //     }
        // }


        // for sprite
        // const image = new Image()
        // image.src = '/Images/standing.png'
        // image.onload = () => {
        //     const scale = .2 //0.125
        //     this.image = image
        //     this.width = image.width * 0.15 //* scale
        //     this.height = image.height * 0.5 //* scale
        //     this.position = {
        //         x: canvas.width / 2 - this.width /2,
        //         y: canvas.height / 4
        //     }
        // }
        //end of sprite

        // this.frame = 0
        // this.image.frame = 0



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
   
        
        // if (this.image) 
        // c.drawImage(this.image, 
        //     185.34 *  this.frame,
        //     0,
        //     185.34 ,
        //     230,
        //     this.position.x, this.position.y, this.width, this.height)

        
            // if (this.image) 
            c.filldraw = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
            
            // c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        //end of sprite
        
    }

    
    update() {
        // this.frame++
        // if (this.image.frame > 3) this.image.frame = 0
    
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

    // animate() {
    //     this.image.frame++;
    //     if (this.image.frame > 4) this.image.frame

    // }

    continuity() {
        if (this.key.left.pressed) {
            this.velocity.x = -5
        }
        else if (this.key.right.pressed) {
            this.velocity.x = 3
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
            const bullet  = new Bullet(c, this.position.x + this.width / 2, this.position.y + this.height / 2)
            this.bullets.push(bullet)
            
       
        


            }

            
       
        
    
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
             
                    this.key.up.pressed = false
                    break;
                case 65:
                    
                    this.key.left.pressed = false
                    break;
                case 83:
                 
                    this.key.down.pressed = false
        
                    break;
                case 68:
                  
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
                
                    this.key.up.pressed = true
        
                    break;
                case 65:
                   
                    this.key.left.pressed = true
                    break;
                case 83:
                   
                    this.key.down.pressed = true
                    break;
                case 68:
                   
                    this.key.right.pressed = true
                    break;
                case 32:
        
                    this.key.space.pressed = true
                    break;

                
                }
            }
        );
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
    
    }
