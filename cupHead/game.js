
const Game = {

  canvas: undefined,
  c: undefined,
  interval: undefined,
  FPS: 100,

  player: undefined,
  boss: undefined,
  bossHealth: 3,
  meteorites: [],
  lives: 1,
  counter: 0,
  frameCounter: 0,

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    canvas = document.querySelector('canvas')
    c = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  },

  start() {


    this.generateAll()

    this.interval = setInterval(() => {

      this.counter++;

      c.clearRect(0, 0, canvas.width, canvas.height)

      this.player.update()

      this.player.continuity()

      this.player.eventListener()

      this.boss.update()

      this.meteoritesObs()

      this.meteoriteCollision()

      this.bulletObs()

      this.deleteMeteorites()

      this.deleteBullet()





      // this.bossDamage()



    }, 1000 / this.FPS)
  },




  generateAll() {
    this.player = new Player()

    this.boss = new Boss()

  },

  meteoritesObs() {
    this.meteorites.forEach(el => {
      el.update()
    })
    if (this.counter % 60 === 0) {
      const meteorite = new Meteorite();
      this.meteorites.push(meteorite)
    }
  },

  bulletObs() {
    this.player.bullets.forEach(el => {
      el.update()
    })
  },






  // bossDamage() {
  //   this.player.bullets.forEach(bullet => {
  //     if (bullet.positionX > this.boss.position.x) {

  //       console.log('daño')
  //         this.boss.bossHealth -= 1
  //     }
  // })

  //   if (this.boss.bossHealth = 0)
  //     return gameOver()
  // },


  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.font = "60px Verdana";
    ctx.fillText("Game Over!", canvas.width / 6, 200);

  },


  deleteMeteorites() {
    const newMeteorites = this.meteorites.filter(meteorite => meteorite.x > 0)
    this.meteorites = newMeteorites

    // console.log(this.meteorites.length)

  },


  deleteBullet() {
    const deleteBullets = this.player.bullets.filter(bullet => bullet.positionX < canvas.width)
    this.player.bullets = deleteBullets

  },

  meteoriteCollision() {

    this.meteorites.forEach(meteorite => {

      if (this.player.position.y < meteorite.y + 30
        && this.player.position.y + 50 > meteorite.y
        && this.player.position.x + 50 > meteorite.x
        && this.player.position.x < meteorite.x + 30) {

        this.lives--
        if (this.lives === 0) {
          console.log('gameOver')

        }
      }
    })
  },

  bossDamage() {
    this.player.bullets.forEach(bullet => {
      console.log(this.player.bullets);
      if (bullet.position.x > boss.position.x) {
        this.bossHealth-- 
      if (this.bossHealth === 0) 
        console.log('win')        
      }
    })
  }
}




























