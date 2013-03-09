package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.graphics.TiledImage;

class Honey extends Entity {

  public function new(posX:Int, posY:Int) {
    super(posX, posY);
    //graphic = new Image("gfx/lava.png");
    graphic = new TiledImage("gfx/lava.png", 32, 32);
    setHitbox(32, 32);
    type = "wall";
    x = posX * 32;
    y = posY * 32;
  }

}
