#include <hxcpp.h>

#ifndef INCLUDED_IntHash
#include <IntHash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion
#include <com/haxepunk/graphics/atlas/AtlasRegion.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_TileAtlas
#include <com/haxepunk/graphics/atlas/TileAtlas.h>
#endif
#ifndef INCLUDED_native_display_BitmapData
#include <native/display/BitmapData.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_display_Tilesheet
#include <native/display/Tilesheet.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{

Void TileAtlas_obj::__construct(Dynamic source,int tileWidth,int tileHeight)
{
HX_STACK_PUSH("TileAtlas::new","com/haxepunk/graphics/atlas/TileAtlas.hx",9);
{
	HX_STACK_LINE(10)
	::native::display::BitmapData bd;		HX_STACK_VAR(bd,"bd");
	HX_STACK_LINE(11)
	if ((::Std_obj::is(source,hx::ClassOf< ::native::display::BitmapData >()))){
		HX_STACK_LINE(11)
		bd = source;
	}
	else{
		HX_STACK_LINE(12)
		bd = ::com::haxepunk::HXP_obj::getBitmap(source);
	}
	HX_STACK_LINE(14)
	this->_regions = ::IntHash_obj::__new();
	HX_STACK_LINE(15)
	super::__construct(bd);
	HX_STACK_LINE(17)
	this->prepareTiles(bd->get_width(),bd->get_height(),tileWidth,tileHeight);
}
;
	return null();
}

TileAtlas_obj::~TileAtlas_obj() { }

Dynamic TileAtlas_obj::__CreateEmpty() { return  new TileAtlas_obj; }
hx::ObjectPtr< TileAtlas_obj > TileAtlas_obj::__new(Dynamic source,int tileWidth,int tileHeight)
{  hx::ObjectPtr< TileAtlas_obj > result = new TileAtlas_obj();
	result->__construct(source,tileWidth,tileHeight);
	return result;}

Dynamic TileAtlas_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TileAtlas_obj > result = new TileAtlas_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void TileAtlas_obj::prepareTiles( int width,int height,int tileWidth,int tileHeight){
{
		HX_STACK_PUSH("TileAtlas::prepareTiles","com/haxepunk/graphics/atlas/TileAtlas.hx",26);
		HX_STACK_THIS(this);
		HX_STACK_ARG(width,"width");
		HX_STACK_ARG(height,"height");
		HX_STACK_ARG(tileWidth,"tileWidth");
		HX_STACK_ARG(tileHeight,"tileHeight");
		HX_STACK_LINE(27)
		int cols = ::Math_obj::floor((Float(width) / Float(tileWidth)));		HX_STACK_VAR(cols,"cols");
		HX_STACK_LINE(28)
		int rows = ::Math_obj::floor((Float(height) / Float(tileHeight)));		HX_STACK_VAR(rows,"rows");
		HX_STACK_LINE(30)
		::com::haxepunk::HXP_obj::rect->width = tileWidth;
		HX_STACK_LINE(31)
		::com::haxepunk::HXP_obj::rect->height = tileHeight;
		HX_STACK_LINE(33)
		::com::haxepunk::HXP_obj::point->x = ::com::haxepunk::HXP_obj::point->y = (int)0;
		HX_STACK_LINE(35)
		{
			HX_STACK_LINE(35)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(35)
			while(((_g < rows))){
				HX_STACK_LINE(35)
				int y = (_g)++;		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(37)
				::com::haxepunk::HXP_obj::rect->y = (y * tileHeight);
				HX_STACK_LINE(39)
				{
					HX_STACK_LINE(39)
					int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(39)
					while(((_g1 < cols))){
						HX_STACK_LINE(39)
						int x = (_g1)++;		HX_STACK_VAR(x,"x");
						HX_STACK_LINE(41)
						::com::haxepunk::HXP_obj::rect->x = (x * tileWidth);
						struct _Function_5_1{
							inline static ::com::haxepunk::graphics::atlas::AtlasRegion Block( ::com::haxepunk::graphics::atlas::TileAtlas_obj *__this){
								HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/TileAtlas.hx",43);
								{
									HX_STACK_LINE(43)
									::native::geom::Rectangle rect = ::com::haxepunk::HXP_obj::rect;		HX_STACK_VAR(rect,"rect");
									HX_STACK_LINE(43)
									__this->_tilesheet->addTileRect(rect,::com::haxepunk::HXP_obj::point);
									HX_STACK_LINE(43)
									::com::haxepunk::graphics::atlas::AtlasRegion region = ::com::haxepunk::graphics::atlas::AtlasRegion_obj::__new(__this,__this->_tileIndex,rect);		HX_STACK_VAR(region,"region");
									HX_STACK_LINE(43)
									hx::AddEq(__this->_tileIndex,(int)1);
									HX_STACK_LINE(43)
									return region;
								}
								return null();
							}
						};
						HX_STACK_LINE(43)
						::com::haxepunk::graphics::atlas::AtlasRegion region = _Function_5_1::Block(this);		HX_STACK_VAR(region,"region");
						HX_STACK_LINE(44)
						this->_regions->set(region->tileIndex,region);
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(TileAtlas_obj,prepareTiles,(void))

::com::haxepunk::graphics::atlas::AtlasRegion TileAtlas_obj::getRegion( int index){
	HX_STACK_PUSH("TileAtlas::getRegion","com/haxepunk/graphics/atlas/TileAtlas.hx",21);
	HX_STACK_THIS(this);
	HX_STACK_ARG(index,"index");
	HX_STACK_LINE(21)
	return this->_regions->get(index);
}


HX_DEFINE_DYNAMIC_FUNC1(TileAtlas_obj,getRegion,return )


TileAtlas_obj::TileAtlas_obj()
{
}

void TileAtlas_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TileAtlas);
	HX_MARK_MEMBER_NAME(_regions,"_regions");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void TileAtlas_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_regions,"_regions");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic TileAtlas_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"_regions") ) { return _regions; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getRegion") ) { return getRegion_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"prepareTiles") ) { return prepareTiles_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TileAtlas_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"_regions") ) { _regions=inValue.Cast< ::IntHash >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TileAtlas_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_regions"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_regions"),
	HX_CSTRING("prepareTiles"),
	HX_CSTRING("getRegion"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TileAtlas_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TileAtlas_obj::__mClass,"__mClass");
};

Class TileAtlas_obj::__mClass;

void TileAtlas_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.atlas.TileAtlas"), hx::TCanCast< TileAtlas_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void TileAtlas_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas
