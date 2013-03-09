#include <hxcpp.h>

#ifndef INCLUDED_Hash
#include <Hash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Type
#include <Type.h>
#endif
#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
#endif
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_Mask
#include <com/haxepunk/Mask.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_World
#include <com/haxepunk/World.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Graphiclist
#include <com/haxepunk/graphics/Graphiclist.h>
#endif
#ifndef INCLUDED_native_display_BitmapData
#include <native/display/BitmapData.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
namespace com{
namespace haxepunk{

Void Entity_obj::__construct(hx::Null< Float >  __o_x,hx::Null< Float >  __o_y,::com::haxepunk::Graphic graphic,::com::haxepunk::Mask mask)
{
HX_STACK_PUSH("Entity::new","com/haxepunk/Entity.hx",87);
Float x = __o_x.Default(0);
Float y = __o_y.Default(0);
{
	HX_STACK_LINE(88)
	super::__construct();
	HX_STACK_LINE(89)
	this->visible = true;
	HX_STACK_LINE(90)
	this->collidable = true;
	HX_STACK_LINE(91)
	this->x = x;
	HX_STACK_LINE(92)
	this->y = y;
	HX_STACK_LINE(94)
	this->originX = this->originY = (int)0;
	HX_STACK_LINE(95)
	this->width = this->height = (int)0;
	HX_STACK_LINE(96)
	this->_moveX = this->_moveY = (int)0;
	HX_STACK_LINE(97)
	this->_type = HX_CSTRING("");
	HX_STACK_LINE(98)
	this->_name = HX_CSTRING("");
	HX_STACK_LINE(100)
	this->HITBOX = ::com::haxepunk::Mask_obj::__new();
	HX_STACK_LINE(101)
	this->_point = ::com::haxepunk::HXP_obj::point;
	HX_STACK_LINE(102)
	this->_camera = ::com::haxepunk::HXP_obj::point2;
	HX_STACK_LINE(104)
	if (((graphic != null()))){
		HX_STACK_LINE(104)
		this->setGraphic(graphic);
	}
	HX_STACK_LINE(105)
	if (((mask != null()))){
		HX_STACK_LINE(105)
		this->setMask(mask);
	}
	HX_STACK_LINE(106)
	this->HITBOX->assignTo(hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(107)
	this->_class = ::Type_obj::getClassName(::Type_obj::getClass(hx::ObjectPtr<OBJ_>(this)));
	HX_STACK_LINE(109)
	this->setLayer((int)10);
}
;
	return null();
}

Entity_obj::~Entity_obj() { }

Dynamic Entity_obj::__CreateEmpty() { return  new Entity_obj; }
hx::ObjectPtr< Entity_obj > Entity_obj::__new(hx::Null< Float >  __o_x,hx::Null< Float >  __o_y,::com::haxepunk::Graphic graphic,::com::haxepunk::Mask mask)
{  hx::ObjectPtr< Entity_obj > result = new Entity_obj();
	result->__construct(__o_x,__o_y,graphic,mask);
	return result;}

Dynamic Entity_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Entity_obj > result = new Entity_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3]);
	return result;}

