#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion
#include <com/haxepunk/graphics/atlas/AtlasRegion.h>
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

Void AtlasRegion_obj::__construct(::com::haxepunk::graphics::atlas::Atlas parent,int tileIndex,::native::geom::Rectangle rect)
{
HX_STACK_PUSH("AtlasRegion::new","com/haxepunk/graphics/atlas/AtlasRegion.hx",15);
{
	HX_STACK_LINE(16)
	this->parent = parent;
	HX_STACK_LINE(17)
	this->tileIndex = tileIndex;
	HX_STACK_LINE(18)
	this->rect = rect->clone();
}
;
	return null();
}

AtlasRegion_obj::~AtlasRegion_obj() { }

Dynamic AtlasRegion_obj::__CreateEmpty() { return  new AtlasRegion_obj; }
hx::ObjectPtr< AtlasRegion_obj > AtlasRegion_obj::__new(::com::haxepunk::graphics::atlas::Atlas parent,int tileIndex,::native::geom::Rectangle rect)
{  hx::ObjectPtr< AtlasRegion_obj > result = new AtlasRegion_obj();
	result->__construct(parent,tileIndex,rect);
	return result;}

Dynamic AtlasRegion_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< AtlasRegion_obj > result = new AtlasRegion_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Float AtlasRegion_obj::getHeight( ){
	HX_STACK_PUSH("AtlasRegion::getHeight","com/haxepunk/graphics/atlas/AtlasRegion.hx",71);
	HX_STACK_THIS(this);
	HX_STACK_LINE(71)
	return this->rect->height;
}


HX_DEFINE_DYNAMIC_FUNC0(AtlasRegion_obj,getHeight,return )

Float AtlasRegion_obj::getWidth( ){
	HX_STACK_PUSH("AtlasRegion::getWidth","com/haxepunk/graphics/atlas/AtlasRegion.hx",70);
	HX_STACK_THIS(this);
	HX_STACK_LINE(70)
	return this->rect->width;
}


HX_DEFINE_DYNAMIC_FUNC0(AtlasRegion_obj,getWidth,return )

::String AtlasRegion_obj::toString( ){
	HX_STACK_PUSH("AtlasRegion::toString","com/haxepunk/graphics/atlas/AtlasRegion.hx",66);
	HX_STACK_THIS(this);
	HX_STACK_LINE(66)
	return ((((((HX_CSTRING("[AtlasRegion ") + this->rect->width) + HX_CSTRING(", ")) + this->rect->height) + HX_CSTRING(" ")) + this->tileIndex) + HX_CSTRING("]"));
}


HX_DEFINE_DYNAMIC_FUNC0(AtlasRegion_obj,toString,return )

