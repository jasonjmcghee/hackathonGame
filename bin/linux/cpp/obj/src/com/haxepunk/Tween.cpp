#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
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
#ifndef INCLUDED_com_haxepunk_tweens_TweenEvent
#include <com/haxepunk/tweens/TweenEvent.h>
#endif
#ifndef INCLUDED_native_events_Event
#include <native/events/Event.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
namespace com{
namespace haxepunk{

Void Tween_obj::__construct(Float duration,::com::haxepunk::TweenType type,Dynamic complete,Dynamic ease)
{
HX_STACK_PUSH("Tween::new","com/haxepunk/Tween.hx",40);
{
	HX_STACK_LINE(41)
	this->_target = duration;
	HX_STACK_LINE(42)
	if (((type == null()))){
		HX_STACK_LINE(42)
		type = ::com::haxepunk::TweenType_obj::Persist_dyn();
	}
	HX_STACK_LINE(43)
	this->_type = type;
	HX_STACK_LINE(44)
	this->_ease = ease;
	HX_STACK_LINE(45)
	this->_t = (int)0;
	HX_STACK_LINE(46)
	super::__construct(null());
	HX_STACK_LINE(48)
	if (((complete != null()))){
		HX_STACK_LINE(49)
		this->addEventListener(::com::haxepunk::tweens::TweenEvent_obj::FINISH,complete,null(),null(),null());
	}
}
;
	return null();
}

Tween_obj::~Tween_obj() { }

Dynamic Tween_obj::__CreateEmpty() { return  new Tween_obj; }
hx::ObjectPtr< Tween_obj > Tween_obj::__new(Float duration,::com::haxepunk::TweenType type,Dynamic complete,Dynamic ease)
{  hx::ObjectPtr< Tween_obj > result = new Tween_obj();
	result->__construct(duration,type,complete,ease);
	return result;}

Dynamic Tween_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Tween_obj > result = new Tween_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3]);
	return result;}

Float Tween_obj::getScale( ){
	HX_STACK_PUSH("Tween::getScale","com/haxepunk/Tween.hx",125);
	HX_STACK_THIS(this);
	HX_STACK_LINE(125)
	return this->_t;
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,getScale,return )

Float Tween_obj::setPercent( Float value){
	HX_STACK_PUSH("Tween::setPercent","com/haxepunk/Tween.hx",122);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(122)
	this->_time = (this->_target * value);
	HX_STACK_LINE(122)
	return this->_time;
}


HX_DEFINE_DYNAMIC_FUNC1(Tween_obj,setPercent,return )

Float Tween_obj::getPercent( ){
	HX_STACK_PUSH("Tween::getPercent","com/haxepunk/Tween.hx",121);
	HX_STACK_THIS(this);
	HX_STACK_LINE(121)
	return (Float(this->_time) / Float(this->_target));
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,getPercent,return )

