#include <hxcpp.h>

#ifndef INCLUDED_GameWorld
#include <GameWorld.h>
#endif
#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_World
#include <com/haxepunk/World.h>
#endif
#ifndef INCLUDED_entities_Hero
#include <entities/Hero.h>
#endif
#ifndef INCLUDED_entities_Wall
#include <entities/Wall.h>
#endif

Void GameWorld_obj::__construct()
{
HX_STACK_PUSH("GameWorld::new","GameWorld.hx",15);
{
	HX_STACK_LINE(15)
	super::__construct();
}
;
	return null();
}

GameWorld_obj::~GameWorld_obj() { }

Dynamic GameWorld_obj::__CreateEmpty() { return  new GameWorld_obj; }
hx::ObjectPtr< GameWorld_obj > GameWorld_obj::__new()
{  hx::ObjectPtr< GameWorld_obj > result = new GameWorld_obj();
	result->__construct();
	return result;}

Dynamic GameWorld_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< GameWorld_obj > result = new GameWorld_obj();
	result->__construct();
	return result;}

Void GameWorld_obj::begin( ){
{
		HX_STACK_PUSH("GameWorld::begin","GameWorld.hx",19);
		HX_STACK_THIS(this);
		HX_STACK_LINE(20)
		this->hero = ::entities::Hero_obj::__new((int)30,(int)50);
		HX_STACK_LINE(21)
		this->add(this->hero);
		HX_STACK_LINE(23)
		{
			HX_STACK_LINE(23)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(23)
			while(((_g < (int)20))){
				HX_STACK_LINE(23)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(24)
				this->add(::entities::Wall_obj::__new(i,(int)0));
				HX_STACK_LINE(25)
				this->add(::entities::Wall_obj::__new(i,(int)14));
			}
		}
		HX_STACK_LINE(27)
		{
			HX_STACK_LINE(27)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(27)
			while(((_g < (int)14))){
				HX_STACK_LINE(27)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(28)
				this->add(::entities::Wall_obj::__new((int)0,i));
				HX_STACK_LINE(29)
				this->add(::entities::Wall_obj::__new((int)19,i));
			}
		}
		HX_STACK_LINE(31)
		{
			HX_STACK_LINE(31)
			int _g = (int)1;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(31)
			while(((_g < (int)5))){
				HX_STACK_LINE(31)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(32)
				this->add(::entities::Wall_obj::__new(((int)5 - i),((int)14 - i)));
				HX_STACK_LINE(33)
				this->add(::entities::Wall_obj::__new(((int)8 + i),((int)5 + i)));
				HX_STACK_LINE(34)
				this->add(::entities::Wall_obj::__new(((int)2 + i),((int)10 - i)));
				HX_STACK_LINE(35)
				this->add(::entities::Wall_obj::__new(((int)13 + i),((int)8 - i)));
			}
		}
	}
return null();
}



GameWorld_obj::GameWorld_obj()
{
}

void GameWorld_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(GameWorld);
	HX_MARK_MEMBER_NAME(hero,"hero");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void GameWorld_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(hero,"hero");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic GameWorld_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"hero") ) { return hero; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"begin") ) { return begin_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic GameWorld_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"hero") ) { hero=inValue.Cast< ::entities::Hero >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void GameWorld_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("hero"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("begin"),
	HX_CSTRING("hero"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(GameWorld_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(GameWorld_obj::__mClass,"__mClass");
};

Class GameWorld_obj::__mClass;

void GameWorld_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("GameWorld"), hx::TCanCast< GameWorld_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void GameWorld_obj::__boot()
{
}

