class Boss {
    constructor(ctx) {
        this.c = ctx
        this.position = {
            x: 950,
            y: 50
        }
        this.width = 421
        this.height = canvas.height
        this.frame = 0

        const image = new Image()
        image.src = '/Images/BossNewAnimation.png'

        image.onload = () => {
            this.image = image
            this.width = 421 * 1.3
            this.height = 368 * 1.1
            this.position = {
                x: canvas.width * 0.6,
                y: canvas.height / 4
            }
        }
    }

    draw() {
        if (this.image)
            this.c.drawImage(
                this.image,
                419 * this.frame,
                0,
                419,
                368,
                this.position.x, this.position.y, this.width, this.height)
    }


    animate() {
        this.frame++
        if (this.frame > 20.8) this.frame = 0
    }
}




