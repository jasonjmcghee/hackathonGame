#include <hxcpp.h>

#ifndef INCLUDED_Hash
#include <Hash.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Xml
#include <Xml.h>
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
#ifndef INCLUDED_com_haxepunk_graphics_atlas_TextureAtlas
#include <com/haxepunk/graphics/atlas/TextureAtlas.h>
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
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{

Void TextureAtlas_obj::__construct(Dynamic source)
{
HX_STACK_PUSH("TextureAtlas::new","com/haxepunk/graphics/atlas/TextureAtlas.hx",11);
{
	HX_STACK_LINE(12)
	::native::display::BitmapData bd;		HX_STACK_VAR(bd,"bd");
	HX_STACK_LINE(13)
	if ((::Std_obj::is(source,hx::ClassOf< ::native::display::BitmapData >()))){
		HX_STACK_LINE(13)
		bd = source;
	}
	else{
		HX_STACK_LINE(14)
		bd = ::com::haxepunk::HXP_obj::getBitmap(source);
	}
	HX_STACK_LINE(16)
	this->_regions = ::Hash_obj::__new();
	HX_STACK_LINE(18)
	super::__construct(bd);
}
;
	return null();
}

TextureAtlas_obj::~TextureAtlas_obj() { }

Dynamic TextureAtlas_obj::__CreateEmpty() { return  new TextureAtlas_obj; }
hx::ObjectPtr< TextureAtlas_obj > TextureAtlas_obj::__new(Dynamic source)
{  hx::ObjectPtr< TextureAtlas_obj > result = new TextureAtlas_obj();
	result->__construct(source);
	return result;}

Dynamic TextureAtlas_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TextureAtlas_obj > result = new TextureAtlas_obj();
	result->__construct(inArgs[0]);
	return result;}

::com::haxepunk::graphics::atlas::AtlasRegion TextureAtlas_obj::defineRegion( ::String name,::native::geom::Rectangle rect,::native::geom::Point center){
	HX_STACK_PUSH("TextureAtlas::defineRegion","com/haxepunk/graphics/atlas/TextureAtlas.hx",63);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_ARG(rect,"rect");
	HX_STACK_ARG(center,"center");
	struct _Function_1_1{
		inline static ::com::haxepunk::graphics::atlas::AtlasRegion Block( ::com::haxepunk::graphics::atlas::TextureAtlas_obj *__this,::native::geom::Point &center,::native::geom::Rectangle &rect){
			HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/TextureAtlas.hx",64);
			{
				HX_STACK_LINE(64)
				__this->_tilesheet->addTileRect(rect,center);
				HX_STACK_LINE(64)
				::com::haxepunk::graphics::atlas::AtlasRegion region = ::com::haxepunk::graphics::atlas::AtlasRegion_obj::__new(__this,__this->_tileIndex,rect);		HX_STACK_VAR(region,"region");
				HX_STACK_LINE(64)
				hx::AddEq(__this->_tileIndex,(int)1);
				HX_STACK_LINE(64)
				return region;
			}
			return null();
		}
	};
	HX_STACK_LINE(64)
	::com::haxepunk::graphics::atlas::AtlasRegion region = _Function_1_1::Block(this,center,rect);		HX_STACK_VAR(region,"region");
	HX_STACK_LINE(65)
	this->_regions->set(name,region);
	HX_STACK_LINE(66)
	return region;
}


HX_DEFINE_DYNAMIC_FUNC3(TextureAtlas_obj,defineRegion,return )

