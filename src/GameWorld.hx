import com.haxepunk.World;
import entities.Hero;

class GameWorld extends World {

  public function new() {
    super();
  }

  public override function begin() {
    add(new Hero(30, 50));
  }
}
