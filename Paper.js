class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:5.0,
          density:1.6
      }

        this.x=x
        this.y=y
        this.r=r 
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body)

}
    display(){
      var paperpos = this.body.position;
      push()
      translate(paperpos.x, paperpos.y)
      ellipseMode(CENTER)
      // strokeWeight(3)
      fill("white");
      // ellipse(0,0,this.r-10,this.r-10);
      imageMode(CENTER);
      image(this.image, 0,0,this.r+15, this.r+15)
      pop()
    }
}