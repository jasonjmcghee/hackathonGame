#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_Engine
#include <com/haxepunk/Engine.h>
#endif
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_Screen
#include <com/haxepunk/Screen.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Image
#include <com/haxepunk/graphics/Image.h>
#endif
#ifndef INCLUDED_native_display_Bitmap
#include <native/display/Bitmap.h>
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
#ifndef INCLUDED_native_display_PixelSnapping
#include <native/display/PixelSnapping.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_native_filters_BitmapFilter
#include <native/filters/BitmapFilter.h>
#endif
#ifndef INCLUDED_native_geom_Matrix
#include <native/geom/Matrix.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
#ifndef INCLUDED_native_geom_Transform
#include <native/geom/Transform.h>
#endif
namespace com{
namespace haxepunk{

Void Screen_obj::__construct()
{
HX_STACK_PUSH("Screen::new","com/haxepunk/Screen.hx",21);
{
	HX_STACK_LINE(22)
	this->init();
	HX_STACK_LINE(25)
	::com::haxepunk::HXP_obj::engine->addChild(this->_sprite);
}
;
	return null();
}

Screen_obj::~Screen_obj() { }

Dynamic Screen_obj::__CreateEmpty() { return  new Screen_obj; }
hx::ObjectPtr< Screen_obj > Screen_obj::__new()
{  hx::ObjectPtr< Screen_obj > result = new Screen_obj();
	result->__construct();
	return result;}

Dynamic Screen_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Screen_obj > result = new Screen_obj();
	result->__construct();
	return result;}

::com::haxepunk::graphics::Image Screen_obj::capture( ){
	HX_STACK_PUSH("Screen::capture","com/haxepunk/Screen.hx",283);
	HX_STACK_THIS(this);
	HX_STACK_LINE(283)
	return ::com::haxepunk::graphics::Image_obj::__new(this->_bitmap->__get(this->_current)->bitmapData->clone(),null(),null());
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,capture,return )

int Screen_obj::getMouseY( ){
	HX_STACK_PUSH("Screen::getMouseY","com/haxepunk/Screen.hx",276);
	HX_STACK_THIS(this);
	HX_STACK_LINE(276)
	return ::Std_obj::_int(this->_sprite->get_mouseY());
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getMouseY,return )

int Screen_obj::getMouseX( ){
	HX_STACK_PUSH("Screen::getMouseX","com/haxepunk/Screen.hx",270);
	HX_STACK_THIS(this);
	HX_STACK_LINE(270)
	return ::Std_obj::_int(this->_sprite->get_mouseX());
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getMouseX,return )

bool Screen_obj::setSmoothing( bool value){
	HX_STACK_PUSH("Screen::setSmoothing","com/haxepunk/Screen.hx",254);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(254)
	this->_bitmap->__get((int)0)->set_smoothing(this->_bitmap->__get((int)1)->set_smoothing(value));
	HX_STACK_LINE(254)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setSmoothing,return )

bool Screen_obj::getSmoothing( ){
	HX_STACK_PUSH("Screen::getSmoothing","com/haxepunk/Screen.hx",253);
	HX_STACK_THIS(this);
	HX_STACK_LINE(253)
	return this->_bitmap->__get((int)0)->smoothing;
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getSmoothing,return )

Float Screen_obj::setAngle( Float value){
	HX_STACK_PUSH("Screen::setAngle","com/haxepunk/Screen.hx",242);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(243)
	if (((this->_angle == (value * ((Float(::Math_obj::PI) / Float((int)-180))))))){
		HX_STACK_LINE(243)
		return value;
	}
	HX_STACK_LINE(244)
	this->_angle = (value * ((Float(::Math_obj::PI) / Float((int)-180))));
	HX_STACK_LINE(245)
	this->update();
	HX_STACK_LINE(246)
	return this->_angle;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setAngle,return )

Float Screen_obj::getAngle( ){
	HX_STACK_PUSH("Screen::getAngle","com/haxepunk/Screen.hx",240);
	HX_STACK_THIS(this);
	HX_STACK_LINE(240)
	return (this->_angle * ((Float((int)-180) / Float(::Math_obj::PI))));
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getAngle,return )

Float Screen_obj::getFullScaleY( ){
	HX_STACK_PUSH("Screen::getFullScaleY","com/haxepunk/Screen.hx",234);
	HX_STACK_THIS(this);
	HX_STACK_LINE(234)
	return (this->scaleY * this->scale);
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getFullScaleY,return )

Float Screen_obj::getFullScaleX( ){
	HX_STACK_PUSH("Screen::getFullScaleX","com/haxepunk/Screen.hx",228);
	HX_STACK_THIS(this);
	HX_STACK_LINE(228)
	return (this->scaleX * this->scale);
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getFullScaleX,return )

Float Screen_obj::setScale( Float value){
	HX_STACK_PUSH("Screen::setScale","com/haxepunk/Screen.hx",217);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(218)
	if (((this->scale == value))){
		HX_STACK_LINE(218)
		return value;
	}
	HX_STACK_LINE(219)
	this->scale = value;
	HX_STACK_LINE(220)
	this->update();
	HX_STACK_LINE(221)
	return this->scale;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setScale,return )

Float Screen_obj::setScaleY( Float value){
	HX_STACK_PUSH("Screen::setScaleY","com/haxepunk/Screen.hx",204);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(205)
	if (((this->scaleY == value))){
		HX_STACK_LINE(205)
		return value;
	}
	HX_STACK_LINE(206)
	this->scaleY = value;
	HX_STACK_LINE(207)
	this->update();
	HX_STACK_LINE(208)
	return this->scaleY;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setScaleY,return )

Float Screen_obj::setScaleX( Float value){
	HX_STACK_PUSH("Screen::setScaleX","com/haxepunk/Screen.hx",192);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(193)
	if (((this->scaleX == value))){
		HX_STACK_LINE(193)
		return value;
	}
	HX_STACK_LINE(194)
	this->scaleX = value;
	HX_STACK_LINE(195)
	this->update();
	HX_STACK_LINE(196)
	return this->scaleX;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setScaleX,return )

int Screen_obj::setOriginY( int value){
	HX_STACK_PUSH("Screen::setOriginY","com/haxepunk/Screen.hx",180);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(181)
	if (((this->originY == value))){
		HX_STACK_LINE(181)
		return value;
	}
	HX_STACK_LINE(182)
	this->originY = value;
	HX_STACK_LINE(183)
	this->update();
	HX_STACK_LINE(184)
	return this->originY;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setOriginY,return )

int Screen_obj::setOriginX( int value){
	HX_STACK_PUSH("Screen::setOriginX","com/haxepunk/Screen.hx",168);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(169)
	if (((this->originX == value))){
		HX_STACK_LINE(169)
		return value;
	}
	HX_STACK_LINE(170)
	this->originX = value;
	HX_STACK_LINE(171)
	this->update();
	HX_STACK_LINE(172)
	return this->originX;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setOriginX,return )

int Screen_obj::setY( int value){
	HX_STACK_PUSH("Screen::setY","com/haxepunk/Screen.hx",156);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(157)
	if (((this->y == value))){
		HX_STACK_LINE(157)
		return value;
	}
	HX_STACK_LINE(158)
	this->y = value;
	HX_STACK_LINE(159)
	this->update();
	HX_STACK_LINE(160)
	return this->y;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setY,return )

int Screen_obj::setX( int value){
	HX_STACK_PUSH("Screen::setX","com/haxepunk/Screen.hx",144);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(145)
	if (((this->x == value))){
		HX_STACK_LINE(145)
		return value;
	}
	HX_STACK_LINE(146)
	this->x = value;
	HX_STACK_LINE(147)
	this->update();
	HX_STACK_LINE(148)
	return this->x;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setX,return )

int Screen_obj::setColor( int value){
	HX_STACK_PUSH("Screen::setColor","com/haxepunk/Screen.hx",130);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(130)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,setColor,return )

int Screen_obj::getColor( ){
	HX_STACK_PUSH("Screen::getColor","com/haxepunk/Screen.hx",128);
	HX_STACK_THIS(this);
	HX_STACK_LINE(128)
	return this->_color;
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,getColor,return )

Void Screen_obj::update( ){
{
		HX_STACK_PUSH("Screen::update","com/haxepunk/Screen.hx",111);
		HX_STACK_THIS(this);
		HX_STACK_LINE(112)
		if (((this->_matrix == null()))){
			HX_STACK_LINE(112)
			return null();
		}
		HX_STACK_LINE(113)
		this->_matrix->b = this->_matrix->c = (int)0;
		HX_STACK_LINE(114)
		this->_matrix->a = this->getFullScaleX();
		HX_STACK_LINE(115)
		this->_matrix->d = this->getFullScaleY();
		HX_STACK_LINE(116)
		this->_matrix->tx = (-(this->originX) * this->_matrix->a);
		HX_STACK_LINE(117)
		this->_matrix->ty = (-(this->originY) * this->_matrix->d);
		HX_STACK_LINE(118)
		if (((this->_angle != (int)0))){
			HX_STACK_LINE(118)
			this->_matrix->rotate(this->_angle);
		}
		HX_STACK_LINE(119)
		hx::AddEq(this->_matrix->tx,((this->originX * this->getFullScaleX()) + this->x));
		HX_STACK_LINE(120)
		hx::AddEq(this->_matrix->ty,((this->originY * this->getFullScaleY()) + this->y));
		HX_STACK_LINE(121)
		this->_sprite->get_transform()->set_matrix(this->_matrix);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,update,(void))

Void Screen_obj::redraw( ){
{
		HX_STACK_PUSH("Screen::redraw","com/haxepunk/Screen.hx",103);
		HX_STACK_THIS(this);
		HX_STACK_LINE(105)
		this->_bitmap->__get(this->_current)->set_visible(true);
		HX_STACK_LINE(106)
		this->_bitmap->__get(((int)1 - this->_current))->set_visible(false);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,redraw,(void))

Void Screen_obj::refresh( ){
{
		HX_STACK_PUSH("Screen::refresh","com/haxepunk/Screen.hx",90);
		HX_STACK_THIS(this);
		HX_STACK_LINE(90)
		::com::haxepunk::HXP_obj::buffer->fillRect(::com::haxepunk::HXP_obj::bounds,this->_color);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,refresh,(void))

Void Screen_obj::addFilter( Array< ::native::filters::BitmapFilter > filter){
{
		HX_STACK_PUSH("Screen::addFilter","com/haxepunk/Screen.hx",82);
		HX_STACK_THIS(this);
		HX_STACK_ARG(filter,"filter");
		HX_STACK_LINE(82)
		this->_sprite->set_filters(filter);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,addFilter,(void))

Void Screen_obj::swap( ){
{
		HX_STACK_PUSH("Screen::swap","com/haxepunk/Screen.hx",76);
		HX_STACK_THIS(this);
		HX_STACK_LINE(77)
		this->_current = ((int)1 - this->_current);
		HX_STACK_LINE(78)
		::com::haxepunk::HXP_obj::buffer = this->_bitmap->__get(this->_current)->bitmapData;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,swap,(void))

Void Screen_obj::resize( ){
{
		HX_STACK_PUSH("Screen::resize","com/haxepunk/Screen.hx",55);
		HX_STACK_THIS(this);
		HX_STACK_LINE(56)
		{
			HX_STACK_LINE(56)
			::native::display::Bitmap bd = this->_bitmap->__get((int)0);		HX_STACK_VAR(bd,"bd");
			HX_STACK_LINE(56)
			if (((bd != null()))){
				HX_STACK_LINE(56)
				this->_sprite->removeChild(bd);
				HX_STACK_LINE(56)
				bd->bitmapData->dispose();
			}
		}
		HX_STACK_LINE(57)
		{
			HX_STACK_LINE(57)
			::native::display::Bitmap bd = this->_bitmap->__get((int)1);		HX_STACK_VAR(bd,"bd");
			HX_STACK_LINE(57)
			if (((bd != null()))){
				HX_STACK_LINE(57)
				this->_sprite->removeChild(bd);
				HX_STACK_LINE(57)
				bd->bitmapData->dispose();
			}
		}
		HX_STACK_LINE(59)
		this->width = ::com::haxepunk::HXP_obj::width;
		HX_STACK_LINE(60)
		this->height = ::com::haxepunk::HXP_obj::height;
		HX_STACK_LINE(62)
		this->_bitmap[(int)0] = ::native::display::Bitmap_obj::__new(::com::haxepunk::HXP_obj::createBitmap(this->width,this->height,true,null()),::native::display::PixelSnapping_obj::NEVER_dyn(),null());
		HX_STACK_LINE(63)
		this->_bitmap[(int)1] = ::native::display::Bitmap_obj::__new(::com::haxepunk::HXP_obj::createBitmap(this->width,this->height,true,null()),::native::display::PixelSnapping_obj::NEVER_dyn(),null());
		HX_STACK_LINE(65)
		this->_sprite->addChild(this->_bitmap->__get((int)0))->set_visible(true);
		HX_STACK_LINE(66)
		this->_sprite->addChild(this->_bitmap->__get((int)1))->set_visible(false);
		HX_STACK_LINE(67)
		::com::haxepunk::HXP_obj::buffer = this->_bitmap->__get((int)0)->bitmapData;
		HX_STACK_LINE(69)
		this->_current = (int)0;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,resize,(void))

Void Screen_obj::disposeBitmap( ::native::display::Bitmap bd){
{
		HX_STACK_PUSH("Screen::disposeBitmap","com/haxepunk/Screen.hx",41);
		HX_STACK_THIS(this);
		HX_STACK_ARG(bd,"bd");
		HX_STACK_LINE(41)
		if (((bd != null()))){
			HX_STACK_LINE(44)
			this->_sprite->removeChild(bd);
			HX_STACK_LINE(45)
			bd->bitmapData->dispose();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Screen_obj,disposeBitmap,(void))

Void Screen_obj::init( ){
{
		HX_STACK_PUSH("Screen::init","com/haxepunk/Screen.hx",29);
		HX_STACK_THIS(this);
		HX_STACK_LINE(30)
		this->_sprite = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(31)
		this->_bitmap = Array_obj< ::native::display::Bitmap >::__new();
		HX_STACK_LINE(32)
		this->setX(this->setY(this->setOriginX(this->setOriginY((int)0))));
		HX_STACK_LINE(33)
		this->_angle = this->_current = (int)0;
		HX_STACK_LINE(34)
		this->setScale(this->setScaleX(this->setScaleY((int)1)));
		HX_STACK_LINE(35)
		this->_color = (int)0;
		HX_STACK_LINE(36)
		this->_matrix = ::native::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());
		HX_STACK_LINE(37)
		this->update();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Screen_obj,init,(void))


Screen_obj::Screen_obj()
{
}

void Screen_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Screen);
	HX_MARK_MEMBER_NAME(_color,"_color");
	HX_MARK_MEMBER_NAME(_angle,"_angle");
	HX_MARK_MEMBER_NAME(_matrix,"_matrix");
	HX_MARK_MEMBER_NAME(_current,"_current");
	HX_MARK_MEMBER_NAME(_bitmap,"_bitmap");
	HX_MARK_MEMBER_NAME(_sprite,"_sprite");
	HX_MARK_MEMBER_NAME(mouseY,"mouseY");
	HX_MARK_MEMBER_NAME(mouseX,"mouseX");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(smoothing,"smoothing");
	HX_MARK_MEMBER_NAME(angle,"angle");
	HX_MARK_MEMBER_NAME(fullScaleY,"fullScaleY");
	HX_MARK_MEMBER_NAME(fullScaleX,"fullScaleX");
	HX_MARK_MEMBER_NAME(scale,"scale");
	HX_MARK_MEMBER_NAME(scaleY,"scaleY");
	HX_MARK_MEMBER_NAME(scaleX,"scaleX");
	HX_MARK_MEMBER_NAME(originY,"originY");
	HX_MARK_MEMBER_NAME(originX,"originX");
	HX_MARK_MEMBER_NAME(y,"y");
	HX_MARK_MEMBER_NAME(x,"x");
	HX_MARK_MEMBER_NAME(color,"color");
	HX_MARK_END_CLASS();
}

void Screen_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_color,"_color");
	HX_VISIT_MEMBER_NAME(_angle,"_angle");
	HX_VISIT_MEMBER_NAME(_matrix,"_matrix");
	HX_VISIT_MEMBER_NAME(_current,"_current");
	HX_VISIT_MEMBER_NAME(_bitmap,"_bitmap");
	HX_VISIT_MEMBER_NAME(_sprite,"_sprite");
	HX_VISIT_MEMBER_NAME(mouseY,"mouseY");
	HX_VISIT_MEMBER_NAME(mouseX,"mouseX");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(smoothing,"smoothing");
	HX_VISIT_MEMBER_NAME(angle,"angle");
	HX_VISIT_MEMBER_NAME(fullScaleY,"fullScaleY");
	HX_VISIT_MEMBER_NAME(fullScaleX,"fullScaleX");
	HX_VISIT_MEMBER_NAME(scale,"scale");
	HX_VISIT_MEMBER_NAME(scaleY,"scaleY");
	HX_VISIT_MEMBER_NAME(scaleX,"scaleX");
	HX_VISIT_MEMBER_NAME(originY,"originY");
	HX_VISIT_MEMBER_NAME(originX,"originX");
	HX_VISIT_MEMBER_NAME(y,"y");
	HX_VISIT_MEMBER_NAME(x,"x");
	HX_VISIT_MEMBER_NAME(color,"color");
}

Dynamic Screen_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { return y; }
		if (HX_FIELD_EQ(inName,"x") ) { return x; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"setY") ) { return setY_dyn(); }
		if (HX_FIELD_EQ(inName,"setX") ) { return setX_dyn(); }
		if (HX_FIELD_EQ(inName,"swap") ) { return swap_dyn(); }
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		if (HX_FIELD_EQ(inName,"angle") ) { return inCallProp ? getAngle() : angle; }
		if (HX_FIELD_EQ(inName,"scale") ) { return scale; }
		if (HX_FIELD_EQ(inName,"color") ) { return inCallProp ? getColor() : color; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_color") ) { return _color; }
		if (HX_FIELD_EQ(inName,"_angle") ) { return _angle; }
		if (HX_FIELD_EQ(inName,"mouseY") ) { return inCallProp ? getMouseY() : mouseY; }
		if (HX_FIELD_EQ(inName,"mouseX") ) { return inCallProp ? getMouseX() : mouseX; }
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		if (HX_FIELD_EQ(inName,"scaleY") ) { return scaleY; }
		if (HX_FIELD_EQ(inName,"scaleX") ) { return scaleX; }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"redraw") ) { return redraw_dyn(); }
		if (HX_FIELD_EQ(inName,"resize") ) { return resize_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { return _matrix; }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { return _bitmap; }
		if (HX_FIELD_EQ(inName,"_sprite") ) { return _sprite; }
		if (HX_FIELD_EQ(inName,"capture") ) { return capture_dyn(); }
		if (HX_FIELD_EQ(inName,"originY") ) { return originY; }
		if (HX_FIELD_EQ(inName,"originX") ) { return originX; }
		if (HX_FIELD_EQ(inName,"refresh") ) { return refresh_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_current") ) { return _current; }
		if (HX_FIELD_EQ(inName,"setAngle") ) { return setAngle_dyn(); }
		if (HX_FIELD_EQ(inName,"getAngle") ) { return getAngle_dyn(); }
		if (HX_FIELD_EQ(inName,"setScale") ) { return setScale_dyn(); }
		if (HX_FIELD_EQ(inName,"setColor") ) { return setColor_dyn(); }
		if (HX_FIELD_EQ(inName,"getColor") ) { return getColor_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getMouseY") ) { return getMouseY_dyn(); }
		if (HX_FIELD_EQ(inName,"getMouseX") ) { return getMouseX_dyn(); }
		if (HX_FIELD_EQ(inName,"smoothing") ) { return inCallProp ? getSmoothing() : smoothing; }
		if (HX_FIELD_EQ(inName,"setScaleY") ) { return setScaleY_dyn(); }
		if (HX_FIELD_EQ(inName,"setScaleX") ) { return setScaleX_dyn(); }
		if (HX_FIELD_EQ(inName,"addFilter") ) { return addFilter_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"fullScaleY") ) { return inCallProp ? getFullScaleY() : fullScaleY; }
		if (HX_FIELD_EQ(inName,"fullScaleX") ) { return inCallProp ? getFullScaleX() : fullScaleX; }
		if (HX_FIELD_EQ(inName,"setOriginY") ) { return setOriginY_dyn(); }
		if (HX_FIELD_EQ(inName,"setOriginX") ) { return setOriginX_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"setSmoothing") ) { return setSmoothing_dyn(); }
		if (HX_FIELD_EQ(inName,"getSmoothing") ) { return getSmoothing_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getFullScaleY") ) { return getFullScaleY_dyn(); }
		if (HX_FIELD_EQ(inName,"getFullScaleX") ) { return getFullScaleX_dyn(); }
		if (HX_FIELD_EQ(inName,"disposeBitmap") ) { return disposeBitmap_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Screen_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { if (inCallProp) return setY(inValue);y=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"x") ) { if (inCallProp) return setX(inValue);x=inValue.Cast< int >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"angle") ) { if (inCallProp) return setAngle(inValue);angle=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scale") ) { if (inCallProp) return setScale(inValue);scale=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"color") ) { if (inCallProp) return setColor(inValue);color=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_color") ) { _color=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_angle") ) { _angle=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mouseY") ) { mouseY=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mouseX") ) { mouseX=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaleY") ) { if (inCallProp) return setScaleY(inValue);scaleY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaleX") ) { if (inCallProp) return setScaleX(inValue);scaleX=inValue.Cast< Float >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { _matrix=inValue.Cast< ::native::geom::Matrix >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { _bitmap=inValue.Cast< Array< ::native::display::Bitmap > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_sprite") ) { _sprite=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originY") ) { if (inCallProp) return setOriginY(inValue);originY=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originX") ) { if (inCallProp) return setOriginX(inValue);originX=inValue.Cast< int >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_current") ) { _current=inValue.Cast< int >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"smoothing") ) { if (inCallProp) return setSmoothing(inValue);smoothing=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"fullScaleY") ) { fullScaleY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"fullScaleX") ) { fullScaleX=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Screen_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_color"));
	outFields->push(HX_CSTRING("_angle"));
	outFields->push(HX_CSTRING("_matrix"));
	outFields->push(HX_CSTRING("_current"));
	outFields->push(HX_CSTRING("_bitmap"));
	outFields->push(HX_CSTRING("_sprite"));
	outFields->push(HX_CSTRING("mouseY"));
	outFields->push(HX_CSTRING("mouseX"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("smoothing"));
	outFields->push(HX_CSTRING("angle"));
	outFields->push(HX_CSTRING("fullScaleY"));
	outFields->push(HX_CSTRING("fullScaleX"));
	outFields->push(HX_CSTRING("scale"));
	outFields->push(HX_CSTRING("scaleY"));
	outFields->push(HX_CSTRING("scaleX"));
	outFields->push(HX_CSTRING("originY"));
	outFields->push(HX_CSTRING("originX"));
	outFields->push(HX_CSTRING("y"));
	outFields->push(HX_CSTRING("x"));
	outFields->push(HX_CSTRING("color"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_color"),
	HX_CSTRING("_angle"),
	HX_CSTRING("_matrix"),
	HX_CSTRING("_current"),
	HX_CSTRING("_bitmap"),
	HX_CSTRING("_sprite"),
	HX_CSTRING("capture"),
	HX_CSTRING("getMouseY"),
	HX_CSTRING("mouseY"),
	HX_CSTRING("getMouseX"),
	HX_CSTRING("mouseX"),
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	HX_CSTRING("setSmoothing"),
	HX_CSTRING("getSmoothing"),
	HX_CSTRING("smoothing"),
	HX_CSTRING("setAngle"),
	HX_CSTRING("getAngle"),
	HX_CSTRING("angle"),
	HX_CSTRING("getFullScaleY"),
	HX_CSTRING("fullScaleY"),
	HX_CSTRING("getFullScaleX"),
	HX_CSTRING("fullScaleX"),
	HX_CSTRING("setScale"),
	HX_CSTRING("scale"),
	HX_CSTRING("setScaleY"),
	HX_CSTRING("scaleY"),
	HX_CSTRING("setScaleX"),
	HX_CSTRING("scaleX"),
	HX_CSTRING("setOriginY"),
	HX_CSTRING("originY"),
	HX_CSTRING("setOriginX"),
	HX_CSTRING("originX"),
	HX_CSTRING("setY"),
	HX_CSTRING("y"),
	HX_CSTRING("setX"),
	HX_CSTRING("x"),
	HX_CSTRING("setColor"),
	HX_CSTRING("getColor"),
	HX_CSTRING("color"),
	HX_CSTRING("update"),
	HX_CSTRING("redraw"),
	HX_CSTRING("refresh"),
	HX_CSTRING("addFilter"),
	HX_CSTRING("swap"),
	HX_CSTRING("resize"),
	HX_CSTRING("disposeBitmap"),
	HX_CSTRING("init"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Screen_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Screen_obj::__mClass,"__mClass");
};

Class Screen_obj::__mClass;

void Screen_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.Screen"), hx::TCanCast< Screen_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Screen_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
