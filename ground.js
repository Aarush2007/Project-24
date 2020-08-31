class Ground {
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(width/2, height-45, width, 35,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,width,20);
    }
}