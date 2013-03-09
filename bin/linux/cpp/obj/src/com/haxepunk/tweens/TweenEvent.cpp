#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_tweens_TweenEvent
#include <com/haxepunk/tweens/TweenEvent.h>
#endif
#ifndef INCLUDED_native_events_Event
#include <native/events/Event.h>
#endif
namespace com{
namespace haxepunk{
namespace tweens{

Void TweenEvent_obj::__construct(::String type,Dynamic bubbles,Dynamic cancelable)
{
HX_STACK_PUSH("TweenEvent::new","com/haxepunk/tweens/TweenEvent.hx",5);
{
	HX_STACK_LINE(5)
	super::__construct(type,bubbles,cancelable);
}
;
	return null();
}

TweenEvent_obj::~TweenEvent_obj() { }

Dynamic TweenEvent_obj::__CreateEmpty() { return  new TweenEvent_obj; }
hx::ObjectPtr< TweenEvent_obj > TweenEvent_obj::__new(::String type,Dynamic bubbles,Dynamic cancelable)
{  hx::ObjectPtr< TweenEvent_obj > result = new TweenEvent_obj();
	result->__construct(type,bubbles,cancelable);
	return result;}

Dynamic TweenEvent_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TweenEvent_obj > result = new TweenEvent_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

::String TweenEvent_obj::START;

::String TweenEvent_obj::UPDATE;

::String TweenEvent_obj::FINISH;


TweenEvent_obj::TweenEvent_obj()
{
}

void TweenEvent_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TweenEvent);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void TweenEvent_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic TweenEvent_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"START") ) { return START; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"UPDATE") ) { return UPDATE; }
		if (HX_FIELD_EQ(inName,"FINISH") ) { return FINISH; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TweenEvent_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"START") ) { START=inValue.Cast< ::String >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"UPDATE") ) { UPDATE=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"FINISH") ) { FINISH=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TweenEvent_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("START"),
	HX_CSTRING("UPDATE"),
	HX_CSTRING("FINISH"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TweenEvent_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(TweenEvent_obj::START,"START");
	HX_MARK_MEMBER_NAME(TweenEvent_obj::UPDATE,"UPDATE");
	HX_MARK_MEMBER_NAME(TweenEvent_obj::FINISH,"FINISH");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TweenEvent_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(TweenEvent_obj::START,"START");
	HX_VISIT_MEMBER_NAME(TweenEvent_obj::UPDATE,"UPDATE");
	HX_VISIT_MEMBER_NAME(TweenEvent_obj::FINISH,"FINISH");
};

Class TweenEvent_obj::__mClass;

void TweenEvent_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.tweens.TweenEvent"), hx::TCanCast< TweenEvent_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void TweenEvent_obj::__boot()
{
	START= HX_CSTRING("start");
	UPDATE= HX_CSTRING("update");
	FINISH= HX_CSTRING("finish");
}

} // end namespace com
} // end namespace haxepunk
} // end namespace tweens
