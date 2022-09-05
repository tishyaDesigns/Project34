class Ground{

    constructor(x,y,width,height)
    {
    var options={
        isStatic:true,
        
    }
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.depth=this.depth-1;
    this.body=Bodies.rectangle(this.x,this.y,width,height,options)
    World.add(world,this.body)
    }
    display(){

        var groundpos=this.body.position
        push()
      // translate(groundpos.x,groundpos.y)
        rectMode(CENTER)
        fill("grey")
        rect(groundpos.x,groundpos.y,this.width,this.height)
        pop()
    } 
}
