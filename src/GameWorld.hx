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
import entities.Honey;
import entities.Blob;
import entities.Timer;

class GameWorld extends World {

  public function new() {
    super();
  }

  public override function begin() {


     // X Direction walls
    for (i in 0...worldWidth) {
        add(new Wall(i,0));
        add(new Wall(i,worldHeight));
    }

    // Y Direction walls
    for (i in 0...worldHeight) {
        add(new Wall(0,i));
        add(new Wall(worldWidth-1,i));
    }

    /* // Beginning cooridor
    for (i in 0...6) add(new Wall(6, i));
    for (i in 3...6) add(new Wall(i, 3));
    for (i in 7...10) add(new Wall(3, i));
    for (i in 9...14) add(new Wall(9, i));
    for (i in 17...25) add(new Wall(i, 20));
    for (i in 8...16) add(new Wall(15, i));
    for (i in 22...25) add(new Wall(i, 12));
    for (i in 0...8) add(new Wall(19, i));
    for (i in 22...24) add(new Wall(i, 18));
    for (i in 1...4) add(new Wall(25, i));
    for (i in 15...19) add(new Wall(i, 22));
    */


    // Naive generation
    for (i in 0...Math.floor(worldWidth)) {
      for (j in 0...Math.floor(worldHeight)) {
        if (!(i > worldWidth / 3 && j < Math.floor(worldWidth / 3) ||
        i < 2 * worldWidth / 3 && j > Math.floor(2* worldWidth / 3))) {
          if (Math.random() < 0.05) {
            add(new Honey(i, j));
            if (Math.random() < 0.1) {
              add(new Honey(i, j));
              if (Math.random() < 0.1) {
                add(new Honey(i, j));
              }
            }
          } 
        }
      }
    }

    //Floor
    //add(new Floor());

    hero = new Hero(550, 100);
    add(hero);

    for (i in 0...10) add(new Blob(400, 250, hero));

    timer = new Timer();
    add(timer);

 }

  public override function update() {

    if (timer.getTime() > 5 && hero.isAlive()) {
      HXP.camera.x = hero.x - HXP.halfWidth;
      HXP.camera.y = hero.y - HXP.halfHeight;
      if (HXP.camera.x < 0) HXP.camera.x = 0;
      if (HXP.camera.y < 0) HXP.camera.y = 0;
      if (HXP.camera.x > worldWidth*32 - HXP.width) HXP.camera.x = worldWidth*32 - HXP.width;
      if (HXP.camera.y > worldHeight*32 - HXP.height + 32) HXP.camera.y = worldHeight*32 - HXP.height + 32;
    } else {
      gameOver();
    }
    timer.x = HXP.camera.x + 10;
    timer.y = HXP.camera.y + 10;
    super.update();
  }

  public function gameOver() {
    isGameOver = true;
  }

  private var timer:Timer;
  private var hero:Hero;
  private var blob:Blob;
  private var worldWidth:Int = 40;
  private var worldHeight:Int = 28;
  private var isGameOver:Bool = false;
}
