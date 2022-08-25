class Boss {
    constructor (ctx) {
        this.c = ctx
        this.position = {
            x: 950,
            y: 50
        }
        this.width = 300
        this.height = canvas.height
        this.frame = 0

        const image = new Image()
        image.src = '/Images/Boss animation.png'

        image.onload = () => {
            this.image = image
            this.width = 439 //* scale
            this.height = image.height * 1 //* scale
            this.position = {
                x: canvas.width * 0.70,
                y: canvas.height / 4
            }
        }
    }

    draw() {
        if (this.image) 
        this.c.drawImage(this.image, 
            this.width * this.frame,
            0,
            this.width  ,
            this.height,
            this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.animate(30)
        this.draw()
    }

    animate(rotation) {
        this.frame++
        if (this.frame > rotation) this.frame = 0
        
    }
}




