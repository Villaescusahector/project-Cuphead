const Game = {

  canvas: undefined,
  c: undefined,
  width: undefined,
  height: undefined,

  interval: undefined,
  FPS: 60,

  player: undefined,
  boss: undefined,
  bossHealth: 50, // MOVER A BOSS
  meteorites: [],
  rocks: [],
  mete: [],
  lives: 1, // PLAYER

  counter: 0,

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

      if (this.counter % 6 === 0) {
        this.boss.animate()
      }
      if (this.counter % 4 === 0) {
        this.player.animate()
      }

      this.c.clearRect(0, 0, this.width, this.height)

      this.background.draw()

      this.player.update()

      this.player.setEventListener()

      this.player.checkKeys()

      this.boss.draw()

      this.drawObstacles()

      this.drawObstacles2()

      this.checkCollision()

      this.checkRocksCollision()

      this.createBullets()

      this.filterMeteorites()

      this.filterRocks()

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

  drawObstacles2() {
    this.rocks.forEach(rocks => rocks.update())
    if (this.bossHealth <= 25 && this.counter % 90 === 0) this.rocks.push(new Rocks(this.c))
  },

  createBullets() {
    this.player.bullets.forEach(bullet => bullet.update())
  },

  filterMeteorites() {
    this.meteorites = this.meteorites.filter(meteorite => meteorite.x > 0)
  },

  filterRocks() {
    this.rocks = this.rocks.filter(rocks => rocks.x > 0)
    console.log(this.rocks)
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
    this.player.bullets.forEach((bullet, i) => {
      if (bullet.positionX > this.boss.position.x + this.boss.width / 2 && bullet.positionY > this.boss.position.y / 2) {
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

  checkRocksCollision() {
    this.rocks.forEach(rocks => {
      if (this.player.position.y < rocks.y + 111
        && this.player.position.y + 47 > rocks.y
        && this.player.position.x + 118 > rocks.x
        && this.player.position.x < rocks.x + 47) {

        this.lives--

        if (this.lives === 0) {
          this.drawLose()
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
