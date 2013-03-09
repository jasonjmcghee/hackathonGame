#include <hxcpp.h>

#ifndef INCLUDED_Hash
#include <Hash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_Engine
#include <com/haxepunk/Engine.h>
#endif
#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_Screen
#include <com/haxepunk/Screen.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tween
#include <com/haxepunk/Tween.h>
#endif
#ifndef INCLUDED_com_haxepunk_TweenType
#include <com/haxepunk/TweenType.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_World
#include <com/haxepunk/World.h>
#endif
#ifndef INCLUDED_com_haxepunk_debug_Console
#include <com/haxepunk/debug/Console.h>
#endif
#ifndef INCLUDED_com_haxepunk_tweens_misc_MultiVarTween
#include <com/haxepunk/tweens/misc/MultiVarTween.h>
#endif
#ifndef INCLUDED_haxe_Timer
#include <haxe/Timer.h>
#endif
#ifndef INCLUDED_native_display_BitmapData
#include <native/display/BitmapData.h>
#endif
#ifndef INCLUDED_native_display_DisplayObject
#include <native/display/DisplayObject.h>
#endif
#ifndef INCLUDED_native_display_DisplayObjectContainer
#include <native/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_display_InteractiveObject
#include <native/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_display_Stage
#include <native/display/Stage.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_native_geom_Matrix
#include <native/geom/Matrix.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
#ifndef INCLUDED_native_media_SoundTransform
#include <native/media/SoundTransform.h>
#endif
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
namespace com{
namespace haxepunk{

Void HXP_obj::__construct()
{
	return null();
}

HXP_obj::~HXP_obj() { }

Dynamic HXP_obj::__CreateEmpty() { return  new HXP_obj; }
hx::ObjectPtr< HXP_obj > HXP_obj::__new()
{  hx::ObjectPtr< HXP_obj > result = new HXP_obj();
	result->__construct();
	return result;}

Dynamic HXP_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< HXP_obj > result = new HXP_obj();
	result->__construct();
	return result;}

::String HXP_obj::VERSION;

int HXP_obj::BASELAYER;

Float HXP_obj::NUMBER_MAX_VALUE;

int HXP_obj::INT_MAX_VALUE;

int HXP_obj::blackColor;

int HXP_obj::width;

int HXP_obj::height;

int HXP_obj::windowWidth;

int HXP_obj::windowHeight;

bool HXP_obj::fixed;

Float HXP_obj::frameRate;

Float HXP_obj::assignedFrameRate;

Float HXP_obj::elapsed;

Float HXP_obj::rate;

::com::haxepunk::Screen HXP_obj::screen;

::native::display::BitmapData HXP_obj::buffer;

::native::geom::Rectangle HXP_obj::bounds;

::String HXP_obj::defaultFont;

::native::geom::Point HXP_obj::camera;

::com::haxepunk::Tweener HXP_obj::tweener;

bool HXP_obj::focused;

Float HXP_obj::halfWidth;

Float HXP_obj::halfHeight;

::com::haxepunk::World HXP_obj::world;

::com::haxepunk::World HXP_obj::getWorld( ){
	HX_STACK_PUSH("HXP::getWorld","com/haxepunk/HXP.hx",167);
	HX_STACK_LINE(167)
	return ::com::haxepunk::HXP_obj::_world;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,getWorld,return )

::com::haxepunk::World HXP_obj::setWorld( ::com::haxepunk::World value){
	HX_STACK_PUSH("HXP::setWorld","com/haxepunk/HXP.hx",169);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(170)
	if (((::com::haxepunk::HXP_obj::_world == value))){
		HX_STACK_LINE(170)
		return value;
	}
	HX_STACK_LINE(171)
	::com::haxepunk::HXP_obj::_goto = value;
	HX_STACK_LINE(172)
	return ::com::haxepunk::HXP_obj::_world;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,setWorld,return )

Void HXP_obj::swapWorld( ){
{
		HX_STACK_PUSH("HXP::swapWorld","com/haxepunk/HXP.hx",176);
		HX_STACK_LINE(177)
		::com::haxepunk::HXP_obj::_world = ::com::haxepunk::HXP_obj::_goto;
		HX_STACK_LINE(178)
		::com::haxepunk::HXP_obj::_goto = null();
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,swapWorld,(void))

Void HXP_obj::resize( int width,int height){
{
		HX_STACK_PUSH("HXP::resize","com/haxepunk/HXP.hx",187);
		HX_STACK_ARG(width,"width");
		HX_STACK_ARG(height,"height");
		HX_STACK_LINE(188)
		::com::haxepunk::HXP_obj::windowWidth = width;
		HX_STACK_LINE(189)
		::com::haxepunk::HXP_obj::windowHeight = height;
		HX_STACK_LINE(191)
		width = ::Std_obj::_int((Float(width) / Float(::com::haxepunk::HXP_obj::screen->getFullScaleX())));
		HX_STACK_LINE(192)
		height = ::Std_obj::_int((Float(height) / Float(::com::haxepunk::HXP_obj::screen->getFullScaleY())));
		HX_STACK_LINE(193)
		::com::haxepunk::HXP_obj::width = width;
		HX_STACK_LINE(194)
		::com::haxepunk::HXP_obj::height = height;
		HX_STACK_LINE(195)
		::com::haxepunk::HXP_obj::halfWidth = (Float(width) / Float((int)2));
		HX_STACK_LINE(196)
		::com::haxepunk::HXP_obj::halfHeight = (Float(height) / Float((int)2));
		HX_STACK_LINE(197)
		::com::haxepunk::HXP_obj::bounds->width = width;
		HX_STACK_LINE(198)
		::com::haxepunk::HXP_obj::bounds->height = height;
		HX_STACK_LINE(199)
		::com::haxepunk::HXP_obj::screen->resize();
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(HXP_obj,resize,(void))

Void HXP_obj::clear( Dynamic array){
{
		HX_STACK_PUSH("HXP::clear","com/haxepunk/HXP.hx",207);
		HX_STACK_ARG(array,"array");
		HX_STACK_LINE(207)
		array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,clear,(void))

Void HXP_obj::setCamera( hx::Null< Float >  __o_x,hx::Null< Float >  __o_y){
Float x = __o_x.Default(0);
Float y = __o_y.Default(0);
	HX_STACK_PUSH("HXP::setCamera","com/haxepunk/HXP.hx",221);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(222)
		::com::haxepunk::HXP_obj::camera->x = x;
		HX_STACK_LINE(223)
		::com::haxepunk::HXP_obj::camera->y = y;
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(HXP_obj,setCamera,(void))

Void HXP_obj::resetCamera( ){
{
		HX_STACK_PUSH("HXP::resetCamera","com/haxepunk/HXP.hx",230);
		HX_STACK_LINE(230)
		::com::haxepunk::HXP_obj::camera->x = ::com::haxepunk::HXP_obj::camera->y = (int)0;
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,resetCamera,(void))

Float HXP_obj::volume;

Float HXP_obj::getVolume( ){
	HX_STACK_PUSH("HXP::getVolume","com/haxepunk/HXP.hx",238);
	HX_STACK_LINE(238)
	return ::com::haxepunk::HXP_obj::_volume;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,getVolume,return )

Float HXP_obj::setVolume( Float value){
	HX_STACK_PUSH("HXP::setVolume","com/haxepunk/HXP.hx",240);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(241)
	if (((value < (int)0))){
		HX_STACK_LINE(241)
		value = (int)0;
	}
	HX_STACK_LINE(242)
	if (((::com::haxepunk::HXP_obj::_volume == value))){
		HX_STACK_LINE(242)
		return value;
	}
	HX_STACK_LINE(243)
	::com::haxepunk::HXP_obj::_soundTransform->volume = ::com::haxepunk::HXP_obj::_volume = value;
	HX_STACK_LINE(247)
	return ::com::haxepunk::HXP_obj::_volume;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,setVolume,return )

Float HXP_obj::pan;

Float HXP_obj::getPan( ){
	HX_STACK_PUSH("HXP::getPan","com/haxepunk/HXP.hx",254);
	HX_STACK_LINE(254)
	return ::com::haxepunk::HXP_obj::_pan;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,getPan,return )

Float HXP_obj::setPan( Float value){
	HX_STACK_PUSH("HXP::setPan","com/haxepunk/HXP.hx",256);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(257)
	if (((value < (int)-1))){
		HX_STACK_LINE(257)
		value = (int)-1;
	}
	HX_STACK_LINE(258)
	if (((value > (int)1))){
		HX_STACK_LINE(258)
		value = (int)1;
	}
	HX_STACK_LINE(259)
	if (((::com::haxepunk::HXP_obj::_pan == value))){
		HX_STACK_LINE(259)
		return value;
	}
	HX_STACK_LINE(260)
	::com::haxepunk::HXP_obj::_soundTransform->pan = ::com::haxepunk::HXP_obj::_pan = value;
	HX_STACK_LINE(264)
	return ::com::haxepunk::HXP_obj::_pan;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,setPan,return )

Dynamic HXP_obj::choose( Dynamic objs){
	HX_STACK_PUSH("HXP::choose","com/haxepunk/HXP.hx",273);
	HX_STACK_ARG(objs,"objs");
	struct _Function_1_1{
		inline static int Block( Dynamic &objs){
			HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",274);
			{
				HX_STACK_LINE(274)
				::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(hx::Mod((::com::haxepunk::HXP_obj::_seed * 16807.0),(int)2147483646));
				HX_STACK_LINE(274)
				return ::Std_obj::_int(((Float(::com::haxepunk::HXP_obj::_seed) / Float((int)2147483646)) * objs->__Field(HX_CSTRING("length"),true)));
			}
			return null();
		}
	};
	HX_STACK_LINE(273)
	return objs->__GetItem(_Function_1_1::Block(objs));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,choose,return )

int HXP_obj::sign( Float value){
	HX_STACK_PUSH("HXP::sign","com/haxepunk/HXP.hx",283);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(283)
	return (  (((value < (int)0))) ? int((int)-1) : int((  (((value > (int)0))) ? int((int)1) : int((int)0) )) );
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,sign,return )

Float HXP_obj::approach( Float value,Float target,Float amount){
	HX_STACK_PUSH("HXP::approach","com/haxepunk/HXP.hx",295);
	HX_STACK_ARG(value,"value");
	HX_STACK_ARG(target,"target");
	HX_STACK_ARG(amount,"amount");
	HX_STACK_LINE(295)
	if (((value < (target - amount)))){
		HX_STACK_LINE(296)
		return (value + amount);
	}
	else{
		HX_STACK_LINE(298)
		if (((value > (target + amount)))){
			HX_STACK_LINE(298)
			return (value - amount);
		}
		else{
			HX_STACK_LINE(300)
			return target;
		}
	}
	HX_STACK_LINE(295)
	return 0.;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,approach,return )

Float HXP_obj::lerp( Float a,Float b,hx::Null< Float >  __o_t){
Float t = __o_t.Default(1);
	HX_STACK_PUSH("HXP::lerp","com/haxepunk/HXP.hx",313);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_ARG(t,"t");
{
		HX_STACK_LINE(313)
		return (a + (((b - a)) * t));
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,lerp,return )

int HXP_obj::colorLerp( int fromColor,int toColor,hx::Null< Float >  __o_t){
Float t = __o_t.Default(1);
	HX_STACK_PUSH("HXP::colorLerp","com/haxepunk/HXP.hx",325);
	HX_STACK_ARG(fromColor,"fromColor");
	HX_STACK_ARG(toColor,"toColor");
	HX_STACK_ARG(t,"t");
{
		HX_STACK_LINE(325)
		if (((t <= (int)0))){
			HX_STACK_LINE(326)
			return fromColor;
		}
		else{
			HX_STACK_LINE(327)
			if (((t >= (int)1))){
				HX_STACK_LINE(327)
				return toColor;
			}
			else{
				HX_STACK_LINE(329)
				int a = (int((int(fromColor) >> int((int)24))) & int((int)255));		HX_STACK_VAR(a,"a");
				int r = (int((int(fromColor) >> int((int)16))) & int((int)255));		HX_STACK_VAR(r,"r");
				int g = (int((int(fromColor) >> int((int)8))) & int((int)255));		HX_STACK_VAR(g,"g");
				int b = (int(fromColor) & int((int)255));		HX_STACK_VAR(b,"b");
				int dA = (((int((int(toColor) >> int((int)24))) & int((int)255))) - a);		HX_STACK_VAR(dA,"dA");
				int dR = (((int((int(toColor) >> int((int)16))) & int((int)255))) - r);		HX_STACK_VAR(dR,"dR");
				int dG = (((int((int(toColor) >> int((int)8))) & int((int)255))) - g);		HX_STACK_VAR(dG,"dG");
				int dB = (((int(toColor) & int((int)255))) - b);		HX_STACK_VAR(dB,"dB");
				HX_STACK_LINE(337)
				hx::AddEq(a,::Std_obj::_int((dA * t)));
				HX_STACK_LINE(338)
				hx::AddEq(r,::Std_obj::_int((dR * t)));
				HX_STACK_LINE(339)
				hx::AddEq(g,::Std_obj::_int((dG * t)));
				HX_STACK_LINE(340)
				hx::AddEq(b,::Std_obj::_int((dB * t)));
				HX_STACK_LINE(341)
				return (int((int((int((int(a) << int((int)24))) | int((int(r) << int((int)16))))) | int((int(g) << int((int)8))))) | int(b));
			}
		}
		HX_STACK_LINE(325)
		return (int)0;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,colorLerp,return )

Void HXP_obj::stepTowards( Dynamic object,Float x,Float y,hx::Null< Float >  __o_distance){
Float distance = __o_distance.Default(1);
	HX_STACK_PUSH("HXP::stepTowards","com/haxepunk/HXP.hx",353);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(distance,"distance");
{
		HX_STACK_LINE(354)
		::com::haxepunk::HXP_obj::point->x = (x - object->__Field(HX_CSTRING("x"),true));
		HX_STACK_LINE(355)
		::com::haxepunk::HXP_obj::point->y = (y - object->__Field(HX_CSTRING("y"),true));
		HX_STACK_LINE(356)
		if (((::com::haxepunk::HXP_obj::point->get_length() <= distance))){
			HX_STACK_LINE(358)
			object->__FieldRef(HX_CSTRING("x")) = x;
			HX_STACK_LINE(359)
			object->__FieldRef(HX_CSTRING("y")) = y;
			HX_STACK_LINE(360)
			return null();
		}
		HX_STACK_LINE(362)
		::com::haxepunk::HXP_obj::point->normalize(distance);
		HX_STACK_LINE(363)
		hx::AddEq(object->__FieldRef(HX_CSTRING("x")),::com::haxepunk::HXP_obj::point->x);
		HX_STACK_LINE(364)
		hx::AddEq(object->__FieldRef(HX_CSTRING("y")),::com::haxepunk::HXP_obj::point->y);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,stepTowards,(void))

Void HXP_obj::anchorTo( Dynamic object,Dynamic anchor,hx::Null< Float >  __o_distance){
Float distance = __o_distance.Default(0);
	HX_STACK_PUSH("HXP::anchorTo","com/haxepunk/HXP.hx",374);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(anchor,"anchor");
	HX_STACK_ARG(distance,"distance");
{
		HX_STACK_LINE(375)
		::com::haxepunk::HXP_obj::point->x = (object->__Field(HX_CSTRING("x"),true) - anchor->__Field(HX_CSTRING("x"),true));
		HX_STACK_LINE(376)
		::com::haxepunk::HXP_obj::point->y = (object->__Field(HX_CSTRING("y"),true) - anchor->__Field(HX_CSTRING("y"),true));
		HX_STACK_LINE(377)
		if (((::com::haxepunk::HXP_obj::point->get_length() > distance))){
			HX_STACK_LINE(377)
			::com::haxepunk::HXP_obj::point->normalize(distance);
		}
		HX_STACK_LINE(378)
		object->__FieldRef(HX_CSTRING("x")) = (anchor->__Field(HX_CSTRING("x"),true) + ::com::haxepunk::HXP_obj::point->x);
		HX_STACK_LINE(379)
		object->__FieldRef(HX_CSTRING("y")) = (anchor->__Field(HX_CSTRING("y"),true) + ::com::haxepunk::HXP_obj::point->y);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,anchorTo,(void))

Float HXP_obj::angle( Float x1,Float y1,Float x2,Float y2){
	HX_STACK_PUSH("HXP::angle","com/haxepunk/HXP.hx",391);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
	HX_STACK_LINE(392)
	Float a = (::Math_obj::atan2((y2 - y1),(x2 - x1)) * ((Float((int)-180) / Float(::Math_obj::PI))));		HX_STACK_VAR(a,"a");
	HX_STACK_LINE(393)
	return (  (((a < (int)0))) ? Float((a + (int)360)) : Float(a) );
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,angle,return )

Void HXP_obj::angleXY( Dynamic object,Float angle,hx::Null< Float >  __o_length,hx::Null< Float >  __o_x,hx::Null< Float >  __o_y){
Float length = __o_length.Default(1);
Float x = __o_x.Default(0);
Float y = __o_y.Default(0);
	HX_STACK_PUSH("HXP::angleXY","com/haxepunk/HXP.hx",405);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(angle,"angle");
	HX_STACK_ARG(length,"length");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(406)
		hx::MultEq(angle,(Float(::Math_obj::PI) / Float((int)-180)));
		HX_STACK_LINE(407)
		object->__FieldRef(HX_CSTRING("x")) = ((::Math_obj::cos(angle) * length) + x);
		HX_STACK_LINE(408)
		object->__FieldRef(HX_CSTRING("y")) = ((::Math_obj::sin(angle) * length) + y);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC5(HXP_obj,angleXY,(void))

Void HXP_obj::rotateAround( Dynamic object,Dynamic anchor,hx::Null< Float >  __o_angle,hx::Null< bool >  __o_relative){
Float angle = __o_angle.Default(0);
bool relative = __o_relative.Default(true);
	HX_STACK_PUSH("HXP::rotateAround","com/haxepunk/HXP.hx",418);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(anchor,"anchor");
	HX_STACK_ARG(angle,"angle");
	HX_STACK_ARG(relative,"relative");
{
		HX_STACK_LINE(419)
		if ((relative)){
			struct _Function_2_1{
				inline static Float Block( Dynamic &object,Dynamic &anchor){
					HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",419);
					{
						HX_STACK_LINE(419)
						Float a = (::Math_obj::atan2((object->__Field(HX_CSTRING("y"),true) - anchor->__Field(HX_CSTRING("y"),true)),(object->__Field(HX_CSTRING("x"),true) - anchor->__Field(HX_CSTRING("x"),true))) * ((Float((int)-180) / Float(::Math_obj::PI))));		HX_STACK_VAR(a,"a");
						HX_STACK_LINE(419)
						return (  (((a < (int)0))) ? Float((a + (int)360)) : Float(a) );
					}
					return null();
				}
			};
			HX_STACK_LINE(419)
			hx::AddEq(angle,_Function_2_1::Block(object,anchor));
		}
		HX_STACK_LINE(420)
		{
			struct _Function_2_1{
				inline static Float Block( Dynamic &anchor,Dynamic &object){
					HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",420);
					{
						HX_STACK_LINE(420)
						Float x1 = anchor->__Field(HX_CSTRING("x"),true);		HX_STACK_VAR(x1,"x1");
						Float y1 = anchor->__Field(HX_CSTRING("y"),true);		HX_STACK_VAR(y1,"y1");
						Float x2 = object->__Field(HX_CSTRING("x"),true);		HX_STACK_VAR(x2,"x2");
						Float y2 = object->__Field(HX_CSTRING("y"),true);		HX_STACK_VAR(y2,"y2");
						HX_STACK_LINE(420)
						return ::Math_obj::sqrt(((((x2 - x1)) * ((x2 - x1))) + (((y2 - y1)) * ((y2 - y1)))));
					}
					return null();
				}
			};
			HX_STACK_LINE(420)
			Float angle1 = angle;		HX_STACK_VAR(angle1,"angle1");
			Float length = _Function_2_1::Block(anchor,object);		HX_STACK_VAR(length,"length");
			HX_STACK_LINE(420)
			hx::MultEq(angle1,(Float(::Math_obj::PI) / Float((int)-180)));
			HX_STACK_LINE(420)
			object->__FieldRef(HX_CSTRING("x")) = ((::Math_obj::cos(angle1) * length) + anchor->__Field(HX_CSTRING("x"),true));
			HX_STACK_LINE(420)
			object->__FieldRef(HX_CSTRING("y")) = ((::Math_obj::sin(angle1) * length) + anchor->__Field(HX_CSTRING("y"),true));
		}
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,rotateAround,(void))

Float HXP_obj::round( Float num,int precision){
	HX_STACK_PUSH("HXP::round","com/haxepunk/HXP.hx",430);
	HX_STACK_ARG(num,"num");
	HX_STACK_ARG(precision,"precision");
	HX_STACK_LINE(431)
	Float exp = ::Math_obj::pow((int)10,precision);		HX_STACK_VAR(exp,"exp");
	HX_STACK_LINE(432)
	return (Float(::Math_obj::round((num * exp))) / Float(exp));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(HXP_obj,round,return )

Float HXP_obj::distance( Float x1,Float y1,hx::Null< Float >  __o_x2,hx::Null< Float >  __o_y2){
Float x2 = __o_x2.Default(0);
Float y2 = __o_y2.Default(0);
	HX_STACK_PUSH("HXP::distance","com/haxepunk/HXP.hx",444);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
{
		HX_STACK_LINE(444)
		return ::Math_obj::sqrt(((((x2 - x1)) * ((x2 - x1))) + (((y2 - y1)) * ((y2 - y1)))));
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,distance,return )

Float HXP_obj::distanceSquared( Float x1,Float y1,hx::Null< Float >  __o_x2,hx::Null< Float >  __o_y2){
Float x2 = __o_x2.Default(0);
Float y2 = __o_y2.Default(0);
	HX_STACK_PUSH("HXP::distanceSquared","com/haxepunk/HXP.hx",449);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
{
		HX_STACK_LINE(449)
		return ((((x2 - x1)) * ((x2 - x1))) + (((y2 - y1)) * ((y2 - y1))));
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,distanceSquared,return )

Float HXP_obj::distanceRects( Float x1,Float y1,Float w1,Float h1,Float x2,Float y2,Float w2,Float h2){
	HX_STACK_PUSH("HXP::distanceRects","com/haxepunk/HXP.hx",466);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(w1,"w1");
	HX_STACK_ARG(h1,"h1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
	HX_STACK_ARG(w2,"w2");
	HX_STACK_ARG(h2,"h2");
	HX_STACK_LINE(467)
	if (((bool((x1 < (x2 + w2))) && bool((x2 < (x1 + w1)))))){
		HX_STACK_LINE(469)
		if (((bool((y1 < (y2 + h2))) && bool((y2 < (y1 + h1)))))){
			HX_STACK_LINE(469)
			return (int)0;
		}
		HX_STACK_LINE(470)
		if (((y1 > y2))){
			HX_STACK_LINE(470)
			return (y1 - ((y2 + h2)));
		}
		HX_STACK_LINE(471)
		return (y2 - ((y1 + h1)));
	}
	HX_STACK_LINE(473)
	if (((bool((y1 < (y2 + h2))) && bool((y2 < (y1 + h1)))))){
		HX_STACK_LINE(475)
		if (((x1 > x2))){
			HX_STACK_LINE(475)
			return (x1 - ((x2 + w2)));
		}
		HX_STACK_LINE(476)
		return (x2 - ((x1 + w1)));
	}
	HX_STACK_LINE(478)
	if (((x1 > x2))){
		HX_STACK_LINE(480)
		if (((y1 > y2))){
			struct _Function_3_1{
				inline static Float Block( Float &x2,Float &y1,Float &w2,Float &h2,Float &x1,Float &y2){
					HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",480);
					{
						HX_STACK_LINE(480)
						Float x21 = (x2 + w2);		HX_STACK_VAR(x21,"x21");
						Float y21 = (y2 + h2);		HX_STACK_VAR(y21,"y21");
						HX_STACK_LINE(480)
						return ::Math_obj::sqrt(((((x21 - x1)) * ((x21 - x1))) + (((y21 - y1)) * ((y21 - y1)))));
					}
					return null();
				}
			};
			HX_STACK_LINE(480)
			return _Function_3_1::Block(x2,y1,w2,h2,x1,y2);
		}
		struct _Function_2_1{
			inline static Float Block( Float &y1,Float &x2,Float &w2,Float &x1,Float &h1,Float &y2){
				HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",481);
				{
					HX_STACK_LINE(481)
					Float y11 = (y1 + h1);		HX_STACK_VAR(y11,"y11");
					Float x21 = (x2 + w2);		HX_STACK_VAR(x21,"x21");
					HX_STACK_LINE(481)
					return ::Math_obj::sqrt(((((x21 - x1)) * ((x21 - x1))) + (((y2 - y11)) * ((y2 - y11)))));
				}
				return null();
			}
		};
		HX_STACK_LINE(481)
		return _Function_2_1::Block(y1,x2,w2,x1,h1,y2);
	}
	HX_STACK_LINE(483)
	if (((y1 > y2))){
		struct _Function_2_1{
			inline static Float Block( Float &x2,Float &y1,Float &x1,Float &h2,Float &w1,Float &y2){
				HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",483);
				{
					HX_STACK_LINE(483)
					Float x11 = (x1 + w1);		HX_STACK_VAR(x11,"x11");
					Float y21 = (y2 + h2);		HX_STACK_VAR(y21,"y21");
					HX_STACK_LINE(483)
					return ::Math_obj::sqrt(((((x2 - x11)) * ((x2 - x11))) + (((y21 - y1)) * ((y21 - y1)))));
				}
				return null();
			}
		};
		HX_STACK_LINE(483)
		return _Function_2_1::Block(x2,y1,x1,h2,w1,y2);
	}
	struct _Function_1_1{
		inline static Float Block( Float &y1,Float &x2,Float &x1,Float &w1,Float &h1,Float &y2){
			HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",484);
			{
				HX_STACK_LINE(484)
				Float x11 = (x1 + w1);		HX_STACK_VAR(x11,"x11");
				Float y11 = (y1 + h1);		HX_STACK_VAR(y11,"y11");
				HX_STACK_LINE(484)
				return ::Math_obj::sqrt(((((x2 - x11)) * ((x2 - x11))) + (((y2 - y11)) * ((y2 - y11)))));
			}
			return null();
		}
	};
	HX_STACK_LINE(484)
	return _Function_1_1::Block(y1,x2,x1,w1,h1,y2);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC8(HXP_obj,distanceRects,return )

Float HXP_obj::distanceRectPoint( Float px,Float py,Float rx,Float ry,Float rw,Float rh){
	HX_STACK_PUSH("HXP::distanceRectPoint","com/haxepunk/HXP.hx",498);
	HX_STACK_ARG(px,"px");
	HX_STACK_ARG(py,"py");
	HX_STACK_ARG(rx,"rx");
	HX_STACK_ARG(ry,"ry");
	HX_STACK_ARG(rw,"rw");
	HX_STACK_ARG(rh,"rh");
	HX_STACK_LINE(499)
	if (((bool((px >= rx)) && bool((px <= (rx + rw)))))){
		HX_STACK_LINE(501)
		if (((bool((py >= ry)) && bool((py <= (ry + rh)))))){
			HX_STACK_LINE(501)
			return (int)0;
		}
		HX_STACK_LINE(502)
		if (((py > ry))){
			HX_STACK_LINE(502)
			return (py - ((ry + rh)));
		}
		HX_STACK_LINE(503)
		return (ry - py);
	}
	HX_STACK_LINE(505)
	if (((bool((py >= ry)) && bool((py <= (ry + rh)))))){
		HX_STACK_LINE(507)
		if (((px > rx))){
			HX_STACK_LINE(507)
			return (px - ((rx + rw)));
		}
		HX_STACK_LINE(508)
		return (rx - px);
	}
	HX_STACK_LINE(510)
	if (((px > rx))){
		HX_STACK_LINE(512)
		if (((py > ry))){
			struct _Function_3_1{
				inline static Float Block( Float &rw,Float &rh,Float &py,Float &ry,Float &px,Float &rx){
					HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",512);
					{
						HX_STACK_LINE(512)
						Float x2 = (rx + rw);		HX_STACK_VAR(x2,"x2");
						Float y2 = (ry + rh);		HX_STACK_VAR(y2,"y2");
						HX_STACK_LINE(512)
						return ::Math_obj::sqrt(((((x2 - px)) * ((x2 - px))) + (((y2 - py)) * ((y2 - py)))));
					}
					return null();
				}
			};
			HX_STACK_LINE(512)
			return _Function_3_1::Block(rw,rh,py,ry,px,rx);
		}
		struct _Function_2_1{
			inline static Float Block( Float &rw,Float &py,Float &px,Float &ry,Float &rx){
				HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",513);
				{
					HX_STACK_LINE(513)
					Float x2 = (rx + rw);		HX_STACK_VAR(x2,"x2");
					HX_STACK_LINE(513)
					return ::Math_obj::sqrt(((((x2 - px)) * ((x2 - px))) + (((ry - py)) * ((ry - py)))));
				}
				return null();
			}
		};
		HX_STACK_LINE(513)
		return _Function_2_1::Block(rw,py,px,ry,rx);
	}
	HX_STACK_LINE(515)
	if (((py > ry))){
		struct _Function_2_1{
			inline static Float Block( Float &rh,Float &py,Float &ry,Float &px,Float &rx){
				HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",515);
				{
					HX_STACK_LINE(515)
					Float y2 = (ry + rh);		HX_STACK_VAR(y2,"y2");
					HX_STACK_LINE(515)
					return ::Math_obj::sqrt(((((rx - px)) * ((rx - px))) + (((y2 - py)) * ((y2 - py)))));
				}
				return null();
			}
		};
		HX_STACK_LINE(515)
		return _Function_2_1::Block(rh,py,ry,px,rx);
	}
	HX_STACK_LINE(516)
	return ::Math_obj::sqrt(((((rx - px)) * ((rx - px))) + (((ry - py)) * ((ry - py)))));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC6(HXP_obj,distanceRectPoint,return )

Float HXP_obj::clamp( Float value,Float min,Float max){
	HX_STACK_PUSH("HXP::clamp","com/haxepunk/HXP.hx",527);
	HX_STACK_ARG(value,"value");
	HX_STACK_ARG(min,"min");
	HX_STACK_ARG(max,"max");
	HX_STACK_LINE(527)
	if (((max > min))){
		HX_STACK_LINE(529)
		if (((value < min))){
			HX_STACK_LINE(530)
			return min;
		}
		else{
			HX_STACK_LINE(531)
			if (((value > max))){
				HX_STACK_LINE(531)
				return max;
			}
			else{
				HX_STACK_LINE(532)
				return value;
			}
		}
	}
	else{
		HX_STACK_LINE(535)
		if (((value < max))){
			HX_STACK_LINE(537)
			return max;
		}
		else{
			HX_STACK_LINE(538)
			if (((value > min))){
				HX_STACK_LINE(538)
				return min;
			}
			else{
				HX_STACK_LINE(539)
				return value;
			}
		}
	}
	HX_STACK_LINE(527)
	return 0.;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,clamp,return )

Void HXP_obj::clampInRect( Dynamic object,Float x,Float y,Float width,Float height,hx::Null< Float >  __o_padding){
Float padding = __o_padding.Default(0);
	HX_STACK_PUSH("HXP::clampInRect","com/haxepunk/HXP.hx",552);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_ARG(padding,"padding");
{
		HX_STACK_LINE(553)
		object->__FieldRef(HX_CSTRING("x")) = ::com::haxepunk::HXP_obj::clamp(object->__Field(HX_CSTRING("x"),true),(x + padding),((x + width) - padding));
		HX_STACK_LINE(554)
		object->__FieldRef(HX_CSTRING("y")) = ::com::haxepunk::HXP_obj::clamp(object->__Field(HX_CSTRING("y"),true),(y + padding),((y + height) - padding));
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC6(HXP_obj,clampInRect,(void))

Float HXP_obj::scale( Float value,Float min,Float max,Float min2,Float max2){
	HX_STACK_PUSH("HXP::scale","com/haxepunk/HXP.hx",567);
	HX_STACK_ARG(value,"value");
	HX_STACK_ARG(min,"min");
	HX_STACK_ARG(max,"max");
	HX_STACK_ARG(min2,"min2");
	HX_STACK_ARG(max2,"max2");
	HX_STACK_LINE(567)
	return (min2 + ((Float(((value - min))) / Float(((max - min)))) * ((max2 - min2))));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC5(HXP_obj,scale,return )

Float HXP_obj::scaleClamp( Float value,Float min,Float max,Float min2,Float max2){
	HX_STACK_PUSH("HXP::scaleClamp","com/haxepunk/HXP.hx",581);
	HX_STACK_ARG(value,"value");
	HX_STACK_ARG(min,"min");
	HX_STACK_ARG(max,"max");
	HX_STACK_ARG(min2,"min2");
	HX_STACK_ARG(max2,"max2");
	HX_STACK_LINE(582)
	value = (min2 + ((Float(((value - min))) / Float(((max - min)))) * ((max2 - min2))));
	HX_STACK_LINE(583)
	if (((max2 > min2))){
		HX_STACK_LINE(585)
		value = (  (((value < max2))) ? Float(value) : Float(max2) );
		HX_STACK_LINE(586)
		return (  (((value > min2))) ? Float(value) : Float(min2) );
	}
	HX_STACK_LINE(588)
	value = (  (((value < min2))) ? Float(value) : Float(min2) );
	HX_STACK_LINE(589)
	return (  (((value > max2))) ? Float(value) : Float(max2) );
}


STATIC_HX_DEFINE_DYNAMIC_FUNC5(HXP_obj,scaleClamp,return )

int HXP_obj::randomSeed;

int HXP_obj::setRandomSeed( int value){
	HX_STACK_PUSH("HXP::setRandomSeed","com/haxepunk/HXP.hx",597);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(598)
	::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(::com::haxepunk::HXP_obj::clamp(value,1.0,(int)2147483646));
	HX_STACK_LINE(599)
	::com::haxepunk::HXP_obj::randomSeed = ::com::haxepunk::HXP_obj::_seed;
	HX_STACK_LINE(600)
	return ::com::haxepunk::HXP_obj::_seed;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,setRandomSeed,return )

Void HXP_obj::randomizeSeed( ){
{
		HX_STACK_PUSH("HXP::randomizeSeed","com/haxepunk/HXP.hx",607);
		HX_STACK_LINE(608)
		::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(::com::haxepunk::HXP_obj::clamp(::Std_obj::_int(((int)2147483646 * ::Math_obj::random())),1.0,(int)2147483646));
		HX_STACK_LINE(608)
		::com::haxepunk::HXP_obj::randomSeed = ::com::haxepunk::HXP_obj::_seed;
		HX_STACK_LINE(608)
		::com::haxepunk::HXP_obj::_seed;
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,randomizeSeed,(void))

Float HXP_obj::random;

Float HXP_obj::getRandom( ){
	HX_STACK_PUSH("HXP::getRandom","com/haxepunk/HXP.hx",616);
	HX_STACK_LINE(617)
	::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(hx::Mod((::com::haxepunk::HXP_obj::_seed * 16807.0),(int)2147483646));
	HX_STACK_LINE(618)
	return (Float(::com::haxepunk::HXP_obj::_seed) / Float((int)2147483646));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,getRandom,return )

int HXP_obj::rand( int amount){
	HX_STACK_PUSH("HXP::rand","com/haxepunk/HXP.hx",627);
	HX_STACK_ARG(amount,"amount");
	HX_STACK_LINE(628)
	::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(hx::Mod((::com::haxepunk::HXP_obj::_seed * 16807.0),(int)2147483646));
	HX_STACK_LINE(629)
	return ::Std_obj::_int(((Float(::com::haxepunk::HXP_obj::_seed) / Float((int)2147483646)) * amount));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,rand,return )

int HXP_obj::indexOf( Dynamic a,Dynamic v){
	HX_STACK_PUSH("HXP::indexOf","com/haxepunk/HXP.hx",633);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(634)
	int i = (int)0;		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(635)
	{
		HX_STACK_LINE(635)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(635)
		while(((_g < a->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(635)
			Dynamic v2 = a->__GetItem(_g);		HX_STACK_VAR(v2,"v2");
			HX_STACK_LINE(635)
			++(_g);
			HX_STACK_LINE(636)
			if (((v == v2))){
				HX_STACK_LINE(637)
				return i;
			}
			HX_STACK_LINE(638)
			(i)++;
		}
	}
	HX_STACK_LINE(640)
	return (int)-1;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(HXP_obj,indexOf,return )

Dynamic HXP_obj::next( Dynamic current,Dynamic options,hx::Null< bool >  __o_loop){
bool loop = __o_loop.Default(true);
	HX_STACK_PUSH("HXP::next","com/haxepunk/HXP.hx",651);
	HX_STACK_ARG(current,"current");
	HX_STACK_ARG(options,"options");
	HX_STACK_ARG(loop,"loop");
{
		HX_STACK_LINE(651)
		if ((loop)){
			HX_STACK_LINE(653)
			return options->__GetItem(hx::Mod(((::com::haxepunk::HXP_obj::indexOf(options,current) + (int)1)),options->__Field(HX_CSTRING("length"),true)));
		}
		else{
			HX_STACK_LINE(655)
			return options->__GetItem(::Std_obj::_int(::Math_obj::max((::com::haxepunk::HXP_obj::indexOf(options,current) + (int)1),(options->__Field(HX_CSTRING("length"),true) - (int)1))));
		}
		HX_STACK_LINE(651)
		return null();
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,next,return )

Dynamic HXP_obj::prev( Dynamic current,Dynamic options,hx::Null< bool >  __o_loop){
bool loop = __o_loop.Default(true);
	HX_STACK_PUSH("HXP::prev","com/haxepunk/HXP.hx",666);
	HX_STACK_ARG(current,"current");
	HX_STACK_ARG(options,"options");
	HX_STACK_ARG(loop,"loop");
{
		HX_STACK_LINE(666)
		if ((loop)){
			HX_STACK_LINE(668)
			return options->__GetItem(hx::Mod((((::com::haxepunk::HXP_obj::indexOf(options,current) - (int)1) + options->__Field(HX_CSTRING("length"),true))),options->__Field(HX_CSTRING("length"),true)));
		}
		else{
			HX_STACK_LINE(670)
			return options->__GetItem(::Std_obj::_int(::Math_obj::max((::com::haxepunk::HXP_obj::indexOf(options,current) - (int)1),(int)0)));
		}
		HX_STACK_LINE(666)
		return null();
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,prev,return )

Dynamic HXP_obj::swap( Dynamic current,Dynamic a,Dynamic b){
	HX_STACK_PUSH("HXP::swap","com/haxepunk/HXP.hx",681);
	HX_STACK_ARG(current,"current");
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_LINE(681)
	return (  (((current == a))) ? Dynamic(b) : Dynamic(a) );
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,swap,return )

int HXP_obj::getColorRGB( hx::Null< int >  __o_R,hx::Null< int >  __o_G,hx::Null< int >  __o_B){
int R = __o_R.Default(0);
int G = __o_G.Default(0);
int B = __o_B.Default(0);
	HX_STACK_PUSH("HXP::getColorRGB","com/haxepunk/HXP.hx",693);
	HX_STACK_ARG(R,"R");
	HX_STACK_ARG(G,"G");
	HX_STACK_ARG(B,"B");
{
		HX_STACK_LINE(693)
		return (int((int((int(R) << int((int)16))) | int((int(G) << int((int)8))))) | int(B));
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,getColorRGB,return )

int HXP_obj::getColorHSV( Float h,Float s,Float v){
	HX_STACK_PUSH("HXP::getColorHSV","com/haxepunk/HXP.hx",705);
	HX_STACK_ARG(h,"h");
	HX_STACK_ARG(s,"s");
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(706)
	h = ::Std_obj::_int((h * (int)360));
	HX_STACK_LINE(707)
	int hi = hx::Mod(::Math_obj::floor((Float(h) / Float((int)60))),(int)6);		HX_STACK_VAR(hi,"hi");
	Float f = ((Float(h) / Float((int)60)) - ::Math_obj::floor((Float(h) / Float((int)60))));		HX_STACK_VAR(f,"f");
	Float p = (v * (((int)1 - s)));		HX_STACK_VAR(p,"p");
	Float q = (v * (((int)1 - (f * s))));		HX_STACK_VAR(q,"q");
	Float t = (v * (((int)1 - ((((int)1 - f)) * s))));		HX_STACK_VAR(t,"t");
	HX_STACK_LINE(712)
	switch( (int)(hi)){
		case (int)0: {
			HX_STACK_LINE(714)
			return (int((int((int(::Std_obj::_int((v * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((t * (int)255))) << int((int)8))))) | int(::Std_obj::_int((p * (int)255))));
		}
		;break;
		case (int)1: {
			HX_STACK_LINE(715)
			return (int((int((int(::Std_obj::_int((q * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((v * (int)255))) << int((int)8))))) | int(::Std_obj::_int((p * (int)255))));
		}
		;break;
		case (int)2: {
			HX_STACK_LINE(716)
			return (int((int((int(::Std_obj::_int((p * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((v * (int)255))) << int((int)8))))) | int(::Std_obj::_int((t * (int)255))));
		}
		;break;
		case (int)3: {
			HX_STACK_LINE(717)
			return (int((int((int(::Std_obj::_int((p * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((q * (int)255))) << int((int)8))))) | int(::Std_obj::_int((v * (int)255))));
		}
		;break;
		case (int)4: {
			HX_STACK_LINE(718)
			return (int((int((int(::Std_obj::_int((t * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((p * (int)255))) << int((int)8))))) | int(::Std_obj::_int((v * (int)255))));
		}
		;break;
		case (int)5: {
			HX_STACK_LINE(719)
			return (int((int((int(::Std_obj::_int((v * (int)255))) << int((int)16))) | int((int(::Std_obj::_int((p * (int)255))) << int((int)8))))) | int(::Std_obj::_int((q * (int)255))));
		}
		;break;
		default: {
			HX_STACK_LINE(720)
			return (int)0;
		}
	}
	HX_STACK_LINE(722)
	return (int)0;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,getColorHSV,return )

int HXP_obj::getRed( int color){
	HX_STACK_PUSH("HXP::getRed","com/haxepunk/HXP.hx",731);
	HX_STACK_ARG(color,"color");
	HX_STACK_LINE(731)
	return (int((int(color) >> int((int)16))) & int((int)255));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,getRed,return )

int HXP_obj::getGreen( int color){
	HX_STACK_PUSH("HXP::getGreen","com/haxepunk/HXP.hx",741);
	HX_STACK_ARG(color,"color");
	HX_STACK_LINE(741)
	return (int((int(color) >> int((int)8))) & int((int)255));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,getGreen,return )

int HXP_obj::getBlue( int color){
	HX_STACK_PUSH("HXP::getBlue","com/haxepunk/HXP.hx",751);
	HX_STACK_ARG(color,"color");
	HX_STACK_LINE(751)
	return (int(color) & int((int)255));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,getBlue,return )

::native::display::BitmapData HXP_obj::getBitmap( Dynamic source){
	HX_STACK_PUSH("HXP::getBitmap","com/haxepunk/HXP.hx",761);
	HX_STACK_ARG(source,"source");
	HX_STACK_LINE(762)
	::String name = ::Std_obj::string(source);		HX_STACK_VAR(name,"name");
	HX_STACK_LINE(763)
	if ((::com::haxepunk::HXP_obj::_bitmap->exists(name))){
		HX_STACK_LINE(764)
		return ::com::haxepunk::HXP_obj::_bitmap->get(name);
	}
	HX_STACK_LINE(767)
	::native::display::BitmapData data = ::nme::installer::Assets_obj::getBitmapData(source,null());		HX_STACK_VAR(data,"data");
	HX_STACK_LINE(771)
	if (((data != null()))){
		HX_STACK_LINE(772)
		::com::haxepunk::HXP_obj::_bitmap->set(name,data);
	}
	HX_STACK_LINE(774)
	return data;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,getBitmap,return )

::native::display::BitmapData HXP_obj::createBitmap( int width,int height,Dynamic __o_transparent,Dynamic __o_color){
Dynamic transparent = __o_transparent.Default(false);
Dynamic color = __o_color.Default(0);
	HX_STACK_PUSH("HXP::createBitmap","com/haxepunk/HXP.hx",781);
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_ARG(transparent,"transparent");
	HX_STACK_ARG(color,"color");
{
		struct _Function_1_1{
			inline static Dynamic Block( Dynamic &color){
				HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",795);
				{
					HX_STACK_LINE(795)
					int color1 = color;		HX_STACK_VAR(color1,"color1");
					HX_STACK_LINE(795)
					return color1;
				}
				return null();
			}
		};
		HX_STACK_LINE(781)
		return ::native::display::BitmapData_obj::__new(width,height,transparent,_Function_1_1::Block(color),null());
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,createBitmap,return )

Dynamic HXP_obj::convertColor( int color){
	HX_STACK_PUSH("HXP::convertColor","com/haxepunk/HXP.hx",802);
	HX_STACK_ARG(color,"color");
	HX_STACK_LINE(802)
	return color;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,convertColor,return )

Float HXP_obj::timeFlag( ){
	HX_STACK_PUSH("HXP::timeFlag","com/haxepunk/HXP.hx",815);
	HX_STACK_LINE(816)
	Float t = ::haxe::Timer_obj::stamp();		HX_STACK_VAR(t,"t");
	Float e = (t - ::com::haxepunk::HXP_obj::_time);		HX_STACK_VAR(e,"e");
	HX_STACK_LINE(818)
	::com::haxepunk::HXP_obj::_time = t;
	HX_STACK_LINE(819)
	return e;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,timeFlag,return )

::com::haxepunk::debug::Console HXP_obj::console;

::com::haxepunk::debug::Console HXP_obj::getConsole( ){
	HX_STACK_PUSH("HXP::getConsole","com/haxepunk/HXP.hx",827);
	HX_STACK_LINE(828)
	if (((::com::haxepunk::HXP_obj::_console == null()))){
		HX_STACK_LINE(828)
		::com::haxepunk::HXP_obj::_console = ::com::haxepunk::debug::Console_obj::__new();
	}
	HX_STACK_LINE(829)
	return ::com::haxepunk::HXP_obj::_console;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,getConsole,return )

bool HXP_obj::consoleEnabled( ){
	HX_STACK_PUSH("HXP::consoleEnabled","com/haxepunk/HXP.hx",836);
	HX_STACK_LINE(836)
	return (::com::haxepunk::HXP_obj::_console != null());
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,consoleEnabled,return )

Dynamic HXP_obj::log;

Dynamic HXP_obj::watch;

::com::haxepunk::tweens::misc::MultiVarTween HXP_obj::tween( Dynamic object,Dynamic values,Float duration,Dynamic options){
	HX_STACK_PUSH("HXP::tween","com/haxepunk/HXP.hx",879);
	HX_STACK_ARG(object,"object");
	HX_STACK_ARG(values,"values");
	HX_STACK_ARG(duration,"duration");
	HX_STACK_ARG(options,"options");
	HX_STACK_LINE(880)
	::com::haxepunk::TweenType type = ::com::haxepunk::TweenType_obj::OneShot_dyn();		HX_STACK_VAR(type,"type");
	Dynamic complete = null();		HX_STACK_VAR(complete,"complete");
	Dynamic ease = null();		HX_STACK_VAR(ease,"ease");
	::com::haxepunk::Tweener tweener = ::com::haxepunk::HXP_obj::tweener;		HX_STACK_VAR(tweener,"tweener");
	HX_STACK_LINE(884)
	if ((::Std_obj::is(object,hx::ClassOf< ::com::haxepunk::Tweener >()))){
		HX_STACK_LINE(884)
		tweener = hx::TCast< com::haxepunk::Tweener >::cast(object);
	}
	HX_STACK_LINE(885)
	if (((options != null()))){
		HX_STACK_LINE(887)
		if ((::Reflect_obj::hasField(options,HX_CSTRING("type")))){
			HX_STACK_LINE(887)
			type = options->__Field(HX_CSTRING("type"),true);
		}
		HX_STACK_LINE(888)
		if ((::Reflect_obj::hasField(options,HX_CSTRING("complete")))){
			HX_STACK_LINE(888)
			complete = options->__Field(HX_CSTRING("complete"),true);
		}
		HX_STACK_LINE(889)
		if ((::Reflect_obj::hasField(options,HX_CSTRING("ease")))){
			HX_STACK_LINE(889)
			ease = options->__Field(HX_CSTRING("ease"),true);
		}
		HX_STACK_LINE(890)
		if ((::Reflect_obj::hasField(options,HX_CSTRING("tweener")))){
			HX_STACK_LINE(890)
			tweener = options->__Field(HX_CSTRING("tweener"),true);
		}
	}
	HX_STACK_LINE(892)
	::com::haxepunk::tweens::misc::MultiVarTween tween = ::com::haxepunk::tweens::misc::MultiVarTween_obj::__new(complete,type);		HX_STACK_VAR(tween,"tween");
	HX_STACK_LINE(893)
	tween->tween(object,values,duration,ease);
	HX_STACK_LINE(894)
	tweener->addTween(tween,null());
	HX_STACK_LINE(895)
	return tween;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(HXP_obj,tween,return )

Array< int > HXP_obj::frames( int from,int to,hx::Null< int >  __o_skip){
int skip = __o_skip.Default(0);
	HX_STACK_PUSH("HXP::frames","com/haxepunk/HXP.hx",905);
	HX_STACK_ARG(from,"from");
	HX_STACK_ARG(to,"to");
	HX_STACK_ARG(skip,"skip");
{
		HX_STACK_LINE(906)
		Array< int > a = Array_obj< int >::__new();		HX_STACK_VAR(a,"a");
		HX_STACK_LINE(907)
		(skip)++;
		HX_STACK_LINE(908)
		if (((from < to))){
			HX_STACK_LINE(909)
			while(((from <= to))){
				HX_STACK_LINE(912)
				a->push(from);
				HX_STACK_LINE(913)
				hx::AddEq(from,skip);
			}
		}
		else{
			HX_STACK_LINE(917)
			while(((from >= to))){
				HX_STACK_LINE(920)
				a->push(from);
				HX_STACK_LINE(921)
				hx::SubEq(from,skip);
			}
		}
		HX_STACK_LINE(924)
		return a;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(HXP_obj,frames,return )

Void HXP_obj::shuffle( Dynamic a){
{
		HX_STACK_PUSH("HXP::shuffle","com/haxepunk/HXP.hx",932);
		HX_STACK_ARG(a,"a");
		HX_STACK_LINE(932)
		if ((::Std_obj::is(a,hx::ClassOf< Array<int> >()))){
			HX_STACK_LINE(935)
			int i = a->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(i,"i");
			int j;		HX_STACK_VAR(j,"j");
			Dynamic t;		HX_STACK_VAR(t,"t");
			HX_STACK_LINE(936)
			while(((--(i) > (int)0))){
				HX_STACK_LINE(938)
				t = a->__GetItem(i);
				struct _Function_3_1{
					inline static int Block( int &i){
						HX_STACK_PUSH("*::closure","com/haxepunk/HXP.hx",939);
						{
							HX_STACK_LINE(939)
							::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(hx::Mod((::com::haxepunk::HXP_obj::_seed * 16807.0),(int)2147483646));
							HX_STACK_LINE(939)
							return ::Std_obj::_int(((Float(::com::haxepunk::HXP_obj::_seed) / Float((int)2147483646)) * ((i + (int)1))));
						}
						return null();
					}
				};
				HX_STACK_LINE(939)
				hx::IndexRef((a).mPtr,i) = a->__GetItem(j = _Function_3_1::Block(i));
				HX_STACK_LINE(940)
				hx::IndexRef((a).mPtr,j) = t;
			}
		}
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,shuffle,(void))

Float HXP_obj::time;

Float HXP_obj::setTime( Float value){
	HX_STACK_PUSH("HXP::setTime","com/haxepunk/HXP.hx",946);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(947)
	::com::haxepunk::HXP_obj::_time = value;
	HX_STACK_LINE(948)
	return ::com::haxepunk::HXP_obj::_time;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(HXP_obj,setTime,return )

bool HXP_obj::gotoIsNull( ){
	HX_STACK_PUSH("HXP::gotoIsNull","com/haxepunk/HXP.hx",951);
	HX_STACK_LINE(951)
	return (::com::haxepunk::HXP_obj::_goto == null());
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HXP_obj,gotoIsNull,return )

::com::haxepunk::World HXP_obj::_world;

::com::haxepunk::World HXP_obj::_goto;

::com::haxepunk::debug::Console HXP_obj::_console;

Float HXP_obj::_time;

Float HXP_obj::_updateTime;

Float HXP_obj::_renderTime;

Float HXP_obj::_gameTime;

Float HXP_obj::_flashTime;

::Hash HXP_obj::_bitmap;

int HXP_obj::_seed;

Float HXP_obj::_volume;

Float HXP_obj::_pan;

::native::media::SoundTransform HXP_obj::_soundTransform;

Float HXP_obj::DEG;

Float HXP_obj::RAD;

::native::display::Stage HXP_obj::stage;

::com::haxepunk::Engine HXP_obj::engine;

::native::geom::Point HXP_obj::point;

::native::geom::Point HXP_obj::point2;

::native::geom::Point HXP_obj::zero;

::native::geom::Rectangle HXP_obj::rect;

::native::geom::Matrix HXP_obj::matrix;

::native::display::Sprite HXP_obj::sprite;

::com::haxepunk::Entity HXP_obj::entity;


HXP_obj::HXP_obj()
{
}

void HXP_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(HXP);
	HX_MARK_END_CLASS();
}

void HXP_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic HXP_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"pan") ) { return inCallProp ? getPan() : pan; }
		if (HX_FIELD_EQ(inName,"log") ) { return log; }
		if (HX_FIELD_EQ(inName,"DEG") ) { return DEG; }
		if (HX_FIELD_EQ(inName,"RAD") ) { return RAD; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"rate") ) { return rate; }
		if (HX_FIELD_EQ(inName,"sign") ) { return sign_dyn(); }
		if (HX_FIELD_EQ(inName,"lerp") ) { return lerp_dyn(); }
		if (HX_FIELD_EQ(inName,"rand") ) { return rand_dyn(); }
		if (HX_FIELD_EQ(inName,"next") ) { return next_dyn(); }
		if (HX_FIELD_EQ(inName,"prev") ) { return prev_dyn(); }
		if (HX_FIELD_EQ(inName,"swap") ) { return swap_dyn(); }
		if (HX_FIELD_EQ(inName,"time") ) { return time; }
		if (HX_FIELD_EQ(inName,"_pan") ) { return _pan; }
		if (HX_FIELD_EQ(inName,"zero") ) { return zero; }
		if (HX_FIELD_EQ(inName,"rect") ) { return rect; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		if (HX_FIELD_EQ(inName,"fixed") ) { return fixed; }
		if (HX_FIELD_EQ(inName,"world") ) { return inCallProp ? getWorld() : world; }
		if (HX_FIELD_EQ(inName,"clear") ) { return clear_dyn(); }
		if (HX_FIELD_EQ(inName,"angle") ) { return angle_dyn(); }
		if (HX_FIELD_EQ(inName,"round") ) { return round_dyn(); }
		if (HX_FIELD_EQ(inName,"clamp") ) { return clamp_dyn(); }
		if (HX_FIELD_EQ(inName,"scale") ) { return scale_dyn(); }
		if (HX_FIELD_EQ(inName,"watch") ) { return watch; }
		if (HX_FIELD_EQ(inName,"tween") ) { return tween_dyn(); }
		if (HX_FIELD_EQ(inName,"_goto") ) { return _goto; }
		if (HX_FIELD_EQ(inName,"_time") ) { return _time; }
		if (HX_FIELD_EQ(inName,"_seed") ) { return _seed; }
		if (HX_FIELD_EQ(inName,"stage") ) { return stage; }
		if (HX_FIELD_EQ(inName,"point") ) { return point; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		if (HX_FIELD_EQ(inName,"screen") ) { return screen; }
		if (HX_FIELD_EQ(inName,"buffer") ) { return buffer; }
		if (HX_FIELD_EQ(inName,"bounds") ) { return bounds; }
		if (HX_FIELD_EQ(inName,"camera") ) { return camera; }
		if (HX_FIELD_EQ(inName,"resize") ) { return resize_dyn(); }
		if (HX_FIELD_EQ(inName,"volume") ) { return inCallProp ? getVolume() : volume; }
		if (HX_FIELD_EQ(inName,"getPan") ) { return getPan_dyn(); }
		if (HX_FIELD_EQ(inName,"setPan") ) { return setPan_dyn(); }
		if (HX_FIELD_EQ(inName,"choose") ) { return choose_dyn(); }
		if (HX_FIELD_EQ(inName,"random") ) { return inCallProp ? getRandom() : random; }
		if (HX_FIELD_EQ(inName,"getRed") ) { return getRed_dyn(); }
		if (HX_FIELD_EQ(inName,"frames") ) { return frames_dyn(); }
		if (HX_FIELD_EQ(inName,"_world") ) { return _world; }
		if (HX_FIELD_EQ(inName,"engine") ) { return engine; }
		if (HX_FIELD_EQ(inName,"point2") ) { return point2; }
		if (HX_FIELD_EQ(inName,"matrix") ) { return matrix; }
		if (HX_FIELD_EQ(inName,"sprite") ) { return sprite; }
		if (HX_FIELD_EQ(inName,"entity") ) { return entity; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"VERSION") ) { return VERSION; }
		if (HX_FIELD_EQ(inName,"elapsed") ) { return elapsed; }
		if (HX_FIELD_EQ(inName,"tweener") ) { return tweener; }
		if (HX_FIELD_EQ(inName,"focused") ) { return focused; }
		if (HX_FIELD_EQ(inName,"angleXY") ) { return angleXY_dyn(); }
		if (HX_FIELD_EQ(inName,"indexOf") ) { return indexOf_dyn(); }
		if (HX_FIELD_EQ(inName,"getBlue") ) { return getBlue_dyn(); }
		if (HX_FIELD_EQ(inName,"console") ) { return inCallProp ? getConsole() : console; }
		if (HX_FIELD_EQ(inName,"shuffle") ) { return shuffle_dyn(); }
		if (HX_FIELD_EQ(inName,"setTime") ) { return setTime_dyn(); }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { return _bitmap; }
		if (HX_FIELD_EQ(inName,"_volume") ) { return _volume; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getWorld") ) { return getWorld_dyn(); }
		if (HX_FIELD_EQ(inName,"setWorld") ) { return setWorld_dyn(); }
		if (HX_FIELD_EQ(inName,"approach") ) { return approach_dyn(); }
		if (HX_FIELD_EQ(inName,"anchorTo") ) { return anchorTo_dyn(); }
		if (HX_FIELD_EQ(inName,"distance") ) { return distance_dyn(); }
		if (HX_FIELD_EQ(inName,"getGreen") ) { return getGreen_dyn(); }
		if (HX_FIELD_EQ(inName,"timeFlag") ) { return timeFlag_dyn(); }
		if (HX_FIELD_EQ(inName,"_console") ) { return _console; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"BASELAYER") ) { return BASELAYER; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { return frameRate; }
		if (HX_FIELD_EQ(inName,"halfWidth") ) { return halfWidth; }
		if (HX_FIELD_EQ(inName,"swapWorld") ) { return swapWorld_dyn(); }
		if (HX_FIELD_EQ(inName,"setCamera") ) { return setCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"getVolume") ) { return getVolume_dyn(); }
		if (HX_FIELD_EQ(inName,"setVolume") ) { return setVolume_dyn(); }
		if (HX_FIELD_EQ(inName,"colorLerp") ) { return colorLerp_dyn(); }
		if (HX_FIELD_EQ(inName,"getRandom") ) { return getRandom_dyn(); }
		if (HX_FIELD_EQ(inName,"getBitmap") ) { return getBitmap_dyn(); }
		if (HX_FIELD_EQ(inName,"_gameTime") ) { return _gameTime; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"blackColor") ) { return blackColor; }
		if (HX_FIELD_EQ(inName,"halfHeight") ) { return halfHeight; }
		if (HX_FIELD_EQ(inName,"scaleClamp") ) { return scaleClamp_dyn(); }
		if (HX_FIELD_EQ(inName,"randomSeed") ) { return randomSeed; }
		if (HX_FIELD_EQ(inName,"getConsole") ) { return getConsole_dyn(); }
		if (HX_FIELD_EQ(inName,"gotoIsNull") ) { return gotoIsNull_dyn(); }
		if (HX_FIELD_EQ(inName,"_flashTime") ) { return _flashTime; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"windowWidth") ) { return windowWidth; }
		if (HX_FIELD_EQ(inName,"defaultFont") ) { return defaultFont; }
		if (HX_FIELD_EQ(inName,"resetCamera") ) { return resetCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"stepTowards") ) { return stepTowards_dyn(); }
		if (HX_FIELD_EQ(inName,"clampInRect") ) { return clampInRect_dyn(); }
		if (HX_FIELD_EQ(inName,"getColorRGB") ) { return getColorRGB_dyn(); }
		if (HX_FIELD_EQ(inName,"getColorHSV") ) { return getColorHSV_dyn(); }
		if (HX_FIELD_EQ(inName,"_updateTime") ) { return _updateTime; }
		if (HX_FIELD_EQ(inName,"_renderTime") ) { return _renderTime; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"windowHeight") ) { return windowHeight; }
		if (HX_FIELD_EQ(inName,"rotateAround") ) { return rotateAround_dyn(); }
		if (HX_FIELD_EQ(inName,"createBitmap") ) { return createBitmap_dyn(); }
		if (HX_FIELD_EQ(inName,"convertColor") ) { return convertColor_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"INT_MAX_VALUE") ) { return INT_MAX_VALUE; }
		if (HX_FIELD_EQ(inName,"distanceRects") ) { return distanceRects_dyn(); }
		if (HX_FIELD_EQ(inName,"setRandomSeed") ) { return setRandomSeed_dyn(); }
		if (HX_FIELD_EQ(inName,"randomizeSeed") ) { return randomizeSeed_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"consoleEnabled") ) { return consoleEnabled_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"distanceSquared") ) { return distanceSquared_dyn(); }
		if (HX_FIELD_EQ(inName,"_soundTransform") ) { return _soundTransform; }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"NUMBER_MAX_VALUE") ) { return NUMBER_MAX_VALUE; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"assignedFrameRate") ) { return assignedFrameRate; }
		if (HX_FIELD_EQ(inName,"distanceRectPoint") ) { return distanceRectPoint_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic HXP_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"pan") ) { if (inCallProp) return setPan(inValue);pan=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"log") ) { log=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"DEG") ) { DEG=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"RAD") ) { RAD=inValue.Cast< Float >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"rate") ) { rate=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"time") ) { if (inCallProp) return setTime(inValue);time=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_pan") ) { _pan=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"zero") ) { zero=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"rect") ) { rect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"fixed") ) { fixed=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"world") ) { if (inCallProp) return setWorld(inValue);world=inValue.Cast< ::com::haxepunk::World >(); return inValue; }
		if (HX_FIELD_EQ(inName,"watch") ) { watch=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_goto") ) { _goto=inValue.Cast< ::com::haxepunk::World >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_time") ) { _time=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_seed") ) { _seed=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"stage") ) { stage=inValue.Cast< ::native::display::Stage >(); return inValue; }
		if (HX_FIELD_EQ(inName,"point") ) { point=inValue.Cast< ::native::geom::Point >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"screen") ) { screen=inValue.Cast< ::com::haxepunk::Screen >(); return inValue; }
		if (HX_FIELD_EQ(inName,"buffer") ) { buffer=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		if (HX_FIELD_EQ(inName,"bounds") ) { bounds=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"camera") ) { camera=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"volume") ) { if (inCallProp) return setVolume(inValue);volume=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"random") ) { random=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_world") ) { _world=inValue.Cast< ::com::haxepunk::World >(); return inValue; }
		if (HX_FIELD_EQ(inName,"engine") ) { engine=inValue.Cast< ::com::haxepunk::Engine >(); return inValue; }
		if (HX_FIELD_EQ(inName,"point2") ) { point2=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"matrix") ) { matrix=inValue.Cast< ::native::geom::Matrix >(); return inValue; }
		if (HX_FIELD_EQ(inName,"sprite") ) { sprite=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"entity") ) { entity=inValue.Cast< ::com::haxepunk::Entity >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"VERSION") ) { VERSION=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"elapsed") ) { elapsed=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"tweener") ) { tweener=inValue.Cast< ::com::haxepunk::Tweener >(); return inValue; }
		if (HX_FIELD_EQ(inName,"focused") ) { focused=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"console") ) { console=inValue.Cast< ::com::haxepunk::debug::Console >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { _bitmap=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_volume") ) { _volume=inValue.Cast< Float >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_console") ) { _console=inValue.Cast< ::com::haxepunk::debug::Console >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"BASELAYER") ) { BASELAYER=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { frameRate=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"halfWidth") ) { halfWidth=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_gameTime") ) { _gameTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"blackColor") ) { blackColor=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"halfHeight") ) { halfHeight=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"randomSeed") ) { if (inCallProp) return setRandomSeed(inValue);randomSeed=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_flashTime") ) { _flashTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"windowWidth") ) { windowWidth=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"defaultFont") ) { defaultFont=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_updateTime") ) { _updateTime=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_renderTime") ) { _renderTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"windowHeight") ) { windowHeight=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"INT_MAX_VALUE") ) { INT_MAX_VALUE=inValue.Cast< int >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"_soundTransform") ) { _soundTransform=inValue.Cast< ::native::media::SoundTransform >(); return inValue; }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"NUMBER_MAX_VALUE") ) { NUMBER_MAX_VALUE=inValue.Cast< Float >(); return inValue; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"assignedFrameRate") ) { assignedFrameRate=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void HXP_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("VERSION"),
	HX_CSTRING("BASELAYER"),
	HX_CSTRING("NUMBER_MAX_VALUE"),
	HX_CSTRING("INT_MAX_VALUE"),
	HX_CSTRING("blackColor"),
	HX_CSTRING("width"),
	HX_CSTRING("height"),
	HX_CSTRING("windowWidth"),
	HX_CSTRING("windowHeight"),
	HX_CSTRING("fixed"),
	HX_CSTRING("frameRate"),
	HX_CSTRING("assignedFrameRate"),
	HX_CSTRING("elapsed"),
	HX_CSTRING("rate"),
	HX_CSTRING("screen"),
	HX_CSTRING("buffer"),
	HX_CSTRING("bounds"),
	HX_CSTRING("defaultFont"),
	HX_CSTRING("camera"),
	HX_CSTRING("tweener"),
	HX_CSTRING("focused"),
	HX_CSTRING("halfWidth"),
	HX_CSTRING("halfHeight"),
	HX_CSTRING("world"),
	HX_CSTRING("getWorld"),
	HX_CSTRING("setWorld"),
	HX_CSTRING("swapWorld"),
	HX_CSTRING("resize"),
	HX_CSTRING("clear"),
	HX_CSTRING("setCamera"),
	HX_CSTRING("resetCamera"),
	HX_CSTRING("volume"),
	HX_CSTRING("getVolume"),
	HX_CSTRING("setVolume"),
	HX_CSTRING("pan"),
	HX_CSTRING("getPan"),
	HX_CSTRING("setPan"),
	HX_CSTRING("choose"),
	HX_CSTRING("sign"),
	HX_CSTRING("approach"),
	HX_CSTRING("lerp"),
	HX_CSTRING("colorLerp"),
	HX_CSTRING("stepTowards"),
	HX_CSTRING("anchorTo"),
	HX_CSTRING("angle"),
	HX_CSTRING("angleXY"),
	HX_CSTRING("rotateAround"),
	HX_CSTRING("round"),
	HX_CSTRING("distance"),
	HX_CSTRING("distanceSquared"),
	HX_CSTRING("distanceRects"),
	HX_CSTRING("distanceRectPoint"),
	HX_CSTRING("clamp"),
	HX_CSTRING("clampInRect"),
	HX_CSTRING("scale"),
	HX_CSTRING("scaleClamp"),
	HX_CSTRING("randomSeed"),
	HX_CSTRING("setRandomSeed"),
	HX_CSTRING("randomizeSeed"),
	HX_CSTRING("random"),
	HX_CSTRING("getRandom"),
	HX_CSTRING("rand"),
	HX_CSTRING("indexOf"),
	HX_CSTRING("next"),
	HX_CSTRING("prev"),
	HX_CSTRING("swap"),
	HX_CSTRING("getColorRGB"),
	HX_CSTRING("getColorHSV"),
	HX_CSTRING("getRed"),
	HX_CSTRING("getGreen"),
	HX_CSTRING("getBlue"),
	HX_CSTRING("getBitmap"),
	HX_CSTRING("createBitmap"),
	HX_CSTRING("convertColor"),
	HX_CSTRING("timeFlag"),
	HX_CSTRING("console"),
	HX_CSTRING("getConsole"),
	HX_CSTRING("consoleEnabled"),
	HX_CSTRING("log"),
	HX_CSTRING("watch"),
	HX_CSTRING("tween"),
	HX_CSTRING("frames"),
	HX_CSTRING("shuffle"),
	HX_CSTRING("time"),
	HX_CSTRING("setTime"),
	HX_CSTRING("gotoIsNull"),
	HX_CSTRING("_world"),
	HX_CSTRING("_goto"),
	HX_CSTRING("_console"),
	HX_CSTRING("_time"),
	HX_CSTRING("_updateTime"),
	HX_CSTRING("_renderTime"),
	HX_CSTRING("_gameTime"),
	HX_CSTRING("_flashTime"),
	HX_CSTRING("_bitmap"),
	HX_CSTRING("_seed"),
	HX_CSTRING("_volume"),
	HX_CSTRING("_pan"),
	HX_CSTRING("_soundTransform"),
	HX_CSTRING("DEG"),
	HX_CSTRING("RAD"),
	HX_CSTRING("stage"),
	HX_CSTRING("engine"),
	HX_CSTRING("point"),
	HX_CSTRING("point2"),
	HX_CSTRING("zero"),
	HX_CSTRING("rect"),
	HX_CSTRING("matrix"),
	HX_CSTRING("sprite"),
	HX_CSTRING("entity"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(HXP_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(HXP_obj::VERSION,"VERSION");
	HX_MARK_MEMBER_NAME(HXP_obj::BASELAYER,"BASELAYER");
	HX_MARK_MEMBER_NAME(HXP_obj::NUMBER_MAX_VALUE,"NUMBER_MAX_VALUE");
	HX_MARK_MEMBER_NAME(HXP_obj::INT_MAX_VALUE,"INT_MAX_VALUE");
	HX_MARK_MEMBER_NAME(HXP_obj::blackColor,"blackColor");
	HX_MARK_MEMBER_NAME(HXP_obj::width,"width");
	HX_MARK_MEMBER_NAME(HXP_obj::height,"height");
	HX_MARK_MEMBER_NAME(HXP_obj::windowWidth,"windowWidth");
	HX_MARK_MEMBER_NAME(HXP_obj::windowHeight,"windowHeight");
	HX_MARK_MEMBER_NAME(HXP_obj::fixed,"fixed");
	HX_MARK_MEMBER_NAME(HXP_obj::frameRate,"frameRate");
	HX_MARK_MEMBER_NAME(HXP_obj::assignedFrameRate,"assignedFrameRate");
	HX_MARK_MEMBER_NAME(HXP_obj::elapsed,"elapsed");
	HX_MARK_MEMBER_NAME(HXP_obj::rate,"rate");
	HX_MARK_MEMBER_NAME(HXP_obj::screen,"screen");
	HX_MARK_MEMBER_NAME(HXP_obj::buffer,"buffer");
	HX_MARK_MEMBER_NAME(HXP_obj::bounds,"bounds");
	HX_MARK_MEMBER_NAME(HXP_obj::defaultFont,"defaultFont");
	HX_MARK_MEMBER_NAME(HXP_obj::camera,"camera");
	HX_MARK_MEMBER_NAME(HXP_obj::tweener,"tweener");
	HX_MARK_MEMBER_NAME(HXP_obj::focused,"focused");
	HX_MARK_MEMBER_NAME(HXP_obj::halfWidth,"halfWidth");
	HX_MARK_MEMBER_NAME(HXP_obj::halfHeight,"halfHeight");
	HX_MARK_MEMBER_NAME(HXP_obj::world,"world");
	HX_MARK_MEMBER_NAME(HXP_obj::volume,"volume");
	HX_MARK_MEMBER_NAME(HXP_obj::pan,"pan");
	HX_MARK_MEMBER_NAME(HXP_obj::randomSeed,"randomSeed");
	HX_MARK_MEMBER_NAME(HXP_obj::random,"random");
	HX_MARK_MEMBER_NAME(HXP_obj::console,"console");
	HX_MARK_MEMBER_NAME(HXP_obj::log,"log");
	HX_MARK_MEMBER_NAME(HXP_obj::watch,"watch");
	HX_MARK_MEMBER_NAME(HXP_obj::time,"time");
	HX_MARK_MEMBER_NAME(HXP_obj::_world,"_world");
	HX_MARK_MEMBER_NAME(HXP_obj::_goto,"_goto");
	HX_MARK_MEMBER_NAME(HXP_obj::_console,"_console");
	HX_MARK_MEMBER_NAME(HXP_obj::_time,"_time");
	HX_MARK_MEMBER_NAME(HXP_obj::_updateTime,"_updateTime");
	HX_MARK_MEMBER_NAME(HXP_obj::_renderTime,"_renderTime");
	HX_MARK_MEMBER_NAME(HXP_obj::_gameTime,"_gameTime");
	HX_MARK_MEMBER_NAME(HXP_obj::_flashTime,"_flashTime");
	HX_MARK_MEMBER_NAME(HXP_obj::_bitmap,"_bitmap");
	HX_MARK_MEMBER_NAME(HXP_obj::_seed,"_seed");
	HX_MARK_MEMBER_NAME(HXP_obj::_volume,"_volume");
	HX_MARK_MEMBER_NAME(HXP_obj::_pan,"_pan");
	HX_MARK_MEMBER_NAME(HXP_obj::_soundTransform,"_soundTransform");
	HX_MARK_MEMBER_NAME(HXP_obj::DEG,"DEG");
	HX_MARK_MEMBER_NAME(HXP_obj::RAD,"RAD");
	HX_MARK_MEMBER_NAME(HXP_obj::stage,"stage");
	HX_MARK_MEMBER_NAME(HXP_obj::engine,"engine");
	HX_MARK_MEMBER_NAME(HXP_obj::point,"point");
	HX_MARK_MEMBER_NAME(HXP_obj::point2,"point2");
	HX_MARK_MEMBER_NAME(HXP_obj::zero,"zero");
	HX_MARK_MEMBER_NAME(HXP_obj::rect,"rect");
	HX_MARK_MEMBER_NAME(HXP_obj::matrix,"matrix");
	HX_MARK_MEMBER_NAME(HXP_obj::sprite,"sprite");
	HX_MARK_MEMBER_NAME(HXP_obj::entity,"entity");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(HXP_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(HXP_obj::VERSION,"VERSION");
	HX_VISIT_MEMBER_NAME(HXP_obj::BASELAYER,"BASELAYER");
	HX_VISIT_MEMBER_NAME(HXP_obj::NUMBER_MAX_VALUE,"NUMBER_MAX_VALUE");
	HX_VISIT_MEMBER_NAME(HXP_obj::INT_MAX_VALUE,"INT_MAX_VALUE");
	HX_VISIT_MEMBER_NAME(HXP_obj::blackColor,"blackColor");
	HX_VISIT_MEMBER_NAME(HXP_obj::width,"width");
	HX_VISIT_MEMBER_NAME(HXP_obj::height,"height");
	HX_VISIT_MEMBER_NAME(HXP_obj::windowWidth,"windowWidth");
	HX_VISIT_MEMBER_NAME(HXP_obj::windowHeight,"windowHeight");
	HX_VISIT_MEMBER_NAME(HXP_obj::fixed,"fixed");
	HX_VISIT_MEMBER_NAME(HXP_obj::frameRate,"frameRate");
	HX_VISIT_MEMBER_NAME(HXP_obj::assignedFrameRate,"assignedFrameRate");
	HX_VISIT_MEMBER_NAME(HXP_obj::elapsed,"elapsed");
	HX_VISIT_MEMBER_NAME(HXP_obj::rate,"rate");
	HX_VISIT_MEMBER_NAME(HXP_obj::screen,"screen");
	HX_VISIT_MEMBER_NAME(HXP_obj::buffer,"buffer");
	HX_VISIT_MEMBER_NAME(HXP_obj::bounds,"bounds");
	HX_VISIT_MEMBER_NAME(HXP_obj::defaultFont,"defaultFont");
	HX_VISIT_MEMBER_NAME(HXP_obj::camera,"camera");
	HX_VISIT_MEMBER_NAME(HXP_obj::tweener,"tweener");
	HX_VISIT_MEMBER_NAME(HXP_obj::focused,"focused");
	HX_VISIT_MEMBER_NAME(HXP_obj::halfWidth,"halfWidth");
	HX_VISIT_MEMBER_NAME(HXP_obj::halfHeight,"halfHeight");
	HX_VISIT_MEMBER_NAME(HXP_obj::world,"world");
	HX_VISIT_MEMBER_NAME(HXP_obj::volume,"volume");
	HX_VISIT_MEMBER_NAME(HXP_obj::pan,"pan");
	HX_VISIT_MEMBER_NAME(HXP_obj::randomSeed,"randomSeed");
	HX_VISIT_MEMBER_NAME(HXP_obj::random,"random");
	HX_VISIT_MEMBER_NAME(HXP_obj::console,"console");
	HX_VISIT_MEMBER_NAME(HXP_obj::log,"log");
	HX_VISIT_MEMBER_NAME(HXP_obj::watch,"watch");
	HX_VISIT_MEMBER_NAME(HXP_obj::time,"time");
	HX_VISIT_MEMBER_NAME(HXP_obj::_world,"_world");
	HX_VISIT_MEMBER_NAME(HXP_obj::_goto,"_goto");
	HX_VISIT_MEMBER_NAME(HXP_obj::_console,"_console");
	HX_VISIT_MEMBER_NAME(HXP_obj::_time,"_time");
	HX_VISIT_MEMBER_NAME(HXP_obj::_updateTime,"_updateTime");
	HX_VISIT_MEMBER_NAME(HXP_obj::_renderTime,"_renderTime");
	HX_VISIT_MEMBER_NAME(HXP_obj::_gameTime,"_gameTime");
	HX_VISIT_MEMBER_NAME(HXP_obj::_flashTime,"_flashTime");
	HX_VISIT_MEMBER_NAME(HXP_obj::_bitmap,"_bitmap");
	HX_VISIT_MEMBER_NAME(HXP_obj::_seed,"_seed");
	HX_VISIT_MEMBER_NAME(HXP_obj::_volume,"_volume");
	HX_VISIT_MEMBER_NAME(HXP_obj::_pan,"_pan");
	HX_VISIT_MEMBER_NAME(HXP_obj::_soundTransform,"_soundTransform");
	HX_VISIT_MEMBER_NAME(HXP_obj::DEG,"DEG");
	HX_VISIT_MEMBER_NAME(HXP_obj::RAD,"RAD");
	HX_VISIT_MEMBER_NAME(HXP_obj::stage,"stage");
	HX_VISIT_MEMBER_NAME(HXP_obj::engine,"engine");
	HX_VISIT_MEMBER_NAME(HXP_obj::point,"point");
	HX_VISIT_MEMBER_NAME(HXP_obj::point2,"point2");
	HX_VISIT_MEMBER_NAME(HXP_obj::zero,"zero");
	HX_VISIT_MEMBER_NAME(HXP_obj::rect,"rect");
	HX_VISIT_MEMBER_NAME(HXP_obj::matrix,"matrix");
	HX_VISIT_MEMBER_NAME(HXP_obj::sprite,"sprite");
	HX_VISIT_MEMBER_NAME(HXP_obj::entity,"entity");
};

Class HXP_obj::__mClass;

void HXP_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.HXP"), hx::TCanCast< HXP_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void HXP_obj::__boot()
{
	VERSION= HX_CSTRING("2.0.3");
	BASELAYER= (int)10;
	NUMBER_MAX_VALUE= ((int)179 * ::Math_obj::pow((int)10,(int)306));
	INT_MAX_VALUE= (int)2147483646;
	blackColor= (int)0;
	frameRate= (int)0;
	rate= (int)1;
	defaultFont= HX_CSTRING("font/04B_03__.ttf");
	camera= ::native::geom::Point_obj::__new(null(),null());
	tweener= ::com::haxepunk::Tweener_obj::__new();
	focused= false;

HX_BEGIN_LOCAL_FUNC_S0(hx::LocalFunc,_Function_0_1)
Void run(Dynamic data){
	HX_STACK_PUSH("*::_Function_0_1","com/haxepunk/HXP.hx",845);
	HX_STACK_ARG(data,"data");
	{
		HX_STACK_LINE(845)
		if (((::com::haxepunk::HXP_obj::_console != null()))){
			HX_STACK_LINE(847)
			::com::haxepunk::HXP_obj::_console->log(data);
		}
	}
	return null();
}
HX_END_LOCAL_FUNC1((void))

	log= ::Reflect_obj::makeVarArgs( Dynamic(new _Function_0_1()));

HX_BEGIN_LOCAL_FUNC_S0(hx::LocalFunc,_Function_0_2)
Void run(Dynamic properties){
	HX_STACK_PUSH("*::_Function_0_2","com/haxepunk/HXP.hx",857);
	HX_STACK_ARG(properties,"properties");
	{
		HX_STACK_LINE(857)
		if (((::com::haxepunk::HXP_obj::_console != null()))){
			HX_STACK_LINE(859)
			::com::haxepunk::HXP_obj::_console->watch(properties);
		}
	}
	return null();
}
HX_END_LOCAL_FUNC1((void))

	watch= ::Reflect_obj::makeVarArgs( Dynamic(new _Function_0_2()));
	_world= ::com::haxepunk::World_obj::__new();
	_bitmap= ::Hash_obj::__new();
	_seed= (int)0;
	_volume= (int)1;
	_pan= (int)0;
	_soundTransform= ::native::media::SoundTransform_obj::__new(null(),null());
	DEG= (Float((int)-180) / Float(::Math_obj::PI));
	RAD= (Float(::Math_obj::PI) / Float((int)-180));
	point= ::native::geom::Point_obj::__new(null(),null());
	point2= ::native::geom::Point_obj::__new(null(),null());
	zero= ::native::geom::Point_obj::__new(null(),null());
	rect= ::native::geom::Rectangle_obj::__new(null(),null(),null(),null());
	matrix= ::native::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());
	sprite= ::native::display::Sprite_obj::__new();
}

} // end namespace com
} // end namespace haxepunk