Void AtlasRegion_obj::draw( Float x,Float y,int layer,hx::Null< Float >  __o_scaleX,hx::Null< Float >  __o_scaleY,hx::Null< Float >  __o_angle,hx::Null< Float >  __o_red,hx::Null< Float >  __o_green,hx::Null< Float >  __o_blue,hx::Null< Float >  __o_alpha){
Float scaleX = __o_scaleX.Default(1);
Float scaleY = __o_scaleY.Default(1);
Float angle = __o_angle.Default(0);
Float red = __o_red.Default(1);
Float green = __o_green.Default(1);
Float blue = __o_blue.Default(1);
Float alpha = __o_alpha.Default(1);
	HX_STACK_PUSH("AtlasRegion::draw","com/haxepunk/graphics/atlas/AtlasRegion.hx",60);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(layer,"layer");
	HX_STACK_ARG(scaleX,"scaleX");
	HX_STACK_ARG(scaleY,"scaleY");
	HX_STACK_ARG(angle,"angle");
	HX_STACK_ARG(red,"red");
	HX_STACK_ARG(green,"green");
	HX_STACK_ARG(blue,"blue");
	HX_STACK_ARG(alpha,"alpha");
{
		HX_STACK_LINE(61)
		if ((this->rotated)){
			HX_STACK_LINE(61)
			angle = (angle - (int)90);
		}
		HX_STACK_LINE(62)
		this->parent->prepareTile(this->tileIndex,x,y,layer,scaleX,scaleY,angle,red,green,blue,alpha);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC10(AtlasRegion_obj,draw,(void))

::com::haxepunk::graphics::atlas::AtlasRegion AtlasRegion_obj::clip( ::native::geom::Rectangle clipRect,::native::geom::Point center){
	HX_STACK_PUSH("AtlasRegion::clip","com/haxepunk/graphics/atlas/AtlasRegion.hx",28);
	HX_STACK_THIS(this);
	HX_STACK_ARG(clipRect,"clipRect");
	HX_STACK_ARG(center,"center");
	HX_STACK_LINE(30)
	if ((((clipRect->x + clipRect->width) > this->rect->width))){
		HX_STACK_LINE(31)
		clipRect->width = (this->rect->width - clipRect->x);
	}
	HX_STACK_LINE(32)
	if ((((clipRect->y + clipRect->height) > this->rect->height))){
		HX_STACK_LINE(33)
		clipRect->height = (this->rect->height - clipRect->y);
	}
	HX_STACK_LINE(36)
	if (((clipRect->width < (int)0))){
		HX_STACK_LINE(36)
		clipRect->width = (int)0;
	}
	HX_STACK_LINE(37)
	if (((clipRect->height < (int)0))){
		HX_STACK_LINE(37)
		clipRect->height = (int)0;
	}
	HX_STACK_LINE(40)
	hx::AddEq(clipRect->x,this->rect->x);
	HX_STACK_LINE(41)
	hx::AddEq(clipRect->y,this->rect->y);
	struct _Function_1_1{
		inline static ::com::haxepunk::graphics::atlas::AtlasRegion Block( ::com::haxepunk::graphics::atlas::AtlasRegion_obj *__this,::native::geom::Point &center,::native::geom::Rectangle &clipRect){
			HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/AtlasRegion.hx",42);
			{
				HX_STACK_LINE(42)
				::com::haxepunk::graphics::atlas::Atlas _this = __this->parent;		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(42)
				_this->_tilesheet->addTileRect(clipRect,center);
				HX_STACK_LINE(42)
				::com::haxepunk::graphics::atlas::AtlasRegion region = ::com::haxepunk::graphics::atlas::AtlasRegion_obj::__new(_this,_this->_tileIndex,clipRect);		HX_STACK_VAR(region,"region");
				HX_STACK_LINE(42)
				hx::AddEq(_this->_tileIndex,(int)1);
				HX_STACK_LINE(42)
				return region;
			}
			return null();
		}
	};
	HX_STACK_LINE(42)
	return _Function_1_1::Block(this,center,clipRect);
}


HX_DEFINE_DYNAMIC_FUNC2(AtlasRegion_obj,clip,return )


AtlasRegion_obj::AtlasRegion_obj()
{
}

void AtlasRegion_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(AtlasRegion);
	HX_MARK_MEMBER_NAME(parent,"parent");
	HX_MARK_MEMBER_NAME(center,"center");
	HX_MARK_MEMBER_NAME(rect,"rect");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(tileIndex,"tileIndex");
	HX_MARK_MEMBER_NAME(rotated,"rotated");
	HX_MARK_END_CLASS();
}

void AtlasRegion_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(parent,"parent");
	HX_VISIT_MEMBER_NAME(center,"center");
	HX_VISIT_MEMBER_NAME(rect,"rect");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(tileIndex,"tileIndex");
	HX_VISIT_MEMBER_NAME(rotated,"rotated");
}

Dynamic AtlasRegion_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"rect") ) { return rect; }
		if (HX_FIELD_EQ(inName,"draw") ) { return draw_dyn(); }
		if (HX_FIELD_EQ(inName,"clip") ) { return clip_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { return inCallProp ? getWidth() : width; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"parent") ) { return parent; }
		if (HX_FIELD_EQ(inName,"center") ) { return center; }
		if (HX_FIELD_EQ(inName,"height") ) { return inCallProp ? getHeight() : height; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"rotated") ) { return rotated; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getWidth") ) { return getWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"toString") ) { return toString_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getHeight") ) { return getHeight_dyn(); }
		if (HX_FIELD_EQ(inName,"tileIndex") ) { return tileIndex; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic AtlasRegion_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"rect") ) { rect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"parent") ) { parent=inValue.Cast< ::com::haxepunk::graphics::atlas::Atlas >(); return inValue; }
		if (HX_FIELD_EQ(inName,"center") ) { center=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< Float >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"rotated") ) { rotated=inValue.Cast< bool >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"tileIndex") ) { tileIndex=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void AtlasRegion_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("parent"));
	outFields->push(HX_CSTRING("center"));
	outFields->push(HX_CSTRING("rect"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("tileIndex"));
	outFields->push(HX_CSTRING("rotated"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("parent"),
	HX_CSTRING("center"),
	HX_CSTRING("rect"),
	HX_CSTRING("getHeight"),
	HX_CSTRING("getWidth"),
	HX_CSTRING("toString"),
	HX_CSTRING("draw"),
	HX_CSTRING("clip"),
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	HX_CSTRING("tileIndex"),
	HX_CSTRING("rotated"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(AtlasRegion_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(AtlasRegion_obj::__mClass,"__mClass");
};

Class AtlasRegion_obj::__mClass;

void AtlasRegion_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.atlas.AtlasRegion"), hx::TCanCast< AtlasRegion_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void AtlasRegion_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas
