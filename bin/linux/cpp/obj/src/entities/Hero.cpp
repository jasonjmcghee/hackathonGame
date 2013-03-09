#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
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
#ifndef INCLUDED_com_haxepunk_utils_Input
#include <com/haxepunk/utils/Input.h>
#endif
#ifndef INCLUDED_entities_Hero
#include <entities/Hero.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace entities{

Void Hero_obj::__construct(int x,int y)
{
HX_STACK_PUSH("Hero::new","entities/Hero.hx",19);
{
	HX_STACK_LINE(20)
	super::__construct(x,y,null(),null());
	HX_STACK_LINE(21)
	this->setGraphic(::com::haxepunk::graphics::Image_obj::__new(HX_CSTRING("gfx/block.png"),null(),null()));
	HX_STACK_LINE(22)
	{
		HX_STACK_LINE(22)
		int originX = (int)0;		HX_STACK_VAR(originX,"originX");
		int originY = (int)0;		HX_STACK_VAR(originY,"originY");
		HX_STACK_LINE(22)
		this->width = (int)32;
		HX_STACK_LINE(22)
		this->height = (int)32;
		HX_STACK_LINE(22)
		this->originX = originX;
		HX_STACK_LINE(22)
		this->originY = originY;
	}
}
;
	return null();
}

Hero_obj::~Hero_obj() { }

Dynamic Hero_obj::__CreateEmpty() { return  new Hero_obj; }
hx::ObjectPtr< Hero_obj > Hero_obj::__new(int x,int y)
{  hx::ObjectPtr< Hero_obj > result = new Hero_obj();
	result->__construct(x,y);
	return result;}

