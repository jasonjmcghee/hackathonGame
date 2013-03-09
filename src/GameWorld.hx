import com.haxepunk.World;
import com.haxepunk.graphics.Tilemap;
import com.haxepunk.graphics.Text;
import com.haxepunk.graphics.atlas.TextureAtlas;
import com.haxepunk.masks.Grid;
import com.haxepunk.Entity;
import com.haxepunk.HXP;
import entities.Hero;
import mt.deepnight.SpriteLib;
@:bitmap("gfx/tiles.png") class GfxTiles extends flash.display.BitmapData {}


class GameWorld extends World {

  private var hero:Hero;
  var tiles:SpriteLib;

  public function new() {

    tiles = new SpriteLib( new GfxTiles(0,0) );
    tiles.setUnit(2,1);
    tiles.sliceUnit("wall", 0,0);  
  }

  public override function begin() {
    hero = new Hero(30, 50);
    add(hero);
  }

  public override function update() {
    super.update();
    HXP.camera.x = hero.x - HXP.halfWidth;
    HXP.camera.y = hero.y - HXP.halfHeight;
  }
}
