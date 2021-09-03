class Shard {
  constructor(color, x1, y1, x2, y2, x3, y3) {
    //this.idle = false;
    this.randomx = Math.round(random(-250, 250));
    this.randomy = Math.round(random(-250, 250));
    this.color = color;
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.rel_x1 = x1+this.randomx;
    this.rel_x2 = x2+this.randomx;
    this.rel_x3 = x3+this.randomx;
    this.rel_y1 = y1+this.randomy;
    this.rel_y2 = y2+this.randomy;
    this.rel_y3 = y3+this.randomy;
    this.velocity = 2;
    this.directionx=Math.sign(this.randomx)*-1;
    this.directiony=Math.sign(this.randomy)*-1;
    this.forcex = this.velocity * this.directionx;
    this.forcey = this.velocity * this.directiony;

}
  show() {
    fill(this.color);
    triangle(this.rel_x1, this.rel_y1, this.rel_x2,
    this.rel_y2, this.rel_x3, this.rel_y3);
  }

  move() {
    this.forcex = this.forcex*=1.1;
    this.forcey = this.forcey*=1.1;
    this.rel_x1+=this.forcex;
    this.rel_x2+=this.forcex;
    this.rel_x3+=this.forcex;
    this.rel_y1+=this.forcey;
    this.rel_y2+=this.forcey;
    this.rel_y3+=this.forcey;
  }

  checkPos() {
    this.diffx = this.rel_x1-this.x1;
    this.diffy = this.rel_y1-this.y1;
    if (-20 < this.diffx && this.diffx < 20) {
      this.rel_x1 = this.x1;
      this.rel_x2 = this.x2;
      this.rel_x3 = this.x3;
      this.forcex = 0;
    }
    if (-20 < this.diffy && this.diffy < 20) {
      this.rel_y1 = this.y1;
      this.rel_y2 = this.y2;
      this.rel_y3 = this.y3;
      this.forcey = 0;
    }
    if (this.forcex+this.forcey == 0) {
      this.idle = true;
    }
  }
}