Void Entity_obj::clampVertical( Float top,Float bottom,hx::Null< Float >  __o_padding){
Float padding = __o_padding.Default(0);
	HX_STACK_PUSH("Entity::clampVertical","com/haxepunk/Entity.hx",850);
	HX_STACK_THIS(this);
	HX_STACK_ARG(top,"top");
	HX_STACK_ARG(bottom,"bottom");
	HX_STACK_ARG(padding,"padding");
{
		HX_STACK_LINE(851)
		if ((((this->y - this->originY) < (top + padding)))){
			HX_STACK_LINE(851)
			this->y = ((top + this->originY) + padding);
		}
		HX_STACK_LINE(852)
		if (((((this->y - this->originY) + this->height) > (bottom - padding)))){
			HX_STACK_LINE(852)
			this->y = (((bottom - this->height) + this->originY) - padding);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,clampVertical,(void))

Void Entity_obj::clampHorizontal( Float left,Float right,hx::Null< Float >  __o_padding){
Float padding = __o_padding.Default(0);
	HX_STACK_PUSH("Entity::clampHorizontal","com/haxepunk/Entity.hx",838);
	HX_STACK_THIS(this);
	HX_STACK_ARG(left,"left");
	HX_STACK_ARG(right,"right");
	HX_STACK_ARG(padding,"padding");
{
		HX_STACK_LINE(839)
		if ((((this->x - this->originX) < (left + padding)))){
			HX_STACK_LINE(839)
			this->x = ((left + this->originX) + padding);
		}
		HX_STACK_LINE(840)
		if (((((this->x - this->originX) + this->width) > (right - padding)))){
			HX_STACK_LINE(840)
			this->x = (((right - this->width) + this->originX) - padding);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,clampHorizontal,(void))

bool Entity_obj::moveCollideY( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("Entity::moveCollideY","com/haxepunk/Entity.hx",827);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(827)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,moveCollideY,return )

bool Entity_obj::moveCollideX( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("Entity::moveCollideX","com/haxepunk/Entity.hx",818);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(818)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,moveCollideX,return )

Void Entity_obj::moveTowards( Float x,Float y,Float amount,Dynamic solidType,hx::Null< bool >  __o_sweep){
bool sweep = __o_sweep.Default(false);
	HX_STACK_PUSH("Entity::moveTowards","com/haxepunk/Entity.hx",803);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(amount,"amount");
	HX_STACK_ARG(solidType,"solidType");
	HX_STACK_ARG(sweep,"sweep");
{
		HX_STACK_LINE(804)
		this->_point->x = (x - this->x);
		HX_STACK_LINE(805)
		this->_point->y = (y - this->y);
		HX_STACK_LINE(806)
		if (((((this->_point->x * this->_point->x) + (this->_point->y * this->_point->y)) > (amount * amount)))){
			HX_STACK_LINE(807)
			this->_point->normalize(amount);
		}
		HX_STACK_LINE(810)
		this->moveBy(this->_point->x,this->_point->y,solidType,sweep);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC5(Entity_obj,moveTowards,(void))

Void Entity_obj::moveTo( Float x,Float y,Dynamic solidType,hx::Null< bool >  __o_sweep){
bool sweep = __o_sweep.Default(false);
	HX_STACK_PUSH("Entity::moveTo","com/haxepunk/Entity.hx",790);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(solidType,"solidType");
	HX_STACK_ARG(sweep,"sweep");
{
		HX_STACK_LINE(790)
		this->moveBy((x - this->x),(y - this->y),solidType,sweep);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,moveTo,(void))

Void Entity_obj::moveBy( Float x,Float y,Dynamic solidType,hx::Null< bool >  __o_sweep){
bool sweep = __o_sweep.Default(false);
	HX_STACK_PUSH("Entity::moveBy","com/haxepunk/Entity.hx",722);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(solidType,"solidType");
	HX_STACK_ARG(sweep,"sweep");
{
		HX_STACK_LINE(723)
		hx::AddEq(this->_moveX,x);
		HX_STACK_LINE(724)
		hx::AddEq(this->_moveY,y);
		HX_STACK_LINE(725)
		x = ::Math_obj::round(this->_moveX);
		HX_STACK_LINE(726)
		y = ::Math_obj::round(this->_moveY);
		HX_STACK_LINE(727)
		hx::SubEq(this->_moveX,x);
		HX_STACK_LINE(728)
		hx::SubEq(this->_moveY,y);
		HX_STACK_LINE(729)
		if (((solidType != null()))){
			HX_STACK_LINE(731)
			int sign;		HX_STACK_VAR(sign,"sign");
			::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
			HX_STACK_LINE(732)
			if (((x != (int)0))){
				HX_STACK_LINE(733)
				if (((bool(this->collidable) && bool(((bool(sweep) || bool((this->collideTypes(solidType,(this->x + x),this->y) != null())))))))){
					HX_STACK_LINE(736)
					sign = (  (((x > (int)0))) ? int((int)1) : int((int)-1) );
					HX_STACK_LINE(737)
					while(((x != (int)0))){
						HX_STACK_LINE(739)
						if ((((e = this->collideTypes(solidType,(this->x + sign),this->y)) != null()))){
							HX_STACK_LINE(740)
							if ((this->moveCollideX(e))){
								HX_STACK_LINE(741)
								break;
							}
							else{
								HX_STACK_LINE(742)
								hx::AddEq(this->x,sign);
							}
						}
						else{
							HX_STACK_LINE(745)
							hx::AddEq(this->x,sign);
						}
						HX_STACK_LINE(748)
						hx::SubEq(x,sign);
					}
				}
				else{
					HX_STACK_LINE(751)
					hx::AddEq(this->x,x);
				}
			}
			HX_STACK_LINE(753)
			if (((y != (int)0))){
				HX_STACK_LINE(754)
				if (((bool(this->collidable) && bool(((bool(sweep) || bool((this->collideTypes(solidType,this->x,(this->y + y)) != null())))))))){
					HX_STACK_LINE(757)
					sign = (  (((y > (int)0))) ? int((int)1) : int((int)-1) );
					HX_STACK_LINE(758)
					while(((y != (int)0))){
						HX_STACK_LINE(760)
						if ((((e = this->collideTypes(solidType,this->x,(this->y + sign))) != null()))){
							HX_STACK_LINE(761)
							if ((this->moveCollideY(e))){
								HX_STACK_LINE(762)
								break;
							}
							else{
								HX_STACK_LINE(763)
								hx::AddEq(this->y,sign);
							}
						}
						else{
							HX_STACK_LINE(766)
							hx::AddEq(this->y,sign);
						}
						HX_STACK_LINE(769)
						hx::SubEq(y,sign);
					}
				}
				else{
					HX_STACK_LINE(772)
					hx::AddEq(this->y,y);
				}
			}
		}
		else{
			HX_STACK_LINE(777)
			hx::AddEq(this->x,x);
			HX_STACK_LINE(778)
			hx::AddEq(this->y,y);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,moveBy,(void))

::String Entity_obj::toString( ){
	HX_STACK_PUSH("Entity::toString","com/haxepunk/Entity.hx",710);
	HX_STACK_THIS(this);
	HX_STACK_LINE(710)
	return this->_class;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,toString,return )

Float Entity_obj::distanceToRect( Float rx,Float ry,Float rwidth,Float rheight){
	HX_STACK_PUSH("Entity::distanceToRect","com/haxepunk/Entity.hx",701);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rx,"rx");
	HX_STACK_ARG(ry,"ry");
	HX_STACK_ARG(rwidth,"rwidth");
	HX_STACK_ARG(rheight,"rheight");
	HX_STACK_LINE(701)
	return ::com::haxepunk::HXP_obj::distanceRects(rx,ry,rwidth,rheight,(this->x - this->originX),(this->y - this->originY),this->width,this->height);
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,distanceToRect,return )

Float Entity_obj::distanceToPoint( Float px,Float py,hx::Null< bool >  __o_useHitbox){
bool useHitbox = __o_useHitbox.Default(false);
	HX_STACK_PUSH("Entity::distanceToPoint","com/haxepunk/Entity.hx",687);
	HX_STACK_THIS(this);
	HX_STACK_ARG(px,"px");
	HX_STACK_ARG(py,"py");
	HX_STACK_ARG(useHitbox,"useHitbox");
{
		HX_STACK_LINE(687)
		if ((!(useHitbox))){
			HX_STACK_LINE(688)
			return ::Math_obj::sqrt(((((this->x - px)) * ((this->x - px))) + (((this->y - py)) * ((this->y - py)))));
		}
		else{
			HX_STACK_LINE(689)
			return ::com::haxepunk::HXP_obj::distanceRectPoint(px,py,(this->x - this->originX),(this->y - this->originY),this->width,this->height);
		}
		HX_STACK_LINE(687)
		return 0.;
	}
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,distanceToPoint,return )

Float Entity_obj::distanceFrom( ::com::haxepunk::Entity e,hx::Null< bool >  __o_useHitboxes){
bool useHitboxes = __o_useHitboxes.Default(false);
	HX_STACK_PUSH("Entity::distanceFrom","com/haxepunk/Entity.hx",674);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_ARG(useHitboxes,"useHitboxes");
{
		HX_STACK_LINE(674)
		if ((!(useHitboxes))){
			HX_STACK_LINE(675)
			return ::Math_obj::sqrt(((((this->x - e->x)) * ((this->x - e->x))) + (((this->y - e->y)) * ((this->y - e->y)))));
		}
		else{
			HX_STACK_LINE(676)
			return ::com::haxepunk::HXP_obj::distanceRects((this->x - this->originX),(this->y - this->originY),this->width,this->height,(e->x - e->originX),(e->y - e->originY),e->width,e->height);
		}
		HX_STACK_LINE(674)
		return 0.;
	}
}


HX_DEFINE_DYNAMIC_FUNC2(Entity_obj,distanceFrom,return )

Void Entity_obj::centerOrigin( ){
{
		HX_STACK_PUSH("Entity::centerOrigin","com/haxepunk/Entity.hx",662);
		HX_STACK_THIS(this);
		HX_STACK_LINE(663)
		this->originX = ::Std_obj::_int((Float(this->width) / Float((int)2)));
		HX_STACK_LINE(664)
		this->originY = ::Std_obj::_int((Float(this->height) / Float((int)2)));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,centerOrigin,(void))

Void Entity_obj::setOrigin( hx::Null< int >  __o_x,hx::Null< int >  __o_y){
int x = __o_x.Default(0);
int y = __o_y.Default(0);
	HX_STACK_PUSH("Entity::setOrigin","com/haxepunk/Entity.hx",653);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(654)
		this->originX = x;
		HX_STACK_LINE(655)
		this->originY = y;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Entity_obj,setOrigin,(void))

Void Entity_obj::setHitboxTo( Dynamic o){
{
		HX_STACK_PUSH("Entity::setHitboxTo","com/haxepunk/Entity.hx",624);
		HX_STACK_THIS(this);
		HX_STACK_ARG(o,"o");
		HX_STACK_LINE(624)
		::com::haxepunk::HXP_obj::log(HX_CSTRING("setHitboxTo not supported on this platform"));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setHitboxTo,(void))

Void Entity_obj::setHitbox( hx::Null< int >  __o_width,hx::Null< int >  __o_height,hx::Null< int >  __o_originX,hx::Null< int >  __o_originY){
int width = __o_width.Default(0);
int height = __o_height.Default(0);
int originX = __o_originX.Default(0);
int originY = __o_originY.Default(0);
	HX_STACK_PUSH("Entity::setHitbox","com/haxepunk/Entity.hx",612);
	HX_STACK_THIS(this);
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_ARG(originX,"originX");
	HX_STACK_ARG(originY,"originY");
{
		HX_STACK_LINE(613)
		this->width = width;
		HX_STACK_LINE(614)
		this->height = height;
		HX_STACK_LINE(615)
		this->originX = originX;
		HX_STACK_LINE(616)
		this->originY = originY;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,setHitbox,(void))

::com::haxepunk::Graphic Entity_obj::addGraphic( ::com::haxepunk::Graphic g){
	HX_STACK_PUSH("Entity::addGraphic","com/haxepunk/Entity.hx",585);
	HX_STACK_THIS(this);
	HX_STACK_ARG(g,"g");
	HX_STACK_LINE(586)
	if (((this->_graphic == null()))){
		HX_STACK_LINE(587)
		this->setGraphic(g);
	}
	else{
		HX_STACK_LINE(590)
		if ((::Std_obj::is(this->_graphic,hx::ClassOf< ::com::haxepunk::graphics::Graphiclist >()))){
			HX_STACK_LINE(591)
			(hx::TCast< com::haxepunk::graphics::Graphiclist >::cast(this->_graphic))->add(g);
		}
		else{
			HX_STACK_LINE(596)
			::com::haxepunk::graphics::Graphiclist list = ::com::haxepunk::graphics::Graphiclist_obj::__new(null());		HX_STACK_VAR(list,"list");
			HX_STACK_LINE(597)
			if (((this->_graphic != null()))){
				HX_STACK_LINE(597)
				list->add(this->_graphic);
			}
			HX_STACK_LINE(598)
			list->add(g);
			HX_STACK_LINE(599)
			this->setGraphic(list);
		}
	}
	HX_STACK_LINE(601)
	return g;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,addGraphic,return )

::String Entity_obj::setName( ::String value){
	HX_STACK_PUSH("Entity::setName","com/haxepunk/Entity.hx",567);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(568)
	if (((this->_name == value))){
		HX_STACK_LINE(568)
		return this->_name;
	}
	HX_STACK_LINE(569)
	if (((this->_world == null()))){
		HX_STACK_LINE(571)
		this->_name = value;
		HX_STACK_LINE(572)
		return this->_name;
	}
	HX_STACK_LINE(574)
	if (((this->_name != HX_CSTRING("")))){
		HX_STACK_LINE(574)
		this->_world->unregisterName(hx::ObjectPtr<OBJ_>(this));
	}
	HX_STACK_LINE(575)
	this->_name = value;
	HX_STACK_LINE(576)
	if (((value != HX_CSTRING("")))){
		HX_STACK_LINE(576)
		this->_world->registerName(hx::ObjectPtr<OBJ_>(this));
	}
	HX_STACK_LINE(577)
	return this->_name;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setName,return )

::String Entity_obj::getName( ){
	HX_STACK_PUSH("Entity::getName","com/haxepunk/Entity.hx",565);
	HX_STACK_THIS(this);
	HX_STACK_LINE(565)
	return this->_name;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getName,return )

::com::haxepunk::Graphic Entity_obj::setGraphic( ::com::haxepunk::Graphic value){
	HX_STACK_PUSH("Entity::setGraphic","com/haxepunk/Entity.hx",557);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(558)
	if (((this->_graphic == value))){
		HX_STACK_LINE(558)
		return value;
	}
	HX_STACK_LINE(559)
	this->_graphic = value;
	HX_STACK_LINE(560)
	if (((bool((value != null())) && bool((value->assign_dyn() != null()))))){
		HX_STACK_LINE(560)
		value->assign();
	}
	HX_STACK_LINE(561)
	return this->_graphic;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setGraphic,return )

::com::haxepunk::Graphic Entity_obj::getGraphic( ){
	HX_STACK_PUSH("Entity::getGraphic","com/haxepunk/Entity.hx",555);
	HX_STACK_THIS(this);
	HX_STACK_LINE(555)
	return this->_graphic;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getGraphic,return )

::com::haxepunk::Mask Entity_obj::setMask( ::com::haxepunk::Mask value){
	HX_STACK_PUSH("Entity::setMask","com/haxepunk/Entity.hx",543);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(544)
	if (((this->_mask == value))){
		HX_STACK_LINE(544)
		return value;
	}
	HX_STACK_LINE(545)
	if (((this->_mask != null()))){
		HX_STACK_LINE(545)
		this->_mask->assignTo(null());
	}
	HX_STACK_LINE(546)
	this->_mask = value;
	HX_STACK_LINE(547)
	if (((value != null()))){
		HX_STACK_LINE(547)
		this->_mask->assignTo(hx::ObjectPtr<OBJ_>(this));
	}
	HX_STACK_LINE(548)
	return this->_mask;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setMask,return )

::com::haxepunk::Mask Entity_obj::getMask( ){
	HX_STACK_PUSH("Entity::getMask","com/haxepunk/Entity.hx",541);
	HX_STACK_THIS(this);
	HX_STACK_LINE(541)
	return this->_mask;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getMask,return )

::String Entity_obj::setType( ::String value){
	HX_STACK_PUSH("Entity::setType","com/haxepunk/Entity.hx",523);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(524)
	if (((this->_type == value))){
		HX_STACK_LINE(524)
		return this->_type;
	}
	HX_STACK_LINE(525)
	if (((this->_world == null()))){
		HX_STACK_LINE(527)
		this->_type = value;
		HX_STACK_LINE(528)
		return this->_type;
	}
	HX_STACK_LINE(530)
	if (((this->_type != HX_CSTRING("")))){
		HX_STACK_LINE(530)
		this->_world->removeType(hx::ObjectPtr<OBJ_>(this));
	}
	HX_STACK_LINE(531)
	this->_type = value;
	HX_STACK_LINE(532)
	if (((value != HX_CSTRING("")))){
		HX_STACK_LINE(532)
		this->_world->addType(hx::ObjectPtr<OBJ_>(this));
	}
	HX_STACK_LINE(533)
	return this->_type;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setType,return )

::String Entity_obj::getType( ){
	HX_STACK_PUSH("Entity::getType","com/haxepunk/Entity.hx",521);
	HX_STACK_THIS(this);
	HX_STACK_LINE(521)
	return this->_type;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getType,return )

int Entity_obj::setLayer( int value){
	HX_STACK_PUSH("Entity::setLayer","com/haxepunk/Entity.hx",498);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(499)
	if (((this->_layer == value))){
		HX_STACK_LINE(499)
		return this->_layer;
	}
	HX_STACK_LINE(506)
	if (((this->_world == null()))){
		HX_STACK_LINE(508)
		this->_layer = value;
		HX_STACK_LINE(509)
		return this->_layer;
	}
	HX_STACK_LINE(511)
	this->_world->removeRender(hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(512)
	this->_layer = value;
	HX_STACK_LINE(513)
	this->_world->addRender(hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(514)
	return this->_layer;
}


HX_DEFINE_DYNAMIC_FUNC1(Entity_obj,setLayer,return )

int Entity_obj::getLayer( ){
	HX_STACK_PUSH("Entity::getLayer","com/haxepunk/Entity.hx",496);
	HX_STACK_THIS(this);
	HX_STACK_LINE(496)
	return this->_layer;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getLayer,return )

Float Entity_obj::getBottom( ){
	HX_STACK_PUSH("Entity::getBottom","com/haxepunk/Entity.hx",490);
	HX_STACK_THIS(this);
	HX_STACK_LINE(490)
	return ((this->y - this->originY) + this->height);
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getBottom,return )

Float Entity_obj::getTop( ){
	HX_STACK_PUSH("Entity::getTop","com/haxepunk/Entity.hx",484);
	HX_STACK_THIS(this);
	HX_STACK_LINE(484)
	return (this->y - this->originY);
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getTop,return )

Float Entity_obj::getRight( ){
	HX_STACK_PUSH("Entity::getRight","com/haxepunk/Entity.hx",478);
	HX_STACK_THIS(this);
	HX_STACK_LINE(478)
	return ((this->x - this->originX) + this->width);
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getRight,return )

Float Entity_obj::getLeft( ){
	HX_STACK_PUSH("Entity::getLeft","com/haxepunk/Entity.hx",472);
	HX_STACK_THIS(this);
	HX_STACK_LINE(472)
	return (this->x - this->originX);
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getLeft,return )

Float Entity_obj::getCenterY( ){
	HX_STACK_PUSH("Entity::getCenterY","com/haxepunk/Entity.hx",466);
	HX_STACK_THIS(this);
	HX_STACK_LINE(466)
	return ((this->y - this->originY) + (Float(this->height) / Float((int)2)));
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getCenterY,return )

Float Entity_obj::getCenterX( ){
	HX_STACK_PUSH("Entity::getCenterX","com/haxepunk/Entity.hx",460);
	HX_STACK_THIS(this);
	HX_STACK_LINE(460)
	return ((this->x - this->originX) + (Float(this->width) / Float((int)2)));
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getCenterX,return )

Float Entity_obj::getHalfHeight( ){
	HX_STACK_PUSH("Entity::getHalfHeight","com/haxepunk/Entity.hx",454);
	HX_STACK_THIS(this);
	HX_STACK_LINE(454)
	return (Float(this->height) / Float((int)2));
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getHalfHeight,return )

Float Entity_obj::getHalfWidth( ){
	HX_STACK_PUSH("Entity::getHalfWidth","com/haxepunk/Entity.hx",448);
	HX_STACK_THIS(this);
	HX_STACK_LINE(448)
	return (Float(this->width) / Float((int)2));
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getHalfWidth,return )

::com::haxepunk::World Entity_obj::getWorld( ){
	HX_STACK_PUSH("Entity::getWorld","com/haxepunk/Entity.hx",440);
	HX_STACK_THIS(this);
	HX_STACK_LINE(440)
	return this->_world;
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getWorld,return )

bool Entity_obj::getOnCamera( ){
	HX_STACK_PUSH("Entity::getOnCamera","com/haxepunk/Entity.hx",431);
	HX_STACK_THIS(this);
	HX_STACK_LINE(431)
	return this->collideRect(this->x,this->y,this->_world->camera->x,this->_world->camera->y,::com::haxepunk::HXP_obj::width,::com::haxepunk::HXP_obj::height);
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,getOnCamera,return )

Void Entity_obj::collideTypesInto( Array< ::String > types,Float x,Float y,Dynamic array){
{
		HX_STACK_PUSH("Entity::collideTypesInto","com/haxepunk/Entity.hx",421);
		HX_STACK_THIS(this);
		HX_STACK_ARG(types,"types");
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_ARG(array,"array");
		HX_STACK_LINE(422)
		if (((this->_world == null()))){
			HX_STACK_LINE(422)
			return null();
		}
		HX_STACK_LINE(423)
		{
			HX_STACK_LINE(423)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(423)
			while(((_g < types->length))){
				HX_STACK_LINE(423)
				::String type = types->__get(_g);		HX_STACK_VAR(type,"type");
				HX_STACK_LINE(423)
				++(_g);
				HX_STACK_LINE(423)
				this->collideInto(type,x,y,array);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,collideTypesInto,(void))

Void Entity_obj::collideInto( ::String type,Float x,Float y,Dynamic array){
{
		HX_STACK_PUSH("Entity::collideInto","com/haxepunk/Entity.hx",365);
		HX_STACK_THIS(this);
		HX_STACK_ARG(type,"type");
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_ARG(array,"array");
		HX_STACK_LINE(366)
		if (((this->_world == null()))){
			HX_STACK_LINE(366)
			return null();
		}
		HX_STACK_LINE(368)
		Dynamic e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_world->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(370)
		if (((bool(!(this->collidable)) || bool((fe == null()))))){
			HX_STACK_LINE(370)
			return null();
		}
		HX_STACK_LINE(372)
		this->_x = this->x;
		HX_STACK_LINE(372)
		this->_y = this->y;
		HX_STACK_LINE(373)
		this->x = x;
		HX_STACK_LINE(373)
		this->y = y;
		HX_STACK_LINE(374)
		int n = array->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(376)
		if (((this->_mask == null()))){
			HX_STACK_LINE(378)
			while(((fe != null()))){
				HX_STACK_LINE(380)
				e = fe;
				HX_STACK_LINE(381)
				if (((bool((bool((bool((bool((bool(e->__Field(HX_CSTRING("collidable"),true)) && bool((e != hx::ObjectPtr<OBJ_>(this))))) && bool((((x - this->originX) + this->width) > (e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)))))) && bool((((y - this->originY) + this->height) > (e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)))))) && bool(((x - this->originX) < ((e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)) + e->__Field(HX_CSTRING("width"),true)))))) && bool(((y - this->originY) < ((e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)) + e->__Field(HX_CSTRING("height"),true))))))){
					HX_STACK_LINE(386)
					if (((bool((e->__Field(HX_CSTRING("_mask"),true) == null())) || bool(e->__Field(HX_CSTRING("_mask"),true)->__Field(HX_CSTRING("collide"),true)(this->HITBOX))))){
						HX_STACK_LINE(387)
						hx::IndexRef((array).mPtr,(n)++) = e;
					}
				}
				HX_STACK_LINE(389)
				fe = fe->__Field(HX_CSTRING("_typeNext"),true);
			}
			HX_STACK_LINE(391)
			this->x = this->_x;
			HX_STACK_LINE(391)
			this->y = this->_y;
			HX_STACK_LINE(392)
			return null();
		}
		HX_STACK_LINE(395)
		while(((fe != null()))){
			HX_STACK_LINE(397)
			e = fe;
			HX_STACK_LINE(398)
			if (((bool((bool((bool((bool((bool(e->__Field(HX_CSTRING("collidable"),true)) && bool((e != hx::ObjectPtr<OBJ_>(this))))) && bool((((x - this->originX) + this->width) > (e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)))))) && bool((((y - this->originY) + this->height) > (e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)))))) && bool(((x - this->originX) < ((e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)) + e->__Field(HX_CSTRING("width"),true)))))) && bool(((y - this->originY) < ((e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)) + e->__Field(HX_CSTRING("height"),true))))))){
				HX_STACK_LINE(403)
				if ((this->_mask->collide((  (((e->__Field(HX_CSTRING("_mask"),true) != null()))) ? ::com::haxepunk::Mask(e->__Field(HX_CSTRING("_mask"),true)) : ::com::haxepunk::Mask(e->__Field(HX_CSTRING("HITBOX"),true)) )))){
					HX_STACK_LINE(404)
					hx::IndexRef((array).mPtr,(n)++) = e;
				}
			}
			HX_STACK_LINE(406)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(408)
		this->x = this->_x;
		HX_STACK_LINE(408)
		this->y = this->_y;
		HX_STACK_LINE(409)
		return null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,collideInto,(void))

bool Entity_obj::collidePoint( Float x,Float y,Float pX,Float pY){
	HX_STACK_PUSH("Entity::collidePoint","com/haxepunk/Entity.hx",332);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(pX,"pX");
	HX_STACK_ARG(pY,"pY");
	HX_STACK_LINE(333)
	if (((bool((bool((bool((pX >= (x - this->originX))) && bool((pY >= (y - this->originY))))) && bool((pX < ((x - this->originX) + this->width))))) && bool((pY < ((y - this->originY) + this->height)))))){
		HX_STACK_LINE(338)
		if (((this->_mask == null()))){
			HX_STACK_LINE(338)
			return true;
		}
		HX_STACK_LINE(339)
		this->_x = this->x;
		HX_STACK_LINE(339)
		this->_y = this->y;
		HX_STACK_LINE(340)
		this->x = x;
		HX_STACK_LINE(340)
		this->y = y;
		HX_STACK_LINE(341)
		::com::haxepunk::HXP_obj::entity->x = pX;
		HX_STACK_LINE(342)
		::com::haxepunk::HXP_obj::entity->y = pY;
		HX_STACK_LINE(343)
		::com::haxepunk::HXP_obj::entity->width = (int)1;
		HX_STACK_LINE(344)
		::com::haxepunk::HXP_obj::entity->height = (int)1;
		HX_STACK_LINE(345)
		if ((this->_mask->collide(::com::haxepunk::HXP_obj::entity->HITBOX))){
			HX_STACK_LINE(347)
			this->x = this->_x;
			HX_STACK_LINE(347)
			this->y = this->_y;
			HX_STACK_LINE(348)
			return true;
		}
		HX_STACK_LINE(350)
		this->x = this->_x;
		HX_STACK_LINE(350)
		this->y = this->_y;
		HX_STACK_LINE(351)
		return false;
	}
	HX_STACK_LINE(353)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC4(Entity_obj,collidePoint,return )

bool Entity_obj::collideRect( Float x,Float y,Float rX,Float rY,Float rWidth,Float rHeight){
	HX_STACK_PUSH("Entity::collideRect","com/haxepunk/Entity.hx",299);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(rX,"rX");
	HX_STACK_ARG(rY,"rY");
	HX_STACK_ARG(rWidth,"rWidth");
	HX_STACK_ARG(rHeight,"rHeight");
	HX_STACK_LINE(300)
	if (((bool((bool((bool((((x - this->originX) + this->width) >= rX)) && bool((((y - this->originY) + this->height) >= rY)))) && bool(((x - this->originX) <= (rX + rWidth))))) && bool(((y - this->originY) <= (rY + rHeight)))))){
		HX_STACK_LINE(305)
		if (((this->_mask == null()))){
			HX_STACK_LINE(305)
			return true;
		}
		HX_STACK_LINE(306)
		this->_x = this->x;
		HX_STACK_LINE(306)
		this->_y = this->y;
		HX_STACK_LINE(307)
		this->x = x;
		HX_STACK_LINE(307)
		this->y = y;
		HX_STACK_LINE(308)
		::com::haxepunk::HXP_obj::entity->x = rX;
		HX_STACK_LINE(309)
		::com::haxepunk::HXP_obj::entity->y = rY;
		HX_STACK_LINE(310)
		::com::haxepunk::HXP_obj::entity->width = ::Std_obj::_int(rWidth);
		HX_STACK_LINE(311)
		::com::haxepunk::HXP_obj::entity->height = ::Std_obj::_int(rHeight);
		HX_STACK_LINE(312)
		if ((this->_mask->collide(::com::haxepunk::HXP_obj::entity->HITBOX))){
			HX_STACK_LINE(314)
			this->x = this->_x;
			HX_STACK_LINE(314)
			this->y = this->_y;
			HX_STACK_LINE(315)
			return true;
		}
		HX_STACK_LINE(317)
		this->x = this->_x;
		HX_STACK_LINE(317)
		this->y = this->_y;
		HX_STACK_LINE(318)
		return false;
	}
	HX_STACK_LINE(320)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC6(Entity_obj,collideRect,return )

Dynamic Entity_obj::collideWith( Dynamic e,Float x,Float y){
	HX_STACK_PUSH("Entity::collideWith","com/haxepunk/Entity.hx",258);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_LINE(259)
	this->_x = this->x;
	HX_STACK_LINE(259)
	this->_y = this->y;
	HX_STACK_LINE(260)
	this->x = x;
	HX_STACK_LINE(260)
	this->y = y;
	HX_STACK_LINE(262)
	if (((bool((bool((bool((bool((bool(this->collidable) && bool(e->__Field(HX_CSTRING("collidable"),true)))) && bool((((x - this->originX) + this->width) > (e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)))))) && bool((((y - this->originY) + this->height) > (e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)))))) && bool(((x - this->originX) < ((e->__Field(HX_CSTRING("x"),true) - e->__Field(HX_CSTRING("originX"),true)) + e->__Field(HX_CSTRING("width"),true)))))) && bool(((y - this->originY) < ((e->__Field(HX_CSTRING("y"),true) - e->__Field(HX_CSTRING("originY"),true)) + e->__Field(HX_CSTRING("height"),true))))))){
		HX_STACK_LINE(268)
		if (((this->_mask == null()))){
			HX_STACK_LINE(270)
			if (((bool((e->__Field(HX_CSTRING("_mask"),true) == null())) || bool(e->__Field(HX_CSTRING("_mask"),true)->__Field(HX_CSTRING("collide"),true)(this->HITBOX))))){
				HX_STACK_LINE(272)
				this->x = this->_x;
				HX_STACK_LINE(272)
				this->y = this->_y;
				HX_STACK_LINE(273)
				return e;
			}
			HX_STACK_LINE(275)
			this->x = this->_x;
			HX_STACK_LINE(275)
			this->y = this->_y;
			HX_STACK_LINE(276)
			return null();
		}
		HX_STACK_LINE(278)
		if ((this->_mask->collide((  (((e->__Field(HX_CSTRING("_mask"),true) != null()))) ? ::com::haxepunk::Mask(e->__Field(HX_CSTRING("_mask"),true)) : ::com::haxepunk::Mask(e->__Field(HX_CSTRING("HITBOX"),true)) )))){
			HX_STACK_LINE(280)
			this->x = this->_x;
			HX_STACK_LINE(280)
			this->y = this->_y;
			HX_STACK_LINE(281)
			return e;
		}
	}
	HX_STACK_LINE(284)
	this->x = this->_x;
	HX_STACK_LINE(284)
	this->y = this->_y;
	HX_STACK_LINE(285)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,collideWith,return )

::com::haxepunk::Entity Entity_obj::collideTypes( Dynamic types,Float x,Float y){
	HX_STACK_PUSH("Entity::collideTypes","com/haxepunk/Entity.hx",226);
	HX_STACK_THIS(this);
	HX_STACK_ARG(types,"types");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_LINE(227)
	if (((this->_world == null()))){
		HX_STACK_LINE(227)
		return null();
	}
	HX_STACK_LINE(229)
	if ((::Std_obj::is(types,hx::ClassOf< ::String >()))){
		HX_STACK_LINE(230)
		return this->collide(types,x,y);
	}
	else{
		HX_STACK_LINE(235)
		Array< ::String > a = types;		HX_STACK_VAR(a,"a");
		HX_STACK_LINE(236)
		if (((a != null()))){
			HX_STACK_LINE(238)
			::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
			HX_STACK_LINE(239)
			{
				HX_STACK_LINE(239)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(239)
				while(((_g < a->length))){
					HX_STACK_LINE(239)
					::String type = a->__get(_g);		HX_STACK_VAR(type,"type");
					HX_STACK_LINE(239)
					++(_g);
					HX_STACK_LINE(241)
					e = this->collide(type,x,y);
					HX_STACK_LINE(242)
					if (((e != null()))){
						HX_STACK_LINE(242)
						return e;
					}
				}
			}
		}
	}
	HX_STACK_LINE(247)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,collideTypes,return )

::com::haxepunk::Entity Entity_obj::collide( ::String type,Float x,Float y){
	HX_STACK_PUSH("Entity::collide","com/haxepunk/Entity.hx",164);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_LINE(165)
	if (((this->_world == null()))){
		HX_STACK_LINE(165)
		return null();
	}
	HX_STACK_LINE(167)
	::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
	Dynamic fe = this->_world->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(169)
	if (((bool(!(this->collidable)) || bool((fe == null()))))){
		HX_STACK_LINE(169)
		return null();
	}
	HX_STACK_LINE(171)
	this->_x = this->x;
	HX_STACK_LINE(171)
	this->_y = this->y;
	HX_STACK_LINE(172)
	this->x = x;
	HX_STACK_LINE(172)
	this->y = y;
	HX_STACK_LINE(174)
	if (((this->_mask == null()))){
		HX_STACK_LINE(176)
		while(((fe != null()))){
			HX_STACK_LINE(178)
			e = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(179)
			if (((bool((bool((bool((bool((bool(e->collidable) && bool((e != hx::ObjectPtr<OBJ_>(this))))) && bool((((x - this->originX) + this->width) > (e->x - e->originX))))) && bool((((y - this->originY) + this->height) > (e->y - e->originY))))) && bool(((x - this->originX) < ((e->x - e->originX) + e->width))))) && bool(((y - this->originY) < ((e->y - e->originY) + e->height)))))){
				HX_STACK_LINE(184)
				if (((bool((e->_mask == null())) || bool(e->_mask->collide(this->HITBOX))))){
					HX_STACK_LINE(187)
					this->x = this->_x;
					HX_STACK_LINE(187)
					this->y = this->_y;
					HX_STACK_LINE(188)
					return e;
				}
			}
			HX_STACK_LINE(191)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(193)
		this->x = this->_x;
		HX_STACK_LINE(193)
		this->y = this->_y;
		HX_STACK_LINE(194)
		return null();
	}
	HX_STACK_LINE(197)
	while(((fe != null()))){
		HX_STACK_LINE(199)
		e = hx::TCast< com::haxepunk::Entity >::cast(fe);
		HX_STACK_LINE(200)
		if (((bool((bool((bool((bool((bool(e->collidable) && bool((e != hx::ObjectPtr<OBJ_>(this))))) && bool((((x - this->originX) + this->width) > (e->x - e->originX))))) && bool((((y - this->originY) + this->height) > (e->y - e->originY))))) && bool(((x - this->originX) < ((e->x - e->originX) + e->width))))) && bool(((y - this->originY) < ((e->y - e->originY) + e->height)))))){
			HX_STACK_LINE(205)
			if ((this->_mask->collide((  (((e->_mask != null()))) ? ::com::haxepunk::Mask(e->_mask) : ::com::haxepunk::Mask(e->HITBOX) )))){
				HX_STACK_LINE(208)
				this->x = this->_x;
				HX_STACK_LINE(208)
				this->y = this->_y;
				HX_STACK_LINE(209)
				return e;
			}
		}
		HX_STACK_LINE(212)
		fe = fe->__Field(HX_CSTRING("_typeNext"),true);
	}
	HX_STACK_LINE(214)
	this->x = this->_x;
	HX_STACK_LINE(214)
	this->y = this->_y;
	HX_STACK_LINE(215)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Entity_obj,collide,return )

Void Entity_obj::render( ){
{
		HX_STACK_PUSH("Entity::render","com/haxepunk/Entity.hx",141);
		HX_STACK_THIS(this);
		HX_STACK_LINE(141)
		if (((bool((this->_graphic != null())) && bool(this->_graphic->visible)))){
			HX_STACK_LINE(144)
			if ((this->_graphic->relative)){
				HX_STACK_LINE(146)
				this->_point->x = this->x;
				HX_STACK_LINE(147)
				this->_point->y = this->y;
			}
			else{
				HX_STACK_LINE(149)
				this->_point->x = this->_point->y = (int)0;
			}
			HX_STACK_LINE(150)
			this->_camera->x = (  (((this->_world == null()))) ? Float(::com::haxepunk::HXP_obj::camera->x) : Float(this->_world->camera->x) );
			HX_STACK_LINE(151)
			this->_camera->y = (  (((this->_world == null()))) ? Float(::com::haxepunk::HXP_obj::camera->y) : Float(this->_world->camera->y) );
			HX_STACK_LINE(152)
			this->_graphic->render((  (((this->renderTarget != null()))) ? ::native::display::BitmapData(this->renderTarget) : ::native::display::BitmapData(::com::haxepunk::HXP_obj::buffer) ),this->_point,this->_camera,this->_layer);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,render,(void))

Void Entity_obj::update( ){
{
		HX_STACK_PUSH("Entity::update","com/haxepunk/Entity.hx",132);
		HX_STACK_THIS(this);
	}
return null();
}


Void Entity_obj::removed( ){
{
		HX_STACK_PUSH("Entity::removed","com/haxepunk/Entity.hx",124);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,removed,(void))

Void Entity_obj::added( ){
{
		HX_STACK_PUSH("Entity::added","com/haxepunk/Entity.hx",116);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Entity_obj,added,(void))


Entity_obj::Entity_obj()
{
}

void Entity_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Entity);
	HX_MARK_MEMBER_NAME(_camera,"_camera");
	HX_MARK_MEMBER_NAME(_point,"_point");
	HX_MARK_MEMBER_NAME(_graphic,"_graphic");
	HX_MARK_MEMBER_NAME(_moveY,"_moveY");
	HX_MARK_MEMBER_NAME(_moveX,"_moveX");
	HX_MARK_MEMBER_NAME(_y,"_y");
	HX_MARK_MEMBER_NAME(_x,"_x");
	HX_MARK_MEMBER_NAME(_mask,"_mask");
	HX_MARK_MEMBER_NAME(HITBOX,"HITBOX");
	HX_MARK_MEMBER_NAME(_recycleNext,"_recycleNext");
	HX_MARK_MEMBER_NAME(_typeNext,"_typeNext");
	HX_MARK_MEMBER_NAME(_typePrev,"_typePrev");
	HX_MARK_MEMBER_NAME(_renderNext,"_renderNext");
	HX_MARK_MEMBER_NAME(_renderPrev,"_renderPrev");
	HX_MARK_MEMBER_NAME(_updateNext,"_updateNext");
	HX_MARK_MEMBER_NAME(_updatePrev,"_updatePrev");
	HX_MARK_MEMBER_NAME(_name,"_name");
	HX_MARK_MEMBER_NAME(_layer,"_layer");
	HX_MARK_MEMBER_NAME(_type,"_type");
	HX_MARK_MEMBER_NAME(_world,"_world");
	HX_MARK_MEMBER_NAME(_class,"_class");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_MEMBER_NAME(graphic,"graphic");
	HX_MARK_MEMBER_NAME(mask,"mask");
	HX_MARK_MEMBER_NAME(type,"type");
	HX_MARK_MEMBER_NAME(layer,"layer");
	HX_MARK_MEMBER_NAME(bottom,"bottom");
	HX_MARK_MEMBER_NAME(top,"top");
	HX_MARK_MEMBER_NAME(right,"right");
	HX_MARK_MEMBER_NAME(left,"left");
	HX_MARK_MEMBER_NAME(centerY,"centerY");
	HX_MARK_MEMBER_NAME(centerX,"centerX");
	HX_MARK_MEMBER_NAME(halfHeight,"halfHeight");
	HX_MARK_MEMBER_NAME(halfWidth,"halfWidth");
	HX_MARK_MEMBER_NAME(world,"world");
	HX_MARK_MEMBER_NAME(onCamera,"onCamera");
	HX_MARK_MEMBER_NAME(renderTarget,"renderTarget");
	HX_MARK_MEMBER_NAME(originY,"originY");
	HX_MARK_MEMBER_NAME(originX,"originX");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(y,"y");
	HX_MARK_MEMBER_NAME(x,"x");
	HX_MARK_MEMBER_NAME(collidable,"collidable");
	HX_MARK_MEMBER_NAME(visible,"visible");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Entity_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_camera,"_camera");
	HX_VISIT_MEMBER_NAME(_point,"_point");
	HX_VISIT_MEMBER_NAME(_graphic,"_graphic");
	HX_VISIT_MEMBER_NAME(_moveY,"_moveY");
	HX_VISIT_MEMBER_NAME(_moveX,"_moveX");
	HX_VISIT_MEMBER_NAME(_y,"_y");
	HX_VISIT_MEMBER_NAME(_x,"_x");
	HX_VISIT_MEMBER_NAME(_mask,"_mask");
	HX_VISIT_MEMBER_NAME(HITBOX,"HITBOX");
	HX_VISIT_MEMBER_NAME(_recycleNext,"_recycleNext");
	HX_VISIT_MEMBER_NAME(_typeNext,"_typeNext");
	HX_VISIT_MEMBER_NAME(_typePrev,"_typePrev");
	HX_VISIT_MEMBER_NAME(_renderNext,"_renderNext");
	HX_VISIT_MEMBER_NAME(_renderPrev,"_renderPrev");
	HX_VISIT_MEMBER_NAME(_updateNext,"_updateNext");
	HX_VISIT_MEMBER_NAME(_updatePrev,"_updatePrev");
	HX_VISIT_MEMBER_NAME(_name,"_name");
	HX_VISIT_MEMBER_NAME(_layer,"_layer");
	HX_VISIT_MEMBER_NAME(_type,"_type");
	HX_VISIT_MEMBER_NAME(_world,"_world");
	HX_VISIT_MEMBER_NAME(_class,"_class");
	HX_VISIT_MEMBER_NAME(name,"name");
	HX_VISIT_MEMBER_NAME(graphic,"graphic");
	HX_VISIT_MEMBER_NAME(mask,"mask");
	HX_VISIT_MEMBER_NAME(type,"type");
	HX_VISIT_MEMBER_NAME(layer,"layer");
	HX_VISIT_MEMBER_NAME(bottom,"bottom");
	HX_VISIT_MEMBER_NAME(top,"top");
	HX_VISIT_MEMBER_NAME(right,"right");
	HX_VISIT_MEMBER_NAME(left,"left");
	HX_VISIT_MEMBER_NAME(centerY,"centerY");
	HX_VISIT_MEMBER_NAME(centerX,"centerX");
	HX_VISIT_MEMBER_NAME(halfHeight,"halfHeight");
	HX_VISIT_MEMBER_NAME(halfWidth,"halfWidth");
	HX_VISIT_MEMBER_NAME(world,"world");
	HX_VISIT_MEMBER_NAME(onCamera,"onCamera");
	HX_VISIT_MEMBER_NAME(renderTarget,"renderTarget");
	HX_VISIT_MEMBER_NAME(originY,"originY");
	HX_VISIT_MEMBER_NAME(originX,"originX");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(y,"y");
	HX_VISIT_MEMBER_NAME(x,"x");
	HX_VISIT_MEMBER_NAME(collidable,"collidable");
	HX_VISIT_MEMBER_NAME(visible,"visible");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Entity_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { return y; }
		if (HX_FIELD_EQ(inName,"x") ) { return x; }
		break;
	case 2:
		if (HX_FIELD_EQ(inName,"_y") ) { return _y; }
		if (HX_FIELD_EQ(inName,"_x") ) { return _x; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"top") ) { return inCallProp ? getTop() : top; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return inCallProp ? getName() : name; }
		if (HX_FIELD_EQ(inName,"mask") ) { return inCallProp ? getMask() : mask; }
		if (HX_FIELD_EQ(inName,"type") ) { return inCallProp ? getType() : type; }
		if (HX_FIELD_EQ(inName,"left") ) { return inCallProp ? getLeft() : left; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_mask") ) { return _mask; }
		if (HX_FIELD_EQ(inName,"_name") ) { return _name; }
		if (HX_FIELD_EQ(inName,"_type") ) { return _type; }
		if (HX_FIELD_EQ(inName,"layer") ) { return inCallProp ? getLayer() : layer; }
		if (HX_FIELD_EQ(inName,"right") ) { return inCallProp ? getRight() : right; }
		if (HX_FIELD_EQ(inName,"world") ) { return inCallProp ? getWorld() : world; }
		if (HX_FIELD_EQ(inName,"added") ) { return added_dyn(); }
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_point") ) { return _point; }
		if (HX_FIELD_EQ(inName,"_moveY") ) { return _moveY; }
		if (HX_FIELD_EQ(inName,"_moveX") ) { return _moveX; }
		if (HX_FIELD_EQ(inName,"HITBOX") ) { return HITBOX; }
		if (HX_FIELD_EQ(inName,"_layer") ) { return _layer; }
		if (HX_FIELD_EQ(inName,"_world") ) { return _world; }
		if (HX_FIELD_EQ(inName,"_class") ) { return _class; }
		if (HX_FIELD_EQ(inName,"moveTo") ) { return moveTo_dyn(); }
		if (HX_FIELD_EQ(inName,"moveBy") ) { return moveBy_dyn(); }
		if (HX_FIELD_EQ(inName,"bottom") ) { return inCallProp ? getBottom() : bottom; }
		if (HX_FIELD_EQ(inName,"getTop") ) { return getTop_dyn(); }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_camera") ) { return _camera; }
		if (HX_FIELD_EQ(inName,"setName") ) { return setName_dyn(); }
		if (HX_FIELD_EQ(inName,"getName") ) { return getName_dyn(); }
		if (HX_FIELD_EQ(inName,"graphic") ) { return inCallProp ? getGraphic() : graphic; }
		if (HX_FIELD_EQ(inName,"setMask") ) { return setMask_dyn(); }
		if (HX_FIELD_EQ(inName,"getMask") ) { return getMask_dyn(); }
		if (HX_FIELD_EQ(inName,"setType") ) { return setType_dyn(); }
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
		if (HX_FIELD_EQ(inName,"getLeft") ) { return getLeft_dyn(); }
		if (HX_FIELD_EQ(inName,"centerY") ) { return inCallProp ? getCenterY() : centerY; }
		if (HX_FIELD_EQ(inName,"centerX") ) { return inCallProp ? getCenterX() : centerX; }
		if (HX_FIELD_EQ(inName,"collide") ) { return collide_dyn(); }
		if (HX_FIELD_EQ(inName,"removed") ) { return removed_dyn(); }
		if (HX_FIELD_EQ(inName,"originY") ) { return originY; }
		if (HX_FIELD_EQ(inName,"originX") ) { return originX; }
		if (HX_FIELD_EQ(inName,"visible") ) { return visible; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_graphic") ) { return _graphic; }
		if (HX_FIELD_EQ(inName,"toString") ) { return toString_dyn(); }
		if (HX_FIELD_EQ(inName,"setLayer") ) { return setLayer_dyn(); }
		if (HX_FIELD_EQ(inName,"getLayer") ) { return getLayer_dyn(); }
		if (HX_FIELD_EQ(inName,"getRight") ) { return getRight_dyn(); }
		if (HX_FIELD_EQ(inName,"getWorld") ) { return getWorld_dyn(); }
		if (HX_FIELD_EQ(inName,"onCamera") ) { return inCallProp ? getOnCamera() : onCamera; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_typeNext") ) { return _typeNext; }
		if (HX_FIELD_EQ(inName,"_typePrev") ) { return _typePrev; }
		if (HX_FIELD_EQ(inName,"setOrigin") ) { return setOrigin_dyn(); }
		if (HX_FIELD_EQ(inName,"setHitbox") ) { return setHitbox_dyn(); }
		if (HX_FIELD_EQ(inName,"getBottom") ) { return getBottom_dyn(); }
		if (HX_FIELD_EQ(inName,"halfWidth") ) { return inCallProp ? getHalfWidth() : halfWidth; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"addGraphic") ) { return addGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"setGraphic") ) { return setGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"getGraphic") ) { return getGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"getCenterY") ) { return getCenterY_dyn(); }
		if (HX_FIELD_EQ(inName,"getCenterX") ) { return getCenterX_dyn(); }
		if (HX_FIELD_EQ(inName,"halfHeight") ) { return inCallProp ? getHalfHeight() : halfHeight; }
		if (HX_FIELD_EQ(inName,"collidable") ) { return collidable; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_renderNext") ) { return _renderNext; }
		if (HX_FIELD_EQ(inName,"_renderPrev") ) { return _renderPrev; }
		if (HX_FIELD_EQ(inName,"_updateNext") ) { return _updateNext; }
		if (HX_FIELD_EQ(inName,"_updatePrev") ) { return _updatePrev; }
		if (HX_FIELD_EQ(inName,"moveTowards") ) { return moveTowards_dyn(); }
		if (HX_FIELD_EQ(inName,"setHitboxTo") ) { return setHitboxTo_dyn(); }
		if (HX_FIELD_EQ(inName,"getOnCamera") ) { return getOnCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"collideInto") ) { return collideInto_dyn(); }
		if (HX_FIELD_EQ(inName,"collideRect") ) { return collideRect_dyn(); }
		if (HX_FIELD_EQ(inName,"collideWith") ) { return collideWith_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_recycleNext") ) { return _recycleNext; }
		if (HX_FIELD_EQ(inName,"moveCollideY") ) { return moveCollideY_dyn(); }
		if (HX_FIELD_EQ(inName,"moveCollideX") ) { return moveCollideX_dyn(); }
		if (HX_FIELD_EQ(inName,"distanceFrom") ) { return distanceFrom_dyn(); }
		if (HX_FIELD_EQ(inName,"centerOrigin") ) { return centerOrigin_dyn(); }
		if (HX_FIELD_EQ(inName,"getHalfWidth") ) { return getHalfWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"collidePoint") ) { return collidePoint_dyn(); }
		if (HX_FIELD_EQ(inName,"collideTypes") ) { return collideTypes_dyn(); }
		if (HX_FIELD_EQ(inName,"renderTarget") ) { return renderTarget; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"clampVertical") ) { return clampVertical_dyn(); }
		if (HX_FIELD_EQ(inName,"getHalfHeight") ) { return getHalfHeight_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"distanceToRect") ) { return distanceToRect_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"clampHorizontal") ) { return clampHorizontal_dyn(); }
		if (HX_FIELD_EQ(inName,"distanceToPoint") ) { return distanceToPoint_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"collideTypesInto") ) { return collideTypesInto_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Entity_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { y=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"x") ) { x=inValue.Cast< Float >(); return inValue; }
		break;
	case 2:
		if (HX_FIELD_EQ(inName,"_y") ) { _y=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_x") ) { _x=inValue.Cast< Float >(); return inValue; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"top") ) { top=inValue.Cast< Float >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { if (inCallProp) return setName(inValue);name=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mask") ) { if (inCallProp) return setMask(inValue);mask=inValue.Cast< ::com::haxepunk::Mask >(); return inValue; }
		if (HX_FIELD_EQ(inName,"type") ) { if (inCallProp) return setType(inValue);type=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"left") ) { left=inValue.Cast< Float >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_mask") ) { _mask=inValue.Cast< ::com::haxepunk::Mask >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_name") ) { _name=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_type") ) { _type=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"layer") ) { if (inCallProp) return setLayer(inValue);layer=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"right") ) { right=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"world") ) { world=inValue.Cast< ::com::haxepunk::World >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_point") ) { _point=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_moveY") ) { _moveY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_moveX") ) { _moveX=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"HITBOX") ) { HITBOX=inValue.Cast< ::com::haxepunk::Mask >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_layer") ) { _layer=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_world") ) { _world=inValue.Cast< ::com::haxepunk::World >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_class") ) { _class=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"bottom") ) { bottom=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_camera") ) { _camera=inValue.Cast< ::native::geom::Point >(); return inValue; }
		if (HX_FIELD_EQ(inName,"graphic") ) { if (inCallProp) return setGraphic(inValue);graphic=inValue.Cast< ::com::haxepunk::Graphic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"centerY") ) { centerY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"centerX") ) { centerX=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originY") ) { originY=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originX") ) { originX=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"visible") ) { visible=inValue.Cast< bool >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_graphic") ) { _graphic=inValue.Cast< ::com::haxepunk::Graphic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"onCamera") ) { onCamera=inValue.Cast< bool >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_typeNext") ) { _typeNext=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_typePrev") ) { _typePrev=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"halfWidth") ) { halfWidth=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"halfHeight") ) { halfHeight=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"collidable") ) { collidable=inValue.Cast< bool >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_renderNext") ) { _renderNext=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_renderPrev") ) { _renderPrev=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_updateNext") ) { _updateNext=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_updatePrev") ) { _updatePrev=inValue.Cast< Dynamic >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_recycleNext") ) { _recycleNext=inValue.Cast< ::com::haxepunk::Entity >(); return inValue; }
		if (HX_FIELD_EQ(inName,"renderTarget") ) { renderTarget=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Entity_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_camera"));
	outFields->push(HX_CSTRING("_point"));
	outFields->push(HX_CSTRING("_graphic"));
	outFields->push(HX_CSTRING("_moveY"));
	outFields->push(HX_CSTRING("_moveX"));
	outFields->push(HX_CSTRING("_y"));
	outFields->push(HX_CSTRING("_x"));
	outFields->push(HX_CSTRING("_mask"));
	outFields->push(HX_CSTRING("HITBOX"));
	outFields->push(HX_CSTRING("_recycleNext"));
	outFields->push(HX_CSTRING("_typeNext"));
	outFields->push(HX_CSTRING("_typePrev"));
	outFields->push(HX_CSTRING("_renderNext"));
	outFields->push(HX_CSTRING("_renderPrev"));
	outFields->push(HX_CSTRING("_updateNext"));
	outFields->push(HX_CSTRING("_updatePrev"));
	outFields->push(HX_CSTRING("_name"));
	outFields->push(HX_CSTRING("_layer"));
	outFields->push(HX_CSTRING("_type"));
	outFields->push(HX_CSTRING("_world"));
	outFields->push(HX_CSTRING("_class"));
	outFields->push(HX_CSTRING("name"));
	outFields->push(HX_CSTRING("graphic"));
	outFields->push(HX_CSTRING("mask"));
	outFields->push(HX_CSTRING("type"));
	outFields->push(HX_CSTRING("layer"));
	outFields->push(HX_CSTRING("bottom"));
	outFields->push(HX_CSTRING("top"));
	outFields->push(HX_CSTRING("right"));
	outFields->push(HX_CSTRING("left"));
	outFields->push(HX_CSTRING("centerY"));
	outFields->push(HX_CSTRING("centerX"));
	outFields->push(HX_CSTRING("halfHeight"));
	outFields->push(HX_CSTRING("halfWidth"));
	outFields->push(HX_CSTRING("world"));
	outFields->push(HX_CSTRING("onCamera"));
	outFields->push(HX_CSTRING("renderTarget"));
	outFields->push(HX_CSTRING("originY"));
	outFields->push(HX_CSTRING("originX"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("y"));
	outFields->push(HX_CSTRING("x"));
	outFields->push(HX_CSTRING("collidable"));
	outFields->push(HX_CSTRING("visible"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_camera"),
	HX_CSTRING("_point"),
	HX_CSTRING("_graphic"),
	HX_CSTRING("_moveY"),
	HX_CSTRING("_moveX"),
	HX_CSTRING("_y"),
	HX_CSTRING("_x"),
	HX_CSTRING("_mask"),
	HX_CSTRING("HITBOX"),
	HX_CSTRING("_recycleNext"),
	HX_CSTRING("_typeNext"),
	HX_CSTRING("_typePrev"),
	HX_CSTRING("_renderNext"),
	HX_CSTRING("_renderPrev"),
	HX_CSTRING("_updateNext"),
	HX_CSTRING("_updatePrev"),
	HX_CSTRING("_name"),
	HX_CSTRING("_layer"),
	HX_CSTRING("_type"),
	HX_CSTRING("_world"),
	HX_CSTRING("_class"),
	HX_CSTRING("clampVertical"),
	HX_CSTRING("clampHorizontal"),
	HX_CSTRING("moveCollideY"),
	HX_CSTRING("moveCollideX"),
	HX_CSTRING("moveTowards"),
	HX_CSTRING("moveTo"),
	HX_CSTRING("moveBy"),
	HX_CSTRING("toString"),
	HX_CSTRING("distanceToRect"),
	HX_CSTRING("distanceToPoint"),
	HX_CSTRING("distanceFrom"),
	HX_CSTRING("centerOrigin"),
	HX_CSTRING("setOrigin"),
	HX_CSTRING("setHitboxTo"),
	HX_CSTRING("setHitbox"),
	HX_CSTRING("addGraphic"),
	HX_CSTRING("setName"),
	HX_CSTRING("getName"),
	HX_CSTRING("name"),
	HX_CSTRING("setGraphic"),
	HX_CSTRING("getGraphic"),
	HX_CSTRING("graphic"),
	HX_CSTRING("setMask"),
	HX_CSTRING("getMask"),
	HX_CSTRING("mask"),
	HX_CSTRING("setType"),
	HX_CSTRING("getType"),
	HX_CSTRING("type"),
	HX_CSTRING("setLayer"),
	HX_CSTRING("getLayer"),
	HX_CSTRING("layer"),
	HX_CSTRING("getBottom"),
	HX_CSTRING("bottom"),
	HX_CSTRING("getTop"),
	HX_CSTRING("top"),
	HX_CSTRING("getRight"),
	HX_CSTRING("right"),
	HX_CSTRING("getLeft"),
	HX_CSTRING("left"),
	HX_CSTRING("getCenterY"),
	HX_CSTRING("centerY"),
	HX_CSTRING("getCenterX"),
	HX_CSTRING("centerX"),
	HX_CSTRING("getHalfHeight"),
	HX_CSTRING("halfHeight"),
	HX_CSTRING("getHalfWidth"),
	HX_CSTRING("halfWidth"),
	HX_CSTRING("getWorld"),
	HX_CSTRING("world"),
	HX_CSTRING("getOnCamera"),
	HX_CSTRING("onCamera"),
	HX_CSTRING("collideTypesInto"),
	HX_CSTRING("collideInto"),
	HX_CSTRING("collidePoint"),
	HX_CSTRING("collideRect"),
	HX_CSTRING("collideWith"),
	HX_CSTRING("collideTypes"),
	HX_CSTRING("collide"),
	HX_CSTRING("render"),
	HX_CSTRING("update"),
	HX_CSTRING("removed"),
	HX_CSTRING("added"),
	HX_CSTRING("renderTarget"),
	HX_CSTRING("originY"),
	HX_CSTRING("originX"),
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	HX_CSTRING("y"),
	HX_CSTRING("x"),
	HX_CSTRING("collidable"),
	HX_CSTRING("visible"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Entity_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Entity_obj::__mClass,"__mClass");
};

Class Entity_obj::__mClass;

void Entity_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.Entity"), hx::TCanCast< Entity_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Entity_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
