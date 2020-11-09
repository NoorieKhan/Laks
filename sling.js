class sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:2
    }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
    }

    display(){
        if(this.sling.bodyA){
            
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            line (pointA.x,pointA.y,pointB.x,pointB.y);
    }


    }

    fly(){
        this.sling.bodyA=null;
        
    }

    attach(body){
		this.sling.bodyA=body;
	}

}