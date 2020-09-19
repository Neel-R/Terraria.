class Player {
    constructor(x,y,/*image*/) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
          }
            this.body = Bodies.rectangle(x, y, 12, 30, options);
            this.width = 12;
            this.height = 30;
            //this.image = loadImage("sprites/base.png");
            World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          }
    }