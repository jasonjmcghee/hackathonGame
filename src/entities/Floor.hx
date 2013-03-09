package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Image;
import com.haxepunk.graphics.Tilemap;
import com.haxepunk.graphics.Backdrop;
import com.haxepunk.HXP;
import nme.display.BitmapData;
import flash.geom.Point;

class Floor extends Entity {

  public function new() {
    super();

    var _tiles:Tilemap = new Tilemap("gfx/tileset.png", 64, 32, 32, 32);
    _tiles.setTile(0, 0);
 
    // crate bitmapdata from tilemap
    var _bitmapData:BitmapData = new BitmapData(_tiles.width, _tiles.height, true, 0x00ffffff);
    _tiles.render(_bitmapData, new Point(0, 0), HXP.camera.clone());
 
    // create a backdrop from bitmapdata (seamless tile background)
    var _backdrop:Backdrop = new Backdrop(_bitmapData);
    _backdrop.scrollX = _backdrop.scrollY = .5;
 
    // set the graphic to the backdrop
    graphic = _backdrop;
  }

}
