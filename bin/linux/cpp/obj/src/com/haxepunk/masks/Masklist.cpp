#include <hxcpp.h>

#ifndef INCLUDED_Lambda
#include <Lambda.h>
#endif
#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
#endif
#ifndef INCLUDED_com_haxepunk_Mask
#include <com/haxepunk/Mask.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_masks_Hitbox
#include <com/haxepunk/masks/Hitbox.h>
#endif
#ifndef INCLUDED_com_haxepunk_masks_Masklist
#include <com/haxepunk/masks/Masklist.h>
#endif
#ifndef INCLUDED_native_display_Graphics
#include <native/display/Graphics.h>
#endif
namespace com{
namespace haxepunk{
namespace masks{

Void Masklist_obj::__construct(Dynamic masks)
{
HX_STACK_PUSH("Masklist::new","com/haxepunk/masks/Masklist.hx",18);
{
	HX_STACK_LINE(19)
	super::__construct(null(),null(),null(),null());
	HX_STACK_LINE(20)
	this->_masks = Array_obj< ::com::haxepunk::Mask >::__new();
	HX_STACK_LINE(21)
	this->_temp = Array_obj< ::com::haxepunk::Mask >::__new();
	HX_STACK_LINE(22)
	this->_count = (int)0;
	HX_STACK_LINE(24)
	{
		HX_STACK_LINE(24)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(24)
		while(((_g < masks->__Field(HX_CSTRING("length"),true)))){
			HX_STACK_LINE(24)
			Dynamic m = masks->__GetItem(_g);		HX_STACK_VAR(m,"m");
			HX_STACK_LINE(24)
			++(_g);
			HX_STACK_LINE(24)
			this->add(m);
		}
	}
}
;
	return null();
}

Masklist_obj::~Masklist_obj() { }

Dynamic Masklist_obj::__CreateEmpty() { return  new Masklist_obj; }
hx::ObjectPtr< Masklist_obj > Masklist_obj::__new(Dynamic masks)
{  hx::ObjectPtr< Masklist_obj > result = new Masklist_obj();
	result->__construct(masks);
	return result;}

Dynamic Masklist_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Masklist_obj > result = new Masklist_obj();
	result->__construct(inArgs[0]);
	return result;}

int Masklist_obj::getCount( ){
	HX_STACK_PUSH("Masklist::getCount","com/haxepunk/masks/Masklist.hx",175);
	HX_STACK_THIS(this);
	HX_STACK_LINE(175)
	return this->_count;
}


HX_DEFINE_DYNAMIC_FUNC0(Masklist_obj,getCount,return )

Void Masklist_obj::debugDraw( ::native::display::Graphics graphics,Float scaleX,Float scaleY){
{
		HX_STACK_PUSH("Masklist::debugDraw","com/haxepunk/masks/Masklist.hx",167);
		HX_STACK_THIS(this);
		HX_STACK_ARG(graphics,"graphics");
		HX_STACK_ARG(scaleX,"scaleX");
		HX_STACK_ARG(scaleY,"scaleY");
		HX_STACK_LINE(168)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(168)
		while(((_g < _g1->length))){
			HX_STACK_LINE(168)
			::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
			HX_STACK_LINE(168)
			++(_g);
			HX_STACK_LINE(168)
			m->debugDraw(graphics,scaleX,scaleY);
		}
	}
return null();
}


Void Masklist_obj::update( ){
{
		HX_STACK_PUSH("Masklist::update","com/haxepunk/masks/Masklist.hx",144);
		HX_STACK_THIS(this);
		HX_STACK_LINE(146)
		int t = (int)0;		HX_STACK_VAR(t,"t");
		int l = (int)0;		HX_STACK_VAR(l,"l");
		int r = (int)0;		HX_STACK_VAR(r,"r");
		int b = (int)0;		HX_STACK_VAR(b,"b");
		::com::haxepunk::masks::Hitbox h;		HX_STACK_VAR(h,"h");
		HX_STACK_LINE(147)
		{
			HX_STACK_LINE(147)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(147)
			while(((_g < _g1->length))){
				HX_STACK_LINE(147)
				::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
				HX_STACK_LINE(147)
				++(_g);
				HX_STACK_LINE(149)
				if ((((h = hx::TCast< com::haxepunk::masks::Hitbox >::cast(m)) != null()))){
					HX_STACK_LINE(151)
					if (((h->getX() < l))){
						HX_STACK_LINE(151)
						l = h->getX();
					}
					HX_STACK_LINE(152)
					if (((h->getY() < t))){
						HX_STACK_LINE(152)
						t = h->getY();
					}
					HX_STACK_LINE(153)
					if ((((h->getX() + h->getWidth()) > r))){
						HX_STACK_LINE(153)
						r = (h->getX() + h->getWidth());
					}
					HX_STACK_LINE(154)
					if ((((h->getY() + h->getHeight()) > b))){
						HX_STACK_LINE(154)
						b = (h->getY() + h->getHeight());
					}
				}
			}
		}
		HX_STACK_LINE(159)
		this->_x = l;
		HX_STACK_LINE(160)
		this->_y = t;
		HX_STACK_LINE(161)
		this->_width = (r - l);
		HX_STACK_LINE(162)
		this->_height = (b - t);
		HX_STACK_LINE(163)
		this->super::update();
	}
return null();
}


Void Masklist_obj::assignTo( ::com::haxepunk::Entity parent){
{
		HX_STACK_PUSH("Masklist::assignTo","com/haxepunk/masks/Masklist.hx",137);
		HX_STACK_THIS(this);
		HX_STACK_ARG(parent,"parent");
		HX_STACK_LINE(138)
		{
			HX_STACK_LINE(138)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(138)
			while(((_g < _g1->length))){
				HX_STACK_LINE(138)
				::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
				HX_STACK_LINE(138)
				++(_g);
				HX_STACK_LINE(138)
				m->parent = parent;
			}
		}
		HX_STACK_LINE(139)
		this->super::assignTo(parent);
	}
return null();
}


::com::haxepunk::Mask Masklist_obj::getMask( hx::Null< int >  __o_index){
int index = __o_index.Default(0);
	HX_STACK_PUSH("Masklist::getMask","com/haxepunk/masks/Masklist.hx",132);
	HX_STACK_THIS(this);
	HX_STACK_ARG(index,"index");
{
		HX_STACK_LINE(132)
		return this->_masks->__get(hx::Mod(index,this->_masks->length));
	}
}


HX_DEFINE_DYNAMIC_FUNC1(Masklist_obj,getMask,return )

Void Masklist_obj::removeAll( ){
{
		HX_STACK_PUSH("Masklist::removeAll","com/haxepunk/masks/Masklist.hx",118);
		HX_STACK_THIS(this);
		HX_STACK_LINE(119)
		{
			HX_STACK_LINE(119)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(119)
			while(((_g < _g1->length))){
				HX_STACK_LINE(119)
				::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
				HX_STACK_LINE(119)
				++(_g);
				HX_STACK_LINE(119)
				m->list = null();
			}
		}
		HX_STACK_LINE(120)
		this->_count = (int)0;
		HX_STACK_LINE(121)
		{
			HX_STACK_LINE(121)
			Dynamic array = this->_masks;		HX_STACK_VAR(array,"array");
			HX_STACK_LINE(121)
			array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
		}
		HX_STACK_LINE(122)
		{
			HX_STACK_LINE(122)
			Dynamic array = this->_temp;		HX_STACK_VAR(array,"array");
			HX_STACK_LINE(122)
			array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
		}
		HX_STACK_LINE(123)
		this->update();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Masklist_obj,removeAll,(void))

Void Masklist_obj::removeAt( hx::Null< int >  __o_index){
int index = __o_index.Default(0);
	HX_STACK_PUSH("Masklist::removeAt","com/haxepunk/masks/Masklist.hx",95);
	HX_STACK_THIS(this);
	HX_STACK_ARG(index,"index");
{
		HX_STACK_LINE(96)
		{
			HX_STACK_LINE(96)
			Dynamic array = this->_temp;		HX_STACK_VAR(array,"array");
			HX_STACK_LINE(96)
			array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
		}
		HX_STACK_LINE(97)
		int i = this->_masks->length;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(98)
		hx::ModEq(index,i);
		HX_STACK_LINE(99)
		while((((i)-- > (int)0))){
			HX_STACK_LINE(100)
			if (((i == index))){
				HX_STACK_LINE(103)
				this->_masks->__get(index)->list = null();
				HX_STACK_LINE(104)
				(this->_count)--;
				HX_STACK_LINE(105)
				this->update();
			}
			else{
				HX_STACK_LINE(107)
				this->_temp[this->_temp->length] = this->_masks->__get(index);
			}
		}
		HX_STACK_LINE(109)
		Array< ::com::haxepunk::Mask > temp = this->_masks;		HX_STACK_VAR(temp,"temp");
		HX_STACK_LINE(110)
		this->_masks = this->_temp;
		HX_STACK_LINE(111)
		this->_temp = temp;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Masklist_obj,removeAt,(void))

::com::haxepunk::Mask Masklist_obj::remove( ::com::haxepunk::Mask mask){
	HX_STACK_PUSH("Masklist::remove","com/haxepunk/masks/Masklist.hx",70);
	HX_STACK_THIS(this);
	HX_STACK_ARG(mask,"mask");
	HX_STACK_LINE(71)
	if (((::Lambda_obj::indexOf(this->_masks,mask) < (int)0))){
		HX_STACK_LINE(71)
		return mask;
	}
	HX_STACK_LINE(72)
	{
		HX_STACK_LINE(72)
		Dynamic array = this->_temp;		HX_STACK_VAR(array,"array");
		HX_STACK_LINE(72)
		array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
	}
	HX_STACK_LINE(73)
	{
		HX_STACK_LINE(73)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(73)
		while(((_g < _g1->length))){
			HX_STACK_LINE(73)
			::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
			HX_STACK_LINE(73)
			++(_g);
			HX_STACK_LINE(75)
			if (((m == mask))){
				HX_STACK_LINE(77)
				mask->list = null();
				HX_STACK_LINE(78)
				mask->parent = null();
				HX_STACK_LINE(79)
				(this->_count)--;
				HX_STACK_LINE(80)
				this->update();
			}
			else{
				HX_STACK_LINE(82)
				this->_temp[this->_temp->length] = m;
			}
		}
	}
	HX_STACK_LINE(84)
	Array< ::com::haxepunk::Mask > temp = this->_masks;		HX_STACK_VAR(temp,"temp");
	HX_STACK_LINE(85)
	this->_masks = this->_temp;
	HX_STACK_LINE(86)
	this->_temp = temp;
	HX_STACK_LINE(87)
	return mask;
}


HX_DEFINE_DYNAMIC_FUNC1(Masklist_obj,remove,return )

::com::haxepunk::Mask Masklist_obj::add( ::com::haxepunk::Mask mask){
	HX_STACK_PUSH("Masklist::add","com/haxepunk/masks/Masklist.hx",56);
	HX_STACK_THIS(this);
	HX_STACK_ARG(mask,"mask");
	HX_STACK_LINE(57)
	this->_masks[(this->_count)++] = mask;
	HX_STACK_LINE(58)
	mask->list = hx::ObjectPtr<OBJ_>(this);
	HX_STACK_LINE(59)
	mask->parent = this->parent;
	HX_STACK_LINE(60)
	this->update();
	HX_STACK_LINE(61)
	return mask;
}


HX_DEFINE_DYNAMIC_FUNC1(Masklist_obj,add,return )

bool Masklist_obj::collideMasklist( ::com::haxepunk::masks::Masklist other){
	HX_STACK_PUSH("Masklist::collideMasklist","com/haxepunk/masks/Masklist.hx",39);
	HX_STACK_THIS(this);
	HX_STACK_ARG(other,"other");
	HX_STACK_LINE(40)
	{
		HX_STACK_LINE(40)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(40)
		while(((_g < _g1->length))){
			HX_STACK_LINE(40)
			::com::haxepunk::Mask a = _g1->__get(_g);		HX_STACK_VAR(a,"a");
			HX_STACK_LINE(40)
			++(_g);
			HX_STACK_LINE(42)
			{
				HX_STACK_LINE(42)
				int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
				Array< ::com::haxepunk::Mask > _g3 = other->_masks;		HX_STACK_VAR(_g3,"_g3");
				HX_STACK_LINE(42)
				while(((_g2 < _g3->length))){
					HX_STACK_LINE(42)
					::com::haxepunk::Mask b = _g3->__get(_g2);		HX_STACK_VAR(b,"b");
					HX_STACK_LINE(42)
					++(_g2);
					HX_STACK_LINE(44)
					if ((a->collide(b))){
						HX_STACK_LINE(44)
						return true;
					}
				}
			}
		}
	}
	HX_STACK_LINE(47)
	return true;
}


bool Masklist_obj::collide( ::com::haxepunk::Mask mask){
	HX_STACK_PUSH("Masklist::collide","com/haxepunk/masks/Masklist.hx",29);
	HX_STACK_THIS(this);
	HX_STACK_ARG(mask,"mask");
	HX_STACK_LINE(30)
	{
		HX_STACK_LINE(30)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::com::haxepunk::Mask > _g1 = this->_masks;		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(30)
		while(((_g < _g1->length))){
			HX_STACK_LINE(30)
			::com::haxepunk::Mask m = _g1->__get(_g);		HX_STACK_VAR(m,"m");
			HX_STACK_LINE(30)
			++(_g);
			HX_STACK_LINE(32)
			if ((m->collide(mask))){
				HX_STACK_LINE(32)
				return true;
			}
		}
	}
	HX_STACK_LINE(34)
	return false;
}



Masklist_obj::Masklist_obj()
{
}

void Masklist_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Masklist);
	HX_MARK_MEMBER_NAME(_count,"_count");
	HX_MARK_MEMBER_NAME(_temp,"_temp");
	HX_MARK_MEMBER_NAME(_masks,"_masks");
	HX_MARK_MEMBER_NAME(count,"count");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Masklist_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_count,"_count");
	HX_VISIT_MEMBER_NAME(_temp,"_temp");
	HX_VISIT_MEMBER_NAME(_masks,"_masks");
	HX_VISIT_MEMBER_NAME(count,"count");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Masklist_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_temp") ) { return _temp; }
		if (HX_FIELD_EQ(inName,"count") ) { return inCallProp ? getCount() : count; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_count") ) { return _count; }
		if (HX_FIELD_EQ(inName,"_masks") ) { return _masks; }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"remove") ) { return remove_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getMask") ) { return getMask_dyn(); }
		if (HX_FIELD_EQ(inName,"collide") ) { return collide_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getCount") ) { return getCount_dyn(); }
		if (HX_FIELD_EQ(inName,"assignTo") ) { return assignTo_dyn(); }
		if (HX_FIELD_EQ(inName,"removeAt") ) { return removeAt_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"debugDraw") ) { return debugDraw_dyn(); }
		if (HX_FIELD_EQ(inName,"removeAll") ) { return removeAll_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"collideMasklist") ) { return collideMasklist_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Masklist_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"_temp") ) { _temp=inValue.Cast< Array< ::com::haxepunk::Mask > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"count") ) { count=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_count") ) { _count=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_masks") ) { _masks=inValue.Cast< Array< ::com::haxepunk::Mask > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Masklist_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_count"));
	outFields->push(HX_CSTRING("_temp"));
	outFields->push(HX_CSTRING("_masks"));
	outFields->push(HX_CSTRING("count"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_count"),
	HX_CSTRING("_temp"),
	HX_CSTRING("_masks"),
	HX_CSTRING("getCount"),
	HX_CSTRING("count"),
	HX_CSTRING("debugDraw"),
	HX_CSTRING("update"),
	HX_CSTRING("assignTo"),
	HX_CSTRING("getMask"),
	HX_CSTRING("removeAll"),
	HX_CSTRING("removeAt"),
	HX_CSTRING("remove"),
	HX_CSTRING("add"),
	HX_CSTRING("collideMasklist"),
	HX_CSTRING("collide"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Masklist_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Masklist_obj::__mClass,"__mClass");
};

Class Masklist_obj::__mClass;

void Masklist_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.masks.Masklist"), hx::TCanCast< Masklist_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Masklist_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace masks
