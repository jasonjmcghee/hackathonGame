import com.haxepunk.World;
import com.haxepunk.graphics.Tilemap;
import com.haxepunk.graphics.Text;
import com.haxepunk.graphics.atlas.TextureAtlas;
import com.haxepunk.masks.Grid;
import com.haxepunk.Entity;
import com.haxepunk.HXP;
import entities.Hero;
import entities.Wall;

class GameWorld extends World {

  private var hero:Hero;

  public function new() {
    super();
  }

  public override function begin() {
    hero = new Hero(50, 50);
    add(hero);

    for (i in 0...20) {
        add(new Wall(i,0));
        add(new Wall(i,14));
    }
    for (i in 0...14) {
        add(new Wall(0,i));
        add(new Wall(19,i));
    }
    for (i in 1...5) {
        add(new Wall(5-i,14-i));
        add(new Wall(8+i,5+i));
        add(new Wall(2+i,10-i));
        add(new Wall(13+i,8-i));
    }
  }

  public override function update() {
    HXP.camera.x = hero.x - HXP.halfWidth;
    HXP.camera.y = hero.y - HXP.halfHeight;
    super.update();
  }
}
