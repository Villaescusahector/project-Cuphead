class Bullet {
    constructor(ctx, positionX, positionY) {
        this.c = ctx
        this.positionX = positionX
        this.positionY = positionY
        this.velocity = 5
        this.radius = 3
        this.frame = 0

        const image = new Image()
        image.src = '/Images/cupheadBullets.png'

        image.onload = () => {
            // const scale = .2 //0.125
            this.image = image
            this.width = image.width / 15 //* scale
            this.height = image.height * 1 //* scale
            this.position = {
                x: canvas.width / 2 - this.width /2,
                y: canvas.height / 4
            }
        }

    }

    draw() {
        // this.c.beginPath()
        // this.c.arc(this.positionX, this.positionY, this.radius,
        //     0, Math.PI * 2)
        // this.c.fillStyle = 'red'
        // this.c.fill()
        // this.c.closePath()
        // if (this.image) 
        // this.c.drawImage(this.image, this.positionX, this.positionY, this.width, this.height)
        if (this.image) 
        this.c.drawImage(this.image, 
            this.width * this.frame,
            0,
            this.width  ,
            this.height,
            this.positionX, this.positionY, this.width, this.height)
    

    }
    update() {
        this.animate(1)
        this.draw()
        this.positionX += this.velocity      
    }
    
    animate(rotation) {
        this.frame++
        if (this.frame > rotation) this.frame = 0
    }
}


            
 