Dynamic Hero_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Hero_obj > result = new Hero_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Void Hero_obj::move( ){
{
		HX_STACK_PUSH("Hero::move","entities/Hero.hx",43);
		HX_STACK_THIS(this);
		HX_STACK_LINE(48)
		Float pab = ::Math_obj::sqrt((::Math_obj::pow(this->xVel,(int)2) + ::Math_obj::pow(this->yVel,(int)2)));		HX_STACK_VAR(pab,"pab");
		HX_STACK_LINE(50)
		if (((pab > (int)10))){
			HX_STACK_LINE(51)
			this->xVel = ((Float(this->xVel) / Float(pab)) * (int)10);
			HX_STACK_LINE(52)
			this->yVel = ((Float(this->yVel) / Float(pab)) * (int)10);
		}
		HX_STACK_LINE(55)
		hx::AddEq(this->xVel,(this->xAccel * (int)2));
		HX_STACK_LINE(57)
		if (((this->xVel < (int)0))){
			HX_STACK_LINE(57)
			this->xVel = ::Math_obj::min((this->xVel + 0.4),(int)0);
		}
		else{
			HX_STACK_LINE(60)
			if (((this->xVel > (int)0))){
				HX_STACK_LINE(60)
				this->xVel = ::Math_obj::max((this->xVel - 0.4),(int)0);
			}
		}
		HX_STACK_LINE(64)
		hx::AddEq(this->yVel,(this->yAccel * (int)2));
		HX_STACK_LINE(66)
		if (((this->yVel < (int)0))){
			HX_STACK_LINE(66)
			this->yVel = ::Math_obj::min((this->yVel + 0.4),(int)0);
		}
		else{
			HX_STACK_LINE(69)
			if (((this->yVel > (int)0))){
				HX_STACK_LINE(69)
				this->yVel = ::Math_obj::max((this->yVel - 0.4),(int)0);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Hero_obj,move,(void))

Void Hero_obj::update( ){
{
		HX_STACK_PUSH("Hero::update","entities/Hero.hx",34);
		HX_STACK_THIS(this);
		HX_STACK_LINE(36)
		this->handleInput();
		HX_STACK_LINE(37)
		this->move();
		HX_STACK_LINE(38)
		this->moveBy((int)0,this->yVel,null(),null());
		HX_STACK_LINE(39)
		this->moveBy(this->xVel,(int)0,null(),null());
		HX_STACK_LINE(40)
		this->super::update();
	}
return null();
}


Void Hero_obj::handleInput( ){
{
		HX_STACK_PUSH("Hero::handleInput","entities/Hero.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_LINE(26)
		this->xAccel = (int)0;
		HX_STACK_LINE(27)
		this->yAccel = (int)0;
		HX_STACK_LINE(29)
		if ((::com::haxepunk::utils::Input_obj::check((int)119))){
			HX_STACK_LINE(29)
			this->yAccel = (int)-1;
		}
		HX_STACK_LINE(30)
		if ((::com::haxepunk::utils::Input_obj::check((int)97))){
			HX_STACK_LINE(30)
			this->xAccel = (int)-1;
		}
		HX_STACK_LINE(31)
		if ((::com::haxepunk::utils::Input_obj::check((int)115))){
			HX_STACK_LINE(31)
			this->yAccel = (int)1;
		}
		HX_STACK_LINE(32)
		if ((::com::haxepunk::utils::Input_obj::check((int)100))){
			HX_STACK_LINE(32)
			this->xAccel = (int)1;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Hero_obj,handleInput,(void))

Float Hero_obj::maxVelocity;

Float Hero_obj::speed;

Float Hero_obj::drag;


Hero_obj::Hero_obj()
{
}

void Hero_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Hero);
	HX_MARK_MEMBER_NAME(yAccel,"yAccel");
	HX_MARK_MEMBER_NAME(xAccel,"xAccel");
	HX_MARK_MEMBER_NAME(yVel,"yVel");
	HX_MARK_MEMBER_NAME(xVel,"xVel");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Hero_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(yAccel,"yAccel");
	HX_VISIT_MEMBER_NAME(xAccel,"xAccel");
	HX_VISIT_MEMBER_NAME(yVel,"yVel");
	HX_VISIT_MEMBER_NAME(xVel,"xVel");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Hero_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"drag") ) { return drag; }
		if (HX_FIELD_EQ(inName,"move") ) { return move_dyn(); }
		if (HX_FIELD_EQ(inName,"yVel") ) { return yVel; }
		if (HX_FIELD_EQ(inName,"xVel") ) { return xVel; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"speed") ) { return speed; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"yAccel") ) { return yAccel; }
		if (HX_FIELD_EQ(inName,"xAccel") ) { return xAccel; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"maxVelocity") ) { return maxVelocity; }
		if (HX_FIELD_EQ(inName,"handleInput") ) { return handleInput_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Hero_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"drag") ) { drag=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"yVel") ) { yVel=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"xVel") ) { xVel=inValue.Cast< Float >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"speed") ) { speed=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"yAccel") ) { yAccel=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"xAccel") ) { xAccel=inValue.Cast< Float >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"maxVelocity") ) { maxVelocity=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Hero_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("yAccel"));
	outFields->push(HX_CSTRING("xAccel"));
	outFields->push(HX_CSTRING("yVel"));
	outFields->push(HX_CSTRING("xVel"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("maxVelocity"),
	HX_CSTRING("speed"),
	HX_CSTRING("drag"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("move"),
	HX_CSTRING("update"),
	HX_CSTRING("handleInput"),
	HX_CSTRING("yAccel"),
	HX_CSTRING("xAccel"),
	HX_CSTRING("yVel"),
	HX_CSTRING("xVel"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Hero_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Hero_obj::maxVelocity,"maxVelocity");
	HX_MARK_MEMBER_NAME(Hero_obj::speed,"speed");
	HX_MARK_MEMBER_NAME(Hero_obj::drag,"drag");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Hero_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Hero_obj::maxVelocity,"maxVelocity");
	HX_VISIT_MEMBER_NAME(Hero_obj::speed,"speed");
	HX_VISIT_MEMBER_NAME(Hero_obj::drag,"drag");
};

Class Hero_obj::__mClass;

void Hero_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("entities.Hero"), hx::TCanCast< Hero_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Hero_obj::__boot()
{
	maxVelocity= (int)10;
	speed= (int)2;
	drag= 0.4;
}

} // end namespace entities
