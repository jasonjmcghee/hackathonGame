package entities;

import com.haxepunk.Entity;
import com.haxepunk.graphics.Text;
import com.haxepunk.HXP;

class Timer extends Entity {
  
  private var time:Int;
  private var alive:Bool = true;

  public function new() {

    super();
    time = 0;
  }

  public override function update() {
    
    super.update();
    if (alive) time+=1;
    graphic = new Text('Score: ' + time);
  }

  public function getTime():Int {
    return time;
  }

  public function halt():Void {
    alive = false;
  }
}
