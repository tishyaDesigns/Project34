class Mango{
    constructor(x,y,r){
  var options={
      isStatic:true,
      restituiton:0,
      friction:1,
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("images/mango.png")
  
  this.body=Bodies.circle(this.x,this.y,this.r,options)
  World.add(world,this.body)
    }

    display(){
      push();
      translate(this.body.position.x, this.body.position.y)
      imageMode(CENTER);
      image(this.image,0,0,70,70);
      pop();
    }
}
