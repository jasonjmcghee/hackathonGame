#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#define INCLUDED_com_haxepunk_graphics_atlas_Atlas

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(IntHash)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Atlas)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,AtlasRegion)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Layer)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,DisplayObject)
HX_DECLARE_CLASS2(native,display,DisplayObjectContainer)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,display,InteractiveObject)
HX_DECLARE_CLASS2(native,display,Sprite)
HX_DECLARE_CLASS2(native,display,Tilesheet)
HX_DECLARE_CLASS2(native,events,EventDispatcher)
HX_DECLARE_CLASS2(native,events,IEventDispatcher)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{


class Atlas_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Atlas_obj OBJ_;
		Atlas_obj();
		Void __construct(::native::display::BitmapData bd);

	public:
		static hx::ObjectPtr< Atlas_obj > __new(::native::display::BitmapData bd);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Atlas_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Atlas"); }

		int _renderFlags; /* REM */ 
		::IntHash _layers; /* REM */ 
		::com::haxepunk::graphics::atlas::Layer _layer; /* REM */ 
		int _layerIndex; /* REM */ 
		::native::display::Tilesheet _tilesheet; /* REM */ 
		int _tileIndex; /* REM */ 
		virtual ::com::haxepunk::graphics::atlas::AtlasRegion createRegion( ::native::geom::Rectangle rect,::native::geom::Point center);
		Dynamic createRegion_dyn();

		virtual Void prepareTile( int tile,Float x,Float y,int layer,Float scaleX,Float scaleY,Float angle,Float red,Float green,Float blue,Float alpha);
		Dynamic prepareTile_dyn();

		virtual Void setLayer( int layer);
		Dynamic setLayer_dyn();

		virtual Void render( );
		Dynamic render_dyn();

		int height; /* REM */ 
		int width; /* REM */ 
		static int drawCallThreshold; /* REM */ 
		static bool smooth; /* REM */ 
		static Void clear( );
		static Dynamic clear_dyn();

		static Void renderAll( );
		static Dynamic renderAll_dyn();

		static ::native::display::Sprite getSpriteByLayer( int layer);
		static Dynamic getSpriteByLayer_dyn();

		static Array< ::com::haxepunk::graphics::atlas::Atlas > _atlases; /* REM */ 
		static ::IntHash _sprites; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas

#endif /* INCLUDED_com_haxepunk_graphics_atlas_Atlas */ 
