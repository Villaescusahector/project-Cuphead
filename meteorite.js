class Meteorite {
    constructor(ctx) {

        this.c = ctx
        this.x = canvas.width,
        this.y = Math.floor(Math.random() * canvas.height)
        this.frame = 0

        // this.width = 30
        // this.height = 30
        this.velocityX = -6;
    

        const image = new Image()
        image.src = '/Images/stars.png'

        image.onload = () => {
            this.image = image
            this.width = image.width / 7
            this.height = image.height * 1 
            this.position = {
                x: canvas.width ,
                y: canvas.height / 4
            }
        }
    }
    draw() {
        // this.c.context.drawImage(Image, dX, dY, dWidth, dHeight);
        // ck'; = 'bla
        // this.c.fillRect(this.x, this.y, this.width, this.height);

        if (this.image) 
        this.c.drawImage(this.image, 
            this.width * this.frame,
            0,
            this.width  ,
            this.height,
            this.x, this.y, this.width, this.height)
    }

    update() {
        this.animate(2)
        this.draw()
        this.x += this.velocityX
    }

    animate(rotation) {
        this.frame++
        if (this.frame > rotation) this.frame = 0
    }
}


class Rocks {
    constructor(ctx) {

        this.c = ctx
        this.x = canvas.width,
            this.y = Math.floor(Math.random() * canvas.height)
        this.frame = 0

        // this.width = 30
        // this.height = 30
        this.velocityX = -10;


        const image = new Image()
        image.src = '/Images/rocks.png'

        image.onload = () => {
            this.image = image
            this.width = image.width / 8
            this.height = image.height * 0.8
            this.position = {
                x: canvas.width,
                y: canvas.height / 4
            }
        }
    }
    draw() {
        // this.c.context.drawImage(Image, dX, dY, dWidth, dHeight);
        // ck'; = 'bla
        // this.c.fillRect(this.x, this.y, this.width, this.height);

        if (this.image)
            this.c.drawImage(this.image,
                this.width * this.frame,
                0,
                this.width,
                this.height,
                this.x, this.y, this.width, this.height)
    }

    update() {
        this.animate(7)
        this.draw()
        this.x += this.velocityX
    }

    animate(rotation) {
        this.frame++
        if (this.frame > rotation) this.frame = 0
    }
}


