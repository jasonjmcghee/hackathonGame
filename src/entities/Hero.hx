package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;
import com.haxepunk.HXP;
import entities.Wall;

class Hero extends Entity {
  
  private var xVel:Float;
  private var yVel:Float;
  private var xAccel:Float;
  private var yAccel:Float;
  private static inline var maxVelocity:Float = 10;
  private static inline var speed:Float = 4;
  private static inline var drag:Float = 0.4;

  public function new(posX:Int, posY:Int) {
    super(posX, posY);
    graphic = new Image("gfx/block.png");
    setHitbox(32, 32);
  }
  
  private function handleInput() {
      xAccel = 0;
      yAccel = 0;

      if (Input.check(Key.W)) yAccel = -1;
      if (Input.check(Key.A)) xAccel = -1;
      if (Input.check(Key.S)) yAccel = 1;
      if (Input.check(Key.D)) xAccel = 1;
  }
  public override function update() {
  
      super.update();
      handleInput();
      move();
      moveBy(xVel, yVel);
      if (collide("wall", x, y) != null) {
        xVel *= -1;
        yVel *= -1;
      }
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

  }
}
