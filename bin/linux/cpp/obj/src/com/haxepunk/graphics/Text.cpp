#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Image
#include <com/haxepunk/graphics/Image.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Text
#include <com/haxepunk/graphics/Text.h>
#endif
#ifndef INCLUDED_native_display_BitmapData
#include <native/display/BitmapData.h>
#endif
#ifndef INCLUDED_native_display_BlendMode
#include <native/display/BlendMode.h>
#endif
#ifndef INCLUDED_native_display_DisplayObject
#include <native/display/DisplayObject.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_display_InteractiveObject
#include <native/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_native_geom_ColorTransform
#include <native/geom/ColorTransform.h>
#endif
#ifndef INCLUDED_native_geom_Matrix
#include <native/geom/Matrix.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
#ifndef INCLUDED_native_text_Font
#include <native/text/Font.h>
#endif
#ifndef INCLUDED_native_text_TextField
#include <native/text/TextField.h>
#endif
#ifndef INCLUDED_native_text_TextFormat
#include <native/text/TextFormat.h>
#endif
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{

Void Text_obj::__construct(::String text,Dynamic __o_x,Dynamic __o_y,Dynamic __o_width,Dynamic __o_height,Dynamic options)
{
HX_STACK_PUSH("Text::new","com/haxepunk/graphics/Text.hx",42);
Dynamic x = __o_x.Default(0);
Dynamic y = __o_y.Default(0);
Dynamic width = __o_width.Default(0);
Dynamic height = __o_height.Default(0);
{
	HX_STACK_LINE(43)
	if (((options == null()))){
		struct _Function_2_1{
			inline static Dynamic Block( ){
				HX_STACK_PUSH("*::closure","com/haxepunk/graphics/Text.hx",45);
				{
					hx::Anon __result = hx::Anon_obj::Create();
					return __result;
				}
				return null();
			}
		};
		HX_STACK_LINE(45)
		options = _Function_2_1::Block();
		HX_STACK_LINE(46)
		options->__FieldRef(HX_CSTRING("color")) = (int)16777215;
	}
	HX_STACK_LINE(49)
	if (((options->__Field(HX_CSTRING("font"),true) == null()))){
		HX_STACK_LINE(49)
		options->__FieldRef(HX_CSTRING("font")) = ::com::haxepunk::HXP_obj::defaultFont;
	}
	HX_STACK_LINE(50)
	if (((options->__Field(HX_CSTRING("size"),true) == (int)0))){
		HX_STACK_LINE(50)
		options->__FieldRef(HX_CSTRING("size")) = (int)16;
	}
	HX_STACK_LINE(54)
	if (((options->__Field(HX_CSTRING("align"),true) == null()))){
		HX_STACK_LINE(54)
		options->__FieldRef(HX_CSTRING("align")) = HX_CSTRING("left");
	}
	HX_STACK_LINE(58)
	::native::text::Font fontObj = ::nme::installer::Assets_obj::getFont(options->__Field(HX_CSTRING("font"),true));		HX_STACK_VAR(fontObj,"fontObj");
	HX_STACK_LINE(59)
	this->_form = ::native::text::TextFormat_obj::__new(fontObj->fontName,options->__Field(HX_CSTRING("size"),true),options->__Field(HX_CSTRING("color"),true),null(),null(),null(),null(),null(),null(),null(),null(),null(),null());
	HX_STACK_LINE(63)
	this->_form->align = options->__Field(HX_CSTRING("align"),true);
	HX_STACK_LINE(64)
	this->_form->leading = options->__Field(HX_CSTRING("leading"),true);
	HX_STACK_LINE(66)
	this->_field = ::native::text::TextField_obj::__new();
	HX_STACK_LINE(70)
	this->_field->set_wordWrap(options->__Field(HX_CSTRING("wordWrap"),true));
	HX_STACK_LINE(71)
	this->_field->set_defaultTextFormat(this->_form);
	HX_STACK_LINE(72)
	this->_field->set_text(text);
	HX_STACK_LINE(74)
	this->resizable = options->__Field(HX_CSTRING("resizable"),true);
	HX_STACK_LINE(76)
	if (((width == (int)0))){
		HX_STACK_LINE(76)
		width = ::Std_obj::_int((this->_field->get_textWidth() + (int)4));
	}
	HX_STACK_LINE(77)
	if (((height == (int)0))){
		HX_STACK_LINE(77)
		height = ::Std_obj::_int((this->_field->get_textHeight() + (int)4));
	}
	HX_STACK_LINE(79)
	super::__construct(::com::haxepunk::HXP_obj::createBitmap(width,height,true,null()),null(),null());
	HX_STACK_LINE(81)
	this->setText(text);
	HX_STACK_LINE(82)
	this->x = x;
	HX_STACK_LINE(83)
	this->y = y;
}
;
	return null();
}

Text_obj::~Text_obj() { }

Dynamic Text_obj::__CreateEmpty() { return  new Text_obj; }
hx::ObjectPtr< Text_obj > Text_obj::__new(::String text,Dynamic __o_x,Dynamic __o_y,Dynamic __o_width,Dynamic __o_height,Dynamic options)
{  hx::ObjectPtr< Text_obj > result = new Text_obj();
	result->__construct(text,__o_x,__o_y,__o_width,__o_height,options);
	return result;}

Dynamic Text_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Text_obj > result = new Text_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4],inArgs[5]);
	return result;}

