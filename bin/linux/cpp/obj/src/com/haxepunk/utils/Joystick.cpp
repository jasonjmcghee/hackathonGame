#include <hxcpp.h>

#ifndef INCLUDED_IntHash
#include <IntHash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_utils_JoyButtonState
#include <com/haxepunk/utils/JoyButtonState.h>
#endif
#ifndef INCLUDED_com_haxepunk_utils_Joystick
#include <com/haxepunk/utils/Joystick.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
namespace com{
namespace haxepunk{
namespace utils{

Void Joystick_obj::__construct()
{
HX_STACK_PUSH("Joystick::new","com/haxepunk/utils/Joystick.hx",24);
{
	HX_STACK_LINE(25)
	this->buttons = ::IntHash_obj::__new();
	HX_STACK_LINE(26)
	this->ball = ::native::geom::Point_obj::__new((int)0,(int)0);
	HX_STACK_LINE(27)
	this->axis = Array_obj< Float >::__new();
	HX_STACK_LINE(28)
	this->hat = ::native::geom::Point_obj::__new((int)0,(int)0);
	HX_STACK_LINE(29)
	this->set_connected(false);
	HX_STACK_LINE(30)
	this->_timeout = (int)0;
}
;
	return null();
}

Joystick_obj::~Joystick_obj() { }

Dynamic Joystick_obj::__CreateEmpty() { return  new Joystick_obj; }
hx::ObjectPtr< Joystick_obj > Joystick_obj::__new()
{  hx::ObjectPtr< Joystick_obj > result = new Joystick_obj();
	result->__construct();
	return result;}

Dynamic Joystick_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Joystick_obj > result = new Joystick_obj();
	result->__construct();
	return result;}

bool Joystick_obj::set_connected( bool value){
	HX_STACK_PUSH("Joystick::set_connected","com/haxepunk/utils/Joystick.hx",74);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(75)
	if ((value)){
		HX_STACK_LINE(75)
		this->_timeout = (int)3;
	}
	else{
		HX_STACK_LINE(76)
		this->_timeout = (int)0;
	}
	HX_STACK_LINE(77)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Joystick_obj,set_connected,return )

bool Joystick_obj::get_connected( ){
	HX_STACK_PUSH("Joystick::get_connected","com/haxepunk/utils/Joystick.hx",70);
	HX_STACK_THIS(this);
	HX_STACK_LINE(70)
	return (this->_timeout > (int)0);
}


HX_DEFINE_DYNAMIC_FUNC0(Joystick_obj,get_connected,return )

Float Joystick_obj::getAxis( int a){
	HX_STACK_PUSH("Joystick::getAxis","com/haxepunk/utils/Joystick.hx",64);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_LINE(64)
	if (((bool((a < (int)1)) || bool((a > this->axis->length))))){
		HX_STACK_LINE(65)
		return (int)0;
	}
	else{
		HX_STACK_LINE(66)
		return (  (((::Math_obj::abs(this->axis->__get((a - (int)1))) < 0.15))) ? Float((int)0) : Float(this->axis->__get((a - (int)1))) );
	}
	HX_STACK_LINE(64)
	return 0.;
}


HX_DEFINE_DYNAMIC_FUNC1(Joystick_obj,getAxis,return )

bool Joystick_obj::check( int button){
	HX_STACK_PUSH("Joystick::check","com/haxepunk/utils/Joystick.hx",55);
	HX_STACK_THIS(this);
	HX_STACK_ARG(button,"button");
	HX_STACK_LINE(56)
	if ((this->buttons->exists(button))){
		HX_STACK_LINE(57)
		return (this->buttons->get(button) != ::com::haxepunk::utils::JoyButtonState_obj::BUTTON_OFF_dyn());
	}
	HX_STACK_LINE(60)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC1(Joystick_obj,check,return )

bool Joystick_obj::pressed( int button){
	HX_STACK_PUSH("Joystick::pressed","com/haxepunk/utils/Joystick.hx",46);
	HX_STACK_THIS(this);
	HX_STACK_ARG(button,"button");
	HX_STACK_LINE(47)
	if ((this->buttons->exists(button))){
		HX_STACK_LINE(48)
		return (this->buttons->get(button) == ::com::haxepunk::utils::JoyButtonState_obj::BUTTON_PRESSED_dyn());
	}
	HX_STACK_LINE(51)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC1(Joystick_obj,pressed,return )

Void Joystick_obj::update( ){
{
		HX_STACK_PUSH("Joystick::update","com/haxepunk/utils/Joystick.hx",34);
		HX_STACK_THIS(this);
		HX_STACK_LINE(35)
		hx::SubEq(this->_timeout,::com::haxepunk::HXP_obj::elapsed);
		HX_STACK_LINE(36)
		for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(this->buttons->keys());  __it->hasNext(); ){
			int button = __it->next();
			if (((this->buttons->get(button) == ::com::haxepunk::utils::JoyButtonState_obj::BUTTON_PRESSED_dyn()))){
				HX_STACK_LINE(39)
				this->buttons->set(button,::com::haxepunk::utils::JoyButtonState_obj::BUTTON_ON_dyn());
			}
;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Joystick_obj,update,(void))

Float Joystick_obj::deadZone;


Joystick_obj::Joystick_obj()
{
}

void Joystick_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Joystick);
	HX_MARK_MEMBER_NAME(_timeout,"_timeout");
	HX_MARK_MEMBER_NAME(connected,"connected");
	HX_MARK_MEMBER_NAME(ball,"ball");
	HX_MARK_MEMBER_NAME(hat,"hat");
	HX_MARK_MEMBER_NAME(axis,"axis");
	HX_MARK_MEMBER_NAME(buttons,"buttons");
	HX_MARK_END_CLASS();
}

void Joystick_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_timeout,"_timeout");
	HX_VISIT_MEMBER_NAME(connected,"connected");
	HX_VISIT_MEMBER_NAME(ball,"ball");
	HX_VISIT_MEMBER_NAME(hat,"hat");
	HX_VISIT_MEMBER_NAME(axis,"axis");
	HX_VISIT_MEMBER_NAME(buttons,"buttons");
}

Dynamic Joystick_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"hat") ) { return hat; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"ball") ) { return ball; }
		if (HX_FIELD_EQ(inName,"axis") ) { return axis; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"check") ) { return check_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getAxis") ) { return getAxis_dyn(); }
		if (HX_FIELD_EQ(inName,"pressed") ) { return pressed_dyn(); }
		if (HX_FIELD_EQ(inName,"buttons") ) { return buttons; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"deadZone") ) { return deadZone; }
		if (HX_FIELD_EQ(inName,"_timeout") ) { return _timeout; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"connected") ) { return inCallProp ? get_connected() : connected; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"set_connected") ) { return set_connected_dyn(); }
		if (HX_FIELD_EQ(inName,"get_connected") ) { return get_connected_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Joystick_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"hat") ) { hat=inValue.Cast< ::native::geom::Point >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"ball") ) { ball=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"axis") ) { axis=inValue.Cast< Array< Float > >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"buttons") ) { buttons=inValue.Cast< ::IntHash >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"deadZone") ) { deadZone=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_timeout") ) { _timeout=inValue.Cast< Float >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"connected") ) { if (inCallProp) return set_connected(inValue);connected=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Joystick_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_timeout"));
	outFields->push(HX_CSTRING("connected"));
	outFields->push(HX_CSTRING("ball"));
	outFields->push(HX_CSTRING("hat"));
	outFields->push(HX_CSTRING("axis"));
	outFields->push(HX_CSTRING("buttons"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("deadZone"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_timeout"),
	HX_CSTRING("set_connected"),
	HX_CSTRING("get_connected"),
	HX_CSTRING("getAxis"),
	HX_CSTRING("check"),
	HX_CSTRING("pressed"),
	HX_CSTRING("update"),
	HX_CSTRING("connected"),
	HX_CSTRING("ball"),
	HX_CSTRING("hat"),
	HX_CSTRING("axis"),
	HX_CSTRING("buttons"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Joystick_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Joystick_obj::deadZone,"deadZone");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Joystick_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Joystick_obj::deadZone,"deadZone");
};

Class Joystick_obj::__mClass;

void Joystick_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.utils.Joystick"), hx::TCanCast< Joystick_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Joystick_obj::__boot()
{
	deadZone= 0.15;
}

} // end namespace com
} // end namespace haxepunk
} // end namespace utils