::com::haxepunk::graphics::atlas::AtlasRegion TextureAtlas_obj::getRegion( ::String name){
	HX_STACK_PUSH("TextureAtlas::getRegion","com/haxepunk/graphics/atlas/TextureAtlas.hx",50);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(51)
	if ((this->_regions->exists(name))){
		HX_STACK_LINE(52)
		return this->_regions->get(name);
	}
	HX_STACK_LINE(53)
	hx::Throw ((HX_CSTRING("Region has not be defined yet: ") + name));
	HX_STACK_LINE(53)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(TextureAtlas_obj,getRegion,return )

::com::haxepunk::graphics::atlas::TextureAtlas TextureAtlas_obj::loadTexturePacker( ::String file){
	HX_STACK_PUSH("TextureAtlas::loadTexturePacker","com/haxepunk/graphics/atlas/TextureAtlas.hx",26);
	HX_STACK_ARG(file,"file");
	HX_STACK_LINE(27)
	::Xml xml = ::Xml_obj::parse(::nme::installer::Assets_obj::getText(file));		HX_STACK_VAR(xml,"xml");
	HX_STACK_LINE(28)
	::Xml root = xml->firstElement();		HX_STACK_VAR(root,"root");
	HX_STACK_LINE(29)
	::com::haxepunk::graphics::atlas::TextureAtlas atlas = ::com::haxepunk::graphics::atlas::TextureAtlas_obj::__new(root->get(HX_CSTRING("imagePath")));		HX_STACK_VAR(atlas,"atlas");
	HX_STACK_LINE(30)
	for(::cpp::FastIterator_obj< ::Xml > *__it = ::cpp::CreateFastIterator< ::Xml >(root->elements());  __it->hasNext(); ){
		::Xml sprite = __it->next();
		{
			HX_STACK_LINE(32)
			::com::haxepunk::HXP_obj::rect->x = ::Std_obj::parseInt(sprite->get(HX_CSTRING("x")));
			HX_STACK_LINE(33)
			::com::haxepunk::HXP_obj::rect->y = ::Std_obj::parseInt(sprite->get(HX_CSTRING("y")));
			HX_STACK_LINE(34)
			if ((sprite->exists(HX_CSTRING("w")))){
				HX_STACK_LINE(34)
				::com::haxepunk::HXP_obj::rect->width = ::Std_obj::parseInt(sprite->get(HX_CSTRING("w")));
			}
			HX_STACK_LINE(35)
			if ((sprite->exists(HX_CSTRING("h")))){
				HX_STACK_LINE(35)
				::com::haxepunk::HXP_obj::rect->height = ::Std_obj::parseInt(sprite->get(HX_CSTRING("h")));
			}
			HX_STACK_LINE(38)
			::com::haxepunk::graphics::atlas::AtlasRegion region = atlas->defineRegion(sprite->get(HX_CSTRING("n")),::com::haxepunk::HXP_obj::rect,null());		HX_STACK_VAR(region,"region");
			HX_STACK_LINE(40)
			if (((bool(sprite->exists(HX_CSTRING("r"))) && bool((sprite->get(HX_CSTRING("r")) == HX_CSTRING("y")))))){
				HX_STACK_LINE(40)
				region->rotated = true;
			}
		}
;
	}
	HX_STACK_LINE(42)
	return atlas;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(TextureAtlas_obj,loadTexturePacker,return )


TextureAtlas_obj::TextureAtlas_obj()
{
}

void TextureAtlas_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TextureAtlas);
	HX_MARK_MEMBER_NAME(_regions,"_regions");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void TextureAtlas_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_regions,"_regions");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic TextureAtlas_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"_regions") ) { return _regions; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getRegion") ) { return getRegion_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"defineRegion") ) { return defineRegion_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"loadTexturePacker") ) { return loadTexturePacker_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TextureAtlas_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"_regions") ) { _regions=inValue.Cast< ::Hash >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TextureAtlas_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_regions"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("loadTexturePacker"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_regions"),
	HX_CSTRING("defineRegion"),
	HX_CSTRING("getRegion"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TextureAtlas_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TextureAtlas_obj::__mClass,"__mClass");
};

Class TextureAtlas_obj::__mClass;

void TextureAtlas_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.atlas.TextureAtlas"), hx::TCanCast< TextureAtlas_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void TextureAtlas_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas
