const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

      

const player = new Player() 
const boss = new Boss()
const meteorite = new Meteorite()

const bullets = [new Bullet({
    position: {
        x: player.position.x,
        y: player.position.y
    },
    velocity: {
        x: -5,
        y: 0
    }
})]



function animation() {


    requestAnimationFrame(animation)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    
    projectile() 
    meteorite.draw()
    boss.Bossdraw()
   
    continuity()
    
    // shouting()
    
    
 
    
    
}
// tratar de mejorar el movimiento

animation()






