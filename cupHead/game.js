
const Game = {

  canvas: undefined,
  c: undefined,
  interval: undefined,
  FPS: 100,

  player: undefined,
  boss: undefined,
  bossHealth: 3,
  meteorites: [],

  counter: 0,

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


      // this.bullets.forEach(bullet => bullet.update())


      this.player.continuity()

      this.player.eventListener()

      this.boss.update()

      this.meteoritesObs()

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
    c.fillstyle = 'black';
    c.fillRect(50, 50, 500, 500);

  },
  
  deleteMeteorites() {
    const newMeteorites = this.meteorites.filter(meteorite => meteorite.x > 0 )
    this.meteorites = newMeteorites
      
    // console.log(this.meteorites.length)
      
    },
  

  deleteBullet() {
  const deleteBullets = this.player.bullets.filter(bullet => bullet.positionX < canvas.width)
  this.player.bullets = deleteBullets  
      // this.player.bullets.forEach(bullet => bullet.pop())
      // bullet.shift(bullet.x > this.canvas.width)
      console.log(this.player.bullets)
    },
    
  }


















