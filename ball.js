class Ball {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      this.image= loadImage("polygon.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      pos.x= mouseX;
      pos.y= mouseY;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //strokeWeight(3);
      //stroke("white");
      //fill("red");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };