class Cup extends BaseClass {
  constructor(x, y,width,height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.1,
      'isStatic':false
  }
    super(x,y,width,height);
    this.image=loadImage("blue-cup-hi.png")
  }
};
