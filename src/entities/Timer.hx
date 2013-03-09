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
  }

  public override function update() {
    
    super.update();
    time = Math.floor(HXP.timeFlag()*1000.0);
  }

  public function getTime():Int {
    return time;
  }
}
