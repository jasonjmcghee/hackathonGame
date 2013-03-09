#ifndef INCLUDED_com_haxepunk_graphics_atlas_TextureAtlas
#define INCLUDED_com_haxepunk_graphics_atlas_TextureAtlas

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/graphics/atlas/Atlas.h>
HX_DECLARE_CLASS0(Hash)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Atlas)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,AtlasRegion)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,TextureAtlas)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{


class TextureAtlas_obj : public ::com::haxepunk::graphics::atlas::Atlas_obj{
	public:
		typedef ::com::haxepunk::graphics::atlas::Atlas_obj super;
		typedef TextureAtlas_obj OBJ_;
		TextureAtlas_obj();
		Void __construct(Dynamic source);

	public:
		static hx::ObjectPtr< TextureAtlas_obj > __new(Dynamic source);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~TextureAtlas_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TextureAtlas"); }

		::Hash _regions; /* REM */ 
		virtual ::com::haxepunk::graphics::atlas::AtlasRegion defineRegion( ::String name,::native::geom::Rectangle rect,::native::geom::Point center);
		Dynamic defineRegion_dyn();

		virtual ::com::haxepunk::graphics::atlas::AtlasRegion getRegion( ::String name);
		Dynamic getRegion_dyn();

		static ::com::haxepunk::graphics::atlas::TextureAtlas loadTexturePacker( ::String file);
		static Dynamic loadTexturePacker_dyn();

};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas

#endif /* INCLUDED_com_haxepunk_graphics_atlas_TextureAtlas */ 
