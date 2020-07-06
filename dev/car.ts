/// <reference path="gameobjects.ts" />

class Car extends GameObject{

    private speed: number = 0

    constructor() {
        super("car")

        this.x = (Math.random() * -400) - 168
        this.y = Math.ceil(Math.random() * 5) * 120
        this.speed = Math.random() * 2 + 2
        this.setColor()

        this.hitbox = document.createElement("carhitbox")

        this.div = document.createElement("car")


        level.appendChild(this.div)

        this.x = (Math.random() * -400) - 168
        this.y = Math.ceil(Math.random() * 5) * 120
        this.speed = Math.random() * 2 + 2
        this.setColor()
    }

    public update(): void {
        this.x += this.speed
        
        if (this.x > window.innerWidth) {
            this.x = -168
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    }
        super.update()
    }

    private setColor() {
        let color:number = Math.random()*360 
        this.div.style.webkitFilter = "hue-rotate("+color+"deg)"
        this.div.style.filter = "hue-rotate("+color+"deg)"
    }

    

}