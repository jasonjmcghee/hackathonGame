package mt.deepnight;

class Cooldown {
	var cds				: Hash<Float>;
	public var defaultAllowLower	: Bool;
	var listeners		: Hash< Void->Void >;
	
	public function new() {
		defaultAllowLower = true;
		listeners = new Hash();
		reset();
	}
	
	public inline function reset() {
		cds = new Hash();
	}
	
	public inline function get(k) : Int {
		return cds.exists(k) ? Math.ceil(cds.get(k)) : -1;
	}
	
	public inline function getFloat(k) : Float {
		return cds.exists(k) ? cds.get(k) : -1;
	}
	
	public function bind(k, cb:Void->Void) {
		listeners.set(k, cb);
	}
	public function unbind(k) {
		listeners.remove(k);
	}
	
	public inline function set(k:String, v:Float, ?allowLower:Bool) {
		if( allowLower==true || defaultAllowLower || v>get(k) )
			if( v<=0 )
				unset(k);
			else
				cds.set(k,v);
	}
	
	public inline function unset(k) {
		cds.remove(k);
		if( listeners.exists(k) )
			listeners.get(k)();
	}
	
	public inline function has(k) {
		return get(k)>0;
	}
	
	public inline function update(?tmod=1.0) {
		for( k in cds.keys() )
			if( get(k)-tmod<=0 )
				unset(k);
			else
				set(k, get(k)-tmod, true);
	}
}
