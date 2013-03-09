#ifndef INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion
#define INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Atlas)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,AtlasRegion)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{


class AtlasRegion_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef AtlasRegion_obj OBJ_;
		AtlasRegion_obj();
		Void __construct(::com::haxepunk::graphics::atlas::Atlas parent,int tileIndex,::native::geom::Rectangle rect);

	public:
		static hx::ObjectPtr< AtlasRegion_obj > __new(::com::haxepunk::graphics::atlas::Atlas parent,int tileIndex,::native::geom::Rectangle rect);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~AtlasRegion_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("AtlasRegion"); }

		::com::haxepunk::graphics::atlas::Atlas parent; /* REM */ 
		::native::geom::Point center; /* REM */ 
		::native::geom::Rectangle rect; /* REM */ 
		virtual Float getHeight( );
		Dynamic getHeight_dyn();

		virtual Float getWidth( );
		Dynamic getWidth_dyn();

		virtual ::String toString( );
		Dynamic toString_dyn();

		virtual Void draw( Float x,Float y,int layer,hx::Null< Float >  scaleX,hx::Null< Float >  scaleY,hx::Null< Float >  angle,hx::Null< Float >  red,hx::Null< Float >  green,hx::Null< Float >  blue,hx::Null< Float >  alpha);
		Dynamic draw_dyn();

		virtual ::com::haxepunk::graphics::atlas::AtlasRegion clip( ::native::geom::Rectangle clipRect,::native::geom::Point center);
		Dynamic clip_dyn();

		Float height; /* REM */ 
		Float width; /* REM */ 
		int tileIndex; /* REM */ 
		bool rotated; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas

#endif /* INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion */ 