Void Tween_obj::cancel( ){
{
		HX_STACK_PUSH("Tween::cancel","com/haxepunk/Tween.hx",112);
		HX_STACK_THIS(this);
		HX_STACK_LINE(113)
		this->active = false;
		HX_STACK_LINE(114)
		if (((this->_parent != null()))){
			HX_STACK_LINE(115)
			this->_parent->removeTween(hx::ObjectPtr<OBJ_>(this));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,cancel,(void))

Void Tween_obj::finish( ){
{
		HX_STACK_PUSH("Tween::finish","com/haxepunk/Tween.hx",88);
		HX_STACK_THIS(this);
		HX_STACK_LINE(89)
		{
			::com::haxepunk::TweenType _switch_1 = (this->_type);
			switch((_switch_1)->GetIndex()){
				case 0: {
					HX_STACK_LINE(92)
					this->_time = this->_target;
					HX_STACK_LINE(93)
					this->active = false;
				}
				;break;
				case 1: {
					HX_STACK_LINE(95)
					hx::ModEq(this->_time,this->_target);
					HX_STACK_LINE(96)
					this->_t = (Float(this->_time) / Float(this->_target));
					HX_STACK_LINE(97)
					if (((bool((bool((this->_ease_dyn() != null())) && bool((this->_t > (int)0)))) && bool((this->_t < (int)1))))){
						HX_STACK_LINE(97)
						this->_t = this->_ease(this->_t);
					}
					HX_STACK_LINE(98)
					this->start();
				}
				;break;
				case 2: {
					HX_STACK_LINE(100)
					this->_time = this->_target;
					HX_STACK_LINE(101)
					this->active = false;
					HX_STACK_LINE(102)
					this->_parent->removeTween(hx::ObjectPtr<OBJ_>(this));
				}
				;break;
			}
		}
		HX_STACK_LINE(104)
		this->_finish = false;
		HX_STACK_LINE(105)
		this->dispatchEvent(::com::haxepunk::tweens::TweenEvent_obj::__new(::com::haxepunk::tweens::TweenEvent_obj::FINISH,null(),null()));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,finish,(void))

Void Tween_obj::start( ){
{
		HX_STACK_PUSH("Tween::start","com/haxepunk/Tween.hx",74);
		HX_STACK_THIS(this);
		HX_STACK_LINE(75)
		this->_time = (int)0;
		HX_STACK_LINE(76)
		if (((this->_target == (int)0))){
			HX_STACK_LINE(78)
			this->active = false;
			HX_STACK_LINE(79)
			this->dispatchEvent(::com::haxepunk::tweens::TweenEvent_obj::__new(::com::haxepunk::tweens::TweenEvent_obj::FINISH,null(),null()));
			HX_STACK_LINE(80)
			return null();
		}
		HX_STACK_LINE(82)
		this->active = true;
		HX_STACK_LINE(83)
		this->dispatchEvent(::com::haxepunk::tweens::TweenEvent_obj::__new(::com::haxepunk::tweens::TweenEvent_obj::START,null(),null()));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,start,(void))

Void Tween_obj::update( ){
{
		HX_STACK_PUSH("Tween::update","com/haxepunk/Tween.hx",58);
		HX_STACK_THIS(this);
		HX_STACK_LINE(59)
		hx::AddEq(this->_time,(  ((::com::haxepunk::HXP_obj::fixed)) ? Float((int)1) : Float(::com::haxepunk::HXP_obj::elapsed) ));
		HX_STACK_LINE(60)
		this->_t = (Float(this->_time) / Float(this->_target));
		HX_STACK_LINE(61)
		if (((bool((bool((this->_ease_dyn() != null())) && bool((this->_t > (int)0)))) && bool((this->_t < (int)1))))){
			HX_STACK_LINE(61)
			this->_t = this->_ease(this->_t);
		}
		HX_STACK_LINE(62)
		if (((this->_time >= this->_target))){
			HX_STACK_LINE(64)
			this->_t = (int)1;
			HX_STACK_LINE(65)
			this->_finish = true;
		}
		HX_STACK_LINE(67)
		this->dispatchEvent(::com::haxepunk::tweens::TweenEvent_obj::__new(::com::haxepunk::tweens::TweenEvent_obj::UPDATE,null(),null()));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Tween_obj,update,(void))


Tween_obj::Tween_obj()
{
}

void Tween_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Tween);
	HX_MARK_MEMBER_NAME(_next,"_next");
	HX_MARK_MEMBER_NAME(_prev,"_prev");
	HX_MARK_MEMBER_NAME(_parent,"_parent");
	HX_MARK_MEMBER_NAME(_finish,"_finish");
	HX_MARK_MEMBER_NAME(_target,"_target");
	HX_MARK_MEMBER_NAME(_time,"_time");
	HX_MARK_MEMBER_NAME(_t,"_t");
	HX_MARK_MEMBER_NAME(_ease,"_ease");
	HX_MARK_MEMBER_NAME(_type,"_type");
	HX_MARK_MEMBER_NAME(scale,"scale");
	HX_MARK_MEMBER_NAME(percent,"percent");
	HX_MARK_MEMBER_NAME(active,"active");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Tween_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_next,"_next");
	HX_VISIT_MEMBER_NAME(_prev,"_prev");
	HX_VISIT_MEMBER_NAME(_parent,"_parent");
	HX_VISIT_MEMBER_NAME(_finish,"_finish");
	HX_VISIT_MEMBER_NAME(_target,"_target");
	HX_VISIT_MEMBER_NAME(_time,"_time");
	HX_VISIT_MEMBER_NAME(_t,"_t");
	HX_VISIT_MEMBER_NAME(_ease,"_ease");
	HX_VISIT_MEMBER_NAME(_type,"_type");
	HX_VISIT_MEMBER_NAME(scale,"scale");
	HX_VISIT_MEMBER_NAME(percent,"percent");
	HX_VISIT_MEMBER_NAME(active,"active");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Tween_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"_t") ) { return _t; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_next") ) { return _next; }
		if (HX_FIELD_EQ(inName,"_prev") ) { return _prev; }
		if (HX_FIELD_EQ(inName,"_time") ) { return _time; }
		if (HX_FIELD_EQ(inName,"_ease") ) { return _ease; }
		if (HX_FIELD_EQ(inName,"_type") ) { return _type; }
		if (HX_FIELD_EQ(inName,"scale") ) { return inCallProp ? getScale() : scale; }
		if (HX_FIELD_EQ(inName,"start") ) { return start_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"cancel") ) { return cancel_dyn(); }
		if (HX_FIELD_EQ(inName,"finish") ) { return finish_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"active") ) { return active; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_parent") ) { return _parent; }
		if (HX_FIELD_EQ(inName,"_finish") ) { return _finish; }
		if (HX_FIELD_EQ(inName,"_target") ) { return _target; }
		if (HX_FIELD_EQ(inName,"percent") ) { return inCallProp ? getPercent() : percent; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getScale") ) { return getScale_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"setPercent") ) { return setPercent_dyn(); }
		if (HX_FIELD_EQ(inName,"getPercent") ) { return getPercent_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Tween_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"_t") ) { _t=inValue.Cast< Float >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_next") ) { _next=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_prev") ) { _prev=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_time") ) { _time=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_ease") ) { _ease=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_type") ) { _type=inValue.Cast< ::com::haxepunk::TweenType >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scale") ) { scale=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"active") ) { active=inValue.Cast< bool >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_parent") ) { _parent=inValue.Cast< ::com::haxepunk::Tweener >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_finish") ) { _finish=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_target") ) { _target=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"percent") ) { if (inCallProp) return setPercent(inValue);percent=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Tween_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_next"));
	outFields->push(HX_CSTRING("_prev"));
	outFields->push(HX_CSTRING("_parent"));
	outFields->push(HX_CSTRING("_finish"));
	outFields->push(HX_CSTRING("_target"));
	outFields->push(HX_CSTRING("_time"));
	outFields->push(HX_CSTRING("_t"));
	outFields->push(HX_CSTRING("_type"));
	outFields->push(HX_CSTRING("scale"));
	outFields->push(HX_CSTRING("percent"));
	outFields->push(HX_CSTRING("active"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_next"),
	HX_CSTRING("_prev"),
	HX_CSTRING("_parent"),
	HX_CSTRING("_finish"),
	HX_CSTRING("_target"),
	HX_CSTRING("_time"),
	HX_CSTRING("_t"),
	HX_CSTRING("_ease"),
	HX_CSTRING("_type"),
	HX_CSTRING("getScale"),
	HX_CSTRING("scale"),
	HX_CSTRING("setPercent"),
	HX_CSTRING("getPercent"),
	HX_CSTRING("percent"),
	HX_CSTRING("cancel"),
	HX_CSTRING("finish"),
	HX_CSTRING("start"),
	HX_CSTRING("update"),
	HX_CSTRING("active"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Tween_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Tween_obj::__mClass,"__mClass");
};

Class Tween_obj::__mClass;

void Tween_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.Tween"), hx::TCanCast< Tween_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Tween_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