int Text_obj::setSize( int value){
	HX_STACK_PUSH("Text::setSize","com/haxepunk/graphics/Text.hx",162);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(163)
	if (((this->size == value))){
		HX_STACK_LINE(163)
		return value;
	}
	HX_STACK_LINE(164)
	this->_form->size = this->size = value;
	HX_STACK_LINE(165)
	this->updateBuffer(null());
	HX_STACK_LINE(166)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(Text_obj,setSize,return )

::String Text_obj::setFont( ::String value){
	HX_STACK_PUSH("Text::setFont","com/haxepunk/graphics/Text.hx",147);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(148)
	if (((this->font == value))){
		HX_STACK_LINE(148)
		return value;
	}
	HX_STACK_LINE(150)
	value = ::nme::installer::Assets_obj::getFont(value)->fontName;
	HX_STACK_LINE(152)
	this->_form->font = this->font = value;
	HX_STACK_LINE(153)
	this->updateBuffer(null());
	HX_STACK_LINE(154)
	return this->font;
}


HX_DEFINE_DYNAMIC_FUNC1(Text_obj,setFont,return )

::String Text_obj::setText( ::String value){
	HX_STACK_PUSH("Text::setText","com/haxepunk/graphics/Text.hx",135);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(136)
	if (((this->text == value))){
		HX_STACK_LINE(136)
		return value;
	}
	HX_STACK_LINE(137)
	this->_field->set_text(this->text = value);
	HX_STACK_LINE(138)
	this->updateBuffer(null());
	HX_STACK_LINE(139)
	return this->text;
}


HX_DEFINE_DYNAMIC_FUNC1(Text_obj,setText,return )

Void Text_obj::updateBuffer( hx::Null< bool >  __o_clearBefore){
bool clearBefore = __o_clearBefore.Default(false);
	HX_STACK_PUSH("Text::updateBuffer","com/haxepunk/graphics/Text.hx",88);
	HX_STACK_THIS(this);
	HX_STACK_ARG(clearBefore,"clearBefore");
{
		HX_STACK_LINE(89)
		this->_field->setTextFormat(this->_form,null(),null());
		HX_STACK_LINE(91)
		this->_field->set_width(this->getWidth());
		HX_STACK_LINE(92)
		this->_field->set_width(this->textWidth = ::Math_obj::ceil((this->_field->get_textWidth() + (int)4)));
		HX_STACK_LINE(93)
		this->_field->set_height(this->textHeight = ::Math_obj::ceil((this->_field->get_textHeight() + (int)4)));
		HX_STACK_LINE(95)
		if ((this->resizable)){
			HX_STACK_LINE(97)
			this->_bufferRect->width = this->textWidth;
			HX_STACK_LINE(98)
			this->_bufferRect->height = this->textHeight;
		}
		HX_STACK_LINE(101)
		if (((bool((this->textWidth > this->_source->get_width())) || bool((this->textHeight > this->_source->get_height()))))){
			HX_STACK_LINE(103)
			this->_source = ::com::haxepunk::HXP_obj::createBitmap(::Std_obj::_int(::Math_obj::max(this->textWidth,this->_source->get_width())),::Std_obj::_int(::Math_obj::max(this->textHeight,this->_source->get_height())),true,null());
			HX_STACK_LINE(108)
			this->_sourceRect = this->_source->get_rect();
			HX_STACK_LINE(109)
			this->createBuffer();
		}
		else{
			HX_STACK_LINE(112)
			this->_source->fillRect(this->_sourceRect,(int)0);
		}
		HX_STACK_LINE(116)
		if ((this->resizable)){
			HX_STACK_LINE(118)
			this->_field->set_width(this->textWidth);
			HX_STACK_LINE(119)
			this->_field->set_height(this->textHeight);
		}
		HX_STACK_LINE(122)
		(hx::TCast< native::display::BitmapData >::cast(this->_source))->draw(this->_field,null(),null(),null(),null(),null());
		HX_STACK_LINE(123)
		this->super::updateBuffer(clearBefore);
	}
return null();
}



Text_obj::Text_obj()
{
}

void Text_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Text);
	HX_MARK_MEMBER_NAME(_form,"_form");
	HX_MARK_MEMBER_NAME(_field,"_field");
	HX_MARK_MEMBER_NAME(size,"size");
	HX_MARK_MEMBER_NAME(font,"font");
	HX_MARK_MEMBER_NAME(text,"text");
	HX_MARK_MEMBER_NAME(textHeight,"textHeight");
	HX_MARK_MEMBER_NAME(textWidth,"textWidth");
	HX_MARK_MEMBER_NAME(resizable,"resizable");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Text_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_form,"_form");
	HX_VISIT_MEMBER_NAME(_field,"_field");
	HX_VISIT_MEMBER_NAME(size,"size");
	HX_VISIT_MEMBER_NAME(font,"font");
	HX_VISIT_MEMBER_NAME(text,"text");
	HX_VISIT_MEMBER_NAME(textHeight,"textHeight");
	HX_VISIT_MEMBER_NAME(textWidth,"textWidth");
	HX_VISIT_MEMBER_NAME(resizable,"resizable");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Text_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"size") ) { return size; }
		if (HX_FIELD_EQ(inName,"font") ) { return font; }
		if (HX_FIELD_EQ(inName,"text") ) { return text; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_form") ) { return _form; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_field") ) { return _field; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"setSize") ) { return setSize_dyn(); }
		if (HX_FIELD_EQ(inName,"setFont") ) { return setFont_dyn(); }
		if (HX_FIELD_EQ(inName,"setText") ) { return setText_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"textWidth") ) { return textWidth; }
		if (HX_FIELD_EQ(inName,"resizable") ) { return resizable; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"textHeight") ) { return textHeight; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"updateBuffer") ) { return updateBuffer_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Text_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"size") ) { if (inCallProp) return setSize(inValue);size=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"font") ) { if (inCallProp) return setFont(inValue);font=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"text") ) { if (inCallProp) return setText(inValue);text=inValue.Cast< ::String >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_form") ) { _form=inValue.Cast< ::native::text::TextFormat >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_field") ) { _field=inValue.Cast< ::native::text::TextField >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"textWidth") ) { textWidth=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"resizable") ) { resizable=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"textHeight") ) { textHeight=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Text_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_form"));
	outFields->push(HX_CSTRING("_field"));
	outFields->push(HX_CSTRING("size"));
	outFields->push(HX_CSTRING("font"));
	outFields->push(HX_CSTRING("text"));
	outFields->push(HX_CSTRING("textHeight"));
	outFields->push(HX_CSTRING("textWidth"));
	outFields->push(HX_CSTRING("resizable"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_form"),
	HX_CSTRING("_field"),
	HX_CSTRING("setSize"),
	HX_CSTRING("size"),
	HX_CSTRING("setFont"),
	HX_CSTRING("font"),
	HX_CSTRING("setText"),
	HX_CSTRING("text"),
	HX_CSTRING("textHeight"),
	HX_CSTRING("textWidth"),
	HX_CSTRING("resizable"),
	HX_CSTRING("updateBuffer"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Text_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Text_obj::__mClass,"__mClass");
};

Class Text_obj::__mClass;

void Text_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.Text"), hx::TCanCast< Text_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Text_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
