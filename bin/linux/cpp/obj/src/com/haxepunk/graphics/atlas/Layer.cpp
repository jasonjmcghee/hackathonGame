#include <hxcpp.h>

#ifndef INCLUDED_com_haxepunk_graphics_atlas_Layer
#include <com/haxepunk/graphics/atlas/Layer.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{

Void Layer_obj::__construct()
{
HX_STACK_PUSH("Layer::new","com/haxepunk/graphics/atlas/Atlas.hx",17);
{
	HX_STACK_LINE(18)
	this->data = Array_obj< Float >::__new();
	HX_STACK_LINE(19)
	{
		HX_STACK_LINE(19)
		if (((this->index < this->data->length))){
			HX_STACK_LINE(19)
			this->data->splice(this->index,(this->data->length - this->index));
		}
		HX_STACK_LINE(19)
		this->index = (int)0;
		HX_STACK_LINE(19)
		this->dirty = false;
	}
}
;
	return null();
}

Layer_obj::~Layer_obj() { }

Dynamic Layer_obj::__CreateEmpty() { return  new Layer_obj; }
hx::ObjectPtr< Layer_obj > Layer_obj::__new()
{  hx::ObjectPtr< Layer_obj > result = new Layer_obj();
	result->__construct();
	return result;}

Dynamic Layer_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Layer_obj > result = new Layer_obj();
	result->__construct();
	return result;}

Void Layer_obj::prepare( ){
{
		HX_STACK_PUSH("Layer::prepare","com/haxepunk/graphics/atlas/Atlas.hx",23);
		HX_STACK_THIS(this);
		HX_STACK_LINE(24)
		if (((this->index < this->data->length))){
			HX_STACK_LINE(25)
			this->data->splice(this->index,(this->data->length - this->index));
		}
		HX_STACK_LINE(28)
		this->index = (int)0;
		HX_STACK_LINE(29)
		this->dirty = false;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Layer_obj,prepare,(void))


Layer_obj::Layer_obj()
{
}

void Layer_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Layer);
	HX_MARK_MEMBER_NAME(dirty,"dirty");
	HX_MARK_MEMBER_NAME(index,"index");
	HX_MARK_MEMBER_NAME(data,"data");
	HX_MARK_END_CLASS();
}

void Layer_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(dirty,"dirty");
	HX_VISIT_MEMBER_NAME(index,"index");
	HX_VISIT_MEMBER_NAME(data,"data");
}

Dynamic Layer_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"data") ) { return data; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"dirty") ) { return dirty; }
		if (HX_FIELD_EQ(inName,"index") ) { return index; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"prepare") ) { return prepare_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Layer_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"data") ) { data=inValue.Cast< Array< Float > >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"dirty") ) { dirty=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"index") ) { index=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Layer_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("dirty"));
	outFields->push(HX_CSTRING("index"));
	outFields->push(HX_CSTRING("data"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("prepare"),
	HX_CSTRING("dirty"),
	HX_CSTRING("index"),
	HX_CSTRING("data"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Layer_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Layer_obj::__mClass,"__mClass");
};

Class Layer_obj::__mClass;

void Layer_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.atlas.Layer"), hx::TCanCast< Layer_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Layer_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas
