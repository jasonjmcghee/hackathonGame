#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
#endif
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_Mask
#include <com/haxepunk/Mask.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Image
#include <com/haxepunk/graphics/Image.h>
#endif
#ifndef INCLUDED_entities_Wall
#include <entities/Wall.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace entities{

Void Wall_obj::__construct(int posX,int posY)
{
HX_STACK_PUSH("Wall::new","entities/Wall.hx",8);
{
	HX_STACK_LINE(9)
	super::__construct(posX,posY,null(),null());
	HX_STACK_LINE(10)
	this->setGraphic(::com::haxepunk::graphics::Image_obj::__new(HX_CSTRING("gfx/wall.png"),null(),null()));
	HX_STACK_LINE(11)
	{
		HX_STACK_LINE(11)
		int originX = (int)0;		HX_STACK_VAR(originX,"originX");
		int originY = (int)0;		HX_STACK_VAR(originY,"originY");
		HX_STACK_LINE(11)
		this->width = (int)32;
		HX_STACK_LINE(11)
		this->height = (int)32;
		HX_STACK_LINE(11)
		this->originX = originX;
		HX_STACK_LINE(11)
		this->originY = originY;
	}
	HX_STACK_LINE(12)
	this->setType(HX_CSTRING("wall"));
	HX_STACK_LINE(13)
	this->x = (posX * (int)32);
	HX_STACK_LINE(14)
	this->y = (posY * (int)32);
}
;
	return null();
}

Wall_obj::~Wall_obj() { }

Dynamic Wall_obj::__CreateEmpty() { return  new Wall_obj; }
hx::ObjectPtr< Wall_obj > Wall_obj::__new(int posX,int posY)
{  hx::ObjectPtr< Wall_obj > result = new Wall_obj();
	result->__construct(posX,posY);
	return result;}

Dynamic Wall_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Wall_obj > result = new Wall_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Wall_obj::Wall_obj()
{
}

void Wall_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Wall);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Wall_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Wall_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Wall_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Wall_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Wall_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Wall_obj::__mClass,"__mClass");
};

Class Wall_obj::__mClass;

void Wall_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("entities.Wall"), hx::TCanCast< Wall_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Wall_obj::__boot()
{
}

} // end namespace entities
