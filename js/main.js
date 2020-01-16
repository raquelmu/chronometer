class Chrono{
    constructor(){
        this.timer = 0;
    }
    start(){
        const self = this;
        this.id = setInterval(function(){
            console.log(self.timer)
            self.timer++;
        }, 1000);
    }
    stop(){
        clearInterval(this.id)
    }
    reset(){
        this.timer = 0;
    }   
}

let myTimer = new Chrono();
myTimer.start();