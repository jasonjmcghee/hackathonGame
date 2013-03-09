package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.utils.Input;
import com.haxepunk.utils.Key;

class Hero extends Entity {

  public function new(x:Int, y:Int) {
    super(x, y);
    graphic = new Image("gfx/block.png");
  }

  public override function update() {
  
    if (Input.check(Key.UP)) {
      moveBy(0, -2);
    } else if (Input.check(Key.DOWN)) {
      moveBy(0, 2);
    }

    if (Input.check(Key.LEFT)) {
      moveBy(-2, 0);
    } else if (Input.check(Key.RIGHT)) {
      moveBy(2, 0);
    }

    super.update();
  }
}
