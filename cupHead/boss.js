class Boss {
    constructor () {
        this.position = {
            x: 950,
            y: 50
        }
        this.width = 300
        this.height = canvas.height
        const image = new Image()
        image.src = '/Images/boss.png'
        image.onload = () => {
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width * 0.73 ,
                y: canvas.height / 20
            }
        }
    
        

    
    }
    draw() {

        if (this.image) 
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        
    }

    
    update(){
        this.draw()
    }
    
    
}




