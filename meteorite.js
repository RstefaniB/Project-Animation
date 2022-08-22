class Meteorite {
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
