class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
         this.offsetX = offsetX;
         this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        var AnchorA1 = pointA.x;
        var AnchorA2 = pointA.y;

        var AnchorB1 = pointB.x + this.offsetX;
        var AnchorB2 = pointB.y + this.offsetY;
        line(AnchorA1, AnchorA2, AnchorB1, AnchorB2);
    }
}