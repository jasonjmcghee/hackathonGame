package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Text;
import com.haxepunk.HXP;

class Timer extends Entity {
  
  private var time:Int;

  public function new() {

    super();
    time = 0;
    graphic = new Text('Time Alive: ' + time + ' seconds');
    graphic.scale = 2;
  }

  public override function update() {
    
    super.update();
    time += Math.floor(HXP.timeFlag()*1000.0);
    graphic.text('Time Alive: ' + time + ' seconds');
  }

  public function getTime():Int {
    return time;
  }
}
