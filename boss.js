class Boss {
    constructor () {
        this.position = {
            x: 950,
            y: 50
        }
        this.width = 300
        this.height = 300
    
    
    }
    Bossdraw() { 
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    
    
}