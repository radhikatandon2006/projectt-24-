class Paper {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
       // this.image=loadImage("paper.png")
       Matter.Bodies.circle(x,y,15,options);
        this.radius = 15;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       // translate(pos.x,pos.y);
        //rotate(angle);
       // imageMode(CENTER);
        fill("purple");
        //image(this.body.position.x,this.body.position.y,50,50);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }

}

