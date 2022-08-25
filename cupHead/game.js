const Game = {

  canvas: undefined,
  c: undefined,
  width: undefined,
  height: undefined,

  interval: undefined,
  FPS: 60,

  player: undefined,
  boss: undefined,
  bossHealth: 30, // MOVER A BOSS
  meteorites: [],
  mete : [],
  lives: 1, // PLAYER

  counter: 0,
  frameCounter: 0,

  init() {
    this.canvas = document.querySelector('canvas')
    this.c = canvas.getContext('2d')
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  },

  start() {

    this.generateAll()

    this.interval = setInterval(() => {

      this.counter++

      if (this.counter % 30 === 0) this.player.canShoot = true
     
      this.c.clearRect(0, 0, this.width, this.height)

      this.background.draw()

      this.player.update()

      this.player.setEventListener()

      this.player.checkKeys()

      this.boss.update()

      this.drawObstacles()

      this.checkCollision()

      this.createBullets()

      this.filterMeteorites()

      this.filterBullets()

      this.checkBulletsCollisions()

    }, 1000 / this.FPS)
  },

  generateAll() {
    this.background = new Background(this.c)
    this.player = new Player(this.c)
    this.boss = new Boss(this.c)
    this.audio()
    
  },

  drawObstacles() {
    this.meteorites.forEach(meteorite => meteorite.update())
    if (this.counter % 30 === 0) this.meteorites.push(new Meteorite(this.c))
  },

  createBullets() {
    this.player.bullets.forEach(bullet => bullet.update())
  },

  filterMeteorites() {
    this.meteorites = this.meteorites.filter(meteorite => meteorite.x > 0)
  },

  filterBullets() {
    this.player.bullets = this.player.bullets.filter(bullet => bullet.positionX < canvas.width)
  },

  checkCollision() {
    this.meteorites.forEach(meteorite => {
      if (this.player.position.y < meteorite.y + 40
        && this.player.position.y + 67 > meteorite.y
        && this.player.position.x + 80 > meteorite.x
        && this.player.position.x < meteorite.x + 48.14) {

        this.lives--
        
        if (this.lives === 0) {
        this.drawLose()
        }
      }
    })
  },

  checkBulletsCollisions() {
    this.player.bullets.forEach((bullet , i)=> {
      if (bullet.positionX > this.boss.position.x + this.boss.width / 2) { 
        this.bossHealth--
        this.player.bullets.splice(i, 1)
        console.log(this.bossHealth)
      if (this.bossHealth === 0) {
          this.drawWin()
        clearInterval(this.interval)    
      }
      }
    })
  },

  drawWin() {
    location.href = '/Images/winBoard.jpeg'
},

  drawLose() {
    location.href = './gamveOver.html'
  },
  audio() {
  var audio = new Audio('./backGroundMusic/Cuphead-OST-Ruse-Of-An-Ooze-Music.mp3');
  audio.play();
  }

 



























}
