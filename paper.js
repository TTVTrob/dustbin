class Paper{
    constructor(x,y,w,h){
		var options={
			isStatic:false,
			friction:0,
			restitution:0.3,
			density:1.2,			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display(){
			
			var PaperPos=this.body.position;		
			push()
			translate(PaperPos.x, PaperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
            this.image.scale = 2;
			pop()
    }
}