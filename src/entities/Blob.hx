package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.HXP;
import entities.Wall;
import entities.Hero;

class Blob extends Entity {
  
  private var xVel:Float;
  private var yVel:Float;
  private var xAccel:Float;
  private var yAccel:Float;
  private var maxVelocity:Float = 8;
  private var speed:Float = 3;
  private var drag:Float = 0.4;
  private var enemy:Hero;

  public function new(posX:Int, posY:Int, hero:Hero) {
    super(posX, posY);
    graphic = new Image("gfx/blob.png");
    setHitbox(32, 32);
    enemy = hero;
    type = "blob";

    var seed:Float = Math.random();
    if (seed < 0.75) seed += 0.5;
    maxVelocity *= seed;
    speed *= seed*2;
    drag *= seed/2;
    
  }
  
  private function handleInput() {
      xAccel = 0;
      yAccel = 0;

      if (enemy.y > y) yAccel = 1;
      if (enemy.x > x) xAccel = 1;
      if (enemy.y < y) yAccel = -1;
      if (enemy.x < x) xAccel = -1;
  }
  public override function update() {
  
      super.update();

      handleInput();
      if (collide("wall", x + (HXP.sign(xVel)*2), y + (HXP.sign(yVel)*2)) != null) {
        x -= HXP.sign(xVel);
        y -= HXP.sign(yVel);
        xVel *= -1;
        yVel *= -1;
      }
      move();
  }

  private function move() {
      
    xVel += xAccel * speed;
    yVel += yAccel * speed;

    var pab:Float = Math.sqrt(Math.pow(xVel, 2) + Math.pow(yVel, 2));
    var normalized:Float = maxVelocity / pab;
  
    if (pab > maxVelocity) {
        xVel *= normalized;
        yVel *= normalized;
    }

    if (xVel < 0) {
        xVel = Math.min(xVel + drag, 0);
    } else if (xVel > 0) {
        xVel = Math.max(xVel - drag, 0);
    }
    
    if (yVel < 0) {
        yVel = Math.min(yVel + drag, 0);
    } else if (yVel > 0) {
        yVel = Math.max(yVel - drag, 0);
    }
    moveBy(xVel, yVel);
  }

  public function getMoveDist():Float {
    return Math.sqrt(Math.pow(xVel, 2) + Math.pow(yVel, 2));
  }

  public function levelUp() {
    speed += 1;
    maxVelocity += 1;
    drag *= 0.9;
  }
}
