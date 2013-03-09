import com.haxepunk.World;
import com.haxepunk.graphics.Tilemap;
import com.haxepunk.graphics.Text;
import com.haxepunk.graphics.Backdrop;
import com.haxepunk.masks.Grid;
import com.haxepunk.Entity;
import com.haxepunk.HXP;
import entities.Floor;
import entities.Hero;
import entities.Wall;

class GameWorld extends World {

  public function new() {
    super();
  }

  public override function begin() {
    
    //Floor
    //add(new Floor());

    hero = new Hero(50, 50);
    add(hero);

    // X Direction walls
    for (i in 0...40) {
        add(new Wall(i,0));
        add(new Wall(i,28));
    }

    // Y Direction walls
    for (i in 0...28) {
        add(new Wall(0,i));
        add(new Wall(39,i));
    }
  }

  public override function update() {
    HXP.camera.x = hero.x - HXP.halfWidth;
    HXP.camera.y = hero.y - HXP.halfHeight;
    super.update();
  }

  private var hero:Hero;
}
