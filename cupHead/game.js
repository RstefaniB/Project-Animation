
const Game = {

  canvas: undefined,
  c: undefined,
  interval: undefined,
  FPS: 100,

  player: undefined,
  boss: undefined,
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
      // this.bullet.oneShot()
      this.meteoritesObs()
      this.bulletObs()
      // this.oneShot()
      // this.bullet



    }, 1000 / this.FPS)
  },

  generateAll() {
    this.player = new Player()
    this.boss = new Boss()
    // this.bullets.push(new Bullet(this.c, this.player.position.x, this.player.position.y, this.velocityX, this.velocityY))

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
  }


}














