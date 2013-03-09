class ApplicationMain
{

	#if waxe
	static public var frame : wx.Frame;
	static public var autoShowFrame : Bool = true;
	#if nme
	static public var nmeStage : wx.NMEStage;
	#end
	#end
	
	public static function main()
	{
		#if nme
		nme.Lib.setPackage("", "Main", "com.example.app", "1.0.0");
		
		#end
		
		#if waxe
		wx.App.boot(function()
		{
			
			frame = wx.Frame.create(null, null, "HackGame", null, { width: 800, height: 550 });
			
			#if nme
			var stage = wx.NMEStage.create(frame, null, null, { width: 800, height: 550 });
			#end
			
			Main.main();
			
			if (autoShowFrame)
			{
				wx.App.setTopWindow(frame);
				frame.shown = true;
			}
		});
		#else
		
		nme.Lib.create(function()
			{ 
				//if ((800 == 0 && 550 == 0) || false)
				//{
					nme.Lib.current.stage.align = nme.display.StageAlign.TOP_LEFT;
					nme.Lib.current.stage.scaleMode = nme.display.StageScaleMode.NO_SCALE;
				//}
				
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
					var instance = Type.createInstance(Main, []);
					#if nme
					if (Std.is (instance, nme.display.DisplayObject)) {
						nme.Lib.current.addChild(cast instance);
					}
					#end
				}
			},
			800, 550, 
			60, 
			3355443,
			(true ? nme.Lib.HARDWARE : 0) |
			(false ? nme.Lib.ALLOW_SHADERS : 0) |
			(false ? nme.Lib.REQUIRE_SHADERS : 0) |
			(false ? nme.Lib.DEPTH_BUFFER : 0) |
			(false ? nme.Lib.STENCIL_BUFFER : 0) |
			(true ? nme.Lib.RESIZABLE : 0) |
			(false ? nme.Lib.BORDERLESS : 0) |
			(false ? nme.Lib.VSYNC : 0) |
			(false ? nme.Lib.FULLSCREEN : 0) |
			(0 == 4 ? nme.Lib.HW_AA_HIRES : 0) |
			(0 == 2 ? nme.Lib.HW_AA : 0),
			"HackGame"
			
		);
		#end
		
	}
	
	
	#if neko
	public static function __init__ () {
		
		untyped $loader.path = $array ("@executable_path/", $loader.path);
		
	}
	#end
	
	
	public static function getAsset(inName:String):Dynamic
	{
		#if nme
		
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
		
		#end
		return null;
	}
	
	
}
