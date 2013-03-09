#ifndef INCLUDED_com_haxepunk_graphics_Canvas
#define INCLUDED_com_haxepunk_graphics_Canvas

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/Graphic.h>
HX_DECLARE_CLASS2(com,haxepunk,Graphic)
HX_DECLARE_CLASS3(com,haxepunk,graphics,Canvas)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,BlendMode)
HX_DECLARE_CLASS2(native,display,Graphics)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,geom,ColorTransform)
HX_DECLARE_CLASS2(native,geom,Matrix)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{


class Canvas_obj : public ::com::haxepunk::Graphic_obj{
	public:
		typedef ::com::haxepunk::Graphic_obj super;
		typedef Canvas_obj OBJ_;
		Canvas_obj();
		Void __construct(int width,int height);

	public:
		static hx::ObjectPtr< Canvas_obj > __new(int width,int height);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Canvas_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Canvas"); }

		::native::display::Graphics _graphics; /* REM */ 
		::native::geom::Rectangle _rect; /* REM */ 
		int _refHeight; /* REM */ 
		int _refWidth; /* REM */ 
		::native::display::BitmapData _ref; /* REM */ 
		::native::geom::Matrix _matrix; /* REM */ 
		::native::geom::ColorTransform _colorTransform; /* REM */ 
		::native::geom::ColorTransform _tint; /* REM */ 
		Float _alpha; /* REM */ 
		int _color; /* REM */ 
		int _maxHeight; /* REM */ 
		int _maxWidth; /* REM */ 
		int _height; /* REM */ 
		int _width; /* REM */ 
		Array< ::native::display::BitmapData > _buffers; /* REM */ 
		virtual int getHeight( );
		Dynamic getHeight_dyn();

		int height; /* REM */ 
		virtual int getWidth( );
		Dynamic getWidth_dyn();

		int width; /* REM */ 
		virtual Void shift( hx::Null< int >  x,hx::Null< int >  y);
		Dynamic shift_dyn();

		virtual Float setAlpha( Float value);
		Dynamic setAlpha_dyn();

		virtual Float getAlpha( );
		Dynamic getAlpha_dyn();

		Float alpha; /* REM */ 
		virtual int setColor( int value);
		Dynamic setColor_dyn();

		virtual int getColor( );
		Dynamic getColor_dyn();

		int color; /* REM */ 
		virtual Void drawGraphic( int x,int y,::com::haxepunk::Graphic source);
		Dynamic drawGraphic_dyn();

		virtual Void fillTexture( ::native::geom::Rectangle rect,::native::display::BitmapData texture);
		Dynamic fillTexture_dyn();

		virtual Void drawRect( ::native::geom::Rectangle rect,hx::Null< int >  color,hx::Null< Float >  alpha);
		Dynamic drawRect_dyn();

		virtual Void fill( ::native::geom::Rectangle rect,hx::Null< int >  color,hx::Null< Float >  alpha);
		Dynamic fill_dyn();

		virtual Void draw( int x,int y,::native::display::BitmapData source,::native::geom::Rectangle rect);
		Dynamic draw_dyn();

		virtual Void render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  layer);

		::native::display::BlendMode blend; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics

#endif /* INCLUDED_com_haxepunk_graphics_Canvas */ 
