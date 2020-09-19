class Block {
    constructor(x,y,Img){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height =100;
        this.image = loadImage(Img);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
    };
