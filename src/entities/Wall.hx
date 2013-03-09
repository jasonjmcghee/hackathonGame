package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;

class Wall extends Entity {

  public function new(posX:Int, posY:Int) {
    super(posX, posY);
    graphic = new Image("gfx/wall32.png");
    setHitbox(32, 32);
    type = "wall";
    x = posX * 32;
    y = posY * 32;
  }

}
