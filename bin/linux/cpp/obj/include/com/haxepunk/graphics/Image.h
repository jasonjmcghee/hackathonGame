#ifndef INCLUDED_com_haxepunk_graphics_Image
#define INCLUDED_com_haxepunk_graphics_Image

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/Graphic.h>
HX_DECLARE_CLASS0(Hash)
HX_DECLARE_CLASS2(com,haxepunk,Graphic)
HX_DECLARE_CLASS3(com,haxepunk,graphics,Image)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,AtlasRegion)
HX_DECLARE_CLASS2(native,display,Bitmap)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,BlendMode)
HX_DECLARE_CLASS2(native,display,DisplayObject)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,events,EventDispatcher)
HX_DECLARE_CLASS2(native,events,IEventDispatcher)
HX_DECLARE_CLASS2(native,geom,ColorTransform)
HX_DECLARE_CLASS2(native,geom,Matrix)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{


class Image_obj : public ::com::haxepunk::Graphic_obj{
	public:
		typedef ::com::haxepunk::Graphic_obj super;
		typedef Image_obj OBJ_;
		Image_obj();
		Void __construct(Dynamic source,::native::geom::Rectangle clipRect,::String __o_name);

	public:
		static hx::ObjectPtr< Image_obj > __new(Dynamic source,::native::geom::Rectangle clipRect,::String __o_name);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Image_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Image"); }

		::native::display::BitmapData _flip; /* REM */ 
		bool _flipped; /* REM */ 
		::String _class; /* REM */ 
		::native::geom::Matrix _matrix; /* REM */ 
		::native::geom::ColorTransform _colorTransform; /* REM */ 
		::native::geom::ColorTransform _tint; /* REM */ 
		int _color; /* REM */ 
		Float _alpha; /* REM */ 
		::com::haxepunk::graphics::atlas::AtlasRegion _region; /* REM */ 
		::native::display::Bitmap _bitmap; /* REM */ 
		::native::geom::Rectangle _bufferRect; /* REM */ 
		::native::display::BitmapData _buffer; /* REM */ 
		::native::geom::Rectangle _sourceRect; /* REM */ 
		::native::display::BitmapData _source; /* REM */ 
		virtual ::native::geom::Rectangle getClipRect( );
		Dynamic getClipRect_dyn();

		::native::geom::Rectangle clipRect; /* REM */ 
		virtual int getScaledHeight( );
		Dynamic getScaledHeight_dyn();

		int scaledHeight; /* REM */ 
		virtual int getScaledWidth( );
		Dynamic getScaledWidth_dyn();

		int scaledWidth; /* REM */ 
		virtual int getHeight( );
		Dynamic getHeight_dyn();

		int height; /* REM */ 
		virtual int getWidth( );
		Dynamic getWidth_dyn();

		int width; /* REM */ 
		virtual Void centerOO( );
		Dynamic centerOO_dyn();

		virtual Void centerOrigin( );
		Dynamic centerOrigin_dyn();

		virtual bool setFlipped( bool value);
		Dynamic setFlipped_dyn();

		virtual bool getFlipped( );
		Dynamic getFlipped_dyn();

		bool flipped; /* REM */ 
		virtual int setColor( int value);
		Dynamic setColor_dyn();

		virtual int getColor( );
		Dynamic getColor_dyn();

		int color; /* REM */ 
		virtual Float setAlpha( Float value);
		Dynamic setAlpha_dyn();

		virtual Float getAlpha( );
		Dynamic getAlpha_dyn();

		Float alpha; /* REM */ 
		virtual Void clear( );
		Dynamic clear_dyn();

		virtual Void updateBuffer( hx::Null< bool >  clearBefore);
		Dynamic updateBuffer_dyn();

		virtual Void render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  layer);

		virtual Void createBuffer( );
		Dynamic createBuffer_dyn();

		virtual Void init( );
		Dynamic init_dyn();

		virtual Void setBitmapSource( ::native::display::BitmapData bitmap);
		Dynamic setBitmapSource_dyn();

		virtual Void setAtlasRegion( ::com::haxepunk::graphics::atlas::AtlasRegion region);
		Dynamic setAtlasRegion_dyn();

		bool smooth; /* REM */ 
		::native::display::BlendMode blend; /* REM */ 
		Float originY; /* REM */ 
		Float originX; /* REM */ 
		Float scaleY; /* REM */ 
		Float scaleX; /* REM */ 
		Float scale; /* REM */ 
		Float angle; /* REM */ 
		static ::com::haxepunk::graphics::Image createRect( int width,int height,hx::Null< int >  color);
		static Dynamic createRect_dyn();

		static ::com::haxepunk::graphics::Image createCircle( int radius,hx::Null< int >  color);
		static Dynamic createCircle_dyn();

		static ::Hash _flips; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics

#endif /* INCLUDED_com_haxepunk_graphics_Image */ 
