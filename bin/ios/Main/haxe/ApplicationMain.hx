class ApplicationMain
{
	
	public static function main()
	{
		nme.Lib.setPackage("", "Main", "com.example.app", "1.0.0");
		
		
		nme.display.Stage.shouldRotateInterface = function(orientation:Int):Bool
		{
			
			if (orientation == nme.display.Stage.OrientationPortrait || orientation == nme.display.Stage.OrientationPortraitUpsideDown)
			{
				return true;
			}
			return false;
			
		}
		
		nme.Lib.create(function()
			{
				if (0 == 0 && 0 == 0)
				{
					nme.Lib.current.stage.align = nme.display.StageAlign.TOP_LEFT;
					nme.Lib.current.stage.scaleMode = nme.display.StageScaleMode.NO_SCALE;
				}
				
				//nme.Lib.current.stage.addEventListener (nme.events.Event.RESIZE, initialize);
				initialize ();
			},
			0, 0,
			30,
			3355443,
			(true ? nme.Lib.HARDWARE : 0) |
			(false ? nme.Lib.ALLOW_SHADERS : 0) |
			(false ? nme.Lib.REQUIRE_SHADERS : 0) |
			(false ? nme.Lib.DEPTH_BUFFER : 0) |
			(false ? nme.Lib.STENCIL_BUFFER : 0) |
			(true ? nme.Lib.RESIZABLE : 0) |
			(0 == 4 ? nme.Lib.HW_AA_HIRES : 0) |
			(0 == 2 ? nme.Lib.HW_AA : 0),
			"HackGame"
		);
		
	}
	
	
	private static function initialize ():Void
	{
		//nme.Lib.current.stage.removeEventListener (nme.events.Event.RESIZE, initialize);
		
		var hasMain = false;
				
		for (methodName in Type.getClassFields(Main))
		{
			if (methodName == "main")
			{
				hasMain = true;
				break;
			}
		}
		
		if (hasMain)
		{
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
		}
		else
		{
			nme.Lib.current.addChild(cast (Type.createInstance(Main, []), nme.display.DisplayObject));	
		}
	}
	
	
	public static function getAsset(inName:String):Dynamic
	{
		
		if (inName == "gfx/preloader/haxepunk.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/preloader/haxepunk.png");
			
		}
		
		if (inName == "gfx/debug/console_debug.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_debug.png");
			
		}
		
		if (inName == "gfx/debug/console_step.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_step.png");
			
		}
		
		if (inName == "gfx/debug/console_pause.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_pause.png");
			
		}
		
		if (inName == "gfx/debug/console_play.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_play.png");
			
		}
		
		if (inName == "gfx/debug/console_logo.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_logo.png");
			
		}
		
		if (inName == "gfx/debug/console_output.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/debug/console_output.png");
			
		}
		
		if (inName == "font/04B_03__.ttf")
		{
			
			return nme.Assets.getFont ("font/04B_03__.ttf");
			
		}
		
		if (inName == "gfx/tileset.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/tileset.png");
			
		}
		
		if (inName == "gfx/block.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/block.png");
			
		}
		
		if (inName == "gfx/floor.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/floor.png");
			
		}
		
		if (inName == "gfx/wall.png")
		{
			
			return nme.Assets.getBitmapData ("gfx/wall.png");
			
		}
		
		if (inName == "font/04B_03__.ttf")
		{
			
			return nme.Assets.getFont ("font/04B_03__.ttf");
			
		}
		
		return null;
	}
	
}
