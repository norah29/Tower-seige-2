class Blocks 
extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/block1 pro26.png");
    this.image = loadImage("sprites/block3 pro26.png");
    this.image = loadImage("sprites/block4 pro26.png");
    this.image = loadImage("sprites/block5 pro26.png");
    this.image = loadImage("sprites/block6 pro26.png");
    this.image = loadImage("sprites/block7 pro26.png");
    World.add(world, this.body);
  }

};
