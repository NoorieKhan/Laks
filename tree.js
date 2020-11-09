class tree {
constructor(x,y,width,height){
       
        
         this.width=380,
         this.height=400,
	this.x=x;
	this.y=y;
 this.image=loadImage("pm/tree.png")
         this.lbody=Bodies.rectangle(0,this.y-200,20,this.height,{isStatic:false});
         this.gbody=Bodies.rectangle(this.x,this.y,this.width,20,{isStatic:true});
         this.rbody=Bodies.rectangle(this.x+200,this.y-this.height/2,this.width/30,this.height/4,{isStatic:false});
       
        
         World.add(world,this.lbody) ;
         World.add(world,this.gbody) ;
         World.add(world,this.rbody) ;


           }
           display(){
            push ();
            translate(this.gbody.position.x,this.gbody.position.y);
fill(255);
            imageMode (CENTER);
            image(this.image,0,0,this.width,this.height);
            pop ();
}
}