class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(0,0,255);
            strokeWeight(7); 
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }
}