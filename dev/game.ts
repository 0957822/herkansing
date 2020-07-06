class Game {
    
    private div : HTMLElement
    
    private player : Player
    private cars : Car[] = []
    
    private score : number = 0
    private scoreElement: HTMLElement

    constructor() {    
        this.div = document.createElement("level")
        document.body.appendChild(this.div)
    
        this.scoreElement = document.createElement("score")
        this.scoreElement.innerHTML = "Score: 0"
        this.div.appendChild(this.scoreElement)

        this.player = new Player(this)

        for (let i = 0; i < 6; i++) {
            this.cars.push(new Car())
        }

    private gameLoop(){
        this.player.update()

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public addPoint() : void {
        this.score++
        this.scoreElement.innerHTML = "Score: "+this.score
    }
} 


window.addEventListener("load", ()=> new Game())