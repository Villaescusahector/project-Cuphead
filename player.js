class Player {
    constructor(ctx) {
        this.c = ctx
        this.position = {
            x: canvas.width * 0.1,
            y: canvas.height / 4
        }
        this.width = 50
        this.height = 50
        this.velocity = {
            x: 0,
            y: 0
        }

        this.magnitud = 5
        this.rotation = 0
        this.bullets = []

        this.canShoot = false

        const image = new Image()
        image.src = '/Images/cupHeadStanding.png'

        image.onload = () => {
            // const scale = .2 //0.125
            this.image = image
            this.width = image.width * 0.25 //* scale
            this.height = image.height * 1 //* scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height / 4
            }
        }

        const imageDown = new Image()
        imageDown.src = './Images/Down.png'

        imageDown.onload = () => {
            const scale = .2 //0.125
            this.imageDown = imageDown
            this.widthDown = imageDown.width / 11 //* scale
            this.heightDown = imageDown.height * 1 //* scale
            this.positionDown = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height / 4
            }
        }

        const imageUp = new Image()
        imageUp.src = './Images/Up.png'
        imageUp.onload = () => {
            const scale = .2 //0.125
            this.imageUp = imageUp
            this.widthUp = imageUp.width / 11 //* scale
            this.heightUp = imageUp.height * 1 //* scale
            this.positionUp = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height / 4
            }
        }

        this.sprites = {
            stand: {
                up: imageUp,
                down: imageDown
            }
        }

        this.currentSprite = this.sprites.stand.up

        this.frame = 0

        this.key = {
            right: {
                pressed: false
            },
            left: {
                pressed: false
            },
            up: {
                pressed: false
            },
            down: {
                pressed: false
            },
            space: {
                pressed: false
            }
        }
    }

    draw() {

        if (this.image)
            this.c.drawImage(this.image,
                this.width * this.frame,
                0,
                this.width,
                this.height,
                this.position.x, this.position.y, this.width, this.height)

        if (this.imageRight)
            this.c.drawImage(this.imageRight,
                this.widthDown * this.frame,
                0,
                this.widthDown,
                this.heightDown,
                this.position.x, this.position.y, this.widthDown, this.heightDown)
    }

    animate() {
        this.frame++
        if (this.frame > 3) this.frame = 0
    }

    update() {

        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height > canvas.height)
            this.position.y = canvas.height * 0.92

        if (this.position.x < 0)
            this.position.x = 0
        if (this.position.y < 0)
            this.position.y = 0
        if (this.position.y + this.height > canvas.height)
            this.position.y = canvas.height - this.height
    }

    checkKeys() {

        if (this.key.left.pressed) {
            this.velocity.x = -this.magnitud
        }
        else if (this.key.right.pressed) {
            this.velocity.x = this.magnitud
        }
        else {
            this.velocity.x = 0
        }
        if (this.key.up.pressed) {
            this.velocity.y = -this.magnitud
        }
        else if (this.key.down.pressed) {
            this.velocity.y = this.magnitud
        } else {
            this.velocity.y = 0
        }
        if (this.key.space.pressed && this.canShoot) {
            const bullet = new Bullet(this.c, this.position.x + this.width / 2, this.position.y + this.height / 2)
            this.canShoot = false
            //   setInterval(this.bullets.push(bullet), 10000)          
            this.bullets.push(bullet)
        }
        if (this.key.left.pressed && this.key.right.pressed) {
            this.velocity.x = -5
            this.velocity.y = 0
            this.rotation = .15
        }
        if (this.key.up.pressed && this.key.down.pressed) {
            this.velocity.x = 0
            this.velocity.y = -5
            this.rotation = -.15

        }
    }

    setEventListener() {

        addEventListener('keyup', ({ keyCode }) => {

            // ORDENAD ESPACIOS
            switch (keyCode) {
                case 87:
                    this.key.up.pressed = false
                    break;

                case 65:
                    this.key.left.pressed = false
                    break;

                case 83:
                    this.key.down.pressed = false
                    break;

                case 68:
                    this.key.right.pressed = false
                    break;

                case 32:
                    this.key.space.pressed = false
                    break;

            }
        }),

            addEventListener('keydown', ({ keyCode }) => {

                switch (keyCode) {
                    case 87:
                        this.key.up.pressed = true
                        break;

                    case 65:
                        this.key.left.pressed = true
                        break;

                    case 83:
                        this.key.down.pressed = true
                        break;

                    case 68:
                        this.key.right.pressed = true
                        break;

                    case 32:
                        this.key.space.pressed = true
                        break;
                }
            }
            );
    }
}
