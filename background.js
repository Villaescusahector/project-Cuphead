class Background {
    constructor(ctx) {
        this.c = ctx
        this.y = 0
        this.x = 0
        this.width = canvas.width
        this.heigth = canvas.heigth
        
        const image = new Image()
        image.src = '/Images/background.jpeg'
        image.onload = () => {
            this.image = image
            this.width = canvas.width
            this.height = canvas.height
            this.position = {
                x: 0,
                y: 0
            }
        }
    }

    draw() {
    this.c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
        
}

    

