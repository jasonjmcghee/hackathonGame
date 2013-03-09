(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.completed = null;
ApplicationMain.preloader = null;
ApplicationMain.total = null;
ApplicationMain.loaders = null;
ApplicationMain.urlLoaders = null;
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new Hash();
	ApplicationMain.urlLoaders = new Hash();
	ApplicationMain.total = 0;
	ApplicationMain.preloader = new com.haxepunk.Preloader();
	nme.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/preloader/haxepunk.png",loader);
	ApplicationMain.total++;
	var loader1 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_debug.png",loader1);
	ApplicationMain.total++;
	var loader2 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_step.png",loader2);
	ApplicationMain.total++;
	var loader3 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_pause.png",loader3);
	ApplicationMain.total++;
	var loader4 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_play.png",loader4);
	ApplicationMain.total++;
	var loader5 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_logo.png",loader5);
	ApplicationMain.total++;
	var loader6 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/debug/console_output.png",loader6);
	ApplicationMain.total++;
	var loader7 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/walls.png",loader7);
	ApplicationMain.total++;
	var loader8 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/tileset.png",loader8);
	ApplicationMain.total++;
	var loader9 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/block.png",loader9);
	ApplicationMain.total++;
	var loader10 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/wall32.png",loader10);
	ApplicationMain.total++;
	var loader11 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/lava.png",loader11);
	ApplicationMain.total++;
	var loader12 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/blob.png",loader12);
	ApplicationMain.total++;
	var loader13 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/floor.png",loader13);
	ApplicationMain.total++;
	var loader14 = new browser.display.Loader();
	ApplicationMain.loaders.set("gfx/wall.png",loader14);
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader15 = ApplicationMain.loaders.get(path);
			loader15.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader15.load(new browser.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new browser.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.getAsset = function(inName) {
	if(inName == "gfx/preloader/haxepunk.png") return nme.installer.Assets.getBitmapData("gfx/preloader/haxepunk.png");
	if(inName == "gfx/debug/console_debug.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_debug.png");
	if(inName == "gfx/debug/console_step.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_step.png");
	if(inName == "gfx/debug/console_pause.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_pause.png");
	if(inName == "gfx/debug/console_play.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_play.png");
	if(inName == "gfx/debug/console_logo.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_logo.png");
	if(inName == "gfx/debug/console_output.png") return nme.installer.Assets.getBitmapData("gfx/debug/console_output.png");
	if(inName == "font/04B_03__.ttf") return nme.installer.Assets.getFont("font/04B_03__.ttf");
	if(inName == "gfx/walls.png") return nme.installer.Assets.getBitmapData("gfx/walls.png");
	if(inName == "gfx/tileset.png") return nme.installer.Assets.getBitmapData("gfx/tileset.png");
	if(inName == "gfx/block.png") return nme.installer.Assets.getBitmapData("gfx/block.png");
	if(inName == "gfx/wall32.png") return nme.installer.Assets.getBitmapData("gfx/wall32.png");
	if(inName == "gfx/lava.png") return nme.installer.Assets.getBitmapData("gfx/lava.png");
	if(inName == "gfx/blob.png") return nme.installer.Assets.getBitmapData("gfx/blob.png");
	if(inName == "gfx/floor.png") return nme.installer.Assets.getBitmapData("gfx/floor.png");
	if(inName == "gfx/wall.png") return nme.installer.Assets.getBitmapData("gfx/wall.png");
	if(inName == "font/04B_03__.ttf") return nme.installer.Assets.getFont("font/04B_03__.ttf");
	return null;
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	nme.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = new Main();
		if(js.Boot.__instanceof(mainDisplayObj,browser.display.DisplayObject)) nme.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var browser = {}
browser.text = {}
browser.text.Font = function() {
	this.nmeMetrics = [];
	this.nmeFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(browser.text.Font.nmeFontData == null) {
		browser.text.Font.nmeFontData = [];
		browser.text.Font.nmeFontData["Bitstream_Vera_Sans"] = browser.text.Font.DEFAULT_FONT_DATA;
	}
	if(className == "browser.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["browser.text.Font"] = browser.text.Font;
browser.text.Font.__name__ = ["browser","text","Font"];
browser.text.Font.nmeFontData = null;
browser.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	var sans = new browser.text.Font();
	sans.set_fontName("Bitstream_Vera_Sans");
	sans.fontStyle = browser.text.FontStyle.REGULAR;
	sans.fontType = browser.text.FontType.DEVICE;
	return [sans];
}
browser.text.Font.nmeOfResource = function(name) {
	var data = haxe.Resource.getString(name);
	if(data == null) haxe.Log.trace("Resource data for string '" + name + "' not found.",{ fileName : "Font.hx", lineNumber : 107, className : "browser.text.Font", methodName : "nmeOfResource"}); else browser.text.Font.nmeFontData[name] = data;
}
browser.text.Font.registerFont = function(font) {
}
browser.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(browser.text.Font.nmeFontData[this.fontName] == null) try {
			browser.text.Font.nmeOfResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(browser.text.Font.nmeFontData[this.fontName] != null) try {
			this.nmeGlyphData = haxe.Unserializer.run(browser.text.Font.nmeFontData[this.fontName]);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,nmeSetScale: function(scale) {
		this.nmeFontScale = scale / 1024;
	}
	,nmeRender: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.nmeGlyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale,inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			}
		}
	}
	,nmeGetAdvance: function(inGlyph,height) {
		var m = this.nmeMetrics[inGlyph];
		if(m == null) {
			var glyph = this.nmeGlyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.nmeMetrics[inGlyph] = m = glyph._width * this.nmeFontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.nmeGlyphData.exists(HxOverrides.cca(str,0));
	}
	,nmeMetrics: null
	,nmeGlyphData: null
	,nmeFontScale: null
	,fontType: null
	,fontStyle: null
	,fontName: null
	,__class__: browser.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
var NME_font_04b_03___ttf = function() {
	browser.text.Font.call(this);
};
$hxClasses["NME_font_04b_03___ttf"] = NME_font_04b_03___ttf;
NME_font_04b_03___ttf.__name__ = ["NME_font_04b_03___ttf"];
NME_font_04b_03___ttf.__super__ = browser.text.Font;
NME_font_04b_03___ttf.prototype = $extend(browser.text.Font.prototype,{
	__class__: NME_font_04b_03___ttf
});
var NME_font_5 = function() {
	browser.text.Font.call(this);
};
$hxClasses["NME_font_5"] = NME_font_5;
NME_font_5.__name__ = ["NME_font_5"];
NME_font_5.__super__ = browser.text.Font;
NME_font_5.prototype = $extend(browser.text.Font.prototype,{
	__class__: NME_font_5
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.b += Std.string(this.matchedLeft());
			buf.b += Std.string(f(this));
			s = this.matchedRight();
		}
		buf.b += Std.string(s);
		return buf.b;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var com = {}
com.haxepunk = {}
com.haxepunk.Tweener = function() {
	this.active = true;
	this.autoClear = false;
};
$hxClasses["com.haxepunk.Tweener"] = com.haxepunk.Tweener;
com.haxepunk.Tweener.__name__ = ["com","haxepunk","Tweener"];
com.haxepunk.Tweener.prototype = {
	_tween: null
	,getTween: function() {
		return this._tween != null;
	}
	,hasTween: null
	,updateTweens: function() {
		var t, ft = this._tween;
		while(ft != null) {
			t = js.Boot.__cast(ft , com.haxepunk.Tween);
			if(t.active) {
				t.update();
				if(ft._finish) ft.finish();
			}
			ft = ft._next;
		}
	}
	,clearTweens: function() {
		var t, ft = this._tween;
		var fn;
		while(ft != null) {
			fn = ft._next;
			this.removeTween(js.Boot.__cast(ft , com.haxepunk.Tween));
			ft = fn;
		}
	}
	,removeTween: function(t) {
		var ft = t;
		if(ft._parent != this) throw "Core object does not contain Tween.";
		if(ft._next != null) ft._next._prev = ft._prev;
		if(ft._prev != null) ft._prev._next = ft._next; else this._tween = ft._next == null?null:js.Boot.__cast(ft._next , com.haxepunk.Tween);
		ft._next = ft._prev = null;
		ft._parent = null;
		t.active = false;
		return t;
	}
	,addTween: function(t,start) {
		if(start == null) start = false;
		var ft = t;
		if(ft._parent != null) throw "Cannot add a Tween object more than once.";
		ft._parent = this;
		ft._next = this._tween;
		var friendTween = this._tween;
		if(this._tween != null) friendTween._prev = t;
		this._tween = t;
		if(start) this._tween.start();
		return t;
	}
	,update: function() {
	}
	,autoClear: null
	,active: null
	,__class__: com.haxepunk.Tweener
	,__properties__: {get_hasTween:"getTween"}
}
com.haxepunk.World = function() {
	com.haxepunk.Tweener.call(this);
	this.visible = true;
	this.camera = new browser.geom.Point();
	this._count = 0;
	this._layerList = new Array();
	this._layerCount = new Array();
	this._renderFirst = new IntHash();
	this._renderLast = new IntHash();
	this._typeFirst = new Hash();
	this._add = new Array();
	this._remove = new Array();
	this._recycle = new Array();
	this._classCount = new Hash();
	this._typeCount = new Hash();
	this._recycled = new Hash();
	this._entityNames = new Hash();
};
$hxClasses["com.haxepunk.World"] = com.haxepunk.World;
com.haxepunk.World.__name__ = ["com","haxepunk","World"];
com.haxepunk.World.squareRects = function(x1,y1,w1,h1,x2,y2,w2,h2) {
	if(x1 < x2 + w2 && x2 < x1 + w1) {
		if(y1 < y2 + h2 && y2 < y1 + h1) return 0;
		if(y1 > y2) return (y1 - (y2 + h2)) * (y1 - (y2 + h2));
		return (y2 - (y1 + h1)) * (y2 - (y1 + h1));
	}
	if(y1 < y2 + h2 && y2 < y1 + h1) {
		if(x1 > x2) return (x1 - (x2 + w2)) * (x1 - (x2 + w2));
		return (x2 - (x1 + w1)) * (x2 - (x1 + w1));
	}
	if(x1 > x2) {
		if(y1 > y2) return com.haxepunk.World.squarePoints(x1,y1,x2 + w2,y2 + h2);
		return com.haxepunk.World.squarePoints(x1,y1 + h1,x2 + w2,y2);
	}
	if(y1 > y2) return com.haxepunk.World.squarePoints(x1 + w1,y1,x2,y2 + h2);
	return com.haxepunk.World.squarePoints(x1 + w1,y1 + h1,x2,y2);
}
com.haxepunk.World.squarePoints = function(x1,y1,x2,y2) {
	return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}
com.haxepunk.World.squarePointRect = function(px,py,rx,ry,rw,rh) {
	if(px >= rx && px <= rx + rw) {
		if(py >= ry && py <= ry + rh) return 0;
		if(py > ry) return (py - (ry + rh)) * (py - (ry + rh));
		return (ry - py) * (ry - py);
	}
	if(py >= ry && py <= ry + rh) {
		if(px > rx) return (px - (rx + rw)) * (px - (rx + rw));
		return (rx - px) * (rx - px);
	}
	if(px > rx) {
		if(py > ry) return com.haxepunk.World.squarePoints(px,py,rx + rw,ry + rh);
		return com.haxepunk.World.squarePoints(px,py,rx + rw,ry);
	}
	if(py > ry) return com.haxepunk.World.squarePoints(px,py,rx,ry + rh);
	return com.haxepunk.World.squarePoints(px,py,rx,ry);
}
com.haxepunk.World.__super__ = com.haxepunk.Tweener;
com.haxepunk.World.prototype = $extend(com.haxepunk.Tweener.prototype,{
	_entityNames: null
	,_recycled: null
	,_typeCount: null
	,_typeFirst: null
	,_classCount: null
	,_layerSort: null
	,_layerCount: null
	,_layerList: null
	,_renderLast: null
	,_renderFirst: null
	,_count: null
	,_updateFirst: null
	,_recycle: null
	,_remove: null
	,_add: null
	,unregisterName: function(e) {
		var fe = e;
		this._entityNames.remove(fe._name);
	}
	,registerName: function(e) {
		var fe = e;
		this._entityNames.set(fe._name,e);
	}
	,removeType: function(e) {
		var fe = e;
		if(this._typeFirst.get(fe._type) == e) this._typeFirst.set(fe._type,fe._typeNext);
		if(fe._typeNext != null) fe._typeNext._typePrev = fe._typePrev;
		if(fe._typePrev != null) fe._typePrev._typeNext = fe._typeNext;
		fe._typeNext = fe._typePrev = null;
		this._typeCount.set(fe._type,this._typeCount.get(fe._type) - 1);
	}
	,addType: function(e) {
		var fe = e;
		if(this._typeFirst.get(fe._type) != null) {
			this._typeFirst.get(fe._type)._typePrev = e;
			fe._typeNext = this._typeFirst.get(fe._type);
			this._typeCount.set(fe._type,this._typeCount.get(fe._type) + 1);
		} else {
			fe._typeNext = null;
			this._typeCount.set(fe._type,1);
		}
		fe._typePrev = null;
		this._typeFirst.set(fe._type,e);
	}
	,removeRender: function(e) {
		var fe = e;
		if(fe._renderNext != null) fe._renderNext._renderPrev = fe._renderPrev; else this._renderLast.set(fe._layer,fe._renderPrev);
		if(fe._renderPrev != null) fe._renderPrev._renderNext = fe._renderNext; else {
			this._renderFirst.set(fe._layer,fe._renderNext);
			if(fe._renderNext == null) {
				if(this._layerList.length > 1) {
					this._layerList[Lambda.indexOf(this._layerList,fe._layer)] = this._layerList[this._layerList.length - 1];
					this._layerSort = true;
				}
				this._layerList.pop();
			}
		}
		this._layerCount[fe._layer]--;
		fe._renderNext = fe._renderPrev = null;
	}
	,addRender: function(e) {
		var fe = e;
		var f = this._renderFirst.get(fe._layer);
		if(f != null) {
			fe._renderNext = f;
			f._renderPrev = e;
			this._layerCount[fe._layer]++;
		} else {
			this._renderLast.set(fe._layer,e);
			this._layerList[this._layerList.length] = fe._layer;
			this._layerSort = true;
			fe._renderNext = null;
			this._layerCount[fe._layer] = 1;
		}
		this._renderFirst.set(fe._layer,e);
		fe._renderPrev = null;
	}
	,removeUpdate: function(e) {
		var fe = e;
		if(this._updateFirst == e) this._updateFirst = fe._updateNext;
		if(fe._updateNext != null) fe._updateNext._updatePrev = fe._updatePrev;
		if(fe._updatePrev != null) fe._updatePrev._updateNext = fe._updateNext;
		fe._updateNext = fe._updatePrev = null;
		this._count--;
		this._classCount.set(fe._class,this._classCount.get(fe._class) - 1);
	}
	,addUpdate: function(e) {
		var fe = e;
		if(this._updateFirst != null) {
			this._updateFirst._updatePrev = e;
			fe._updateNext = this._updateFirst;
		} else fe._updateNext = null;
		fe._updatePrev = null;
		this._updateFirst = e;
		this._count++;
		if(this._classCount.get(fe._class) != 0) this._classCount.set(fe._class,0);
		this._classCount.set(fe._class,this._classCount.get(fe._class) + 1);
	}
	,layerSort: function(a,b) {
		if(a > b) return 1; else if(a < b) return -1;
		return 0;
	}
	,updateLists: function() {
		var e;
		var fe;
		if(this._remove.length > 0) {
			var _g = 0, _g1 = this._remove;
			while(_g < _g1.length) {
				var e1 = _g1[_g];
				++_g;
				fe = e1;
				if(fe._world == null) {
					var idx = Lambda.indexOf(this._add,e1);
					if(idx >= 0) this._add.splice(idx,1);
					continue;
				}
				if(fe._world != this) continue;
				e1.removed();
				fe._world = null;
				this.removeUpdate(e1);
				this.removeRender(e1);
				if(fe._type != "") this.removeType(e1);
				if(fe._name != "") this.unregisterName(e1);
				if(e1.autoClear && e1.getTween()) e1.clearTweens();
			}
			this._remove.length = 0;
		}
		if(this._add.length > 0) {
			var _g = 0, _g1 = this._add;
			while(_g < _g1.length) {
				var e1 = _g1[_g];
				++_g;
				fe = e1;
				if(fe._world != null) continue;
				fe._world = this;
				this.addUpdate(e1);
				this.addRender(e1);
				if(fe._type != "") this.addType(e1);
				if(fe._name != "") this.registerName(e1);
				e1.added();
			}
			this._add.length = 0;
		}
		if(this._recycle.length > 0) {
			var _g = 0, _g1 = this._recycle;
			while(_g < _g1.length) {
				var e1 = _g1[_g];
				++_g;
				fe = e1;
				if(fe._world != null || fe._recycleNext != null) continue;
				fe._recycleNext = this._recycled.get(fe._class);
				this._recycled.set(fe._class,e1);
			}
			this._recycle.length = 0;
		}
		if(this._layerSort) {
			if(this._layerList.length > 1) this._layerList.sort($bind(this,this.layerSort));
			this._layerSort = false;
		}
	}
	,getInstance: function(name) {
		return this._entityNames.get(name);
	}
	,getAll: function(into) {
		var e, fe = this._updateFirst, n = into.length;
		while(fe != null) {
			e = fe;
			into[n++] = e;
			fe = fe._updateNext;
		}
	}
	,getLayer: function(layer,into) {
		var e, fe = this._renderLast.get(layer), n = into.length;
		while(fe != null) {
			e = fe;
			into[n++] = e;
			fe = fe._updatePrev;
		}
	}
	,getClass: function(c,into) {
		var fe = this._updateFirst, n = into.length;
		while(fe != null) {
			if(js.Boot.__instanceof(fe,c)) into[n++] = fe;
			fe = fe._updateNext;
		}
	}
	,getType: function(type,into) {
		var fe = this._typeFirst.get(type), n = into.length;
		while(fe != null) {
			into[n++] = fe;
			fe = fe._typeNext;
		}
	}
	,getUniqueTypes: function() {
		var i = 0;
		var $it0 = this._typeCount.iterator();
		while( $it0.hasNext() ) {
			var type = $it0.next();
			i++;
		}
		return i;
	}
	,uniqueTypes: null
	,getLayerNearest: function() {
		if(this._updateFirst == null) return 0;
		return this._layerList[0];
	}
	,layerNearest: null
	,getLayerFarthest: function() {
		if(this._updateFirst == null) return 0;
		return this._layerList[this._layerList.length - 1];
	}
	,layerFarthest: null
	,getNearest: function() {
		if(this._updateFirst == null) return null;
		return js.Boot.__cast(this._renderFirst.get(this._layerList[0]) , com.haxepunk.Entity);
	}
	,nearest: null
	,getFarthest: function() {
		if(this._updateFirst == null) return null;
		return js.Boot.__cast(this._renderLast.get(this._layerList[this._layerList.length - 1]) , com.haxepunk.Entity);
	}
	,farthest: null
	,layerLast: function(layer) {
		if(this._updateFirst == null) return null;
		return js.Boot.__cast(this._renderLast.get(layer) , com.haxepunk.Entity);
	}
	,layerFirst: function(layer) {
		if(this._updateFirst == null) return null;
		return js.Boot.__cast(this._renderFirst.get(layer) , com.haxepunk.Entity);
	}
	,classFirst: function(c) {
		if(this._updateFirst == null) return null;
		var fe = this._updateFirst;
		while(fe != null) {
			if(js.Boot.__instanceof(fe,c)) return fe;
			fe = fe._updateNext;
		}
		return null;
	}
	,typeFirst: function(type) {
		if(this._updateFirst == null) return null;
		return js.Boot.__cast(this._typeFirst.get(type) , com.haxepunk.Entity);
	}
	,getLayers: function() {
		return this._layerList.length;
	}
	,layers: null
	,getFirst: function() {
		return js.Boot.__cast(this._updateFirst , com.haxepunk.Entity);
	}
	,first: null
	,layerCount: function(layer) {
		return this._layerCount[layer];
	}
	,classCount: function(c) {
		return this._classCount.get(c);
	}
	,typeCount: function(type) {
		return this._typeCount.get(type);
	}
	,getCount: function() {
		return this._count;
	}
	,count: null
	,nearestToPoint: function(type,x,y,useHitboxes) {
		if(useHitboxes == null) useHitboxes = false;
		var n, fe = this._typeFirst.get(type), nearDist = 179 * Math.pow(10,306), near = null, dist;
		if(useHitboxes) {
			while(fe != null) {
				n = js.Boot.__cast(fe , com.haxepunk.Entity);
				dist = com.haxepunk.World.squarePointRect(x,y,n.x - n.originX,n.y - n.originY,n.width,n.height);
				if(dist < nearDist) {
					nearDist = dist;
					near = n;
				}
				fe = fe._typeNext;
			}
			return near;
		}
		while(fe != null) {
			n = js.Boot.__cast(fe , com.haxepunk.Entity);
			dist = (x - n.x) * (x - n.x) + (y - n.y) * (y - n.y);
			if(dist < nearDist) {
				nearDist = dist;
				near = n;
			}
			fe = fe._typeNext;
		}
		return near;
	}
	,nearestToClass: function(type,e,classType,useHitboxes) {
		if(useHitboxes == null) useHitboxes = false;
		if(useHitboxes) return this.nearestToRect(type,e.x - e.originX,e.y - e.originY,e.width,e.height);
		var n, fe = this._typeFirst.get(type), nearDist = 179 * Math.pow(10,306), near = null, dist, x = e.x - e.originX, y = e.y - e.originY;
		while(fe != null) {
			n = js.Boot.__cast(fe , com.haxepunk.Entity);
			dist = (x - n.x) * (x - n.x) + (y - n.y) * (y - n.y);
			if(dist < nearDist && js.Boot.__instanceof(e,classType)) {
				nearDist = dist;
				near = n;
			}
			fe = fe._typeNext;
		}
		return near;
	}
	,nearestToEntity: function(type,e,useHitboxes) {
		if(useHitboxes == null) useHitboxes = false;
		if(useHitboxes) return this.nearestToRect(type,e.x - e.originX,e.y - e.originY,e.width,e.height);
		var n, fe = this._typeFirst.get(type), nearDist = 179 * Math.pow(10,306), near = null, dist, x = e.x - e.originX, y = e.y - e.originY;
		while(fe != null) {
			n = js.Boot.__cast(fe , com.haxepunk.Entity);
			dist = (x - n.x) * (x - n.x) + (y - n.y) * (y - n.y);
			if(dist < nearDist) {
				nearDist = dist;
				near = n;
			}
			fe = fe._typeNext;
		}
		return near;
	}
	,nearestToRect: function(type,x,y,width,height) {
		var n, fe = this._typeFirst.get(type), nearDist = 179 * Math.pow(10,306), near = null, dist;
		while(fe != null) {
			n = js.Boot.__cast(fe , com.haxepunk.Entity);
			dist = com.haxepunk.World.squareRects(x,y,width,height,n.x - n.originX,n.y - n.originY,n.width,n.height);
			if(dist < nearDist) {
				nearDist = dist;
				near = n;
			}
			fe = fe._typeNext;
		}
		return near;
	}
	,collidePointInto: function(type,pX,pY,into) {
		var e, fe = this._typeFirst.get(type), n = into.length;
		while(fe != null) {
			e = fe;
			if(e.collidePoint(e.x,e.y,pX,pY)) into[n++] = e;
			fe = fe._typeNext;
		}
	}
	,collideCircleInto: function(type,circleX,circleY,radius,into) {
		var e, fe = this._typeFirst.get(type), n = into.length;
		radius *= radius;
		while(fe != null) {
			e = fe;
			if(com.haxepunk.HXP.distanceSquared(circleX,circleY,e.x,e.y) < radius) into[n++] = e;
			fe = fe._typeNext;
		}
	}
	,collideRectInto: function(type,rX,rY,rWidth,rHeight,into) {
		var e, fe = this._typeFirst.get(type), n = into.length;
		while(fe != null) {
			e = fe;
			if(e.collideRect(e.x,e.y,rX,rY,rWidth,rHeight)) into[n++] = e;
			fe = fe._typeNext;
		}
	}
	,collideLine: function(type,fromX,fromY,toX,toY,precision,p) {
		if(precision == null) precision = 1;
		if(precision < 1) precision = 1;
		if(Math.sqrt((toX - fromX) * (toX - fromX) + (toY - fromY) * (toY - fromY)) < precision) {
			if(p != null) {
				if(fromX == toX && fromY == toY) {
					p.x = toX;
					p.y = toY;
					return this.collidePoint(type,toX,toY);
				}
				return this.collideLine(type,fromX,fromY,toX,toY,1,p);
			} else return this.collidePoint(type,fromX,toY);
		}
		var xDelta = Math.abs(toX - fromX) | 0, yDelta = Math.abs(toY - fromY) | 0, xSign = toX > fromX?precision:-precision, ySign = toY > fromY?precision:-precision, x = fromX, y = fromY, e;
		if(xDelta > yDelta) {
			ySign *= yDelta / xDelta;
			if(xSign > 0) while(x < toX) {
				if((e = this.collidePoint(type,x,y)) != null) {
					if(p == null) return e;
					if(precision < 2) {
						p.x = x - xSign;
						p.y = y - ySign;
						return e;
					}
					return this.collideLine(type,x - xSign | 0,y - ySign | 0,toX,toY,1,p);
				}
				x += xSign;
				y += ySign;
			} else while(x > toX) {
				if((e = this.collidePoint(type,x,y)) != null) {
					if(p == null) return e;
					if(precision < 2) {
						p.x = x - xSign;
						p.y = y - ySign;
						return e;
					}
					return this.collideLine(type,x - xSign | 0,y - ySign | 0,toX,toY,1,p);
				}
				x += xSign;
				y += ySign;
			}
		} else {
			xSign *= xDelta / yDelta;
			if(ySign > 0) while(y < toY) {
				if((e = this.collidePoint(type,x,y)) != null) {
					if(p == null) return e;
					if(precision < 2) {
						p.x = x - xSign;
						p.y = y - ySign;
						return e;
					}
					return this.collideLine(type,x - xSign | 0,y - ySign | 0,toX,toY,1,p);
				}
				x += xSign;
				y += ySign;
			} else while(y > toY) {
				if((e = this.collidePoint(type,x,y)) != null) {
					if(p == null) return e;
					if(precision < 2) {
						p.x = x - xSign;
						p.y = y - ySign;
						return e;
					}
					return this.collideLine(type,x - xSign | 0,y - ySign | 0,toX,toY,1,p);
				}
				x += xSign;
				y += ySign;
			}
		}
		if(precision > 1) {
			if(p == null) return this.collidePoint(type,toX,toY);
			if(this.collidePoint(type,toX,toY) != null) return this.collideLine(type,x - xSign | 0,y - ySign | 0,toX,toY,1,p);
		}
		if(p != null) {
			p.x = toX;
			p.y = toY;
		}
		return null;
	}
	,collidePoint: function(type,pX,pY) {
		var e, fe = this._typeFirst.get(type), result = null;
		while(fe != null) {
			e = js.Boot.__cast(fe , com.haxepunk.Entity);
			if(e.collidePoint(e.x,e.y,pX,pY)) {
				if(result == null) result = e; else if(e._layer < result._layer) result = e;
			}
			fe = fe._typeNext;
		}
		return result;
	}
	,collideRect: function(type,rX,rY,rWidth,rHeight) {
		var e, fe = this._typeFirst.get(type);
		while(fe != null) {
			e = js.Boot.__cast(fe , com.haxepunk.Entity);
			if(e.collideRect(e.x,e.y,rX,rY,rWidth,rHeight)) return e;
			fe = fe._typeNext;
		}
		return null;
	}
	,isAtBack: function(e) {
		var fe = e;
		return fe._renderNext == null;
	}
	,isAtFront: function(e) {
		var fe = e;
		return fe._renderPrev == null;
	}
	,sendBackward: function(e) {
		var fe = e;
		if(fe._world != this || fe._renderNext == null) return false;
		fe._renderNext._renderPrev = fe._renderPrev;
		if(fe._renderPrev != null) fe._renderPrev._renderNext = fe._renderNext; else this._renderFirst.set(fe._layer,fe._renderNext);
		fe._renderPrev = fe._renderNext;
		fe._renderNext = fe._renderNext._renderNext;
		fe._renderPrev._renderNext = e;
		if(fe._renderNext != null) fe._renderNext._renderPrev = e; else this._renderLast.set(fe._layer,e);
		return true;
	}
	,bringForward: function(e) {
		var fe = e;
		if(fe._world != this || fe._renderPrev == null) return false;
		fe._renderPrev._renderNext = fe._renderNext;
		if(fe._renderNext != null) fe._renderNext._renderPrev = fe._renderPrev; else this._renderLast.set(fe._layer,fe._renderPrev);
		fe._renderNext = fe._renderPrev;
		fe._renderPrev = fe._renderPrev._renderPrev;
		fe._renderNext._renderPrev = e;
		if(fe._renderPrev != null) fe._renderPrev._renderNext = e; else this._renderFirst.set(fe._layer,e);
		return true;
	}
	,sendToBack: function(e) {
		var fe = e;
		if(fe._world != this || fe._renderNext == null) return false;
		fe._renderNext._renderPrev = fe._renderPrev;
		if(fe._renderPrev != null) fe._renderPrev._renderNext = fe._renderNext; else this._renderFirst.set(fe._layer,fe._renderNext);
		fe._renderPrev = this._renderLast.get(fe._layer);
		fe._renderPrev._renderNext = e;
		this._renderLast.set(fe._layer,e);
		fe._renderNext = null;
		return true;
	}
	,bringToFront: function(e) {
		var fe = e;
		if(fe._world != this || fe._renderPrev == null) return false;
		fe._renderPrev._renderNext = fe._renderNext;
		if(fe._renderNext != null) fe._renderNext._renderPrev = fe._renderPrev; else this._renderLast.set(fe._layer,fe._renderPrev);
		fe._renderNext = this._renderFirst.get(fe._layer);
		fe._renderNext._renderPrev = e;
		this._renderFirst.set(fe._layer,e);
		fe._renderPrev = null;
		return true;
	}
	,clearRecycledAll: function() {
		var e, fe;
		var $it0 = this._recycled.iterator();
		while( $it0.hasNext() ) {
			var e1 = $it0.next();
			fe = e1;
			this.clearRecycled(fe._class);
		}
	}
	,clearRecycled: function(classType) {
		var e = this._recycled.get(classType), fe, n;
		while(e != null) {
			fe = e;
			n = fe._recycleNext;
			fe._recycleNext = null;
			e = n;
		}
		this._recycled.set(classType,null);
	}
	,recycle: function(e) {
		this._recycle[this._recycle.length] = e;
		return this.remove(e);
	}
	,create: function(classType,addToWorld) {
		if(addToWorld == null) addToWorld = true;
		var className = Type.getClassName(classType);
		var fe = this._recycled.get(className);
		if(fe != null) {
			this._recycled.set(className,fe._recycleNext);
			fe._recycleNext = null;
		} else fe = Type.createInstance(classType,[]);
		var e = fe;
		if(addToWorld) return this.add(e);
		return e;
	}
	,addMask: function(mask,type,x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		var e = new com.haxepunk.Entity(x,y,null,mask);
		if(type != "") e.setType(type);
		e.active = e.visible = false;
		return this.add(e);
	}
	,addGraphic: function(graphic,layer,x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		if(layer == null) layer = 10;
		var e = new com.haxepunk.Entity(x,y,graphic);
		if(layer != 10) e.setLayer(layer);
		e.active = false;
		return this.add(e);
	}
	,removeList: function(list) {
		var $it0 = $iterator(list)();
		while( $it0.hasNext() ) {
			var e = $it0.next();
			this.remove(e);
		}
	}
	,addList: function(list) {
		var $it0 = $iterator(list)();
		while( $it0.hasNext() ) {
			var e = $it0.next();
			this.add(e);
		}
	}
	,removeAll: function() {
		var fe = this._updateFirst;
		while(fe != null) {
			this._remove[this._remove.length] = js.Boot.__cast(fe , com.haxepunk.Entity);
			fe = fe._updateNext;
		}
	}
	,remove: function(e) {
		this._remove[this._remove.length] = e;
		return e;
	}
	,add: function(e) {
		this._add[this._add.length] = e;
		return e;
	}
	,getMouseY: function() {
		return com.haxepunk.HXP.screen.getMouseY() + com.haxepunk.HXP.camera.y | 0;
	}
	,mouseY: null
	,getMouseX: function() {
		return com.haxepunk.HXP.screen.getMouseX() + com.haxepunk.HXP.camera.x | 0;
	}
	,mouseX: null
	,render: function() {
		var e, fe, i = this._layerList.length;
		while(i-- > 0) {
			fe = this._renderLast.get(this._layerList[i]);
			while(fe != null) {
				e = js.Boot.__cast(fe , com.haxepunk.Entity);
				if(e.visible) e.render();
				fe = fe._renderPrev;
			}
		}
	}
	,update: function() {
		var e, fe = this._updateFirst;
		while(fe != null) {
			e = js.Boot.__cast(fe , com.haxepunk.Entity);
			if(e.active) {
				if(e.getTween()) e.updateTweens();
				e.update();
			}
			if(e._graphic != null && e._graphic.active) e._graphic.update();
			fe = fe._updateNext;
		}
	}
	,focusLost: function() {
	}
	,focusGained: function() {
	}
	,end: function() {
	}
	,begin: function() {
	}
	,camera: null
	,visible: null
	,__class__: com.haxepunk.World
	,__properties__: $extend(com.haxepunk.Tweener.prototype.__properties__,{get_mouseX:"getMouseX",get_mouseY:"getMouseY",get_count:"getCount",get_first:"getFirst",get_layers:"getLayers",get_farthest:"getFarthest",get_nearest:"getNearest",get_layerFarthest:"getLayerFarthest",get_layerNearest:"getLayerNearest",get_uniqueTypes:"getUniqueTypes"})
});
var GameWorld = function() {
	this.isGameOver = false;
	this.worldHeight = 28;
	this.worldWidth = 40;
	com.haxepunk.World.call(this);
};
$hxClasses["GameWorld"] = GameWorld;
GameWorld.__name__ = ["GameWorld"];
GameWorld.__super__ = com.haxepunk.World;
GameWorld.prototype = $extend(com.haxepunk.World.prototype,{
	isGameOver: null
	,worldHeight: null
	,worldWidth: null
	,blob: null
	,hero: null
	,timer: null
	,gameOver: function() {
		this.isGameOver = true;
		this.timer.halt();
	}
	,update: function() {
		if(this.hero.isAlive()) {
			com.haxepunk.HXP.camera.x = this.hero.x - com.haxepunk.HXP.halfWidth;
			com.haxepunk.HXP.camera.y = this.hero.y - com.haxepunk.HXP.halfHeight;
			if(com.haxepunk.HXP.camera.x < 0) com.haxepunk.HXP.camera.x = 0;
			if(com.haxepunk.HXP.camera.y < 0) com.haxepunk.HXP.camera.y = 0;
			if(com.haxepunk.HXP.camera.x > this.worldWidth * 32 - com.haxepunk.HXP.width) com.haxepunk.HXP.camera.x = this.worldWidth * 32 - com.haxepunk.HXP.width;
			if(com.haxepunk.HXP.camera.y > this.worldHeight * 32 - com.haxepunk.HXP.height + 32) com.haxepunk.HXP.camera.y = this.worldHeight * 32 - com.haxepunk.HXP.height + 32;
		} else this.gameOver();
		this.timer.x = com.haxepunk.HXP.camera.x + 10;
		this.timer.y = com.haxepunk.HXP.camera.y + 10;
		com.haxepunk.World.prototype.update.call(this);
	}
	,begin: function() {
		var _g1 = 0, _g = this.worldWidth;
		while(_g1 < _g) {
			var i = _g1++;
			this.add(new entities.Wall(i,0));
			this.add(new entities.Wall(i,this.worldHeight));
		}
		var _g1 = 0, _g = this.worldHeight;
		while(_g1 < _g) {
			var i = _g1++;
			this.add(new entities.Wall(0,i));
			this.add(new entities.Wall(this.worldWidth - 1,i));
		}
		var _g1 = 0, _g = Math.floor(this.worldWidth - 1);
		while(_g1 < _g) {
			var i = _g1++;
			var _g3 = 0, _g2 = Math.floor(this.worldHeight - 1);
			while(_g3 < _g2) {
				var j = _g3++;
				if(!(i > this.worldWidth / 3 && j < Math.floor(this.worldWidth / 3) || i < 2 * this.worldWidth / 3 && j > Math.floor(2 * this.worldWidth / 3))) {
					if(Math.random() < 0.05) {
						this.add(new entities.Honey(i,j));
						if(Math.random() < 0.1) {
							this.add(new entities.Honey(i,j));
							if(Math.random() < 0.1) this.add(new entities.Honey(i,j));
						}
					}
				}
			}
		}
		this.hero = new entities.Hero(550,100);
		this.add(this.hero);
		var _g = 0;
		while(_g < 10) {
			var i = _g++;
			this.add(new entities.Blob(400,250,this.hero));
		}
		this.timer = new entities.Timer();
		this.add(this.timer);
	}
	,__class__: GameWorld
});
var Hash = function() {
	this.h = { };
};
$hxClasses["Hash"] = Hash;
Hash.__name__ = ["Hash"];
Hash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: Hash
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: IntHash
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIter"] = IntIter;
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,max: null
	,min: null
	,__class__: IntIter
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !$iterator(it)().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = $iterator(a)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = $iterator(b)();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b += Std.string(sep);
			s.b += Std.string(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += Std.string("{");
		while(l != null) {
			if(first) first = false; else s.b += Std.string(", ");
			s.b += Std.string(Std.string(l[0]));
			l = l[1];
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,length: null
	,q: null
	,h: null
	,__class__: List
}
browser.events = {}
browser.events.IEventDispatcher = function() { }
$hxClasses["browser.events.IEventDispatcher"] = browser.events.IEventDispatcher;
browser.events.IEventDispatcher.__name__ = ["browser","events","IEventDispatcher"];
browser.events.IEventDispatcher.prototype = {
	willTrigger: null
	,removeEventListener: null
	,hasEventListener: null
	,dispatchEvent: null
	,addEventListener: null
	,__class__: browser.events.IEventDispatcher
}
browser.events.EventDispatcher = function(target) {
	if(target != null) this.nmeTarget = target; else this.nmeTarget = this;
	this.nmeEventMap = [];
};
$hxClasses["browser.events.EventDispatcher"] = browser.events.EventDispatcher;
browser.events.EventDispatcher.__name__ = ["browser","events","EventDispatcher"];
browser.events.EventDispatcher.__interfaces__ = [browser.events.IEventDispatcher];
browser.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
browser.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.nmeEventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.nmeEventMap[type];
	}
	,existList: function(type) {
		return this.nmeEventMap != null && this.nmeEventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.nmeTarget;
		var capture = event.eventPhase == browser.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.nmeGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new browser.events.Listener(inListener,capture,priority));
		list.sort(browser.events.EventDispatcher.compareListeners);
	}
	,nmeEventMap: null
	,nmeTarget: null
	,__class__: browser.events.EventDispatcher
}
browser.display = {}
browser.display.IBitmapDrawable = function() { }
$hxClasses["browser.display.IBitmapDrawable"] = browser.display.IBitmapDrawable;
browser.display.IBitmapDrawable.__name__ = ["browser","display","IBitmapDrawable"];
browser.display.IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: browser.display.IBitmapDrawable
}
browser.display.DisplayObject = function() {
	browser.events.EventDispatcher.call(this,null);
	this._nmeId = browser.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new browser.geom.Transform(this));
	this.nmeX = 0.0;
	this.nmeY = 0.0;
	this.nmeScaleX = 1.0;
	this.nmeScaleY = 1.0;
	this.nmeRotation = 0.0;
	this.nmeWidth = 0.0;
	this.nmeHeight = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.nmeFilters = new Array();
	this.nmeBoundsRect = new browser.geom.Rectangle();
	this.nmeScrollRect = null;
	this.nmeMask = null;
	this.nmeMaskingObj = null;
	this.set_nmeCombinedVisible(this.get_visible());
};
$hxClasses["browser.display.DisplayObject"] = browser.display.DisplayObject;
browser.display.DisplayObject.__name__ = ["browser","display","DisplayObject"];
browser.display.DisplayObject.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.DisplayObject.__super__ = browser.events.EventDispatcher;
browser.display.DisplayObject.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.nmeBoundsRect.width;
		if(this.nmeScaleX * w != inValue) {
			if(w <= 0) return 0;
			this.nmeScaleX = inValue / w;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeWidth;
	}
	,set_y: function(inValue) {
		if(this.nmeY != inValue) {
			this.nmeY = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.nmeY;
	}
	,set_x: function(inValue) {
		if(this.nmeX != inValue) {
			this.nmeX = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.nmeX;
	}
	,set_visible: function(inValue) {
		if(this.nmeVisible != inValue) {
			this.nmeVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeVisible;
	}
	,get_visible: function() {
		return this.nmeVisible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.nmeInvalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return browser.Lib.nmeGetStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.nmeScrollRect = inValue;
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.nmeScrollRect == null) return null;
		return this.nmeScrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.nmeScaleY != inValue) {
			this.nmeScaleY = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.nmeScaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.nmeScaleX != inValue) {
			this.nmeScaleX = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.nmeScaleX;
	}
	,set_rotation: function(inValue) {
		if(this.nmeRotation != inValue) {
			this.nmeRotation = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.nmeRotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.nmeInvalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.nmeChildren,this);
			this.parent.nmeInvalidateBounds();
		}
		if(inValue != null) {
			inValue._nmeRenderFlags |= 64;
			if(inValue.parent != null) inValue.parent._nmeRenderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new browser.events.Event(browser.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new browser.events.Event(browser.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set_nmeCombinedVisible: function(inValue) {
		if(this.nmeCombinedVisible != inValue) {
			this.nmeCombinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeCombinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new browser.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new browser.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this._nmeRenderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this._nmeRenderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = null;
		this.nmeMask = inValue;
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = this;
		return this.nmeMask;
	}
	,get_mask: function() {
		return this.nmeMask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.nmeBoundsRect.height;
		if(this.nmeScaleY * h != inValue) {
			if(h <= 0) return 0;
			this.nmeScaleY = inValue / h;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeHeight;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.nmeFilters == null?0:this.nmeFilters.length;
		if(filters == null) {
			this.nmeFilters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.nmeFilters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.nmeFilters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return (this._nmeRenderFlags & 64) != 0; else return (this._nmeRenderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.nmeFilters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.nmeFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.nmeGetGraphics();
			if(gfx == null) {
				this.nmeBoundsRect.x = this.get_x();
				this.nmeBoundsRect.y = this.get_y();
				this.nmeBoundsRect.width = 0;
				this.nmeBoundsRect.height = 0;
			} else {
				this.nmeBoundsRect = gfx.nmeExtent.clone();
				if(this.scale9Grid != null) {
					this.nmeBoundsRect.width *= this.nmeScaleX;
					this.nmeBoundsRect.height *= this.nmeScaleY;
					this.nmeWidth = this.nmeBoundsRect.width;
					this.nmeHeight = this.nmeBoundsRect.height;
				} else {
					this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
					this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
				}
				gfx.boundsDirty = false;
			}
			this._nmeRenderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && gfx.nmeSurface != null) browser.Lib.nmeSetSurfaceVisible(gfx.nmeSurface,inValue);
	}
	,nmeValidateMatrix: function() {
		var parentMatrixInvalid = (this._nmeRenderFlags & 8) != 0 && this.parent != null;
		if((this._nmeRenderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.nmeValidateMatrix();
			var m = this.transform.get_matrix();
			if((this._nmeRenderFlags & 16) != 0) this._nmeRenderFlags &= -5;
			if((this._nmeRenderFlags & 4) != 0) {
				m.identity();
				m.scale(this.nmeScaleX,this.nmeScaleY);
				var rad = this.nmeRotation * browser.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.nmeX,this.nmeY);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.nmeGetFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.nmeGetFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.nmeSetFullMatrix(fm);
				this._nmeRenderFlags |= 32;
			}
			this._nmeRenderFlags &= -29;
		}
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && lastMoveGfx != null && gfx != lastMoveGfx) browser.Lib.nmeSetSurfaceZIndexAfter(gfx.nmeSurface,lastMoveGfx.nmeSurface);
		if(gfx == null) gfx = lastMoveGfx;
		return gfx;
	}
	,nmeTestFlag: function(mask) {
		return (this._nmeRenderFlags & mask) != 0;
	}
	,nmeSetMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,nmeSetFullMatrix: function(inValue) {
		return this.transform.nmeSetFullMatrix(inValue);
	}
	,nmeSetFlagToValue: function(mask,value) {
		if(value) this._nmeRenderFlags |= mask; else this._nmeRenderFlags &= ~mask;
	}
	,nmeSetFlag: function(mask) {
		this._nmeRenderFlags |= mask;
	}
	,nmeSetDimensions: function() {
		if(this.scale9Grid != null) {
			this.nmeBoundsRect.width *= this.nmeScaleX;
			this.nmeBoundsRect.height *= this.nmeScaleY;
			this.nmeWidth = this.nmeBoundsRect.width;
			this.nmeHeight = this.nmeBoundsRect.height;
		} else {
			this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
			this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(gfx.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(gfx.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			browser.Lib.nmeDrawToSurface(gfx.nmeSurface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(gfx.nmeSurface,fullAlpha);
		}
	}
	,nmeRemoveFromStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) {
			browser.Lib.nmeRemoveSurface(gfx.nmeSurface);
			var evt = new browser.events.Event(browser.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,nmeMatrixOverridden: function() {
		this._nmeRenderFlags |= 16;
		this._nmeRenderFlags |= 4;
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeIsOnStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) return true;
		return false;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this._nmeRenderFlags |= 4; else this._nmeRenderFlags |= 8;
	}
	,nmeInvalidateBounds: function() {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeGetSurface: function() {
		var gfx = this.nmeGetGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.nmeSurface;
		return surface;
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			var extX = gfx.nmeExtent.x;
			var extY = gfx.nmeExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.nmeHitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,nmeGetMatrix: function() {
		return this.transform.get_matrix();
	}
	,nmeGetInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(outStack);
	}
	,nmeGetGraphics: function() {
		return null;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		return this.transform.nmeGetFullMatrix(localMatrix);
	}
	,nmeFireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.nmeSetPhase(browser.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
		event.nmeSetPhase(browser.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return;
		if(event.bubbles) {
			event.nmeSetPhase(browser.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
	}
	,nmeDispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return browser.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,nmeClearFlag: function(mask) {
		this._nmeRenderFlags &= ~mask;
	}
	,nmeBroadcast: function(event) {
		this.nmeDispatchEvent(event);
	}
	,nmeApplyFilters: function(surface) {
		if(this.nmeFilters != null) {
			var _g = 0, _g1 = this.nmeFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.nmeApplyFilter(surface);
			}
		}
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if(newParent.nmeGetGraphics() != null) {
			browser.Lib.nmeSetSurfaceId(gfx.nmeSurface,this._nmeId);
			if(beforeSibling != null && beforeSibling.nmeGetGraphics() != null) browser.Lib.nmeAppendSurface(gfx.nmeSurface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.nmeChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,browser.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , browser.display.DisplayObjectContainer);
						if(container.nmeChildren.length > 0) nextSibling = container.nmeChildren[container.nmeChildren.length - 1]; else break;
					}
					if(nextSibling.nmeGetGraphics() != gfx) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,nextSibling.get__topmostSurface()); else browser.Lib.nmeAppendSurface(gfx.nmeSurface);
				}
			}
			browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") browser.Lib.nmeAppendSurface(gfx.nmeSurface);
		if(this.nmeIsOnStage()) {
			var evt = new browser.events.Event(browser.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,localToGlobal: function(point) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeChanged = true;
			gfx.nmeClearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.nmeGetObjectUnderPoint(new browser.geom.Point(x,y)) != null; else {
			var gfx = this.nmeGetGraphics();
			if(gfx != null) {
				var extX = gfx.nmeExtent.x;
				var extY = gfx.nmeExtent.y;
				var local = this.globalToLocal(new browser.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.nmeApplyFilters(gfx.nmeSurface);
		this._nmeRenderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeBoundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.nmeGetFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.nmeGetFullMatrix(null).invert());
		var rect = this.nmeBoundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.nmeRender(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,_topmostSurface: null
	,_nmeRenderFlags: null
	,_nmeId: null
	,_matrixInvalid: null
	,_matrixChainInvalid: null
	,_fullScaleY: null
	,_fullScaleX: null
	,_boundsInvalid: null
	,_bottommostSurface: null
	,nmeY: null
	,nmeX: null
	,nmeWidth: null
	,nmeVisible: null
	,nmeScrollRect: null
	,nmeScaleY: null
	,nmeScaleX: null
	,nmeRotation: null
	,nmeMaskingObj: null
	,nmeMask: null
	,nmeHeight: null
	,nmeFilters: null
	,nmeBoundsRect: null
	,y: null
	,x: null
	,width: null
	,visible: null
	,transform: null
	,stage: null
	,scrollRect: null
	,scaleY: null
	,scaleX: null
	,scale9Grid: null
	,rotation: null
	,parent: null
	,nmeCombinedVisible: null
	,name: null
	,mouseY: null
	,mouseX: null
	,mask: null
	,height: null
	,filters: null
	,cacheAsBitmap: null
	,blendMode: null
	,alpha: null
	,accessibilityProperties: null
	,__class__: browser.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_nmeCombinedVisible:"set_nmeCombinedVisible",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
browser.display.InteractiveObject = function() {
	browser.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["browser.display.InteractiveObject"] = browser.display.InteractiveObject;
browser.display.InteractiveObject.__name__ = ["browser","display","InteractiveObject"];
browser.display.InteractiveObject.__super__ = browser.display.DisplayObject;
browser.display.InteractiveObject.prototype = $extend(browser.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.nmeTabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.nmeTabIndex;
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeTabIndex: null
	,nmeDoubleClickEnabled: null
	,tabIndex: null
	,tabEnabled: null
	,mouseEnabled: null
	,focusRect: null
	,doubleClickEnabled: null
	,__class__: browser.display.InteractiveObject
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
browser.display.DisplayObjectContainer = function() {
	this.nmeChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	browser.display.InteractiveObject.call(this);
	this.nmeCombinedAlpha = this.alpha;
};
$hxClasses["browser.display.DisplayObjectContainer"] = browser.display.DisplayObjectContainer;
browser.display.DisplayObjectContainer.__name__ = ["browser","display","DisplayObjectContainer"];
browser.display.DisplayObjectContainer.__super__ = browser.display.InteractiveObject;
browser.display.DisplayObjectContainer.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_visible: function(inVal) {
		this.set_nmeCombinedVisible(inVal);
		return browser.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.nmeChildren.length;
	}
	,set_nmeCombinedVisible: function(inVal) {
		if(inVal != this.nmeCombinedVisible) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set_nmeCombinedVisible(child.get_visible() && inVal);
			}
		}
		return browser.display.InteractiveObject.prototype.set_nmeCombinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		browser.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this._nmeId + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.nmeChildren[child1];
		this.nmeChildren[child1] = this.nmeChildren[child2];
		this.nmeChildren[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == child1) c1 = i; else if(this.nmeChildren[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.nmeChildren[c1];
			this.nmeChildren[c1] = this.nmeChildren[c2];
			this.nmeChildren[c2] = swap;
			swap = null;
			this.nmeSwapSurface(c1,c2);
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.nmeChildren.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.nmeChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.nmeChildren[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in nmeChildren array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeRemoveChild(this.nmeChildren[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				child.nmeRemoveFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = browser.display.InteractiveObject.prototype.nmeUnifyChildrenWithDOM.call(this,lastMoveGfx);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			gfx = child.nmeUnifyChildrenWithDOM(gfx);
		}
		return gfx;
	}
	,nmeSwapSurface: function(c1,c2) {
		if(this.nmeChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.nmeChildren.length;
		if(this.nmeChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.nmeChildren.length;
		var gfx1 = this.nmeChildren[c1].nmeGetGraphics();
		var gfx2 = this.nmeChildren[c2].nmeGetGraphics();
		if(gfx1 != null && gfx2 != null) browser.Lib.nmeSwapSurface(gfx1.nmeSurface,gfx2.nmeSurface);
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeVisible) return;
		if(clipRect == null && this.nmeScrollRect != null) clipRect = this.nmeScrollRect;
		browser.display.InteractiveObject.prototype.nmeRender.call(this,inMask,clipRect);
		this.nmeCombinedAlpha = this.parent != null?this.parent.nmeCombinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeVisible) {
				if(clipRect != null) {
					if((child._nmeRenderFlags & 4) != 0 || (child._nmeRenderFlags & 8) != 0) child.nmeValidateMatrix();
				}
				child.nmeRender(inMask,clipRect);
			}
		}
		if(this.nmeAddedChildren) {
			this.nmeUnifyChildrenWithDOM();
			this.nmeAddedChildren = false;
		}
	}
	,nmeRemoveFromStage: function() {
		browser.display.InteractiveObject.prototype.nmeRemoveFromStage.call(this);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeRemoveFromStage();
		}
	}
	,nmeRemoveChild: function(child) {
		child.nmeRemoveFromStage();
		child.set_parent(null);
		return child;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this._nmeRenderFlags & 8) != 0) && !((this._nmeRenderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.nmeInvalidateMatrix();
			}
		}
		browser.display.InteractiveObject.prototype.nmeInvalidateMatrix.call(this,local);
	}
	,nmeGetObjectsUnderPoint: function(point,stack) {
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeBroadcast: function(event) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeBroadcast(event);
		}
		this.dispatchEvent(event);
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		browser.display.InteractiveObject.prototype.nmeAddToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeGetGraphics() == null || !child.nmeIsOnStage()) child.nmeAddToStage(this);
		}
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.nmeGetObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeChildren[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.nmeChildren.length;
		return null;
	}
	,contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child) return true;
		}
		return false;
	}
	,addChildAt: function(object,index) {
		if(index > this.nmeChildren.length || index < 0) throw "Invalid index position " + index;
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.nmeChildren.length) return this.addChild(object); else {
			if(this.nmeIsOnStage()) object.nmeAddToStage(this,this.nmeChildren[index]);
			this.nmeChildren.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.nmeChildren.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.nmeIsOnStage()) object.nmeAddToStage(this);
		if(this.nmeChildren == null) this.nmeChildren = new Array();
		this.nmeChildren.push(object);
		return object;
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.nmeChildren,child);
	}
	,nmeAddedChildren: null
	,tabChildren: null
	,numChildren: null
	,nmeCombinedAlpha: null
	,nmeChildren: null
	,mouseChildren: null
	,__class__: browser.display.DisplayObjectContainer
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
browser.display.Sprite = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeGraphics = new browser.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["browser.display.Sprite"] = browser.display.Sprite;
browser.display.Sprite.__name__ = ["browser","display","Sprite"];
browser.display.Sprite.__super__ = browser.display.DisplayObjectContainer;
browser.display.Sprite.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.nmeCursorCallbackOver != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
		if(this.nmeCursorCallbackOut != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		if(!cursor) browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default); else {
			this.nmeCursorCallbackOver = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Pointer);
			};
			this.nmeCursorCallbackOut = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default);
			};
			this.addEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
			this.addEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.nmeGraphics;
	}
	,get_dropTarget: function() {
		return this.nmeDropTarget;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stopDrag: function() {
		if(this.nmeIsOnStage()) {
			this.get_stage().nmeStopDrag(this);
			var l = this.parent.nmeChildren.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.nmeChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.nmeChildren[l - i].nmeGetObjectUnderPoint(new browser.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.nmeDropTarget = obj; else this.nmeDropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.nmeIsOnStage()) this.get_stage().nmeStartDrag(this,lockCenter,bounds);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,nmeGraphics: null
	,nmeDropTarget: null
	,nmeCursorCallbackOver: null
	,nmeCursorCallbackOut: null
	,useHandCursor: null
	,graphics: null
	,dropTarget: null
	,buttonMode: null
	,__class__: browser.display.Sprite
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
com.haxepunk.Engine = function(width,height,frameRate,fixed) {
	if(fixed == null) fixed = false;
	if(frameRate == null) frameRate = 60;
	if(height == null) height = 0;
	if(width == null) width = 0;
	browser.display.Sprite.call(this);
	com.haxepunk.HXP.bounds = new browser.geom.Rectangle(0,0,width,height);
	com.haxepunk.HXP.assignedFrameRate = frameRate;
	com.haxepunk.HXP.fixed = fixed;
	com.haxepunk.HXP.engine = this;
	com.haxepunk.HXP.screen = new com.haxepunk.Screen();
	com.haxepunk.HXP.width = width;
	com.haxepunk.HXP.height = height;
	if(com.haxepunk.HXP.randomSeed == 0) {
		com.haxepunk.HXP._seed = com.haxepunk.HXP.clamp(2147483646 * Math.random() | 0,1.0,2147483646) | 0;
		com.haxepunk.HXP.randomSeed = com.haxepunk.HXP._seed;
		com.haxepunk.HXP._seed;
	}
	com.haxepunk.HXP.entity = new com.haxepunk.Entity();
	com.haxepunk.HXP._time = browser.Lib.getTimer();
	com.haxepunk.HXP._time;
	this.paused = false;
	this.maxElapsed = 0.0333;
	this.maxFrameSkip = 5;
	this.tickRate = 4;
	this._frameList = new Array();
	this._flashTime = this._delta = this._frameListSum = 0;
	this._frameLast = 0;
	this.addEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.onStage));
	nme.Lib.get_current().addChild(this);
};
$hxClasses["com.haxepunk.Engine"] = com.haxepunk.Engine;
com.haxepunk.Engine.__name__ = ["com","haxepunk","Engine"];
com.haxepunk.Engine.__super__ = browser.display.Sprite;
com.haxepunk.Engine.prototype = $extend(browser.display.Sprite.prototype,{
	_frameList: null
	,_frameListSum: null
	,_frameLast: null
	,_flashTime: null
	,_gameTime: null
	,_renderTime: null
	,_updateTime: null
	,_prev: null
	,_skip: null
	,_rate: null
	,_timer: null
	,_last: null
	,_time: null
	,_delta: null
	,checkWorld: function() {
		if(com.haxepunk.HXP._goto == null) return;
		if(com.haxepunk.HXP._world != null) {
			com.haxepunk.HXP._world.end();
			com.haxepunk.HXP._world.updateLists();
			if(com.haxepunk.HXP._world.autoClear && com.haxepunk.HXP._world.getTween()) com.haxepunk.HXP._world.clearTweens();
			{
				com.haxepunk.HXP._world = com.haxepunk.HXP._goto;
				com.haxepunk.HXP._goto = null;
			}
			com.haxepunk.HXP.camera = com.haxepunk.HXP._world.camera;
			com.haxepunk.HXP._world.updateLists();
			com.haxepunk.HXP._world.begin();
			com.haxepunk.HXP._world.updateLists();
		}
	}
	,onTimer: function() {
		this._time = browser.Lib.getTimer();
		this._delta += this._time - this._last;
		this._last = this._time;
		if(this._delta < this._rate) return;
		this._gameTime = this._time | 0;
		com.haxepunk.HXP._flashTime = this._time - this._flashTime;
		if(this._delta > this._skip) this._delta = this._skip;
		while(this._delta >= this._rate) {
			com.haxepunk.HXP.elapsed = this._rate * com.haxepunk.HXP.rate * 0.001;
			this._updateTime = this._time;
			this._delta -= this._rate;
			this._prev = this._time;
			if(!this.paused) this.update();
			if(com.haxepunk.HXP.consoleEnabled()) ((function($this) {
				var $r;
				if(com.haxepunk.HXP._console == null) com.haxepunk.HXP._console = new com.haxepunk.debug.Console();
				$r = com.haxepunk.HXP._console;
				return $r;
			}(this))).update();
			com.haxepunk.utils.Input.update();
			this._time = browser.Lib.getTimer();
			com.haxepunk.HXP._updateTime = this._time - this._updateTime;
		}
		this._renderTime = this._time;
		if(!this.paused) this.render();
		this._time = this._flashTime = browser.Lib.getTimer();
		com.haxepunk.HXP._renderTime = this._time - this._renderTime;
		com.haxepunk.HXP._gameTime = this._time - this._gameTime;
	}
	,onEnterFrame: function(e) {
		this._time = this._gameTime = browser.Lib.getTimer();
		com.haxepunk.HXP._flashTime = this._time - this._flashTime;
		this._updateTime = this._time;
		com.haxepunk.HXP.elapsed = (this._time - this._last) / 1000;
		if(com.haxepunk.HXP.elapsed > this.maxElapsed) com.haxepunk.HXP.elapsed = this.maxElapsed;
		com.haxepunk.HXP.elapsed *= com.haxepunk.HXP.rate;
		this._last = this._time;
		if(!this.paused) this.update();
		if(com.haxepunk.HXP.consoleEnabled()) ((function($this) {
			var $r;
			if(com.haxepunk.HXP._console == null) com.haxepunk.HXP._console = new com.haxepunk.debug.Console();
			$r = com.haxepunk.HXP._console;
			return $r;
		}(this))).update();
		com.haxepunk.utils.Input.update();
		this._time = this._renderTime = browser.Lib.getTimer();
		com.haxepunk.HXP._updateTime = this._time - this._updateTime;
		if(!this.paused) this.render();
		this._time = this._flashTime = browser.Lib.getTimer();
		com.haxepunk.HXP._renderTime = this._time - this._renderTime;
		com.haxepunk.HXP._gameTime = this._time - this._gameTime;
	}
	,onStage: function(e) {
		this.removeEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.onStage));
		com.haxepunk.HXP.stage = this.get_stage();
		this.setStageProperties();
		com.haxepunk.utils.Input.enable();
		if(!(com.haxepunk.HXP._goto == null)) this.checkWorld();
		this.init();
		this._rate = 1000 / com.haxepunk.HXP.assignedFrameRate;
		if(com.haxepunk.HXP.fixed) {
			this._skip = this._rate * (this.maxFrameSkip + 1);
			this._last = this._prev = browser.Lib.getTimer();
			this._timer = new haxe.Timer(this.tickRate);
			this._timer.run = $bind(this,this.onTimer);
		} else {
			this._last = browser.Lib.getTimer();
			this.addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		}
	}
	,resize: function() {
		if(com.haxepunk.HXP.width == 0) com.haxepunk.HXP.width = com.haxepunk.HXP.stage.get_stageWidth();
		if(com.haxepunk.HXP.height == 0) com.haxepunk.HXP.height = com.haxepunk.HXP.stage.get_stageHeight();
		com.haxepunk.HXP.screen.setScaleX(com.haxepunk.HXP.stage.get_stageWidth() / com.haxepunk.HXP.width);
		com.haxepunk.HXP.screen.setScaleY(com.haxepunk.HXP.stage.get_stageHeight() / com.haxepunk.HXP.height);
		com.haxepunk.HXP.resize(com.haxepunk.HXP.stage.get_stageWidth(),com.haxepunk.HXP.stage.get_stageHeight());
	}
	,setStageProperties: function() {
		var _g = this;
		com.haxepunk.HXP.stage.set_frameRate(com.haxepunk.HXP.assignedFrameRate);
		com.haxepunk.HXP.stage.align = browser.display.StageAlign.TOP_LEFT;
		com.haxepunk.HXP.stage.set_quality(browser.display.StageQuality.HIGH);
		com.haxepunk.HXP.stage.scaleMode = browser.display.StageScaleMode.NO_SCALE;
		com.haxepunk.HXP.stage.set_displayState(browser.display.StageDisplayState.NORMAL);
		this.resize();
		com.haxepunk.HXP.stage.addEventListener(browser.events.Event.RESIZE,function(e) {
			_g.resize();
		});
		com.haxepunk.HXP.stage.addEventListener(browser.events.Event.ACTIVATE,function(e) {
			com.haxepunk.HXP.focused = true;
			_g.focusGained();
			com.haxepunk.HXP._world.focusGained();
		});
		com.haxepunk.HXP.stage.addEventListener(browser.events.Event.DEACTIVATE,function(e) {
			com.haxepunk.HXP.focused = false;
			_g.focusLost();
			com.haxepunk.HXP._world.focusLost();
		});
	}
	,render: function() {
		var t = browser.Lib.getTimer();
		if(this._frameLast == 0) this._frameLast = t | 0;
		com.haxepunk.HXP.screen.swap();
		com.haxepunk.utils.Draw.resetTarget();
		com.haxepunk.HXP.screen.refresh();
		var $it0 = com.haxepunk.graphics.atlas.Atlas._sprites.iterator();
		while( $it0.hasNext() ) {
			var sprite = $it0.next();
			sprite.get_graphics().clear();
		}
		if(com.haxepunk.HXP._world.visible) com.haxepunk.HXP._world.render();
		com.haxepunk.HXP.screen.redraw();
		com.haxepunk.graphics.atlas.Atlas.renderAll();
		t = browser.Lib.getTimer();
		this._frameListSum += this._frameList[this._frameList.length] = t - this._frameLast | 0;
		if(this._frameList.length > 10) this._frameListSum -= this._frameList.shift();
		com.haxepunk.HXP.frameRate = 1000 / (this._frameListSum / this._frameList.length);
		this._frameLast = t;
	}
	,update: function() {
		if(com.haxepunk.HXP.tweener.active && com.haxepunk.HXP.tweener.getTween()) com.haxepunk.HXP.tweener.updateTweens();
		if(com.haxepunk.HXP._world.active) {
			if(com.haxepunk.HXP._world.getTween()) com.haxepunk.HXP._world.updateTweens();
			com.haxepunk.HXP._world.update();
		}
		com.haxepunk.HXP._world.updateLists();
		if(!(com.haxepunk.HXP._goto == null)) this.checkWorld();
	}
	,focusLost: function() {
	}
	,focusGained: function() {
	}
	,init: function() {
	}
	,tickRate: null
	,maxFrameSkip: null
	,maxElapsed: null
	,paused: null
	,__class__: com.haxepunk.Engine
});
var Main = function(width,height,frameRate,fixed) {
	com.haxepunk.Engine.call(this,width,height,frameRate,fixed);
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	new Main();
}
Main.__super__ = com.haxepunk.Engine;
Main.prototype = $extend(com.haxepunk.Engine.prototype,{
	init: function() {
		com.haxepunk.HXP.screen.setScale(1);
		com.haxepunk.HXP.setWorld(new GameWorld());
	}
	,__class__: Main
});
var NMEPreloader = function() {
	browser.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new browser.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new browser.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = browser.display.Sprite;
NMEPreloader.prototype = $extend(browser.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 800;
		if(width > 0) return width; else return nme.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 550;
		if(height > 0) return height; else return nme.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 3355443;
	}
	,progress: null
	,outline: null
	,__class__: NMEPreloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && (v.__name__ || v.__ename__);
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	toString: function() {
		return this.b;
	}
	,addSub: function(s,pos,len) {
		this.b += HxOverrides.substr(s,pos,len);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype = {
	toString: function() {
		if(this.nodeType == Xml.PCData) return this._nodeValue;
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("<");
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += Std.string(" ");
				s.b += Std.string(k);
				s.b += Std.string("=\"");
				s.b += Std.string(this._attributes.get(k));
				s.b += Std.string("\"");
			}
			if(this._children.length == 0) {
				s.b += Std.string("/>");
				return s.b;
			}
			s.b += Std.string(">");
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.b += Std.string(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("</");
			s.b += Std.string(this._nodeName);
			s.b += Std.string(">");
		}
		return s.b;
	}
	,insertChild: function(x,pos) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.splice(pos,0,x);
	}
	,removeChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		var b = HxOverrides.remove(this._children,x);
		if(b) x._parent = null;
		return b;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,firstChild: function() {
		if(this._children == null) throw "bad nodetype";
		return this._children[0];
	}
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,iterator: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			return this.cur < this.x.length;
		}, next : function() {
			return this.x[this.cur++];
		}};
	}
	,attributes: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.keys();
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,remove: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.remove(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,getParent: function() {
		return this._parent;
	}
	,setNodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,getNodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	}
	,setNodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,getNodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,_parent: null
	,_children: null
	,_attributes: null
	,_nodeValue: null
	,_nodeName: null
	,parent: null
	,nodeValue: null
	,nodeName: null
	,nodeType: null
	,__class__: Xml
	,__properties__: {set_nodeName:"setNodeName",get_nodeName:"getNodeName",set_nodeValue:"setNodeValue",get_nodeValue:"getNodeValue",get_parent:"getParent"}
}
browser.Selection = function() { }
$hxClasses["browser.Selection"] = browser.Selection;
browser.Selection.__name__ = ["browser","Selection"];
browser.Selection.prototype = {
	stringifier: null
	,removeAllRanges: null
	,removeRange: null
	,addRange: null
	,getRangeAt: null
	,deleteFromDocument: null
	,selectAllChildren: null
	,collapseToEnd: null
	,collapseToStart: null
	,collapse: null
	,rangeCount: null
	,isCollapsed: null
	,focusOffset: null
	,focusNode: null
	,anchorOffset: null
	,anchorNode: null
	,__class__: browser.Selection
}
browser.MessagePortArray = function() { }
$hxClasses["browser.MessagePortArray"] = browser.MessagePortArray;
browser.MessagePortArray.__name__ = ["browser","MessagePortArray"];
browser.MessagePort = function() { }
$hxClasses["browser.MessagePort"] = browser.MessagePort;
browser.MessagePort.__name__ = ["browser","MessagePort"];
browser.MessagePort.prototype = {
	onmessage: null
	,close: null
	,start: null
	,postMessage: null
	,__class__: browser.MessagePort
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
browser.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["browser.Lib"] = browser.Lib;
browser.Lib.__name__ = ["browser","Lib"];
browser.Lib.__properties__ = {get_window:"get_window",get_document:"get_document",get_current:"get_current"}
browser.Lib.current = null;
browser.Lib.document = null;
browser.Lib.window = null;
browser.Lib.mCurrent = null;
browser.Lib.mForce2DTransform = null;
browser.Lib.mMainClassRoot = null;
browser.Lib.mMe = null;
browser.Lib.mStage = null;
browser.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
browser.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - browser.Lib.starttime) * 1000 | 0;
}
browser.Lib.getURL = function(request,target) {
	if(target == null || target == "_self") js.Lib.document.open(request.url); else switch(target) {
	case "_blank":
		js.Lib.window.open(request.url);
		break;
	case "_parent":
		js.Lib.window.parent.open(request.url);
		break;
	case "_top":
		js.Lib.window.top.open(request.url);
		break;
	}
}
browser.Lib.nmeAppendSurface = function(surface,before,after) {
	if(browser.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		var rootNode = browser.Lib.mMe.__scr;
		if(before != null) rootNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) rootNode.insertBefore(surface,after.nextSibling); else rootNode.appendChild(surface);
	}
}
browser.Lib.nmeAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
browser.Lib.nmeBootstrap = function() {
	if(browser.Lib.mMe == null) {
		var target = js.Lib.document.getElementById("haxe:jeash");
		if(target == null) {
			haxe.Log.trace("Error: Cannot find element ID \"" + "haxe:jeash" + "\"",{ fileName : "Lib.hx", lineNumber : 201, className : "browser.Lib", methodName : "nmeBootstrap"});
			target.id; // throw error;
		}
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) browser.Lib.mForce2DTransform = true;
		}
		browser.Lib.Run(target,browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
	}
}
browser.Lib.nmeCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
browser.Lib.nmeCreateSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		browser.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-nme-anim") != null) style = js.Lib.document.getElementById(surface.getAttribute("data-nme-anim")); else {
		style = browser.Lib.mMe.__scr.appendChild(js.Lib.document.createElement("style"));
		style.sheet.id = "__nme_anim_" + surface.id + "__";
		surface.setAttribute("data-nme-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
browser.Lib.nmeDesignMode = function(mode) {
	js.Lib.document.designMode = mode?"on":"off";
}
browser.Lib.nmeDisableFullScreen = function() {
}
browser.Lib.nmeDisableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		browser.Lib.trace("Disable right click not supported in this browser.");
	}
}
browser.Lib.nmeDrawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
browser.Lib.nmeDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
browser.Lib.nmeDrawToSurface = function(surface,tgt,matrix,alpha,clipRect) {
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	if(alpha != 1.0) tgtCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
browser.Lib.nmeEnableFullScreen = function() {
	if(browser.Lib.mMe != null) {
		var origWidth = browser.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = browser.Lib.mMe.__scr.style.getPropertyValue("height");
		browser.Lib.mMe.__scr.style.setProperty("width","100%","");
		browser.Lib.mMe.__scr.style.setProperty("height","100%","");
		browser.Lib.nmeDisableFullScreen = function() {
			browser.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			browser.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
browser.Lib.nmeEnableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		browser.Lib.trace("Enable right click not supported in this browser.");
	}
}
browser.Lib.nmeFullScreenHeight = function() {
	return js.Lib.window.innerHeight;
}
browser.Lib.nmeFullScreenWidth = function() {
	return js.Lib.window.innerWidth;
}
browser.Lib.nmeGetHeight = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
browser.Lib.nmeGetStage = function() {
	if(browser.Lib.mStage == null) {
		var width = browser.Lib.nmeGetWidth();
		var height = browser.Lib.nmeGetHeight();
		browser.Lib.mStage = new browser.display.Stage(width,height);
	}
	return browser.Lib.mStage;
}
browser.Lib.nmeGetWidth = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
browser.Lib.nmeIsOnStage = function(surface) {
	var success = false;
	var nodes = browser.Lib.mMe.__scr.childNodes;
	var _g1 = 0, _g = nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(nodes[i] == surface) {
			success = true;
			break;
		}
	}
	return success;
}
browser.Lib.nmeParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
browser.Lib.nmeRemoveSurface = function(surface) {
	if(browser.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-nme-anim");
		if(anim != null) {
			var style = js.Lib.document.getElementById(anim);
			if(style != null) browser.Lib.mMe.__scr.removeChild(style);
		}
		browser.Lib.mMe.__scr.removeChild(surface);
	}
	return surface;
}
browser.Lib.nmeSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
browser.Lib.nmeSetSurfaceClipping = function(surface,rect) {
}
browser.Lib.nmeSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
browser.Lib.nmeSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
browser.Lib.nmeSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
browser.Lib.nmeSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-nme-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!browser.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
browser.Lib.nmeSetSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1.parentNode == browser.Lib.mMe.__scr && surface2.parentNode == browser.Lib.mMe.__scr) {
		var nextSibling = surface2.nextSibling;
		if(surface1.previousSibling != surface2) {
			var swap = browser.Lib.nmeRemoveSurface(surface1);
			if(nextSibling == null) browser.Lib.mMe.__scr.appendChild(swap); else browser.Lib.mMe.__scr.insertBefore(swap,nextSibling);
		}
	}
}
browser.Lib.nmeSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = browser.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(browser.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(browser.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c2++]); else browser.Lib.mMe.__scr.appendChild(swap);
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c1++]); else browser.Lib.mMe.__scr.appendChild(swap);
	}
}
browser.Lib.nmeSetContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
browser.Lib.nmeSetCursor = function(type) {
	if(browser.Lib.mMe != null) browser.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
browser.Lib.nmeSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
browser.Lib.nmeSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
browser.Lib.nmeSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
browser.Lib.nmeSetSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Lib.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png",{ }) + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	browser.Lib.nmeCreateSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(browser.Lib.nmeIsOnStage(surface)) {
		browser.Lib.nmeAppendSurface(div);
		browser.Lib.nmeCopyStyle(surface,div);
		browser.Lib.nmeSwapSurface(surface,div);
		browser.Lib.nmeRemoveSurface(surface);
	} else browser.Lib.nmeCopyStyle(surface,div);
	return div;
}
browser.Lib.nmeSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
browser.Lib.nmeSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
browser.Lib.preventDefaultTouchMove = function() {
	js.Lib.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
browser.Lib.Run = function(tgt,width,height) {
	browser.Lib.mMe = new browser.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") browser.Lib.nmeGetStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	if(Reflect.hasField(tgt,"on" + browser.Lib.HTML_TOUCH_EVENT_TYPES[0])) {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	} else {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	}
	var _g = 0, _g1 = browser.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	if(Reflect.hasField(js.Lib.window,"on" + "devicemotion")) js.Lib.window.addEventListener("devicemotion",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	if(Reflect.hasField(js.Lib.window,"on" + "orientationchange")) js.Lib.window.addEventListener("orientationchange",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	var _g = 0, _g1 = browser.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Lib.window.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") browser.Lib.nmeGetStage().set_backgroundColor(browser.Lib.nmeParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else browser.Lib.nmeGetStage().set_backgroundColor(16777215);
	browser.Lib.get_current().get_graphics().beginFill(browser.Lib.nmeGetStage().get_backgroundColor());
	browser.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	browser.Lib.nmeSetSurfaceId(browser.Lib.get_current().get_graphics().nmeSurface,"Root MovieClip");
	browser.Lib.nmeGetStage().nmeUpdateNextWake();
	try {
		var winParameters = js.Lib.window.winParameters();
		var _g = 0, _g1 = Reflect.fields(winParameters);
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			browser.Lib.get_current().loaderInfo.parameters[prop] = Reflect.field(winParameters,prop);
		}
	} catch( e ) {
	}
	return browser.Lib.mMe;
}
browser.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Lib.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
browser.Lib.trace = function(arg) {
	if(js.Lib.window.console != null) js.Lib.window.console.log(arg);
}
browser.Lib.get_current = function() {
	if(browser.Lib.mMainClassRoot == null) {
		browser.Lib.mMainClassRoot = new browser.display.MovieClip();
		browser.Lib.mCurrent = browser.Lib.mMainClassRoot;
		browser.Lib.nmeGetStage().addChild(browser.Lib.mCurrent);
	}
	return browser.Lib.mMainClassRoot;
}
browser.Lib.get_document = function() {
	return js.Lib.document;
}
browser.Lib.get_window = function() {
	return js.Lib.window;
}
browser.Lib.prototype = {
	__scr: null
	,mKilled: null
	,mArgs: null
	,__class__: browser.Lib
}
browser._Lib = {}
browser._Lib.CursorType = $hxClasses["browser._Lib.CursorType"] = { __ename__ : ["browser","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
browser._Lib.CursorType.Pointer = ["Pointer",0];
browser._Lib.CursorType.Pointer.toString = $estr;
browser._Lib.CursorType.Pointer.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Text = ["Text",1];
browser._Lib.CursorType.Text.toString = $estr;
browser._Lib.CursorType.Text.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Default = ["Default",2];
browser._Lib.CursorType.Default.toString = $estr;
browser._Lib.CursorType.Default.__enum__ = browser._Lib.CursorType;
browser.accessibility = {}
browser.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["browser.accessibility.AccessibilityProperties"] = browser.accessibility.AccessibilityProperties;
browser.accessibility.AccessibilityProperties.__name__ = ["browser","accessibility","AccessibilityProperties"];
browser.accessibility.AccessibilityProperties.prototype = {
	silent: null
	,shortcut: null
	,noAutoLabeling: null
	,name: null
	,forceSimple: null
	,description: null
	,__class__: browser.accessibility.AccessibilityProperties
}
browser.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	browser.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.nmeGraphics = new browser.display.Graphics();
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.nmeRender();
	}
};
$hxClasses["browser.display.Bitmap"] = browser.display.Bitmap;
browser.display.Bitmap.__name__ = ["browser","display","Bitmap"];
browser.display.Bitmap.__super__ = browser.display.DisplayObject;
browser.display.Bitmap.prototype = $extend(browser.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new browser.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if(this.bitmapData == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		var imageDataLease = this.bitmapData.nmeLease;
		if(imageDataLease != null && (this.nmeCurrentLease == null || imageDataLease.seed != this.nmeCurrentLease.seed || imageDataLease.time != this.nmeCurrentLease.time)) {
			var srcCanvas = this.bitmapData._nmeTextureBuffer;
			this.nmeGraphics.nmeSurface.width = srcCanvas.width;
			this.nmeGraphics.nmeSurface.height = srcCanvas.height;
			this.nmeGraphics.clear();
			browser.Lib.nmeDrawToSurface(srcCanvas,this.nmeGraphics.nmeSurface);
			this.nmeCurrentLease = imageDataLease.clone();
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(inMask != null) {
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			if(!this.nmeInit) {
				browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,0);
				this.nmeInit = true;
			} else browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() || local.y > this.get_height()) return null; else return this;
		} else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,nmeInit: null
	,nmeCurrentLease: null
	,nmeGraphics: null
	,smoothing: null
	,pixelSnapping: null
	,bitmapData: null
	,__class__: browser.display.Bitmap
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
browser.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.nmeLocked = false;
	this.nmeLeaseNum = 0;
	this.nmeLease = new browser.display.ImageDataLease();
	this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	this._nmeTextureBuffer = js.Lib.document.createElement("canvas");
	this._nmeTextureBuffer.width = width;
	this._nmeTextureBuffer.height = height;
	this._nmeId = browser.utils.Uuid.uuid();
	browser.Lib.nmeSetSurfaceId(this._nmeTextureBuffer,this._nmeId);
	this.nmeTransparent = transparent;
	this.rect = new browser.geom.Rectangle(0,0,width,height);
	if(this.nmeTransparent) {
		this.nmeTransparentFiller = js.Lib.document.createElement("canvas");
		this.nmeTransparentFiller.width = width;
		this.nmeTransparentFiller.height = height;
		var ctx = this.nmeTransparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.nmeTransparent) inFillColor |= -16777216;
		this.nmeInitColor = inFillColor;
		this.nmeFillRect(this.rect,inFillColor);
	}
};
$hxClasses["browser.display.BitmapData"] = browser.display.BitmapData;
browser.display.BitmapData.__name__ = ["browser","display","BitmapData"];
browser.display.BitmapData.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new browser.geom.Rectangle(0,0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0));
	var num = (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.data.getUint8(p.position++);
		var red = p.data.getUint8(p.position++);
		var green = p.data.getUint8(p.position++);
		var blue = p.data.getUint8(p.position++);
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
browser.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var type = "";
	if(browser.display.BitmapData.nmeIsPNG(bytes)) type = "image/png"; else if(browser.display.BitmapData.nmeIsJPG(bytes)) type = "image/jpeg"; else throw new browser.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
	var img = js.Lib.document.createElement("img");
	var bitmapData = new browser.display.BitmapData(0,0);
	var canvas = bitmapData._nmeTextureBuffer;
	var drawImage = function(_) {
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img,0,0);
		if(inRawAlpha != null) {
			var pixels = ctx.getImageData(0,0,img.width,img.height);
			var _g1 = 0, _g = inRawAlpha.length;
			while(_g1 < _g) {
				var i = _g1++;
				pixels.data[i * 4 + 3] = inRawAlpha.data.getUint8(inRawAlpha.position++);
			}
			ctx.putImageData(pixels,0,0);
		}
		onload(bitmapData);
	};
	img.addEventListener("load",drawImage,false);
	img.src = "data:" + type + ";base64," + browser.display.BitmapData.nmeBase64Encode(bytes);
}
browser.display.BitmapData.nmeBase64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by2 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by3 = bytes.data.getUint8(bytes.position++);
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
browser.display.BitmapData.nmeCreateFromHandle = function(inHandle) {
	var result = new browser.display.BitmapData(0,0);
	result._nmeTextureBuffer = inHandle;
	return result;
}
browser.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	if(bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 216 && bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 224) {
		bytes.data.getUint8(bytes.position++);
		bytes.data.getUint8(bytes.position++);
		if(bytes.data.getUint8(bytes.position++) == 74 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 73 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 0) return true;
	}
	return false;
}
browser.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.data.getUint8(bytes.position++) == 137 && bytes.data.getUint8(bytes.position++) == 80 && bytes.data.getUint8(bytes.position++) == 78 && bytes.data.getUint8(bytes.position++) == 71 && bytes.data.getUint8(bytes.position++) == 13 && bytes.data.getUint8(bytes.position++) == 10 && bytes.data.getUint8(bytes.position++) == 26 && bytes.data.getUint8(bytes.position++) == 10;
}
browser.display.BitmapData.prototype = {
	get_width: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.nmeTransparent;
	}
	,get_height: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.height; else return 0;
	}
	,nmeOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new browser.geom.Rectangle(0,0,width,height);
		data.bitmapData.nmeBuildLease();
		if(data.inLoader != null) {
			var e1 = new browser.events.Event(browser.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,unlock: function(changeRect) {
		this.nmeLocked = false;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		if(this.nmeImageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.nmeImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.nmeImageData,0,0);
		}
		var _g = 0, _g1 = this.nmeCopyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.nmeTransparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1254, className : "browser.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.data.getUint8(byteArray.position++);
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				this.nmeImageData.data[pos] = byteArray.data.getUint8(byteArray.position++);
				pos++;
			}
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new browser.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var imageData = null;
		if(this.nmeLocked) imageData = this.nmeImageData; else imageData = ctx.createImageData(this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
		var _g1 = 0, _g = this._nmeTextureBuffer.width * this._nmeTextureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.nmeLocked) this.nmeImageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Lib.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this._nmeTextureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.nmeOnLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.nmeOnLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,nmeIncrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps++;
	}
	,nmeGetNumRefBitmaps: function() {
		return this.nmeAssignedBitmaps;
	}
	,nmeGetLease: function() {
		return this.nmeLease;
	}
	,nmeFillRect: function(rect,color) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.nmeTransparent?color >>> 24:255;
		if(!this.nmeLocked) {
			if(this.nmeTransparent) {
				var trpCtx = this.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(rect.x,rect.y,rect.width,rect.height);
				ctx.putImageData(trpData,rect.x,rect.y);
			}
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = r;
					this.nmeImageData.data[s + offsetX + 1] = g;
					this.nmeImageData.data[s + offsetX + 2] = b;
					this.nmeImageData.data[s + offsetX + 3] = a;
				}
			}
			this.nmeImageDataChanged = true;
			ctx.putImageData(this.nmeImageData,0,0,rect.x,rect.y,rect.width,rect.height);
		}
	}
	,nmeDecrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps--;
	}
	,nmeClearCanvas: function() {
		var ctx = this._nmeTextureBuffer.getContext("2d");
		ctx.clearRect(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
	}
	,nmeBuildLease: function() {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,lock: function() {
		this.nmeLocked = true;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		this.nmeImageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		this.nmeImageDataChanged = false;
		this.nmeCopyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			switch(secondObject.__proto__.__class__.__name__[2]) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) || y >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.nmeImageData);
	}
	,handle: function() {
		return this._nmeTextureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new browser.utils.ByteArray();
		if(byteArray.allocated < len) byteArray._nmeResizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray._nmeResizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				byteArray.writeByte(this.nmeImageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this._nmeTextureBuffer.width + x * 4,this.nmeImageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + x * 4;
			return this.nmeImageData.data[offset] << 16 | this.nmeImageData.data[offset + 1] << 8 | this.nmeImageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		var b5, b6, b7, b8, pow = Math.pow;
		b5 = !this.nmeTransparent?255:data[offset + 3] & 255;
		b6 = data[offset] & 255;
		b7 = data[offset + 1] & 255;
		b8 = data[offset + 2] & 255;
		return parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0, maxX = 0, minY = me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new browser.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
		};
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.nmeImageData.data);
	}
	,floodFill: function(x,y,color) {
		haxe.Log.trace("BitmapData.floodFill not implemented",{ fileName : "BitmapData.hx", lineNumber : 471, className : "browser.display.BitmapData", methodName : "floodFill"});
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this._nmeTextureBuffer.width && rect.height == this._nmeTextureBuffer.height) {
			if(this.nmeTransparent) {
				if(color >>> 24 == 0 || color == this.nmeInitColor) return this.nmeClearCanvas();
			} else if((color | -16777216) == (this.nmeInitColor | -16777216)) return this.nmeClearCanvas();
		}
		return this.nmeFillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smothing) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			ctx.drawImage(this._nmeTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._nmeTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new browser.geom.Rectangle(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		source.drawToSurface(this._nmeTextureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new browser.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this._nmeTextureBuffer.width;
				rect.height = this._nmeTextureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.nmeClearCanvas();
		this._nmeTextureBuffer = null;
		this.nmeLeaseNum = 0;
		this.nmeLease = null;
		this.nmeImageData = null;
	}
	,destroy: function() {
		this._nmeTextureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceBitmapData._nmeTextureBuffer.width == 0 || sourceBitmapData._nmeTextureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			if(this.nmeTransparent && sourceBitmapData.nmeTransparent) {
				var trpCtx = sourceBitmapData.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
				ctx.putImageData(trpData,destPoint.x,destPoint.y);
			}
			ctx.drawImage(sourceBitmapData._nmeTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.nmeCopyPixelList[this.nmeCopyPixelList.length] = { handle : sourceBitmapData._nmeTextureBuffer, transparentFiller : sourceBitmapData.nmeTransparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData._nmeTextureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.nmeImageData);
			this.nmeImageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = this.nmeImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.nmeImageData.data[s + offsetX + 1] = this.nmeImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.nmeImageData.data[s + offsetX + 2] = this.nmeImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.nmeImageData.data[s + offsetX + 3] = this.nmeImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new browser.display.BitmapData(this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0,this.nmeTransparent);
		var rect = new browser.geom.Rectangle(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.nmeLease.set(bitmapData.nmeLeaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) {
			r.width -= r.x + r.width - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) {
			r.height -= r.y + r.height - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		haxe.Log.trace("BitmapData.applyFilter not implemented",{ fileName : "BitmapData.hx", lineNumber : 91, className : "browser.display.BitmapData", methodName : "applyFilter"});
	}
	,_nmeTextureBuffer: null
	,_nmeId: null
	,nmeTransparentFiller: null
	,nmeTransparent: null
	,nmeLocked: null
	,nmeLeaseNum: null
	,nmeLease: null
	,nmeInitColor: null
	,nmeImageDataChanged: null
	,nmeGLTexture: null
	,nmeImageData: null
	,nmeCopyPixelList: null
	,nmeAssignedBitmaps: null
	,width: null
	,transparent: null
	,rect: null
	,height: null
	,__class__: browser.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
browser.display.ImageDataLease = function() {
};
$hxClasses["browser.display.ImageDataLease"] = browser.display.ImageDataLease;
browser.display.ImageDataLease.__name__ = ["browser","display","ImageDataLease"];
browser.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new browser.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,time: null
	,seed: null
	,__class__: browser.display.ImageDataLease
}
browser.display._BitmapData = {}
browser.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["browser.display._BitmapData.MinstdGenerator"] = browser.display._BitmapData.MinstdGenerator;
browser.display._BitmapData.MinstdGenerator.__name__ = ["browser","display","_BitmapData","MinstdGenerator"];
browser.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,value: null
	,__class__: browser.display._BitmapData.MinstdGenerator
}
browser.display.BitmapDataChannel = function() { }
$hxClasses["browser.display.BitmapDataChannel"] = browser.display.BitmapDataChannel;
browser.display.BitmapDataChannel.__name__ = ["browser","display","BitmapDataChannel"];
browser.display.BlendMode = $hxClasses["browser.display.BlendMode"] = { __ename__ : ["browser","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
browser.display.BlendMode.ADD = ["ADD",0];
browser.display.BlendMode.ADD.toString = $estr;
browser.display.BlendMode.ADD.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ALPHA = ["ALPHA",1];
browser.display.BlendMode.ALPHA.toString = $estr;
browser.display.BlendMode.ALPHA.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DARKEN = ["DARKEN",2];
browser.display.BlendMode.DARKEN.toString = $estr;
browser.display.BlendMode.DARKEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
browser.display.BlendMode.DIFFERENCE.toString = $estr;
browser.display.BlendMode.DIFFERENCE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ERASE = ["ERASE",4];
browser.display.BlendMode.ERASE.toString = $estr;
browser.display.BlendMode.ERASE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
browser.display.BlendMode.HARDLIGHT.toString = $estr;
browser.display.BlendMode.HARDLIGHT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.INVERT = ["INVERT",6];
browser.display.BlendMode.INVERT.toString = $estr;
browser.display.BlendMode.INVERT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LAYER = ["LAYER",7];
browser.display.BlendMode.LAYER.toString = $estr;
browser.display.BlendMode.LAYER.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
browser.display.BlendMode.LIGHTEN.toString = $estr;
browser.display.BlendMode.LIGHTEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
browser.display.BlendMode.MULTIPLY.toString = $estr;
browser.display.BlendMode.MULTIPLY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.NORMAL = ["NORMAL",10];
browser.display.BlendMode.NORMAL.toString = $estr;
browser.display.BlendMode.NORMAL.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.OVERLAY = ["OVERLAY",11];
browser.display.BlendMode.OVERLAY.toString = $estr;
browser.display.BlendMode.OVERLAY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SCREEN = ["SCREEN",12];
browser.display.BlendMode.SCREEN.toString = $estr;
browser.display.BlendMode.SCREEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
browser.display.BlendMode.SUBTRACT.toString = $estr;
browser.display.BlendMode.SUBTRACT.__enum__ = browser.display.BlendMode;
browser.display.CapsStyle = $hxClasses["browser.display.CapsStyle"] = { __ename__ : ["browser","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
browser.display.CapsStyle.NONE = ["NONE",0];
browser.display.CapsStyle.NONE.toString = $estr;
browser.display.CapsStyle.NONE.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.ROUND = ["ROUND",1];
browser.display.CapsStyle.ROUND.toString = $estr;
browser.display.CapsStyle.ROUND.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.SQUARE = ["SQUARE",2];
browser.display.CapsStyle.SQUARE.toString = $estr;
browser.display.CapsStyle.SQUARE.__enum__ = browser.display.CapsStyle;
browser.display.GradientType = $hxClasses["browser.display.GradientType"] = { __ename__ : ["browser","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
browser.display.GradientType.RADIAL = ["RADIAL",0];
browser.display.GradientType.RADIAL.toString = $estr;
browser.display.GradientType.RADIAL.__enum__ = browser.display.GradientType;
browser.display.GradientType.LINEAR = ["LINEAR",1];
browser.display.GradientType.LINEAR.toString = $estr;
browser.display.GradientType.LINEAR.__enum__ = browser.display.GradientType;
browser.display.Graphics = function(inSurface) {
	browser.Lib.nmeBootstrap();
	if(inSurface == null) {
		this.nmeSurface = js.Lib.document.createElement("canvas");
		this.nmeSurface.width = 0;
		this.nmeSurface.height = 0;
	} else this.nmeSurface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.nmeClearLine();
	this.mLineJobs = [];
	this.nmeChanged = true;
	this.nextDrawIndex = 0;
	this.nmeExtent = new browser.geom.Rectangle();
	this.nmeExtentWithFilters = new browser.geom.Rectangle();
	this._padding = 0.0;
	this.nmeClearNextCycle = true;
};
$hxClasses["browser.display.Graphics"] = browser.display.Graphics;
browser.display.Graphics.__name__ = ["browser","display","Graphics"];
browser.display.Graphics.nmeDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return browser.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?browser.display.PointInPathMode.USER_SPACE:browser.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
browser.display.Graphics.prototype = {
	nmeRender: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.nmeChanged) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.nmeExpandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.nmeClearNextCycle) {
			this.nextDrawIndex = 0;
			this.nmeClearCanvas();
			this.nmeClearNextCycle = false;
		}
		if(this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x > this.nmeSurface.width || this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y > this.nmeSurface.height) this.nmeAdjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,browser.filters.DropShadowFilter)) filter.nmeApplyFilter(this.nmeSurface,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.nmeExtentWithFilters.x != 0 || this.nmeExtentWithFilters.y != 0) ctx.translate(-this.nmeExtentWithFilters.x * sx,-this.nmeExtentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.nmeDrawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.nmeChanged = false;
		this.nextDrawIndex = len;
		this.mDrawList = [];
		return true;
	}
	,nmeMediaSurface: function(surface) {
		this.nmeSurface = surface;
	}
	,nmeInvalidate: function() {
		this.nmeChanged = true;
		this.nmeClearNextCycle = true;
	}
	,nmeHitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.nmeExtent.width > 0 && this.nmeExtent.height > 0) return true;
		return false;
	}
	,nmeExpandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.nmeExtent.width -= this._padding;
			this.nmeExtent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtent.x = minX;
		this.nmeExtent.y = minY;
		this.nmeExtent.width = maxX - minX + this._padding;
		this.nmeExtent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,nmeExpandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtentWithFilters.x = minX;
		this.nmeExtentWithFilters.y = minY;
		this.nmeExtentWithFilters.width = maxX - minX;
		this.nmeExtentWithFilters.height = maxY - minY;
	}
	,nmeDrawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.nmeBitmap._nmeTextureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.nmeTileRects[tileID];
				center = sheet.nmeCenterPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(-tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,nmeDrawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,nmeClearLine: function() {
		this.mCurrentLine = new browser.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,nmeClearCanvas: function() {
		if(this.nmeSurface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.nmeSurface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.nmeSurface.width,this.nmeSurface.height);
		}
	}
	,nmeAdjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.nmeSurface,"getContext") != null) {
			var width = Math.ceil((this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x) * sx);
			var height = Math.ceil((this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Lib.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				browser.Lib.nmeDrawToSurface(this.nmeSurface,dstCanvas);
				if(browser.Lib.nmeIsOnStage(this.nmeSurface)) {
					browser.Lib.nmeAppendSurface(dstCanvas);
					browser.Lib.nmeCopyStyle(this.nmeSurface,dstCanvas);
					browser.Lib.nmeSwapSurface(this.nmeSurface,dstCanvas);
					browser.Lib.nmeRemoveSurface(this.nmeSurface);
					if(this.nmeSurface.id != null) browser.Lib.nmeSetSurfaceId(dstCanvas,this.nmeSurface.id);
				}
				this.nmeSurface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.nmeClearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.nmeSurface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.nmeExpandStandardExtent(browser.Lib.get_current().get_stage().get_stageWidth(),browser.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new browser.display.Drawable(null,null,null,null,null,null,new browser.display.TileJob(sheet,tileData,flags)));
		this.nmeChanged = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var _g = 0;
		while(_g < points.length) {
			var data = points[_g];
			++_g;
			if(data == null) this.mFilling = true; else switch(data.nmeGraphicsDataType) {
			case browser.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.nmeGraphicsFillType) {
				case browser.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case browser.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case browser.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g2 = 0, _g1 = path.commands.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case browser.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case browser.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.nmeDrawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.nmeDrawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new browser.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == browser.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == browser.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == browser.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new browser.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new browser.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new browser.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new browser.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new browser.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.nmeChanged = true;
	}
	,clear: function() {
		this.nmeClearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.nmeClearNextCycle = true;
		this.boundsDirty = true;
		this.nmeExtent.x = 0.0;
		this.nmeExtent.y = 0.0;
		this.nmeExtent.width = 0.0;
		this.nmeExtent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture._nmeTextureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.nmeExpandStandardExtent(bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0,bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap._nmeTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new browser.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,_padding: null
	,nmeClearNextCycle: null
	,nmeChanged: null
	,nextDrawIndex: null
	,mSolidGradient: null
	,mPoints: null
	,mPenY: null
	,mPenX: null
	,mLineJobs: null
	,mLineDraws: null
	,mLastMoveID: null
	,mFilling: null
	,mFillAlpha: null
	,mFillColour: null
	,mDrawList: null
	,mCurrentLine: null
	,mBitmap: null
	,nmeSurface: null
	,nmeExtentWithFilters: null
	,nmeExtent: null
	,boundsDirty: null
	,__class__: browser.display.Graphics
}
browser.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["browser.display.Drawable"] = browser.display.Drawable;
browser.display.Drawable.__name__ = ["browser","display","Drawable"];
browser.display.Drawable.prototype = {
	tileJob: null
	,solidGradient: null
	,points: null
	,lineJobs: null
	,fillColour: null
	,fillAlpha: null
	,bitmap: null
	,__class__: browser.display.Drawable
}
browser.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["browser.display.GfxPoint"] = browser.display.GfxPoint;
browser.display.GfxPoint.__name__ = ["browser","display","GfxPoint"];
browser.display.GfxPoint.prototype = {
	y: null
	,x: null
	,type: null
	,cy: null
	,cx: null
	,__class__: browser.display.GfxPoint
}
browser.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["browser.display.Grad"] = browser.display.Grad;
browser.display.Grad.__name__ = ["browser","display","Grad"];
browser.display.Grad.prototype = {
	points: null
	,matrix: null
	,focal: null
	,flags: null
	,__class__: browser.display.Grad
}
browser.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["browser.display.GradPoint"] = browser.display.GradPoint;
browser.display.GradPoint.__name__ = ["browser","display","GradPoint"];
browser.display.GradPoint.prototype = {
	ratio: null
	,col: null
	,alpha: null
	,__class__: browser.display.GradPoint
}
browser.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["browser.display.LineJob"] = browser.display.LineJob;
browser.display.LineJob.__name__ = ["browser","display","LineJob"];
browser.display.LineJob.prototype = {
	thickness: null
	,scale_mode: null
	,point_idx1: null
	,point_idx0: null
	,pixel_hinting: null
	,miter_limit: null
	,joints: null
	,grad: null
	,colour: null
	,caps: null
	,alpha: null
	,__class__: browser.display.LineJob
}
browser.display.PointInPathMode = $hxClasses["browser.display.PointInPathMode"] = { __ename__ : ["browser","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
browser.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
browser.display.PointInPathMode.USER_SPACE.toString = $estr;
browser.display.PointInPathMode.USER_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
browser.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
browser.display.PointInPathMode.DEVICE_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["browser.display.TileJob"] = browser.display.TileJob;
browser.display.TileJob.__name__ = ["browser","display","TileJob"];
browser.display.TileJob.prototype = {
	sheet: null
	,flags: null
	,drawList: null
	,__class__: browser.display.TileJob
}
browser.display.IGraphicsFill = function() { }
$hxClasses["browser.display.IGraphicsFill"] = browser.display.IGraphicsFill;
browser.display.IGraphicsFill.__name__ = ["browser","display","IGraphicsFill"];
browser.display.IGraphicsFill.prototype = {
	nmeGraphicsFillType: null
	,__class__: browser.display.IGraphicsFill
}
browser.display.IGraphicsData = function() { }
$hxClasses["browser.display.IGraphicsData"] = browser.display.IGraphicsData;
browser.display.IGraphicsData.__name__ = ["browser","display","IGraphicsData"];
browser.display.IGraphicsData.prototype = {
	nmeGraphicsDataType: null
	,__class__: browser.display.IGraphicsData
}
browser.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.GRADIENT;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["browser.display.GraphicsGradientFill"] = browser.display.GraphicsGradientFill;
browser.display.GraphicsGradientFill.__name__ = ["browser","display","GraphicsGradientFill"];
browser.display.GraphicsGradientFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsGradientFill.prototype = {
	type: null
	,spreadMethod: null
	,ratios: null
	,nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,matrix: null
	,interpolationMethod: null
	,focalPointRatio: null
	,colors: null
	,alphas: null
	,__class__: browser.display.GraphicsGradientFill
}
browser.display.IGraphicsPath = function() { }
$hxClasses["browser.display.IGraphicsPath"] = browser.display.IGraphicsPath;
browser.display.IGraphicsPath.__name__ = ["browser","display","IGraphicsPath"];
browser.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.PATH;
};
$hxClasses["browser.display.GraphicsPath"] = browser.display.GraphicsPath;
browser.display.GraphicsPath.__name__ = ["browser","display","GraphicsPath"];
browser.display.GraphicsPath.__interfaces__ = [browser.display.IGraphicsPath,browser.display.IGraphicsData];
browser.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(1);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(2);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			this.commands.push(3);
			this.data.push(anchorX);
			this.data.push(anchorY);
			this.data.push(controlX);
			this.data.push(controlY);
		}
	}
	,winding: null
	,nmeGraphicsDataType: null
	,data: null
	,commands: null
	,__class__: browser.display.GraphicsPath
}
browser.display.GraphicsPathCommand = function() { }
$hxClasses["browser.display.GraphicsPathCommand"] = browser.display.GraphicsPathCommand;
browser.display.GraphicsPathCommand.__name__ = ["browser","display","GraphicsPathCommand"];
browser.display.GraphicsPathWinding = $hxClasses["browser.display.GraphicsPathWinding"] = { __ename__ : ["browser","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
browser.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
browser.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
browser.display.GraphicsPathWinding.EVEN_ODD.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
browser.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
browser.display.GraphicsPathWinding.NON_ZERO.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.SOLID;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["browser.display.GraphicsSolidFill"] = browser.display.GraphicsSolidFill;
browser.display.GraphicsSolidFill.__name__ = ["browser","display","GraphicsSolidFill"];
browser.display.GraphicsSolidFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsSolidFill.prototype = {
	nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,color: null
	,alpha: null
	,__class__: browser.display.GraphicsSolidFill
}
browser.display.IGraphicsStroke = function() { }
$hxClasses["browser.display.IGraphicsStroke"] = browser.display.IGraphicsStroke;
browser.display.IGraphicsStroke.__name__ = ["browser","display","IGraphicsStroke"];
browser.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.STROKE;
};
$hxClasses["browser.display.GraphicsStroke"] = browser.display.GraphicsStroke;
browser.display.GraphicsStroke.__name__ = ["browser","display","GraphicsStroke"];
browser.display.GraphicsStroke.__interfaces__ = [browser.display.IGraphicsStroke,browser.display.IGraphicsData];
browser.display.GraphicsStroke.prototype = {
	thickness: null
	,scaleMode: null
	,pixelHinting: null
	,nmeGraphicsDataType: null
	,miterLimit: null
	,joints: null
	,fill: null
	,caps: null
	,__class__: browser.display.GraphicsStroke
}
browser.display.GraphicsDataType = $hxClasses["browser.display.GraphicsDataType"] = { __ename__ : ["browser","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
browser.display.GraphicsDataType.STROKE = ["STROKE",0];
browser.display.GraphicsDataType.STROKE.toString = $estr;
browser.display.GraphicsDataType.STROKE.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.SOLID = ["SOLID",1];
browser.display.GraphicsDataType.SOLID.toString = $estr;
browser.display.GraphicsDataType.SOLID.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
browser.display.GraphicsDataType.GRADIENT.toString = $estr;
browser.display.GraphicsDataType.GRADIENT.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.PATH = ["PATH",3];
browser.display.GraphicsDataType.PATH.toString = $estr;
browser.display.GraphicsDataType.PATH.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsFillType = $hxClasses["browser.display.GraphicsFillType"] = { __ename__ : ["browser","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
browser.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
browser.display.GraphicsFillType.SOLID_FILL.toString = $estr;
browser.display.GraphicsFillType.SOLID_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
browser.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
browser.display.GraphicsFillType.GRADIENT_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.InterpolationMethod = $hxClasses["browser.display.InterpolationMethod"] = { __ename__ : ["browser","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
browser.display.InterpolationMethod.RGB = ["RGB",0];
browser.display.InterpolationMethod.RGB.toString = $estr;
browser.display.InterpolationMethod.RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
browser.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
browser.display.InterpolationMethod.LINEAR_RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.JointStyle = $hxClasses["browser.display.JointStyle"] = { __ename__ : ["browser","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
browser.display.JointStyle.MITER = ["MITER",0];
browser.display.JointStyle.MITER.toString = $estr;
browser.display.JointStyle.MITER.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.ROUND = ["ROUND",1];
browser.display.JointStyle.ROUND.toString = $estr;
browser.display.JointStyle.ROUND.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.BEVEL = ["BEVEL",2];
browser.display.JointStyle.BEVEL.toString = $estr;
browser.display.JointStyle.BEVEL.__enum__ = browser.display.JointStyle;
browser.display.LineScaleMode = $hxClasses["browser.display.LineScaleMode"] = { __ename__ : ["browser","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
browser.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
browser.display.LineScaleMode.HORIZONTAL.toString = $estr;
browser.display.LineScaleMode.HORIZONTAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NONE = ["NONE",1];
browser.display.LineScaleMode.NONE.toString = $estr;
browser.display.LineScaleMode.NONE.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NORMAL = ["NORMAL",2];
browser.display.LineScaleMode.NORMAL.toString = $estr;
browser.display.LineScaleMode.NORMAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
browser.display.LineScaleMode.VERTICAL.toString = $estr;
browser.display.LineScaleMode.VERTICAL.__enum__ = browser.display.LineScaleMode;
browser.display.Loader = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = browser.display.LoaderInfo.create(this);
};
$hxClasses["browser.display.Loader"] = browser.display.Loader;
browser.display.Loader.__name__ = ["browser","display","Loader"];
browser.display.Loader.__super__ = browser.display.DisplayObjectContainer;
browser.display.Loader.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	handleLoad: function(e) {
		this.content.nmeInvalidateBounds();
		this.content.nmeRender(null,null);
		this.contentLoaderInfo.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObjectContainer.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new browser.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this._nmeId + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			browser.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new browser.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				_g.contentLoaderInfo.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 112, className : "browser.display.Loader", methodName : "loadBytes"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = (function($this) {
					var $r;
					throw "Unrecognized file " + request.url;
					return $r;
				}($this));
			}
			return $r;
		}(this));
		this.mImage = new browser.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new browser.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 78, className : "browser.display.Loader", methodName : "load"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new browser.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,mShape: null
	,mImage: null
	,contentLoaderInfo: null
	,content: null
	,__class__: browser.display.Loader
});
browser.display.LoaderInfo = function() {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["browser.display.LoaderInfo"] = browser.display.LoaderInfo;
browser.display.LoaderInfo.__name__ = ["browser","display","LoaderInfo"];
browser.display.LoaderInfo.create = function(ldr) {
	var li = new browser.display.LoaderInfo();
	if(ldr != null) li.loader = ldr;
	return li;
}
browser.display.LoaderInfo.__super__ = browser.events.EventDispatcher;
browser.display.LoaderInfo.prototype = $extend(browser.events.EventDispatcher.prototype,{
	width: null
	,url: null
	,sharedEvents: null
	,sameDomain: null
	,parentAllowsChild: null
	,parameters: null
	,loaderURL: null
	,loader: null
	,height: null
	,frameRate: null
	,contentType: null
	,content: null
	,childAllowsParent: null
	,bytesTotal: null
	,bytesLoaded: null
	,bytes: null
	,__class__: browser.display.LoaderInfo
});
browser.display.MovieClip = function() {
	browser.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.loaderInfo = browser.display.LoaderInfo.create(null);
};
$hxClasses["browser.display.MovieClip"] = browser.display.MovieClip;
browser.display.MovieClip.__name__ = ["browser","display","MovieClip"];
browser.display.MovieClip.__super__ = browser.display.Sprite;
browser.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.mTotalFrames;
	}
	,get_framesLoaded: function() {
		return this.mTotalFrames;
	}
	,get_currentFrame: function() {
		return this.mCurrentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stop: function() {
	}
	,play: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,mTotalFrames: null
	,mCurrentFrame: null
	,totalFrames: null
	,loaderInfo: null
	,framesLoaded: null
	,enabled: null
	,currentFrame: null
	,__class__: browser.display.MovieClip
	,__properties__: $extend(browser.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
browser.display.PixelSnapping = $hxClasses["browser.display.PixelSnapping"] = { __ename__ : ["browser","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
browser.display.PixelSnapping.NEVER = ["NEVER",0];
browser.display.PixelSnapping.NEVER.toString = $estr;
browser.display.PixelSnapping.NEVER.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.AUTO = ["AUTO",1];
browser.display.PixelSnapping.AUTO.toString = $estr;
browser.display.PixelSnapping.AUTO.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
browser.display.PixelSnapping.ALWAYS.toString = $estr;
browser.display.PixelSnapping.ALWAYS.__enum__ = browser.display.PixelSnapping;
browser.display.Shape = function() {
	browser.display.DisplayObject.call(this);
	this.nmeGraphics = new browser.display.Graphics();
};
$hxClasses["browser.display.Shape"] = browser.display.Shape;
browser.display.Shape.__name__ = ["browser","display","Shape"];
browser.display.Shape.__super__ = browser.display.DisplayObject;
browser.display.Shape.prototype = $extend(browser.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.nmeGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,nmeGraphics: null
	,graphics: null
	,__class__: browser.display.Shape
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
browser.display.SpreadMethod = $hxClasses["browser.display.SpreadMethod"] = { __ename__ : ["browser","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
browser.display.SpreadMethod.REPEAT = ["REPEAT",0];
browser.display.SpreadMethod.REPEAT.toString = $estr;
browser.display.SpreadMethod.REPEAT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.REFLECT = ["REFLECT",1];
browser.display.SpreadMethod.REFLECT.toString = $estr;
browser.display.SpreadMethod.REFLECT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.PAD = ["PAD",2];
browser.display.SpreadMethod.PAD.toString = $estr;
browser.display.SpreadMethod.PAD.__enum__ = browser.display.SpreadMethod;
browser.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.nmeIsCancelled = false;
	this.nmeIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = browser.events.EventPhase.AT_TARGET;
};
$hxClasses["browser.events.Event"] = browser.events.Event;
browser.events.Event.__name__ = ["browser","events","Event"];
browser.events.Event.prototype = {
	toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.nmeIsCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.nmeIsCancelled = true;
		this.nmeIsCancelledNow = true;
	}
	,nmeSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,nmeGetIsCancelledNow: function() {
		return this.nmeIsCancelledNow;
	}
	,nmeGetIsCancelled: function() {
		return this.nmeIsCancelled;
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,clone: function() {
		return new browser.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,nmeIsCancelledNow: null
	,nmeIsCancelled: null
	,type: null
	,target: null
	,eventPhase: null
	,currentTarget: null
	,cancelable: null
	,bubbles: null
	,__class__: browser.events.Event
}
browser.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["browser.events.MouseEvent"] = browser.events.MouseEvent;
browser.events.MouseEvent.__name__ = ["browser","events","MouseEvent"];
browser.events.MouseEvent.nmeCreate = function(type,event,local,target) {
	var nmeMouseDown = false;
	var delta = 2;
	if(type == browser.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == browser.events.MouseEvent.MOUSE_DOWN) nmeMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == browser.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) nmeMouseDown = false; else if(event.button != null) {
				if(event.button == 0) nmeMouseDown = false; else nmeMouseDown = false;
			}
		}
	}
	var pseudoEvent = new browser.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,nmeMouseDown,delta);
	pseudoEvent.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
browser.events.MouseEvent.__super__ = browser.events.Event;
browser.events.MouseEvent.prototype = $extend(browser.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,delta: null
	,ctrlKey: null
	,clickCount: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.MouseEvent
});
browser.display.Stage = function(width,height) {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeFocusObject = null;
	this.nmeWindowWidth = width;
	this.nmeWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = browser.display.StageScaleMode.SHOW_ALL;
	this.nmeStageMatrix = new browser.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = browser.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.nmeWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.nmeWindowHeight);
	this.nmePointInPathMode = browser.display.Graphics.nmeDetectIsPointInPathMode();
	this.nmeMouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.nmeTouchInfo = [];
	this.nmeFocusOverObjects = [];
	this.nmeUIEventsQueue = new Array(1000);
	this.nmeUIEventsQueueIndex = 0;
};
$hxClasses["browser.display.Stage"] = browser.display.Stage;
browser.display.Stage.__name__ = ["browser","display","Stage"];
browser.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = browser.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = browser.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = browser.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = browser.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = browser.display.Stage.OrientationPortrait;
	}
	return orientation;
}
browser.display.Stage.__super__ = browser.display.DisplayObjectContainer;
browser.display.Stage.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.nmeWindowWidth;
	}
	,get_stageHeight: function() {
		return this.nmeWindowHeight;
	}
	,get_stage: function() {
		return browser.Lib.nmeGetStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.nmeShowDefaultContextMenu && this.nmeShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) browser.Lib.nmeDisableRightClick(); else browser.Lib.nmeEnableRightClick();
		}
		this.nmeShowDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.nmeShowDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:browser.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Lib.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Lib.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(nmeRequestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) {
			var window = js.Lib.window;
			this.nmeInterval = 1000.0 / speed | 0;
		}
		this.nmeFrameRate = speed;
		this.nmeUpdateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.nmeFrameRate;
	}
	,set_focus: function(inObj) {
		return this.nmeFocusObject = inObj;
	}
	,get_focus: function() {
		return this.nmeFocusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 1:
				browser.Lib.nmeDisableFullScreen();
				break;
			case 0:
				browser.Lib.nmeEnableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_backgroundColor: function(col) {
		return this.nmeBackgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.nmeBackgroundColour;
	}
	,nmeOnTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var point = new browser.geom.Point(touch.pageX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,touch.pageY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
			obj.nmeFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = browser.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = browser.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.nmeDragObject != null) $this.nmeDrag(point);
						$r = browser.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.nmeFireEvent(browser.events.MouseEvent.nmeCreate(mouseType,evt,local,obj));
		} else {
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
		}
	}
	,nmeOnResize: function(inW,inH) {
		this.nmeWindowWidth = inW;
		this.nmeWindowHeight = inH;
		var event = new browser.events.Event(browser.events.Event.RESIZE);
		event.target = this;
		this.nmeBroadcast(event);
	}
	,nmeOnMouse: function(event,type) {
		var point = new browser.geom.Point(event.clientX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		if(this.nmeDragObject != null) this.nmeDrag(point);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.MouseEvent.nmeCreate(type,event,local,obj);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
			obj.nmeFireEvent(evt);
		} else {
			var evt = browser.events.MouseEvent.nmeCreate(type,event,point,null);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
		}
	}
	,nmeOnFocus: function(event,hasFocus) {
		if(hasFocus) {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.ACTIVATE));
		} else {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.DEACTIVATE));
		}
	}
	,nmeOnKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var event = new browser.events.KeyboardEvent(pressed?browser.events.KeyboardEvent.KEY_DOWN:browser.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
		this.dispatchEvent(event);
	}
	,nmeHandleOrientationChange: function() {
	}
	,nmeHandleAccelerometer: function(evt) {
		browser.display.Stage.nmeAcceleration.x = evt.accelerationIncludingGravity.x;
		browser.display.Stage.nmeAcceleration.y = evt.accelerationIncludingGravity.y;
		browser.display.Stage.nmeAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,toString: function() {
		return "[Stage id=" + this._nmeId + "]";
	}
	,nmeUpdateNextWake: function() {
		if(this.nmeFrameRate == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			nmeRequestAnimationFrame($bind(this,this.nmeUpdateNextWake));
			this.nmeStageRender();
		} else {
			var window = js.Lib.window;
			window.clearInterval(this.nmeTimer);
			this.nmeTimer = window.setInterval($bind(this,this.nmeStageRender),this.nmeInterval,[]);
		}
	}
	,nmeStopDrag: function(sprite) {
		this.nmeDragBounds = null;
		this.nmeDragObject = null;
	}
	,nmeStartDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.nmeDragBounds = bounds == null?null:bounds.clone();
		this.nmeDragObject = sprite;
		if(this.nmeDragObject != null) {
			var mouse = new browser.geom.Point(this._mouseX,this._mouseY);
			var p = this.nmeDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - mouse.x;
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - mouse.y;
			}
		}
	}
	,nmeStageRender: function(_) {
		if(!this.nmeStageActive) {
			this.nmeOnResize(this.nmeWindowWidth,this.nmeWindowHeight);
			var event = new browser.events.Event(browser.events.Event.ACTIVATE);
			event.target = this;
			this.nmeBroadcast(event);
			this.nmeStageActive = true;
		}
		var _g1 = 0, _g = this.nmeUIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeUIEventsQueue[i] != null) this.nmeProcessStageEvent(this.nmeUIEventsQueue[i]);
		}
		this.nmeUIEventsQueueIndex = 0;
		var event = new browser.events.Event(browser.events.Event.ENTER_FRAME);
		this.nmeBroadcast(event);
		if(this.nmeInvalid) {
			var event1 = new browser.events.Event(browser.events.Event.RENDER);
			this.nmeBroadcast(event1);
		}
		this.nmeRenderAll();
	}
	,nmeRenderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.nmeRender(canvas);
	}
	,nmeRenderAll: function() {
		this.nmeRender(null,null);
	}
	,nmeQueueStageEvent: function(evt) {
		this.nmeUIEventsQueue[this.nmeUIEventsQueueIndex++] = evt;
	}
	,nmeProcessStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.nmeOnResize(browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
			break;
		case "focus":
			this.nmeOnFocus(evt,true);
			break;
		case "blur":
			this.nmeOnFocus(evt,false);
			break;
		case "mousemove":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.nmeOnMouse(evt,browser.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.nmeOnMouse(evt,browser.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new browser.display._Stage.TouchInfo();
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.nmeHandleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.nmeHandleOrientationChange();
			break;
		default:
		}
	}
	,nmeIsOnStage: function() {
		return true;
	}
	,nmeDrag: function(point) {
		var p = this.nmeDragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.nmeDragOffsetX;
		var y = point.y + this.nmeDragOffsetY;
		if(this.nmeDragBounds != null) {
			if(x < this.nmeDragBounds.x) x = this.nmeDragBounds.x; else if(x > this.nmeDragBounds.get_right()) x = this.nmeDragBounds.get_right();
			if(y < this.nmeDragBounds.y) y = this.nmeDragBounds.y; else if(y > this.nmeDragBounds.get_bottom()) y = this.nmeDragBounds.get_bottom();
		}
		this.nmeDragObject.set_x(x);
		this.nmeDragObject.set_y(y);
	}
	,nmeCheckInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.nmeMouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?browser.display.Stage.nmeMouseChanges:browser.display.Stage.nmeTouchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.nmeCreateSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.nmeCreateSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.nmeMouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,nmeCheckFocusInOuts: function(event,inStack) {
		var new_n = inStack.length;
		var new_obj = new_n > 0?inStack[new_n - 1]:null;
		var old_n = this.nmeFocusOverObjects.length;
		var old_obj = old_n > 0?this.nmeFocusOverObjects[old_n - 1]:null;
		if(new_obj != old_obj) {
			var common = 0;
			while(common < new_n && common < old_n && inStack[common] == this.nmeFocusOverObjects[common]) common++;
			var focusOut = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT,false,false,new_obj,false,0);
			var i = old_n - 1;
			while(i >= common) {
				this.nmeFocusOverObjects[i].dispatchEvent(focusOut);
				i--;
			}
			var focusIn = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN,false,false,old_obj,false,0);
			var i1 = new_n - 1;
			while(i1 >= common) {
				inStack[i1].dispatchEvent(focusIn);
				i1--;
			}
			this.nmeFocusOverObjects = inStack;
			this.set_focus(new_obj);
		}
	}
	,invalidate: function() {
		this.nmeInvalid = true;
	}
	,_mouseY: null
	,_mouseX: null
	,nmeWindowHeight: null
	,nmeWindowWidth: null
	,nmeUIEventsQueueIndex: null
	,nmeUIEventsQueue: null
	,nmeTouchInfo: null
	,nmeTimer: null
	,nmeStageMatrix: null
	,nmeStageActive: null
	,nmeShowDefaultContextMenu: null
	,nmeMouseOverObjects: null
	,nmeInvalid: null
	,nmeInterval: null
	,nmeFrameRate: null
	,nmeFocusOverObjects: null
	,nmeFocusObject: null
	,nmeDragOffsetY: null
	,nmeDragOffsetX: null
	,nmeDragObject: null
	,nmeDragBounds: null
	,nmeBackgroundColour: null
	,stageWidth: null
	,stageHeight: null
	,stageFocusRect: null
	,showDefaultContextMenu: null
	,scaleMode: null
	,quality: null
	,nmePointInPathMode: null
	,loaderInfo: null
	,fullScreenWidth: null
	,fullScreenHeight: null
	,frameRate: null
	,focus: null
	,displayState: null
	,backgroundColor: null
	,align: null
	,__class__: browser.display.Stage
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
browser.display._Stage = {}
browser.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["browser.display._Stage.TouchInfo"] = browser.display._Stage.TouchInfo;
browser.display._Stage.TouchInfo.__name__ = ["browser","display","_Stage","TouchInfo"];
browser.display._Stage.TouchInfo.prototype = {
	touchOverObjects: null
	,__class__: browser.display._Stage.TouchInfo
}
browser.display.StageAlign = $hxClasses["browser.display.StageAlign"] = { __ename__ : ["browser","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
browser.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
browser.display.StageAlign.TOP_RIGHT.toString = $estr;
browser.display.StageAlign.TOP_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
browser.display.StageAlign.TOP_LEFT.toString = $estr;
browser.display.StageAlign.TOP_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP = ["TOP",2];
browser.display.StageAlign.TOP.toString = $estr;
browser.display.StageAlign.TOP.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.RIGHT = ["RIGHT",3];
browser.display.StageAlign.RIGHT.toString = $estr;
browser.display.StageAlign.RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.LEFT = ["LEFT",4];
browser.display.StageAlign.LEFT.toString = $estr;
browser.display.StageAlign.LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
browser.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
browser.display.StageAlign.BOTTOM_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
browser.display.StageAlign.BOTTOM_LEFT.toString = $estr;
browser.display.StageAlign.BOTTOM_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM = ["BOTTOM",7];
browser.display.StageAlign.BOTTOM.toString = $estr;
browser.display.StageAlign.BOTTOM.__enum__ = browser.display.StageAlign;
browser.display.StageDisplayState = $hxClasses["browser.display.StageDisplayState"] = { __ename__ : ["browser","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
browser.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
browser.display.StageDisplayState.FULL_SCREEN.toString = $estr;
browser.display.StageDisplayState.FULL_SCREEN.__enum__ = browser.display.StageDisplayState;
browser.display.StageDisplayState.NORMAL = ["NORMAL",1];
browser.display.StageDisplayState.NORMAL.toString = $estr;
browser.display.StageDisplayState.NORMAL.__enum__ = browser.display.StageDisplayState;
browser.display.StageQuality = function() { }
$hxClasses["browser.display.StageQuality"] = browser.display.StageQuality;
browser.display.StageQuality.__name__ = ["browser","display","StageQuality"];
browser.display.StageScaleMode = $hxClasses["browser.display.StageScaleMode"] = { __ename__ : ["browser","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
browser.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
browser.display.StageScaleMode.SHOW_ALL.toString = $estr;
browser.display.StageScaleMode.SHOW_ALL.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
browser.display.StageScaleMode.NO_SCALE.toString = $estr;
browser.display.StageScaleMode.NO_SCALE.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
browser.display.StageScaleMode.NO_BORDER.toString = $estr;
browser.display.StageScaleMode.NO_BORDER.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
browser.display.StageScaleMode.EXACT_FIT.toString = $estr;
browser.display.StageScaleMode.EXACT_FIT.__enum__ = browser.display.StageScaleMode;
browser.display.Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.nmeCenterPoints = new Array();
	this.nmeTileRects = new Array();
};
$hxClasses["browser.display.Tilesheet"] = browser.display.Tilesheet;
browser.display.Tilesheet.__name__ = ["browser","display","Tilesheet"];
browser.display.Tilesheet.prototype = {
	drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.nmeTileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new browser.geom.Point();
		this.nmeCenterPoints.push(centerPoint);
	}
	,nmeTileRects: null
	,nmeCenterPoints: null
	,nmeBitmap: null
	,__class__: browser.display.Tilesheet
}
browser.errors = {}
browser.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["browser.errors.Error"] = browser.errors.Error;
browser.errors.Error.__name__ = ["browser","errors","Error"];
browser.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.Stack.toString(haxe.Stack.exceptionStack());
	}
	,name: null
	,message: null
	,errorID: null
	,__class__: browser.errors.Error
}
browser.errors.IOError = function(message) {
	if(message == null) message = "";
	browser.errors.Error.call(this,message);
};
$hxClasses["browser.errors.IOError"] = browser.errors.IOError;
browser.errors.IOError.__name__ = ["browser","errors","IOError"];
browser.errors.IOError.__super__ = browser.errors.Error;
browser.errors.IOError.prototype = $extend(browser.errors.Error.prototype,{
	__class__: browser.errors.IOError
});
browser.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = browser.events.Listener.sIDs++;
};
$hxClasses["browser.events.Listener"] = browser.events.Listener;
browser.events.Listener.__name__ = ["browser","events","Listener"];
browser.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,mUseCapture: null
	,mPriority: null
	,mListner: null
	,mID: null
	,__class__: browser.events.Listener
}
browser.events.EventPhase = function() { }
$hxClasses["browser.events.EventPhase"] = browser.events.EventPhase;
browser.events.EventPhase.__name__ = ["browser","events","EventPhase"];
browser.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["browser.events.FocusEvent"] = browser.events.FocusEvent;
browser.events.FocusEvent.__name__ = ["browser","events","FocusEvent"];
browser.events.FocusEvent.__super__ = browser.events.Event;
browser.events.FocusEvent.prototype = $extend(browser.events.Event.prototype,{
	shiftKey: null
	,relatedObject: null
	,keyCode: null
	,__class__: browser.events.FocusEvent
});
browser.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	browser.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["browser.events.HTTPStatusEvent"] = browser.events.HTTPStatusEvent;
browser.events.HTTPStatusEvent.__name__ = ["browser","events","HTTPStatusEvent"];
browser.events.HTTPStatusEvent.__super__ = browser.events.Event;
browser.events.HTTPStatusEvent.prototype = $extend(browser.events.Event.prototype,{
	status: null
	,responseURL: null
	,responseHeaders: null
	,__class__: browser.events.HTTPStatusEvent
});
browser.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["browser.events.IOErrorEvent"] = browser.events.IOErrorEvent;
browser.events.IOErrorEvent.__name__ = ["browser","events","IOErrorEvent"];
browser.events.IOErrorEvent.__super__ = browser.events.Event;
browser.events.IOErrorEvent.prototype = $extend(browser.events.Event.prototype,{
	text: null
	,__class__: browser.events.IOErrorEvent
});
browser.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
};
$hxClasses["browser.events.KeyboardEvent"] = browser.events.KeyboardEvent;
browser.events.KeyboardEvent.__name__ = ["browser","events","KeyboardEvent"];
browser.events.KeyboardEvent.__super__ = browser.events.Event;
browser.events.KeyboardEvent.prototype = $extend(browser.events.Event.prototype,{
	keyLocation: null
	,shiftKey: null
	,ctrlKey: null
	,charCode: null
	,keyCode: null
	,altKey: null
	,__class__: browser.events.KeyboardEvent
});
browser.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["browser.events.ProgressEvent"] = browser.events.ProgressEvent;
browser.events.ProgressEvent.__name__ = ["browser","events","ProgressEvent"];
browser.events.ProgressEvent.__super__ = browser.events.Event;
browser.events.ProgressEvent.prototype = $extend(browser.events.Event.prototype,{
	bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.events.ProgressEvent
});
browser.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["browser.events.TouchEvent"] = browser.events.TouchEvent;
browser.events.TouchEvent.__name__ = ["browser","events","TouchEvent"];
browser.events.TouchEvent.nmeCreate = function(type,event,touch,local,target) {
	var evt = new browser.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
browser.events.TouchEvent.__super__ = browser.events.Event;
browser.events.TouchEvent.prototype = $extend(browser.events.Event.prototype,{
	nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,touchPointID: null
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,isPrimaryTouchPoint: null
	,delta: null
	,ctrlKey: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.TouchEvent
});
browser.filters = {}
browser.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["browser.filters.BitmapFilter"] = browser.filters.BitmapFilter;
browser.filters.BitmapFilter.__name__ = ["browser","filters","BitmapFilter"];
browser.filters.BitmapFilter.prototype = {
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,nmePreFilter: function(surface) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,_nmeCached: null
	,_mType: null
	,__class__: browser.filters.BitmapFilter
}
browser.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	browser.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this._nmeCached = false;
};
$hxClasses["browser.filters.DropShadowFilter"] = browser.filters.DropShadowFilter;
browser.filters.DropShadowFilter.__name__ = ["browser","filters","DropShadowFilter"];
browser.filters.DropShadowFilter.__super__ = browser.filters.BitmapFilter;
browser.filters.DropShadowFilter.prototype = $extend(browser.filters.BitmapFilter.prototype,{
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this._nmeCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "#" + StringTools.hex(this.color,6);
			this._nmeCached = true;
		}
	}
	,clone: function() {
		return new browser.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,strength: null
	,quality: null
	,knockout: null
	,inner: null
	,hideObject: null
	,distance: null
	,color: null
	,blurY: null
	,blurX: null
	,angle: null
	,alpha: null
	,__class__: browser.filters.DropShadowFilter
});
browser.geom = {}
browser.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["browser.geom.ColorTransform"] = browser.geom.ColorTransform;
browser.geom.ColorTransform.__name__ = ["browser","geom","ColorTransform"];
browser.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,redOffset: null
	,redMultiplier: null
	,greenOffset: null
	,greenMultiplier: null
	,color: null
	,blueOffset: null
	,blueMultiplier: null
	,alphaOffset: null
	,alphaMultiplier: null
	,__class__: browser.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
browser.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["browser.geom.Matrix"] = browser.geom.Matrix;
browser.geom.Matrix.__name__ = ["browser","geom","Matrix"];
browser.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new browser.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new browser.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTranslateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTransformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,nmeTransformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new browser.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,_sy: null
	,_sx: null
	,ty: null
	,tx: null
	,d: null
	,c: null
	,b: null
	,a: null
	,__class__: browser.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
browser.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["browser.geom.Point"] = browser.geom.Point;
browser.geom.Point.__name__ = ["browser","geom","Point"];
browser.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
browser.geom.Point.interpolate = function(pt1,pt2,f) {
	return new browser.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
browser.geom.Point.polar = function(len,angle) {
	return new browser.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
browser.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new browser.geom.Point(this.x - v.x,this.y - v.y);
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) this.x = thickness; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new browser.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new browser.geom.Point(v.x + this.x,v.y + this.y);
	}
	,y: null
	,x: null
	,length: null
	,__class__: browser.geom.Point
	,__properties__: {get_length:"get_length"}
}
browser.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["browser.geom.Rectangle"] = browser.geom.Rectangle;
browser.geom.Rectangle.__name__ = ["browser","geom","Rectangle"];
browser.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new browser.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new browser.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new browser.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new browser.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width == 0 && this.height == 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new browser.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new browser.geom.Rectangle();
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new browser.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,y: null
	,x: null
	,width: null
	,topLeft: null
	,top: null
	,size: null
	,right: null
	,left: null
	,height: null
	,bottomRight: null
	,bottom: null
	,__class__: browser.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
browser.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new browser.geom.Matrix();
	this._fullMatrix = new browser.geom.Matrix();
	this.set_colorTransform(new browser.geom.ColorTransform());
};
$hxClasses["browser.geom.Transform"] = browser.geom.Transform;
browser.geom.Transform.__name__ = ["browser","geom","Transform"];
browser.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.nmeMatrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,_matrix: null
	,_fullMatrix: null
	,_displayObject: null
	,pixelBounds: null
	,matrix: null
	,colorTransform: null
	,__class__: browser.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
browser.media = {}
browser.media.Sound = function(stream,context) {
	browser.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.nmeSoundChannels = new IntHash();
	this.nmeSoundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["browser.media.Sound"] = browser.media.Sound;
browser.media.Sound.__name__ = ["browser","media","Sound"];
browser.media.Sound.nmeCanPlayMime = function(mime) {
	var audio = js.Lib.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime));
}
browser.media.Sound.nmeCanPlayType = function(extension) {
	var mime = browser.media.Sound.nmeMimeForExtension(extension);
	if(mime == null) return false;
	return browser.media.Sound.nmeCanPlayMime(mime);
}
browser.media.Sound.nmeMimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
browser.media.Sound.__super__ = browser.events.EventDispatcher;
browser.media.Sound.prototype = $extend(browser.events.EventDispatcher.prototype,{
	nmeOnSoundLoaded: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,nmeOnSoundLoadError: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.nmeStreamUrl == null) return null;
		var self = this;
		var curIdx = this.nmeSoundIdx;
		var removeRef = function() {
			self.nmeSoundChannels.remove(curIdx);
		};
		var channel = browser.media.SoundChannel.nmeCreate(this.nmeStreamUrl,startTime,loops,sndTransform,removeRef);
		this.nmeSoundChannels.set(curIdx,channel);
		this.nmeSoundIdx++;
		var audio = channel.nmeAudio;
		return channel;
	}
	,nmeRemoveEventListeners: function() {
		this.nmeSoundCache.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded),false);
		this.nmeSoundCache.removeEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError),false);
	}
	,nmeLoad: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.nmeStreamUrl = stream.url;
		try {
			this.nmeSoundCache = new browser.net.URLLoader();
			this.nmeAddEventListeners();
			this.nmeSoundCache.load(stream);
		} catch( e ) {
		}
	}
	,nmeAddEventListeners: function() {
		this.nmeSoundCache.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded));
		this.nmeSoundCache.addEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError));
	}
	,load: function(stream,context) {
		this.nmeLoad(stream,context);
	}
	,close: function() {
	}
	,nmeStreamUrl: null
	,nmeSoundIdx: null
	,nmeSoundChannels: null
	,nmeSoundCache: null
	,url: null
	,length: null
	,isBuffering: null
	,id3: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.media.Sound
});
browser.media.SoundChannel = function() {
	browser.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.nmeAudioCurrentLoop = 1;
	this.nmeAudioTotalLoops = 1;
};
$hxClasses["browser.media.SoundChannel"] = browser.media.SoundChannel;
browser.media.SoundChannel.__name__ = ["browser","media","SoundChannel"];
browser.media.SoundChannel.nmeCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new browser.media.SoundChannel();
	channel.nmeAudio = js.Lib.document.createElement("audio");
	channel.nmeRemoveRef = removeRef;
	channel.nmeAudio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.nmeAudio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.nmeAudio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.nmeAudio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.nmeAudioTotalLoops = loops;
		channel.nmeAudio.loop = true;
	}
	channel.nmeStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.nmeAudio.currentTime = channel.nmeStartTime;
			channel.nmeAudio.play();
			channel.nmeAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.nmeAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.nmeAudio.autoplay = true;
	channel.nmeAudio.src = src;
	return channel;
}
browser.media.SoundChannel.__super__ = browser.events.EventDispatcher;
browser.media.SoundChannel.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.nmeAudio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		haxe.Log.trace("sound stalled",{ fileName : "SoundChannel.hx", lineNumber : 170, className : "browser.media.SoundChannel", methodName : "__onStalled"});
		if(this.nmeAudio != null) this.nmeAudio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.loop = false;
			this.stop();
		} else this.nmeAudioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.nmeAudio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.nmeAudio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.nmeAudio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.nmeAudio = null;
			var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		} else {
			this.nmeAudio.currentTime = this.nmeStartTime;
			this.nmeAudio.play();
		}
	}
	,__onProgress: function(evt) {
		haxe.Log.trace("sound progress: " + Std.string(evt),{ fileName : "SoundChannel.hx", lineNumber : 116, className : "browser.media.SoundChannel", methodName : "__onProgress"});
	}
	,stop: function() {
		if(this.nmeAudio != null) {
			this.nmeAudio.pause();
			this.nmeAudio = null;
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		}
	}
	,nmeStartTime: null
	,nmeRemoveRef: null
	,nmeAudioTotalLoops: null
	,nmeAudioCurrentLoop: null
	,soundTransform: null
	,rightPeak: null
	,position: null
	,nmeAudio: null
	,leftPeak: null
	,ChannelId: null
	,__class__: browser.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
browser.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.media.SoundLoaderContext"] = browser.media.SoundLoaderContext;
browser.media.SoundLoaderContext.__name__ = ["browser","media","SoundLoaderContext"];
browser.media.SoundLoaderContext.prototype = {
	checkPolicyFile: null
	,bufferTime: null
	,__class__: browser.media.SoundLoaderContext
}
browser.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
};
$hxClasses["browser.media.SoundTransform"] = browser.media.SoundTransform;
browser.media.SoundTransform.__name__ = ["browser","media","SoundTransform"];
browser.media.SoundTransform.prototype = {
	volume: null
	,rightToRight: null
	,rightToLeft: null
	,pan: null
	,leftToRight: null
	,leftToLeft: null
	,__class__: browser.media.SoundTransform
}
browser.net = {}
browser.net.URLLoader = function(request) {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	if(request != null) this.load(request);
};
$hxClasses["browser.net.URLLoader"] = browser.net.URLLoader;
browser.net.URLLoader.__name__ = ["browser","net","URLLoader"];
browser.net.URLLoader.__super__ = browser.events.EventDispatcher;
browser.net.URLLoader.prototype = $extend(browser.events.EventDispatcher.prototype,{
	onStatus: function(status) {
		var evt = new browser.events.HTTPStatusEvent(browser.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new browser.events.ProgressEvent(browser.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new browser.events.Event(browser.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		switch( (this.dataFormat)[1] ) {
		case 0:
			this.data = browser.utils.ByteArray.nmeOfBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new browser.events.Event(browser.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,browser.utils.ByteArray)) {
			var data1 = data;
			switch( (this.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,browser.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		switch( (this.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g = 0;
		while(_g < requestHeaders.length) {
			var header = requestHeaders[_g];
			++_g;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		switch( (this.dataFormat)[1] ) {
		case 0:
			request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/octet-stream"));
			break;
		default:
			if(request.method != "GET") request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/x-www-form-urlencoded"));
		}
		this.requestUrl(request.url,request.method,request.data,request.requestHeaders);
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,dataFormat: null
	,data: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.net.URLLoader
});
browser.net.URLLoaderDataFormat = $hxClasses["browser.net.URLLoaderDataFormat"] = { __ename__ : ["browser","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
browser.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
browser.net.URLLoaderDataFormat.BINARY.toString = $estr;
browser.net.URLLoaderDataFormat.BINARY.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
browser.net.URLLoaderDataFormat.TEXT.toString = $estr;
browser.net.URLLoaderDataFormat.TEXT.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
browser.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
browser.net.URLLoaderDataFormat.VARIABLES.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = browser.net.URLRequestMethod.GET;
	this.contentType = "application/x-www-form-urlencoded";
};
$hxClasses["browser.net.URLRequest"] = browser.net.URLRequest;
browser.net.URLRequest.__name__ = ["browser","net","URLRequest"];
browser.net.URLRequest.prototype = {
	url: null
	,requestHeaders: null
	,method: null
	,data: null
	,contentType: null
	,__class__: browser.net.URLRequest
}
browser.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["browser.net.URLRequestHeader"] = browser.net.URLRequestHeader;
browser.net.URLRequestHeader.__name__ = ["browser","net","URLRequestHeader"];
browser.net.URLRequestHeader.prototype = {
	value: null
	,name: null
	,__class__: browser.net.URLRequestHeader
}
browser.net.URLRequestMethod = function() { }
$hxClasses["browser.net.URLRequestMethod"] = browser.net.URLRequestMethod;
browser.net.URLRequestMethod.__name__ = ["browser","net","URLRequestMethod"];
browser.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["browser.net.URLVariables"] = browser.net.URLVariables;
browser.net.URLVariables.__name__ = ["browser","net","URLVariables"];
browser.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: browser.net.URLVariables
}
browser.system = {}
browser.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.system.LoaderContext"] = browser.system.LoaderContext;
browser.system.LoaderContext.__name__ = ["browser","system","LoaderContext"];
browser.system.LoaderContext.prototype = {
	securityDomain: null
	,applicationDomain: null
	,checkPolicyFile: null
	,__class__: browser.system.LoaderContext
}
browser.system.System = function() { }
$hxClasses["browser.system.System"] = browser.system.System;
browser.system.System.__name__ = ["browser","system","System"];
browser.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
browser.system.System.totalMemory = null;
browser.system.System.vmVersion = null;
browser.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
browser.system.System.gc = function() {
}
browser.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
browser.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
browser.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
browser.system.System.get_totalMemory = function() {
	return 0;
}
browser.system.System.get_vmVersion = function() {
	return "nme - tip";
}
browser.text.FontStyle = $hxClasses["browser.text.FontStyle"] = { __ename__ : ["browser","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
browser.text.FontStyle.REGULAR = ["REGULAR",0];
browser.text.FontStyle.REGULAR.toString = $estr;
browser.text.FontStyle.REGULAR.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.ITALIC = ["ITALIC",1];
browser.text.FontStyle.ITALIC.toString = $estr;
browser.text.FontStyle.ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
browser.text.FontStyle.BOLD_ITALIC.toString = $estr;
browser.text.FontStyle.BOLD_ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD = ["BOLD",3];
browser.text.FontStyle.BOLD.toString = $estr;
browser.text.FontStyle.BOLD.__enum__ = browser.text.FontStyle;
browser.text.FontType = $hxClasses["browser.text.FontType"] = { __ename__ : ["browser","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
browser.text.FontType.EMBEDDED = ["EMBEDDED",0];
browser.text.FontType.EMBEDDED.toString = $estr;
browser.text.FontType.EMBEDDED.__enum__ = browser.text.FontType;
browser.text.FontType.DEVICE = ["DEVICE",1];
browser.text.FontType.DEVICE.toString = $estr;
browser.text.FontType.DEVICE.__enum__ = browser.text.FontType;
browser.text.TextField = function() {
	browser.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.nmeGraphics = new browser.display.Graphics();
	this.mFace = browser.text.TextField.mDefaultFont;
	this.mAlign = browser.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = browser.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.nmeInputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new browser.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
};
$hxClasses["browser.text.TextField"] = browser.text.TextField;
browser.text.TextField.__name__ = ["browser","text","TextField"];
browser.text.TextField.__super__ = browser.display.InteractiveObject;
browser.text.TextField.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.nmeInputEnabled = this.mType == browser.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.nmeInputEnabled) browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true); else browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,false);
		} else if(this.nmeInputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true);
		}
		this.tabEnabled = this.get_type() == browser.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Lib.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new browser.display.Graphics(wrapper);
			var nmeSurface = this.nmeGraphics.nmeSurface;
			if(browser.Lib.nmeIsOnStage(nmeSurface)) {
				browser.Lib.nmeAppendSurface(wrapper);
				browser.Lib.nmeCopyStyle(nmeSurface,wrapper);
				browser.Lib.nmeSwapSurface(nmeSurface,wrapper);
				browser.Lib.nmeRemoveSurface(nmeSurface);
			}
			this.nmeGraphics = destination;
			this.nmeGraphics.nmeExtent.width = wrapper.width;
			this.nmeGraphics.nmeExtent.height = wrapper.height;
		} else this.nmeGraphics.nmeSurface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.mScrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.mScrollH;
				if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.mScrollH < 0) this.mScrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == browser.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == browser.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.mScrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.nmeGraphics.lineStyle();
					this.nmeGraphics.beginFill(2105440);
					this.nmeGraphics.drawRect(x,inY,adv,full_height);
					this.nmeGraphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = browser.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.nmeGraphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.mScrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = browser.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.nmeGraphics.clear();
		if(this.background) {
			this.nmeGraphics.beginFill(this.backgroundColor);
			this.nmeGraphics.drawRect(0,0,this.get_width(),this.get_height());
			this.nmeGraphics.endFill();
		}
		this.nmeGraphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.wordWrap && !this.nmeInputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.nmeGetAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		switch(this.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.wordWrap) this.set_height(h);
		}
		if(this.border) {
			this.nmeGraphics.endFill();
			this.nmeGraphics.lineStyle(1,this.borderColor,1,true);
			this.nmeGraphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.nmeGraphics.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.nmeGraphics);
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new browser.text.TextFormat();
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,_defaultTextFormat: null
	,nmeInputEnabled: null
	,nmeGraphics: null
	,mWidth: null
	,mType: null
	,mTextColour: null
	,mText: null
	,mSelectDrag: null
	,mSelStart: null
	,mSelEnd: null
	,mSelectionAnchored: null
	,mSelectionAnchor: null
	,mScrollV: null
	,mScrollH: null
	,mMaxWidth: null
	,mMaxHeight: null
	,mLineInfo: null
	,mLimitRenderX: null
	,mInsertPos: null
	,mHTMLMode: null
	,mHTMLText: null
	,mHeight: null
	,mAlign: null
	,wordWrap: null
	,type: null
	,textWidth: null
	,textHeight: null
	,textColor: null
	,text: null
	,sharpness: null
	,selectionEndIndex: null
	,selectionBeginIndex: null
	,selectable: null
	,restrict: null
	,multiline: null
	,mTryFreeType: null
	,mTextHeight: null
	,mParagraphs: null
	,mFace: null
	,mDownChar: null
	,maxChars: null
	,length: null
	,htmlText: null
	,gridFitType: null
	,embedFonts: null
	,displayAsPassword: null
	,defaultTextFormat: null
	,caretPos: null
	,caretIndex: null
	,borderColor: null
	,border: null
	,backgroundColor: null
	,background: null
	,autoSize: null
	,antiAliasType: null
	,__class__: browser.text.TextField
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap"})
});
browser.text.FontInstanceMode = $hxClasses["browser.text.FontInstanceMode"] = { __ename__ : ["browser","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
browser.text.FontInstanceMode.fimSolid = ["fimSolid",0];
browser.text.FontInstanceMode.fimSolid.toString = $estr;
browser.text.FontInstanceMode.fimSolid.__enum__ = browser.text.FontInstanceMode;
browser.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["browser.text.FontInstance"] = browser.text.FontInstance;
browser.text.FontInstance.__name__ = ["browser","text","FontInstance"];
browser.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = browser.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new browser.text.Font();
	font.nmeSetScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new browser.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	browser.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
browser.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.nmeClearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.nmeRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = browser.text.FontInstanceMode.fimSolid;
	}
	,nmeGetAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.nmeGetAdvance(inChar,this.mHeight);
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,mCacheAsBitmap: null
	,mGlyphs: null
	,mHeight: null
	,mFont: null
	,mAlpha: null
	,mColour: null
	,mMode: null
	,mTryFreeType: null
	,height: null
	,__class__: browser.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
browser.text.TextFieldAutoSize = function() {
};
$hxClasses["browser.text.TextFieldAutoSize"] = browser.text.TextFieldAutoSize;
browser.text.TextFieldAutoSize.__name__ = ["browser","text","TextFieldAutoSize"];
browser.text.TextFieldAutoSize.prototype = {
	__class__: browser.text.TextFieldAutoSize
}
browser.text.TextFieldType = function() {
};
$hxClasses["browser.text.TextFieldType"] = browser.text.TextFieldType;
browser.text.TextFieldType.__name__ = ["browser","text","TextFieldType"];
browser.text.TextFieldType.prototype = {
	__class__: browser.text.TextFieldType
}
browser.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["browser.text.TextFormat"] = browser.text.TextFormat;
browser.text.TextFormat.__name__ = ["browser","text","TextFormat"];
browser.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new browser.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,url: null
	,underline: null
	,target: null
	,tabStops: null
	,size: null
	,rightMargin: null
	,letterSpacing: null
	,leftMargin: null
	,leading: null
	,kerning: null
	,italic: null
	,indent: null
	,font: null
	,display: null
	,color: null
	,bullet: null
	,bold: null
	,blockIndent: null
	,align: null
	,__class__: browser.text.TextFormat
}
browser.text.TextFormatAlign = $hxClasses["browser.text.TextFormatAlign"] = { __ename__ : ["browser","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
browser.text.TextFormatAlign.LEFT = ["LEFT",0];
browser.text.TextFormatAlign.LEFT.toString = $estr;
browser.text.TextFormatAlign.LEFT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.RIGHT = ["RIGHT",1];
browser.text.TextFormatAlign.RIGHT.toString = $estr;
browser.text.TextFormatAlign.RIGHT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
browser.text.TextFormatAlign.JUSTIFY.toString = $estr;
browser.text.TextFormatAlign.JUSTIFY.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.CENTER = ["CENTER",3];
browser.text.TextFormatAlign.CENTER.toString = $estr;
browser.text.TextFormatAlign.CENTER.__enum__ = browser.text.TextFormatAlign;
browser.ui = {}
browser.ui.Keyboard = function() { }
$hxClasses["browser.ui.Keyboard"] = browser.ui.Keyboard;
browser.ui.Keyboard.__name__ = ["browser","ui","Keyboard"];
browser.ui.Keyboard.capsLock = null;
browser.ui.Keyboard.numLock = null;
browser.ui.Keyboard.isAccessible = function() {
	return false;
}
browser.ui.Keyboard.nmeConvertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
browser.ui.Keyboard.nmeConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
browser.utils = {}
browser.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated);
};
$hxClasses["browser.utils.ByteArray"] = browser.utils.ByteArray;
browser.utils.ByteArray.__name__ = ["browser","utils","ByteArray"];
browser.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var bytes = new browser.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
browser.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var c = this.data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | this.data.getUint8(this.position++) & 127);
			} else {
				var c2 = this.data.getUint8(this.position++);
				var c3 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | this.data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this._nmeResizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this._nmeResizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.data.getUint8(this.position++) != 0;
	}
	,nmeSet: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeGet: function(pos) {
		return this.data.getUint8(pos);
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,littleEndian: null
	,data: null
	,byteView: null
	,allocated: null
	,position: null
	,objectEncoding: null
	,length: null
	,endian: null
	,bytesAvailable: null
	,__class__: browser.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
browser.utils.Endian = function() { }
$hxClasses["browser.utils.Endian"] = browser.utils.Endian;
browser.utils.Endian.__name__ = ["browser","utils","Endian"];
browser.utils.Uuid = function() { }
$hxClasses["browser.utils.Uuid"] = browser.utils.Uuid;
browser.utils.Uuid.__name__ = ["browser","utils","Uuid"];
browser.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
browser.utils.Uuid.uuid = function() {
	return browser.utils.Uuid.random(8) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(12);
}
com.haxepunk.Entity = function(x,y,graphic,mask) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	com.haxepunk.Tweener.call(this);
	this.visible = true;
	this.collidable = true;
	this.x = x;
	this.y = y;
	this.originX = this.originY = 0;
	this.width = this.height = 0;
	this._moveX = this._moveY = 0;
	this._type = "";
	this._name = "";
	this.HITBOX = new com.haxepunk.Mask();
	this._point = com.haxepunk.HXP.point;
	this._camera = com.haxepunk.HXP.point2;
	if(graphic != null) this.setGraphic(graphic);
	if(mask != null) this.setMask(mask);
	this.HITBOX.assignTo(this);
	this._class = Type.getClassName(Type.getClass(this));
	this.setLayer(10);
};
$hxClasses["com.haxepunk.Entity"] = com.haxepunk.Entity;
com.haxepunk.Entity.__name__ = ["com","haxepunk","Entity"];
com.haxepunk.Entity.__super__ = com.haxepunk.Tweener;
com.haxepunk.Entity.prototype = $extend(com.haxepunk.Tweener.prototype,{
	_camera: null
	,_point: null
	,_graphic: null
	,_moveY: null
	,_moveX: null
	,_y: null
	,_x: null
	,_mask: null
	,HITBOX: null
	,_recycleNext: null
	,_typeNext: null
	,_typePrev: null
	,_renderNext: null
	,_renderPrev: null
	,_updateNext: null
	,_updatePrev: null
	,_name: null
	,_layer: null
	,_type: null
	,_world: null
	,_class: null
	,clampVertical: function(top,bottom,padding) {
		if(padding == null) padding = 0;
		if(this.y - this.originY < top + padding) this.y = top + this.originY + padding;
		if(this.y - this.originY + this.height > bottom - padding) this.y = bottom - this.height + this.originY - padding;
	}
	,clampHorizontal: function(left,right,padding) {
		if(padding == null) padding = 0;
		if(this.x - this.originX < left + padding) this.x = left + this.originX + padding;
		if(this.x - this.originX + this.width > right - padding) this.x = right - this.width + this.originX - padding;
	}
	,moveCollideY: function(e) {
		return true;
	}
	,moveCollideX: function(e) {
		return true;
	}
	,moveTowards: function(x,y,amount,solidType,sweep) {
		if(sweep == null) sweep = false;
		this._point.x = x - this.x;
		this._point.y = y - this.y;
		if(this._point.x * this._point.x + this._point.y * this._point.y > amount * amount) this._point.normalize(amount);
		this.moveBy(this._point.x,this._point.y,solidType,sweep);
	}
	,moveTo: function(x,y,solidType,sweep) {
		if(sweep == null) sweep = false;
		this.moveBy(x - this.x,y - this.y,solidType,sweep);
	}
	,moveBy: function(x,y,solidType,sweep) {
		if(sweep == null) sweep = false;
		this._moveX += x;
		this._moveY += y;
		x = Math.round(this._moveX);
		y = Math.round(this._moveY);
		this._moveX -= x;
		this._moveY -= y;
		if(solidType != null) {
			var sign, e;
			if(x != 0) {
				if(this.collidable && (sweep || this.collideTypes(solidType,this.x + x,this.y) != null)) {
					sign = x > 0?1:-1;
					while(x != 0) {
						if((e = this.collideTypes(solidType,this.x + sign,this.y)) != null) {
							if(this.moveCollideX(e)) break; else this.x += sign;
						} else this.x += sign;
						x -= sign;
					}
				} else this.x += x;
			}
			if(y != 0) {
				if(this.collidable && (sweep || this.collideTypes(solidType,this.x,this.y + y) != null)) {
					sign = y > 0?1:-1;
					while(y != 0) {
						if((e = this.collideTypes(solidType,this.x,this.y + sign)) != null) {
							if(this.moveCollideY(e)) break; else this.y += sign;
						} else this.y += sign;
						y -= sign;
					}
				} else this.y += y;
			}
		} else {
			this.x += x;
			this.y += y;
		}
	}
	,toString: function() {
		return this._class;
	}
	,distanceToRect: function(rx,ry,rwidth,rheight) {
		return com.haxepunk.HXP.distanceRects(rx,ry,rwidth,rheight,this.x - this.originX,this.y - this.originY,this.width,this.height);
	}
	,distanceToPoint: function(px,py,useHitbox) {
		if(useHitbox == null) useHitbox = false;
		if(!useHitbox) return Math.sqrt((this.x - px) * (this.x - px) + (this.y - py) * (this.y - py)); else return com.haxepunk.HXP.distanceRectPoint(px,py,this.x - this.originX,this.y - this.originY,this.width,this.height);
	}
	,distanceFrom: function(e,useHitboxes) {
		if(useHitboxes == null) useHitboxes = false;
		if(!useHitboxes) return Math.sqrt((this.x - e.x) * (this.x - e.x) + (this.y - e.y) * (this.y - e.y)); else return com.haxepunk.HXP.distanceRects(this.x - this.originX,this.y - this.originY,this.width,this.height,e.x - e.originX,e.y - e.originY,e.width,e.height);
	}
	,centerOrigin: function() {
		this.originX = this.width / 2 | 0;
		this.originY = this.height / 2 | 0;
	}
	,setOrigin: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this.originX = x;
		this.originY = y;
	}
	,setHitboxTo: function(o) {
		com.haxepunk.HXP.log("setHitboxTo not supported on this platform");
	}
	,setHitbox: function(width,height,originX,originY) {
		if(originY == null) originY = 0;
		if(originX == null) originX = 0;
		if(height == null) height = 0;
		if(width == null) width = 0;
		this.width = width;
		this.height = height;
		this.originX = originX;
		this.originY = originY;
	}
	,addGraphic: function(g) {
		if(this._graphic == null) this.setGraphic(g); else if(js.Boot.__instanceof(this._graphic,com.haxepunk.graphics.Graphiclist)) (js.Boot.__cast(this._graphic , com.haxepunk.graphics.Graphiclist)).add(g); else {
			var list = new com.haxepunk.graphics.Graphiclist();
			if(this._graphic != null) list.add(this._graphic);
			list.add(g);
			this.setGraphic(list);
		}
		return g;
	}
	,setName: function(value) {
		if(this._name == value) return this._name;
		if(this._world == null) {
			this._name = value;
			return this._name;
		}
		if(this._name != "") this._world.unregisterName(this);
		this._name = value;
		if(value != "") this._world.registerName(this);
		return this._name;
	}
	,getName: function() {
		return this._name;
	}
	,name: null
	,setGraphic: function(value) {
		if(this._graphic == value) return value;
		this._graphic = value;
		if(value != null && value.assign != null) value.assign();
		return this._graphic;
	}
	,getGraphic: function() {
		return this._graphic;
	}
	,graphic: null
	,setMask: function(value) {
		if(this._mask == value) return value;
		if(this._mask != null) this._mask.assignTo(null);
		this._mask = value;
		if(value != null) this._mask.assignTo(this);
		return this._mask;
	}
	,getMask: function() {
		return this._mask;
	}
	,mask: null
	,setType: function(value) {
		if(this._type == value) return this._type;
		if(this._world == null) {
			this._type = value;
			return this._type;
		}
		if(this._type != "") this._world.removeType(this);
		this._type = value;
		if(value != "") this._world.addType(this);
		return this._type;
	}
	,getType: function() {
		return this._type;
	}
	,type: null
	,setLayer: function(value) {
		if(this._layer == value) return this._layer;
		if(this._world == null) {
			this._layer = value;
			return this._layer;
		}
		this._world.removeRender(this);
		this._layer = value;
		this._world.addRender(this);
		return this._layer;
	}
	,getLayer: function() {
		return this._layer;
	}
	,layer: null
	,getBottom: function() {
		return this.y - this.originY + this.height;
	}
	,bottom: null
	,getTop: function() {
		return this.y - this.originY;
	}
	,top: null
	,getRight: function() {
		return this.x - this.originX + this.width;
	}
	,right: null
	,getLeft: function() {
		return this.x - this.originX;
	}
	,left: null
	,getCenterY: function() {
		return this.y - this.originY + this.height / 2;
	}
	,centerY: null
	,getCenterX: function() {
		return this.x - this.originX + this.width / 2;
	}
	,centerX: null
	,getHalfHeight: function() {
		return this.height / 2;
	}
	,halfHeight: null
	,getHalfWidth: function() {
		return this.width / 2;
	}
	,halfWidth: null
	,getWorld: function() {
		return this._world;
	}
	,world: null
	,getOnCamera: function() {
		return this.collideRect(this.x,this.y,this._world.camera.x,this._world.camera.y,com.haxepunk.HXP.width,com.haxepunk.HXP.height);
	}
	,onCamera: null
	,collideTypesInto: function(types,x,y,array) {
		if(this._world == null) return;
		var _g = 0;
		while(_g < types.length) {
			var type = types[_g];
			++_g;
			this.collideInto(type,x,y,array);
		}
	}
	,collideInto: function(type,x,y,array) {
		if(this._world == null) return;
		var e, fe = this._world._typeFirst.get(type);
		if(!this.collidable || fe == null) return;
		this._x = this.x;
		this._y = this.y;
		this.x = x;
		this.y = y;
		var n = array.length;
		if(this._mask == null) {
			while(fe != null) {
				e = fe;
				if(e.collidable && e != this && x - this.originX + this.width > e.x - e.originX && y - this.originY + this.height > e.y - e.originY && x - this.originX < e.x - e.originX + e.width && y - this.originY < e.y - e.originY + e.height) {
					if(e._mask == null || e._mask.collide(this.HITBOX)) array[n++] = e;
				}
				fe = fe._typeNext;
			}
			this.x = this._x;
			this.y = this._y;
			return;
		}
		while(fe != null) {
			e = fe;
			if(e.collidable && e != this && x - this.originX + this.width > e.x - e.originX && y - this.originY + this.height > e.y - e.originY && x - this.originX < e.x - e.originX + e.width && y - this.originY < e.y - e.originY + e.height) {
				if(this._mask.collide(e._mask != null?e._mask:e.HITBOX)) array[n++] = e;
			}
			fe = fe._typeNext;
		}
		this.x = this._x;
		this.y = this._y;
		return;
	}
	,collidePoint: function(x,y,pX,pY) {
		if(pX >= x - this.originX && pY >= y - this.originY && pX < x - this.originX + this.width && pY < y - this.originY + this.height) {
			if(this._mask == null) return true;
			this._x = this.x;
			this._y = this.y;
			this.x = x;
			this.y = y;
			com.haxepunk.HXP.entity.x = pX;
			com.haxepunk.HXP.entity.y = pY;
			com.haxepunk.HXP.entity.width = 1;
			com.haxepunk.HXP.entity.height = 1;
			if(this._mask.collide(com.haxepunk.HXP.entity.HITBOX)) {
				this.x = this._x;
				this.y = this._y;
				return true;
			}
			this.x = this._x;
			this.y = this._y;
			return false;
		}
		return false;
	}
	,collideRect: function(x,y,rX,rY,rWidth,rHeight) {
		if(x - this.originX + this.width >= rX && y - this.originY + this.height >= rY && x - this.originX <= rX + rWidth && y - this.originY <= rY + rHeight) {
			if(this._mask == null) return true;
			this._x = this.x;
			this._y = this.y;
			this.x = x;
			this.y = y;
			com.haxepunk.HXP.entity.x = rX;
			com.haxepunk.HXP.entity.y = rY;
			com.haxepunk.HXP.entity.width = rWidth | 0;
			com.haxepunk.HXP.entity.height = rHeight | 0;
			if(this._mask.collide(com.haxepunk.HXP.entity.HITBOX)) {
				this.x = this._x;
				this.y = this._y;
				return true;
			}
			this.x = this._x;
			this.y = this._y;
			return false;
		}
		return false;
	}
	,collideWith: function(e,x,y) {
		this._x = this.x;
		this._y = this.y;
		this.x = x;
		this.y = y;
		if(this.collidable && e.collidable && x - this.originX + this.width > e.x - e.originX && y - this.originY + this.height > e.y - e.originY && x - this.originX < e.x - e.originX + e.width && y - this.originY < e.y - e.originY + e.height) {
			if(this._mask == null) {
				if(e._mask == null || e._mask.collide(this.HITBOX)) {
					this.x = this._x;
					this.y = this._y;
					return e;
				}
				this.x = this._x;
				this.y = this._y;
				return null;
			}
			if(this._mask.collide(e._mask != null?e._mask:e.HITBOX)) {
				this.x = this._x;
				this.y = this._y;
				return e;
			}
		}
		this.x = this._x;
		this.y = this._y;
		return null;
	}
	,collideTypes: function(types,x,y) {
		if(this._world == null) return null;
		if(js.Boot.__instanceof(types,String)) return this.collide(types,x,y); else {
			var a = types;
			if(a != null) {
				var e;
				var _g = 0;
				while(_g < a.length) {
					var type = a[_g];
					++_g;
					e = this.collide(type,x,y);
					if(e != null) return e;
				}
			}
		}
		return null;
	}
	,collide: function(type,x,y) {
		if(this._world == null) return null;
		var e, fe = this._world._typeFirst.get(type);
		if(!this.collidable || fe == null) return null;
		this._x = this.x;
		this._y = this.y;
		this.x = x;
		this.y = y;
		if(this._mask == null) {
			while(fe != null) {
				e = js.Boot.__cast(fe , com.haxepunk.Entity);
				if(e.collidable && e != this && x - this.originX + this.width > e.x - e.originX && y - this.originY + this.height > e.y - e.originY && x - this.originX < e.x - e.originX + e.width && y - this.originY < e.y - e.originY + e.height) {
					if(e._mask == null || e._mask.collide(this.HITBOX)) {
						this.x = this._x;
						this.y = this._y;
						return e;
					}
				}
				fe = fe._typeNext;
			}
			this.x = this._x;
			this.y = this._y;
			return null;
		}
		while(fe != null) {
			e = js.Boot.__cast(fe , com.haxepunk.Entity);
			if(e.collidable && e != this && x - this.originX + this.width > e.x - e.originX && y - this.originY + this.height > e.y - e.originY && x - this.originX < e.x - e.originX + e.width && y - this.originY < e.y - e.originY + e.height) {
				if(this._mask.collide(e._mask != null?e._mask:e.HITBOX)) {
					this.x = this._x;
					this.y = this._y;
					return e;
				}
			}
			fe = fe._typeNext;
		}
		this.x = this._x;
		this.y = this._y;
		return null;
	}
	,render: function() {
		if(this._graphic != null && this._graphic.visible) {
			if(this._graphic.relative) {
				this._point.x = this.x;
				this._point.y = this.y;
			} else this._point.x = this._point.y = 0;
			this._camera.x = this._world == null?com.haxepunk.HXP.camera.x:this._world.camera.x;
			this._camera.y = this._world == null?com.haxepunk.HXP.camera.y:this._world.camera.y;
			this._graphic.render(this.renderTarget != null?this.renderTarget:com.haxepunk.HXP.buffer,this._point,this._camera,this._layer);
		}
	}
	,update: function() {
	}
	,removed: function() {
	}
	,added: function() {
	}
	,renderTarget: null
	,originY: null
	,originX: null
	,height: null
	,width: null
	,y: null
	,x: null
	,collidable: null
	,visible: null
	,__class__: com.haxepunk.Entity
	,__properties__: $extend(com.haxepunk.Tweener.prototype.__properties__,{get_onCamera:"getOnCamera",get_world:"getWorld",get_halfWidth:"getHalfWidth",get_halfHeight:"getHalfHeight",get_centerX:"getCenterX",get_centerY:"getCenterY",get_left:"getLeft",get_right:"getRight",get_top:"getTop",get_bottom:"getBottom",set_layer:"setLayer",get_layer:"getLayer",set_type:"setType",get_type:"getType",set_mask:"setMask",get_mask:"getMask",set_graphic:"setGraphic",get_graphic:"getGraphic",set_name:"setName",get_name:"getName"})
});
com.haxepunk.Graphic = function() {
	this.active = false;
	this.visible = true;
	this.x = this.y = 0;
	this.scrollX = this.scrollY = 1;
	this.relative = true;
	this._scroll = true;
	this._point = new browser.geom.Point();
};
$hxClasses["com.haxepunk.Graphic"] = com.haxepunk.Graphic;
com.haxepunk.Graphic.__name__ = ["com","haxepunk","Graphic"];
com.haxepunk.Graphic.prototype = {
	_blit: null
	,_point: null
	,_scroll: null
	,assign: null
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
	}
	,update: function() {
	}
	,relative: null
	,scrollY: null
	,scrollX: null
	,y: null
	,x: null
	,visible: null
	,active: null
	,__class__: com.haxepunk.Graphic
}
var js = {}
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib["eval"] = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
com.haxepunk.HXP = function() { }
$hxClasses["com.haxepunk.HXP"] = com.haxepunk.HXP;
com.haxepunk.HXP.__name__ = ["com","haxepunk","HXP"];
com.haxepunk.HXP.__properties__ = {set_time:"setTime",get_console:"getConsole",get_random:"getRandom",set_randomSeed:"setRandomSeed",set_pan:"setPan",get_pan:"getPan",set_volume:"setVolume",get_volume:"getVolume",set_world:"setWorld",get_world:"getWorld"}
com.haxepunk.HXP.width = null;
com.haxepunk.HXP.height = null;
com.haxepunk.HXP.windowWidth = null;
com.haxepunk.HXP.windowHeight = null;
com.haxepunk.HXP.fixed = null;
com.haxepunk.HXP.assignedFrameRate = null;
com.haxepunk.HXP.elapsed = null;
com.haxepunk.HXP.screen = null;
com.haxepunk.HXP.buffer = null;
com.haxepunk.HXP.bounds = null;
com.haxepunk.HXP.halfWidth = null;
com.haxepunk.HXP.halfHeight = null;
com.haxepunk.HXP.world = null;
com.haxepunk.HXP.getWorld = function() {
	return com.haxepunk.HXP._world;
}
com.haxepunk.HXP.setWorld = function(value) {
	if(com.haxepunk.HXP._world == value) return value;
	com.haxepunk.HXP._goto = value;
	return com.haxepunk.HXP._world;
}
com.haxepunk.HXP.swapWorld = function() {
	com.haxepunk.HXP._world = com.haxepunk.HXP._goto;
	com.haxepunk.HXP._goto = null;
}
com.haxepunk.HXP.resize = function(width,height) {
	com.haxepunk.HXP.windowWidth = width;
	com.haxepunk.HXP.windowHeight = height;
	width = width / com.haxepunk.HXP.screen.getFullScaleX() | 0;
	height = height / com.haxepunk.HXP.screen.getFullScaleY() | 0;
	com.haxepunk.HXP.width = width;
	com.haxepunk.HXP.height = height;
	com.haxepunk.HXP.halfWidth = width / 2;
	com.haxepunk.HXP.halfHeight = height / 2;
	com.haxepunk.HXP.bounds.width = width;
	com.haxepunk.HXP.bounds.height = height;
	com.haxepunk.HXP.screen.resize();
}
com.haxepunk.HXP.clear = function(array) {
	array.length = 0;
}
com.haxepunk.HXP.setCamera = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	com.haxepunk.HXP.camera.x = x;
	com.haxepunk.HXP.camera.y = y;
}
com.haxepunk.HXP.resetCamera = function() {
	com.haxepunk.HXP.camera.x = com.haxepunk.HXP.camera.y = 0;
}
com.haxepunk.HXP.volume = null;
com.haxepunk.HXP.getVolume = function() {
	return com.haxepunk.HXP._volume;
}
com.haxepunk.HXP.setVolume = function(value) {
	if(value < 0) value = 0;
	if(com.haxepunk.HXP._volume == value) return value;
	com.haxepunk.HXP._soundTransform.volume = com.haxepunk.HXP._volume = value;
	return com.haxepunk.HXP._volume;
}
com.haxepunk.HXP.pan = null;
com.haxepunk.HXP.getPan = function() {
	return com.haxepunk.HXP._pan;
}
com.haxepunk.HXP.setPan = function(value) {
	if(value < -1) value = -1;
	if(value > 1) value = 1;
	if(com.haxepunk.HXP._pan == value) return value;
	com.haxepunk.HXP._soundTransform.pan = com.haxepunk.HXP._pan = value;
	return com.haxepunk.HXP._pan;
}
com.haxepunk.HXP.choose = function(objs) {
	return objs[(function($this) {
		var $r;
		com.haxepunk.HXP._seed = com.haxepunk.HXP._seed * 16807.0 % 2147483646 | 0;
		$r = com.haxepunk.HXP._seed / 2147483646 * objs.length | 0;
		return $r;
	}(this))];
}
com.haxepunk.HXP.sign = function(value) {
	return value < 0?-1:value > 0?1:0;
}
com.haxepunk.HXP.approach = function(value,target,amount) {
	if(value < target - amount) return value + amount; else if(value > target + amount) return value - amount; else return target;
}
com.haxepunk.HXP.lerp = function(a,b,t) {
	if(t == null) t = 1;
	return a + (b - a) * t;
}
com.haxepunk.HXP.colorLerp = function(fromColor,toColor,t) {
	if(t == null) t = 1;
	if(t <= 0) return fromColor; else if(t >= 1) return toColor; else {
		var a = fromColor >> 24 & 255, r = fromColor >> 16 & 255, g = fromColor >> 8 & 255, b = fromColor & 255, dA = (toColor >> 24 & 255) - a, dR = (toColor >> 16 & 255) - r, dG = (toColor >> 8 & 255) - g, dB = (toColor & 255) - b;
		a += dA * t | 0;
		r += dR * t | 0;
		g += dG * t | 0;
		b += dB * t | 0;
		return a << 24 | r << 16 | g << 8 | b;
	}
}
com.haxepunk.HXP.stepTowards = function(object,x,y,distance) {
	if(distance == null) distance = 1;
	com.haxepunk.HXP.point.x = x - object.x;
	com.haxepunk.HXP.point.y = y - object.y;
	if(com.haxepunk.HXP.point.get_length() <= distance) {
		object.x = x;
		object.y = y;
		return;
	}
	com.haxepunk.HXP.point.normalize(distance);
	object.x += com.haxepunk.HXP.point.x;
	object.y += com.haxepunk.HXP.point.y;
}
com.haxepunk.HXP.anchorTo = function(object,anchor,distance) {
	if(distance == null) distance = 0;
	com.haxepunk.HXP.point.x = object.x - anchor.x;
	com.haxepunk.HXP.point.y = object.y - anchor.y;
	if(com.haxepunk.HXP.point.get_length() > distance) com.haxepunk.HXP.point.normalize(distance);
	object.x = anchor.x + com.haxepunk.HXP.point.x;
	object.y = anchor.y + com.haxepunk.HXP.point.y;
}
com.haxepunk.HXP.angle = function(x1,y1,x2,y2) {
	var a = Math.atan2(y2 - y1,x2 - x1) * (-180 / Math.PI);
	return a < 0?a + 360:a;
}
com.haxepunk.HXP.angleXY = function(object,angle,length,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(length == null) length = 1;
	angle *= Math.PI / -180;
	object.x = Math.cos(angle) * length + x;
	object.y = Math.sin(angle) * length + y;
}
com.haxepunk.HXP.rotateAround = function(object,anchor,angle,relative) {
	if(relative == null) relative = true;
	if(angle == null) angle = 0;
	if(relative) angle += com.haxepunk.HXP.angle(anchor.x,anchor.y,object.x,object.y);
	com.haxepunk.HXP.angleXY(object,angle,com.haxepunk.HXP.distance(anchor.x,anchor.y,object.x,object.y),anchor.x,anchor.y);
}
com.haxepunk.HXP.round = function(num,precision) {
	var exp = Math.pow(10,precision);
	return Math.round(num * exp) / exp;
}
com.haxepunk.HXP.distance = function(x1,y1,x2,y2) {
	if(y2 == null) y2 = 0;
	if(x2 == null) x2 = 0;
	return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
com.haxepunk.HXP.distanceSquared = function(x1,y1,x2,y2) {
	if(y2 == null) y2 = 0;
	if(x2 == null) x2 = 0;
	return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}
com.haxepunk.HXP.distanceRects = function(x1,y1,w1,h1,x2,y2,w2,h2) {
	if(x1 < x2 + w2 && x2 < x1 + w1) {
		if(y1 < y2 + h2 && y2 < y1 + h1) return 0;
		if(y1 > y2) return y1 - (y2 + h2);
		return y2 - (y1 + h1);
	}
	if(y1 < y2 + h2 && y2 < y1 + h1) {
		if(x1 > x2) return x1 - (x2 + w2);
		return x2 - (x1 + w1);
	}
	if(x1 > x2) {
		if(y1 > y2) return com.haxepunk.HXP.distance(x1,y1,x2 + w2,y2 + h2);
		return com.haxepunk.HXP.distance(x1,y1 + h1,x2 + w2,y2);
	}
	if(y1 > y2) return com.haxepunk.HXP.distance(x1 + w1,y1,x2,y2 + h2);
	return com.haxepunk.HXP.distance(x1 + w1,y1 + h1,x2,y2);
}
com.haxepunk.HXP.distanceRectPoint = function(px,py,rx,ry,rw,rh) {
	if(px >= rx && px <= rx + rw) {
		if(py >= ry && py <= ry + rh) return 0;
		if(py > ry) return py - (ry + rh);
		return ry - py;
	}
	if(py >= ry && py <= ry + rh) {
		if(px > rx) return px - (rx + rw);
		return rx - px;
	}
	if(px > rx) {
		if(py > ry) return com.haxepunk.HXP.distance(px,py,rx + rw,ry + rh);
		return com.haxepunk.HXP.distance(px,py,rx + rw,ry);
	}
	if(py > ry) return com.haxepunk.HXP.distance(px,py,rx,ry + rh);
	return Math.sqrt((rx - px) * (rx - px) + (ry - py) * (ry - py));
}
com.haxepunk.HXP.clamp = function(value,min,max) {
	if(max > min) {
		if(value < min) return min; else if(value > max) return max; else return value;
	} else if(value < max) return max; else if(value > min) return min; else return value;
}
com.haxepunk.HXP.clampInRect = function(object,x,y,width,height,padding) {
	if(padding == null) padding = 0;
	object.x = com.haxepunk.HXP.clamp(object.x,x + padding,x + width - padding);
	object.y = com.haxepunk.HXP.clamp(object.y,y + padding,y + height - padding);
}
com.haxepunk.HXP.scale = function(value,min,max,min2,max2) {
	return min2 + (value - min) / (max - min) * (max2 - min2);
}
com.haxepunk.HXP.scaleClamp = function(value,min,max,min2,max2) {
	value = min2 + (value - min) / (max - min) * (max2 - min2);
	if(max2 > min2) {
		value = value < max2?value:max2;
		return value > min2?value:min2;
	}
	value = value < min2?value:min2;
	return value > max2?value:max2;
}
com.haxepunk.HXP.randomSeed = null;
com.haxepunk.HXP.setRandomSeed = function(value) {
	com.haxepunk.HXP._seed = com.haxepunk.HXP.clamp(value,1.0,2147483646) | 0;
	com.haxepunk.HXP.randomSeed = com.haxepunk.HXP._seed;
	return com.haxepunk.HXP._seed;
}
com.haxepunk.HXP.randomizeSeed = function() {
	com.haxepunk.HXP._seed = com.haxepunk.HXP.clamp(2147483646 * Math.random() | 0,1.0,2147483646) | 0;
	com.haxepunk.HXP.randomSeed = com.haxepunk.HXP._seed;
	com.haxepunk.HXP._seed;
}
com.haxepunk.HXP.random = null;
com.haxepunk.HXP.getRandom = function() {
	com.haxepunk.HXP._seed = com.haxepunk.HXP._seed * 16807.0 % 2147483646 | 0;
	return com.haxepunk.HXP._seed / 2147483646;
}
com.haxepunk.HXP.rand = function(amount) {
	com.haxepunk.HXP._seed = com.haxepunk.HXP._seed * 16807.0 % 2147483646 | 0;
	return com.haxepunk.HXP._seed / 2147483646 * amount | 0;
}
com.haxepunk.HXP.indexOf = function(a,v) {
	var i = 0;
	var _g = 0;
	while(_g < a.length) {
		var v2 = a[_g];
		++_g;
		if(v == v2) return i;
		i++;
	}
	return -1;
}
com.haxepunk.HXP.next = function(current,options,loop) {
	if(loop == null) loop = true;
	if(loop) return options[(com.haxepunk.HXP.indexOf(options,current) + 1) % options.length]; else return options[Math.max(com.haxepunk.HXP.indexOf(options,current) + 1,options.length - 1) | 0];
}
com.haxepunk.HXP.prev = function(current,options,loop) {
	if(loop == null) loop = true;
	if(loop) return options[(com.haxepunk.HXP.indexOf(options,current) - 1 + options.length) % options.length]; else return options[Math.max(com.haxepunk.HXP.indexOf(options,current) - 1,0) | 0];
}
com.haxepunk.HXP.swap = function(current,a,b) {
	return current == a?b:a;
}
com.haxepunk.HXP.getColorRGB = function(R,G,B) {
	if(B == null) B = 0;
	if(G == null) G = 0;
	if(R == null) R = 0;
	return R << 16 | G << 8 | B;
}
com.haxepunk.HXP.getColorHSV = function(h,s,v) {
	h = h * 360 | 0;
	var hi = Math.floor(h / 60) % 6, f = h / 60 - Math.floor(h / 60), p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
	switch(hi) {
	case 0:
		return (v * 255 | 0) << 16 | (t * 255 | 0) << 8 | (p * 255 | 0);
	case 1:
		return (q * 255 | 0) << 16 | (v * 255 | 0) << 8 | (p * 255 | 0);
	case 2:
		return (p * 255 | 0) << 16 | (v * 255 | 0) << 8 | (t * 255 | 0);
	case 3:
		return (p * 255 | 0) << 16 | (q * 255 | 0) << 8 | (v * 255 | 0);
	case 4:
		return (t * 255 | 0) << 16 | (p * 255 | 0) << 8 | (v * 255 | 0);
	case 5:
		return (v * 255 | 0) << 16 | (p * 255 | 0) << 8 | (q * 255 | 0);
	default:
		return 0;
	}
	return 0;
}
com.haxepunk.HXP.getRed = function(color) {
	return color >> 16 & 255;
}
com.haxepunk.HXP.getGreen = function(color) {
	return color >> 8 & 255;
}
com.haxepunk.HXP.getBlue = function(color) {
	return color & 255;
}
com.haxepunk.HXP.getBitmap = function(source) {
	var name = Std.string(source);
	if(com.haxepunk.HXP._bitmap.exists(name)) return com.haxepunk.HXP._bitmap.get(name);
	var data = nme.installer.Assets.getBitmapData(source);
	if(data != null) com.haxepunk.HXP._bitmap.set(name,data);
	return data;
}
com.haxepunk.HXP.createBitmap = function(width,height,transparent,color) {
	if(color == null) color = 0;
	if(transparent == null) transparent = false;
	return new browser.display.BitmapData(width,height,transparent,color);
}
com.haxepunk.HXP.convertColor = function(color) {
	return color;
}
com.haxepunk.HXP.timeFlag = function() {
	var t = haxe.Timer.stamp(), e = t - com.haxepunk.HXP._time;
	com.haxepunk.HXP._time = t;
	return e;
}
com.haxepunk.HXP.console = null;
com.haxepunk.HXP.getConsole = function() {
	if(com.haxepunk.HXP._console == null) com.haxepunk.HXP._console = new com.haxepunk.debug.Console();
	return com.haxepunk.HXP._console;
}
com.haxepunk.HXP.consoleEnabled = function() {
	return com.haxepunk.HXP._console != null;
}
com.haxepunk.HXP.tween = function(object,values,duration,options) {
	var type = com.haxepunk.TweenType.OneShot, complete = null, ease = null, tweener = com.haxepunk.HXP.tweener;
	if(js.Boot.__instanceof(object,com.haxepunk.Tweener)) tweener = js.Boot.__cast(object , com.haxepunk.Tweener);
	if(options != null) {
		if(Reflect.hasField(options,"type")) type = options.type;
		if(Reflect.hasField(options,"complete")) complete = options.complete;
		if(Reflect.hasField(options,"ease")) ease = options.ease;
		if(Reflect.hasField(options,"tweener")) tweener = options.tweener;
	}
	var tween = new com.haxepunk.tweens.misc.MultiVarTween(complete,type);
	tween.tween(object,values,duration,ease);
	tweener.addTween(tween);
	return tween;
}
com.haxepunk.HXP.frames = function(from,to,skip) {
	if(skip == null) skip = 0;
	var a = new Array();
	skip++;
	if(from < to) while(from <= to) {
		a.push(from);
		from += skip;
	} else while(from >= to) {
		a.push(from);
		from -= skip;
	}
	return a;
}
com.haxepunk.HXP.shuffle = function(a) {
	if(js.Boot.__instanceof(a,Array)) {
		var i = a.length, j, t;
		while(--i > 0) {
			t = a[i];
			a[i] = a[j = (function($this) {
				var $r;
				com.haxepunk.HXP._seed = com.haxepunk.HXP._seed * 16807.0 % 2147483646 | 0;
				$r = com.haxepunk.HXP._seed / 2147483646 * (i + 1) | 0;
				return $r;
			}(this))];
			a[j] = t;
		}
	}
}
com.haxepunk.HXP.time = null;
com.haxepunk.HXP.setTime = function(value) {
	com.haxepunk.HXP._time = value;
	return com.haxepunk.HXP._time;
}
com.haxepunk.HXP.gotoIsNull = function() {
	return com.haxepunk.HXP._goto == null;
}
com.haxepunk.HXP._goto = null;
com.haxepunk.HXP._console = null;
com.haxepunk.HXP._time = null;
com.haxepunk.HXP._updateTime = null;
com.haxepunk.HXP._renderTime = null;
com.haxepunk.HXP._gameTime = null;
com.haxepunk.HXP._flashTime = null;
com.haxepunk.HXP.stage = null;
com.haxepunk.HXP.engine = null;
com.haxepunk.HXP.entity = null;
com.haxepunk.Mask = function() {
	this._class = Type.getClassName(Type.getClass(this));
	this._check = new Hash();
	this._check.set(Type.getClassName(com.haxepunk.Mask),$bind(this,this.collideMask));
	this._check.set(Type.getClassName(com.haxepunk.masks.Masklist),$bind(this,this.collideMasklist));
};
$hxClasses["com.haxepunk.Mask"] = com.haxepunk.Mask;
com.haxepunk.Mask.__name__ = ["com","haxepunk","Mask"];
com.haxepunk.Mask.prototype = {
	_check: null
	,_class: null
	,project: function(axis,projection) {
		var cur, max = -9999999999.0, min = 9999999999.0;
		cur = -this.parent.originX * axis.x - this.parent.originY * axis.y;
		if(cur < min) min = cur;
		if(cur > max) max = cur;
		cur = (-this.parent.originX + this.parent.width) * axis.x - this.parent.originY * axis.y;
		if(cur < min) min = cur;
		if(cur > max) max = cur;
		cur = -this.parent.originX * axis.x + (-this.parent.originY + this.parent.height) * axis.y;
		if(cur < min) min = cur;
		if(cur > max) max = cur;
		cur = (-this.parent.originX + this.parent.width) * axis.x + (-this.parent.originY + this.parent.height) * axis.y;
		if(cur < min) min = cur;
		if(cur > max) max = cur;
		projection.min = min;
		projection.max = max;
	}
	,update: function() {
	}
	,debugDraw: function(graphics,scaleX,scaleY) {
	}
	,assignTo: function(parent) {
		this.parent = parent;
		if(parent != null) this.update();
	}
	,collideMasklist: function(other) {
		return other.collide(this);
	}
	,collideMask: function(other) {
		return this.parent.x - this.parent.originX + this.parent.width > other.parent.x - other.parent.originX && this.parent.y - this.parent.originY + this.parent.height > other.parent.y - other.parent.originY && this.parent.x - this.parent.originX < other.parent.x - other.parent.originX + other.parent.width && this.parent.y - this.parent.originY < other.parent.y - other.parent.originY + other.parent.height;
	}
	,collide: function(mask) {
		if(this.parent == null) throw "Mask must be attached to a parent Entity";
		var cbFunc = this._check.get(mask._class);
		if(cbFunc != null) return cbFunc(mask);
		cbFunc = mask._check.get(this._class);
		if(cbFunc != null) return cbFunc(this);
		return false;
	}
	,list: null
	,parent: null
	,__class__: com.haxepunk.Mask
}
com.haxepunk.Preloader = function() {
	NMEPreloader.call(this);
};
$hxClasses["com.haxepunk.Preloader"] = com.haxepunk.Preloader;
com.haxepunk.Preloader.__name__ = ["com","haxepunk","Preloader"];
com.haxepunk.Preloader.__super__ = NMEPreloader;
com.haxepunk.Preloader.prototype = $extend(NMEPreloader.prototype,{
	__class__: com.haxepunk.Preloader
});
com.haxepunk.Screen = function() {
	this.init();
	com.haxepunk.HXP.engine.addChild(this._sprite);
};
$hxClasses["com.haxepunk.Screen"] = com.haxepunk.Screen;
com.haxepunk.Screen.__name__ = ["com","haxepunk","Screen"];
com.haxepunk.Screen.prototype = {
	_color: null
	,_angle: null
	,_matrix: null
	,_current: null
	,_bitmap: null
	,_sprite: null
	,capture: function() {
		return new com.haxepunk.graphics.Image(this._bitmap[this._current].bitmapData.clone());
	}
	,getMouseY: function() {
		return this._sprite.get_mouseY() | 0;
	}
	,mouseY: null
	,getMouseX: function() {
		return this._sprite.get_mouseX() | 0;
	}
	,mouseX: null
	,height: null
	,width: null
	,setSmoothing: function(value) {
		this._bitmap[0].smoothing = this._bitmap[1].smoothing = value;
		return value;
	}
	,getSmoothing: function() {
		return this._bitmap[0].smoothing;
	}
	,smoothing: null
	,setAngle: function(value) {
		if(this._angle == value * (Math.PI / -180)) return value;
		this._angle = value * (Math.PI / -180);
		this.update();
		return this._angle;
	}
	,getAngle: function() {
		return this._angle * (-180 / Math.PI);
	}
	,angle: null
	,getFullScaleY: function() {
		return this.scaleY * this.scale;
	}
	,fullScaleY: null
	,getFullScaleX: function() {
		return this.scaleX * this.scale;
	}
	,fullScaleX: null
	,setScale: function(value) {
		if(this.scale == value) return value;
		this.scale = value;
		this.update();
		return this.scale;
	}
	,scale: null
	,setScaleY: function(value) {
		if(this.scaleY == value) return value;
		this.scaleY = value;
		this.update();
		return this.scaleY;
	}
	,scaleY: null
	,setScaleX: function(value) {
		if(this.scaleX == value) return value;
		this.scaleX = value;
		this.update();
		return this.scaleX;
	}
	,scaleX: null
	,setOriginY: function(value) {
		if(this.originY == value) return value;
		this.originY = value;
		this.update();
		return this.originY;
	}
	,originY: null
	,setOriginX: function(value) {
		if(this.originX == value) return value;
		this.originX = value;
		this.update();
		return this.originX;
	}
	,originX: null
	,setY: function(value) {
		if(this.y == value) return value;
		this.y = value;
		this.update();
		return this.y;
	}
	,y: null
	,setX: function(value) {
		if(this.x == value) return value;
		this.x = value;
		this.update();
		return this.x;
	}
	,x: null
	,setColor: function(value) {
		return value;
	}
	,getColor: function() {
		return this._color;
	}
	,color: null
	,update: function() {
		if(this._matrix == null) return;
		this._matrix.b = this._matrix.c = 0;
		this._matrix.a = this.getFullScaleX();
		this._matrix.d = this.getFullScaleY();
		this._matrix.set_tx(-this.originX * this._matrix.a);
		this._matrix.set_ty(-this.originY * this._matrix.d);
		if(this._angle != 0) this._matrix.rotate(this._angle);
		var _g = this._matrix;
		_g.set_tx(_g.tx + (this.originX * this.getFullScaleX() + this.x));
		var _g = this._matrix;
		_g.set_ty(_g.ty + (this.originY * this.getFullScaleY() + this.y));
		this._sprite.transform.set_matrix(this._matrix);
	}
	,redraw: function() {
		this._bitmap[this._current].set_visible(true);
		this._bitmap[1 - this._current].set_visible(false);
	}
	,refresh: function() {
		com.haxepunk.HXP.buffer.fillRect(com.haxepunk.HXP.bounds,this._color);
	}
	,addFilter: function(filter) {
		this._sprite.set_filters(filter);
	}
	,swap: function() {
		this._current = 1 - this._current;
		com.haxepunk.HXP.buffer = this._bitmap[this._current].bitmapData;
	}
	,resize: function() {
		this.disposeBitmap(this._bitmap[0]);
		this.disposeBitmap(this._bitmap[1]);
		this.width = com.haxepunk.HXP.width;
		this.height = com.haxepunk.HXP.height;
		this._bitmap[0] = new browser.display.Bitmap(com.haxepunk.HXP.createBitmap(this.width,this.height,true),browser.display.PixelSnapping.NEVER);
		this._bitmap[1] = new browser.display.Bitmap(com.haxepunk.HXP.createBitmap(this.width,this.height,true),browser.display.PixelSnapping.NEVER);
		this._sprite.addChild(this._bitmap[0]).set_visible(true);
		this._sprite.addChild(this._bitmap[1]).set_visible(false);
		com.haxepunk.HXP.buffer = this._bitmap[0].bitmapData;
		this._current = 0;
	}
	,disposeBitmap: function(bd) {
		if(bd != null) {
			this._sprite.removeChild(bd);
			bd.bitmapData.dispose();
		}
	}
	,init: function() {
		this._sprite = new browser.display.Sprite();
		this._bitmap = new Array();
		this.setX(this.setY(this.setOriginX(this.setOriginY(0))));
		this._angle = this._current = 0;
		this.setScale(this.setScaleX(this.setScaleY(1)));
		this._color = 0;
		this._matrix = new browser.geom.Matrix();
		this.update();
	}
	,__class__: com.haxepunk.Screen
	,__properties__: {set_color:"setColor",get_color:"getColor",set_x:"setX",set_y:"setY",set_originX:"setOriginX",set_originY:"setOriginY",set_scaleX:"setScaleX",set_scaleY:"setScaleY",set_scale:"setScale",get_fullScaleX:"getFullScaleX",get_fullScaleY:"getFullScaleY",set_angle:"setAngle",get_angle:"getAngle",set_smoothing:"setSmoothing",get_smoothing:"getSmoothing",get_mouseX:"getMouseX",get_mouseY:"getMouseY"}
}
com.haxepunk.TweenType = $hxClasses["com.haxepunk.TweenType"] = { __ename__ : ["com","haxepunk","TweenType"], __constructs__ : ["Persist","Looping","OneShot"] }
com.haxepunk.TweenType.Persist = ["Persist",0];
com.haxepunk.TweenType.Persist.toString = $estr;
com.haxepunk.TweenType.Persist.__enum__ = com.haxepunk.TweenType;
com.haxepunk.TweenType.Looping = ["Looping",1];
com.haxepunk.TweenType.Looping.toString = $estr;
com.haxepunk.TweenType.Looping.__enum__ = com.haxepunk.TweenType;
com.haxepunk.TweenType.OneShot = ["OneShot",2];
com.haxepunk.TweenType.OneShot.toString = $estr;
com.haxepunk.TweenType.OneShot.__enum__ = com.haxepunk.TweenType;
com.haxepunk.Tween = function(duration,type,complete,ease) {
	this._target = duration;
	if(type == null) type = com.haxepunk.TweenType.Persist;
	this._type = type;
	this._ease = ease;
	this._t = 0;
	browser.events.EventDispatcher.call(this);
	if(complete != null) this.addEventListener(com.haxepunk.tweens.TweenEvent.FINISH,complete);
};
$hxClasses["com.haxepunk.Tween"] = com.haxepunk.Tween;
com.haxepunk.Tween.__name__ = ["com","haxepunk","Tween"];
com.haxepunk.Tween.__super__ = browser.events.EventDispatcher;
com.haxepunk.Tween.prototype = $extend(browser.events.EventDispatcher.prototype,{
	_next: null
	,_prev: null
	,_parent: null
	,_finish: null
	,_target: null
	,_time: null
	,_t: null
	,_ease: null
	,_type: null
	,getScale: function() {
		return this._t;
	}
	,scale: null
	,setPercent: function(value) {
		this._time = this._target * value;
		return this._time;
	}
	,getPercent: function() {
		return this._time / this._target;
	}
	,percent: null
	,cancel: function() {
		this.active = false;
		if(this._parent != null) this._parent.removeTween(this);
	}
	,finish: function() {
		switch( (this._type)[1] ) {
		case 0:
			this._time = this._target;
			this.active = false;
			break;
		case 1:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			this.start();
			break;
		case 2:
			this._time = this._target;
			this.active = false;
			this._parent.removeTween(this);
			break;
		}
		this._finish = false;
		this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.FINISH));
	}
	,start: function() {
		this._time = 0;
		if(this._target == 0) {
			this.active = false;
			this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.FINISH));
			return;
		}
		this.active = true;
		this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.START));
	}
	,update: function() {
		this._time += com.haxepunk.HXP.fixed?1:com.haxepunk.HXP.elapsed;
		this._t = this._time / this._target;
		if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
		if(this._time >= this._target) {
			this._t = 1;
			this._finish = true;
		}
		this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.UPDATE));
	}
	,active: null
	,__class__: com.haxepunk.Tween
	,__properties__: {set_percent:"setPercent",get_percent:"getPercent",get_scale:"getScale"}
});
com.haxepunk.debug = {}
com.haxepunk.debug.Console = function() {
	this.init();
	com.haxepunk.utils.Input.define("_ARROWS",[39,37,40,38]);
};
$hxClasses["com.haxepunk.debug.Console"] = com.haxepunk.debug.Console;
com.haxepunk.debug.Console.__name__ = ["com","haxepunk","debug","Console"];
com.haxepunk.debug.Console.prototype = {
	WATCH_LIST: null
	,SELECT_LIST: null
	,SCREEN_LIST: null
	,ENTITY_LIST: null
	,LOG: null
	,_logLines: null
	,_entRect: null
	,_entSelect: null
	,_entScreen: null
	,_bmpLogo: null
	,_butStep: null
	,_butPause: null
	,_butPlay: null
	,_butOutput: null
	,_butDebug: null
	,_butRead: null
	,_debReadText1: null
	,_debReadText0: null
	,_debRead: null
	,_entReadText: null
	,_entRead: null
	,_logScroll: null
	,_logBarGlobal: null
	,_logBar: null
	,_logHeight: null
	,_logReadText1: null
	,_logReadText0: null
	,_logRead: null
	,_memReadText: null
	,_fpsInfoText1: null
	,_fpsInfoText0: null
	,_fpsInfo: null
	,_fpsReadText: null
	,_fpsRead: null
	,_back: null
	,_format: null
	,_sprite: null
	,_panning: null
	,_dragging: null
	,_selecting: null
	,_scrolling: null
	,_debug: null
	,_paused: null
	,_enabled: null
	,getHeight: function() {
		return com.haxepunk.HXP.windowHeight;
	}
	,height: null
	,getWidth: function() {
		return com.haxepunk.HXP.windowWidth;
	}
	,width: null
	,format: function(size,color,align) {
		if(align == null) align = "left";
		if(color == null) color = 16777215;
		if(size == null) size = 16;
		this._format.size = size;
		this._format.color = color;
		switch(align) {
		case "left":
			this._format.align = browser.text.TextFormatAlign.LEFT;
			break;
		case "right":
			this._format.align = browser.text.TextFormatAlign.RIGHT;
			break;
		case "center":
			this._format.align = browser.text.TextFormatAlign.CENTER;
			break;
		case "justify":
			this._format.align = browser.text.TextFormatAlign.JUSTIFY;
			break;
		}
		return this._format;
	}
	,updateButtons: function() {
		this._butRead.set_x(this._fpsInfo.get_x() + this._fpsInfo.get_width() + ((this._entRead.get_x() - (this._fpsInfo.get_x() + this._fpsInfo.get_width())) / 2 | 0) - 30);
		this._butDebug.set_visible(!this._debug);
		this._butOutput.set_visible(this._debug);
		this._butPlay.set_visible(com.haxepunk.HXP.engine.paused);
		this._butPause.set_visible(!com.haxepunk.HXP.engine.paused);
		if(this._butDebug.bitmapData.rect.contains(this._butDebug.get_mouseX(),this._butDebug.get_mouseY())) {
			this._butDebug.alpha = this._butOutput.alpha = 1;
			if(com.haxepunk.utils.Input.mousePressed) this.setDebug(!this._debug);
		} else this._butDebug.alpha = this._butOutput.alpha = .5;
		if(this._butPlay.bitmapData.rect.contains(this._butPlay.get_mouseX(),this._butPlay.get_mouseY())) {
			this._butPlay.alpha = this._butPause.alpha = 1;
			if(com.haxepunk.utils.Input.mousePressed) {
				com.haxepunk.HXP.engine.paused = !com.haxepunk.HXP.engine.paused;
				this.renderEntities();
			}
		} else this._butPlay.alpha = this._butPause.alpha = .5;
		if(this._butStep.bitmapData.rect.contains(this._butStep.get_mouseX(),this._butStep.get_mouseY())) {
			this._butStep.alpha = 1;
			if(com.haxepunk.utils.Input.mousePressed) this.stepFrame();
		} else this._butStep.alpha = .5;
	}
	,updateEntityCount: function() {
		this._entReadText.set_text(Std.string(com.haxepunk.HXP._world._count) + " Entities");
	}
	,updateDebugRead: function() {
		var str;
		var big = this.getWidth() >= 480;
		var s = "Mouse: " + Std.string(com.haxepunk.HXP.screen.getMouseX() + com.haxepunk.HXP.camera.x | 0) + ", " + Std.string(com.haxepunk.HXP.screen.getMouseY() + com.haxepunk.HXP.camera.y | 0) + "\nCamera: " + Std.string(com.haxepunk.HXP.camera.x) + ", " + Std.string(com.haxepunk.HXP.camera.y);
		if(this.SELECT_LIST.length != 0) {
			if(this.SELECT_LIST.length > 1) s += "\n\nSelected: " + Std.string(this.SELECT_LIST.length); else {
				var e = this.SELECT_LIST.first();
				s += "\n\n- " + Type.getClassName(Type.getClass(e)) + " -\n";
				var $it0 = this.WATCH_LIST.iterator();
				while( $it0.hasNext() ) {
					var str1 = $it0.next();
					var field = Reflect.field(e,str1);
					if(field != null) s += "\n" + str1 + ": " + field.toString();
				}
			}
		}
		this._debReadText1.set_text(s);
		this._debReadText1.setTextFormat(this.format(big?16:8));
		this._debReadText1.set_width(Math.max(this._debReadText1.get_textWidth() + 4,this._debReadText0.get_width()));
		this._debReadText1.set_height(this._debReadText1.get_y() + this._debReadText1.get_textHeight() + 4);
		this._debRead.set_y(this.getHeight() - this._debReadText1.get_height() | 0);
		this._debRead.get_graphics().clear();
		this._debRead.get_graphics().beginFill(0,.75);
		this._debRead.get_graphics().drawRect(0,0,this._debReadText0.get_width(),20);
		this._debRead.get_graphics().drawRect(0,20,this._debReadText1.get_width() + 20,this.getHeight() - this._debRead.get_y() - 20);
	}
	,updateFPSRead: function() {
		this._fpsReadText.set_text("FPS: " + (com.haxepunk.HXP.frameRate | 0));
		this._fpsInfoText0.set_text("Update: " + Std.string(com.haxepunk.HXP._updateTime) + "ms\n" + "Render: " + Std.string(com.haxepunk.HXP._renderTime) + "ms");
		this._fpsInfoText1.set_text("Game: " + Std.string(com.haxepunk.HXP._gameTime) + "ms\n" + "Flash: " + Std.string(com.haxepunk.HXP._flashTime) + "ms");
		this._memReadText.set_text("Mem: " + com.haxepunk.HXP.round(browser.system.System.get_totalMemory() / 1024 / 1024,2) + "MB");
	}
	,updateLog: function() {
		this._logHeight = this.getHeight() - 60;
		this._logBar.height = this._logHeight - 8;
		if(this._paused) {
			this._logRead.set_y(40);
			this._logRead.get_graphics().clear();
			this._logRead.get_graphics().beginFill(0,.75);
			this._logRead.get_graphics().drawRect(0,0,this._logReadText0.get_width(),20);
			this._logRead.get_graphics().drawRect(0,20,this.getWidth(),this._logHeight);
			this._logRead.get_graphics().beginFill(2105376,1);
			this._logRead.get_graphics().drawRoundRect(this._logBar.x,this._logBar.y,this._logBar.width,this._logBar.height,8,8);
			if(this.LOG.length > this._logLines) {
				this._logRead.get_graphics().beginFill(16777215,1);
				var y = this._logBar.y + 2 + (this._logBar.height - 16) * this._logScroll | 0;
				this._logRead.get_graphics().drawRoundRect(this._logBar.x + 2,y,12,12,6,6);
			}
			if(this.LOG.length != 0) {
				var i = this.LOG.length > this._logLines?Math.round((this.LOG.length - this._logLines) * this._logScroll) | 0:0, n = i + Math.min(this._logLines,this.LOG.length) | 0, s = "";
				while(i < n) s += this.LOG[i++] + "\n";
				this._logReadText1.set_text(s);
			} else this._logReadText1.set_text("");
			this._logReadText1.set_height(this._logHeight);
			this._logReadText1.set_x(32);
			this._logReadText1.set_y(24);
			this._fpsReadText.selectable = true;
			this._fpsInfoText0.selectable = true;
			this._fpsInfoText1.selectable = true;
			this._memReadText.selectable = true;
			this._entReadText.selectable = true;
			this._debReadText1.selectable = true;
		} else {
			this._logRead.set_y(this.getHeight() - 40);
			this._logReadText1.set_height(20);
			this._logRead.get_graphics().clear();
			this._logRead.get_graphics().beginFill(0,.75);
			this._logRead.get_graphics().drawRect(0,0,this._logReadText0.get_width(),20);
			this._logRead.get_graphics().drawRect(0,20,this.getWidth(),20);
			this._logReadText1.set_text(this.LOG.length != 0?this.LOG[this.LOG.length - 1]:"");
			this._logReadText1.set_x(2);
			this._logReadText1.set_y(21);
			this._logReadText1.selectable = false;
			this._fpsReadText.selectable = false;
			this._fpsInfoText0.selectable = false;
			this._fpsInfoText1.selectable = false;
			this._memReadText.selectable = false;
			this._entReadText.selectable = false;
			this._debReadText0.selectable = false;
			this._debReadText1.selectable = false;
		}
	}
	,renderEntities: function() {
		var e;
		this._entScreen.set_visible(this._debug);
		if(this._debug) {
			var g = this._entScreen.get_graphics(), sx = com.haxepunk.HXP.screen.getFullScaleX(), sy = com.haxepunk.HXP.screen.getFullScaleY();
			g.clear();
			var $it0 = this.SCREEN_LIST.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				if(Lambda.indexOf(this.SELECT_LIST,e1) < 0) {
					if(e1.width != 0 && e1.height != 0) {
						g.lineStyle(1,16711680);
						g.drawRect((e1.x - e1.originX - com.haxepunk.HXP.camera.x) * sx,(e1.y - e1.originY - com.haxepunk.HXP.camera.y) * sy,e1.width * sx,e1.height * sy);
						if(e1._mask != null) {
							g.lineStyle(1,255);
							e1._mask.debugDraw(g,sx,sy);
						}
					}
					g.lineStyle(1,65280);
					g.drawRect((e1.x - com.haxepunk.HXP.camera.x) * sx - 3,(e1.y - com.haxepunk.HXP.camera.y) * sy - 3,6,6);
				} else {
					if(e1.width != 0 && e1.height != 0) {
						g.lineStyle(1,16777215);
						g.drawRect((e1.x - e1.originX - com.haxepunk.HXP.camera.x) * sx,(e1.y - e1.originY - com.haxepunk.HXP.camera.y) * sy,e1.width * sx,e1.height * sy);
						if(e1._mask != null) {
							g.lineStyle(1,255);
							e1._mask.debugDraw(g,sx,sy);
						}
					}
					g.lineStyle(1,16777215);
					g.drawRect((e1.x - com.haxepunk.HXP.camera.x) * sx - 3,(e1.y - com.haxepunk.HXP.camera.y) * sy - 3,6,6);
				}
			}
		}
	}
	,updateEntityLists: function(fetchList) {
		if(fetchList == null) fetchList = true;
		if(fetchList) {
			this.ENTITY_LIST.length = 0;
			com.haxepunk.HXP._world.getAll(this.ENTITY_LIST);
		}
		this.SCREEN_LIST.clear();
		var _g = 0, _g1 = this.ENTITY_LIST;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(e.collideRect(e.x,e.y,com.haxepunk.HXP.camera.x,com.haxepunk.HXP.camera.y,com.haxepunk.HXP.width,com.haxepunk.HXP.height)) this.SCREEN_LIST.push(e);
		}
	}
	,updateKeyPanning: function() {
		com.haxepunk.HXP.point.x = (com.haxepunk.utils.Input.check(39)?1:0) - (com.haxepunk.utils.Input.check(37)?1:0);
		com.haxepunk.HXP.point.y = (com.haxepunk.utils.Input.check(40)?1:0) - (com.haxepunk.utils.Input.check(38)?1:0);
		if(com.haxepunk.HXP.point.x != 0 || com.haxepunk.HXP.point.y != 0) this.panCamera(com.haxepunk.HXP.point.x | 0,com.haxepunk.HXP.point.y | 0);
	}
	,updateKeyMoving: function() {
		com.haxepunk.HXP.point.x = (com.haxepunk.utils.Input.pressed(39)?1:0) - (com.haxepunk.utils.Input.pressed(37)?1:0);
		com.haxepunk.HXP.point.y = (com.haxepunk.utils.Input.pressed(40)?1:0) - (com.haxepunk.utils.Input.pressed(38)?1:0);
		if(com.haxepunk.HXP.point.x != 0 || com.haxepunk.HXP.point.y != 0) this.moveSelected(com.haxepunk.HXP.point.x | 0,com.haxepunk.HXP.point.y | 0);
	}
	,updateScrolling: function() {
		this._scrolling = com.haxepunk.utils.Input.mouseDown;
		this._logScroll = com.haxepunk.HXP.scaleClamp(com.haxepunk.utils.Input.getMouseFlashY(),this._logBarGlobal.y,this._logBarGlobal.get_bottom(),0,1);
		this.updateLog();
	}
	,startScrolling: function() {
		if(this.LOG.length > this._logLines) this._scrolling = this._logBarGlobal.contains(com.haxepunk.utils.Input.getMouseFlashX(),com.haxepunk.utils.Input.getMouseFlashY());
	}
	,selectAll: function() {
		var e;
		this.SELECT_LIST.clear();
		var $it0 = this.SCREEN_LIST.iterator();
		while( $it0.hasNext() ) {
			var e1 = $it0.next();
			this.SELECT_LIST.push(e1);
		}
		this.renderEntities();
	}
	,selectEntities: function(rect) {
		if(rect.width < 0) rect.x -= rect.width = -rect.width; else if(rect.width == 0) rect.width = 1;
		if(rect.height < 0) rect.y -= rect.height = -rect.height; else if(rect.height == 0) rect.height = 1;
		com.haxepunk.HXP.rect.width = com.haxepunk.HXP.rect.height = 6;
		var sx = com.haxepunk.HXP.screen.getFullScaleX(), sy = com.haxepunk.HXP.screen.getFullScaleY(), e;
		if(com.haxepunk.utils.Input.check(17)) {
			var $it0 = this.SCREEN_LIST.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				if(Lambda.indexOf(this.SELECT_LIST,e1) < 0) {
					com.haxepunk.HXP.rect.x = (e1.x - com.haxepunk.HXP.camera.x) * sx - 3;
					com.haxepunk.HXP.rect.y = (e1.y - com.haxepunk.HXP.camera.y) * sy - 3;
					if(rect.intersects(com.haxepunk.HXP.rect)) this.SELECT_LIST.push(e1);
				}
			}
		} else {
			this.SELECT_LIST.clear();
			var $it1 = this.SCREEN_LIST.iterator();
			while( $it1.hasNext() ) {
				var e1 = $it1.next();
				com.haxepunk.HXP.rect.x = (e1.x - com.haxepunk.HXP.camera.x) * sx - 3;
				com.haxepunk.HXP.rect.y = (e1.y - com.haxepunk.HXP.camera.y) * sy - 3;
				if(rect.intersects(com.haxepunk.HXP.rect)) this.SELECT_LIST.push(e1);
			}
		}
	}
	,updateSelection: function() {
		this._entRect.width = com.haxepunk.utils.Input.getMouseFlashX() - this._entRect.x;
		this._entRect.height = com.haxepunk.utils.Input.getMouseFlashY() - this._entRect.y;
		if(com.haxepunk.utils.Input.mouseReleased) {
			this.selectEntities(this._entRect);
			this.renderEntities();
			this._selecting = false;
			this._entSelect.get_graphics().clear();
		} else {
			this._entSelect.get_graphics().clear();
			this._entSelect.get_graphics().lineStyle(1,16777215);
			this._entSelect.get_graphics().drawRect(this._entRect.x,this._entRect.y,this._entRect.width,this._entRect.height);
		}
	}
	,startSelection: function() {
		this._selecting = true;
		this._entRect.x = com.haxepunk.utils.Input.getMouseFlashX();
		this._entRect.y = com.haxepunk.utils.Input.getMouseFlashY();
		this._entRect.width = 0;
		this._entRect.height = 0;
	}
	,setCamera: function(x,y) {
		com.haxepunk.HXP.camera.x = x;
		com.haxepunk.HXP.camera.y = y;
		com.haxepunk.HXP.engine.render();
		this.updateEntityLists(true);
		this.renderEntities();
	}
	,panCamera: function(xDelta,yDelta) {
		com.haxepunk.HXP.camera.x += xDelta;
		com.haxepunk.HXP.camera.y += yDelta;
		com.haxepunk.HXP.engine.render();
		this.updateEntityLists(true);
		this.renderEntities();
	}
	,updatePanning: function() {
		if(com.haxepunk.utils.Input.mouseReleased) this._panning = false;
		this.panCamera(this._entRect.x - com.haxepunk.utils.Input.getMouseX() | 0,this._entRect.y - com.haxepunk.utils.Input.getMouseY() | 0);
		this._entRect.x = com.haxepunk.utils.Input.getMouseX();
		this._entRect.y = com.haxepunk.utils.Input.getMouseY();
	}
	,startPanning: function() {
		this._panning = true;
		this._entRect.x = com.haxepunk.utils.Input.getMouseX();
		this._entRect.y = com.haxepunk.utils.Input.getMouseY();
	}
	,moveSelected: function(xDelta,yDelta) {
		var $it0 = this.SELECT_LIST.iterator();
		while( $it0.hasNext() ) {
			var e = $it0.next();
			e.x += xDelta;
			e.y += yDelta;
		}
		com.haxepunk.HXP.engine.render();
		this.renderEntities();
		this.updateEntityLists(true);
	}
	,updateDragging: function() {
		this.moveSelected(com.haxepunk.utils.Input.getMouseX() - this._entRect.x | 0,com.haxepunk.utils.Input.getMouseY() - this._entRect.y | 0);
		this._entRect.x = com.haxepunk.utils.Input.getMouseX();
		this._entRect.y = com.haxepunk.utils.Input.getMouseY();
		if(com.haxepunk.utils.Input.mouseReleased) this._dragging = false;
	}
	,startDragging: function() {
		this._dragging = true;
		this._entRect.x = com.haxepunk.utils.Input.getMouseX();
		this._entRect.y = com.haxepunk.utils.Input.getMouseY();
	}
	,stepFrame: function() {
		com.haxepunk.HXP.engine.update();
		com.haxepunk.HXP.engine.render();
		this.updateEntityCount();
		this.updateEntityLists();
		this.renderEntities();
	}
	,setDebug: function(value) {
		if(!this._enabled) return false;
		this._debug = value;
		this._debRead.set_visible(value);
		this._logRead.set_visible(!value);
		if(value) this.updateEntityLists(); else this.updateLog();
		this.renderEntities();
		return this._debug;
	}
	,getDebug: function() {
		return this._debug;
	}
	,debug: null
	,setPaused: function(value) {
		if(!this._enabled) return false;
		this._paused = value;
		com.haxepunk.HXP.engine.paused = value;
		this._back.set_visible(value);
		this._entScreen.set_visible(value);
		this._butRead.set_visible(value);
		if(value) {
			if(this._debug) this.setDebug(true); else this.updateLog();
		} else {
			this._debRead.set_visible(false);
			this._logRead.set_visible(true);
			this.updateLog();
			this.ENTITY_LIST.length = 0;
			this.SCREEN_LIST.clear();
			this.SELECT_LIST.clear();
		}
		return this._paused;
	}
	,getPaused: function() {
		return this._paused;
	}
	,paused: null
	,update: function() {
		if(!this._enabled) return;
		this._entRead.set_x(this.getWidth() - this._entReadText.get_width());
		if(this._paused) {
			this.updateButtons();
			if(this._debug) {
				if(com.haxepunk.HXP.engine.paused) {
					if(com.haxepunk.utils.Input.mousePressed) {
						if(com.haxepunk.utils.Input.getMouseFlashY() > 20 && (com.haxepunk.utils.Input.getMouseFlashX() > this._debReadText1.get_width() || com.haxepunk.utils.Input.getMouseFlashY() < this._debRead.get_y())) {
							if(com.haxepunk.utils.Input.check(16)) {
								if(this.SELECT_LIST.length != 0) this.startDragging(); else this.startPanning();
							} else this.startSelection();
						}
					} else {
						if(this._selecting) this.updateSelection();
						if(this._dragging) this.updateDragging();
						if(this._panning) this.updatePanning();
					}
					if(com.haxepunk.utils.Input.pressed(65)) this.selectAll();
					if(com.haxepunk.utils.Input.check(16)) {
						if(this.SELECT_LIST.length != 0) {
							if(com.haxepunk.utils.Input.pressed("_ARROWS")) this.updateKeyMoving();
						} else if(com.haxepunk.utils.Input.check("_ARROWS")) this.updateKeyPanning();
					}
				} else {
					this.updateEntityLists(com.haxepunk.HXP._world._count != this.ENTITY_LIST.length);
					this.renderEntities();
					this.updateFPSRead();
					this.updateEntityCount();
				}
				this.updateDebugRead();
			} else if(this._scrolling) this.updateScrolling(); else if(com.haxepunk.utils.Input.mousePressed) this.startScrolling();
		} else {
			this.updateFPSRead();
			this.updateEntityCount();
		}
		if(com.haxepunk.utils.Input.pressed(this.toggleKey)) this.setPaused(!this._paused);
	}
	,setVisible: function(value) {
		this._sprite.set_visible(value);
		if(this._enabled && value) this.updateLog();
		return this._sprite.get_visible();
	}
	,getVisible: function() {
		return this._sprite.get_visible();
	}
	,visible: null
	,onResize: function(e) {
		if(this._back.bitmapData != null) this._back.bitmapData.dispose();
		this._back.set_bitmapData(com.haxepunk.HXP.createBitmap(this.getWidth(),this.getHeight(),true,-1));
		com.haxepunk.HXP.matrix.identity();
		com.haxepunk.HXP.matrix.set_tx(Math.max((this._back.bitmapData.get_width() - this._bmpLogo.get_width()) / 2,0));
		com.haxepunk.HXP.matrix.set_ty(Math.max((this._back.bitmapData.get_height() - this._bmpLogo.get_height()) / 2,0));
		com.haxepunk.HXP.matrix.scale(Math.min(this.getWidth() / this._back.bitmapData.get_width(),1),Math.min(this.getHeight() / this._back.bitmapData.get_height(),1));
		this._back.bitmapData.draw(this._bmpLogo,com.haxepunk.HXP.matrix,null,browser.display.BlendMode.MULTIPLY);
		this._back.bitmapData.draw(this._back.bitmapData,null,null,browser.display.BlendMode.INVERT);
		this._back.bitmapData.colorTransform(this._back.bitmapData.rect,new browser.geom.ColorTransform(1,1,1,0.5));
		this.updateLog();
	}
	,enable: function() {
		if(this._enabled) return;
		try {
			this._bmpLogo = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_logo.png"));
			this._butDebug = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_debug.png"));
			this._butOutput = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_output.png"));
			this._butPlay = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_play.png"));
			this._butPause = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_pause.png"));
			this._butStep = new browser.display.Bitmap(nme.installer.Assets.getBitmapData("gfx/debug/console_step.png"));
		} catch( e ) {
			return;
		}
		this._enabled = true;
		com.haxepunk.HXP.engine.addChild(this._sprite);
		var big = this.getWidth() >= 480;
		this._sprite.addChild(this._back);
		this._sprite.addChild(this._entScreen);
		this._entScreen.addChild(this._entSelect);
		this._sprite.addChild(this._entRead);
		this._entRead.addChild(this._entReadText);
		this._entReadText.set_defaultTextFormat(this.format(16,16777215,"right"));
		this._entReadText.set_width(100);
		this._entReadText.set_height(20);
		this._entRead.get_graphics().clear();
		this._entRead.get_graphics().beginFill(0,.5);
		this._entRead.get_graphics().drawRoundRect(0,-20,this._entReadText.get_width() + 40,40,20,20);
		this._sprite.addChild(this._fpsRead);
		this._fpsRead.addChild(this._fpsReadText);
		this._fpsReadText.set_defaultTextFormat(this.format(16));
		this._fpsReadText.set_width(70);
		this._fpsReadText.set_height(20);
		this._fpsReadText.set_x(2);
		this._fpsReadText.set_y(1);
		this._fpsRead.get_graphics().clear();
		this._fpsRead.get_graphics().beginFill(0,.75);
		this._fpsRead.get_graphics().drawRoundRect(-20,-20,big?220:120,40,20,20);
		if(big) this._sprite.addChild(this._fpsInfo);
		this._fpsInfo.addChild(this._fpsInfoText0);
		this._fpsInfo.addChild(this._fpsInfoText1);
		this._fpsInfoText0.set_defaultTextFormat(this.format(8,11184810));
		this._fpsInfoText1.set_defaultTextFormat(this.format(8,11184810));
		this._fpsInfoText0.set_width(this._fpsInfoText1.set_width(60));
		this._fpsInfoText0.set_height(this._fpsInfoText1.set_height(20));
		this._fpsInfo.set_x(75);
		this._fpsInfoText1.set_x(60);
		this._fpsRead.addChild(this._memReadText);
		this._memReadText.set_defaultTextFormat(this.format(16));
		this._memReadText.embedFonts = true;
		this._memReadText.set_width(110);
		this._memReadText.set_height(20);
		this._memReadText.set_x(this._fpsInfo.get_x() + this._fpsInfo.get_width() + 5);
		this._memReadText.set_y(1);
		this._sprite.addChild(this._logRead);
		this._logRead.addChild(this._logReadText0);
		this._logRead.addChild(this._logReadText1);
		this._logReadText0.set_defaultTextFormat(this.format(16,16777215));
		this._logReadText1.set_defaultTextFormat(this.format(big?16:8,16777215));
		this._logReadText0.selectable = false;
		this._logReadText0.set_width(80);
		this._logReadText0.set_height(20);
		this._logReadText1.set_width(this.getWidth());
		this._logReadText0.set_x(2);
		this._logReadText0.set_y(3);
		this._logReadText0.set_text("OUTPUT:");
		this._logHeight = this.getHeight() - 60;
		this._logBar = new browser.geom.Rectangle(8,24,16,this._logHeight - 8);
		this._logBarGlobal = this._logBar.clone();
		this._logBarGlobal.y += 40;
		this._logLines = this._logHeight / (big?16.5:8.5) | 0;
		this._sprite.addChild(this._debRead);
		this._debRead.addChild(this._debReadText0);
		this._debRead.addChild(this._debReadText1);
		this._debReadText0.set_defaultTextFormat(this.format(16,16777215));
		this._debReadText1.set_defaultTextFormat(this.format(8,16777215));
		this._debReadText0.selectable = false;
		this._debReadText0.set_width(80);
		this._debReadText0.set_height(20);
		this._debReadText1.set_width(160);
		this._debReadText1.set_height(this.getHeight() / 4 | 0);
		this._debReadText0.set_x(2);
		this._debReadText0.set_y(3);
		this._debReadText1.set_x(2);
		this._debReadText1.set_y(24);
		this._debReadText0.set_text("DEBUG:");
		this._debRead.set_y(this.getHeight() - (this._debReadText1.get_y() + this._debReadText1.get_height()));
		this._sprite.addChild(this._butRead);
		this._butRead.addChild(this._butDebug);
		this._butRead.addChild(this._butOutput);
		this._butRead.addChild(this._butPlay).set_x(20);
		this._butRead.addChild(this._butPause).set_x(20);
		this._butRead.addChild(this._butStep).set_x(40);
		this.updateButtons();
		this._butRead.get_graphics().clear();
		this._butRead.get_graphics().beginFill(0,.75);
		this._butRead.get_graphics().drawRoundRect(-20,-20,100,40,20,20);
		this.setDebug(true);
		com.haxepunk.HXP.stage.addEventListener(browser.events.Event.RESIZE,$bind(this,this.onResize));
		this.setPaused(false);
		haxe.Log.trace = $bind(this,this.traceLog);
		this.LOG.push("-- HaxePunk v" + "2.0.3" + " --");
		if(this._enabled && this._sprite.get_visible()) this.updateLog();
	}
	,watch: function(properties) {
		var i;
		if(properties.length > 1) {
			var _g = 0;
			while(_g < properties.length) {
				var i1 = properties[_g];
				++_g;
				this.WATCH_LIST.push(i1);
			}
		} else this.WATCH_LIST.push(properties[0]);
	}
	,log: function(data) {
		var s;
		if(data.length > 1) {
			s = "";
			var i = 0;
			while(i < data.length) {
				if(i > 0) s += " ";
				s += Std.string(data[i++]);
			}
		} else s = data[0].toString();
		if(s.indexOf("\n") >= 0) {
			var a = s.split("\n");
			var _g = 0;
			while(_g < a.length) {
				var s1 = a[_g];
				++_g;
				this.LOG.push(s1);
			}
		} else this.LOG.push(s);
		if(this._enabled && this._sprite.get_visible()) this.updateLog();
	}
	,traceLog: function(v,infos) {
		var log = infos.className + "(" + infos.lineNumber + "): " + Std.string(v);
		this.LOG.push(log);
		if(this._enabled && this._sprite.get_visible()) this.updateLog();
	}
	,init: function() {
		this.toggleKey = 192;
		this._sprite = new browser.display.Sprite();
		var font = nme.installer.Assets.getFont("font/04B_03__.ttf");
		if(font == null) font = nme.installer.Assets.getFont(com.haxepunk.HXP.defaultFont);
		this._format = new browser.text.TextFormat(font.fontName,8,16777215);
		this._back = new browser.display.Bitmap();
		this._fpsRead = new browser.display.Sprite();
		this._fpsReadText = new browser.text.TextField();
		this._fpsInfo = new browser.display.Sprite();
		this._fpsInfoText0 = new browser.text.TextField();
		this._fpsInfoText1 = new browser.text.TextField();
		this._memReadText = new browser.text.TextField();
		this._logRead = new browser.display.Sprite();
		this._logReadText0 = new browser.text.TextField();
		this._logReadText1 = new browser.text.TextField();
		this._logScroll = 0;
		this._logLines = 33;
		this._entRead = new browser.display.Sprite();
		this._entReadText = new browser.text.TextField();
		this._debRead = new browser.display.Sprite();
		this._debReadText0 = new browser.text.TextField();
		this._debReadText1 = new browser.text.TextField();
		this._butRead = new browser.display.Sprite();
		this._entScreen = new browser.display.Sprite();
		this._entSelect = new browser.display.Sprite();
		this._entRect = new browser.geom.Rectangle();
		this.LOG = new Array();
		this.ENTITY_LIST = new Array();
		this.SCREEN_LIST = new List();
		this.SELECT_LIST = new List();
		this.WATCH_LIST = new List();
		this.WATCH_LIST.push("x");
		this.WATCH_LIST.push("y");
	}
	,toggleKey: null
	,__class__: com.haxepunk.debug.Console
	,__properties__: {set_visible:"setVisible",get_visible:"getVisible",set_paused:"setPaused",get_paused:"getPaused",set_debug:"setDebug",get_debug:"getDebug",get_width:"getWidth",get_height:"getHeight"}
}
com.haxepunk.graphics = {}
com.haxepunk.graphics.Canvas = function(width,height) {
	this._maxHeight = 4000;
	this._maxWidth = 4000;
	com.haxepunk.Graphic.call(this);
	this._color = 16777215;
	this._alpha = 1;
	this._graphics = com.haxepunk.HXP.sprite.get_graphics();
	this._matrix = new browser.geom.Matrix();
	this._rect = new browser.geom.Rectangle();
	this._colorTransform = new browser.geom.ColorTransform();
	this._buffers = new Array();
	this._width = width;
	this._height = height;
	this._refWidth = Math.ceil(width / this._maxWidth);
	this._refHeight = Math.ceil(height / this._maxHeight);
	this._ref = com.haxepunk.HXP.createBitmap(this._refWidth,this._refHeight);
	var x = 0, y = 0, w, h, i = 0, ww = this._width % this._maxWidth, hh = this._height % this._maxHeight;
	if(ww == 0) ww = this._maxWidth;
	if(hh == 0) hh = this._maxHeight;
	while(y < this._refHeight) {
		h = y < this._refHeight - 1?this._maxHeight:hh;
		while(x < this._refWidth) {
			w = x < this._refWidth - 1?this._maxWidth:ww;
			this._ref.setPixel(x,y,i);
			this._buffers[i] = com.haxepunk.HXP.createBitmap(w,h,true);
			i++;
			x++;
		}
		x = 0;
		y++;
	}
};
$hxClasses["com.haxepunk.graphics.Canvas"] = com.haxepunk.graphics.Canvas;
com.haxepunk.graphics.Canvas.__name__ = ["com","haxepunk","graphics","Canvas"];
com.haxepunk.graphics.Canvas.__super__ = com.haxepunk.Graphic;
com.haxepunk.graphics.Canvas.prototype = $extend(com.haxepunk.Graphic.prototype,{
	_graphics: null
	,_rect: null
	,_refHeight: null
	,_refWidth: null
	,_ref: null
	,_matrix: null
	,_colorTransform: null
	,_tint: null
	,_alpha: null
	,_color: null
	,_maxHeight: null
	,_maxWidth: null
	,_height: null
	,_width: null
	,_buffers: null
	,getHeight: function() {
		return this._height;
	}
	,height: null
	,getWidth: function() {
		return this._width;
	}
	,width: null
	,shift: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this.drawGraphic(x,y,this);
	}
	,setAlpha: function(value) {
		if(value < 0) value = 0;
		if(value > 1) value = 1;
		if(this._alpha == value) return this._alpha;
		this._alpha = value;
		if(this._alpha == 1 && this._color == 16777215) {
			this._tint = null;
			return this._alpha;
		}
		this._tint = this._colorTransform;
		this._tint.redMultiplier = (this._color >> 16 & 255) / 255;
		this._tint.greenMultiplier = (this._color >> 8 & 255) / 255;
		this._tint.blueMultiplier = (this._color & 255) / 255;
		this._tint.alphaMultiplier = this._alpha;
		return this._alpha;
	}
	,getAlpha: function() {
		return this._alpha;
	}
	,alpha: null
	,setColor: function(value) {
		value %= 16777215;
		if(this._color == value) return this._color;
		this._color = value;
		if(this._alpha == 1 && this._color == 16777215) {
			this._tint = null;
			return this._color;
		}
		this._tint = this._colorTransform;
		this._tint.redMultiplier = (this._color >> 16 & 255) / 255;
		this._tint.greenMultiplier = (this._color >> 8 & 255) / 255;
		this._tint.blueMultiplier = (this._color & 255) / 255;
		this._tint.alphaMultiplier = this._alpha;
		return this._color;
	}
	,getColor: function() {
		return this._color;
	}
	,color: null
	,drawGraphic: function(x,y,source) {
		var xx = 0, yy = 0;
		var _g = 0, _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer = _g1[_g];
			++_g;
			this._point.x = x - xx;
			this._point.y = y - yy;
			source.render(buffer,this._point,com.haxepunk.HXP.zero);
			xx += this._maxWidth;
			if(xx >= this._width) {
				xx = 0;
				yy += this._maxHeight;
			}
		}
	}
	,fillTexture: function(rect,texture) {
		var xx = 0, yy = 0;
		var _g = 0, _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer = _g1[_g];
			++_g;
			this._graphics.clear();
			this._graphics.beginBitmapFill(texture);
			this._graphics.drawRect(rect.x - xx,rect.y - yy,rect.width,rect.height);
			buffer.draw(com.haxepunk.HXP.sprite);
			xx += this._maxWidth;
			if(xx >= this._width) {
				xx = 0;
				yy += this._maxHeight;
			}
		}
		this._graphics.endFill();
	}
	,drawRect: function(rect,color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		var xx = 0, yy = 0, buffer;
		if(alpha >= 1) {
			this._rect.width = rect.width;
			this._rect.height = rect.height;
			var _g = 0, _g1 = this._buffers;
			while(_g < _g1.length) {
				var buffer1 = _g1[_g];
				++_g;
				this._rect.x = rect.x - xx;
				this._rect.y = rect.y - yy;
				buffer1.fillRect(this._rect,-16777216 | color);
				xx += this._maxWidth;
				if(xx >= this._width) {
					xx = 0;
					yy += this._maxHeight;
				}
			}
			return;
		}
		var _g = 0, _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer1 = _g1[_g];
			++_g;
			this._graphics.clear();
			this._graphics.beginFill(color,alpha);
			this._graphics.drawRect(rect.x - xx,rect.y - yy,rect.width,rect.height);
			buffer1.draw(com.haxepunk.HXP.sprite);
			xx += this._maxWidth;
			if(xx >= this._width) {
				xx = 0;
				yy += this._maxHeight;
			}
		}
		this._graphics.endFill();
	}
	,fill: function(rect,color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		var xx = 0, yy = 0, buffer;
		this._rect.width = rect.width;
		this._rect.height = rect.height;
		if(alpha >= 1) color |= -16777216; else if(alpha <= 0) color = 0; else color = (alpha * 255 | 0) << 24 | 16777215 & color;
		var _g = 0, _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer1 = _g1[_g];
			++_g;
			this._rect.x = rect.x - xx;
			this._rect.y = rect.y - yy;
			buffer1.fillRect(this._rect,color);
			xx += this._maxWidth;
			if(xx >= this._width) {
				xx = 0;
				yy += this._maxHeight;
			}
		}
	}
	,draw: function(x,y,source,rect) {
		var xx = 0, yy = 0;
		var _g = 0, _g1 = this._buffers;
		while(_g < _g1.length) {
			var buffer = _g1[_g];
			++_g;
			this._point.x = x - xx;
			this._point.y = y - yy;
			buffer.copyPixels(source,rect != null?rect:source.rect,this._point,null,null,true);
			xx += this._maxWidth;
			if(xx >= this._width) {
				xx = 0;
				yy += this._maxHeight;
			}
		}
	}
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
		this._point.x = point.x + this.x - camera.x * this.scrollX;
		this._point.y = point.y + this.y - camera.y * this.scrollY;
		var xx = 0, yy = 0, buffer, px = this._point.x;
		target.lock();
		while(yy < this._refHeight) {
			while(xx < this._refWidth) {
				buffer = this._buffers[this._ref.getPixel(xx,yy)];
				if(this._tint != null || this.blend != null) {
					this._matrix.set_tx(this._point.x);
					this._matrix.set_ty(this._point.y);
					target.draw(buffer,this._matrix,this._tint,this.blend);
				} else target.copyPixels(buffer,buffer.rect,this._point,null,null,true);
				this._point.x += this._maxWidth;
				xx++;
			}
			this._point.x = px;
			this._point.y += this._maxHeight;
			xx = 0;
			yy++;
		}
		target.unlock();
	}
	,blend: null
	,__class__: com.haxepunk.graphics.Canvas
	,__properties__: {set_color:"setColor",get_color:"getColor",set_alpha:"setAlpha",get_alpha:"getAlpha",get_width:"getWidth",get_height:"getHeight"}
});
com.haxepunk.graphics.Backdrop = function(source,repeatX,repeatY) {
	if(repeatY == null) repeatY = true;
	if(repeatX == null) repeatX = true;
	if(js.Boot.__instanceof(source,browser.display.BitmapData)) {
		this._blit = true;
		this._source = source;
		this._textWidth = this._source.get_width();
		this._textHeight = this._source.get_height();
	} else if(js.Boot.__instanceof(source,com.haxepunk.graphics.atlas.AtlasRegion)) {
		this._blit = false;
		this._region = source;
		this._textWidth = source.rect.width | 0;
		this._textHeight = source.rect.height | 0;
	} else if(js.Boot.__instanceof(source,Dynamic)) {
		this._blit = true;
		this._source = com.haxepunk.HXP.getBitmap(source);
		this._textWidth = this._source.get_width();
		this._textHeight = this._source.get_height();
	}
	if(this._source == null && this._region == null) {
		this._blit = true;
		this._source = com.haxepunk.HXP.createBitmap(com.haxepunk.HXP.width,com.haxepunk.HXP.height,true);
		this._textWidth = this._source.get_width();
		this._textHeight = this._source.get_height();
	}
	this._repeatX = repeatX;
	this._repeatY = repeatY;
	com.haxepunk.graphics.Canvas.call(this,com.haxepunk.HXP.width * (repeatX?1:0) + this._textWidth,com.haxepunk.HXP.height * (repeatY?1:0) + this._textHeight);
	if(this._blit) {
		com.haxepunk.HXP.rect.x = com.haxepunk.HXP.rect.y = 0;
		com.haxepunk.HXP.rect.width = this._width;
		com.haxepunk.HXP.rect.height = this._height;
		this.fillTexture(com.haxepunk.HXP.rect,this._source);
	}
};
$hxClasses["com.haxepunk.graphics.Backdrop"] = com.haxepunk.graphics.Backdrop;
com.haxepunk.graphics.Backdrop.__name__ = ["com","haxepunk","graphics","Backdrop"];
com.haxepunk.graphics.Backdrop.__super__ = com.haxepunk.graphics.Canvas;
com.haxepunk.graphics.Backdrop.prototype = $extend(com.haxepunk.graphics.Canvas.prototype,{
	_y: null
	,_x: null
	,_repeatY: null
	,_repeatX: null
	,_textHeight: null
	,_textWidth: null
	,_region: null
	,_source: null
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
		this._point.x = point.x + this.x - camera.x * this.scrollX;
		this._point.y = point.y + this.y - camera.y * this.scrollY;
		if(this._repeatX) {
			this._point.x %= this._textWidth;
			if(this._point.x > 0) this._point.x -= this._textWidth;
		}
		if(this._repeatY) {
			this._point.y %= this._textHeight;
			if(this._point.y > 0) this._point.y -= this._textHeight;
		}
		if(this._blit) {
			this._x = this.x;
			this._y = this.y;
			this.x = this.y = 0;
			com.haxepunk.graphics.Canvas.prototype.render.call(this,target,this._point,com.haxepunk.HXP.zero);
			this.x = this._x;
			this.y = this._y;
		} else {
			var sx = com.haxepunk.HXP.screen.getFullScaleX(), sy = com.haxepunk.HXP.screen.getFullScaleY(), r = (this._color >> 16 & 255) / 255, g = (this._color >> 8 & 255) / 255, b = (this._color & 255) / 255, px = this._point.x * sx, py = this._point.y * sy;
			var y = 0;
			while(y <= this._height * sy) {
				var x = 0;
				while(x <= this._width * sx) {
					this._region.draw(px + x,py + y,layer,sx,sy,0,r,g,b,this._alpha);
					x += this._textWidth * sx;
				}
				y += this._textHeight * sy;
			}
		}
	}
	,setBitmapSource: function(bitmap) {
		this._blit = true;
		this._source = bitmap;
		this._textWidth = this._source.get_width();
		this._textHeight = this._source.get_height();
	}
	,setAtlasRegion: function(region) {
		this._blit = false;
		this._region = region;
		this._textWidth = region.rect.width | 0;
		this._textHeight = region.rect.height | 0;
	}
	,__class__: com.haxepunk.graphics.Backdrop
});
com.haxepunk.graphics.Graphiclist = function(graphic) {
	com.haxepunk.Graphic.call(this);
	this._graphics = new Array();
	this._temp = new Array();
	this._camera = new browser.geom.Point();
	this._count = 0;
	if(graphic != null) {
		var _g = 0;
		while(_g < graphic.length) {
			var g = graphic[_g];
			++_g;
			if(js.Boot.__cast(g , com.haxepunk.Graphic) != null) this.add(g);
		}
	}
};
$hxClasses["com.haxepunk.graphics.Graphiclist"] = com.haxepunk.graphics.Graphiclist;
com.haxepunk.graphics.Graphiclist.__name__ = ["com","haxepunk","graphics","Graphiclist"];
com.haxepunk.graphics.Graphiclist.__super__ = com.haxepunk.Graphic;
com.haxepunk.graphics.Graphiclist.prototype = $extend(com.haxepunk.Graphic.prototype,{
	_camera: null
	,_count: null
	,_temp: null
	,_graphics: null
	,updateCheck: function() {
		this.active = false;
		var _g = 0, _g1 = this._graphics;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.active) {
				this.active = true;
				return;
			}
		}
	}
	,getCount: function() {
		return this._count;
	}
	,count: null
	,getChildren: function() {
		return this._graphics;
	}
	,children: null
	,removeAll: function() {
		this._graphics.length = 0;
		this._temp.length = 0;
		this._count = 0;
		this.active = false;
	}
	,removeAt: function(index) {
		if(index == null) index = 0;
		if(this._graphics.length == 0) return;
		index %= this._graphics.length;
		this.remove(this._graphics[index % this._graphics.length]);
		this.updateCheck();
	}
	,remove: function(graphic) {
		if(Lambda.indexOf(this._graphics,graphic) < 0) return graphic;
		this._temp.length = 0;
		var _g = 0, _g1 = this._graphics;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g == graphic) this._count--; else this._temp[this._temp.length] = g;
		}
		var temp = this._graphics;
		this._graphics = this._temp;
		this._temp = temp;
		this.updateCheck();
		return graphic;
	}
	,add: function(graphic) {
		this._graphics[this._count++] = graphic;
		if(!this.active) this.active = graphic.active;
		return graphic;
	}
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
		point.x += this.x;
		point.y += this.y;
		camera.x *= this.scrollX;
		camera.y *= this.scrollY;
		var _g = 0, _g1 = this._graphics;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.visible) {
				if(g.relative) {
					this._point.x = point.x;
					this._point.y = point.y;
				} else this._point.x = this._point.y = 0;
				this._camera.x = camera.x;
				this._camera.y = camera.y;
				g.render(target,this._point,this._camera,layer);
			}
		}
	}
	,update: function() {
		var _g = 0, _g1 = this._graphics;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.active) g.update();
		}
	}
	,__class__: com.haxepunk.graphics.Graphiclist
	,__properties__: {get_children:"getChildren",get_count:"getCount"}
});
com.haxepunk.graphics.Image = function(source,clipRect,name) {
	if(name == null) name = "";
	com.haxepunk.Graphic.call(this);
	{
		this.angle = 0;
		this.scale = this.scaleX = this.scaleY = 1;
		this.originX = this.originY = 0;
		this._alpha = 1;
		this._flipped = false;
		this._color = 16777215;
		this._matrix = com.haxepunk.HXP.matrix;
	}
	if(this._source == null && this._region == null) {
		this._class = name;
		if(js.Boot.__instanceof(source,browser.display.BitmapData)) {
			this._blit = true;
			this._sourceRect = source.rect;
			this._source = source;
		} else if(js.Boot.__instanceof(source,com.haxepunk.graphics.atlas.TextureAtlas)) {
			this._blit = false;
			this._region = (js.Boot.__cast(source , com.haxepunk.graphics.atlas.TextureAtlas)).getRegion(name);
			this._sourceRect = new browser.geom.Rectangle(0,0,this._region.rect.width,this._region.rect.height);
		} else if(js.Boot.__instanceof(source,com.haxepunk.graphics.atlas.AtlasRegion)) {
			this._blit = false;
			this._region = source;
			this._sourceRect = new browser.geom.Rectangle(0,0,this._region.rect.width,this._region.rect.height);
		} else {
			if(js.Boot.__instanceof(source,String)) this._class = source; else if(name == "") this._class = Type.getClassName(Type.getClass(source));
			this.setBitmapSource(com.haxepunk.HXP.getBitmap(source));
		}
		if(this._source == null && this._region == null) throw "Invalid source image.";
	}
	if(clipRect != null) {
		if(clipRect.width == 0) clipRect.width = this._sourceRect.width;
		if(clipRect.height == 0) clipRect.height = this._sourceRect.height;
		if(!this._blit) this._region = this._region.clip(clipRect);
		this._sourceRect = clipRect;
	}
	if(this._blit) {
		this._bitmap = new browser.display.Bitmap();
		this._colorTransform = new browser.geom.ColorTransform();
		this.createBuffer();
		this.updateBuffer();
	}
};
$hxClasses["com.haxepunk.graphics.Image"] = com.haxepunk.graphics.Image;
com.haxepunk.graphics.Image.__name__ = ["com","haxepunk","graphics","Image"];
com.haxepunk.graphics.Image.createRect = function(width,height,color) {
	if(color == null) color = 16777215;
	var source = com.haxepunk.HXP.createBitmap(width,height,true,-16777216 | color);
	return new com.haxepunk.graphics.Image(source);
}
com.haxepunk.graphics.Image.createCircle = function(radius,color) {
	if(color == null) color = 16777215;
	com.haxepunk.HXP.sprite.get_graphics().clear();
	com.haxepunk.HXP.sprite.get_graphics().beginFill(color);
	com.haxepunk.HXP.sprite.get_graphics().drawCircle(radius,radius,radius);
	var data = com.haxepunk.HXP.createBitmap(radius * 2,radius * 2,true);
	data.draw(com.haxepunk.HXP.sprite);
	return new com.haxepunk.graphics.Image(data);
}
com.haxepunk.graphics.Image.__super__ = com.haxepunk.Graphic;
com.haxepunk.graphics.Image.prototype = $extend(com.haxepunk.Graphic.prototype,{
	_flip: null
	,_flipped: null
	,_class: null
	,_matrix: null
	,_colorTransform: null
	,_tint: null
	,_color: null
	,_alpha: null
	,_region: null
	,_bitmap: null
	,_bufferRect: null
	,_buffer: null
	,_sourceRect: null
	,_source: null
	,getClipRect: function() {
		return this._sourceRect;
	}
	,clipRect: null
	,getScaledHeight: function() {
		return this.getHeight() * this.scaleY * this.scale | 0;
	}
	,scaledHeight: null
	,getScaledWidth: function() {
		return this.getWidth() * this.scaleX * this.scale | 0;
	}
	,scaledWidth: null
	,getHeight: function() {
		return (this._blit?this._bufferRect.height:this._region.rect.height) | 0;
	}
	,height: null
	,getWidth: function() {
		return (this._blit?this._bufferRect.width:this._region.rect.width) | 0;
	}
	,width: null
	,centerOO: function() {
		this.x += this.originX;
		this.y += this.originY;
		this.centerOrigin();
		this.x -= this.originX;
		this.y -= this.originY;
	}
	,centerOrigin: function() {
		this.originX = this.getWidth() / 2 | 0;
		this.originY = this.getHeight() / 2 | 0;
	}
	,setFlipped: function(value) {
		if(this._flipped == value || this._class == "") return value;
		this._flipped = value;
		if(this._blit) {
			var temp = this._source;
			if(!value || this._flip != null) this._source = this._flip; else if(com.haxepunk.graphics.Image._flips.exists(this._class)) this._source = com.haxepunk.graphics.Image._flips.get(this._class); else {
				this._source = com.haxepunk.HXP.createBitmap(this._source.get_width(),this._source.get_height(),true);
				com.haxepunk.graphics.Image._flips.set(this._class,this._source);
				com.haxepunk.HXP.matrix.identity();
				com.haxepunk.HXP.matrix.a = -1;
				com.haxepunk.HXP.matrix.set_tx(this._source.get_width());
				this._source.draw(temp,com.haxepunk.HXP.matrix);
			}
			this._flip = temp;
			this.updateBuffer();
		}
		return this._flipped;
	}
	,getFlipped: function() {
		return this._flipped;
	}
	,flipped: null
	,setColor: function(value) {
		value &= 16777215;
		if(this._color == value) return value;
		this._color = value;
		if(this._blit) {
			if(this._alpha == 1 && this._color == 16777215) this._tint = null; else {
				this._tint = this._colorTransform;
				this._tint.redMultiplier = (this._color >> 16 & 255) / 255;
				this._tint.greenMultiplier = (this._color >> 8 & 255) / 255;
				this._tint.blueMultiplier = (this._color & 255) / 255;
				this._tint.alphaMultiplier = this._alpha;
			}
			this.updateBuffer();
		}
		return this._color;
	}
	,getColor: function() {
		return this._color;
	}
	,color: null
	,setAlpha: function(value) {
		value = value < 0?0:value > 1?1:value;
		if(this._alpha == value) return value;
		this._alpha = value;
		if(this._blit) {
			if(this._alpha == 1 && this._color == 16777215) this._tint = null; else {
				this._tint = this._colorTransform;
				this._tint.redMultiplier = (this._color >> 16 & 255) / 255;
				this._tint.greenMultiplier = (this._color >> 8 & 255) / 255;
				this._tint.blueMultiplier = (this._color & 255) / 255;
				this._tint.alphaMultiplier = this._alpha;
			}
			this.updateBuffer();
		}
		return this._alpha;
	}
	,getAlpha: function() {
		return this._alpha;
	}
	,alpha: null
	,clear: function() {
		if(this._buffer == null) return;
		this._buffer.fillRect(this._bufferRect,0);
	}
	,updateBuffer: function(clearBefore) {
		if(clearBefore == null) clearBefore = false;
		if(this._source == null) return;
		if(clearBefore) this._buffer.fillRect(this._bufferRect,0);
		this._buffer.copyPixels(this._source,this._sourceRect,com.haxepunk.HXP.zero);
		if(this._tint != null) this._buffer.colorTransform(this._bufferRect,this._tint);
	}
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
		this._point.x = point.x + this.x - this.originX - camera.x * this.scrollX;
		this._point.y = point.y + this.y - this.originY - camera.y * this.scrollY;
		if(this._blit) {
			if(this._buffer != null) {
				if(this.angle == 0 && this.scaleX * this.scale == 1 && this.scaleY * this.scale == 1 && this.blend == null) target.copyPixels(this._buffer,this._bufferRect,this._point,null,null,true); else {
					this._matrix.b = this._matrix.c = 0;
					this._matrix.a = this.scaleX * this.scale;
					this._matrix.d = this.scaleY * this.scale;
					this._matrix.set_tx(-this.originX * this._matrix.a);
					this._matrix.set_ty(-this.originY * this._matrix.d);
					if(this.angle != 0) this._matrix.rotate(this.angle * (Math.PI / -180));
					var _g = this._matrix;
					_g.set_tx(_g.tx + (this.originX + this._point.x));
					var _g = this._matrix;
					_g.set_ty(_g.ty + (this.originY + this._point.y));
					target.draw(this._bitmap,this._matrix,null,this.blend,null,this.smooth);
				}
			}
		} else {
			if(this._flipped) this._point.x += this._sourceRect.width;
			var sx = com.haxepunk.HXP.screen.getFullScaleX() * this.scale * this.scaleX, sy = com.haxepunk.HXP.screen.getFullScaleY() * this.scale * this.scaleY;
			this._region.draw(this._point.x * sx,this._point.y * sy,layer,sx * (this._flipped?-1:1),sy,this.angle,(this._color >> 16 & 255) / 255,(this._color >> 8 & 255) / 255,(this._color & 255) / 255,this._alpha);
		}
	}
	,createBuffer: function() {
		this._buffer = com.haxepunk.HXP.createBitmap(this._sourceRect.width | 0,this._sourceRect.height | 0,true);
		this._bufferRect = this._buffer.rect;
		this._bitmap.set_bitmapData(this._buffer);
	}
	,init: function() {
		this.angle = 0;
		this.scale = this.scaleX = this.scaleY = 1;
		this.originX = this.originY = 0;
		this._alpha = 1;
		this._flipped = false;
		this._color = 16777215;
		this._matrix = com.haxepunk.HXP.matrix;
	}
	,setBitmapSource: function(bitmap) {
		this._blit = true;
		this._sourceRect = bitmap.rect;
		this._source = bitmap;
	}
	,setAtlasRegion: function(region) {
		this._blit = false;
		this._region = region;
		this._sourceRect = new browser.geom.Rectangle(0,0,this._region.rect.width,this._region.rect.height);
	}
	,smooth: null
	,blend: null
	,originY: null
	,originX: null
	,scaleY: null
	,scaleX: null
	,scale: null
	,angle: null
	,__class__: com.haxepunk.graphics.Image
	,__properties__: {set_alpha:"setAlpha",get_alpha:"getAlpha",set_color:"setColor",get_color:"getColor",set_flipped:"setFlipped",get_flipped:"getFlipped",get_width:"getWidth",get_height:"getHeight",get_scaledWidth:"getScaledWidth",get_scaledHeight:"getScaledHeight",get_clipRect:"getClipRect"}
});
com.haxepunk.graphics.Text = function(text,x,y,width,height,options) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(options == null) {
		options = { };
		options.color = 16777215;
	}
	if(options.font == null) options.font = com.haxepunk.HXP.defaultFont;
	if(options.size == 0) options.size = 16;
	if(options.align == null) options.align = browser.text.TextFormatAlign.LEFT;
	var fontObj = nme.installer.Assets.getFont(options.font);
	this._form = new browser.text.TextFormat(fontObj.fontName,options.size,options.color);
	this._form.align = options.align;
	this._form.leading = options.leading;
	this._field = new browser.text.TextField();
	this._field.set_wordWrap(options.wordWrap);
	this._field.set_defaultTextFormat(this._form);
	this._field.set_text(text);
	this.resizable = options.resizable;
	if(width == 0) width = this._field.get_textWidth() + 4 | 0;
	if(height == 0) height = this._field.get_textHeight() + 4 | 0;
	com.haxepunk.graphics.Image.call(this,com.haxepunk.HXP.createBitmap(width,height,true));
	this.setText(text);
	this.x = x;
	this.y = y;
};
$hxClasses["com.haxepunk.graphics.Text"] = com.haxepunk.graphics.Text;
com.haxepunk.graphics.Text.__name__ = ["com","haxepunk","graphics","Text"];
com.haxepunk.graphics.Text.__super__ = com.haxepunk.graphics.Image;
com.haxepunk.graphics.Text.prototype = $extend(com.haxepunk.graphics.Image.prototype,{
	_form: null
	,_field: null
	,setSize: function(value) {
		if(this.size == value) return value;
		this._form.size = this.size = value;
		this.updateBuffer();
		return value;
	}
	,size: null
	,setFont: function(value) {
		if(this.font == value) return value;
		value = nme.installer.Assets.getFont(value).fontName;
		this._form.font = this.font = value;
		this.updateBuffer();
		return this.font;
	}
	,font: null
	,setText: function(value) {
		if(this.text == value) return value;
		this._field.set_text(this.text = value);
		this.updateBuffer();
		return this.text;
	}
	,text: null
	,textHeight: null
	,textWidth: null
	,resizable: null
	,updateBuffer: function(clearBefore) {
		if(clearBefore == null) clearBefore = false;
		this._field.setTextFormat(this._form);
		this._field.set_width(this.getWidth());
		this._field.set_width(this.textWidth = Math.ceil(this._field.get_textWidth() + 4));
		this._field.set_height(this.textHeight = Math.ceil(this._field.get_textHeight() + 4));
		if(this.resizable) {
			this._bufferRect.width = this.textWidth;
			this._bufferRect.height = this.textHeight;
		}
		if(this.textWidth > this._source.get_width() || this.textHeight > this._source.get_height()) {
			this._source = com.haxepunk.HXP.createBitmap(Math.max(this.textWidth,this._source.get_width()) | 0,Math.max(this.textHeight,this._source.get_height()) | 0,true);
			this._sourceRect = this._source.rect;
			this.createBuffer();
		} else this._source.fillRect(this._sourceRect,0);
		if(this.resizable) {
			this._field.set_width(this.textWidth);
			this._field.set_height(this.textHeight);
		}
		(js.Boot.__cast(this._source , browser.display.BitmapData)).draw(this._field);
		com.haxepunk.graphics.Image.prototype.updateBuffer.call(this,clearBefore);
	}
	,__class__: com.haxepunk.graphics.Text
	,__properties__: $extend(com.haxepunk.graphics.Image.prototype.__properties__,{set_text:"setText",set_font:"setFont",set_size:"setSize"})
});
com.haxepunk.graphics.TiledImage = function(texture,width,height,clipRect) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	this._graphics = com.haxepunk.HXP.sprite.get_graphics();
	this._offsetX = this._offsetY = 0;
	this._width = width;
	this._height = height;
	com.haxepunk.graphics.Image.call(this,texture,clipRect);
};
$hxClasses["com.haxepunk.graphics.TiledImage"] = com.haxepunk.graphics.TiledImage;
com.haxepunk.graphics.TiledImage.__name__ = ["com","haxepunk","graphics","TiledImage"];
com.haxepunk.graphics.TiledImage.__super__ = com.haxepunk.graphics.Image;
com.haxepunk.graphics.TiledImage.prototype = $extend(com.haxepunk.graphics.Image.prototype,{
	_offsetY: null
	,_offsetX: null
	,_height: null
	,_width: null
	,_texture: null
	,_graphics: null
	,setOffset: function(x,y) {
		if(this._offsetX == x && this._offsetY == y) return;
		this._offsetX = x;
		this._offsetY = y;
		this.updateBuffer();
	}
	,setOffsetY: function(value) {
		if(this._offsetY == value) return value;
		this._offsetY = value;
		this.updateBuffer();
		return this._offsetY;
	}
	,getOffsetY: function() {
		return this._offsetY;
	}
	,offsetY: null
	,setOffsetX: function(value) {
		if(this._offsetX == value) return value;
		this._offsetX = value;
		this.updateBuffer();
		return this._offsetX;
	}
	,getOffsetX: function() {
		return this._offsetX;
	}
	,offsetX: null
	,updateBuffer: function(clearBefore) {
		if(clearBefore == null) clearBefore = false;
		if(this._source == null) return;
		if(this._texture == null) {
			this._texture = com.haxepunk.HXP.createBitmap(this._sourceRect.width | 0,this._sourceRect.height | 0,true);
			this._texture.copyPixels(this._source,this._sourceRect,com.haxepunk.HXP.zero);
		}
		this._buffer.fillRect(this._bufferRect,0);
		this._graphics.clear();
		if(this._offsetX != 0 || this._offsetY != 0) {
			com.haxepunk.HXP.matrix.identity();
			com.haxepunk.HXP.matrix.set_tx(Math.round(this._offsetX));
			com.haxepunk.HXP.matrix.set_ty(Math.round(this._offsetY));
			this._graphics.beginBitmapFill(this._texture,com.haxepunk.HXP.matrix);
		} else this._graphics.beginBitmapFill(this._texture);
		this._graphics.drawRect(0,0,this._width,this._height);
		this._buffer.draw(com.haxepunk.HXP.sprite,null,this._tint);
	}
	,createBuffer: function() {
		if(this._width == 0) this._width = this._sourceRect.width | 0;
		if(this._height == 0) this._height = this._sourceRect.height | 0;
		this._buffer = com.haxepunk.HXP.createBitmap(this._width,this._height,true);
		this._bufferRect = this._buffer.rect;
	}
	,__class__: com.haxepunk.graphics.TiledImage
	,__properties__: $extend(com.haxepunk.graphics.Image.prototype.__properties__,{set_offsetX:"setOffsetX",get_offsetX:"getOffsetX",set_offsetY:"setOffsetY",get_offsetY:"getOffsetY"})
});
com.haxepunk.graphics.Tilemap = function(tileset,width,height,tileWidth,tileHeight) {
	this._rect = com.haxepunk.HXP.rect;
	this._width = width - width % tileWidth;
	this._height = height - height % tileHeight;
	this._columns = this._width / tileWidth | 0;
	this._rows = this._height / tileHeight | 0;
	if(this._columns == 0 || this._rows == 0) throw "Cannot create a bitmapdata of width/height = 0";
	this._maxWidth -= this._maxWidth % tileWidth;
	this._maxHeight -= this._maxHeight % tileHeight;
	com.haxepunk.graphics.Canvas.call(this,this._width,this._height);
	this._tile = new browser.geom.Rectangle(0,0,tileWidth,tileHeight);
	this._map = new Array();
	var _g1 = 0, _g = this._rows;
	while(_g1 < _g) {
		var y = _g1++;
		this._map[y] = new Array();
		var _g3 = 0, _g2 = this._columns;
		while(_g3 < _g2) {
			var x = _g3++;
			this._map[y][x] = -1;
		}
	}
	if(js.Boot.__instanceof(tileset,com.haxepunk.graphics.atlas.TileAtlas)) {
		this._blit = false;
		this._atlas = js.Boot.__cast(tileset , com.haxepunk.graphics.atlas.TileAtlas);
	} else {
		this._blit = false;
		this._atlas = new com.haxepunk.graphics.atlas.TileAtlas(tileset,tileWidth,tileHeight);
	}
	if(this._set == null && this._atlas == null) throw "Invalid tileset graphic provided.";
	if(this._blit) {
		this._setColumns = this._set.get_width() / tileWidth | 0;
		this._setRows = this._set.get_height() / tileHeight | 0;
	} else {
		this._setColumns = this._atlas.width / tileWidth | 0;
		this._setRows = this._atlas.height / tileHeight | 0;
	}
	this._setCount = this._setColumns * this._setRows;
};
$hxClasses["com.haxepunk.graphics.Tilemap"] = com.haxepunk.graphics.Tilemap;
com.haxepunk.graphics.Tilemap.__name__ = ["com","haxepunk","graphics","Tilemap"];
com.haxepunk.graphics.Tilemap.__super__ = com.haxepunk.graphics.Canvas;
com.haxepunk.graphics.Tilemap.prototype = $extend(com.haxepunk.graphics.Canvas.prototype,{
	_tile: null
	,_setCount: null
	,_setRows: null
	,_setColumns: null
	,_atlas: null
	,_set: null
	,_rows: null
	,_columns: null
	,_map: null
	,getRows: function() {
		return this._rows;
	}
	,rows: null
	,getColumns: function() {
		return this._columns;
	}
	,columns: null
	,getTileHeight: function() {
		return this._tile.height | 0;
	}
	,tileHeight: null
	,getTileWidth: function() {
		return this._tile.width | 0;
	}
	,tileWidth: null
	,updateTile: function(column,row) {
		this.setTile(column,row,this._map[row % this._rows][column % this._columns]);
	}
	,render: function(target,point,camera,layer) {
		if(layer == null) layer = 10;
		if(this._blit) com.haxepunk.graphics.Canvas.prototype.render.call(this,target,point,camera,layer); else {
			this._point.x = point.x + this.x - camera.x * this.scrollX;
			this._point.y = point.y + this.y - camera.y * this.scrollY;
			var scalex = com.haxepunk.HXP.screen.getFullScaleX(), scaley = com.haxepunk.HXP.screen.getFullScaleY(), tw = this.getTileWidth() | 0, th = this.getTileHeight() | 0;
			var startx = -Math.floor(this._point.x / tw), starty = -Math.floor(this._point.y / th), destx = startx + Math.ceil(com.haxepunk.HXP.width / tw), desty = starty + Math.ceil(com.haxepunk.HXP.height / th);
			startx = startx - 1;
			starty = starty - 1;
			if(startx > this._columns || starty > this._rows || destx < 0 || desty < 0) return;
			if(startx < 0) startx = 0;
			if(destx > this._columns) destx = this._columns;
			if(starty < 0) starty = 0;
			if(desty > this._rows) desty = this._rows;
			var r = (this.getColor() >> 16 & 255) / 255, g = (this.getColor() >> 8 & 255) / 255, b = (this.getColor() & 255) / 255, wx = (this._point.x + startx * tw) * scalex, wy = (this._point.y + starty * th) * scaley, tile = 0;
			var _g = starty;
			while(_g < desty) {
				var y = _g++;
				var _g1 = startx;
				while(_g1 < destx) {
					var x = _g1++;
					tile = this.getTile(x,y);
					if(tile >= 0) this._atlas.prepareTile(tile,wx,wy,layer,scalex,scaley,0,r,g,b,this.getAlpha());
					wx += tw * scalex;
				}
				wx = (this._point.x + startx * tw) * scalex;
				wy += th * scaley;
			}
		}
	}
	,updateRect: function(rect,clear) {
		var x = rect.x | 0, y = rect.y | 0, w = x + rect.width | 0, h = y + rect.height | 0, u = this.usePositions;
		this.usePositions = false;
		if(clear) while(y < h) {
			while(x < w) this.clearTile(x++,y);
			x = rect.x | 0;
			y++;
		} else while(y < h) {
			while(x < w) this.updateTile(x++,y);
			x = rect.x | 0;
			y++;
		}
		this.usePositions = u;
	}
	,shiftTiles: function(columns,rows,wrap) {
		if(wrap == null) wrap = false;
		if(this.usePositions) {
			columns = columns / this._tile.width | 0;
			rows = rows / this._tile.height | 0;
		}
		if(columns != 0) {
			var _g1 = 0, _g = this._rows;
			while(_g1 < _g) {
				var y = _g1++;
				var row = this._map[y];
				if(columns > 0) {
					var _g2 = 0;
					while(_g2 < columns) {
						var x = _g2++;
						var tile = row.pop();
						if(wrap) row.unshift(tile);
					}
				} else {
					var _g3 = 0, _g2 = Math.abs(columns) | 0;
					while(_g3 < _g2) {
						var x = _g3++;
						var tile = row.shift();
						if(wrap) row.push(tile);
					}
				}
			}
			this._columns = this._map[this.y | 0].length;
		}
		if(rows != 0) {
			if(rows > 0) {
				var _g = 0;
				while(_g < rows) {
					var y = _g++;
					var row = this._map.pop();
					if(wrap) this._map.unshift(row);
				}
			} else {
				var _g1 = 0, _g = Math.abs(rows) | 0;
				while(_g1 < _g) {
					var y = _g1++;
					var row = this._map.shift();
					if(wrap) this._map.push(row);
				}
			}
			this._rows = this._map.length;
		}
	}
	,getIndex: function(tilesColumn,tilesRow) {
		return tilesRow % this._setRows * this._setColumns + tilesColumn % this._setColumns;
	}
	,saveToString: function(columnSep,rowSep) {
		if(rowSep == null) rowSep = "\n";
		if(columnSep == null) columnSep = ",";
		var s = "", x, y;
		var _g1 = 0, _g = this._rows;
		while(_g1 < _g) {
			var y1 = _g1++;
			var _g3 = 0, _g2 = this._columns;
			while(_g3 < _g2) {
				var x1 = _g3++;
				s += Std.string(this.getTile(x1,y1));
				if(x1 != this._columns - 1) s += columnSep;
			}
			if(y1 != this._rows - 1) s += rowSep;
		}
		return s;
	}
	,loadFromString: function(str,columnSep,rowSep) {
		if(rowSep == null) rowSep = "\n";
		if(columnSep == null) columnSep = ",";
		var row = str.split(rowSep), rows = row.length, col, cols, x, y;
		var _g = 0;
		while(_g < rows) {
			var y1 = _g++;
			if(row[y1] == "") continue;
			col = row[y1].split(columnSep);
			cols = col.length;
			var _g1 = 0;
			while(_g1 < cols) {
				var x1 = _g1++;
				if(col[x1] == "") continue;
				this.setTile(x1,y1,Std.parseInt(col[x1]));
			}
		}
	}
	,loadFrom2DArray: function(array) {
		this._map = array;
	}
	,clearRect: function(column,row,width,height) {
		if(height == null) height = 1;
		if(width == null) width = 1;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
			width = width / this._tile.width | 0;
			height = height / this._tile.height | 0;
		}
		column %= this._columns;
		row %= this._rows;
		var c = column, r = column + width, b = row + height, u = this.usePositions;
		this.usePositions = false;
		while(row < b) {
			while(column < r) {
				this.clearTile(column,row);
				column++;
			}
			column = c;
			row++;
		}
		this.usePositions = u;
	}
	,setRect: function(column,row,width,height,index) {
		if(index == null) index = 0;
		if(height == null) height = 1;
		if(width == null) width = 1;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
			width = width / this._tile.width | 0;
			height = height / this._tile.height | 0;
		}
		column %= this._columns;
		row %= this._rows;
		var c = column, r = column + width, b = row + height, u = this.usePositions;
		this.usePositions = false;
		while(row < b) {
			while(column < r) {
				this.setTile(column,row,index);
				column++;
			}
			column = c;
			row++;
		}
		this.usePositions = u;
	}
	,getTile: function(column,row) {
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
		}
		return this._map[row % this._rows][column % this._columns];
	}
	,clearTile: function(column,row) {
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
		}
		column %= this._columns;
		row %= this._rows;
		this._tile.x = column * this._tile.width;
		this._tile.y = row * this._tile.height;
		if(this._blit) this.fill(this._tile,0,0);
	}
	,setTile: function(column,row,index) {
		if(index == null) index = 0;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
		}
		index %= this._setCount;
		column %= this._columns;
		row %= this._rows;
		this._tile.x = index % this._setColumns * this._tile.width;
		this._tile.y = (index / this._setColumns | 0) * this._tile.height;
		this._map[row][column] = index;
		if(this._blit) this.draw(column * this._tile.width | 0,row * this._tile.height | 0,this._set,this._tile);
	}
	,usePositions: null
	,__class__: com.haxepunk.graphics.Tilemap
	,__properties__: $extend(com.haxepunk.graphics.Canvas.prototype.__properties__,{get_tileWidth:"getTileWidth",get_tileHeight:"getTileHeight",get_columns:"getColumns",get_rows:"getRows"})
});
com.haxepunk.graphics.atlas = {}
com.haxepunk.graphics.atlas.Layer = function() {
	this.data = new Array();
	{
		if(this.index < this.data.length) this.data.splice(this.index,this.data.length - this.index);
		this.index = 0;
		this.dirty = false;
	}
};
$hxClasses["com.haxepunk.graphics.atlas.Layer"] = com.haxepunk.graphics.atlas.Layer;
com.haxepunk.graphics.atlas.Layer.__name__ = ["com","haxepunk","graphics","atlas","Layer"];
com.haxepunk.graphics.atlas.Layer.prototype = {
	prepare: function() {
		if(this.index < this.data.length) this.data.splice(this.index,this.data.length - this.index);
		this.index = 0;
		this.dirty = false;
	}
	,dirty: null
	,index: null
	,data: null
	,__class__: com.haxepunk.graphics.atlas.Layer
}
com.haxepunk.graphics.atlas.Atlas = function(bd) {
	this._layers = new IntHash();
	this._tilesheet = new browser.display.Tilesheet(bd);
	this.width = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0;
	this.height = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0;
	this._renderFlags = 28;
	com.haxepunk.graphics.atlas.Atlas._atlases.push(this);
	this._tileIndex = 0;
};
$hxClasses["com.haxepunk.graphics.atlas.Atlas"] = com.haxepunk.graphics.atlas.Atlas;
com.haxepunk.graphics.atlas.Atlas.__name__ = ["com","haxepunk","graphics","atlas","Atlas"];
com.haxepunk.graphics.atlas.Atlas.clear = function() {
	var $it0 = com.haxepunk.graphics.atlas.Atlas._sprites.iterator();
	while( $it0.hasNext() ) {
		var sprite = $it0.next();
		sprite.get_graphics().clear();
	}
}
com.haxepunk.graphics.atlas.Atlas.renderAll = function() {
	if(com.haxepunk.graphics.atlas.Atlas._atlases.length > 0) {
		var _g = 0, _g1 = com.haxepunk.graphics.atlas.Atlas._atlases;
		while(_g < _g1.length) {
			var atlas = _g1[_g];
			++_g;
			atlas.render();
		}
	}
}
com.haxepunk.graphics.atlas.Atlas.getSpriteByLayer = function(layer) {
	if(com.haxepunk.graphics.atlas.Atlas._sprites.exists(layer)) return com.haxepunk.graphics.atlas.Atlas._sprites.get(layer); else {
		var sprite = new browser.display.Sprite();
		var idx = 0;
		var $it0 = com.haxepunk.graphics.atlas.Atlas._sprites.keys();
		while( $it0.hasNext() ) {
			var l = $it0.next();
			if(l < layer) break;
			idx += 1;
		}
		com.haxepunk.graphics.atlas.Atlas._sprites.set(layer,sprite);
		com.haxepunk.HXP.stage.addChildAt(sprite,idx);
		return sprite;
	}
}
com.haxepunk.graphics.atlas.Atlas.prototype = {
	_renderFlags: null
	,_layers: null
	,_layer: null
	,_layerIndex: null
	,_tilesheet: null
	,_tileIndex: null
	,createRegion: function(rect,center) {
		this._tilesheet.addTileRect(rect,center);
		var region = new com.haxepunk.graphics.atlas.AtlasRegion(this,this._tileIndex,rect);
		this._tileIndex += 1;
		return region;
	}
	,prepareTile: function(tile,x,y,layer,scaleX,scaleY,angle,red,green,blue,alpha) {
		if(this._layerIndex != layer) {
			if(this._layers.exists(layer)) this._layer = this._layers.get(layer); else {
				this._layer = new com.haxepunk.graphics.atlas.Layer();
				this._layers.set(layer,this._layer);
			}
			this._layerIndex = layer;
		}
		var d = this._layer.data;
		this._layer.dirty = true;
		d[this._layer.index++] = x;
		d[this._layer.index++] = y;
		d[this._layer.index++] = tile;
		if(angle == 0) {
			d[this._layer.index++] = scaleX;
			d[this._layer.index++] = 0;
			d[this._layer.index++] = 0;
			d[this._layer.index++] = scaleY;
		} else {
			var cos = Math.cos(angle * (Math.PI / -180));
			var sin = Math.sin(angle * (Math.PI / -180));
			d[this._layer.index++] = cos * scaleX;
			d[this._layer.index++] = sin * scaleX;
			d[this._layer.index++] = -sin * scaleY;
			d[this._layer.index++] = cos * scaleY;
		}
		d[this._layer.index++] = red;
		d[this._layer.index++] = green;
		d[this._layer.index++] = blue;
		d[this._layer.index++] = alpha;
		if(this._layer.index > com.haxepunk.graphics.atlas.Atlas.drawCallThreshold) {
			this._layer.prepare();
			com.haxepunk.graphics.atlas.Atlas.getSpriteByLayer(layer).get_graphics().drawTiles(this._tilesheet,this._layer.data,com.haxepunk.graphics.atlas.Atlas.smooth,this._renderFlags);
		}
	}
	,setLayer: function(layer) {
		if(this._layers.exists(layer)) this._layer = this._layers.get(layer); else {
			this._layer = new com.haxepunk.graphics.atlas.Layer();
			this._layers.set(layer,this._layer);
		}
		this._layerIndex = layer;
	}
	,render: function() {
		var l;
		var $it0 = this._layers.keys();
		while( $it0.hasNext() ) {
			var layer = $it0.next();
			l = this._layers.get(layer);
			if(l.dirty) {
				{
					if(l.index < l.data.length) l.data.splice(l.index,l.data.length - l.index);
					l.index = 0;
					l.dirty = false;
				}
				com.haxepunk.graphics.atlas.Atlas.getSpriteByLayer(layer).get_graphics().drawTiles(this._tilesheet,l.data,com.haxepunk.graphics.atlas.Atlas.smooth,this._renderFlags);
			}
		}
	}
	,height: null
	,width: null
	,__class__: com.haxepunk.graphics.atlas.Atlas
}
com.haxepunk.graphics.atlas.AtlasRegion = function(parent,tileIndex,rect) {
	this.parent = parent;
	this.tileIndex = tileIndex;
	this.rect = rect.clone();
};
$hxClasses["com.haxepunk.graphics.atlas.AtlasRegion"] = com.haxepunk.graphics.atlas.AtlasRegion;
com.haxepunk.graphics.atlas.AtlasRegion.__name__ = ["com","haxepunk","graphics","atlas","AtlasRegion"];
com.haxepunk.graphics.atlas.AtlasRegion.prototype = {
	parent: null
	,center: null
	,rect: null
	,getHeight: function() {
		return this.rect.height;
	}
	,getWidth: function() {
		return this.rect.width;
	}
	,toString: function() {
		return "[AtlasRegion " + this.rect.width + ", " + this.rect.height + " " + this.tileIndex + "]";
	}
	,draw: function(x,y,layer,scaleX,scaleY,angle,red,green,blue,alpha) {
		if(alpha == null) alpha = 1;
		if(blue == null) blue = 1;
		if(green == null) green = 1;
		if(red == null) red = 1;
		if(angle == null) angle = 0;
		if(scaleY == null) scaleY = 1;
		if(scaleX == null) scaleX = 1;
		if(this.rotated) angle = angle - 90;
		this.parent.prepareTile(this.tileIndex,x,y,layer,scaleX,scaleY,angle,red,green,blue,alpha);
	}
	,clip: function(clipRect,center) {
		if(clipRect.x + clipRect.width > this.rect.width) clipRect.width = this.rect.width - clipRect.x;
		if(clipRect.y + clipRect.height > this.rect.height) clipRect.height = this.rect.height - clipRect.y;
		if(clipRect.width < 0) clipRect.width = 0;
		if(clipRect.height < 0) clipRect.height = 0;
		clipRect.x += this.rect.x;
		clipRect.y += this.rect.y;
		return this.parent.createRegion(clipRect,center);
	}
	,height: null
	,width: null
	,tileIndex: null
	,rotated: null
	,__class__: com.haxepunk.graphics.atlas.AtlasRegion
	,__properties__: {get_width:"getWidth",get_height:"getHeight"}
}
com.haxepunk.graphics.atlas.TextureAtlas = function(source) {
	var bd;
	if(js.Boot.__instanceof(source,browser.display.BitmapData)) bd = source; else bd = com.haxepunk.HXP.getBitmap(source);
	this._regions = new Hash();
	com.haxepunk.graphics.atlas.Atlas.call(this,bd);
};
$hxClasses["com.haxepunk.graphics.atlas.TextureAtlas"] = com.haxepunk.graphics.atlas.TextureAtlas;
com.haxepunk.graphics.atlas.TextureAtlas.__name__ = ["com","haxepunk","graphics","atlas","TextureAtlas"];
com.haxepunk.graphics.atlas.TextureAtlas.loadTexturePacker = function(file) {
	var xml = Xml.parse(nme.installer.Assets.getText(file));
	var root = xml.firstElement();
	var atlas = new com.haxepunk.graphics.atlas.TextureAtlas(root.get("imagePath"));
	var $it0 = root.elements();
	while( $it0.hasNext() ) {
		var sprite = $it0.next();
		com.haxepunk.HXP.rect.x = Std.parseInt(sprite.get("x"));
		com.haxepunk.HXP.rect.y = Std.parseInt(sprite.get("y"));
		if(sprite.exists("w")) com.haxepunk.HXP.rect.width = Std.parseInt(sprite.get("w"));
		if(sprite.exists("h")) com.haxepunk.HXP.rect.height = Std.parseInt(sprite.get("h"));
		var region = atlas.defineRegion(sprite.get("n"),com.haxepunk.HXP.rect);
		if(sprite.exists("r") && sprite.get("r") == "y") region.rotated = true;
	}
	return atlas;
}
com.haxepunk.graphics.atlas.TextureAtlas.__super__ = com.haxepunk.graphics.atlas.Atlas;
com.haxepunk.graphics.atlas.TextureAtlas.prototype = $extend(com.haxepunk.graphics.atlas.Atlas.prototype,{
	_regions: null
	,defineRegion: function(name,rect,center) {
		var region = this.createRegion(rect,center);
		this._regions.set(name,region);
		return region;
	}
	,getRegion: function(name) {
		if(this._regions.exists(name)) return this._regions.get(name);
		throw "Region has not be defined yet: " + name;
	}
	,__class__: com.haxepunk.graphics.atlas.TextureAtlas
});
com.haxepunk.graphics.atlas.TileAtlas = function(source,tileWidth,tileHeight) {
	var bd;
	if(js.Boot.__instanceof(source,browser.display.BitmapData)) bd = source; else bd = com.haxepunk.HXP.getBitmap(source);
	this._regions = new IntHash();
	com.haxepunk.graphics.atlas.Atlas.call(this,bd);
	this.prepareTiles(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0,bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0,tileWidth,tileHeight);
};
$hxClasses["com.haxepunk.graphics.atlas.TileAtlas"] = com.haxepunk.graphics.atlas.TileAtlas;
com.haxepunk.graphics.atlas.TileAtlas.__name__ = ["com","haxepunk","graphics","atlas","TileAtlas"];
com.haxepunk.graphics.atlas.TileAtlas.__super__ = com.haxepunk.graphics.atlas.Atlas;
com.haxepunk.graphics.atlas.TileAtlas.prototype = $extend(com.haxepunk.graphics.atlas.Atlas.prototype,{
	_regions: null
	,prepareTiles: function(width,height,tileWidth,tileHeight) {
		var cols = Math.floor(width / tileWidth);
		var rows = Math.floor(height / tileHeight);
		com.haxepunk.HXP.rect.width = tileWidth;
		com.haxepunk.HXP.rect.height = tileHeight;
		com.haxepunk.HXP.point.x = com.haxepunk.HXP.point.y = 0;
		var _g = 0;
		while(_g < rows) {
			var y = _g++;
			com.haxepunk.HXP.rect.y = y * tileHeight;
			var _g1 = 0;
			while(_g1 < cols) {
				var x = _g1++;
				com.haxepunk.HXP.rect.x = x * tileWidth;
				var region = this.createRegion(com.haxepunk.HXP.rect,com.haxepunk.HXP.point);
				this._regions.set(region.tileIndex,region);
			}
		}
	}
	,getRegion: function(index) {
		return this._regions.get(index);
	}
	,__class__: com.haxepunk.graphics.atlas.TileAtlas
});
com.haxepunk.masks = {}
com.haxepunk.masks.Hitbox = function(width,height,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(height == null) height = 1;
	if(width == null) width = 1;
	com.haxepunk.Mask.call(this);
	this._width = width;
	this._height = height;
	this._x = x;
	this._y = y;
	this._check.set(Type.getClassName(com.haxepunk.masks.Hitbox),$bind(this,this.collideHitbox));
};
$hxClasses["com.haxepunk.masks.Hitbox"] = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Hitbox.__name__ = ["com","haxepunk","masks","Hitbox"];
com.haxepunk.masks.Hitbox.__super__ = com.haxepunk.Mask;
com.haxepunk.masks.Hitbox.prototype = $extend(com.haxepunk.Mask.prototype,{
	_y: null
	,_x: null
	,_height: null
	,_width: null
	,update: function() {
		if(this.parent != null) {
			this.parent.originX = -this._x;
			this.parent.originY = -this._y;
			this.parent.width = this._width;
			this.parent.height = this._height;
			if(this.list != null) this.list.update();
		}
	}
	,setHeight: function(value) {
		if(this._height == value) return value;
		this._height = value;
		if(this.list != null) this.list.update(); else if(this.parent != null) this.update();
		return this._height;
	}
	,getHeight: function() {
		return this._height;
	}
	,height: null
	,setWidth: function(value) {
		if(this._width == value) return value;
		this._width = value;
		if(this.list != null) this.list.update(); else if(this.parent != null) this.update();
		return this._width;
	}
	,getWidth: function() {
		return this._width;
	}
	,width: null
	,setY: function(value) {
		if(this._y == value) return value;
		this._y = value;
		if(this.list != null) this.list.update(); else if(this.parent != null) this.update();
		return this._y;
	}
	,getY: function() {
		return this._y;
	}
	,y: null
	,setX: function(value) {
		if(this._x == value) return value;
		this._x = value;
		if(this.list != null) this.list.update(); else if(this.parent != null) this.update();
		return this._x;
	}
	,getX: function() {
		return this._x;
	}
	,x: null
	,collideHitbox: function(other) {
		return this.parent.x + this._x + this._width > other.parent.x + other._x && this.parent.y + this._y + this._height > other.parent.y + other._y && this.parent.x + this._x < other.parent.x + other._x + other._width && this.parent.y + this._y < other.parent.y + other._y + other._height;
	}
	,collideMask: function(other) {
		return this.parent.x + this._x + this._width > other.parent.x - other.parent.originX && this.parent.y + this._y + this._height > other.parent.y - other.parent.originY && this.parent.x + this._x < other.parent.x - other.parent.originX + other.parent.width && this.parent.y + this._y < other.parent.y - other.parent.originY + other.parent.height;
	}
	,__class__: com.haxepunk.masks.Hitbox
	,__properties__: {set_x:"setX",get_x:"getX",set_y:"setY",get_y:"getY",set_width:"setWidth",get_width:"getWidth",set_height:"setHeight",get_height:"getHeight"}
});
com.haxepunk.masks.Circle = function(radius,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(radius == null) radius = 1;
	com.haxepunk.masks.Hitbox.call(this);
	this.setRadius(radius);
	this._x = x + radius;
	this._y = y + radius;
	this._check.set(Type.getClassName(com.haxepunk.Mask),$bind(this,this.collideMask));
	this._check.set(Type.getClassName(com.haxepunk.masks.Circle),$bind(this,this.collideCircle));
	this._check.set(Type.getClassName(com.haxepunk.masks.Hitbox),$bind(this,this.collideHitbox));
	this._check.set(Type.getClassName(com.haxepunk.masks.Grid),$bind(this,this.collideGrid));
};
$hxClasses["com.haxepunk.masks.Circle"] = com.haxepunk.masks.Circle;
com.haxepunk.masks.Circle.__name__ = ["com","haxepunk","masks","Circle"];
com.haxepunk.masks.Circle.__super__ = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Circle.prototype = $extend(com.haxepunk.masks.Hitbox.prototype,{
	_squaredRadius: null
	,_radius: null
	,update: function() {
		if(this.parent != null) {
			this.parent.originX = -this._x + this._radius;
			this.parent.originY = -this._y + this._radius;
			this.parent.height = this.parent.width = this._radius + this._radius;
			if(this.list != null) this.list.update();
		}
	}
	,setRadius: function(value) {
		if(this._radius == value) return value;
		this._radius = value;
		this._squaredRadius = value * value;
		this.setHeight(this.setWidth(this._radius + this._radius));
		if(this.list != null) this.list.update(); else if(this.parent != null) this.update();
		return this._radius;
	}
	,getRadius: function() {
		return this._radius;
	}
	,radius: null
	,getY: function() {
		return this._y - this._radius;
	}
	,getX: function() {
		return this._x - this._radius;
	}
	,debugDraw: function(graphics,scaleX,scaleY) {
		graphics.drawCircle((this.parent.x + this._x - com.haxepunk.HXP.camera.x) * scaleX,(this.parent.y + this._y - com.haxepunk.HXP.camera.y) * scaleY,this._radius * scaleX);
	}
	,project: function(axis,projection) {
		projection.min = -this._radius;
		projection.max = this._radius;
	}
	,collideHitbox: function(other) {
		var dx = Math.abs(this.parent.x + this._x - other.parent.x + other.getX()), dy = Math.abs(this.parent.y + this._y - other.parent.y + other.getY());
		if(dx <= other.getWidth() || dy <= other.getHeight()) return true;
		if(dx > other.getWidth() + this._radius || dy > other.getHeight() + this._radius) return false;
		return dx * dx + dy * dy <= this._squaredRadius;
	}
	,collideGrid: function(other) {
		var thisX = this.parent.x + this._x, thisY = this.parent.y + this._y, otherX = other.parent.x + other.getX(), otherY = other.parent.y + other.getY(), entityDistX = thisX - otherX, entityDistY = thisY - otherY;
		var minx = Math.floor((entityDistX - this._radius) / (other._tile.width | 0)), miny = Math.floor((entityDistY - this._radius) / (other._tile.height | 0)), maxx = Math.ceil((entityDistX + this._radius) / (other._tile.width | 0)), maxy = Math.ceil((entityDistY + this._radius) / (other._tile.height | 0));
		if(minx < 0) minx = 0;
		if(miny < 0) miny = 0;
		if(maxx > other.columns) maxx = other.columns;
		if(maxy > other.rows) maxy = other.rows;
		var midx = Math.floor((maxx + minx) / 2), midy = Math.floor((maxy + miny) / 2), dx, dy;
		var _g = minx;
		while(_g < maxx) {
			var xx = _g++;
			var _g1 = miny;
			while(_g1 < maxy) {
				var yy = _g1++;
				if(other.getTile(xx,yy)) {
					if(xx <= midx) {
						if(yy <= midy) {
							dx = entityDistX - (xx + 1) * (other._tile.width | 0);
							dy = entityDistX - (yy + 1) * (other._tile.height | 0);
							if(dx * dx + dy * dy < this._squaredRadius) return true;
						} else {
							dx = entityDistX - (xx + 1) * (other._tile.width | 0);
							dy = entityDistX - yy * (other._tile.height | 0);
							if(dx * dx + dy * dy < this._squaredRadius) return true;
						}
					} else if(yy <= midy) {
						dx = entityDistX - xx * (other._tile.width | 0);
						dy = entityDistX - (yy + 1) * (other._tile.height | 0);
						if(dx * dx + dy * dy < this._squaredRadius) return true;
					} else {
						dx = entityDistX - xx * (other._tile.width | 0);
						dy = entityDistX - yy * (other._tile.height | 0);
						if(dx * dx + dy * dy < this._squaredRadius) return true;
					}
					return true;
				}
			}
		}
		return false;
	}
	,collideCircle: function(other) {
		var dx = this.parent.x + this._x - (other.parent.x + other._x);
		var dy = this.parent.y + this._y - (other.parent.y + other._y);
		return dx * dx + dy * dy < Math.pow(this._radius + other._radius,2);
	}
	,collideMask: function(other) {
		var distanceX = Math.abs(this.parent.x + this._x - other.parent.x - other.parent.width * 0.5), distanceY = Math.abs(this.parent.y + this._y - other.parent.y - other.parent.height * 0.5);
		if(distanceX > other.parent.width * 0.5 + this._radius || distanceY > other.parent.height * 0.5 + this._radius) return false;
		if(distanceX <= other.parent.width * 0.5 || distanceY <= other.parent.height * 0.5) return true;
		var distanceToCorner = (distanceX - other.parent.width * 0.5) * (distanceX - other.parent.width * 0.5) + (distanceY - other.parent.height * 0.5) * (distanceY - other.parent.height * 0.5);
		return distanceToCorner <= this._squaredRadius;
	}
	,__class__: com.haxepunk.masks.Circle
	,__properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__,{set_radius:"setRadius",get_radius:"getRadius"})
});
com.haxepunk.masks.Grid = function(width,height,tileWidth,tileHeight,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	com.haxepunk.masks.Hitbox.call(this);
	if(width == 0 || height == 0 || tileWidth == 0 || tileHeight == 0) throw "Illegal Grid, sizes cannot be 0.";
	this._rect = com.haxepunk.HXP.rect;
	this._point = com.haxepunk.HXP.point;
	this._point2 = com.haxepunk.HXP.point2;
	this.columns = width / tileWidth | 0;
	this.rows = height / tileHeight | 0;
	this._tile = new browser.geom.Rectangle(0,0,tileWidth,tileHeight);
	this._x = x;
	this._y = y;
	this._width = width;
	this._height = height;
	this.usePositions = false;
	this._check.set(Type.getClassName(com.haxepunk.Mask),$bind(this,this.collideMask));
	this._check.set(Type.getClassName(com.haxepunk.masks.Hitbox),$bind(this,this.collideHitbox));
	this._check.set(Type.getClassName(com.haxepunk.masks.Pixelmask),$bind(this,this.collidePixelmask));
	this.data = new Array();
	var _g1 = 0, _g = this.rows;
	while(_g1 < _g) {
		var x1 = _g1++;
		this.data.push(new Array());
	}
};
$hxClasses["com.haxepunk.masks.Grid"] = com.haxepunk.masks.Grid;
com.haxepunk.masks.Grid.__name__ = ["com","haxepunk","masks","Grid"];
com.haxepunk.masks.Grid.__super__ = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Grid.prototype = $extend(com.haxepunk.masks.Hitbox.prototype,{
	_point2: null
	,_point: null
	,_rect: null
	,_tile: null
	,squareProjection: function(axis,point) {
		if(axis.x < axis.y) {
			point.x = axis.x;
			point.y = axis.y;
		} else {
			point.y = axis.x;
			point.x = axis.y;
		}
	}
	,debugDraw: function(graphics,scaleX,scaleY) {
		com.haxepunk.HXP.point.x = this._x + this.parent.x - com.haxepunk.HXP.camera.x;
		com.haxepunk.HXP.point.y = this._y + this.parent.y - com.haxepunk.HXP.camera.y;
		var color = -16776961;
		com.haxepunk.HXP.buffer.lock();
		var _g1 = 1, _g = this.columns;
		while(_g1 < _g) {
			var i = _g1++;
			com.haxepunk.HXP.rect.x = com.haxepunk.HXP.point.x + i * (this._tile.width | 0);
			com.haxepunk.HXP.rect.y = com.haxepunk.HXP.point.y;
			com.haxepunk.HXP.rect.width = 1;
			com.haxepunk.HXP.rect.height = this._height;
			com.haxepunk.HXP.buffer.fillRect(com.haxepunk.HXP.rect,color);
		}
		var _g1 = 1, _g = this.rows;
		while(_g1 < _g) {
			var i = _g1++;
			com.haxepunk.HXP.rect.x = com.haxepunk.HXP.point.x;
			com.haxepunk.HXP.rect.y = com.haxepunk.HXP.point.y + i * (this._tile.height | 0);
			com.haxepunk.HXP.rect.width = this._width;
			com.haxepunk.HXP.rect.height = 1;
			com.haxepunk.HXP.buffer.fillRect(com.haxepunk.HXP.rect,color);
		}
		com.haxepunk.HXP.rect.width = this._tile.width | 0;
		com.haxepunk.HXP.rect.height = this._tile.height | 0;
		var _g1 = 0, _g = this.rows;
		while(_g1 < _g) {
			var y = _g1++;
			com.haxepunk.HXP.rect.y = com.haxepunk.HXP.point.y + y * (this._tile.height | 0);
			var _g3 = 0, _g2 = this.columns;
			while(_g3 < _g2) {
				var x = _g3++;
				com.haxepunk.HXP.rect.x = com.haxepunk.HXP.point.x + x * (this._tile.width | 0);
				if(this.data[y][x]) com.haxepunk.HXP.buffer.fillRect(com.haxepunk.HXP.rect,color);
			}
		}
		com.haxepunk.HXP.buffer.unlock();
	}
	,collidePixelmask: function(other) {
		haxe.Log.trace("Pixelmasks will not work in targets other than flash due to hittest not being implemented in NME.",{ fileName : "Grid.hx", lineNumber : 332, className : "com.haxepunk.masks.Grid", methodName : "collidePixelmask"});
		return false;
	}
	,collideHitbox: function(other) {
		var rectX, rectY, pointX, pointY;
		this._rect.x = other.parent.x - other._x - this.parent.x + this._x;
		this._rect.y = other.parent.y - other._y - this.parent.y + this._y;
		pointX = ((this._rect.x + other._width - 1) / this._tile.width | 0) + 1;
		pointY = ((this._rect.y + other._height - 1) / this._tile.height | 0) + 1;
		rectX = this._rect.x / this._tile.width | 0;
		rectY = this._rect.y / this._tile.height | 0;
		var _g = rectY;
		while(_g < pointY) {
			var dy = _g++;
			var _g1 = rectX;
			while(_g1 < pointX) {
				var dx = _g1++;
				if(this.getTile(dx,dy)) return true;
			}
		}
		return false;
	}
	,collideMask: function(other) {
		var rectX, rectY, pointX, pointY;
		this._rect.x = other.parent.x - other.parent.originX - this.parent.x + this.parent.originX;
		this._rect.y = other.parent.y - other.parent.originY - this.parent.y + this.parent.originY;
		pointX = ((this._rect.x + other.parent.width - 1) / this._tile.width | 0) + 1;
		pointY = ((this._rect.y + other.parent.height - 1) / this._tile.height | 0) + 1;
		rectX = this._rect.x / this._tile.width | 0;
		rectY = this._rect.y / this._tile.height | 0;
		var _g = rectY;
		while(_g < pointY) {
			var dy = _g++;
			var _g1 = rectX;
			while(_g1 < pointX) {
				var dx = _g1++;
				if(this.getTile(dx,dy)) return true;
			}
		}
		return false;
	}
	,data: null
	,rows: null
	,columns: null
	,getTileHeight: function() {
		return this._tile.height | 0;
	}
	,tileHeight: null
	,getTileWidth: function() {
		return this._tile.width | 0;
	}
	,tileWidth: null
	,saveToString: function(columnSep,rowSep) {
		if(rowSep == null) rowSep = "\n";
		if(columnSep == null) columnSep = ",";
		var s = "", x, y;
		var _g1 = 0, _g = this.rows;
		while(_g1 < _g) {
			var y1 = _g1++;
			var _g3 = 0, _g2 = this.columns;
			while(_g3 < _g2) {
				var x1 = _g3++;
				s += Std.string(this.getTile(x1,y1));
				if(x1 != this.columns - 1) s += columnSep;
			}
			if(y1 != this.rows - 1) s += rowSep;
		}
		return s;
	}
	,loadFromString: function(str,columnSep,rowSep) {
		if(rowSep == null) rowSep = "\n";
		if(columnSep == null) columnSep = ",";
		var row = str.split(rowSep), rows = row.length, col, cols, x, y;
		var _g = 0;
		while(_g < rows) {
			var y1 = _g++;
			if(row[y1] == "") continue;
			col = row[y1].split(columnSep);
			cols = col.length;
			var _g1 = 0;
			while(_g1 < cols) {
				var x1 = _g1++;
				if(col[x1] == "") continue;
				this.setTile(x1,y1,Std.parseInt(col[x1]) > 0);
			}
		}
	}
	,clearRect: function(column,row,width,height) {
		if(height == null) height = 1;
		if(width == null) width = 1;
		if(row == null) row = 0;
		if(column == null) column = 0;
		this.setRect(column,row,width,height,false);
	}
	,setRect: function(column,row,width,height,solid) {
		if(solid == null) solid = true;
		if(height == null) height = 1;
		if(width == null) width = 1;
		if(row == null) row = 0;
		if(column == null) column = 0;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
			width = width / this._tile.width | 0;
			height = height / this._tile.height | 0;
		}
		var _g1 = row, _g = row + height;
		while(_g1 < _g) {
			var yy = _g1++;
			var _g3 = column, _g2 = column + width;
			while(_g3 < _g2) {
				var xx = _g3++;
				this.setTile(xx,yy,solid);
			}
		}
	}
	,getTile: function(column,row) {
		if(row == null) row = 0;
		if(column == null) column = 0;
		if(!(column < 0 || column > this.columns - 1 || row < 0 || row > this.rows - 1?false:true)) return false;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
		}
		return this.data[row][column];
	}
	,checkTile: function(column,row) {
		if(column < 0 || column > this.columns - 1 || row < 0 || row > this.rows - 1) return false; else return true;
	}
	,clearTile: function(column,row) {
		if(row == null) row = 0;
		if(column == null) column = 0;
		this.setTile(column,row,false);
	}
	,setTile: function(column,row,solid) {
		if(solid == null) solid = true;
		if(row == null) row = 0;
		if(column == null) column = 0;
		if(!(column < 0 || column > this.columns - 1 || row < 0 || row > this.rows - 1?false:true)) return;
		if(this.usePositions) {
			column = column / this._tile.width | 0;
			row = row / this._tile.height | 0;
		}
		this.data[row][column] = solid;
	}
	,usePositions: null
	,__class__: com.haxepunk.masks.Grid
	,__properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__,{get_tileWidth:"getTileWidth",get_tileHeight:"getTileHeight"})
});
com.haxepunk.masks.Masklist = function(masks) {
	com.haxepunk.masks.Hitbox.call(this);
	this._masks = new Array();
	this._temp = new Array();
	this._count = 0;
	var _g = 0;
	while(_g < masks.length) {
		var m = masks[_g];
		++_g;
		this.add(m);
	}
};
$hxClasses["com.haxepunk.masks.Masklist"] = com.haxepunk.masks.Masklist;
com.haxepunk.masks.Masklist.__name__ = ["com","haxepunk","masks","Masklist"];
com.haxepunk.masks.Masklist.__super__ = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Masklist.prototype = $extend(com.haxepunk.masks.Hitbox.prototype,{
	_count: null
	,_temp: null
	,_masks: null
	,getCount: function() {
		return this._count;
	}
	,count: null
	,debugDraw: function(graphics,scaleX,scaleY) {
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			m.debugDraw(graphics,scaleX,scaleY);
		}
	}
	,update: function() {
		var t = 0, l = 0, r = 0, b = 0, h;
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if((h = js.Boot.__cast(m , com.haxepunk.masks.Hitbox)) != null) {
				if(h.getX() < l) l = h.getX();
				if(h.getY() < t) t = h.getY();
				if(h.getX() + h.getWidth() > r) r = h.getX() + h.getWidth();
				if(h.getY() + h.getHeight() > b) b = h.getY() + h.getHeight();
			}
		}
		this._x = l;
		this._y = t;
		this._width = r - l;
		this._height = b - t;
		com.haxepunk.masks.Hitbox.prototype.update.call(this);
	}
	,assignTo: function(parent) {
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			m.parent = parent;
		}
		com.haxepunk.masks.Hitbox.prototype.assignTo.call(this,parent);
	}
	,getMask: function(index) {
		if(index == null) index = 0;
		return this._masks[index % this._masks.length];
	}
	,removeAll: function() {
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			m.list = null;
		}
		this._count = 0;
		this._masks.length = 0;
		this._temp.length = 0;
		this.update();
	}
	,removeAt: function(index) {
		if(index == null) index = 0;
		this._temp.length = 0;
		var i = this._masks.length;
		index %= i;
		while(i-- > 0) if(i == index) {
			this._masks[index].list = null;
			this._count--;
			this.update();
		} else this._temp[this._temp.length] = this._masks[index];
		var temp = this._masks;
		this._masks = this._temp;
		this._temp = temp;
	}
	,remove: function(mask) {
		if(Lambda.indexOf(this._masks,mask) < 0) return mask;
		this._temp.length = 0;
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m == mask) {
				mask.list = null;
				mask.parent = null;
				this._count--;
				this.update();
			} else this._temp[this._temp.length] = m;
		}
		var temp = this._masks;
		this._masks = this._temp;
		this._temp = temp;
		return mask;
	}
	,add: function(mask) {
		this._masks[this._count++] = mask;
		mask.list = this;
		mask.parent = this.parent;
		this.update();
		return mask;
	}
	,collideMasklist: function(other) {
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = other._masks;
			while(_g2 < _g3.length) {
				var b = _g3[_g2];
				++_g2;
				if(a.collide(b)) return true;
			}
		}
		return true;
	}
	,collide: function(mask) {
		var _g = 0, _g1 = this._masks;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			if(m.collide(mask)) return true;
		}
		return false;
	}
	,__class__: com.haxepunk.masks.Masklist
	,__properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__,{get_count:"getCount"})
});
com.haxepunk.masks.Pixelmask = function(source,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	com.haxepunk.masks.Hitbox.call(this);
	if(js.Boot.__instanceof(source,browser.display.BitmapData)) this._data = source; else this._data = com.haxepunk.HXP.getBitmap(source);
	if(this._data == null) throw "Invalid Pixelmask source image.";
	this.threshold = 1;
	this._rect = com.haxepunk.HXP.rect;
	this._point = com.haxepunk.HXP.point;
	this._point2 = com.haxepunk.HXP.point2;
	this._width = this.getData().get_width();
	this._height = this.getData().get_height();
	this._x = x;
	this._y = y;
	this._check.set(Type.getClassName(com.haxepunk.Mask),$bind(this,this.collideMask));
	this._check.set(Type.getClassName(com.haxepunk.masks.Pixelmask),$bind(this,this.collidePixelmask));
	this._check.set(Type.getClassName(com.haxepunk.masks.Hitbox),$bind(this,this.collideHitbox));
};
$hxClasses["com.haxepunk.masks.Pixelmask"] = com.haxepunk.masks.Pixelmask;
com.haxepunk.masks.Pixelmask.__name__ = ["com","haxepunk","masks","Pixelmask"];
com.haxepunk.masks.Pixelmask.__super__ = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Pixelmask.prototype = $extend(com.haxepunk.masks.Hitbox.prototype,{
	_point2: null
	,_point: null
	,_rect: null
	,_data: null
	,setData: function(value) {
		this._data = value;
		this._width = value._nmeTextureBuffer != null?value._nmeTextureBuffer.width:0;
		this._height = value._nmeTextureBuffer != null?value._nmeTextureBuffer.height:0;
		this.update();
		return this._data;
	}
	,getData: function() {
		return this._data;
	}
	,data: null
	,collidePixelmask: function(other) {
		this._point.x = this.parent.x + this._x;
		this._point.y = this.parent.y + this._y;
		this._point2.x = other.parent.x + other._x;
		this._point2.y = other.parent.y + other._y;
		return false;
	}
	,collideHitbox: function(other) {
		this._point.x = this.parent.x + this._x;
		this._point.y = this.parent.y + this._y;
		this._rect.x = other.parent.x + other._x;
		this._rect.y = other.parent.y + other._y;
		this._rect.width = other._width;
		this._rect.height = other._height;
		return false;
	}
	,collideMask: function(other) {
		this._point.x = this.parent.x + this._x;
		this._point.y = this.parent.y + this._y;
		this._rect.x = other.parent.x - other.parent.originX;
		this._rect.y = other.parent.y - other.parent.originY;
		this._rect.width = other.parent.width;
		this._rect.height = other.parent.height;
		return false;
	}
	,threshold: null
	,__class__: com.haxepunk.masks.Pixelmask
	,__properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__,{set_data:"setData",get_data:"getData"})
});
com.haxepunk.math = {}
com.haxepunk.math.Vector = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	browser.geom.Point.call(this,x,y);
};
$hxClasses["com.haxepunk.math.Vector"] = com.haxepunk.math.Vector;
com.haxepunk.math.Vector.__name__ = ["com","haxepunk","math","Vector"];
com.haxepunk.math.Vector.__super__ = browser.geom.Point;
com.haxepunk.math.Vector.prototype = $extend(browser.geom.Point.prototype,{
	dot: function(p) {
		return this.x * p.x + this.y * p.y;
	}
	,__class__: com.haxepunk.math.Vector
});
com.haxepunk.math.Projection = function() {
	this.max = this.min = 0;
};
$hxClasses["com.haxepunk.math.Projection"] = com.haxepunk.math.Projection;
com.haxepunk.math.Projection.__name__ = ["com","haxepunk","math","Projection"];
com.haxepunk.math.Projection.prototype = {
	toString: function() {
		return "[ " + this.min + ", " + this.max + " ]";
	}
	,getOverlap: function(other) {
		return this.max > other.max?this.max - other.min:other.max - this.min;
	}
	,overlaps: function(other) {
		return this.min > other.max || this.max < other.min;
	}
	,min: null
	,max: null
	,__class__: com.haxepunk.math.Projection
}
com.haxepunk.masks.Polygon = function(points,origin) {
	com.haxepunk.masks.Hitbox.call(this);
	this._points = points;
	this._check.set(Type.getClassName(com.haxepunk.masks.Hitbox),$bind(this,this.collideHitbox));
	this._check.set(Type.getClassName(com.haxepunk.masks.Circle),$bind(this,this.collideCircle));
	this._check.set(Type.getClassName(com.haxepunk.masks.Polygon),$bind(this,this.collidePolygon));
	this._check.set(Type.getClassName(com.haxepunk.masks.Grid),$bind(this,this.collideGrid));
	this.origin = origin != null?origin:new browser.geom.Point();
	this._angle = 0;
	this.generateAxes();
	this.removeDuplicateAxes();
	this.update();
};
$hxClasses["com.haxepunk.masks.Polygon"] = com.haxepunk.masks.Polygon;
com.haxepunk.masks.Polygon.__name__ = ["com","haxepunk","masks","Polygon"];
com.haxepunk.masks.Polygon.createPolygon = function(sides,radius,angle) {
	if(angle == null) angle = 0;
	if(radius == null) radius = 100;
	if(sides == null) sides = 3;
	if(sides < 3) throw "The polygon needs at least 3 sides";
	var rotationAngle = Math.PI * 2 / sides;
	var points = new Array();
	var _g = 0;
	while(_g < sides) {
		var ii = _g++;
		var tempAngle = ii * rotationAngle;
		var p = new browser.geom.Point();
		p.x = Math.cos(tempAngle) * radius;
		p.y = Math.sin(tempAngle) * radius;
		points.push(p);
	}
	var poly = new com.haxepunk.masks.Polygon(points);
	poly.setAngle(angle);
	return poly;
}
com.haxepunk.masks.Polygon.createFromArray = function(points) {
	var p = new Array();
	var ii = 0;
	while(ii < points.length) p.push(new browser.geom.Point(points[ii++],points[ii++]));
	return new com.haxepunk.masks.Polygon(p);
}
com.haxepunk.masks.Polygon.__super__ = com.haxepunk.masks.Hitbox;
com.haxepunk.masks.Polygon.prototype = $extend(com.haxepunk.masks.Hitbox.prototype,{
	_axes: null
	,_points: null
	,_angle: null
	,updateAxes: function() {
		this.generateAxes();
		this.removeDuplicateAxes();
		this.update();
	}
	,update: function() {
		this.project(com.haxepunk.masks.Polygon.horizontal,com.haxepunk.masks.Polygon.firstProj);
		this._x = Math.ceil(com.haxepunk.masks.Polygon.firstProj.min);
		this._width = Math.ceil(com.haxepunk.masks.Polygon.firstProj.max - com.haxepunk.masks.Polygon.firstProj.min);
		this.project(com.haxepunk.masks.Polygon.vertical,com.haxepunk.masks.Polygon.secondProj);
		this._y = Math.ceil(com.haxepunk.masks.Polygon.secondProj.min);
		this._height = Math.ceil(com.haxepunk.masks.Polygon.secondProj.max - com.haxepunk.masks.Polygon.secondProj.min);
		if(this.parent != null) {
			this.parent.width = this._width;
			this.parent.height = this._height;
			this.parent.originX = (this._width - com.haxepunk.masks.Polygon.firstProj.max - com.haxepunk.masks.Polygon.firstProj.min) / 2 | 0;
			this.parent.originY = (this._height - com.haxepunk.masks.Polygon.secondProj.max - com.haxepunk.masks.Polygon.secondProj.min) / 2 | 0;
		}
		if(this.list != null) this.list.update();
	}
	,setPoints: function(value) {
		if(this._points == value) return value;
		this._points = value;
		if(this.list != null || this.parent != null) {
			this.generateAxes();
			this.removeDuplicateAxes();
			this.update();
		}
		return this._points;
	}
	,getPoints: function() {
		return this._points;
	}
	,points: null
	,setAngle: function(value) {
		if(value == this._angle) return value;
		this.rotate(this._angle - value);
		if(this.list != null || this.parent != null) this.update();
		return this._angle = value;
	}
	,getAngle: function() {
		return this._angle;
	}
	,angle: null
	,rotate: function(angle) {
		angle *= Math.PI / -180;
		var _g = 0, _g1 = this._points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var dx = p.x - this.origin.x;
			var dy = p.y - this.origin.y;
			var pointAngle = Math.atan2(dy,dx);
			var length = Math.sqrt(dx * dx + dy * dy);
			p.x = Math.cos(pointAngle + angle) * length + this.origin.x;
			p.y = Math.sin(pointAngle + angle) * length + this.origin.y;
		}
		var _g = 0, _g1 = this._axes;
		while(_g < _g1.length) {
			var ax = _g1[_g];
			++_g;
			var axisAngle = Math.atan2(ax.y,ax.x);
			ax.x = Math.cos(axisAngle + angle);
			ax.y = Math.sin(axisAngle + angle);
		}
		this._angle += angle;
	}
	,project: function(axis,projection) {
		var min = axis.dot(this._points[0]), max = min;
		var _g1 = 1, _g = this._points.length;
		while(_g1 < _g) {
			var i = _g1++;
			var cur = axis.dot(this._points[i]);
			if(cur < min) min = cur; else if(cur > max) max = cur;
		}
		projection.min = min;
		projection.max = max;
	}
	,collidePolygon: function(other) {
		var offsetX = this.parent.x - other.parent.x;
		var offsetY = this.parent.y - other.parent.y;
		var _g = 0, _g1 = this._axes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.project(a,com.haxepunk.masks.Polygon.firstProj);
			other.project(a,com.haxepunk.masks.Polygon.secondProj);
			var offset = offsetX * a.x + offsetY * a.y;
			com.haxepunk.masks.Polygon.firstProj.min += offset;
			com.haxepunk.masks.Polygon.firstProj.max += offset;
			if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		}
		var _g = 0, _g1 = other._axes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.project(a,com.haxepunk.masks.Polygon.firstProj);
			other.project(a,com.haxepunk.masks.Polygon.secondProj);
			var offset = offsetX * a.x + offsetY * a.y;
			com.haxepunk.masks.Polygon.firstProj.min += offset;
			com.haxepunk.masks.Polygon.firstProj.max += offset;
			if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		}
		return true;
	}
	,collideMask: function(other) {
		var offset, offsetX = this.parent.x - other.parent.x, offsetY = this.parent.y - other.parent.y;
		this.project(com.haxepunk.masks.Polygon.vertical,com.haxepunk.masks.Polygon.firstProj);
		other.project(com.haxepunk.masks.Polygon.vertical,com.haxepunk.masks.Polygon.secondProj);
		com.haxepunk.masks.Polygon.firstProj.min += offsetX;
		com.haxepunk.masks.Polygon.firstProj.max += offsetY;
		if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		this.project(com.haxepunk.masks.Polygon.horizontal,com.haxepunk.masks.Polygon.firstProj);
		other.project(com.haxepunk.masks.Polygon.horizontal,com.haxepunk.masks.Polygon.secondProj);
		com.haxepunk.masks.Polygon.firstProj.min += offsetX;
		com.haxepunk.masks.Polygon.firstProj.max += offsetX;
		if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		var _g = 0, _g1 = this._axes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.project(a,com.haxepunk.masks.Polygon.firstProj);
			other.project(a,com.haxepunk.masks.Polygon.secondProj);
			var offset1 = offsetX * a.x + offsetY * a.y;
			com.haxepunk.masks.Polygon.firstProj.min += offset1;
			com.haxepunk.masks.Polygon.firstProj.max += offset1;
			if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		}
		return true;
	}
	,collideHitbox: function(hitbox) {
		var offset, offsetX = this.parent.x - hitbox.parent.x, offsetY = this.parent.y - hitbox.parent.y;
		this.project(com.haxepunk.masks.Polygon.vertical,com.haxepunk.masks.Polygon.firstProj);
		hitbox.project(com.haxepunk.masks.Polygon.vertical,com.haxepunk.masks.Polygon.secondProj);
		com.haxepunk.masks.Polygon.firstProj.min += offsetY;
		com.haxepunk.masks.Polygon.firstProj.max += offsetY;
		if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		this.project(com.haxepunk.masks.Polygon.horizontal,com.haxepunk.masks.Polygon.firstProj);
		hitbox.project(com.haxepunk.masks.Polygon.horizontal,com.haxepunk.masks.Polygon.secondProj);
		com.haxepunk.masks.Polygon.firstProj.min += offsetX;
		com.haxepunk.masks.Polygon.firstProj.max += offsetX;
		if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		var _g = 0, _g1 = this._axes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.project(a,com.haxepunk.masks.Polygon.firstProj);
			hitbox.project(a,com.haxepunk.masks.Polygon.secondProj);
			offset = offsetX * a.x + offsetY * a.y;
			com.haxepunk.masks.Polygon.firstProj.min += offset;
			com.haxepunk.masks.Polygon.firstProj.max += offset;
			if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		}
		return true;
	}
	,collideCircle: function(circle) {
		var offset;
		var distanceSquared = 179 * Math.pow(10,306);
		var closestPoint = null;
		var _g = 0, _g1 = this._points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var dx = this.parent.x + p.x - circle.parent.x - circle._radius;
			var dy = this.parent.y + p.y - circle.parent.y - circle._radius;
			var tempDistance = dx * dx + dy * dy;
			if(tempDistance < distanceSquared) {
				distanceSquared = tempDistance;
				closestPoint = p;
			}
		}
		var offsetX = this.parent.x - circle.parent.x - circle._radius;
		var offsetY = this.parent.y - circle.parent.y - circle._radius;
		com.haxepunk.masks.Polygon._axis.x = circle.parent.y - this.parent.y + closestPoint.y;
		com.haxepunk.masks.Polygon._axis.y = this.parent.x + closestPoint.x - circle.parent.x;
		com.haxepunk.masks.Polygon._axis.normalize(1);
		this.project(com.haxepunk.masks.Polygon._axis,com.haxepunk.masks.Polygon.firstProj);
		circle.project(com.haxepunk.masks.Polygon._axis,com.haxepunk.masks.Polygon.secondProj);
		offset = offsetX * com.haxepunk.masks.Polygon._axis.x + offsetY * com.haxepunk.masks.Polygon._axis.y;
		com.haxepunk.masks.Polygon.firstProj.min += offset;
		com.haxepunk.masks.Polygon.firstProj.max += offset;
		if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		var _g = 0, _g1 = this._axes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.project(a,com.haxepunk.masks.Polygon.firstProj);
			circle.project(a,com.haxepunk.masks.Polygon.secondProj);
			offset = offsetX * a.x + offsetY * a.y;
			com.haxepunk.masks.Polygon.firstProj.min += offset;
			com.haxepunk.masks.Polygon.firstProj.max += offset;
			if(com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return false;
		}
		return true;
	}
	,collideGrid: function(grid) {
		var _g1 = 0, _g = this._points.length - 1;
		while(_g1 < _g) {
			var ii = _g1++;
			var p1X = (this.parent.x + this._points[ii].x) / (grid._tile.width | 0);
			var p1Y = (this.parent.y + this._points[ii].y) / (grid._tile.height | 0);
			var p2X = (this.parent.x + this._points[ii + 1].x) / (grid._tile.width | 0);
			var p2Y = (this.parent.y + this._points[ii + 1].y) / (grid._tile.height | 0);
			var k = (p2Y - p1Y) / (p2X - p1X);
			var m = p1Y - k * p1X;
			var min;
			var max;
			if(p2X > p1X) {
				min = p1X;
				max = p2X;
			} else {
				max = p1X;
				min = p2X;
			}
			var x = min;
			while(x < max) {
				var y = k * x + m | 0;
				if(grid.getTile(x | 0,y)) return true;
				x++;
			}
		}
		var p1X = (this.parent.x + this._points[this._points.length - 1].x) / (grid._tile.width | 0);
		var p1Y = (this.parent.y + this._points[this._points.length - 1].y) / (grid._tile.height | 0);
		var p2X = (this.parent.x + this._points[0].x) / (grid._tile.width | 0);
		var p2Y = (this.parent.y + this._points[0].y) / (grid._tile.height | 0);
		var k = (p2Y - p1Y) / (p2X - p1X);
		var m = p1Y - k * p1X;
		var min;
		var max;
		if(p2X > p1X) {
			min = p1X;
			max = p2X;
		} else {
			max = p1X;
			min = p2X;
		}
		var x = min;
		while(x < max) {
			var y = k * x + m | 0;
			if(grid.getTile(x | 0,y)) return true;
			x++;
		}
		return false;
	}
	,removeDuplicateAxes: function() {
		var _g1 = 0, _g = this._axes.length;
		while(_g1 < _g) {
			var ii = _g1++;
			var _g3 = 0, _g2 = this._axes.length;
			while(_g3 < _g2) {
				var jj = _g3++;
				if(ii == jj || Math.max(ii,jj) >= this._axes.length) continue;
				if(this._axes[ii].x == this._axes[jj].x && this._axes[ii].y == this._axes[jj].y || -this._axes[ii].x == this._axes[jj].x && -this._axes[ii].y == this._axes[jj].y) this._axes.splice(jj,1);
			}
		}
	}
	,generateAxes: function() {
		this._axes = new Array();
		var store;
		var numberOfPoints = this._points.length - 1;
		var _g = 0;
		while(_g < numberOfPoints) {
			var i = _g++;
			var edge = new com.haxepunk.math.Vector();
			edge.x = this._points[i].x - this._points[i + 1].x;
			edge.y = this._points[i].y - this._points[i + 1].y;
			store = edge.y;
			edge.y = -edge.x;
			edge.x = store;
			edge.normalize(1);
			this._axes.push(edge);
		}
		var edge = new com.haxepunk.math.Vector();
		edge.x = this._points[numberOfPoints].x - this._points[0].x;
		edge.y = this._points[numberOfPoints].y - this._points[0].y;
		store = edge.y;
		edge.y = -edge.x;
		edge.x = store;
		edge.normalize(1);
		this._axes.push(edge);
	}
	,origin: null
	,__class__: com.haxepunk.masks.Polygon
	,__properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__,{set_angle:"setAngle",get_angle:"getAngle",set_points:"setPoints",get_points:"getPoints"})
});
com.haxepunk.tweens = {}
com.haxepunk.tweens.TweenEvent = function(inType,inBubbles,inCancelable) {
	browser.events.Event.call(this,inType,inBubbles,inCancelable);
};
$hxClasses["com.haxepunk.tweens.TweenEvent"] = com.haxepunk.tweens.TweenEvent;
com.haxepunk.tweens.TweenEvent.__name__ = ["com","haxepunk","tweens","TweenEvent"];
com.haxepunk.tweens.TweenEvent.__super__ = browser.events.Event;
com.haxepunk.tweens.TweenEvent.prototype = $extend(browser.events.Event.prototype,{
	__class__: com.haxepunk.tweens.TweenEvent
});
com.haxepunk.tweens.misc = {}
com.haxepunk.tweens.misc.MultiVarTween = function(complete,type) {
	this._vars = new Array();
	this._start = new Array();
	this._range = new Array();
	com.haxepunk.Tween.call(this,0,type,complete);
};
$hxClasses["com.haxepunk.tweens.misc.MultiVarTween"] = com.haxepunk.tweens.misc.MultiVarTween;
com.haxepunk.tweens.misc.MultiVarTween.__name__ = ["com","haxepunk","tweens","misc","MultiVarTween"];
com.haxepunk.tweens.misc.MultiVarTween.__super__ = com.haxepunk.Tween;
com.haxepunk.tweens.misc.MultiVarTween.prototype = $extend(com.haxepunk.Tween.prototype,{
	_range: null
	,_start: null
	,_vars: null
	,_object: null
	,update: function() {
		com.haxepunk.Tween.prototype.update.call(this);
		var i = this._vars.length;
		var setter;
		setter = Reflect.setProperty;
		while(i-- > 0) setter(this._object,this._vars[i],this._start[i] + this._range[i] * this._t);
	}
	,tween: function(object,properties,duration,ease) {
		this._object = object;
		this._vars.length = 0;
		this._start.length = 0;
		this._range.length = 0;
		this._target = duration;
		this._ease = ease;
		var p;
		var fields = null;
		if(Reflect.isObject(properties)) fields = Reflect.fields(properties); else throw "Unsupported MultiVar properties container - use Object containing key/value pairs.";
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			var a = Reflect.getProperty(object,p1);
			if(Math.isNaN(a)) throw "The property \"" + p1 + "\" is not numeric.";
			this._vars.push(p1);
			this._start.push(a);
			this._range.push(Reflect.field(properties,p1) - a);
		}
		this.start();
	}
	,__class__: com.haxepunk.tweens.misc.MultiVarTween
});
com.haxepunk.utils = {}
com.haxepunk.utils.Draw = function() { }
$hxClasses["com.haxepunk.utils.Draw"] = com.haxepunk.utils.Draw;
com.haxepunk.utils.Draw.__name__ = ["com","haxepunk","utils","Draw"];
com.haxepunk.utils.Draw.blend = null;
com.haxepunk.utils.Draw.setTarget = function(target,camera,blend) {
	com.haxepunk.utils.Draw._target = target;
	com.haxepunk.utils.Draw._camera = camera != null?camera:com.haxepunk.HXP.zero;
	com.haxepunk.utils.Draw.blend = blend;
}
com.haxepunk.utils.Draw.resetTarget = function() {
	com.haxepunk.utils.Draw._target = com.haxepunk.HXP.buffer;
	com.haxepunk.utils.Draw._camera = com.haxepunk.HXP.camera;
	com.haxepunk.utils.Draw.blend = null;
}
com.haxepunk.utils.Draw.drawToScreen = function() {
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.line = function(x1,y1,x2,y2,color) {
	if(color == null) color = 16777215;
	if(color < -16777216) color = -16777216 | color;
	var screen = com.haxepunk.utils.Draw._target, X = Math.abs(x2 - x1), Y = Math.abs(y2 - y1), xx, yy;
	x1 = com.haxepunk.HXP.clamp(x1 - com.haxepunk.utils.Draw._camera.x,0,(screen._nmeTextureBuffer != null?screen._nmeTextureBuffer.width:0) - 1) | 0;
	y1 = com.haxepunk.HXP.clamp(y1 - com.haxepunk.utils.Draw._camera.y,0,(screen._nmeTextureBuffer != null?screen._nmeTextureBuffer.height:0) - 1) | 0;
	x2 = com.haxepunk.HXP.clamp(x2 - com.haxepunk.utils.Draw._camera.x,0,(screen._nmeTextureBuffer != null?screen._nmeTextureBuffer.width:0) - 1) | 0;
	y2 = com.haxepunk.HXP.clamp(y2 - com.haxepunk.utils.Draw._camera.y,0,(screen._nmeTextureBuffer != null?screen._nmeTextureBuffer.height:0) - 1) | 0;
	if(X == 0) {
		if(Y == 0) {
			screen.setPixel32(x1,y1,color);
			return;
		}
		yy = y2 > y1?1:-1;
		while(y1 != y2) {
			screen.setPixel32(x1,y1,color);
			y1 += yy;
		}
		screen.setPixel32(x2,y2,color);
		return;
	}
	if(Y == 0) {
		xx = x2 > x1?1:-1;
		while(x1 != x2) {
			screen.setPixel32(x1,y1,color);
			x1 += xx;
		}
		screen.setPixel32(x2,y2,color);
		return;
	}
	xx = x2 > x1?1:-1;
	yy = y2 > y1?1:-1;
	var c = 0, slope;
	if(X > Y) {
		slope = Y / X;
		c = .5;
		while(x1 != x2) {
			screen.setPixel32(x1,y1,color);
			x1 += xx;
			c += slope;
			if(c >= 1) {
				y1 += yy;
				c -= 1;
			}
		}
		screen.setPixel32(x2,y2,color);
	} else {
		slope = X / Y;
		c = .5;
		while(y1 != y2) {
			screen.setPixel32(x1,y1,color);
			y1 += yy;
			c += slope;
			if(c >= 1) {
				x1 += xx;
				c -= 1;
			}
		}
		screen.setPixel32(x2,y2,color);
	}
}
com.haxepunk.utils.Draw.linePlus = function(x1,y1,x2,y2,color,alpha,thick) {
	if(thick == null) thick = 1;
	if(alpha == null) alpha = 1;
	if(color == null) color = -16777216;
	com.haxepunk.utils.Draw._graphics.clear();
	com.haxepunk.utils.Draw._graphics.lineStyle(thick,color,alpha,false,browser.display.LineScaleMode.NONE);
	com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x,y1 - com.haxepunk.utils.Draw._camera.y);
	com.haxepunk.utils.Draw._graphics.lineTo(x2 - com.haxepunk.utils.Draw._camera.x,y2 - com.haxepunk.utils.Draw._camera.y);
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.rect = function(x,y,width,height,color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 16777215;
	if(alpha >= 1 && com.haxepunk.utils.Draw.blend == null) {
		if(color < -16777216) color = -16777216 | color;
		com.haxepunk.utils.Draw._rect.x = x - com.haxepunk.utils.Draw._camera.x;
		com.haxepunk.utils.Draw._rect.y = y - com.haxepunk.utils.Draw._camera.y;
		com.haxepunk.utils.Draw._rect.width = width;
		com.haxepunk.utils.Draw._rect.height = height;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		return;
	}
	if(color >= -16777216) color = 16777215 & color;
	com.haxepunk.utils.Draw._graphics.clear();
	com.haxepunk.utils.Draw._graphics.beginFill(color,alpha);
	com.haxepunk.utils.Draw._graphics.drawRect(x - com.haxepunk.utils.Draw._camera.x,y - com.haxepunk.utils.Draw._camera.y,width,height);
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.circle = function(x,y,radius,color) {
	if(color == null) color = 16777215;
	if(color < -16777216) color = -16777216 | color;
	x -= com.haxepunk.utils.Draw._camera.x | 0;
	y -= com.haxepunk.utils.Draw._camera.y | 0;
	var f = 1 - radius, fx = 1, fy = -2 * radius, xx = 0, yy = radius;
	com.haxepunk.utils.Draw._target.setPixel32(x,y + radius,color);
	com.haxepunk.utils.Draw._target.setPixel32(x,y - radius,color);
	com.haxepunk.utils.Draw._target.setPixel32(x + radius,y,color);
	com.haxepunk.utils.Draw._target.setPixel32(x - radius,y,color);
	while(xx < yy) {
		if(f >= 0) {
			yy--;
			fy += 2;
			f += fy;
		}
		xx++;
		fx += 2;
		f += fx;
		com.haxepunk.utils.Draw._target.setPixel32(x + xx,y + yy,color);
		com.haxepunk.utils.Draw._target.setPixel32(x - xx,y + yy,color);
		com.haxepunk.utils.Draw._target.setPixel32(x + xx,y - yy,color);
		com.haxepunk.utils.Draw._target.setPixel32(x - xx,y - yy,color);
		com.haxepunk.utils.Draw._target.setPixel32(x + yy,y + xx,color);
		com.haxepunk.utils.Draw._target.setPixel32(x - yy,y + xx,color);
		com.haxepunk.utils.Draw._target.setPixel32(x + yy,y - xx,color);
		com.haxepunk.utils.Draw._target.setPixel32(x - yy,y - xx,color);
	}
}
com.haxepunk.utils.Draw.circlePlus = function(x,y,radius,color,alpha,fill,thick) {
	if(thick == null) thick = 1;
	if(fill == null) fill = true;
	if(alpha == null) alpha = 1;
	if(color == null) color = 16777215;
	com.haxepunk.utils.Draw._graphics.clear();
	if(fill) {
		com.haxepunk.utils.Draw._graphics.beginFill(color & 16777215,alpha);
		com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x,y - com.haxepunk.utils.Draw._camera.y,radius);
		com.haxepunk.utils.Draw._graphics.endFill();
	} else {
		com.haxepunk.utils.Draw._graphics.lineStyle(thick,color & 16777215,alpha);
		com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x,y - com.haxepunk.utils.Draw._camera.y,radius);
	}
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.hitbox = function(e,outline,color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 16777215;
	if(outline == null) outline = true;
	if(outline) {
		if(color < -16777216) color = -16777216 | color;
		var x = e.x - e.originX - com.haxepunk.utils.Draw._camera.x | 0, y = e.y - e.originY - com.haxepunk.utils.Draw._camera.y | 0;
		com.haxepunk.utils.Draw._rect.x = x;
		com.haxepunk.utils.Draw._rect.y = y;
		com.haxepunk.utils.Draw._rect.width = e.width;
		com.haxepunk.utils.Draw._rect.height = 1;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		com.haxepunk.utils.Draw._rect.y += e.height - 1;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		com.haxepunk.utils.Draw._rect.y = y;
		com.haxepunk.utils.Draw._rect.width = 1;
		com.haxepunk.utils.Draw._rect.height = e.height;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		com.haxepunk.utils.Draw._rect.x += e.width - 1;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		return;
	}
	if(alpha >= 1 && com.haxepunk.utils.Draw.blend == null) {
		if(color < -16777216) color = -16777216 | color;
		com.haxepunk.utils.Draw._rect.x = e.x - e.originX - com.haxepunk.utils.Draw._camera.x;
		com.haxepunk.utils.Draw._rect.y = e.y - e.originY - com.haxepunk.utils.Draw._camera.y;
		com.haxepunk.utils.Draw._rect.width = e.width;
		com.haxepunk.utils.Draw._rect.height = e.height;
		com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect,color);
		return;
	}
	if(color >= -16777216) color = 16777215 & color;
	com.haxepunk.utils.Draw._graphics.clear();
	com.haxepunk.utils.Draw._graphics.beginFill(color,alpha);
	com.haxepunk.utils.Draw._graphics.drawRect(e.x - e.originX - com.haxepunk.utils.Draw._camera.x,e.y - e.originY - com.haxepunk.utils.Draw._camera.y,e.width,e.height);
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.curve = function(x1,y1,x2,y2,x3,y3,thick,color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	if(thick == null) thick = 1;
	com.haxepunk.utils.Draw._graphics.clear();
	com.haxepunk.utils.Draw._graphics.lineStyle(thick,color,alpha);
	com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x,y1 - com.haxepunk.utils.Draw._camera.y);
	com.haxepunk.utils.Draw._graphics.curveTo(x2 - com.haxepunk.utils.Draw._camera.x,y2 - com.haxepunk.utils.Draw._camera.y,x3 - com.haxepunk.utils.Draw._camera.x,y3 - com.haxepunk.utils.Draw._camera.y);
	if(com.haxepunk.utils.Draw.blend == null) com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite); else com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite,null,null,com.haxepunk.utils.Draw.blend);
}
com.haxepunk.utils.Draw.graphic = function(g,x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(g.visible) {
		if(g.relative) {
			com.haxepunk.HXP.point.x = x;
			com.haxepunk.HXP.point.y = y;
		} else com.haxepunk.HXP.point.x = com.haxepunk.HXP.point.y = 0;
		com.haxepunk.HXP.point2.x = com.haxepunk.HXP.camera.x;
		com.haxepunk.HXP.point2.y = com.haxepunk.HXP.camera.y;
		g.render(com.haxepunk.utils.Draw._target,com.haxepunk.HXP.point,com.haxepunk.HXP.point2);
	}
}
com.haxepunk.utils.Draw.entity = function(e,x,y,addEntityPosition) {
	if(addEntityPosition == null) addEntityPosition = false;
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(e.visible && e._graphic != null) {
		if(addEntityPosition) com.haxepunk.utils.Draw.graphic(e._graphic,x + e.x | 0,y + e.y | 0); else com.haxepunk.utils.Draw.graphic(e._graphic,x,y);
	}
}
com.haxepunk.utils.Draw.text = function(text,x,y,options) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	var textGfx = new com.haxepunk.graphics.Text(text,x,y,0,0,options);
	textGfx.render(com.haxepunk.utils.Draw._target,com.haxepunk.HXP.zero,com.haxepunk.utils.Draw._camera);
}
com.haxepunk.utils.Draw._target = null;
com.haxepunk.utils.Draw._camera = null;
com.haxepunk.utils.Ease = function() { }
$hxClasses["com.haxepunk.utils.Ease"] = com.haxepunk.utils.Ease;
com.haxepunk.utils.Ease.__name__ = ["com","haxepunk","utils","Ease"];
com.haxepunk.utils.Ease.quadIn = function(t) {
	return t * t;
}
com.haxepunk.utils.Ease.quadOut = function(t) {
	return -t * (t - 2);
}
com.haxepunk.utils.Ease.quadInOut = function(t) {
	return t <= .5?t * t * 2:1 - --t * t * 2;
}
com.haxepunk.utils.Ease.cubeIn = function(t) {
	return t * t * t;
}
com.haxepunk.utils.Ease.cubeOut = function(t) {
	return 1 + --t * t * t;
}
com.haxepunk.utils.Ease.cubeInOut = function(t) {
	return t <= .5?t * t * t * 4:1 + --t * t * t * 4;
}
com.haxepunk.utils.Ease.quartIn = function(t) {
	return t * t * t * t;
}
com.haxepunk.utils.Ease.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
}
com.haxepunk.utils.Ease.quartInOut = function(t) {
	return t <= .5?t * t * t * t * 8:(1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
}
com.haxepunk.utils.Ease.quintIn = function(t) {
	return t * t * t * t * t;
}
com.haxepunk.utils.Ease.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
}
com.haxepunk.utils.Ease.quintInOut = function(t) {
	return (t *= 2) < 1?t * t * t * t * t / 2:((t -= 2) * t * t * t * t + 2) / 2;
}
com.haxepunk.utils.Ease.sineIn = function(t) {
	return -Math.cos(Math.PI / 2 * t) + 1;
}
com.haxepunk.utils.Ease.sineOut = function(t) {
	return Math.sin(Math.PI / 2 * t);
}
com.haxepunk.utils.Ease.sineInOut = function(t) {
	return -Math.cos(Math.PI * t) / 2 + .5;
}
com.haxepunk.utils.Ease.bounceIn = function(t) {
	t = 1 - t;
	if(t < 1 / 2.75) return 1 - 7.5625 * t * t;
	if(t < 2 / 2.75) return 1 - (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75);
	if(t < 2.5 / 2.75) return 1 - (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375);
	return 1 - (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375);
}
com.haxepunk.utils.Ease.bounceOut = function(t) {
	if(t < 1 / 2.75) return 7.5625 * t * t;
	if(t < 2 / 2.75) return 7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75;
	if(t < 2.5 / 2.75) return 7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375;
	return 7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375;
}
com.haxepunk.utils.Ease.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < 1 / 2.75) return (1 - 7.5625 * t * t) / 2;
		if(t < 2 / 2.75) return (1 - (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75)) / 2;
		if(t < 2.5 / 2.75) return (1 - (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375)) / 2;
		return (1 - (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < 1 / 2.75) return 7.5625 * t * t / 2 + .5;
	if(t < 2 / 2.75) return (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75) / 2 + .5;
	if(t < 2.5 / 2.75) return (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375) / 2 + .5;
	return (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375) / 2 + .5;
}
com.haxepunk.utils.Ease.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
}
com.haxepunk.utils.Ease.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
}
com.haxepunk.utils.Ease.circInOut = function(t) {
	return t <= .5?(Math.sqrt(1 - t * t * 4) - 1) / -2:(Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
}
com.haxepunk.utils.Ease.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
}
com.haxepunk.utils.Ease.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
}
com.haxepunk.utils.Ease.expoInOut = function(t) {
	return t < .5?Math.pow(2,10 * (t * 2 - 1)) / 2:(-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
}
com.haxepunk.utils.Ease.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
}
com.haxepunk.utils.Ease.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
}
com.haxepunk.utils.Ease.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
}
com.haxepunk.utils.Input = function() { }
$hxClasses["com.haxepunk.utils.Input"] = com.haxepunk.utils.Input;
com.haxepunk.utils.Input.__name__ = ["com","haxepunk","utils","Input"];
com.haxepunk.utils.Input.__properties__ = {get_joysticks:"getJoysticks",get_mouseFlashY:"getMouseFlashY",get_mouseFlashX:"getMouseFlashX",get_mouseY:"getMouseY",get_mouseX:"getMouseX"}
com.haxepunk.utils.Input.lastKey = null;
com.haxepunk.utils.Input.mouseDown = null;
com.haxepunk.utils.Input.mouseUp = null;
com.haxepunk.utils.Input.mousePressed = null;
com.haxepunk.utils.Input.mouseReleased = null;
com.haxepunk.utils.Input.mouseWheel = null;
com.haxepunk.utils.Input.mouseX = null;
com.haxepunk.utils.Input.getMouseX = function() {
	return com.haxepunk.HXP.screen.getMouseX();
}
com.haxepunk.utils.Input.mouseY = null;
com.haxepunk.utils.Input.getMouseY = function() {
	return com.haxepunk.HXP.screen.getMouseY();
}
com.haxepunk.utils.Input.mouseFlashX = null;
com.haxepunk.utils.Input.getMouseFlashX = function() {
	return com.haxepunk.HXP.stage.get_mouseX() | 0;
}
com.haxepunk.utils.Input.mouseFlashY = null;
com.haxepunk.utils.Input.getMouseFlashY = function() {
	return com.haxepunk.HXP.stage.get_mouseY() | 0;
}
com.haxepunk.utils.Input.define = function(name,keys) {
	com.haxepunk.utils.Input._control.set(name,keys);
}
com.haxepunk.utils.Input.check = function(input) {
	if(js.Boot.__instanceof(input,String)) {
		var v = com.haxepunk.utils.Input._control.get(input), i = v.length;
		while(i-- > 0) {
			if(v[i] < 0) {
				if(com.haxepunk.utils.Input._keyNum > 0) return true;
				continue;
			}
			if(com.haxepunk.utils.Input._key[v[i]] == true) return true;
		}
		return false;
	}
	return input < 0?com.haxepunk.utils.Input._keyNum > 0:com.haxepunk.utils.Input._key[input];
}
com.haxepunk.utils.Input.pressed = function(input) {
	if(js.Boot.__instanceof(input,String)) {
		var v = com.haxepunk.utils.Input._control.get(input), i = v.length;
		while(i-- > 0) if(v[i] < 0?com.haxepunk.utils.Input._pressNum != 0:com.haxepunk.utils.Input.indexOf(com.haxepunk.utils.Input._press,v[i]) >= 0) return true;
		return false;
	}
	return input < 0?com.haxepunk.utils.Input._pressNum != 0:com.haxepunk.utils.Input.indexOf(com.haxepunk.utils.Input._press,input) >= 0;
}
com.haxepunk.utils.Input.released = function(input) {
	if(js.Boot.__instanceof(input,String)) {
		var v = com.haxepunk.utils.Input._control.get(input), i = v.length;
		while(i-- > 0) if(v[i] < 0?com.haxepunk.utils.Input._releaseNum != 0:com.haxepunk.utils.Input.indexOf(com.haxepunk.utils.Input._release,v[i]) >= 0) return true;
		return false;
	}
	return input < 0?com.haxepunk.utils.Input._releaseNum != 0:com.haxepunk.utils.Input.indexOf(com.haxepunk.utils.Input._release,input) >= 0;
}
com.haxepunk.utils.Input.indexOf = function(a,v) {
	var i = 0;
	var _g = 0;
	while(_g < a.length) {
		var v2 = a[_g];
		++_g;
		if(v == v2) return i;
		i++;
	}
	return -1;
}
com.haxepunk.utils.Input.joystick = function(id) {
	var joy = com.haxepunk.utils.Input._joysticks.get(id);
	if(joy == null) {
		joy = new com.haxepunk.utils.Joystick();
		com.haxepunk.utils.Input._joysticks.set(id,joy);
	}
	return joy;
}
com.haxepunk.utils.Input.joysticks = null;
com.haxepunk.utils.Input.getJoysticks = function() {
	var count = 0;
	var $it0 = com.haxepunk.utils.Input._joysticks.iterator();
	while( $it0.hasNext() ) {
		var joystick = $it0.next();
		if(joystick.get_connected()) count += 1;
	}
	return count;
}
com.haxepunk.utils.Input.enable = function() {
	if(!com.haxepunk.utils.Input._enabled && com.haxepunk.HXP.stage != null) {
		com.haxepunk.HXP.stage.addEventListener(browser.events.KeyboardEvent.KEY_DOWN,com.haxepunk.utils.Input.onKeyDown,false,2);
		com.haxepunk.HXP.stage.addEventListener(browser.events.KeyboardEvent.KEY_UP,com.haxepunk.utils.Input.onKeyUp,false,2);
		com.haxepunk.HXP.stage.addEventListener(browser.events.MouseEvent.MOUSE_DOWN,com.haxepunk.utils.Input.onMouseDown,false,2);
		com.haxepunk.HXP.stage.addEventListener(browser.events.MouseEvent.MOUSE_UP,com.haxepunk.utils.Input.onMouseUp,false,2);
		com.haxepunk.HXP.stage.addEventListener(browser.events.MouseEvent.MOUSE_WHEEL,com.haxepunk.utils.Input.onMouseWheel,false,2);
	}
}
com.haxepunk.utils.Input.update = function() {
	while(com.haxepunk.utils.Input._pressNum-- > -1) com.haxepunk.utils.Input._press[com.haxepunk.utils.Input._pressNum] = -1;
	com.haxepunk.utils.Input._pressNum = 0;
	while(com.haxepunk.utils.Input._releaseNum-- > -1) com.haxepunk.utils.Input._release[com.haxepunk.utils.Input._releaseNum] = -1;
	com.haxepunk.utils.Input._releaseNum = 0;
	if(com.haxepunk.utils.Input.mousePressed) com.haxepunk.utils.Input.mousePressed = false;
	if(com.haxepunk.utils.Input.mouseReleased) com.haxepunk.utils.Input.mouseReleased = false;
}
com.haxepunk.utils.Input.onKeyDown = function(e) {
	var code = com.haxepunk.utils.Input.lastKey = e.keyCode;
	if(code == 8) com.haxepunk.utils.Input.keyString = HxOverrides.substr(com.haxepunk.utils.Input.keyString,0,com.haxepunk.utils.Input.keyString.length - 1); else if(code > 47 && code < 58 || code > 64 && code < 91 || code == 32) {
		if(com.haxepunk.utils.Input.keyString.length > 100) com.haxepunk.utils.Input.keyString = HxOverrides.substr(com.haxepunk.utils.Input.keyString,1,null);
		var $char = String.fromCharCode(code);
		com.haxepunk.utils.Input.keyString += $char;
	}
	if(!com.haxepunk.utils.Input._key[code]) {
		com.haxepunk.utils.Input._key[code] = true;
		com.haxepunk.utils.Input._keyNum++;
		com.haxepunk.utils.Input._press[com.haxepunk.utils.Input._pressNum++] = code;
	}
}
com.haxepunk.utils.Input.onKeyUp = function(e) {
	var code = e.keyCode;
	if(com.haxepunk.utils.Input._key[code]) {
		com.haxepunk.utils.Input._key[code] = false;
		com.haxepunk.utils.Input._keyNum--;
		com.haxepunk.utils.Input._release[com.haxepunk.utils.Input._releaseNum++] = code;
	}
}
com.haxepunk.utils.Input.onMouseDown = function(e) {
	if(!com.haxepunk.utils.Input.mouseDown) {
		com.haxepunk.utils.Input.mouseDown = true;
		com.haxepunk.utils.Input.mouseUp = false;
		com.haxepunk.utils.Input.mousePressed = true;
	}
}
com.haxepunk.utils.Input.onMouseUp = function(e) {
	com.haxepunk.utils.Input.mouseDown = false;
	com.haxepunk.utils.Input.mouseUp = true;
	com.haxepunk.utils.Input.mouseReleased = true;
}
com.haxepunk.utils.Input.onMouseWheel = function(e) {
	com.haxepunk.utils.Input.mouseWheel = true;
	com.haxepunk.utils.Input._mouseWheelDelta = e.delta;
}
com.haxepunk.utils.JoyButtonState = $hxClasses["com.haxepunk.utils.JoyButtonState"] = { __ename__ : ["com","haxepunk","utils","JoyButtonState"], __constructs__ : ["BUTTON_ON","BUTTON_OFF","BUTTON_PRESSED"] }
com.haxepunk.utils.JoyButtonState.BUTTON_ON = ["BUTTON_ON",0];
com.haxepunk.utils.JoyButtonState.BUTTON_ON.toString = $estr;
com.haxepunk.utils.JoyButtonState.BUTTON_ON.__enum__ = com.haxepunk.utils.JoyButtonState;
com.haxepunk.utils.JoyButtonState.BUTTON_OFF = ["BUTTON_OFF",1];
com.haxepunk.utils.JoyButtonState.BUTTON_OFF.toString = $estr;
com.haxepunk.utils.JoyButtonState.BUTTON_OFF.__enum__ = com.haxepunk.utils.JoyButtonState;
com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED = ["BUTTON_PRESSED",2];
com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED.toString = $estr;
com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED.__enum__ = com.haxepunk.utils.JoyButtonState;
com.haxepunk.utils.Joystick = function() {
	this.buttons = new IntHash();
	this.ball = new browser.geom.Point(0,0);
	this.axis = new Array();
	this.hat = new browser.geom.Point(0,0);
	this.set_connected(false);
	this._timeout = 0;
};
$hxClasses["com.haxepunk.utils.Joystick"] = com.haxepunk.utils.Joystick;
com.haxepunk.utils.Joystick.__name__ = ["com","haxepunk","utils","Joystick"];
com.haxepunk.utils.Joystick.prototype = {
	_timeout: null
	,set_connected: function(value) {
		if(value) this._timeout = 3; else this._timeout = 0;
		return value;
	}
	,get_connected: function() {
		return this._timeout > 0;
	}
	,getAxis: function(a) {
		if(a < 1 || a > this.axis.length) return 0; else return Math.abs(this.axis[a - 1]) < 0.15?0:this.axis[a - 1];
	}
	,check: function(button) {
		if(this.buttons.exists(button)) return this.buttons.get(button) != com.haxepunk.utils.JoyButtonState.BUTTON_OFF;
		return false;
	}
	,pressed: function(button) {
		if(this.buttons.exists(button)) return this.buttons.get(button) == com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED;
		return false;
	}
	,update: function() {
		this._timeout -= com.haxepunk.HXP.elapsed;
		var $it0 = this.buttons.keys();
		while( $it0.hasNext() ) {
			var button = $it0.next();
			if(this.buttons.get(button) == com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED) this.buttons.set(button,com.haxepunk.utils.JoyButtonState.BUTTON_ON);
		}
	}
	,connected: null
	,ball: null
	,hat: null
	,axis: null
	,buttons: null
	,__class__: com.haxepunk.utils.Joystick
	,__properties__: {set_connected:"set_connected",get_connected:"get_connected"}
}
com.haxepunk.utils.Key = function() { }
$hxClasses["com.haxepunk.utils.Key"] = com.haxepunk.utils.Key;
com.haxepunk.utils.Key.__name__ = ["com","haxepunk","utils","Key"];
com.haxepunk.utils.Key.nameOfKey = function($char) {
	if($char >= 65 && $char <= 90) return String.fromCharCode($char);
	if($char >= 112 && $char <= 126) return "F" + Std.string($char - 111);
	if($char >= 96 && $char <= 105) return "NUMPAD " + Std.string($char - 96);
	switch($char) {
	case 37:
		return "LEFT";
	case 38:
		return "UP";
	case 39:
		return "RIGHT";
	case 40:
		return "DOWN";
	case 13:
		return "ENTER";
	case 17:
		return "CONTROL";
	case 32:
		return "SPACE";
	case 16:
		return "SHIFT";
	case 8:
		return "BACKSPACE";
	case 20:
		return "CAPS LOCK";
	case 46:
		return "DELETE";
	case 35:
		return "END";
	case 27:
		return "ESCAPE";
	case 36:
		return "HOME";
	case 45:
		return "INSERT";
	case 9:
		return "TAB";
	case 34:
		return "PAGE DOWN";
	case 33:
		return "PAGE UP";
	case 107:
		return "NUMPAD ADD";
	case 110:
		return "NUMPAD DECIMAL";
	case 111:
		return "NUMPAD DIVIDE";
	case 108:
		return "NUMPAD ENTER";
	case 106:
		return "NUMPAD MULTIPLY";
	case 109:
		return "NUMPAD SUBTRACT";
	}
	return String.fromCharCode($char);
}
var entities = {}
entities.Blob = function(posX,posY,hero) {
	this.drag = 0.4;
	this.speed = 3;
	this.maxVelocity = 8;
	com.haxepunk.Entity.call(this,posX,posY);
	this.setGraphic(new com.haxepunk.graphics.Image("gfx/blob.png"));
	{
		this.width = 32;
		this.height = 32;
		this.originX = 0;
		this.originY = 0;
	}
	this.enemy = hero;
	this.setType("blob");
	var seed = Math.random();
	if(seed < 0.75) seed += 0.5;
	this.maxVelocity *= seed;
	this.speed *= seed * 2;
	this.drag *= seed / 2;
};
$hxClasses["entities.Blob"] = entities.Blob;
entities.Blob.__name__ = ["entities","Blob"];
entities.Blob.__super__ = com.haxepunk.Entity;
entities.Blob.prototype = $extend(com.haxepunk.Entity.prototype,{
	levelUp: function() {
		this.speed += 1;
		this.maxVelocity += 1;
		this.drag *= 0.9;
	}
	,getMoveDist: function() {
		return Math.sqrt(Math.pow(this.xVel,2) + Math.pow(this.yVel,2));
	}
	,move: function() {
		this.xVel += this.xAccel * this.speed;
		this.yVel += this.yAccel * this.speed;
		var pab = Math.sqrt(Math.pow(this.xVel,2) + Math.pow(this.yVel,2));
		var normalized = this.maxVelocity / pab;
		if(pab > this.maxVelocity) {
			this.xVel *= normalized;
			this.yVel *= normalized;
		}
		if(this.xVel < 0) this.xVel = Math.min(this.xVel + this.drag,0); else if(this.xVel > 0) this.xVel = Math.max(this.xVel - this.drag,0);
		if(this.yVel < 0) this.yVel = Math.min(this.yVel + this.drag,0); else if(this.yVel > 0) this.yVel = Math.max(this.yVel - this.drag,0);
		this.moveBy(this.xVel,this.yVel);
	}
	,update: function() {
		com.haxepunk.Entity.prototype.update.call(this);
		this.handleInput();
		if(this.collide("wall",this.x + com.haxepunk.HXP.sign(this.xVel) * 2,this.y + com.haxepunk.HXP.sign(this.yVel) * 2) != null) {
			this.x -= com.haxepunk.HXP.sign(this.xVel);
			this.y -= com.haxepunk.HXP.sign(this.yVel);
			this.xVel *= -1;
			this.yVel *= -1;
		}
		this.move();
	}
	,handleInput: function() {
		this.xAccel = 0;
		this.yAccel = 0;
		if(this.enemy.y > this.y) this.yAccel = 1;
		if(this.enemy.x > this.x) this.xAccel = 1;
		if(this.enemy.y < this.y) this.yAccel = -1;
		if(this.enemy.x < this.x) this.xAccel = -1;
	}
	,enemy: null
	,drag: null
	,speed: null
	,maxVelocity: null
	,yAccel: null
	,xAccel: null
	,yVel: null
	,xVel: null
	,__class__: entities.Blob
});
entities.Hero = function(posX,posY) {
	this.isDead = false;
	com.haxepunk.Entity.call(this,posX,posY);
	this.setGraphic(new com.haxepunk.graphics.Image("gfx/block.png"));
	{
		this.width = 32;
		this.height = 32;
		this.originX = 0;
		this.originY = 0;
	}
};
$hxClasses["entities.Hero"] = entities.Hero;
entities.Hero.__name__ = ["entities","Hero"];
entities.Hero.__super__ = com.haxepunk.Entity;
entities.Hero.prototype = $extend(com.haxepunk.Entity.prototype,{
	isDead: null
	,yAccel: null
	,xAccel: null
	,yVel: null
	,xVel: null
	,isAlive: function() {
		return !this.isDead;
	}
	,move: function() {
		this.xVel += this.xAccel * 4;
		this.yVel += this.yAccel * 4;
		var pab = Math.sqrt(Math.pow(this.xVel,2) + Math.pow(this.yVel,2));
		var normalized = 12 / pab;
		if(pab > 12) {
			this.xVel *= normalized;
			this.yVel *= normalized;
		}
		if(this.xVel < 0) this.xVel = Math.min(this.xVel + 0.2,0); else if(this.xVel > 0) this.xVel = Math.max(this.xVel - 0.2,0);
		if(this.yVel < 0) this.yVel = Math.min(this.yVel + 0.2,0); else if(this.yVel > 0) this.yVel = Math.max(this.yVel - 0.2,0);
		this.moveBy(this.xVel,this.yVel);
	}
	,update: function() {
		com.haxepunk.Entity.prototype.update.call(this);
		this.handleInput();
		if(this.collide("wall",this.x + com.haxepunk.HXP.sign(this.xVel) * 2,this.y + com.haxepunk.HXP.sign(this.yVel) * 4) != null) {
			this.x -= com.haxepunk.HXP.sign(this.xVel);
			this.y -= com.haxepunk.HXP.sign(this.yVel);
			this.xVel *= -1;
			this.yVel *= -1;
		}
		this.move();
		if(this.collide("blob",this.x,this.y) != null) this.isDead = true;
	}
	,handleInput: function() {
		this.xAccel = 0;
		this.yAccel = 0;
		if(com.haxepunk.utils.Input.check(87)) this.yAccel = -1;
		if(com.haxepunk.utils.Input.check(65)) this.xAccel = -1;
		if(com.haxepunk.utils.Input.check(83)) this.yAccel = 1;
		if(com.haxepunk.utils.Input.check(68)) this.xAccel = 1;
	}
	,__class__: entities.Hero
});
entities.Honey = function(posX,posY) {
	com.haxepunk.Entity.call(this,posX,posY);
	this.setGraphic(new com.haxepunk.graphics.TiledImage("gfx/lava.png",32,32));
	{
		this.width = 32;
		this.height = 32;
		this.originX = 0;
		this.originY = 0;
	}
	this.setType("wall");
	this.x = posX * 32;
	this.y = posY * 32;
};
$hxClasses["entities.Honey"] = entities.Honey;
entities.Honey.__name__ = ["entities","Honey"];
entities.Honey.__super__ = com.haxepunk.Entity;
entities.Honey.prototype = $extend(com.haxepunk.Entity.prototype,{
	__class__: entities.Honey
});
entities.Timer = function() {
	this.alive = true;
	com.haxepunk.Entity.call(this);
	this.time = 0;
};
$hxClasses["entities.Timer"] = entities.Timer;
entities.Timer.__name__ = ["entities","Timer"];
entities.Timer.__super__ = com.haxepunk.Entity;
entities.Timer.prototype = $extend(com.haxepunk.Entity.prototype,{
	halt: function() {
		this.alive = false;
	}
	,getTime: function() {
		return this.time;
	}
	,update: function() {
		com.haxepunk.Entity.prototype.update.call(this);
		if(this.alive) this.time += 1;
		this.setGraphic(new com.haxepunk.graphics.Text("Score: " + this.time));
	}
	,alive: null
	,time: null
	,__class__: entities.Timer
});
entities.Wall = function(posX,posY) {
	com.haxepunk.Entity.call(this,posX,posY);
	this.setGraphic(new com.haxepunk.graphics.Image("gfx/wall32.png"));
	{
		this.width = 32;
		this.height = 32;
		this.originX = 0;
		this.originY = 0;
	}
	this.setType("wall");
	this.x = posX * 32;
	this.y = posY * 32;
};
$hxClasses["entities.Wall"] = entities.Wall;
entities.Wall.__name__ = ["entities","Wall"];
entities.Wall.__super__ = com.haxepunk.Entity;
entities.Wall.prototype = $extend(com.haxepunk.Entity.prototype,{
	__class__: entities.Wall
});
var format = {}
format.display = {}
format.display.FrameLabel = function(frame,name) {
	this.frame = frame;
	this.name = name;
};
$hxClasses["format.display.FrameLabel"] = format.display.FrameLabel;
format.display.FrameLabel.__name__ = ["format","display","FrameLabel"];
format.display.FrameLabel.prototype = {
	name: null
	,frame: null
	,__class__: format.display.FrameLabel
}
format.display.MovieClip = function() {
	browser.display.Sprite.call(this);
};
$hxClasses["format.display.MovieClip"] = format.display.MovieClip;
format.display.MovieClip.__name__ = ["format","display","MovieClip"];
format.display.MovieClip.__super__ = browser.display.Sprite;
format.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	unflatten: function() {
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,gotoAndPlay: function(frame,scene) {
	}
	,flatten: function() {
	}
	,trackAsMenu: null
	,totalFrames: null
	,framesLoaded: null
	,enabled: null
	,currentLabels: null
	,currentLabel: null
	,currentFrameLabel: null
	,currentFrame: null
	,__class__: format.display.MovieClip
});
haxe.Int32 = function() { }
$hxClasses["haxe.Int32"] = haxe.Int32;
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x | 0;
}
haxe.Int32.clamp = function(x) {
	return x | 0;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + Std.string(x);
	return x;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b | 0;
}
haxe.Int32.sub = function(a,b) {
	return a - b | 0;
}
haxe.Int32.mul = function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
}
haxe.Int32.div = function(a,b) {
	return a / b | 0;
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.isNeg = function(a) {
	return a < 0;
}
haxe.Int32.isZero = function(a) {
	return a == 0;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.ucompare = function(a,b) {
	if(a < 0) return b < 0?~b - ~a:1;
	return b < 0?-1:a - b;
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
$hxClasses["haxe.Stack"] = haxe.Stack;
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.Stack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
}
haxe.Stack.exceptionStack = function() {
	return [];
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += Std.string("\nCalled from ");
		haxe.Stack.itemToString(b,s);
	}
	return b.b;
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += Std.string("a C function");
		break;
	case 1:
		var m = $e[2];
		b.b += Std.string("module ");
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b += Std.string(" (");
		}
		b.b += Std.string(file);
		b.b += Std.string(" line ");
		b.b += Std.string(line);
		if(s1 != null) b.b += Std.string(")");
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += Std.string(".");
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += Std.string("local function #");
		b.b += Std.string(n);
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e = this.makeExpr(l);
			return function() {
				return -e();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,buf: null
	,stack: null
	,macros: null
	,context: null
	,expr: null
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new Hash();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new IntHash();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntHash format";
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,getResolver: function() {
		return this.resolver;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype = {
	getData: function() {
		return this.b;
	}
	,toHex: function() {
		var s = new StringBuf();
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g1 = 0, _g = this.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.b[i];
			s.b += String.fromCharCode(chars[c >> 4]);
			s.b += String.fromCharCode(chars[c & 15]);
		}
		return s.b;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length?this.length:other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,get: function(pos) {
		return this.b[pos];
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,b: null
	,__class__: haxe.io.BytesBuffer
}
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Input = function() { }
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype = {
	getDoubleSig: function(bytes) {
		return Std.parseInt((((bytes[1] & 15) << 16 | bytes[2] << 8 | bytes[3]) * Math.pow(2,32)).toString()) + Std.parseInt(((bytes[4] >> 7) * Math.pow(2,31)).toString()) + Std.parseInt(((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7]).toString());
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
	}
	,readUInt30: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
		return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readInt31: function() {
		var ch1, ch2, ch3, ch4;
		if(this.bigEndian) {
			ch4 = this.readByte();
			ch3 = this.readByte();
			ch2 = this.readByte();
			ch1 = this.readByte();
		} else {
			ch1 = this.readByte();
			ch2 = this.readByte();
			ch3 = this.readByte();
			ch4 = this.readByte();
		}
		if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
		return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readUInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	}
	,readInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
		if((n & 8388608) != 0) return n - 16777216;
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
		if((n & 32768) != 0) return n - 65536;
		return n;
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) return n - 256;
		return n;
	}
	,readDouble: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 4 & 2047 | bytes[1] >> 4) - 1023;
		var sig = this.getDoubleSig(bytes);
		if(sig == 0 && exp == -1023) return 0.0;
		return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
	}
	,readFloat: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 1 & 255 | bytes[1] >> 7) - 127;
		var sig = (bytes[1] & 127) << 16 | bytes[2] << 8 | bytes[3];
		if(sig == 0 && exp == -127) return 0.0;
		return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp);
	}
	,readLine: function() {
		var buf = new StringBuf();
		var last;
		var s;
		try {
			while((last = this.readByte()) != 10) buf.b += String.fromCharCode(last);
			s = buf.b;
			if(HxOverrides.cca(s,s.length - 1) == 13) s = HxOverrides.substr(s,0,-1);
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
				s = buf.b;
				if(s.length == 0) throw e;
			} else throw(e);
		}
		return s;
	}
	,readUntil: function(end) {
		var buf = new StringBuf();
		var last;
		while((last = this.readByte()) != end) buf.b += String.fromCharCode(last);
		return buf.b;
	}
	,read: function(nbytes) {
		var s = haxe.io.Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = haxe.io.Bytes.alloc(bufsize);
		var total = new haxe.io.BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw haxe.io.Error.Blocked;
				total.addBytes(buf,0,len);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,close: function() {
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readByte: function() {
		return (function($this) {
			var $r;
			throw "Not implemented";
			return $r;
		}(this));
	}
	,bigEndian: null
	,__class__: haxe.io.Input
	,__properties__: {set_bigEndian:"setEndian"}
}
haxe.xml = {}
haxe.xml.Filter = $hxClasses["haxe.xml.Filter"] = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = $hxClasses["haxe.xml.Attrib"] = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = $hxClasses["haxe.xml.Rule"] = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml._Check = {}
haxe.xml._Check.CheckResult = $hxClasses["haxe.xml._Check.CheckResult"] = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml.Check = function() { }
$hxClasses["haxe.xml.Check"] = haxe.xml.Check;
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	return x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
}
haxe.xml.Check.filterMatch = function(s,f) {
	var $e = (f);
	switch( $e[1] ) {
	case 0:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
	case 1:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
	case 2:
		var values = $e[2];
		var _g = 0;
		while(_g < values.length) {
			var v = values[_g];
			++_g;
			if(s == v) return true;
		}
		return false;
	case 3:
		var r = $e[2];
		return r.match(s);
	}
}
haxe.xml.Check.isNullable = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 2:
		var one = $e[3], r1 = $e[2];
		return one != true || haxe.xml.Check.isNullable(r1);
	case 3:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return false;
		}
		return true;
	case 4:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(haxe.xml.Check.isNullable(r1)) return true;
		}
		return false;
	case 1:
		return false;
	case 0:
		return false;
	case 5:
		return true;
	}
}
haxe.xml.Check.check = function(x,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var childs = $e[4], attribs = $e[3], name = $e[2];
		if(x.nodeType != Xml.Element || x.getNodeName() != name) return haxe.xml._Check.CheckResult.CElementExpected(name,x);
		var attribs1 = attribs == null?new Array():attribs.slice();
		var $it0 = x.attributes();
		while( $it0.hasNext() ) {
			var xatt = $it0.next();
			var found = false;
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = (att);
				switch( $e[1] ) {
				case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					if(xatt != name1) continue;
					if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) return haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
					HxOverrides.remove(attribs1,att);
					found = true;
					break;
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				if(defvalue == null) return haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
				break;
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CInElement(x,m);
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				x.set(name1,defvalue);
				break;
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 1:
		var filter = $e[2];
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) return haxe.xml._Check.CheckResult.CDataExpected(x);
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) return haxe.xml._Check.CheckResult.CInvalidData(x,filter);
		return haxe.xml._Check.CheckResult.CMatch;
	case 4:
		var choices = $e[2];
		if(choices.length == 0) throw "No choice possible";
		var _g = 0;
		while(_g < choices.length) {
			var c = choices[_g];
			++_g;
			if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CMatch;
		}
		return haxe.xml.Check.check(x,choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.check(x,r1);
	default:
		throw "Unexpected " + Std.string(r);
	}
}
haxe.xml.Check.checkList = function(it,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 3:
		var ordered = $e[3], rules = $e[2];
		var rules1 = rules.slice();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
				if(m == haxe.xml._Check.CheckResult.CMatch) {
					found = true;
					var $e = (r1);
					switch( $e[1] ) {
					case 2:
						var one = $e[3], rsub = $e[2];
						if(one) {
							var i;
							var _g2 = 0, _g1 = rules1.length;
							while(_g2 < _g1) {
								var i1 = _g2++;
								if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
							}
						}
						break;
					default:
						HxOverrides.remove(rules1,r1);
					}
					break;
				} else if(ordered && !haxe.xml.Check.isNullable(r1)) return m;
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtra(x);
		}
		var _g = 0;
		while(_g < rules1.length) {
			var r1 = rules1[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return haxe.xml._Check.CheckResult.CMissing(r1);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 2:
		var one = $e[3], r1 = $e[2];
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
		}
		if(one && !found) return haxe.xml._Check.CheckResult.CMissing(r1);
		return haxe.xml._Check.CheckResult.CMatch;
	default:
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
			break;
		}
		if(!found) {
			switch( (r)[1] ) {
			case 5:
				break;
			default:
				return haxe.xml._Check.CheckResult.CMissing(r);
			}
		}
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			return haxe.xml._Check.CheckResult.CExtra(x);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}
}
haxe.xml.Check.makeWhere = function(path) {
	if(path.length == 0) return "";
	var s = "In ";
	var first = true;
	var _g = 0;
	while(_g < path.length) {
		var x = path[_g];
		++_g;
		if(first) first = false; else s += ".";
		s += x.getNodeName();
	}
	return s + ": ";
}
haxe.xml.Check.makeString = function(x) {
	if(x.nodeType == Xml.Element) return "element " + x.getNodeName();
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) return HxOverrides.substr(s,0,17) + "...";
	return s;
}
haxe.xml.Check.makeRule = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var name = $e[2];
		return "element " + name;
	case 1:
		return "data";
	case 2:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	case 3:
		var rules = $e[2];
		return haxe.xml.Check.makeRule(rules[0]);
	case 4:
		var choices = $e[2];
		return haxe.xml.Check.makeRule(choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	}
}
haxe.xml.Check.makeError = function(m,path) {
	if(path == null) path = new Array();
	var $e = (m);
	switch( $e[1] ) {
	case 0:
		throw "assert";
		break;
	case 1:
		var r = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
	case 2:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
	case 3:
		var x = $e[3], name = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
	case 4:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
	case 5:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
	case 6:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
	case 7:
		var f = $e[4], x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
	case 8:
		var f = $e[3], x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
	case 9:
		var m1 = $e[3], x = $e[2];
		path.push(x);
		return haxe.xml.Check.makeError(m1,path);
	}
}
haxe.xml.Check.checkNode = function(x,r) {
	var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Parser = function() { }
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
}
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.getNodeName()) throw "Expected </" + parent.getNodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProlog(str1));
				state = 1;
			}
			break;
		}
		c = str.charCodeAt(++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
}
haxe.xml.Parser.isValidChar = function(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45;
}
var nme = {}
nme.Lib = function() { }
$hxClasses["nme.Lib"] = nme.Lib;
nme.Lib.__name__ = ["nme","Lib"];
nme.Lib.__properties__ = {get_version:"get_version",get_stage:"get_stage",get_packageName:"get_packageName",get_initWidth:"get_initWidth",get_initHeight:"get_initHeight",get_file:"get_file",get_current:"get_current",get_company:"get_company"}
nme.Lib.company = null;
nme.Lib.current = null;
nme.Lib.file = null;
nme.Lib.initHeight = null;
nme.Lib.initWidth = null;
nme.Lib.packageName = null;
nme.Lib.stage = null;
nme.Lib.version = null;
nme.Lib.close = function() {
}
nme.Lib.create = function(onLoaded,width,height,frameRate,color,flags,title,icon) {
	if(title == null) title = "NME";
	if(flags == null) flags = 15;
	if(color == null) color = 16777215;
	if(frameRate == null) frameRate = 60.0;
}
nme.Lib.createManagedStage = function(width,height) {
	return null;
}
nme.Lib.exit = function() {
}
nme.Lib.forceClose = function() {
}
nme.Lib.getTimer = function() {
	return browser.Lib.getTimer();
}
nme.Lib.getURL = function(url,target) {
	browser.Lib.getURL(url,target);
}
nme.Lib.pause = function() {
}
nme.Lib.postUICallback = function(handler) {
	handler();
}
nme.Lib.resume = function() {
}
nme.Lib.setPackage = function(company,file,packageName,version) {
}
nme.Lib.trace = function(arg) {
	browser.Lib.trace(arg);
}
nme.Lib.get_company = function() {
	return "";
}
nme.Lib.get_current = function() {
	return browser.Lib.get_current();
}
nme.Lib.get_file = function() {
	return "";
}
nme.Lib.get_initHeight = function() {
	return 0;
}
nme.Lib.get_initWidth = function() {
	return 0;
}
nme.Lib.get_packageName = function() {
	return "";
}
nme.Lib.get_stage = function() {
	return nme.Lib.get_current().get_stage();
}
nme.Lib.get_version = function() {
	return "";
}
nme.installer = {}
nme.installer.Assets = function() { }
$hxClasses["nme.installer.Assets"] = nme.installer.Assets;
nme.installer.Assets.__name__ = ["nme","installer","Assets"];
nme.installer.Assets.initialize = function() {
	if(!nme.installer.Assets.initialized) {
		nme.installer.Assets.resourceNames.set("gfx/preloader/haxepunk.png","gfx/preloader/haxepunk.png");
		nme.installer.Assets.resourceTypes.set("gfx/preloader/haxepunk.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_debug.png","gfx/debug/console_debug.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_debug.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_step.png","gfx/debug/console_step.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_step.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_pause.png","gfx/debug/console_pause.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_pause.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_play.png","gfx/debug/console_play.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_play.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_logo.png","gfx/debug/console_logo.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_logo.png","image");
		nme.installer.Assets.resourceNames.set("gfx/debug/console_output.png","gfx/debug/console_output.png");
		nme.installer.Assets.resourceTypes.set("gfx/debug/console_output.png","image");
		nme.installer.Assets.resourceClasses.set("font/04B_03__.ttf",NME_font_04b_03___ttf);
		nme.installer.Assets.resourceNames.set("font/04B_03__.ttf","font/04B_03__.ttf");
		nme.installer.Assets.resourceTypes.set("font/04B_03__.ttf","font");
		nme.installer.Assets.resourceNames.set("gfx/walls.png","gfx/walls.png");
		nme.installer.Assets.resourceTypes.set("gfx/walls.png","image");
		nme.installer.Assets.resourceNames.set("gfx/tileset.png","gfx/tileset.png");
		nme.installer.Assets.resourceTypes.set("gfx/tileset.png","image");
		nme.installer.Assets.resourceNames.set("gfx/block.png","gfx/block.png");
		nme.installer.Assets.resourceTypes.set("gfx/block.png","image");
		nme.installer.Assets.resourceNames.set("gfx/wall32.png","gfx/wall32.png");
		nme.installer.Assets.resourceTypes.set("gfx/wall32.png","image");
		nme.installer.Assets.resourceNames.set("gfx/lava.png","gfx/lava.png");
		nme.installer.Assets.resourceTypes.set("gfx/lava.png","image");
		nme.installer.Assets.resourceNames.set("gfx/blob.png","gfx/blob.png");
		nme.installer.Assets.resourceTypes.set("gfx/blob.png","image");
		nme.installer.Assets.resourceNames.set("gfx/floor.png","gfx/floor.png");
		nme.installer.Assets.resourceTypes.set("gfx/floor.png","image");
		nme.installer.Assets.resourceNames.set("gfx/wall.png","gfx/wall.png");
		nme.installer.Assets.resourceTypes.set("gfx/wall.png","image");
		nme.installer.Assets.resourceClasses.set("font/04B_03__.ttf",NME_font_5);
		nme.installer.Assets.resourceNames.set("font/04B_03__.ttf","font/04B_03__.ttf");
		nme.installer.Assets.resourceTypes.set("font/04B_03__.ttf","font");
		nme.installer.Assets.initialized = true;
	}
}
nme.installer.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id) && nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "image") {
		if(useCache && nme.installer.Assets.cachedBitmapData.exists(id)) return nme.installer.Assets.cachedBitmapData.get(id); else {
			var data = (js.Boot.__cast(ApplicationMain.loaders.get(nme.installer.Assets.resourceNames.get(id)).contentLoaderInfo.content , browser.display.Bitmap)).bitmapData;
			if(useCache) nme.installer.Assets.cachedBitmapData.set(id,data);
			return data;
		}
	} else if(id.indexOf(":") > -1) {
		var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
		var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
		if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
		} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 193, className : "nme.installer.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[nme.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 199, className : "nme.installer.Assets", methodName : "getBitmapData"});
	return null;
}
nme.installer.Assets.getBytes = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id)) return ApplicationMain.urlLoaders.get(nme.installer.Assets.getResourceName(id)).data;
	haxe.Log.trace("[nme.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 218, className : "nme.installer.Assets", methodName : "getBytes"});
	return null;
}
nme.installer.Assets.getFont = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "font") return js.Boot.__cast(Type.createInstance(nme.installer.Assets.resourceClasses.get(id),[]) , browser.text.Font);
	}
	haxe.Log.trace("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 239, className : "nme.installer.Assets", methodName : "getFont"});
	return null;
}
nme.installer.Assets.getMovieClip = function(id) {
	nme.installer.Assets.initialize();
	var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
	} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 291, className : "nme.installer.Assets", methodName : "getMovieClip"});
	return null;
}
nme.installer.Assets.getResourceName = function(id) {
	nme.installer.Assets.initialize();
	return nme.installer.Assets.resourceNames.get(id);
}
nme.installer.Assets.getSound = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "sound") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id))); else if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "music") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id)));
	}
	haxe.Log.trace("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 327, className : "nme.installer.Assets", methodName : "getSound"});
	return null;
}
nme.installer.Assets.getText = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "text") return ApplicationMain.urlLoaders.get(nme.installer.Assets.resourceNames.get(id)).data;
	}
	var bytes = nme.installer.Assets.getBytes(id);
	return null;
}
nme.installer.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveClass(name);
}
nme.installer.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveEnum(name);
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
haxe.Resource.content = [{ name : "NME_font_04b_03___ttf", data : "s73299:cToxMTFveTY6YXNjZW50ZDc2OHk0OmRhdGFhZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aHk2Ol93aWR0aGQ2NDB5NDp4TWF4ZDUxMnk0OnhNaW5kMHk0OnlNYXhkNTEyeTQ6eU1pbmQweTc6X2hlaWdodGQ1MTJ5NzpsZWFkaW5nZDB5NzpkZXNjZW50ZDI1Nnk4OmNoYXJDb2RlaTExMXkxNTpsZWZ0c2lkZUJlYXJpbmdkMHkxMjphZHZhbmNlV2lkdGhkNjQweTg6Y29tbWFuZHNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjIzb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyM1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEwb1IwZDc2OFIxYWQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkNjQwZDM4NGQ2NDBkMzg0ZDEwMjRkMTI4ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMGQ1MTJkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExMFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJoZzoyMjJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjIyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDlvUjBkNzY4UjFhZDBkNTEyZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwZDI1NmQ2NDBkMjU2ZDEwMjRkMzg0ZDEwMjRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMGQ1MTJkNTEyZDEwMjRkNjQwZDEwMjRkNjQwZDY0MGQ1MTJkNjQwZDUxMmQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDlSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMjFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjIxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDhvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQzODRoUjJkMjU2UjNkMTI4UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwOFIxMWQwUjEyZDI1NlIxM2FpMWkyaTJpMmkyaGc6MjIwb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyMFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA3b1IwZDc2OFIxYWQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMzg0ZDg5NmQzODRkNjQwZDUxMmQ1MTJkMzg0ZDUxMmQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQ1MTJkMTAyNGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwN1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjE5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDZvUjBkNzY4UjFhZDI1NmQzODRkMTI4ZDM4NGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQyNTZkNjQwZDEyOGQ2NDBkMTI4ZDExNTJkMjU2ZDExNTJkMjU2ZDY0MGQxMjhkMTE1MmQwZDExNTJkMGQxMjgwZDEyOGQxMjgwZDEyOGQxMTUyaFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQtMjU2UjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDZSMTFkMFIxMmQzODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjE4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA1b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQxMjhkNjQwZDBkNjQwZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwaFIyZDI1NlIzZDEyOFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDVSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjE3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDRvUjBkNzY4UjFhZDEyOGQ1MTJkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMTI4ZDUxMmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkNjQwZDM4NGQ2NDBkMzg0ZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwNFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjE2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxNlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAzb1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkMTE1MmQzODRkMTE1MmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQxMTUyZDM4NGQxMTUyZDM4NGQxMjgwZDEyOGQxMjgwZDEyOGQxMTUyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDNSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMm9SMGQ3NjhSMWFkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDEyOGQ1MTJkMTI4ZDY0MGQwZDY0MGQwZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDUxMmQxMjhkNTEyaFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDJSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjE0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxNFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAxb1IwZDc2OFIxYWQyNTZkNzY2Ljk3NmQyNTZkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkNzY2Ljk3NmQyNTZkNzY2Ljk3NmQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxM29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMG9SMGQ3NjhSMWFkMTI4ZDg5NC45NzZkMzg0ZDg5NC45NzZkMzg0ZDY0MS4wMjRkMTI4ZDY0MS4wMjRkMTI4ZDg5NC45NzZkMTI4ZDY0MGQxMjhkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQ1MTJkMzg0ZDUxMmQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMTAwUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjEyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxMlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTlvUjBkNzY4UjFhZDM4NGQ2NDBkMzg0ZDUxMmQxMjhkNTEyZDEyOGQ2NDBkMzg0ZDY0MGQxMjhkNjQwZDBkNjQwZDBkODk2ZDEyOGQ4OTZkMTI4ZDY0MGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTk5UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk4b1IwZDc2OFIxYWQzODRkNjQwZDUxMmQ2NDBkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDBkMTAyNGQwZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk3b1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkNjQwZDEyOGQ1MTJkNTEyZDUxMmQ1MTJkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTk3UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5Nm9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDEyOGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGhSMmQzODRSM2QyNTZSNGQwUjVkNjQwUjZkMzg0UjdkNjQwUjhkMFI5ZDI1NlIxMGk5NlIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk1b1IwZDc2OFIxYWQwZDg5NmQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQwZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkMTI4UjZkMFI3ZDEyOFI4ZDBSOWQyNTZSMTBpOTVSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmhnOjIwN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk0b1IwZDc2OFIxYWQxMjhkMzg0ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDEyOGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDI1NmQ2NDBkMzg0ZDY0MGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDY0MGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMzg0UjdkNjQwUjhkMFI5ZDI1NlIxMGk5NFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMDZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5M29SMGQ3NjhSMWFkMjU2ZDEwMjRkMjU2ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDI1NmQxMDI0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5M1IxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5Mm9SMGQ3NjhSMWFkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkNjQwZDEyOGQzODRkMTI4ZDUxMmQwZDUxMmQwZDM4NGQxMjhkMzg0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkNjQwZDM4NGQ3NjhkNjQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQ2NDBkODk2ZDY0MGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5MlIxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwNG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IwZDc2OFIxYWQwZDM4NGQwZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDBkMzg0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5MVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjAzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMGQ3NjhSMWFkMzg0ZDM4NGQwZDM4NGQwZDUxMmQyNTZkNTEyZDI1NmQ2NDBkMzg0ZDY0MGQzODRkMzg0ZDI1NmQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQwZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTkwUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6MjAyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIwMlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODlvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkMzg0ZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkMzg0ZDg5NmQ1MTJkODk2ZDUxMmQzODRkMzg0ZDM4NGQzODRkNjQwZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4OVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg4b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQzODRkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDc2OGQzODRkNzY4ZDEyOGQ3NjhkMGQ3NjhkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhkMzg0ZDEwMjRkNTEyZDEwMjRkNTEyZDc2OGQzODRkNzY4ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg3b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkODk2ZDEyOGQ4OTZkMTI4ZDM4NGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDg5NmQzODRkODk2ZDM4NGQ1MTJkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMzg0ZDUxMmQ4OTZkNjQwZDg5NmQ2NDBkMzg0ZDUxMmQzODRoUjJkNzY4UjNkNjQwUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTg3UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTk5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5OVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODZvUjBkNzY4UjFhZDBkODk2ZDEyOGQ4OTZkMTI4ZDM4NGQwZDM4NGQwZDg5NmQyNTZkODk2ZDM4NGQ4OTZkMzg0ZDY0MGQyNTZkNjQwZDI1NmQ4OTZkMzg0ZDM4NGQzODRkNjQwZDUxMmQ2NDBkNTEyZDM4NGQzODRkMzg0ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpODZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOThSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg1b1IwZDc2OFIxYWQzODRkODk2ZDUxMmQ4OTZkNTEyZDM4NGQzODRkMzg0ZDM4NGQ4OTZkMTI4ZDM4NGQwZDM4NGQwZDg5NmQxMjhkODk2ZDEyOGQzODRkMTI4ZDg5NmQxMjhkMTAyNGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTg1UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg0b1IwZDc2OFIxYWQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4NFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTk2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo4M29SMGQ3NjhSMWFkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDEyOGQzODRkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQzODRkMTI4ZDM4NGQzODRkNzY4ZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkNTEyZDg5NmQ1MTJkNzY4ZDM4NGQ3NjhkMzg0ZDg5NmQ1MTJkODk2ZDBkODk2ZDBkMTAyNGQzODRkMTAyNGQzODRkODk2ZDBkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjgyb1IwZDc2OFIxYWQ1MTJkMTAyNGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMGQxMDI0ZDBkMzg0ZDM4NGQzODRkMzg0ZDUxMC45NzZkMTI4ZDUxMC45NzZkMTI4ZDc2Ni45NzZkMzg0ZDc2Ni45NzZkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ3NjhkMzg0ZDc2OGQzODRkODk2ZDUxMmQ4OTZkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTgyUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTk0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODFvUjBkNzY4UjFhZDM4NGQ4OTQuOTc2ZDM4NGQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkMTE1MmQzODRkMTE1MmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQtMTI4UjdkNjQwUjhkMFI5ZDI1NlIxMGk4MVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjgwb1IwZDc2OFIxYWQzODRkNTEyZDUxMmQ1MTJkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGQwZDEwMjRkMGQzODRkMzg0ZDM4NGQzODRkNTEyZDEyOGQ3NjYuOTc2ZDM4NGQ3NjYuOTc2ZDM4NGQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ3NjYuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4MFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjc5b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzlSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTkxb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5MVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzhvUjBkNzY4UjFhZDM4NGQ3NjhkMzg0ZDEwMjRkNTEyZDEwMjRkNTEyZDM4NGQzODRkMzg0ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTBvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTkwUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3N29SMGQ3NjhSMWFkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwZDI1NmQ2NDBkMjU2ZDUxMmQxMjhkNTEyZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQxMDI0ZDY0MGQxMDI0ZDY0MGQzODRkNTEyZDM4NGQ1MTJkNTEyaFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3N1IxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTg5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4OVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzZvUjBkNzY4UjFhZDM4NGQxMDI0ZDM4NGQ4OTZkMTI4ZDg5NmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQzODRkMTAyNGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzZSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJoZzoxODhvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTg4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3NW9SMGQ3NjhSMWFkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGQyNTZkNzY4ZDI1NmQ2NDBkMTI4ZDY0MGQxMjhkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDUxMmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQyNTZkNTEyZDI1NmQ2NDBkMzg0ZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQzODRkODk2ZDUxMmQxMDI0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzVSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE4N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjc0b1IwZDc2OFIxYWQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQzODRkODk2ZDUxMmQ4OTZkNTEyZDM4NGQyNTZkMzg0ZDBkNzY4ZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzRSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE4Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjczb1IwZDc2OFIxYWQyNTZkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkNTEyaFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3M1IxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjcyb1IwZDc2OFIxYWQzODRkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGQzODRkNzY4ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQzODRkMzg0ZDM4NGQzODRkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3MlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjcxb1IwZDc2OFIxYWQ1MTJkNTEyZDUxMmQzODRkMTI4ZDM4NGQxMjhkNTEyZDUxMmQ1MTJkMTI4ZDUxMmQwZDUxMmQwZDg5NmQxMjhkODk2ZDEyOGQ1MTJkNTEyZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQzODRkODk2ZDM4NGQ3NjhkMjU2ZDc2OGQyNTZkNjQwZDUxMmQ2NDBkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTcxUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTgzb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4M1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzBvUjBkNzY4UjFhZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTcwUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTgyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2OW9SMGQ3NjhSMWFkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2ZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQzODRkMGQzODRkMGQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2OVIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY4b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkMTAyNGQwZDEwMjRkMGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTgwb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4MFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjdvUjBkNzY4UjFhZDM4NGQ1MTJkMzg0ZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMzg0ZDUxMmQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDUxMmQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTY3UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY2b1IwZDc2OFIxYWQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNzY5LjAyNGQxMjhkNzY5LjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNzY5LjAyNGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMGQxMDI0ZDBkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ2NDBkMzg0ZDY0MGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE3OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY1b1IwZDc2OFIxYWQxMjhkNTEyZDEyOGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDBkMTAyNGQwZDUxMmQxMjhkNTEyZDM4NGQ3NjhkMzg0ZDUxMy4wMjRkMTI4ZDUxMy4wMjRkMTI4ZDc2OGQzODRkNzY4aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2NVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTc3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2NG9SMGQ3NjhSMWFkNTEyZDg5NC45NzZkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTQuOTc2ZDUxMmQ4OTQuOTc2ZDUxMmQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ4OTQuOTc2ZDI1NmQ4OTQuOTc2ZDI1NmQ2NDBkNTEyZDY0MGQ1MTJkNTEzLjAyNGQ2NDBkNTEyZDY0MGQ4OTZkNTEyZDg5NmQ1MTJkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQ1MTJkMzg0ZDUxMmQ1MTJkNjQwZDUxMmhSMmQ3NjhSM2Q2NDBSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjRSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNzZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTc2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2M29SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkMzg0ZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQxMjhkNjQwZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc1b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE3NVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjJvUjBkNzY4UjFhZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQwZDM4NGQxMjhkNTEyZDEyOGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDg5NmQyNTZkODk2ZDI1NmQ3NjhkMTI4ZDc2OGQxMjhkODk2ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTYyUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE3NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjFvUjBkNzY4UjFhZDBkNTEyZDBkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQwZDUxMmQwZDc2OGQwZDg5NmQzODRkODk2ZDM4NGQ3NjhkMGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDEyOFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNjFSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTczUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2MG9SMGQ3NjhSMWFkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDI1NmQzODRkMjU2ZDUxMmQwZDc2OGQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDg5NmQyNTZkODk2ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkMTAyNGQzODRkMTAyNGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjBSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTcyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1OW9SMGQ3NjhSMWFkMTI4ZDUxMmQwZDUxMmQwZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMTI4ZDc2OGQwZDc2OGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGhSMmQyNTZSM2QxMjhSNGQwUjVkNTEyUjZkMFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNTlSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTcxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1OG9SMGQ3NjhSMWFkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQwZDg5NmhSMmQyNTZSM2QxMjhSNGQwUjVkNTEyUjZkMTI4UjdkNTEyUjhkMFI5ZDI1NlIxMGk1OFIxMWQwUjEyZDI1NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjU3b1IwZDc2OFIxYWQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk2ZDM4NGQ4OTZkMzg0ZDc2OGQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1N1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE2OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjU2b1IwZDc2OFIxYWQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkODk0Ljk3NmQzODRkNzY5LjAyNGQxMjhkNzY5LjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNzY4ZDEyOGQ3NjhkMTI4ZDY0MGQwZDY0MGQwZDUxMmQxMjhkNTEyZDEyOGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDY0MGQzODRkNjQwZDM4NGQ3NjhkNTEyZDc2OGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNjhvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTY4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDUxMmQ2NDBkNTEyZDM4NGQwZDM4NGQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDEwMjRkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1NVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTY3b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2N1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTRvUjBkNzY4UjFhZDM4NGQ4OTQuOTc2ZDM4NGQ3NjkuMDI0ZDEyOGQ3NjkuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQxMjhkNTEyZDEyOGQ2NDBkMzg0ZDY0MGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTU0UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2NlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTNvUjBkNzY4UjFhZDEyOGQ2NDBkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQzODRkMGQzODRkMGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkNTEyZDg5NmQ1MTJkNzY4ZDM4NGQxMDI0ZDM4NGQ4OTZkMGQ4OTZkMGQxMDI0ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE2NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjUyb1IwZDc2OFIxYWQxMjhkNjQxLjAyNGQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MS4wMjRkMTI4ZDY0MS4wMjRkMzg0ZDM4NGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQzODRkMzg0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1MlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTFvUjBkNzY4UjFhZDBkMzg0ZDBkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQzODRkNTEyZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQxMjhkNjQwZDUxMmQ4OTZkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkNTEyZDg5NmQwZDg5NmQwZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQwZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNjNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTYzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1MG9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkMzg0ZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQxMjhkNjQwZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMGQxMDI0ZDUxMmQxMDI0ZDUxMmQ4OTZkMTI4ZDg5NmQxMjhkNzY4ZDBkNzY4ZDBkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTBSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJoZzoxNjJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTYyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0OW9SMGQ3NjhSMWFkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQxMDI0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0OVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmhnOjE2MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDhSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTYwb1IwZDc2OFIxYWhSMmQ1MTJSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyNTZSMTBpMTYwUjExZDBSMTJkNTEyUjEzYWhnOjQ3b1IwZDc2OFIxYWQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQzODRkNTEyZDM4NGQ2NDBkNTEyZDM4NGQ1MTJkNTEyZDY0MGQ1MTJkNjQwZDM4NGQ1MTJkMzg0ZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDg5NmQyNTZkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQyNTZkNjQwZDI1NmQ3NjhkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0N1IxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ2b1IwZDc2OFIxYWQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRoUjJkMjU2UjNkMTI4UjRkMFI1ZDEyOFI2ZDBSN2QxMjhSOGQwUjlkMjU2UjEwaTQ2UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoxNThvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0NW9SMGQ3NjhSMWFkMGQ2NDBkMGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDBkNjQwaFIyZDUxMlIzZDM4NFI0ZDBSNWQzODRSNmQyNTZSN2QzODRSOGQwUjlkMjU2UjEwaTQ1UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJoZzoxNTdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0NG9SMGQ3NjhSMWFkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDBkMTE1MmQxMjhkMTE1MmQxMjhkMTAyNGQwZDEwMjRkMGQxMTUyaFIyZDM4NFIzZDI1NlI0ZDBSNWQxMjhSNmQtMTI4UjdkMTI4UjhkMFI5ZDI1NlIxMGk0NFIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQzb1IwZDc2OFIxYWQxMjhkODk2ZDI1NmQ4OTZkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQwZDY0MGQwZDc2OGQxMjhkNzY4ZDEyOGQ4OTZoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDEyOFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNDNSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0Mm9SMGQ3NjhSMWFkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQyNTZkNjQwZDM4NGQ1MTJkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMTI4ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDI1NlI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDJSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNTRvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU0UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0MW9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkODk2ZDI1NmQ4OTZkMjU2ZDUxMmQxMjhkODk2ZDBkODk2ZDBkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0MVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNTNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTUzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0MG9SMGQ3NjhSMWFkMjU2ZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDEyOGQ1MTJkMGQ1MTJkMGQ4OTZkMTI4ZDg5NmQxMjhkNTEyZDI1NmQxMDI0ZDI1NmQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGQyNTZkMTAyNGhSMmQzODRSM2QyNTZSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDBSMTFkMFIxMmQzODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTUyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE1MlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzlvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkMzg0aFIyZDI1NlIzZDEyOFI0ZDBSNWQ2NDBSNmQzODRSN2Q2NDBSOGQwUjlkMjU2UjEwaTM5UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoxNTFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTUxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozOG9SMGQ3NjhSMWFkMzg0ZDc2OS4wMjRkMTI4ZDc2OS4wMjRkMTI4ZDg5NC45NzZkMzg0ZDg5NC45NzZkMzg0ZDc2OS4wMjRkNjQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQ3NjhkMTI4ZDc2OGQxMjhkNjQwZDBkNjQwZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDM4NGQ2NDBkMzg0ZDc2OGQ1MTJkNzY4ZDUxMmQ2NDBkNjQwZDY0MGQ2NDBkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQ2NDBkODk2ZDY0MGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkzOFIxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE1MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM3b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQzODRkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQ1MTJkODk2ZDUxMmQxMDI0ZDY0MGQxMDI0ZDY0MGQ4OTZkNTEyZDg5NmhSMmQ3NjhSM2Q2NDBSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzdSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozNm9SMGQ3NjhSMWFkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDBkNjQwZDBkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkODk2ZDBkMTAyNGQyNTZkMTAyNGQyNTZkMTE1MmQzODRkMTE1MmQzODRkODk2ZDUxMmQ4OTZkNTEyZDc2OGQyNTZkNzY4ZDI1NmQ4OTZkMGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZC0xMjhSN2Q2NDBSOGQwUjlkMjU2UjEwaTM2UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE0OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM1b1IwZDc2OFIxYWQ2NDBkNjQwZDY0MGQ1MTJkNTEyZDUxMmQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDUxMmQyNTZkNTEyZDI1NmQzODRkMTI4ZDM4NGQxMjhkNTEyZDBkNTEyZDBkNjQwZDEyOGQ2NDBkMTI4ZDc2OGQwZDc2OGQwZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkODk2ZDY0MGQ4OTZkNjQwZDc2OGQ1MTJkNzY4ZDUxMmQ2NDBkNjQwZDY0MGQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkNjQwZDM4NGQ3NjhoUjJkNzY4UjNkNjQwUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTM1UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE0N1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzRvUjBkNzY4UjFhZDBkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQwZDM4NGQwZDY0MGQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ2NDBoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDM4NFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzRSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozM29SMGQ3NjhSMWFkMTI4ZDM4NGQwZDM4NGQwZDc2OGQxMjhkNzY4ZDEyOGQzODRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQyNTZSM2QxMjhSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzNSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozMm9SMGQ3NjhSMWFoUjJkNTEyUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjU2UjEwaTMyUjExZDBSMTJkNTEyUjEzYWhnOjE0NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzM29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIzOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNm9SMGQ3NjhSMWFkMTI4ZDM4NGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQxMjhkMzg0ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQwZDUxMmQwZDY0MGQzODRkNTEyZDUxMmQ1MTJkNTEyZDM4NGQzODRkMzg0ZDM4NGQ1MTJkMjU2ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMjU2ZDUxMmQyNTZkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQzODRSN2Q2NDBSOGQwUjlkMjU2UjEwaTEyNlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjM4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI1b1IwZDc2OFIxYWQyNTZkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQyNTZkNjQwZDI1NmQzODRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQ4OTZkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMjVSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjM3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjRvUjBkNzY4UjFhZDBkMTAyNGQxMjhkMTAyNGQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGhSMmQyNTZSM2QxMjhSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMTI0UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoyMzZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjM2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjNvUjBkNzY4UjFhZDEyOGQzODRkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDEyOGQzODRkMGQ3NjhkMTI4ZDc2OGQxMjhkNjQwZDBkNjQwZDBkNzY4ZDEyOGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEyM1IxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmhnOjIzNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyMm9SMGQ3NjhSMWFkMGQ1MTJkMGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMGQ1MTJkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQyNTZkODk2ZDI1NmQ3NjhkMTI4ZDc2OGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjJSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjM0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzNFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIxb1IwZDc2OFIxYWQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDUxMmQzODRkMTAyNGQzODRkMTE1MmQ1MTJkMTE1MmQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDEyOGQxMTUyZDEyOGQxMjgwZDM4NGQxMjgwZDM4NGQxMTUyZDEyOGQxMTUyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjMzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjBkNzY4UjFhZDBkNTEyZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQwZDUxMmQzODRkNTEyZDI1NmQ1MTJkMjU2ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNjQwZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMzg0ZDEwMjRkMzg0ZDg5NmQyNTZkODk2ZDI1NmQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjBSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjMyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjBkNzY4UjFhZDEyOGQ1MTJkMGQ1MTJkMGQ3NjhkMTI4ZDc2OGQxMjhkNTEyZDUxMmQ3NjhkNjQwZDc2OGQ2NDBkNTEyZDUxMmQ1MTJkNTEyZDc2OGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ1MTJkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQ3NjhkMzg0ZDc2OGQzODRkMTAyNGhSMmQ3NjhSM2Q2NDBSNGQwUjVkNTEyUjZkMFI3ZDUxMlI4ZDBSOWQyNTZSMTBpMTE5UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjMxb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzMVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE4b1IwZDc2OFIxYWQzODRkNzY4ZDUxMmQ3NjhkNTEyZDUxMmQzODRkNTEyZDM4NGQ3NjhkMTI4ZDc2OGQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQxMjhkNzY4ZDI1NmQ4OTZkMzg0ZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExOFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIzMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExN29SMGQ3NjhSMWFkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDUxMmQxMDI0ZDUxMmQ1MTJkMzg0ZDUxMmQzODRkODk2ZDEyOGQ1MTJkMGQ1MTJkMGQ4OTZkMTI4ZDg5NmQxMjhkNTEyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMTdSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyOVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE2b1IwZDc2OFIxYWQyNTZkMzg0ZDEyOGQzODRkMTI4ZDUxMmQwZDUxMmQwZDY0MGQxMjhkNjQwZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQyNTZkNTEyZDI1NmQzODRkMzg0ZDEwMjRkMzg0ZDg5NmQyNTZkODk2ZDI1NmQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMTZSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IwZDc2OFIxYWQxMjhkNTEyZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMjU2ZDc2OGQyNTZkNjQwZDUxMmQ2NDBkNTEyZDUxMmQxMjhkNTEyZDBkODk2ZDBkMTAyNGQzODRkMTAyNGQzODRkODk2ZDUxMmQ4OTZkNTEyZDc2OGQyNTZkNzY4ZDI1NmQ4OTZkMGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExNVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMjdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjI3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTRvUjBkNzY4UjFhZDM4NGQ1MTJkMjU2ZDUxMmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMGQ1MTJkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExNFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjI2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyNlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEzb1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkNjQwZDEyOGQ1MTJkNTEyZDUxMmQ1MTJkMTI4MGQzODRkMTI4MGQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZC0yNTZSN2Q1MTJSOGQwUjlkMjU2UjEwaTExM1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIyNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMjVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExMm9SMGQ3NjhSMWFkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkMTI4MGQwZDEyODBkMGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMTJSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMjRvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjI0UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZ2g"},{ name : "NME_font_5", data : "s73299:cToxMTFveTY6YXNjZW50ZDc2OHk0OmRhdGFhZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aHk2Ol93aWR0aGQ2NDB5NDp4TWF4ZDUxMnk0OnhNaW5kMHk0OnlNYXhkNTEyeTQ6eU1pbmQweTc6X2hlaWdodGQ1MTJ5NzpsZWFkaW5nZDB5NzpkZXNjZW50ZDI1Nnk4OmNoYXJDb2RlaTExMXkxNTpsZWZ0c2lkZUJlYXJpbmdkMHkxMjphZHZhbmNlV2lkdGhkNjQweTg6Y29tbWFuZHNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjIzb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyM1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEwb1IwZDc2OFIxYWQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkNjQwZDM4NGQ2NDBkMzg0ZDEwMjRkMTI4ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMGQ1MTJkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExMFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJoZzoyMjJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjIyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDlvUjBkNzY4UjFhZDBkNTEyZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwZDI1NmQ2NDBkMjU2ZDEwMjRkMzg0ZDEwMjRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMGQ1MTJkNTEyZDEwMjRkNjQwZDEwMjRkNjQwZDY0MGQ1MTJkNjQwZDUxMmQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDlSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMjFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjIxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDhvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQzODRoUjJkMjU2UjNkMTI4UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwOFIxMWQwUjEyZDI1NlIxM2FpMWkyaTJpMmkyaGc6MjIwb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyMFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA3b1IwZDc2OFIxYWQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMzg0ZDg5NmQzODRkNjQwZDUxMmQ1MTJkMzg0ZDUxMmQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQ1MTJkMTAyNGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwN1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjE5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDZvUjBkNzY4UjFhZDI1NmQzODRkMTI4ZDM4NGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQyNTZkNjQwZDEyOGQ2NDBkMTI4ZDExNTJkMjU2ZDExNTJkMjU2ZDY0MGQxMjhkMTE1MmQwZDExNTJkMGQxMjgwZDEyOGQxMjgwZDEyOGQxMTUyaFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQtMjU2UjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDZSMTFkMFIxMmQzODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjE4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA1b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQxMjhkNjQwZDBkNjQwZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwaFIyZDI1NlIzZDEyOFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDVSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjE3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDRvUjBkNzY4UjFhZDEyOGQ1MTJkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMTI4ZDUxMmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkNjQwZDM4NGQ2NDBkMzg0ZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEwNFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjE2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxNlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAzb1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkMTE1MmQzODRkMTE1MmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQxMTUyZDM4NGQxMTUyZDM4NGQxMjgwZDEyOGQxMjgwZDEyOGQxMTUyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDNSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMm9SMGQ3NjhSMWFkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDEyOGQ1MTJkMTI4ZDY0MGQwZDY0MGQwZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDUxMmQxMjhkNTEyaFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMDJSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjE0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxNFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAxb1IwZDc2OFIxYWQyNTZkNzY2Ljk3NmQyNTZkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkNzY2Ljk3NmQyNTZkNzY2Ljk3NmQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMDFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxM29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwMG9SMGQ3NjhSMWFkMTI4ZDg5NC45NzZkMzg0ZDg5NC45NzZkMzg0ZDY0MS4wMjRkMTI4ZDY0MS4wMjRkMTI4ZDg5NC45NzZkMTI4ZDY0MGQxMjhkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQ1MTJkMzg0ZDUxMmQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMTAwUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjEyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIxMlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTlvUjBkNzY4UjFhZDM4NGQ2NDBkMzg0ZDUxMmQxMjhkNTEyZDEyOGQ2NDBkMzg0ZDY0MGQxMjhkNjQwZDBkNjQwZDBkODk2ZDEyOGQ4OTZkMTI4ZDY0MGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTk5UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk4b1IwZDc2OFIxYWQzODRkNjQwZDUxMmQ2NDBkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDBkMTAyNGQwZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjIxMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk3b1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkNjQwZDEyOGQ1MTJkNTEyZDUxMmQ1MTJkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTk3UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5Nm9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDEyOGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGhSMmQzODRSM2QyNTZSNGQwUjVkNjQwUjZkMzg0UjdkNjQwUjhkMFI5ZDI1NlIxMGk5NlIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk1b1IwZDc2OFIxYWQwZDg5NmQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQwZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkMTI4UjZkMFI3ZDEyOFI4ZDBSOWQyNTZSMTBpOTVSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmhnOjIwN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk0b1IwZDc2OFIxYWQxMjhkMzg0ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDEyOGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDI1NmQ2NDBkMzg0ZDY0MGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDY0MGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMzg0UjdkNjQwUjhkMFI5ZDI1NlIxMGk5NFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMDZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5M29SMGQ3NjhSMWFkMjU2ZDEwMjRkMjU2ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDI1NmQxMDI0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5M1IxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjA1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5Mm9SMGQ3NjhSMWFkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkNjQwZDEyOGQzODRkMTI4ZDUxMmQwZDUxMmQwZDM4NGQxMjhkMzg0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkNjQwZDM4NGQ3NjhkNjQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQ2NDBkODk2ZDY0MGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5MlIxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwNG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IwZDc2OFIxYWQwZDM4NGQwZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDBkMzg0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk5MVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjAzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMGQ3NjhSMWFkMzg0ZDM4NGQwZDM4NGQwZDUxMmQyNTZkNTEyZDI1NmQ2NDBkMzg0ZDY0MGQzODRkMzg0ZDI1NmQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQwZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTkwUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6MjAyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIwMlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODlvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkMzg0ZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkMzg0ZDg5NmQ1MTJkODk2ZDUxMmQzODRkMzg0ZDM4NGQzODRkNjQwZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4OVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg4b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQzODRkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDc2OGQzODRkNzY4ZDEyOGQ3NjhkMGQ3NjhkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhkMzg0ZDEwMjRkNTEyZDEwMjRkNTEyZDc2OGQzODRkNzY4ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIwMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg3b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkODk2ZDEyOGQ4OTZkMTI4ZDM4NGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDg5NmQzODRkODk2ZDM4NGQ1MTJkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMzg0ZDUxMmQ4OTZkNjQwZDg5NmQ2NDBkMzg0ZDUxMmQzODRoUjJkNzY4UjNkNjQwUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTg3UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTk5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5OVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODZvUjBkNzY4UjFhZDBkODk2ZDEyOGQ4OTZkMTI4ZDM4NGQwZDM4NGQwZDg5NmQyNTZkODk2ZDM4NGQ4OTZkMzg0ZDY0MGQyNTZkNjQwZDI1NmQ4OTZkMzg0ZDM4NGQzODRkNjQwZDUxMmQ2NDBkNTEyZDM4NGQzODRkMzg0ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpODZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOThSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg1b1IwZDc2OFIxYWQzODRkODk2ZDUxMmQ4OTZkNTEyZDM4NGQzODRkMzg0ZDM4NGQ4OTZkMTI4ZDM4NGQwZDM4NGQwZDg5NmQxMjhkODk2ZDEyOGQzODRkMTI4ZDg5NmQxMjhkMTAyNGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTg1UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjg0b1IwZDc2OFIxYWQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4NFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTk2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo4M29SMGQ3NjhSMWFkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDEyOGQzODRkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQzODRkMTI4ZDM4NGQzODRkNzY4ZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkNTEyZDg5NmQ1MTJkNzY4ZDM4NGQ3NjhkMzg0ZDg5NmQ1MTJkODk2ZDBkODk2ZDBkMTAyNGQzODRkMTAyNGQzODRkODk2ZDBkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjgyb1IwZDc2OFIxYWQ1MTJkMTAyNGQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMGQxMDI0ZDBkMzg0ZDM4NGQzODRkMzg0ZDUxMC45NzZkMTI4ZDUxMC45NzZkMTI4ZDc2Ni45NzZkMzg0ZDc2Ni45NzZkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ3NjhkMzg0ZDc2OGQzODRkODk2ZDUxMmQ4OTZkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTgyUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTk0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODFvUjBkNzY4UjFhZDM4NGQ4OTQuOTc2ZDM4NGQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkMTE1MmQzODRkMTE1MmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQtMTI4UjdkNjQwUjhkMFI5ZDI1NlIxMGk4MVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjgwb1IwZDc2OFIxYWQzODRkNTEyZDUxMmQ1MTJkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGQwZDEwMjRkMGQzODRkMzg0ZDM4NGQzODRkNTEyZDEyOGQ3NjYuOTc2ZDM4NGQ3NjYuOTc2ZDM4NGQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ3NjYuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk4MFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE5Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxOTJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjc5b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzlSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTkxb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE5MVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzhvUjBkNzY4UjFhZDM4NGQ3NjhkMzg0ZDEwMjRkNTEyZDEwMjRkNTEyZDM4NGQzODRkMzg0ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTBvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTkwUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3N29SMGQ3NjhSMWFkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQxMjhkMTAyNGQxMjhkNjQwZDI1NmQ2NDBkMjU2ZDUxMmQxMjhkNTEyZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQxMDI0ZDY0MGQxMDI0ZDY0MGQzODRkNTEyZDM4NGQ1MTJkNTEyaFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3N1IxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTg5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4OVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzZvUjBkNzY4UjFhZDM4NGQxMDI0ZDM4NGQ4OTZkMTI4ZDg5NmQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGQzODRkMTAyNGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzZSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJoZzoxODhvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTg4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo3NW9SMGQ3NjhSMWFkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGQyNTZkNzY4ZDI1NmQ2NDBkMTI4ZDY0MGQxMjhkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDUxMmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQyNTZkNTEyZDI1NmQ2NDBkMzg0ZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQzODRkODk2ZDUxMmQxMDI0ZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzVSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE4N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjc0b1IwZDc2OFIxYWQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQzODRkODk2ZDUxMmQ4OTZkNTEyZDM4NGQyNTZkMzg0ZDBkNzY4ZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNzRSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE4Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjczb1IwZDc2OFIxYWQyNTZkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkNTEyaFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3M1IxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjcyb1IwZDc2OFIxYWQzODRkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQwZDM4NGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGQzODRkNzY4ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQzODRkMzg0ZDM4NGQzODRkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk3MlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjcxb1IwZDc2OFIxYWQ1MTJkNTEyZDUxMmQzODRkMTI4ZDM4NGQxMjhkNTEyZDUxMmQ1MTJkMTI4ZDUxMmQwZDUxMmQwZDg5NmQxMjhkODk2ZDEyOGQ1MTJkNTEyZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQzODRkODk2ZDM4NGQ3NjhkMjU2ZDc2OGQyNTZkNjQwZDUxMmQ2NDBkNTEyZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTcxUjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTgzb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4M1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzBvUjBkNzY4UjFhZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQzODRkMGQzODRkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTcwUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTgyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2OW9SMGQ3NjhSMWFkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2ZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQzODRkNTEyZDM4NGQzODRkMGQzODRkMGQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2OVIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxODFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY4b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkMTAyNGQwZDEwMjRkMGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2OFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTgwb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE4MFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjdvUjBkNzY4UjFhZDM4NGQ1MTJkMzg0ZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMzg0ZDUxMmQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDUxMmQzODRkMTAyNGQzODRkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRkMzg0ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTY3UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY2b1IwZDc2OFIxYWQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNzY5LjAyNGQxMjhkNzY5LjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNzY5LjAyNGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMGQxMDI0ZDBkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ2NDBkMzg0ZDY0MGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE3OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjY1b1IwZDc2OFIxYWQxMjhkNTEyZDEyOGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDBkMTAyNGQwZDUxMmQxMjhkNTEyZDM4NGQ3NjhkMzg0ZDUxMy4wMjRkMTI4ZDUxMy4wMjRkMTI4ZDc2OGQzODRkNzY4aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2NVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTc3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2NG9SMGQ3NjhSMWFkNTEyZDg5NC45NzZkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTQuOTc2ZDUxMmQ4OTQuOTc2ZDUxMmQ1MTMuMDI0ZDEyOGQ1MTMuMDI0ZDEyOGQ4OTQuOTc2ZDI1NmQ4OTQuOTc2ZDI1NmQ2NDBkNTEyZDY0MGQ1MTJkNTEzLjAyNGQ2NDBkNTEyZDY0MGQ4OTZkNTEyZDg5NmQ1MTJkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQ1MTJkMzg0ZDUxMmQ1MTJkNjQwZDUxMmhSMmQ3NjhSM2Q2NDBSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjRSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNzZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTc2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2M29SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkMzg0ZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQxMjhkNjQwZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk2M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc1b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE3NVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjJvUjBkNzY4UjFhZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQwZDM4NGQxMjhkNTEyZDEyOGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDg5NmQyNTZkODk2ZDI1NmQ3NjhkMTI4ZDc2OGQxMjhkODk2ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTYyUjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTc0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE3NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NjFvUjBkNzY4UjFhZDBkNTEyZDBkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQwZDUxMmQwZDc2OGQwZDg5NmQzODRkODk2ZDM4NGQ3NjhkMGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDEyOFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNjFSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTczUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo2MG9SMGQ3NjhSMWFkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDI1NmQzODRkMjU2ZDUxMmQwZDc2OGQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDg5NmQyNTZkODk2ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkMTAyNGQzODRkMTAyNGhSMmQ1MTJSM2QzODRSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNjBSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTcyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1OW9SMGQ3NjhSMWFkMTI4ZDUxMmQwZDUxMmQwZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMTI4ZDc2OGQwZDc2OGQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDc2OGhSMmQyNTZSM2QxMjhSNGQwUjVkNTEyUjZkMFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNTlSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNzFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTcxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1OG9SMGQ3NjhSMWFkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDBkNTEyZDBkNjQwZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQwZDc2OGQwZDg5NmhSMmQyNTZSM2QxMjhSNGQwUjVkNTEyUjZkMTI4UjdkNTEyUjhkMFI5ZDI1NlIxMGk1OFIxMWQwUjEyZDI1NlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjU3b1IwZDc2OFIxYWQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk2ZDM4NGQ4OTZkMzg0ZDc2OGQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQ1MTJkNTEyZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1N1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE2OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjU2b1IwZDc2OFIxYWQzODRkNjM4Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkNjM4Ljk3NmQzODRkNjM4Ljk3NmQzODRkODk0Ljk3NmQzODRkNzY5LjAyNGQxMjhkNzY5LjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNzY4ZDEyOGQ3NjhkMTI4ZDY0MGQwZDY0MGQwZDUxMmQxMjhkNTEyZDEyOGQzODRkMzg0ZDM4NGQzODRkNTEyZDUxMmQ1MTJkNTEyZDY0MGQzODRkNjQwZDM4NGQ3NjhkNTEyZDc2OGQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTZSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNjhvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTY4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDUxMmQ2NDBkNTEyZDM4NGQwZDM4NGQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDEwMjRkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1NVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTY3b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2N1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTRvUjBkNzY4UjFhZDM4NGQ4OTQuOTc2ZDM4NGQ3NjkuMDI0ZDEyOGQ3NjkuMDI0ZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDEyOGQ4OTZkMGQ4OTZkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDM4NGQzODRkMzg0ZDUxMmQxMjhkNTEyZDEyOGQ2NDBkMzg0ZDY0MGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTU0UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2NlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTNvUjBkNzY4UjFhZDEyOGQ2NDBkMTI4ZDUxMmQ1MTJkNTEyZDUxMmQzODRkMGQzODRkMGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkNTEyZDg5NmQ1MTJkNzY4ZDM4NGQxMDI0ZDM4NGQ4OTZkMGQ4OTZkMGQxMDI0ZDM4NGQxMDI0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1M1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE2NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjUyb1IwZDc2OFIxYWQxMjhkNjQxLjAyNGQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MS4wMjRkMTI4ZDY0MS4wMjRkMzg0ZDM4NGQzODRkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMGQ4OTZkMGQ2NDBkMTI4ZDY0MGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQzODRkMzg0aFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk1MlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTY0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE2NFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NTFvUjBkNzY4UjFhZDBkMzg0ZDBkNTEyZDM4NGQ1MTJkMzg0ZDM4NGQwZDM4NGQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQzODRkNTEyZDM4NGQ2NDBkMTI4ZDY0MGQxMjhkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQxMjhkNjQwZDUxMmQ4OTZkNTEyZDc2OGQzODRkNzY4ZDM4NGQ4OTZkNTEyZDg5NmQwZDg5NmQwZDEwMjRkMzg0ZDEwMjRkMzg0ZDg5NmQwZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNjNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTYzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1MG9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkMzg0ZDM4NGQ2NDBkNTEyZDY0MGQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDY0MGQxMjhkNjQwZDEyOGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDEyOGQ2NDBkMGQxMDI0ZDUxMmQxMDI0ZDUxMmQ4OTZkMTI4ZDg5NmQxMjhkNzY4ZDBkNzY4ZDBkMTAyNGhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNTBSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJoZzoxNjJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTYyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0OW9SMGQ3NjhSMWFkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDM4NGQwZDM4NGQwZDUxMmQxMjhkNTEyZDEyOGQxMDI0aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0OVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTJpMmhnOjE2MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNjFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IwZDc2OFIxYWQzODRkODk0Ljk3NmQzODRkNTEzLjAyNGQxMjhkNTEzLjAyNGQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQxMjhkODk2ZDBkODk2ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkNTEyZDUxMmQ1MTJkODk2ZDM4NGQ4OTZkMzg0ZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQ2NDBSM2Q1MTJSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDhSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTYwb1IwZDc2OFIxYWhSMmQ1MTJSM2QwUjRkMFI1ZDBSNmQwUjdkMFI4ZDBSOWQyNTZSMTBpMTYwUjExZDBSMTJkNTEyUjEzYWhnOjQ3b1IwZDc2OFIxYWQzODRkNjQwZDUxMmQ2NDBkNTEyZDUxMmQzODRkNTEyZDM4NGQ2NDBkNTEyZDM4NGQ1MTJkNTEyZDY0MGQ1MTJkNjQwZDM4NGQ1MTJkMzg0ZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDg5NmQyNTZkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQyNTZkNjQwZDI1NmQ3NjhkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0N1IxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ2b1IwZDc2OFIxYWQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRoUjJkMjU2UjNkMTI4UjRkMFI1ZDEyOFI2ZDBSN2QxMjhSOGQwUjlkMjU2UjEwaTQ2UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoxNThvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU4UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0NW9SMGQ3NjhSMWFkMGQ2NDBkMGQ3NjhkMzg0ZDc2OGQzODRkNjQwZDBkNjQwaFIyZDUxMlIzZDM4NFI0ZDBSNWQzODRSNmQyNTZSN2QzODRSOGQwUjlkMjU2UjEwaTQ1UjExZDBSMTJkNTEyUjEzYWkxaTJpMmkyaTJoZzoxNTdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0NG9SMGQ3NjhSMWFkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDBkMTE1MmQxMjhkMTE1MmQxMjhkMTAyNGQwZDEwMjRkMGQxMTUyaFIyZDM4NFIzZDI1NlI0ZDBSNWQxMjhSNmQtMTI4UjdkMTI4UjhkMFI5ZDI1NlIxMGk0NFIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQzb1IwZDc2OFIxYWQxMjhkODk2ZDI1NmQ4OTZkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQwZDY0MGQwZDc2OGQxMjhkNzY4ZDEyOGQ4OTZoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDEyOFI3ZDUxMlI4ZDBSOWQyNTZSMTBpNDNSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0Mm9SMGQ3NjhSMWFkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMjU2ZDY0MGQyNTZkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQyNTZkNjQwZDM4NGQ1MTJkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMzg0ZDUxMmQxMjhkNzY4ZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMTI4ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDI1NlI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDJSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNTRvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTU0UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0MW9SMGQ3NjhSMWFkMGQzODRkMGQ1MTJkMTI4ZDUxMmQxMjhkMzg0ZDBkMzg0ZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkODk2ZDI1NmQ4OTZkMjU2ZDUxMmQxMjhkODk2ZDBkODk2ZDBkMTAyNGQxMjhkMTAyNGQxMjhkODk2aFIyZDM4NFIzZDI1NlI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGk0MVIxMWQwUjEyZDM4NFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNTNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTUzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0MG9SMGQ3NjhSMWFkMjU2ZDM4NGQxMjhkMzg0ZDEyOGQ1MTJkMjU2ZDUxMmQyNTZkMzg0ZDEyOGQ1MTJkMGQ1MTJkMGQ4OTZkMTI4ZDg5NmQxMjhkNTEyZDI1NmQxMDI0ZDI1NmQ4OTZkMTI4ZDg5NmQxMjhkMTAyNGQyNTZkMTAyNGhSMmQzODRSM2QyNTZSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpNDBSMTFkMFIxMmQzODRSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTUyb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE1MlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzlvUjBkNzY4UjFhZDEyOGQzODRkMGQzODRkMGQ2NDBkMTI4ZDY0MGQxMjhkMzg0aFIyZDI1NlIzZDEyOFI0ZDBSNWQ2NDBSNmQzODRSN2Q2NDBSOGQwUjlkMjU2UjEwaTM5UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoxNTFvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTUxUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozOG9SMGQ3NjhSMWFkMzg0ZDc2OS4wMjRkMTI4ZDc2OS4wMjRkMTI4ZDg5NC45NzZkMzg0ZDg5NC45NzZkMzg0ZDc2OS4wMjRkNjQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQzODRkODk2ZDM4NGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMGQ4OTZkMGQ3NjhkMTI4ZDc2OGQxMjhkNjQwZDBkNjQwZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQzODRkMzg0ZDM4NGQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDM4NGQ2NDBkMzg0ZDc2OGQ1MTJkNzY4ZDUxMmQ2NDBkNjQwZDY0MGQ2NDBkNzY4ZDUxMmQ3NjhkNTEyZDg5NmQ2NDBkODk2ZDY0MGQxMDI0aFIyZDc2OFIzZDY0MFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkzOFIxMWQwUjEyZDc2OFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE1MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM3b1IwZDc2OFIxYWQxMjhkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDM4NGQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQzODRkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDI1NmQ3NjhkMzg0ZDc2OGQzODRkNjQwZDI1NmQ2NDBkMjU2ZDc2OGQ1MTJkODk2ZDUxMmQxMDI0ZDY0MGQxMDI0ZDY0MGQ4OTZkNTEyZDg5NmhSMmQ3NjhSM2Q2NDBSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzdSMTFkMFIxMmQ3NjhSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDlvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ5UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozNm9SMGQ3NjhSMWFkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ1MTJkMTI4ZDUxMmQxMjhkNjQwZDBkNjQwZDBkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDBkODk2ZDBkMTAyNGQyNTZkMTAyNGQyNTZkMTE1MmQzODRkMTE1MmQzODRkODk2ZDUxMmQ4OTZkNTEyZDc2OGQyNTZkNzY4ZDI1NmQ4OTZkMGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDY0MFI2ZC0xMjhSN2Q2NDBSOGQwUjlkMjU2UjEwaTM2UjExZDBSMTJkNjQwUjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE0OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM1b1IwZDc2OFIxYWQ2NDBkNjQwZDY0MGQ1MTJkNTEyZDUxMmQ1MTJkMzg0ZDM4NGQzODRkMzg0ZDUxMmQyNTZkNTEyZDI1NmQzODRkMTI4ZDM4NGQxMjhkNTEyZDBkNTEyZDBkNjQwZDEyOGQ2NDBkMTI4ZDc2OGQwZDc2OGQwZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDI1NmQxMDI0ZDI1NmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQ1MTJkMTAyNGQ1MTJkODk2ZDY0MGQ4OTZkNjQwZDc2OGQ1MTJkNzY4ZDUxMmQ2NDBkNjQwZDY0MGQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQzODRkNjQwZDM4NGQ3NjhoUjJkNzY4UjNkNjQwUjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTM1UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTE0N1IxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzRvUjBkNzY4UjFhZDBkNjQwZDEyOGQ2NDBkMTI4ZDM4NGQwZDM4NGQwZDY0MGQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDM4NGQyNTZkMzg0ZDI1NmQ2NDBoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDM4NFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzRSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozM29SMGQ3NjhSMWFkMTI4ZDM4NGQwZDM4NGQwZDc2OGQxMjhkNzY4ZDEyOGQzODRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkMTI4ZDEwMjRkMTI4ZDg5NmhSMmQyNTZSM2QxMjhSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMzNSMTFkMFIxMmQyNTZSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDVvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMTQ1UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozMm9SMGQ3NjhSMWFoUjJkNTEyUjNkMFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkMjU2UjEwaTMyUjExZDBSMTJkNTEyUjEzYWhnOjE0NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxNDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI1MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNTBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0N29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Nm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDZSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzM29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0NW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0NG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDRSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0M29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDNSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Mm9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDJSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0MW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDFSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyOG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjhSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0MG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyNDBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyN29SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkxMjdSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIzOW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzlSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyNm9SMGQ3NjhSMWFkMTI4ZDM4NGQxMjhkNTEyZDI1NmQ1MTJkMjU2ZDM4NGQxMjhkMzg0ZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQwZDUxMmQwZDY0MGQzODRkNTEyZDUxMmQ1MTJkNTEyZDM4NGQzODRkMzg0ZDM4NGQ1MTJkMjU2ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMjU2ZDUxMmQyNTZkNjQwaFIyZDY0MFIzZDUxMlI0ZDBSNWQ2NDBSNmQzODRSN2Q2NDBSOGQwUjlkMjU2UjEwaTEyNlIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjM4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI1b1IwZDc2OFIxYWQyNTZkMzg0ZDBkMzg0ZDBkNTEyZDEyOGQ1MTJkMTI4ZDY0MGQyNTZkNjQwZDI1NmQzODRkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQ4OTZkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ2NDBkMjU2ZDY0MGQyNTZkNzY4aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMjVSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjM3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjRvUjBkNzY4UjFhZDBkMTAyNGQxMjhkMTAyNGQxMjhkMzg0ZDBkMzg0ZDBkMTAyNGhSMmQyNTZSM2QxMjhSNGQwUjVkNjQwUjZkMFI3ZDY0MFI4ZDBSOWQyNTZSMTBpMTI0UjExZDBSMTJkMjU2UjEzYWkxaTJpMmkyaTJoZzoyMzZvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjM2UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjNvUjBkNzY4UjFhZDEyOGQzODRkMTI4ZDY0MGQyNTZkNjQwZDI1NmQ1MTJkMzg0ZDUxMmQzODRkMzg0ZDEyOGQzODRkMGQ3NjhkMTI4ZDc2OGQxMjhkNjQwZDBkNjQwZDBkNzY4ZDEyOGQxMDI0ZDM4NGQxMDI0ZDM4NGQ4OTZkMjU2ZDg5NmQyNTZkNzY4ZDEyOGQ3NjhkMTI4ZDEwMjRoUjJkNTEyUjNkMzg0UjRkMFI1ZDY0MFI2ZDBSN2Q2NDBSOGQwUjlkMjU2UjEwaTEyM1IxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmhnOjIzNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyMm9SMGQ3NjhSMWFkMGQ1MTJkMGQ2NDBkMjU2ZDY0MGQyNTZkNzY4ZDM4NGQ3NjhkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ1MTJkMGQ1MTJkMTI4ZDg5NmQwZDg5NmQwZDEwMjRkNTEyZDEwMjRkNTEyZDg5NmQyNTZkODk2ZDI1NmQ3NjhkMTI4ZDc2OGQxMjhkODk2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjJSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjM0b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzNFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIxb1IwZDc2OFIxYWQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDUxMmQzODRkMTAyNGQzODRkMTE1MmQ1MTJkMTE1MmQ1MTJkNTEyZDM4NGQ1MTJkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDM4NGQxMDI0ZDEyOGQxMTUyZDEyOGQxMjgwZDM4NGQxMjgwZDM4NGQxMTUyZDEyOGQxMTUyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjFSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzNvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjMzUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjBkNzY4UjFhZDBkNTEyZDBkNjQwZDEyOGQ2NDBkMTI4ZDUxMmQwZDUxMmQzODRkNTEyZDI1NmQ1MTJkMjU2ZDY0MGQzODRkNjQwZDM4NGQ1MTJkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNjQwZDEyOGQ4OTZkMGQ4OTZkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ4OTZkMzg0ZDEwMjRkMzg0ZDg5NmQyNTZkODk2ZDI1NmQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMjBSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMzJvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjMyUjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjBkNzY4UjFhZDEyOGQ1MTJkMGQ1MTJkMGQ3NjhkMTI4ZDc2OGQxMjhkNTEyZDUxMmQ3NjhkNjQwZDc2OGQ2NDBkNTEyZDUxMmQ1MTJkNTEyZDc2OGQzODRkNTEyZDI1NmQ1MTJkMjU2ZDc2OGQzODRkNzY4ZDM4NGQ1MTJkMTI4ZDEwMjRkMjU2ZDEwMjRkMjU2ZDc2OGQxMjhkNzY4ZDEyOGQxMDI0ZDM4NGQxMDI0ZDUxMmQxMDI0ZDUxMmQ3NjhkMzg0ZDc2OGQzODRkMTAyNGhSMmQ3NjhSM2Q2NDBSNGQwUjVkNTEyUjZkMFI3ZDUxMlI4ZDBSOWQyNTZSMTBpMTE5UjExZDBSMTJkNzY4UjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjMxb1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIzMVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE4b1IwZDc2OFIxYWQzODRkNzY4ZDUxMmQ3NjhkNTEyZDUxMmQzODRkNTEyZDM4NGQ3NjhkMTI4ZDc2OGQxMjhkNTEyZDBkNTEyZDBkODk2ZDEyOGQ4OTZkMTI4ZDc2OGQxMjhkNzY4ZDI1NmQ4OTZkMzg0ZDg5NmQzODRkNzY4ZDI1NmQ3NjhkMjU2ZDg5NmQxMjhkMTAyNGQyNTZkMTAyNGQyNTZkODk2ZDEyOGQ4OTZkMTI4ZDEwMjRoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExOFIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjIzMG9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMzBSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExN29SMGQ3NjhSMWFkMzg0ZDg5NmQxMjhkODk2ZDEyOGQxMDI0ZDUxMmQxMDI0ZDUxMmQ1MTJkMzg0ZDUxMmQzODRkODk2ZDEyOGQ1MTJkMGQ1MTJkMGQ4OTZkMTI4ZDg5NmQxMjhkNTEyaFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQwUjdkNTEyUjhkMFI5ZDI1NlIxMGkxMTdSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI5b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyOVIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE2b1IwZDc2OFIxYWQyNTZkMzg0ZDEyOGQzODRkMTI4ZDUxMmQwZDUxMmQwZDY0MGQxMjhkNjQwZDEyOGQ4OTZkMjU2ZDg5NmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQyNTZkNTEyZDI1NmQzODRkMzg0ZDEwMjRkMzg0ZDg5NmQyNTZkODk2ZDI1NmQxMDI0ZDM4NGQxMDI0aFIyZDUxMlIzZDM4NFI0ZDBSNWQ2NDBSNmQwUjdkNjQwUjhkMFI5ZDI1NlIxMGkxMTZSMTFkMFIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjI4b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyOFIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IwZDc2OFIxYWQxMjhkNTEyZDEyOGQ2NDBkMGQ2NDBkMGQ3NjhkMjU2ZDc2OGQyNTZkNjQwZDUxMmQ2NDBkNTEyZDUxMmQxMjhkNTEyZDBkODk2ZDBkMTAyNGQzODRkMTAyNGQzODRkODk2ZDUxMmQ4OTZkNTEyZDc2OGQyNTZkNzY4ZDI1NmQ4OTZkMGQ4OTZoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExNVIxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMjdvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjI3UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTRvUjBkNzY4UjFhZDM4NGQ1MTJkMjU2ZDUxMmQyNTZkNjQwZDM4NGQ2NDBkMzg0ZDUxMmQxMjhkNzY4ZDI1NmQ3NjhkMjU2ZDY0MGQxMjhkNjQwZDEyOGQ1MTJkMGQ1MTJkMGQxMDI0ZDEyOGQxMDI0ZDEyOGQ3NjhoUjJkNTEyUjNkMzg0UjRkMFI1ZDUxMlI2ZDBSN2Q1MTJSOGQwUjlkMjU2UjEwaTExNFIxMWQwUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjI2b1IwZDc2OFIxYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSMmQ1MTJSM2Q0NDguNTEyUjRkNjQuNTEyUjVkNzY4UjZkMFI3ZDcwMy40ODhSOGQwUjlkMjU2UjEwaTIyNlIxMWQ2NC41MTJSMTJkNTEyUjEzYWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTEzb1IwZDc2OFIxYWQxMjhkODk0Ljk3NmQzODRkODk0Ljk3NmQzODRkNjQxLjAyNGQxMjhkNjQxLjAyNGQxMjhkODk0Ljk3NmQxMjhkNjQwZDEyOGQ1MTJkNTEyZDUxMmQ1MTJkMTI4MGQzODRkMTI4MGQzODRkMTAyNGQxMjhkMTAyNGQxMjhkODk2ZDBkODk2ZDBkNjQwZDEyOGQ2NDBoUjJkNjQwUjNkNTEyUjRkMFI1ZDUxMlI2ZC0yNTZSN2Q1MTJSOGQwUjlkMjU2UjEwaTExM1IxMWQwUjEyZDY0MFIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIyNW9SMGQ3NjhSMWFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjJkNTEyUjNkNDQ4LjUxMlI0ZDY0LjUxMlI1ZDc2OFI2ZDBSN2Q3MDMuNDg4UjhkMFI5ZDI1NlIxMGkyMjVSMTFkNjQuNTEyUjEyZDUxMlIxM2FpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjExMm9SMGQ3NjhSMWFkMzg0ZDY0MGQ1MTJkNjQwZDUxMmQ4OTZkMzg0ZDg5NmQzODRkMTAyNGQxMjhkMTAyNGQxMjhkMTI4MGQwZDEyODBkMGQ1MTJkMzg0ZDUxMmQzODRkNjQwZDEyOGQ4OTQuOTc2ZDM4NGQ4OTQuOTc2ZDM4NGQ2NDEuMDI0ZDEyOGQ2NDEuMDI0ZDEyOGQ4OTQuOTc2aFIyZDY0MFIzZDUxMlI0ZDBSNWQ1MTJSNmQtMjU2UjdkNTEyUjhkMFI5ZDI1NlIxMGkxMTJSMTFkMFIxMmQ2NDBSMTNhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMjRvUjBkNzY4UjFhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIyZDUxMlIzZDQ0OC41MTJSNGQ2NC41MTJSNWQ3NjhSNmQwUjdkNzAzLjQ4OFI4ZDBSOWQyNTZSMTBpMjI0UjExZDY0LjUxMlIxMmQ1MTJSMTNhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZ2g"}];
browser.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
browser.text.Font.DEFAULT_FONT_SCALE = 9.0;
browser.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
browser.text.Font.DEFAULT_CLASS_NAME = "browser.text.Font";
browser.display.DisplayObject.GRAPHICS_INVALID = 2;
browser.display.DisplayObject.MATRIX_INVALID = 4;
browser.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
browser.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
browser.display.DisplayObject.TRANSFORM_INVALID = 32;
browser.display.DisplayObject.BOUNDS_INVALID = 64;
browser.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
browser.display.DisplayObject.ALL_RENDER_FLAGS = 98;
browser.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
browser.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
browser.Lib.DEFAULT_HEIGHT = 500;
browser.Lib.DEFAULT_WIDTH = 500;
browser.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
browser.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
browser.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
browser.Lib.NME_IDENTIFIER = "haxe:jeash";
browser.Lib.VENDOR_HTML_TAG = "data-";
browser.Lib.starttime = haxe.Timer.stamp();
browser.display._BitmapData.MinstdGenerator.a = 16807;
browser.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
browser.display.BitmapDataChannel.ALPHA = 8;
browser.display.BitmapDataChannel.BLUE = 4;
browser.display.BitmapDataChannel.GREEN = 2;
browser.display.BitmapDataChannel.RED = 1;
browser.display.Graphics.TILE_SCALE = 1;
browser.display.Graphics.TILE_ROTATION = 2;
browser.display.Graphics.TILE_RGB = 4;
browser.display.Graphics.TILE_ALPHA = 8;
browser.display.Graphics.TILE_TRANS_2x2 = 16;
browser.display.Graphics.TILE_BLEND_NORMAL = 0;
browser.display.Graphics.TILE_BLEND_ADD = 65536;
browser.display.Graphics.BMP_REPEAT = 16;
browser.display.Graphics.BMP_SMOOTH = 65536;
browser.display.Graphics.CORNER_ROUND = 0;
browser.display.Graphics.CORNER_MITER = 4096;
browser.display.Graphics.CORNER_BEVEL = 8192;
browser.display.Graphics.CURVE = 2;
browser.display.Graphics.END_NONE = 0;
browser.display.Graphics.END_ROUND = 256;
browser.display.Graphics.END_SQUARE = 512;
browser.display.Graphics.LINE = 1;
browser.display.Graphics.MOVE = 0;
browser.display.Graphics.NME_MAX_DIM = 5000;
browser.display.Graphics.PIXEL_HINTING = 16384;
browser.display.Graphics.RADIAL = 1;
browser.display.Graphics.SCALE_HORIZONTAL = 2;
browser.display.Graphics.SCALE_NONE = 0;
browser.display.Graphics.SCALE_NORMAL = 3;
browser.display.Graphics.SCALE_VERTICAL = 1;
browser.display.Graphics.SPREAD_REPEAT = 2;
browser.display.Graphics.SPREAD_REFLECT = 4;
browser.display.GraphicsPathCommand.LINE_TO = 2;
browser.display.GraphicsPathCommand.MOVE_TO = 1;
browser.display.GraphicsPathCommand.CURVE_TO = 3;
browser.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
browser.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
browser.display.GraphicsPathCommand.NO_OP = 0;
browser.events.Event.ACTIVATE = "activate";
browser.events.Event.ADDED = "added";
browser.events.Event.ADDED_TO_STAGE = "addedToStage";
browser.events.Event.CANCEL = "cancel";
browser.events.Event.CHANGE = "change";
browser.events.Event.CLOSE = "close";
browser.events.Event.COMPLETE = "complete";
browser.events.Event.CONNECT = "connect";
browser.events.Event.CONTEXT3D_CREATE = "context3DCreate";
browser.events.Event.DEACTIVATE = "deactivate";
browser.events.Event.ENTER_FRAME = "enterFrame";
browser.events.Event.ID3 = "id3";
browser.events.Event.INIT = "init";
browser.events.Event.MOUSE_LEAVE = "mouseLeave";
browser.events.Event.OPEN = "open";
browser.events.Event.REMOVED = "removed";
browser.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
browser.events.Event.RENDER = "render";
browser.events.Event.RESIZE = "resize";
browser.events.Event.SCROLL = "scroll";
browser.events.Event.SELECT = "select";
browser.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
browser.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
browser.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
browser.events.Event.UNLOAD = "unload";
browser.events.Event.SOUND_COMPLETE = "soundComplete";
browser.events.MouseEvent.CLICK = "click";
browser.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
browser.events.MouseEvent.MOUSE_DOWN = "mouseDown";
browser.events.MouseEvent.MOUSE_MOVE = "mouseMove";
browser.events.MouseEvent.MOUSE_OUT = "mouseOut";
browser.events.MouseEvent.MOUSE_OVER = "mouseOver";
browser.events.MouseEvent.MOUSE_UP = "mouseUp";
browser.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
browser.events.MouseEvent.RIGHT_CLICK = "rightClick";
browser.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
browser.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
browser.events.MouseEvent.ROLL_OUT = "rollOut";
browser.events.MouseEvent.ROLL_OVER = "rollOver";
browser.display.Stage.NAME = "Stage";
browser.display.Stage.nmeAcceleration = { x : 0.0, y : 1.0, z : 0.0};
browser.display.Stage.OrientationPortrait = 1;
browser.display.Stage.OrientationPortraitUpsideDown = 2;
browser.display.Stage.OrientationLandscapeRight = 3;
browser.display.Stage.OrientationLandscapeLeft = 4;
browser.display.Stage.DEFAULT_FRAMERATE = 0.0;
browser.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
browser.display.Stage.nmeMouseChanges = [browser.events.MouseEvent.MOUSE_OUT,browser.events.MouseEvent.MOUSE_OVER,browser.events.MouseEvent.ROLL_OUT,browser.events.MouseEvent.ROLL_OVER];
browser.display.Stage.nmeTouchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
browser.display.StageQuality.BEST = "best";
browser.display.StageQuality.HIGH = "high";
browser.display.StageQuality.MEDIUM = "medium";
browser.display.StageQuality.LOW = "low";
browser.display.Tilesheet.TILE_SCALE = 1;
browser.display.Tilesheet.TILE_ROTATION = 2;
browser.display.Tilesheet.TILE_RGB = 4;
browser.display.Tilesheet.TILE_ALPHA = 8;
browser.display.Tilesheet.TILE_TRANS_2x2 = 16;
browser.display.Tilesheet.TILE_BLEND_NORMAL = 0;
browser.display.Tilesheet.TILE_BLEND_ADD = 65536;
browser.errors.Error.DEFAULT_TO_STRING = "Error";
browser.events.Listener.sIDs = 1;
browser.events.EventPhase.CAPTURING_PHASE = 0;
browser.events.EventPhase.AT_TARGET = 1;
browser.events.EventPhase.BUBBLING_PHASE = 2;
browser.events.FocusEvent.FOCUS_IN = "focusIn";
browser.events.FocusEvent.FOCUS_OUT = "focusOut";
browser.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
browser.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
browser.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
browser.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
browser.events.IOErrorEvent.IO_ERROR = "ioError";
browser.events.KeyboardEvent.KEY_DOWN = "keyDown";
browser.events.KeyboardEvent.KEY_UP = "keyUp";
browser.events.ProgressEvent.PROGRESS = "progress";
browser.events.ProgressEvent.SOCKET_DATA = "socketData";
browser.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
browser.events.TouchEvent.TOUCH_END = "touchEnd";
browser.events.TouchEvent.TOUCH_MOVE = "touchMove";
browser.events.TouchEvent.TOUCH_OUT = "touchOut";
browser.events.TouchEvent.TOUCH_OVER = "touchOver";
browser.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
browser.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
browser.events.TouchEvent.TOUCH_TAP = "touchTap";
browser.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
browser.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
browser.media.Sound.EXTENSION_MP3 = "mp3";
browser.media.Sound.EXTENSION_OGG = "ogg";
browser.media.Sound.EXTENSION_WAV = "wav";
browser.media.Sound.EXTENSION_AAC = "aac";
browser.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
browser.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
browser.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
browser.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
browser.net.URLRequestMethod.DELETE = "DELETE";
browser.net.URLRequestMethod.GET = "GET";
browser.net.URLRequestMethod.HEAD = "HEAD";
browser.net.URLRequestMethod.OPTIONS = "OPTIONS";
browser.net.URLRequestMethod.POST = "POST";
browser.net.URLRequestMethod.PUT = "PUT";
browser.system.System.useCodePage = false;
browser.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
browser.text.TextField.sSelectionOwner = null;
browser.text.FontInstance.mSolidFonts = new Hash();
browser.text.TextFieldAutoSize.CENTER = "CENTER";
browser.text.TextFieldAutoSize.LEFT = "LEFT";
browser.text.TextFieldAutoSize.NONE = "NONE";
browser.text.TextFieldAutoSize.RIGHT = "RIGHT";
browser.text.TextFieldType.DYNAMIC = "DYNAMIC";
browser.text.TextFieldType.INPUT = "INPUT";
browser.ui.Keyboard.KEY_0 = 48;
browser.ui.Keyboard.KEY_1 = 49;
browser.ui.Keyboard.KEY_2 = 50;
browser.ui.Keyboard.KEY_3 = 51;
browser.ui.Keyboard.KEY_4 = 52;
browser.ui.Keyboard.KEY_5 = 53;
browser.ui.Keyboard.KEY_6 = 54;
browser.ui.Keyboard.KEY_7 = 55;
browser.ui.Keyboard.KEY_8 = 56;
browser.ui.Keyboard.KEY_9 = 57;
browser.ui.Keyboard.A = 65;
browser.ui.Keyboard.B = 66;
browser.ui.Keyboard.C = 67;
browser.ui.Keyboard.D = 68;
browser.ui.Keyboard.E = 69;
browser.ui.Keyboard.F = 70;
browser.ui.Keyboard.G = 71;
browser.ui.Keyboard.H = 72;
browser.ui.Keyboard.I = 73;
browser.ui.Keyboard.J = 74;
browser.ui.Keyboard.K = 75;
browser.ui.Keyboard.L = 76;
browser.ui.Keyboard.M = 77;
browser.ui.Keyboard.N = 78;
browser.ui.Keyboard.O = 79;
browser.ui.Keyboard.P = 80;
browser.ui.Keyboard.Q = 81;
browser.ui.Keyboard.R = 82;
browser.ui.Keyboard.S = 83;
browser.ui.Keyboard.T = 84;
browser.ui.Keyboard.U = 85;
browser.ui.Keyboard.V = 86;
browser.ui.Keyboard.W = 87;
browser.ui.Keyboard.X = 88;
browser.ui.Keyboard.Y = 89;
browser.ui.Keyboard.Z = 90;
browser.ui.Keyboard.NUMPAD_0 = 96;
browser.ui.Keyboard.NUMPAD_1 = 97;
browser.ui.Keyboard.NUMPAD_2 = 98;
browser.ui.Keyboard.NUMPAD_3 = 99;
browser.ui.Keyboard.NUMPAD_4 = 100;
browser.ui.Keyboard.NUMPAD_5 = 101;
browser.ui.Keyboard.NUMPAD_6 = 102;
browser.ui.Keyboard.NUMPAD_7 = 103;
browser.ui.Keyboard.NUMPAD_8 = 104;
browser.ui.Keyboard.NUMPAD_9 = 105;
browser.ui.Keyboard.NUMPAD_MULTIPLY = 106;
browser.ui.Keyboard.NUMPAD_ADD = 107;
browser.ui.Keyboard.NUMPAD_ENTER = 108;
browser.ui.Keyboard.NUMPAD_SUBTRACT = 109;
browser.ui.Keyboard.NUMPAD_DECIMAL = 110;
browser.ui.Keyboard.NUMPAD_DIVIDE = 111;
browser.ui.Keyboard.F1 = 112;
browser.ui.Keyboard.F2 = 113;
browser.ui.Keyboard.F3 = 114;
browser.ui.Keyboard.F4 = 115;
browser.ui.Keyboard.F5 = 116;
browser.ui.Keyboard.F6 = 117;
browser.ui.Keyboard.F7 = 118;
browser.ui.Keyboard.F8 = 119;
browser.ui.Keyboard.F9 = 120;
browser.ui.Keyboard.F10 = 121;
browser.ui.Keyboard.F11 = 122;
browser.ui.Keyboard.F12 = 123;
browser.ui.Keyboard.F13 = 124;
browser.ui.Keyboard.F14 = 125;
browser.ui.Keyboard.F15 = 126;
browser.ui.Keyboard.BACKSPACE = 8;
browser.ui.Keyboard.TAB = 9;
browser.ui.Keyboard.ENTER = 13;
browser.ui.Keyboard.SHIFT = 16;
browser.ui.Keyboard.CONTROL = 17;
browser.ui.Keyboard.CAPS_LOCK = 18;
browser.ui.Keyboard.ESCAPE = 27;
browser.ui.Keyboard.SPACE = 32;
browser.ui.Keyboard.PAGE_UP = 33;
browser.ui.Keyboard.PAGE_DOWN = 34;
browser.ui.Keyboard.END = 35;
browser.ui.Keyboard.HOME = 36;
browser.ui.Keyboard.LEFT = 37;
browser.ui.Keyboard.RIGHT = 39;
browser.ui.Keyboard.UP = 38;
browser.ui.Keyboard.DOWN = 40;
browser.ui.Keyboard.INSERT = 45;
browser.ui.Keyboard.DELETE = 46;
browser.ui.Keyboard.NUMLOCK = 144;
browser.ui.Keyboard.BREAK = 19;
browser.ui.Keyboard.DOM_VK_CANCEL = 3;
browser.ui.Keyboard.DOM_VK_HELP = 6;
browser.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
browser.ui.Keyboard.DOM_VK_TAB = 9;
browser.ui.Keyboard.DOM_VK_CLEAR = 12;
browser.ui.Keyboard.DOM_VK_RETURN = 13;
browser.ui.Keyboard.DOM_VK_ENTER = 14;
browser.ui.Keyboard.DOM_VK_SHIFT = 16;
browser.ui.Keyboard.DOM_VK_CONTROL = 17;
browser.ui.Keyboard.DOM_VK_ALT = 18;
browser.ui.Keyboard.DOM_VK_PAUSE = 19;
browser.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
browser.ui.Keyboard.DOM_VK_ESCAPE = 27;
browser.ui.Keyboard.DOM_VK_SPACE = 32;
browser.ui.Keyboard.DOM_VK_PAGE_UP = 33;
browser.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
browser.ui.Keyboard.DOM_VK_END = 35;
browser.ui.Keyboard.DOM_VK_HOME = 36;
browser.ui.Keyboard.DOM_VK_LEFT = 37;
browser.ui.Keyboard.DOM_VK_UP = 38;
browser.ui.Keyboard.DOM_VK_RIGHT = 39;
browser.ui.Keyboard.DOM_VK_DOWN = 40;
browser.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
browser.ui.Keyboard.DOM_VK_INSERT = 45;
browser.ui.Keyboard.DOM_VK_DELETE = 46;
browser.ui.Keyboard.DOM_VK_0 = 48;
browser.ui.Keyboard.DOM_VK_1 = 49;
browser.ui.Keyboard.DOM_VK_2 = 50;
browser.ui.Keyboard.DOM_VK_3 = 51;
browser.ui.Keyboard.DOM_VK_4 = 52;
browser.ui.Keyboard.DOM_VK_5 = 53;
browser.ui.Keyboard.DOM_VK_6 = 54;
browser.ui.Keyboard.DOM_VK_7 = 55;
browser.ui.Keyboard.DOM_VK_8 = 56;
browser.ui.Keyboard.DOM_VK_9 = 57;
browser.ui.Keyboard.DOM_VK_SEMICOLON = 59;
browser.ui.Keyboard.DOM_VK_EQUALS = 61;
browser.ui.Keyboard.DOM_VK_A = 65;
browser.ui.Keyboard.DOM_VK_B = 66;
browser.ui.Keyboard.DOM_VK_C = 67;
browser.ui.Keyboard.DOM_VK_D = 68;
browser.ui.Keyboard.DOM_VK_E = 69;
browser.ui.Keyboard.DOM_VK_F = 70;
browser.ui.Keyboard.DOM_VK_G = 71;
browser.ui.Keyboard.DOM_VK_H = 72;
browser.ui.Keyboard.DOM_VK_I = 73;
browser.ui.Keyboard.DOM_VK_J = 74;
browser.ui.Keyboard.DOM_VK_K = 75;
browser.ui.Keyboard.DOM_VK_L = 76;
browser.ui.Keyboard.DOM_VK_M = 77;
browser.ui.Keyboard.DOM_VK_N = 78;
browser.ui.Keyboard.DOM_VK_O = 79;
browser.ui.Keyboard.DOM_VK_P = 80;
browser.ui.Keyboard.DOM_VK_Q = 81;
browser.ui.Keyboard.DOM_VK_R = 82;
browser.ui.Keyboard.DOM_VK_S = 83;
browser.ui.Keyboard.DOM_VK_T = 84;
browser.ui.Keyboard.DOM_VK_U = 85;
browser.ui.Keyboard.DOM_VK_V = 86;
browser.ui.Keyboard.DOM_VK_W = 87;
browser.ui.Keyboard.DOM_VK_X = 88;
browser.ui.Keyboard.DOM_VK_Y = 89;
browser.ui.Keyboard.DOM_VK_Z = 90;
browser.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
browser.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
browser.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
browser.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
browser.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
browser.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
browser.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
browser.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
browser.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
browser.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
browser.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
browser.ui.Keyboard.DOM_VK_MULTIPLY = 106;
browser.ui.Keyboard.DOM_VK_ADD = 107;
browser.ui.Keyboard.DOM_VK_SEPARATOR = 108;
browser.ui.Keyboard.DOM_VK_SUBTRACT = 109;
browser.ui.Keyboard.DOM_VK_DECIMAL = 110;
browser.ui.Keyboard.DOM_VK_DIVIDE = 111;
browser.ui.Keyboard.DOM_VK_F1 = 112;
browser.ui.Keyboard.DOM_VK_F2 = 113;
browser.ui.Keyboard.DOM_VK_F3 = 114;
browser.ui.Keyboard.DOM_VK_F4 = 115;
browser.ui.Keyboard.DOM_VK_F5 = 116;
browser.ui.Keyboard.DOM_VK_F6 = 117;
browser.ui.Keyboard.DOM_VK_F7 = 118;
browser.ui.Keyboard.DOM_VK_F8 = 119;
browser.ui.Keyboard.DOM_VK_F9 = 120;
browser.ui.Keyboard.DOM_VK_F10 = 121;
browser.ui.Keyboard.DOM_VK_F11 = 122;
browser.ui.Keyboard.DOM_VK_F12 = 123;
browser.ui.Keyboard.DOM_VK_F13 = 124;
browser.ui.Keyboard.DOM_VK_F14 = 125;
browser.ui.Keyboard.DOM_VK_F15 = 126;
browser.ui.Keyboard.DOM_VK_F16 = 127;
browser.ui.Keyboard.DOM_VK_F17 = 128;
browser.ui.Keyboard.DOM_VK_F18 = 129;
browser.ui.Keyboard.DOM_VK_F19 = 130;
browser.ui.Keyboard.DOM_VK_F20 = 131;
browser.ui.Keyboard.DOM_VK_F21 = 132;
browser.ui.Keyboard.DOM_VK_F22 = 133;
browser.ui.Keyboard.DOM_VK_F23 = 134;
browser.ui.Keyboard.DOM_VK_F24 = 135;
browser.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
browser.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
browser.ui.Keyboard.DOM_VK_COMMA = 188;
browser.ui.Keyboard.DOM_VK_PERIOD = 190;
browser.ui.Keyboard.DOM_VK_SLASH = 191;
browser.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
browser.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
browser.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
browser.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
browser.ui.Keyboard.DOM_VK_QUOTE = 222;
browser.ui.Keyboard.DOM_VK_META = 224;
browser.ui.Keyboard.DOM_VK_KANA = 21;
browser.ui.Keyboard.DOM_VK_HANGUL = 21;
browser.ui.Keyboard.DOM_VK_JUNJA = 23;
browser.ui.Keyboard.DOM_VK_FINAL = 24;
browser.ui.Keyboard.DOM_VK_HANJA = 25;
browser.ui.Keyboard.DOM_VK_KANJI = 25;
browser.ui.Keyboard.DOM_VK_CONVERT = 28;
browser.ui.Keyboard.DOM_VK_NONCONVERT = 29;
browser.ui.Keyboard.DOM_VK_ACEPT = 30;
browser.ui.Keyboard.DOM_VK_MODECHANGE = 31;
browser.ui.Keyboard.DOM_VK_SELECT = 41;
browser.ui.Keyboard.DOM_VK_PRINT = 42;
browser.ui.Keyboard.DOM_VK_EXECUTE = 43;
browser.ui.Keyboard.DOM_VK_SLEEP = 95;
browser.utils.Endian.BIG_ENDIAN = "bigEndian";
browser.utils.Endian.LITTLE_ENDIAN = "littleEndian";
browser.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
js.Lib.onerror = null;
com.haxepunk.HXP.VERSION = "2.0.3";
com.haxepunk.HXP.BASELAYER = 10;
com.haxepunk.HXP.NUMBER_MAX_VALUE = 179 * Math.pow(10,306);
com.haxepunk.HXP.INT_MAX_VALUE = 2147483646;
com.haxepunk.HXP.blackColor = 0;
com.haxepunk.HXP.frameRate = 0;
com.haxepunk.HXP.rate = 1;
com.haxepunk.HXP.defaultFont = "font/04B_03__.ttf";
com.haxepunk.HXP.camera = new browser.geom.Point();
com.haxepunk.HXP.tweener = new com.haxepunk.Tweener();
com.haxepunk.HXP.focused = false;
com.haxepunk.HXP.log = Reflect.makeVarArgs(function(data) {
	if(com.haxepunk.HXP._console != null) com.haxepunk.HXP._console.log(data);
});
com.haxepunk.HXP.watch = Reflect.makeVarArgs(function(properties) {
	if(com.haxepunk.HXP._console != null) com.haxepunk.HXP._console.watch(properties);
});
com.haxepunk.HXP._world = new com.haxepunk.World();
com.haxepunk.HXP._bitmap = new Hash();
com.haxepunk.HXP._seed = 0;
com.haxepunk.HXP._volume = 1;
com.haxepunk.HXP._pan = 0;
com.haxepunk.HXP._soundTransform = new browser.media.SoundTransform();
com.haxepunk.HXP.DEG = -180 / Math.PI;
com.haxepunk.HXP.RAD = Math.PI / -180;
com.haxepunk.HXP.point = new browser.geom.Point();
com.haxepunk.HXP.point2 = new browser.geom.Point();
com.haxepunk.HXP.zero = new browser.geom.Point();
com.haxepunk.HXP.rect = new browser.geom.Rectangle();
com.haxepunk.HXP.matrix = new browser.geom.Matrix();
com.haxepunk.HXP.sprite = new browser.display.Sprite();
com.haxepunk.graphics.Image._flips = new Hash();
com.haxepunk.graphics.atlas.Atlas.drawCallThreshold = 25000;
com.haxepunk.graphics.atlas.Atlas.smooth = false;
com.haxepunk.graphics.atlas.Atlas._atlases = new Array();
com.haxepunk.graphics.atlas.Atlas._sprites = new IntHash();
com.haxepunk.masks.Polygon._axis = new com.haxepunk.math.Vector();
com.haxepunk.masks.Polygon.firstProj = new com.haxepunk.math.Projection();
com.haxepunk.masks.Polygon.secondProj = new com.haxepunk.math.Projection();
com.haxepunk.masks.Polygon.vertical = new com.haxepunk.math.Vector(0,1);
com.haxepunk.masks.Polygon.horizontal = new com.haxepunk.math.Vector(1,0);
com.haxepunk.tweens.TweenEvent.START = "start";
com.haxepunk.tweens.TweenEvent.UPDATE = "update";
com.haxepunk.tweens.TweenEvent.FINISH = "finish";
com.haxepunk.utils.Draw._graphics = com.haxepunk.HXP.sprite.get_graphics();
com.haxepunk.utils.Draw._rect = com.haxepunk.HXP.rect;
com.haxepunk.utils.Draw._matrix = new browser.geom.Matrix();
com.haxepunk.utils.Ease.PI = Math.PI;
com.haxepunk.utils.Ease.PI2 = Math.PI / 2;
com.haxepunk.utils.Ease.EL = 2 * Math.PI / .45;
com.haxepunk.utils.Ease.B1 = 1 / 2.75;
com.haxepunk.utils.Ease.B2 = 2 / 2.75;
com.haxepunk.utils.Ease.B3 = 1.5 / 2.75;
com.haxepunk.utils.Ease.B4 = 2.5 / 2.75;
com.haxepunk.utils.Ease.B5 = 2.25 / 2.75;
com.haxepunk.utils.Ease.B6 = 2.625 / 2.75;
com.haxepunk.utils.Input.keyString = "";
com.haxepunk.utils.Input.kKeyStringMax = 100;
com.haxepunk.utils.Input._enabled = false;
com.haxepunk.utils.Input._joysticks = new IntHash();
com.haxepunk.utils.Input._key = new Array();
com.haxepunk.utils.Input._keyNum = 0;
com.haxepunk.utils.Input._press = new Array();
com.haxepunk.utils.Input._pressNum = 0;
com.haxepunk.utils.Input._release = new Array();
com.haxepunk.utils.Input._releaseNum = 0;
com.haxepunk.utils.Input._control = new Hash();
com.haxepunk.utils.Input._mouseWheelDelta = 0;
com.haxepunk.utils.Joystick.deadZone = 0.15;
com.haxepunk.utils.Key.ANY = -1;
com.haxepunk.utils.Key.LEFT = 37;
com.haxepunk.utils.Key.UP = 38;
com.haxepunk.utils.Key.RIGHT = 39;
com.haxepunk.utils.Key.DOWN = 40;
com.haxepunk.utils.Key.ENTER = 13;
com.haxepunk.utils.Key.COMMAND = 15;
com.haxepunk.utils.Key.CONTROL = 17;
com.haxepunk.utils.Key.SPACE = 32;
com.haxepunk.utils.Key.SHIFT = 16;
com.haxepunk.utils.Key.BACKSPACE = 8;
com.haxepunk.utils.Key.CAPS_LOCK = 20;
com.haxepunk.utils.Key.DELETE = 46;
com.haxepunk.utils.Key.END = 35;
com.haxepunk.utils.Key.ESCAPE = 27;
com.haxepunk.utils.Key.HOME = 36;
com.haxepunk.utils.Key.INSERT = 45;
com.haxepunk.utils.Key.TAB = 9;
com.haxepunk.utils.Key.PAGE_DOWN = 34;
com.haxepunk.utils.Key.PAGE_UP = 33;
com.haxepunk.utils.Key.LEFT_SQUARE_BRACKET = 219;
com.haxepunk.utils.Key.RIGHT_SQUARE_BRACKET = 221;
com.haxepunk.utils.Key.A = 65;
com.haxepunk.utils.Key.B = 66;
com.haxepunk.utils.Key.C = 67;
com.haxepunk.utils.Key.D = 68;
com.haxepunk.utils.Key.E = 69;
com.haxepunk.utils.Key.F = 70;
com.haxepunk.utils.Key.G = 71;
com.haxepunk.utils.Key.H = 72;
com.haxepunk.utils.Key.I = 73;
com.haxepunk.utils.Key.J = 74;
com.haxepunk.utils.Key.K = 75;
com.haxepunk.utils.Key.L = 76;
com.haxepunk.utils.Key.M = 77;
com.haxepunk.utils.Key.N = 78;
com.haxepunk.utils.Key.O = 79;
com.haxepunk.utils.Key.P = 80;
com.haxepunk.utils.Key.Q = 81;
com.haxepunk.utils.Key.R = 82;
com.haxepunk.utils.Key.S = 83;
com.haxepunk.utils.Key.T = 84;
com.haxepunk.utils.Key.U = 85;
com.haxepunk.utils.Key.V = 86;
com.haxepunk.utils.Key.W = 87;
com.haxepunk.utils.Key.X = 88;
com.haxepunk.utils.Key.Y = 89;
com.haxepunk.utils.Key.Z = 90;
com.haxepunk.utils.Key.F1 = 112;
com.haxepunk.utils.Key.F2 = 113;
com.haxepunk.utils.Key.F3 = 114;
com.haxepunk.utils.Key.F4 = 115;
com.haxepunk.utils.Key.F5 = 116;
com.haxepunk.utils.Key.F6 = 117;
com.haxepunk.utils.Key.F7 = 118;
com.haxepunk.utils.Key.F8 = 119;
com.haxepunk.utils.Key.F9 = 120;
com.haxepunk.utils.Key.F10 = 121;
com.haxepunk.utils.Key.F11 = 122;
com.haxepunk.utils.Key.F12 = 123;
com.haxepunk.utils.Key.F13 = 124;
com.haxepunk.utils.Key.F14 = 125;
com.haxepunk.utils.Key.F15 = 126;
com.haxepunk.utils.Key.DIGIT_0 = 48;
com.haxepunk.utils.Key.DIGIT_1 = 49;
com.haxepunk.utils.Key.DIGIT_2 = 50;
com.haxepunk.utils.Key.DIGIT_3 = 51;
com.haxepunk.utils.Key.DIGIT_4 = 52;
com.haxepunk.utils.Key.DIGIT_5 = 53;
com.haxepunk.utils.Key.DIGIT_6 = 54;
com.haxepunk.utils.Key.DIGIT_7 = 55;
com.haxepunk.utils.Key.DIGIT_8 = 56;
com.haxepunk.utils.Key.DIGIT_9 = 57;
com.haxepunk.utils.Key.NUMPAD_0 = 96;
com.haxepunk.utils.Key.NUMPAD_1 = 97;
com.haxepunk.utils.Key.NUMPAD_2 = 98;
com.haxepunk.utils.Key.NUMPAD_3 = 99;
com.haxepunk.utils.Key.NUMPAD_4 = 100;
com.haxepunk.utils.Key.NUMPAD_5 = 101;
com.haxepunk.utils.Key.NUMPAD_6 = 102;
com.haxepunk.utils.Key.NUMPAD_7 = 103;
com.haxepunk.utils.Key.NUMPAD_8 = 104;
com.haxepunk.utils.Key.NUMPAD_9 = 105;
com.haxepunk.utils.Key.NUMPAD_ADD = 107;
com.haxepunk.utils.Key.NUMPAD_DECIMAL = 110;
com.haxepunk.utils.Key.NUMPAD_DIVIDE = 111;
com.haxepunk.utils.Key.NUMPAD_ENTER = 108;
com.haxepunk.utils.Key.NUMPAD_MULTIPLY = 106;
com.haxepunk.utils.Key.NUMPAD_SUBTRACT = 109;
entities.Hero.maxVelocity = 12;
entities.Hero.speed = 4;
entities.Hero.drag = 0.2;
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
nme.Lib.FULLSCREEN = 1;
nme.Lib.BORDERLESS = 2;
nme.Lib.RESIZABLE = 4;
nme.Lib.HARDWARE = 8;
nme.Lib.VSYNC = 16;
nme.Lib.HW_AA = 32;
nme.Lib.HW_AA_HIRES = 96;
nme.Lib.ALLOW_SHADERS = 128;
nme.Lib.REQUIRE_SHADERS = 256;
nme.Lib.DEPTH_BUFFER = 512;
nme.Lib.STENCIL_BUFFER = 1024;
nme.Lib.MIN_FLOAT_VALUE = Number.MIN_VALUE;
nme.Lib.MAX_FLOAT_VALUE = Number.MAX_VALUE;
nme.installer.Assets.cachedBitmapData = new Hash();
nme.installer.Assets.initialized = false;
nme.installer.Assets.libraryTypes = new Hash();
nme.installer.Assets.resourceClasses = new Hash();
nme.installer.Assets.resourceNames = new Hash();
nme.installer.Assets.resourceTypes = new Hash();
ApplicationMain.main();
})();
