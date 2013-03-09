#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_utils_JoyButtonState
#include <com/haxepunk/utils/JoyButtonState.h>
#endif
namespace com{
namespace haxepunk{
namespace utils{

::com::haxepunk::utils::JoyButtonState JoyButtonState_obj::BUTTON_OFF;

::com::haxepunk::utils::JoyButtonState JoyButtonState_obj::BUTTON_ON;

::com::haxepunk::utils::JoyButtonState JoyButtonState_obj::BUTTON_PRESSED;

HX_DEFINE_CREATE_ENUM(JoyButtonState_obj)

int JoyButtonState_obj::__FindIndex(::String inName)
{
	if (inName==HX_CSTRING("BUTTON_OFF")) return 1;
	if (inName==HX_CSTRING("BUTTON_ON")) return 0;
	if (inName==HX_CSTRING("BUTTON_PRESSED")) return 2;
	return super::__FindIndex(inName);
}

int JoyButtonState_obj::__FindArgCount(::String inName)
{
	if (inName==HX_CSTRING("BUTTON_OFF")) return 0;
	if (inName==HX_CSTRING("BUTTON_ON")) return 0;
	if (inName==HX_CSTRING("BUTTON_PRESSED")) return 0;
	return super::__FindArgCount(inName);
}

Dynamic JoyButtonState_obj::__Field(const ::String &inName,bool inCallProp)
{
	if (inName==HX_CSTRING("BUTTON_OFF")) return BUTTON_OFF;
	if (inName==HX_CSTRING("BUTTON_ON")) return BUTTON_ON;
	if (inName==HX_CSTRING("BUTTON_PRESSED")) return BUTTON_PRESSED;
	return super::__Field(inName,inCallProp);
}

static ::String sStaticFields[] = {
	HX_CSTRING("BUTTON_ON"),
	HX_CSTRING("BUTTON_OFF"),
	HX_CSTRING("BUTTON_PRESSED"),
	::String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(JoyButtonState_obj::BUTTON_OFF,"BUTTON_OFF");
	HX_MARK_MEMBER_NAME(JoyButtonState_obj::BUTTON_ON,"BUTTON_ON");
	HX_MARK_MEMBER_NAME(JoyButtonState_obj::BUTTON_PRESSED,"BUTTON_PRESSED");
};

static void sVisitStatic(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(JoyButtonState_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(JoyButtonState_obj::BUTTON_OFF,"BUTTON_OFF");
	HX_VISIT_MEMBER_NAME(JoyButtonState_obj::BUTTON_ON,"BUTTON_ON");
	HX_VISIT_MEMBER_NAME(JoyButtonState_obj::BUTTON_PRESSED,"BUTTON_PRESSED");
};

static ::String sMemberFields[] = { ::String(null()) };
Class JoyButtonState_obj::__mClass;

Dynamic __Create_JoyButtonState_obj() { return new JoyButtonState_obj; }

void JoyButtonState_obj::__register()
{

Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.utils.JoyButtonState"), hx::TCanCast< JoyButtonState_obj >,sStaticFields,sMemberFields,
	&__Create_JoyButtonState_obj, &__Create,
	&super::__SGetClass(), &CreateJoyButtonState_obj, sMarkStatics, sVisitStatic);
}

void JoyButtonState_obj::__boot()
{
Static(BUTTON_OFF) = hx::CreateEnum< JoyButtonState_obj >(HX_CSTRING("BUTTON_OFF"),1);
Static(BUTTON_ON) = hx::CreateEnum< JoyButtonState_obj >(HX_CSTRING("BUTTON_ON"),0);
Static(BUTTON_PRESSED) = hx::CreateEnum< JoyButtonState_obj >(HX_CSTRING("BUTTON_PRESSED"),2);
}


} // end namespace com
} // end namespace haxepunk
} // end namespace utils
