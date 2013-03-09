#ifndef INCLUDED_com_haxepunk_Graphic
#define INCLUDED_com_haxepunk_Graphic

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(com,haxepunk,Graphic)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,display,Tilesheet)
HX_DECLARE_CLASS2(native,geom,Point)
namespace com{
namespace haxepunk{


class Graphic_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Graphic_obj OBJ_;
		Graphic_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Graphic_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Graphic_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Graphic"); }

		int imageID; /* REM */ 
		::native::display::Tilesheet _tileSheet; /* REM */ 
		bool _blit; /* REM */ 
		::native::geom::Point _point; /* REM */ 
		bool _scroll; /* REM */ 
		Dynamic assign; /* REM */ 
		Dynamic &assign_dyn() { return assign;}
		virtual Void render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  layer);
		Dynamic render_dyn();

		virtual Void update( );
		Dynamic update_dyn();

		bool relative; /* REM */ 
		Float scrollY; /* REM */ 
		Float scrollX; /* REM */ 
		Float y; /* REM */ 
		Float x; /* REM */ 
		bool visible; /* REM */ 
		bool active; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk

#endif /* INCLUDED_com_haxepunk_Graphic */ 
