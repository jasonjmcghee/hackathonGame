#include <hxcpp.h>

#ifndef INCLUDED_Hash
#include <Hash.h>
#endif
#ifndef INCLUDED_IntHash
#include <IntHash.h>
#endif
#ifndef INCLUDED_Lambda
#include <Lambda.h>
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
#ifndef INCLUDED_com_haxepunk_Screen
#include <com/haxepunk/Screen.h>
#endif
#ifndef INCLUDED_com_haxepunk_Tweener
#include <com/haxepunk/Tweener.h>
#endif
#ifndef INCLUDED_com_haxepunk_World
#include <com/haxepunk/World.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
namespace com{
namespace haxepunk{

Void World_obj::__construct()
{
HX_STACK_PUSH("World::new","com/haxepunk/World.hx",28);
{
	HX_STACK_LINE(29)
	super::__construct();
	HX_STACK_LINE(30)
	this->visible = true;
	HX_STACK_LINE(31)
	this->camera = ::native::geom::Point_obj::__new(null(),null());
	HX_STACK_LINE(32)
	this->_count = (int)0;
	HX_STACK_LINE(34)
	this->_layerList = Array_obj< int >::__new();
	HX_STACK_LINE(35)
	this->_layerCount = Array_obj< int >::__new();
	HX_STACK_LINE(37)
	this->_renderFirst = ::IntHash_obj::__new();
	HX_STACK_LINE(38)
	this->_renderLast = ::IntHash_obj::__new();
	HX_STACK_LINE(39)
	this->_typeFirst = ::Hash_obj::__new();
	HX_STACK_LINE(41)
	this->_add = Array_obj< ::com::haxepunk::Entity >::__new();
	HX_STACK_LINE(42)
	this->_remove = Array_obj< ::com::haxepunk::Entity >::__new();
	HX_STACK_LINE(43)
	this->_recycle = Array_obj< ::com::haxepunk::Entity >::__new();
	HX_STACK_LINE(44)
	this->_classCount = ::Hash_obj::__new();
	HX_STACK_LINE(45)
	this->_typeCount = ::Hash_obj::__new();
	HX_STACK_LINE(46)
	this->_recycled = ::Hash_obj::__new();
	HX_STACK_LINE(47)
	this->_entityNames = ::Hash_obj::__new();
}
;
	return null();
}

World_obj::~World_obj() { }

Dynamic World_obj::__CreateEmpty() { return  new World_obj; }
hx::ObjectPtr< World_obj > World_obj::__new()
{  hx::ObjectPtr< World_obj > result = new World_obj();
	result->__construct();
	return result;}

Dynamic World_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< World_obj > result = new World_obj();
	result->__construct();
	return result;}

Void World_obj::unregisterName( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::unregisterName","com/haxepunk/World.hx",1219);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1220)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1221)
		this->_entityNames->remove(fe->__Field(HX_CSTRING("_name"),true));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,unregisterName,(void))

Void World_obj::registerName( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::registerName","com/haxepunk/World.hx",1212);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1213)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1214)
		this->_entityNames->set(fe->__Field(HX_CSTRING("_name"),true),e);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,registerName,(void))

Void World_obj::removeType( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::removeType","com/haxepunk/World.hx",1200);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1201)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1203)
		if (((this->_typeFirst->get(fe->__Field(HX_CSTRING("_type"),true)) == e))){
			HX_STACK_LINE(1203)
			this->_typeFirst->set(fe->__Field(HX_CSTRING("_type"),true),fe->__Field(HX_CSTRING("_typeNext"),true));
		}
		HX_STACK_LINE(1204)
		if (((fe->__Field(HX_CSTRING("_typeNext"),true) != null()))){
			HX_STACK_LINE(1204)
			fe->__Field(HX_CSTRING("_typeNext"),true)->__FieldRef(HX_CSTRING("_typePrev")) = fe->__Field(HX_CSTRING("_typePrev"),true);
		}
		HX_STACK_LINE(1205)
		if (((fe->__Field(HX_CSTRING("_typePrev"),true) != null()))){
			HX_STACK_LINE(1205)
			fe->__Field(HX_CSTRING("_typePrev"),true)->__FieldRef(HX_CSTRING("_typeNext")) = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(1206)
		fe->__FieldRef(HX_CSTRING("_typeNext")) = fe->__FieldRef(HX_CSTRING("_typePrev")) = null();
		HX_STACK_LINE(1207)
		this->_typeCount->set(fe->__Field(HX_CSTRING("_type"),true),(this->_typeCount->get(fe->__Field(HX_CSTRING("_type"),true)) - (int)1));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,removeType,(void))

Void World_obj::addType( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::addType","com/haxepunk/World.hx",1180);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1181)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1183)
		if (((this->_typeFirst->get(fe->__Field(HX_CSTRING("_type"),true)) != null()))){
			HX_STACK_LINE(1185)
			this->_typeFirst->get(fe->__Field(HX_CSTRING("_type"),true))->__FieldRef(HX_CSTRING("_typePrev")) = e;
			HX_STACK_LINE(1186)
			fe->__FieldRef(HX_CSTRING("_typeNext")) = this->_typeFirst->get(fe->__Field(HX_CSTRING("_type"),true));
			HX_STACK_LINE(1187)
			this->_typeCount->set(fe->__Field(HX_CSTRING("_type"),true),(this->_typeCount->get(fe->__Field(HX_CSTRING("_type"),true)) + (int)1));
		}
		else{
			HX_STACK_LINE(1191)
			fe->__FieldRef(HX_CSTRING("_typeNext")) = null();
			HX_STACK_LINE(1192)
			this->_typeCount->set(fe->__Field(HX_CSTRING("_type"),true),(int)1);
		}
		HX_STACK_LINE(1194)
		fe->__FieldRef(HX_CSTRING("_typePrev")) = null();
		HX_STACK_LINE(1195)
		this->_typeFirst->set(fe->__Field(HX_CSTRING("_type"),true),e);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,addType,(void))

Void World_obj::removeRender( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::removeRender","com/haxepunk/World.hx",1154);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1155)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1156)
		if (((fe->__Field(HX_CSTRING("_renderNext"),true) != null()))){
			HX_STACK_LINE(1156)
			fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
		}
		else{
			HX_STACK_LINE(1157)
			this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderPrev"),true));
		}
		HX_STACK_LINE(1158)
		if (((fe->__Field(HX_CSTRING("_renderPrev"),true) != null()))){
			HX_STACK_LINE(1158)
			fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true);
		}
		else{
			HX_STACK_LINE(1162)
			this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderNext"),true));
			HX_STACK_LINE(1163)
			if (((fe->__Field(HX_CSTRING("_renderNext"),true) == null()))){
				HX_STACK_LINE(1166)
				if (((this->_layerList->length > (int)1))){
					HX_STACK_LINE(1168)
					this->_layerList[::Lambda_obj::indexOf(this->_layerList,fe->__Field(HX_CSTRING("_layer"),true))] = this->_layerList->__get((this->_layerList->length - (int)1));
					HX_STACK_LINE(1169)
					this->_layerSort = true;
				}
				HX_STACK_LINE(1171)
				this->_layerList->pop();
			}
		}
		HX_STACK_LINE(1174)
		(this->_layerCount[fe->__Field(HX_CSTRING("_layer"),true)])--;
		HX_STACK_LINE(1175)
		fe->__FieldRef(HX_CSTRING("_renderNext")) = fe->__FieldRef(HX_CSTRING("_renderPrev")) = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,removeRender,(void))

Void World_obj::addRender( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::addRender","com/haxepunk/World.hx",1129);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1130)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1131)
		Dynamic f = this->_renderFirst->get(fe->__Field(HX_CSTRING("_layer"),true));		HX_STACK_VAR(f,"f");
		HX_STACK_LINE(1132)
		if (((f != null()))){
			HX_STACK_LINE(1135)
			fe->__FieldRef(HX_CSTRING("_renderNext")) = f;
			HX_STACK_LINE(1136)
			f->__FieldRef(HX_CSTRING("_renderPrev")) = e;
			HX_STACK_LINE(1137)
			(this->_layerCount[fe->__Field(HX_CSTRING("_layer"),true)])++;
		}
		else{
			HX_STACK_LINE(1142)
			this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),e);
			HX_STACK_LINE(1143)
			this->_layerList[this->_layerList->length] = fe->__Field(HX_CSTRING("_layer"),true);
			HX_STACK_LINE(1144)
			this->_layerSort = true;
			HX_STACK_LINE(1145)
			fe->__FieldRef(HX_CSTRING("_renderNext")) = null();
			HX_STACK_LINE(1146)
			this->_layerCount[fe->__Field(HX_CSTRING("_layer"),true)] = (int)1;
		}
		HX_STACK_LINE(1148)
		this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),e);
		HX_STACK_LINE(1149)
		fe->__FieldRef(HX_CSTRING("_renderPrev")) = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,addRender,(void))

Void World_obj::removeUpdate( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::removeUpdate","com/haxepunk/World.hx",1115);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1116)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1119)
		if (((this->_updateFirst == e))){
			HX_STACK_LINE(1119)
			this->_updateFirst = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
		HX_STACK_LINE(1120)
		if (((fe->__Field(HX_CSTRING("_updateNext"),true) != null()))){
			HX_STACK_LINE(1120)
			fe->__Field(HX_CSTRING("_updateNext"),true)->__FieldRef(HX_CSTRING("_updatePrev")) = fe->__Field(HX_CSTRING("_updatePrev"),true);
		}
		HX_STACK_LINE(1121)
		if (((fe->__Field(HX_CSTRING("_updatePrev"),true) != null()))){
			HX_STACK_LINE(1121)
			fe->__Field(HX_CSTRING("_updatePrev"),true)->__FieldRef(HX_CSTRING("_updateNext")) = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
		HX_STACK_LINE(1122)
		fe->__FieldRef(HX_CSTRING("_updateNext")) = fe->__FieldRef(HX_CSTRING("_updatePrev")) = null();
		HX_STACK_LINE(1123)
		(this->_count)--;
		HX_STACK_LINE(1124)
		this->_classCount->set(fe->__Field(HX_CSTRING("_class"),true),(this->_classCount->get(fe->__Field(HX_CSTRING("_class"),true)) - (int)1));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,removeUpdate,(void))

Void World_obj::addUpdate( ::com::haxepunk::Entity e){
{
		HX_STACK_PUSH("World::addUpdate","com/haxepunk/World.hx",1096);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(1097)
		Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1100)
		if (((this->_updateFirst != null()))){
			HX_STACK_LINE(1102)
			this->_updateFirst->__FieldRef(HX_CSTRING("_updatePrev")) = e;
			HX_STACK_LINE(1103)
			fe->__FieldRef(HX_CSTRING("_updateNext")) = this->_updateFirst;
		}
		else{
			HX_STACK_LINE(1105)
			fe->__FieldRef(HX_CSTRING("_updateNext")) = null();
		}
		HX_STACK_LINE(1106)
		fe->__FieldRef(HX_CSTRING("_updatePrev")) = null();
		HX_STACK_LINE(1107)
		this->_updateFirst = e;
		HX_STACK_LINE(1108)
		(this->_count)++;
		HX_STACK_LINE(1109)
		if (((this->_classCount->get(fe->__Field(HX_CSTRING("_class"),true)) != (int)0))){
			HX_STACK_LINE(1109)
			this->_classCount->set(fe->__Field(HX_CSTRING("_class"),true),(int)0);
		}
		HX_STACK_LINE(1110)
		this->_classCount->set(fe->__Field(HX_CSTRING("_class"),true),(this->_classCount->get(fe->__Field(HX_CSTRING("_class"),true)) + (int)1));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,addUpdate,(void))

int World_obj::layerSort( int a,int b){
	HX_STACK_PUSH("World::layerSort","com/haxepunk/World.hx",1085);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_LINE(1086)
	if (((a > b))){
		HX_STACK_LINE(1087)
		return (int)1;
	}
	else{
		HX_STACK_LINE(1088)
		if (((a < b))){
			HX_STACK_LINE(1089)
			return (int)-1;
		}
	}
	HX_STACK_LINE(1091)
	return (int)0;
}


HX_DEFINE_DYNAMIC_FUNC2(World_obj,layerSort,return )

Void World_obj::updateLists( ){
{
		HX_STACK_PUSH("World::updateLists","com/haxepunk/World.hx",1015);
		HX_STACK_THIS(this);
		HX_STACK_LINE(1016)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(1017)
		Dynamic fe;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(1020)
		if (((this->_remove->length > (int)0))){
			HX_STACK_LINE(1022)
			{
				HX_STACK_LINE(1022)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				Array< ::com::haxepunk::Entity > _g1 = this->_remove;		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(1022)
				while(((_g < _g1->length))){
					HX_STACK_LINE(1022)
					::com::haxepunk::Entity e1 = _g1->__get(_g);		HX_STACK_VAR(e1,"e1");
					HX_STACK_LINE(1022)
					++(_g);
					HX_STACK_LINE(1024)
					fe = e1;
					HX_STACK_LINE(1025)
					if (((fe->__Field(HX_CSTRING("_world"),true) == null()))){
						HX_STACK_LINE(1027)
						int idx = ::Lambda_obj::indexOf(this->_add,e1);		HX_STACK_VAR(idx,"idx");
						HX_STACK_LINE(1028)
						if (((idx >= (int)0))){
							HX_STACK_LINE(1028)
							this->_add->splice(idx,(int)1);
						}
						HX_STACK_LINE(1029)
						continue;
					}
					HX_STACK_LINE(1031)
					if (((fe->__Field(HX_CSTRING("_world"),true) != hx::ObjectPtr<OBJ_>(this)))){
						HX_STACK_LINE(1032)
						continue;
					}
					HX_STACK_LINE(1033)
					e1->removed();
					HX_STACK_LINE(1034)
					fe->__FieldRef(HX_CSTRING("_world")) = null();
					HX_STACK_LINE(1035)
					this->removeUpdate(e1);
					HX_STACK_LINE(1036)
					this->removeRender(e1);
					HX_STACK_LINE(1037)
					if (((fe->__Field(HX_CSTRING("_type"),true) != HX_CSTRING("")))){
						HX_STACK_LINE(1037)
						this->removeType(e1);
					}
					HX_STACK_LINE(1038)
					if (((fe->__Field(HX_CSTRING("_name"),true) != HX_CSTRING("")))){
						HX_STACK_LINE(1038)
						this->unregisterName(e1);
					}
					HX_STACK_LINE(1039)
					if (((bool(e1->autoClear) && bool(e1->getTween())))){
						HX_STACK_LINE(1039)
						e1->clearTweens();
					}
				}
			}
			HX_STACK_LINE(1041)
			{
				HX_STACK_LINE(1041)
				Dynamic array = this->_remove;		HX_STACK_VAR(array,"array");
				HX_STACK_LINE(1041)
				array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
			}
		}
		HX_STACK_LINE(1045)
		if (((this->_add->length > (int)0))){
			HX_STACK_LINE(1047)
			{
				HX_STACK_LINE(1047)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				Array< ::com::haxepunk::Entity > _g1 = this->_add;		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(1047)
				while(((_g < _g1->length))){
					HX_STACK_LINE(1047)
					::com::haxepunk::Entity e1 = _g1->__get(_g);		HX_STACK_VAR(e1,"e1");
					HX_STACK_LINE(1047)
					++(_g);
					HX_STACK_LINE(1049)
					fe = e1;
					HX_STACK_LINE(1050)
					if (((fe->__Field(HX_CSTRING("_world"),true) != null()))){
						HX_STACK_LINE(1050)
						continue;
					}
					HX_STACK_LINE(1051)
					fe->__FieldRef(HX_CSTRING("_world")) = hx::ObjectPtr<OBJ_>(this);
					HX_STACK_LINE(1052)
					this->addUpdate(e1);
					HX_STACK_LINE(1053)
					this->addRender(e1);
					HX_STACK_LINE(1054)
					if (((fe->__Field(HX_CSTRING("_type"),true) != HX_CSTRING("")))){
						HX_STACK_LINE(1054)
						this->addType(e1);
					}
					HX_STACK_LINE(1055)
					if (((fe->__Field(HX_CSTRING("_name"),true) != HX_CSTRING("")))){
						HX_STACK_LINE(1055)
						this->registerName(e1);
					}
					HX_STACK_LINE(1056)
					e1->added();
				}
			}
			HX_STACK_LINE(1058)
			{
				HX_STACK_LINE(1058)
				Dynamic array = this->_add;		HX_STACK_VAR(array,"array");
				HX_STACK_LINE(1058)
				array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
			}
		}
		HX_STACK_LINE(1062)
		if (((this->_recycle->length > (int)0))){
			HX_STACK_LINE(1064)
			{
				HX_STACK_LINE(1064)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				Array< ::com::haxepunk::Entity > _g1 = this->_recycle;		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(1064)
				while(((_g < _g1->length))){
					HX_STACK_LINE(1064)
					::com::haxepunk::Entity e1 = _g1->__get(_g);		HX_STACK_VAR(e1,"e1");
					HX_STACK_LINE(1064)
					++(_g);
					HX_STACK_LINE(1066)
					fe = e1;
					HX_STACK_LINE(1067)
					if (((bool((fe->__Field(HX_CSTRING("_world"),true) != null())) || bool((fe->__Field(HX_CSTRING("_recycleNext"),true) != null()))))){
						HX_STACK_LINE(1068)
						continue;
					}
					HX_STACK_LINE(1070)
					fe->__FieldRef(HX_CSTRING("_recycleNext")) = this->_recycled->get(fe->__Field(HX_CSTRING("_class"),true));
					HX_STACK_LINE(1071)
					this->_recycled->set(fe->__Field(HX_CSTRING("_class"),true),e1);
				}
			}
			HX_STACK_LINE(1073)
			{
				HX_STACK_LINE(1073)
				Dynamic array = this->_recycle;		HX_STACK_VAR(array,"array");
				HX_STACK_LINE(1073)
				array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
			}
		}
		HX_STACK_LINE(1077)
		if ((this->_layerSort)){
			HX_STACK_LINE(1079)
			if (((this->_layerList->length > (int)1))){
				HX_STACK_LINE(1079)
				this->_layerList->sort(this->layerSort_dyn());
			}
			HX_STACK_LINE(1080)
			this->_layerSort = false;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,updateLists,(void))

::com::haxepunk::Entity World_obj::getInstance( ::String name){
	HX_STACK_PUSH("World::getInstance","com/haxepunk/World.hx",1007);
	HX_STACK_THIS(this);
	HX_STACK_ARG(name,"name");
	HX_STACK_LINE(1007)
	return this->_entityNames->get(name);
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,getInstance,return )

Void World_obj::getAll( Dynamic into){
{
		HX_STACK_PUSH("World::getAll","com/haxepunk/World.hx",989);
		HX_STACK_THIS(this);
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(990)
		Dynamic e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_updateFirst;		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(993)
		while(((fe != null()))){
			HX_STACK_LINE(995)
			e = fe;
			HX_STACK_LINE(996)
			hx::IndexRef((into).mPtr,(n)++) = e;
			HX_STACK_LINE(997)
			fe = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,getAll,(void))

Void World_obj::getLayer( int layer,Dynamic into){
{
		HX_STACK_PUSH("World::getLayer","com/haxepunk/World.hx",971);
		HX_STACK_THIS(this);
		HX_STACK_ARG(layer,"layer");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(972)
		Dynamic e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_renderLast->get(layer);		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(975)
		while(((fe != null()))){
			HX_STACK_LINE(977)
			e = fe;
			HX_STACK_LINE(978)
			hx::IndexRef((into).mPtr,(n)++) = e;
			HX_STACK_LINE(979)
			fe = fe->__Field(HX_CSTRING("_updatePrev"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(World_obj,getLayer,(void))

Void World_obj::getClass( ::Class c,Dynamic into){
{
		HX_STACK_PUSH("World::getClass","com/haxepunk/World.hx",953);
		HX_STACK_THIS(this);
		HX_STACK_ARG(c,"c");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(954)
		Dynamic fe = this->_updateFirst;		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(956)
		while(((fe != null()))){
			HX_STACK_LINE(958)
			if ((::Std_obj::is(fe,c))){
				HX_STACK_LINE(959)
				hx::IndexRef((into).mPtr,(n)++) = fe;
			}
			HX_STACK_LINE(960)
			fe = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(World_obj,getClass,(void))

Void World_obj::getType( ::String type,Dynamic into){
{
		HX_STACK_PUSH("World::getType","com/haxepunk/World.hx",936);
		HX_STACK_THIS(this);
		HX_STACK_ARG(type,"type");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(937)
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(939)
		while(((fe != null()))){
			HX_STACK_LINE(941)
			hx::IndexRef((into).mPtr,(n)++) = fe;
			HX_STACK_LINE(942)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(World_obj,getType,(void))

int World_obj::getUniqueTypes( ){
	HX_STACK_PUSH("World::getUniqueTypes","com/haxepunk/World.hx",923);
	HX_STACK_THIS(this);
	HX_STACK_LINE(924)
	int i = (int)0;		HX_STACK_VAR(i,"i");
	HX_STACK_LINE(925)
	for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(this->_typeCount->iterator());  __it->hasNext(); ){
		int type = __it->next();
		(i)++;
	}
	HX_STACK_LINE(926)
	return i;
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getUniqueTypes,return )

int World_obj::getLayerNearest( ){
	HX_STACK_PUSH("World::getLayerNearest","com/haxepunk/World.hx",913);
	HX_STACK_THIS(this);
	HX_STACK_LINE(914)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(914)
		return (int)0;
	}
	HX_STACK_LINE(915)
	return this->_layerList->__get((int)0);
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getLayerNearest,return )

int World_obj::getLayerFarthest( ){
	HX_STACK_PUSH("World::getLayerFarthest","com/haxepunk/World.hx",903);
	HX_STACK_THIS(this);
	HX_STACK_LINE(904)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(904)
		return (int)0;
	}
	HX_STACK_LINE(905)
	return this->_layerList->__get((this->_layerList->length - (int)1));
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getLayerFarthest,return )

::com::haxepunk::Entity World_obj::getNearest( ){
	HX_STACK_PUSH("World::getNearest","com/haxepunk/World.hx",893);
	HX_STACK_THIS(this);
	HX_STACK_LINE(894)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(894)
		return null();
	}
	HX_STACK_LINE(895)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_renderFirst->get(this->_layerList->__get((int)0)));
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getNearest,return )

::com::haxepunk::Entity World_obj::getFarthest( ){
	HX_STACK_PUSH("World::getFarthest","com/haxepunk/World.hx",883);
	HX_STACK_THIS(this);
	HX_STACK_LINE(884)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(884)
		return null();
	}
	HX_STACK_LINE(885)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_renderLast->get(this->_layerList->__get((this->_layerList->length - (int)1))));
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getFarthest,return )

::com::haxepunk::Entity World_obj::layerLast( int layer){
	HX_STACK_PUSH("World::layerLast","com/haxepunk/World.hx",873);
	HX_STACK_THIS(this);
	HX_STACK_ARG(layer,"layer");
	HX_STACK_LINE(874)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(874)
		return null();
	}
	HX_STACK_LINE(875)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_renderLast->get(layer));
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,layerLast,return )

::com::haxepunk::Entity World_obj::layerFirst( int layer){
	HX_STACK_PUSH("World::layerFirst","com/haxepunk/World.hx",862);
	HX_STACK_THIS(this);
	HX_STACK_ARG(layer,"layer");
	HX_STACK_LINE(863)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(863)
		return null();
	}
	HX_STACK_LINE(864)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_renderFirst->get(layer));
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,layerFirst,return )

Dynamic World_obj::classFirst( ::Class c){
	HX_STACK_PUSH("World::classFirst","com/haxepunk/World.hx",845);
	HX_STACK_THIS(this);
	HX_STACK_ARG(c,"c");
	HX_STACK_LINE(846)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(846)
		return null();
	}
	HX_STACK_LINE(847)
	Dynamic fe = this->_updateFirst;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(848)
	while(((fe != null()))){
		HX_STACK_LINE(850)
		if ((::Std_obj::is(fe,c))){
			HX_STACK_LINE(850)
			return fe;
		}
		HX_STACK_LINE(851)
		fe = fe->__Field(HX_CSTRING("_updateNext"),true);
	}
	HX_STACK_LINE(853)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,classFirst,return )

::com::haxepunk::Entity World_obj::typeFirst( ::String type){
	HX_STACK_PUSH("World::typeFirst","com/haxepunk/World.hx",834);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_LINE(835)
	if (((this->_updateFirst == null()))){
		HX_STACK_LINE(835)
		return null();
	}
	HX_STACK_LINE(836)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_typeFirst->get(type));
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,typeFirst,return )

int World_obj::getLayers( ){
	HX_STACK_PUSH("World::getLayers","com/haxepunk/World.hx",826);
	HX_STACK_THIS(this);
	HX_STACK_LINE(826)
	return this->_layerList->length;
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getLayers,return )

::com::haxepunk::Entity World_obj::getFirst( ){
	HX_STACK_PUSH("World::getFirst","com/haxepunk/World.hx",820);
	HX_STACK_THIS(this);
	HX_STACK_LINE(820)
	return hx::TCast< com::haxepunk::Entity >::cast(this->_updateFirst);
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getFirst,return )

int World_obj::layerCount( int layer){
	HX_STACK_PUSH("World::layerCount","com/haxepunk/World.hx",812);
	HX_STACK_THIS(this);
	HX_STACK_ARG(layer,"layer");
	HX_STACK_LINE(812)
	return this->_layerCount->__get(layer);
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,layerCount,return )

int World_obj::classCount( ::String c){
	HX_STACK_PUSH("World::classCount","com/haxepunk/World.hx",802);
	HX_STACK_THIS(this);
	HX_STACK_ARG(c,"c");
	HX_STACK_LINE(802)
	return this->_classCount->get(c);
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,classCount,return )

int World_obj::typeCount( ::String type){
	HX_STACK_PUSH("World::typeCount","com/haxepunk/World.hx",792);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_LINE(792)
	return this->_typeCount->get(type);
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,typeCount,return )

int World_obj::getCount( ){
	HX_STACK_PUSH("World::getCount","com/haxepunk/World.hx",784);
	HX_STACK_THIS(this);
	HX_STACK_LINE(784)
	return this->_count;
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getCount,return )

::com::haxepunk::Entity World_obj::nearestToPoint( ::String type,Float x,Float y,hx::Null< bool >  __o_useHitboxes){
bool useHitboxes = __o_useHitboxes.Default(false);
	HX_STACK_PUSH("World::nearestToPoint","com/haxepunk/World.hx",745);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(useHitboxes,"useHitboxes");
{
		HX_STACK_LINE(746)
		::com::haxepunk::Entity n;		HX_STACK_VAR(n,"n");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		Float nearDist = ((int)179 * ::Math_obj::pow((int)10,(int)306));		HX_STACK_VAR(nearDist,"nearDist");
		::com::haxepunk::Entity near = null();		HX_STACK_VAR(near,"near");
		Float dist;		HX_STACK_VAR(dist,"dist");
		HX_STACK_LINE(751)
		if ((useHitboxes)){
			HX_STACK_LINE(753)
			while(((fe != null()))){
				HX_STACK_LINE(755)
				n = hx::TCast< com::haxepunk::Entity >::cast(fe);
				HX_STACK_LINE(756)
				dist = ::com::haxepunk::World_obj::squarePointRect(x,y,(n->x - n->originX),(n->y - n->originY),n->width,n->height);
				HX_STACK_LINE(757)
				if (((dist < nearDist))){
					HX_STACK_LINE(759)
					nearDist = dist;
					HX_STACK_LINE(760)
					near = n;
				}
				HX_STACK_LINE(762)
				fe = fe->__Field(HX_CSTRING("_typeNext"),true);
			}
			HX_STACK_LINE(764)
			return near;
		}
		HX_STACK_LINE(766)
		while(((fe != null()))){
			HX_STACK_LINE(768)
			n = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(769)
			dist = ((((x - n->x)) * ((x - n->x))) + (((y - n->y)) * ((y - n->y))));
			HX_STACK_LINE(770)
			if (((dist < nearDist))){
				HX_STACK_LINE(772)
				nearDist = dist;
				HX_STACK_LINE(773)
				near = n;
			}
			HX_STACK_LINE(775)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(777)
		return near;
	}
}


HX_DEFINE_DYNAMIC_FUNC4(World_obj,nearestToPoint,return )

::com::haxepunk::Entity World_obj::nearestToClass( ::String type,::com::haxepunk::Entity e,Dynamic classType,hx::Null< bool >  __o_useHitboxes){
bool useHitboxes = __o_useHitboxes.Default(false);
	HX_STACK_PUSH("World::nearestToClass","com/haxepunk/World.hx",713);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(e,"e");
	HX_STACK_ARG(classType,"classType");
	HX_STACK_ARG(useHitboxes,"useHitboxes");
{
		HX_STACK_LINE(714)
		if ((useHitboxes)){
			HX_STACK_LINE(714)
			return this->nearestToRect(type,(e->x - e->originX),(e->y - e->originY),e->width,e->height);
		}
		HX_STACK_LINE(715)
		::com::haxepunk::Entity n;		HX_STACK_VAR(n,"n");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		Float nearDist = ((int)179 * ::Math_obj::pow((int)10,(int)306));		HX_STACK_VAR(nearDist,"nearDist");
		::com::haxepunk::Entity near = null();		HX_STACK_VAR(near,"near");
		Float dist;		HX_STACK_VAR(dist,"dist");
		Float x = (e->x - e->originX);		HX_STACK_VAR(x,"x");
		Float y = (e->y - e->originY);		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(722)
		while(((fe != null()))){
			HX_STACK_LINE(724)
			n = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(725)
			dist = ((((x - n->x)) * ((x - n->x))) + (((y - n->y)) * ((y - n->y))));
			HX_STACK_LINE(726)
			if (((bool((dist < nearDist)) && bool(::Std_obj::is(e,classType))))){
				HX_STACK_LINE(728)
				nearDist = dist;
				HX_STACK_LINE(729)
				near = n;
			}
			HX_STACK_LINE(731)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(733)
		return near;
	}
}


HX_DEFINE_DYNAMIC_FUNC4(World_obj,nearestToClass,return )

::com::haxepunk::Entity World_obj::nearestToEntity( ::String type,::com::haxepunk::Entity e,hx::Null< bool >  __o_useHitboxes){
bool useHitboxes = __o_useHitboxes.Default(false);
	HX_STACK_PUSH("World::nearestToEntity","com/haxepunk/World.hx",681);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(e,"e");
	HX_STACK_ARG(useHitboxes,"useHitboxes");
{
		HX_STACK_LINE(682)
		if ((useHitboxes)){
			HX_STACK_LINE(682)
			return this->nearestToRect(type,(e->x - e->originX),(e->y - e->originY),e->width,e->height);
		}
		HX_STACK_LINE(683)
		::com::haxepunk::Entity n;		HX_STACK_VAR(n,"n");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		Float nearDist = ((int)179 * ::Math_obj::pow((int)10,(int)306));		HX_STACK_VAR(nearDist,"nearDist");
		::com::haxepunk::Entity near = null();		HX_STACK_VAR(near,"near");
		Float dist;		HX_STACK_VAR(dist,"dist");
		Float x = (e->x - e->originX);		HX_STACK_VAR(x,"x");
		Float y = (e->y - e->originY);		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(690)
		while(((fe != null()))){
			HX_STACK_LINE(692)
			n = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(693)
			dist = ((((x - n->x)) * ((x - n->x))) + (((y - n->y)) * ((y - n->y))));
			HX_STACK_LINE(694)
			if (((dist < nearDist))){
				HX_STACK_LINE(696)
				nearDist = dist;
				HX_STACK_LINE(697)
				near = n;
			}
			HX_STACK_LINE(699)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
		HX_STACK_LINE(701)
		return near;
	}
}


HX_DEFINE_DYNAMIC_FUNC3(World_obj,nearestToEntity,return )

::com::haxepunk::Entity World_obj::nearestToRect( ::String type,Float x,Float y,Float width,Float height){
	HX_STACK_PUSH("World::nearestToRect","com/haxepunk/World.hx",654);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_LINE(655)
	::com::haxepunk::Entity n;		HX_STACK_VAR(n,"n");
	Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
	Float nearDist = ((int)179 * ::Math_obj::pow((int)10,(int)306));		HX_STACK_VAR(nearDist,"nearDist");
	::com::haxepunk::Entity near = null();		HX_STACK_VAR(near,"near");
	Float dist;		HX_STACK_VAR(dist,"dist");
	HX_STACK_LINE(659)
	while(((fe != null()))){
		HX_STACK_LINE(661)
		n = hx::TCast< com::haxepunk::Entity >::cast(fe);
		HX_STACK_LINE(662)
		dist = ::com::haxepunk::World_obj::squareRects(x,y,width,height,(n->x - n->originX),(n->y - n->originY),n->width,n->height);
		HX_STACK_LINE(663)
		if (((dist < nearDist))){
			HX_STACK_LINE(665)
			nearDist = dist;
			HX_STACK_LINE(666)
			near = n;
		}
		HX_STACK_LINE(668)
		fe = fe->__Field(HX_CSTRING("_typeNext"),true);
	}
	HX_STACK_LINE(670)
	return near;
}


HX_DEFINE_DYNAMIC_FUNC5(World_obj,nearestToRect,return )

Void World_obj::collidePointInto( ::String type,Float pX,Float pY,Dynamic into){
{
		HX_STACK_PUSH("World::collidePointInto","com/haxepunk/World.hx",632);
		HX_STACK_THIS(this);
		HX_STACK_ARG(type,"type");
		HX_STACK_ARG(pX,"pX");
		HX_STACK_ARG(pY,"pY");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(633)
		Dynamic e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(636)
		while(((fe != null()))){
			HX_STACK_LINE(638)
			e = fe;
			HX_STACK_LINE(639)
			if ((e->__Field(HX_CSTRING("collidePoint"),true)(e->__Field(HX_CSTRING("x"),true),e->__Field(HX_CSTRING("y"),true),pX,pY))){
				HX_STACK_LINE(639)
				hx::IndexRef((into).mPtr,(n)++) = e;
			}
			HX_STACK_LINE(640)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(World_obj,collidePointInto,(void))

Void World_obj::collideCircleInto( ::String type,Float circleX,Float circleY,Float radius,Dynamic into){
{
		HX_STACK_PUSH("World::collideCircleInto","com/haxepunk/World.hx",608);
		HX_STACK_THIS(this);
		HX_STACK_ARG(type,"type");
		HX_STACK_ARG(circleX,"circleX");
		HX_STACK_ARG(circleY,"circleY");
		HX_STACK_ARG(radius,"radius");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(609)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(613)
		hx::MultEq(radius,radius);
		HX_STACK_LINE(614)
		while(((fe != null()))){
			HX_STACK_LINE(616)
			e = fe;
			struct _Function_2_1{
				inline static Float Block( ::com::haxepunk::Entity &e,Float &circleX,Float &circleY){
					HX_STACK_PUSH("*::closure","com/haxepunk/World.hx",617);
					{
						HX_STACK_LINE(617)
						Float x2 = e->x;		HX_STACK_VAR(x2,"x2");
						Float y2 = e->y;		HX_STACK_VAR(y2,"y2");
						HX_STACK_LINE(617)
						return ((((x2 - circleX)) * ((x2 - circleX))) + (((y2 - circleY)) * ((y2 - circleY))));
					}
					return null();
				}
			};
			HX_STACK_LINE(617)
			if (((_Function_2_1::Block(e,circleX,circleY) < radius))){
				HX_STACK_LINE(617)
				hx::IndexRef((into).mPtr,(n)++) = e;
			}
			HX_STACK_LINE(618)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC5(World_obj,collideCircleInto,(void))

Void World_obj::collideRectInto( ::String type,Float rX,Float rY,Float rWidth,Float rHeight,Dynamic into){
{
		HX_STACK_PUSH("World::collideRectInto","com/haxepunk/World.hx",586);
		HX_STACK_THIS(this);
		HX_STACK_ARG(type,"type");
		HX_STACK_ARG(rX,"rX");
		HX_STACK_ARG(rY,"rY");
		HX_STACK_ARG(rWidth,"rWidth");
		HX_STACK_ARG(rHeight,"rHeight");
		HX_STACK_ARG(into,"into");
		HX_STACK_LINE(587)
		Dynamic e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
		int n = into->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(590)
		while(((fe != null()))){
			HX_STACK_LINE(592)
			e = fe;
			HX_STACK_LINE(593)
			if ((e->__Field(HX_CSTRING("collideRect"),true)(e->__Field(HX_CSTRING("x"),true),e->__Field(HX_CSTRING("y"),true),rX,rY,rWidth,rHeight))){
				HX_STACK_LINE(593)
				hx::IndexRef((into).mPtr,(n)++) = e;
			}
			HX_STACK_LINE(594)
			fe = fe->__Field(HX_CSTRING("_typeNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC6(World_obj,collideRectInto,(void))

::com::haxepunk::Entity World_obj::collideLine( ::String type,int fromX,int fromY,int toX,int toY,hx::Null< int >  __o_precision,::native::geom::Point p){
int precision = __o_precision.Default(1);
	HX_STACK_PUSH("World::collideLine","com/haxepunk/World.hx",457);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(fromX,"fromX");
	HX_STACK_ARG(fromY,"fromY");
	HX_STACK_ARG(toX,"toX");
	HX_STACK_ARG(toY,"toY");
	HX_STACK_ARG(precision,"precision");
	HX_STACK_ARG(p,"p");
{
		HX_STACK_LINE(459)
		if (((precision < (int)1))){
			HX_STACK_LINE(459)
			precision = (int)1;
		}
		HX_STACK_LINE(460)
		if (((::Math_obj::sqrt(((((toX - fromX)) * ((toX - fromX))) + (((toY - fromY)) * ((toY - fromY))))) < precision))){
			HX_STACK_LINE(461)
			if (((p != null()))){
				HX_STACK_LINE(464)
				if (((bool((fromX == toX)) && bool((fromY == toY))))){
					HX_STACK_LINE(466)
					p->x = toX;
					HX_STACK_LINE(466)
					p->y = toY;
					HX_STACK_LINE(467)
					return this->collidePoint(type,toX,toY);
				}
				HX_STACK_LINE(469)
				return this->collideLine(type,fromX,fromY,toX,toY,(int)1,p);
			}
			else{
				HX_STACK_LINE(471)
				return this->collidePoint(type,fromX,toY);
			}
		}
		HX_STACK_LINE(475)
		int xDelta = ::Std_obj::_int(::Math_obj::abs((toX - fromX)));		HX_STACK_VAR(xDelta,"xDelta");
		int yDelta = ::Std_obj::_int(::Math_obj::abs((toY - fromY)));		HX_STACK_VAR(yDelta,"yDelta");
		Float xSign = (  (((toX > fromX))) ? int(precision) : int(-(precision)) );		HX_STACK_VAR(xSign,"xSign");
		Float ySign = (  (((toY > fromY))) ? int(precision) : int(-(precision)) );		HX_STACK_VAR(ySign,"ySign");
		Float x = fromX;		HX_STACK_VAR(x,"x");
		Float y = fromY;		HX_STACK_VAR(y,"y");
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(482)
		if (((xDelta > yDelta))){
			HX_STACK_LINE(484)
			hx::MultEq(ySign,(Float(yDelta) / Float(xDelta)));
			HX_STACK_LINE(485)
			if (((xSign > (int)0))){
				HX_STACK_LINE(486)
				while(((x < toX))){
					HX_STACK_LINE(489)
					if ((((e = this->collidePoint(type,x,y)) != null()))){
						HX_STACK_LINE(491)
						if (((p == null()))){
							HX_STACK_LINE(491)
							return e;
						}
						HX_STACK_LINE(492)
						if (((precision < (int)2))){
							HX_STACK_LINE(494)
							p->x = (x - xSign);
							HX_STACK_LINE(494)
							p->y = (y - ySign);
							HX_STACK_LINE(495)
							return e;
						}
						HX_STACK_LINE(497)
						return this->collideLine(type,::Std_obj::_int((x - xSign)),::Std_obj::_int((y - ySign)),toX,toY,(int)1,p);
					}
					HX_STACK_LINE(499)
					hx::AddEq(x,xSign);
					HX_STACK_LINE(499)
					hx::AddEq(y,ySign);
				}
			}
			else{
				HX_STACK_LINE(503)
				while(((x > toX))){
					HX_STACK_LINE(506)
					if ((((e = this->collidePoint(type,x,y)) != null()))){
						HX_STACK_LINE(508)
						if (((p == null()))){
							HX_STACK_LINE(508)
							return e;
						}
						HX_STACK_LINE(509)
						if (((precision < (int)2))){
							HX_STACK_LINE(511)
							p->x = (x - xSign);
							HX_STACK_LINE(511)
							p->y = (y - ySign);
							HX_STACK_LINE(512)
							return e;
						}
						HX_STACK_LINE(514)
						return this->collideLine(type,::Std_obj::_int((x - xSign)),::Std_obj::_int((y - ySign)),toX,toY,(int)1,p);
					}
					HX_STACK_LINE(516)
					hx::AddEq(x,xSign);
					HX_STACK_LINE(516)
					hx::AddEq(y,ySign);
				}
			}
		}
		else{
			HX_STACK_LINE(522)
			hx::MultEq(xSign,(Float(xDelta) / Float(yDelta)));
			HX_STACK_LINE(523)
			if (((ySign > (int)0))){
				HX_STACK_LINE(524)
				while(((y < toY))){
					HX_STACK_LINE(527)
					if ((((e = this->collidePoint(type,x,y)) != null()))){
						HX_STACK_LINE(529)
						if (((p == null()))){
							HX_STACK_LINE(529)
							return e;
						}
						HX_STACK_LINE(530)
						if (((precision < (int)2))){
							HX_STACK_LINE(532)
							p->x = (x - xSign);
							HX_STACK_LINE(532)
							p->y = (y - ySign);
							HX_STACK_LINE(533)
							return e;
						}
						HX_STACK_LINE(535)
						return this->collideLine(type,::Std_obj::_int((x - xSign)),::Std_obj::_int((y - ySign)),toX,toY,(int)1,p);
					}
					HX_STACK_LINE(537)
					hx::AddEq(x,xSign);
					HX_STACK_LINE(537)
					hx::AddEq(y,ySign);
				}
			}
			else{
				HX_STACK_LINE(541)
				while(((y > toY))){
					HX_STACK_LINE(544)
					if ((((e = this->collidePoint(type,x,y)) != null()))){
						HX_STACK_LINE(546)
						if (((p == null()))){
							HX_STACK_LINE(546)
							return e;
						}
						HX_STACK_LINE(547)
						if (((precision < (int)2))){
							HX_STACK_LINE(549)
							p->x = (x - xSign);
							HX_STACK_LINE(549)
							p->y = (y - ySign);
							HX_STACK_LINE(550)
							return e;
						}
						HX_STACK_LINE(552)
						return this->collideLine(type,::Std_obj::_int((x - xSign)),::Std_obj::_int((y - ySign)),toX,toY,(int)1,p);
					}
					HX_STACK_LINE(554)
					hx::AddEq(x,xSign);
					HX_STACK_LINE(554)
					hx::AddEq(y,ySign);
				}
			}
		}
		HX_STACK_LINE(560)
		if (((precision > (int)1))){
			HX_STACK_LINE(562)
			if (((p == null()))){
				HX_STACK_LINE(562)
				return this->collidePoint(type,toX,toY);
			}
			HX_STACK_LINE(563)
			if (((this->collidePoint(type,toX,toY) != null()))){
				HX_STACK_LINE(563)
				return this->collideLine(type,::Std_obj::_int((x - xSign)),::Std_obj::_int((y - ySign)),toX,toY,(int)1,p);
			}
		}
		HX_STACK_LINE(567)
		if (((p != null()))){
			HX_STACK_LINE(569)
			p->x = toX;
			HX_STACK_LINE(570)
			p->y = toY;
		}
		HX_STACK_LINE(572)
		return null();
	}
}


HX_DEFINE_DYNAMIC_FUNC7(World_obj,collideLine,return )

::com::haxepunk::Entity World_obj::collidePoint( ::String type,Float pX,Float pY){
	HX_STACK_PUSH("World::collidePoint","com/haxepunk/World.hx",423);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(pX,"pX");
	HX_STACK_ARG(pY,"pY");
	HX_STACK_LINE(424)
	::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
	Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
	::com::haxepunk::Entity result = null();		HX_STACK_VAR(result,"result");
	HX_STACK_LINE(427)
	while(((fe != null()))){
		HX_STACK_LINE(429)
		e = hx::TCast< com::haxepunk::Entity >::cast(fe);
		HX_STACK_LINE(431)
		if ((e->collidePoint(e->x,e->y,pX,pY))){
			HX_STACK_LINE(431)
			if (((result == null()))){
				HX_STACK_LINE(433)
				result = e;
			}
			else{
				HX_STACK_LINE(436)
				if (((e->_layer < result->_layer))){
					HX_STACK_LINE(436)
					result = e;
				}
			}
		}
		HX_STACK_LINE(440)
		fe = fe->__Field(HX_CSTRING("_typeNext"),true);
	}
	HX_STACK_LINE(442)
	return result;
}


HX_DEFINE_DYNAMIC_FUNC3(World_obj,collidePoint,return )

::com::haxepunk::Entity World_obj::collideRect( ::String type,Float rX,Float rY,Float rWidth,Float rHeight){
	HX_STACK_PUSH("World::collideRect","com/haxepunk/World.hx",403);
	HX_STACK_THIS(this);
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(rX,"rX");
	HX_STACK_ARG(rY,"rY");
	HX_STACK_ARG(rWidth,"rWidth");
	HX_STACK_ARG(rHeight,"rHeight");
	HX_STACK_LINE(404)
	::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
	Dynamic fe = this->_typeFirst->get(type);		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(406)
	while(((fe != null()))){
		HX_STACK_LINE(408)
		e = hx::TCast< com::haxepunk::Entity >::cast(fe);
		HX_STACK_LINE(409)
		if ((e->collideRect(e->x,e->y,rX,rY,rWidth,rHeight))){
			HX_STACK_LINE(409)
			return e;
		}
		HX_STACK_LINE(410)
		fe = fe->__Field(HX_CSTRING("_typeNext"),true);
	}
	HX_STACK_LINE(412)
	return null();
}


HX_DEFINE_DYNAMIC_FUNC5(World_obj,collideRect,return )

bool World_obj::isAtBack( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::isAtBack","com/haxepunk/World.hx",388);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(389)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(390)
	return (fe->__Field(HX_CSTRING("_renderNext"),true) == null());
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,isAtBack,return )

bool World_obj::isAtFront( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::isAtFront","com/haxepunk/World.hx",377);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(378)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(379)
	return (fe->__Field(HX_CSTRING("_renderPrev"),true) == null());
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,isAtFront,return )

bool World_obj::sendBackward( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::sendBackward","com/haxepunk/World.hx",355);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(356)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(357)
	if (((bool((fe->__Field(HX_CSTRING("_world"),true) != hx::ObjectPtr<OBJ_>(this))) || bool((fe->__Field(HX_CSTRING("_renderNext"),true) == null()))))){
		HX_STACK_LINE(357)
		return false;
	}
	HX_STACK_LINE(359)
	fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
	HX_STACK_LINE(360)
	if (((fe->__Field(HX_CSTRING("_renderPrev"),true) != null()))){
		HX_STACK_LINE(360)
		fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true);
	}
	else{
		HX_STACK_LINE(361)
		this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderNext"),true));
	}
	HX_STACK_LINE(363)
	fe->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderNext"),true);
	HX_STACK_LINE(364)
	fe->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true)->__Field(HX_CSTRING("_renderNext"),true);
	HX_STACK_LINE(365)
	fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = e;
	HX_STACK_LINE(366)
	if (((fe->__Field(HX_CSTRING("_renderNext"),true) != null()))){
		HX_STACK_LINE(366)
		fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = e;
	}
	else{
		HX_STACK_LINE(367)
		this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),e);
	}
	HX_STACK_LINE(368)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,sendBackward,return )

bool World_obj::bringForward( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::bringForward","com/haxepunk/World.hx",333);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(334)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(335)
	if (((bool((fe->__Field(HX_CSTRING("_world"),true) != hx::ObjectPtr<OBJ_>(this))) || bool((fe->__Field(HX_CSTRING("_renderPrev"),true) == null()))))){
		HX_STACK_LINE(335)
		return false;
	}
	HX_STACK_LINE(337)
	fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true);
	HX_STACK_LINE(338)
	if (((fe->__Field(HX_CSTRING("_renderNext"),true) != null()))){
		HX_STACK_LINE(338)
		fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
	}
	else{
		HX_STACK_LINE(339)
		this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderPrev"),true));
	}
	HX_STACK_LINE(341)
	fe->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
	HX_STACK_LINE(342)
	fe->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true)->__Field(HX_CSTRING("_renderPrev"),true);
	HX_STACK_LINE(343)
	fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = e;
	HX_STACK_LINE(344)
	if (((fe->__Field(HX_CSTRING("_renderPrev"),true) != null()))){
		HX_STACK_LINE(344)
		fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = e;
	}
	else{
		HX_STACK_LINE(345)
		this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),e);
	}
	HX_STACK_LINE(346)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,bringForward,return )

bool World_obj::sendToBack( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::sendToBack","com/haxepunk/World.hx",312);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(313)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(314)
	if (((bool((fe->__Field(HX_CSTRING("_world"),true) != hx::ObjectPtr<OBJ_>(this))) || bool((fe->__Field(HX_CSTRING("_renderNext"),true) == null()))))){
		HX_STACK_LINE(314)
		return false;
	}
	HX_STACK_LINE(316)
	fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
	HX_STACK_LINE(317)
	if (((fe->__Field(HX_CSTRING("_renderPrev"),true) != null()))){
		HX_STACK_LINE(317)
		fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true);
	}
	else{
		HX_STACK_LINE(318)
		this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderNext"),true));
	}
	HX_STACK_LINE(320)
	fe->__FieldRef(HX_CSTRING("_renderPrev")) = this->_renderLast->get(fe->__Field(HX_CSTRING("_layer"),true));
	HX_STACK_LINE(321)
	fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = e;
	HX_STACK_LINE(322)
	this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),e);
	HX_STACK_LINE(323)
	fe->__FieldRef(HX_CSTRING("_renderNext")) = null();
	HX_STACK_LINE(324)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,sendToBack,return )

bool World_obj::bringToFront( ::com::haxepunk::Entity e){
	HX_STACK_PUSH("World::bringToFront","com/haxepunk/World.hx",291);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(292)
	Dynamic fe = e;		HX_STACK_VAR(fe,"fe");
	HX_STACK_LINE(293)
	if (((bool((fe->__Field(HX_CSTRING("_world"),true) != hx::ObjectPtr<OBJ_>(this))) || bool((fe->__Field(HX_CSTRING("_renderPrev"),true) == null()))))){
		HX_STACK_LINE(293)
		return false;
	}
	HX_STACK_LINE(295)
	fe->__Field(HX_CSTRING("_renderPrev"),true)->__FieldRef(HX_CSTRING("_renderNext")) = fe->__Field(HX_CSTRING("_renderNext"),true);
	HX_STACK_LINE(296)
	if (((fe->__Field(HX_CSTRING("_renderNext"),true) != null()))){
		HX_STACK_LINE(296)
		fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = fe->__Field(HX_CSTRING("_renderPrev"),true);
	}
	else{
		HX_STACK_LINE(297)
		this->_renderLast->set(fe->__Field(HX_CSTRING("_layer"),true),fe->__Field(HX_CSTRING("_renderPrev"),true));
	}
	HX_STACK_LINE(299)
	fe->__FieldRef(HX_CSTRING("_renderNext")) = this->_renderFirst->get(fe->__Field(HX_CSTRING("_layer"),true));
	HX_STACK_LINE(300)
	fe->__Field(HX_CSTRING("_renderNext"),true)->__FieldRef(HX_CSTRING("_renderPrev")) = e;
	HX_STACK_LINE(301)
	this->_renderFirst->set(fe->__Field(HX_CSTRING("_layer"),true),e);
	HX_STACK_LINE(302)
	fe->__FieldRef(HX_CSTRING("_renderPrev")) = null();
	HX_STACK_LINE(303)
	return true;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,bringToFront,return )

Void World_obj::clearRecycledAll( ){
{
		HX_STACK_PUSH("World::clearRecycledAll","com/haxepunk/World.hx",275);
		HX_STACK_THIS(this);
		HX_STACK_LINE(276)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		Dynamic fe;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(278)
		for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->_recycled->iterator());  __it->hasNext(); ){
			::com::haxepunk::Entity e1 = __it->next();
			{
				HX_STACK_LINE(280)
				fe = e1;
				HX_STACK_LINE(281)
				this->clearRecycled(fe->__Field(HX_CSTRING("_class"),true));
			}
;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,clearRecycledAll,(void))

Void World_obj::clearRecycled( ::String classType){
{
		HX_STACK_PUSH("World::clearRecycled","com/haxepunk/World.hx",257);
		HX_STACK_THIS(this);
		HX_STACK_ARG(classType,"classType");
		HX_STACK_LINE(258)
		::com::haxepunk::Entity e = this->_recycled->get(classType);		HX_STACK_VAR(e,"e");
		Dynamic fe;		HX_STACK_VAR(fe,"fe");
		::com::haxepunk::Entity n;		HX_STACK_VAR(n,"n");
		HX_STACK_LINE(261)
		while(((e != null()))){
			HX_STACK_LINE(263)
			fe = e;
			HX_STACK_LINE(264)
			n = fe->__Field(HX_CSTRING("_recycleNext"),true);
			HX_STACK_LINE(265)
			fe->__FieldRef(HX_CSTRING("_recycleNext")) = null();
			HX_STACK_LINE(266)
			e = n;
		}
		HX_STACK_LINE(268)
		this->_recycled->set(classType,null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,clearRecycled,(void))

Dynamic World_obj::recycle( Dynamic e){
	HX_STACK_PUSH("World::recycle","com/haxepunk/World.hx",247);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(248)
	this->_recycle[this->_recycle->length] = e;
	HX_STACK_LINE(249)
	return this->remove(e);
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,recycle,return )

Dynamic World_obj::create( ::Class classType,hx::Null< bool >  __o_addToWorld){
bool addToWorld = __o_addToWorld.Default(true);
	HX_STACK_PUSH("World::create","com/haxepunk/World.hx",226);
	HX_STACK_THIS(this);
	HX_STACK_ARG(classType,"classType");
	HX_STACK_ARG(addToWorld,"addToWorld");
{
		HX_STACK_LINE(227)
		::String className = ::Type_obj::getClassName(classType);		HX_STACK_VAR(className,"className");
		HX_STACK_LINE(228)
		Dynamic fe = this->_recycled->get(className);		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(229)
		if (((fe != null()))){
			HX_STACK_LINE(231)
			this->_recycled->set(className,fe->__Field(HX_CSTRING("_recycleNext"),true));
			HX_STACK_LINE(232)
			fe->__FieldRef(HX_CSTRING("_recycleNext")) = null();
		}
		else{
			HX_STACK_LINE(234)
			fe = ::Type_obj::createInstance(classType,Dynamic( Array_obj<Dynamic>::__new()));
		}
		HX_STACK_LINE(235)
		Dynamic e = fe;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(236)
		if ((addToWorld)){
			HX_STACK_LINE(236)
			return this->add(e);
		}
		HX_STACK_LINE(237)
		return e;
	}
}


HX_DEFINE_DYNAMIC_FUNC2(World_obj,create,return )

::com::haxepunk::Entity World_obj::addMask( ::com::haxepunk::Mask mask,::String type,hx::Null< int >  __o_x,hx::Null< int >  __o_y){
int x = __o_x.Default(0);
int y = __o_y.Default(0);
	HX_STACK_PUSH("World::addMask","com/haxepunk/World.hx",212);
	HX_STACK_THIS(this);
	HX_STACK_ARG(mask,"mask");
	HX_STACK_ARG(type,"type");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(213)
		::com::haxepunk::Entity e = ::com::haxepunk::Entity_obj::__new(x,y,null(),mask);		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(214)
		if (((type != HX_CSTRING("")))){
			HX_STACK_LINE(214)
			e->setType(type);
		}
		HX_STACK_LINE(215)
		e->active = e->visible = false;
		HX_STACK_LINE(216)
		return this->add(e);
	}
}


HX_DEFINE_DYNAMIC_FUNC4(World_obj,addMask,return )

::com::haxepunk::Entity World_obj::addGraphic( ::com::haxepunk::Graphic graphic,hx::Null< int >  __o_layer,hx::Null< Float >  __o_x,hx::Null< Float >  __o_y){
int layer = __o_layer.Default(10);
Float x = __o_x.Default(0);
Float y = __o_y.Default(0);
	HX_STACK_PUSH("World::addGraphic","com/haxepunk/World.hx",196);
	HX_STACK_THIS(this);
	HX_STACK_ARG(graphic,"graphic");
	HX_STACK_ARG(layer,"layer");
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(197)
		::com::haxepunk::Entity e = ::com::haxepunk::Entity_obj::__new(x,y,graphic,null());		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(198)
		if (((layer != (int)10))){
			HX_STACK_LINE(198)
			e->setLayer(layer);
		}
		HX_STACK_LINE(199)
		e->active = false;
		HX_STACK_LINE(200)
		return this->add(e);
	}
}


HX_DEFINE_DYNAMIC_FUNC4(World_obj,addGraphic,return )

Void World_obj::removeList( Dynamic list){
{
		HX_STACK_PUSH("World::removeList","com/haxepunk/World.hx",183);
		HX_STACK_THIS(this);
		HX_STACK_ARG(list,"list");
		HX_STACK_LINE(183)
		for(::cpp::FastIterator_obj< Dynamic > *__it = ::cpp::CreateFastIterator< Dynamic >(list->__Field(HX_CSTRING("iterator"),true)());  __it->hasNext(); ){
			Dynamic e = __it->next();
			this->remove(e);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,removeList,(void))

Void World_obj::addList( Dynamic list){
{
		HX_STACK_PUSH("World::addList","com/haxepunk/World.hx",174);
		HX_STACK_THIS(this);
		HX_STACK_ARG(list,"list");
		HX_STACK_LINE(174)
		for(::cpp::FastIterator_obj< Dynamic > *__it = ::cpp::CreateFastIterator< Dynamic >(list->__Field(HX_CSTRING("iterator"),true)());  __it->hasNext(); ){
			Dynamic e = __it->next();
			this->add(e);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,addList,(void))

Void World_obj::removeAll( ){
{
		HX_STACK_PUSH("World::removeAll","com/haxepunk/World.hx",160);
		HX_STACK_THIS(this);
		HX_STACK_LINE(161)
		Dynamic fe = this->_updateFirst;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(162)
		while(((fe != null()))){
			HX_STACK_LINE(164)
			this->_remove[this->_remove->length] = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(165)
			fe = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,removeAll,(void))

Dynamic World_obj::remove( Dynamic e){
	HX_STACK_PUSH("World::remove","com/haxepunk/World.hx",151);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(152)
	this->_remove[this->_remove->length] = e;
	HX_STACK_LINE(153)
	return e;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,remove,return )

Dynamic World_obj::add( Dynamic e){
	HX_STACK_PUSH("World::add","com/haxepunk/World.hx",140);
	HX_STACK_THIS(this);
	HX_STACK_ARG(e,"e");
	HX_STACK_LINE(141)
	this->_add[this->_add->length] = e;
	HX_STACK_LINE(142)
	return e;
}


HX_DEFINE_DYNAMIC_FUNC1(World_obj,add,return )

int World_obj::getMouseY( ){
	HX_STACK_PUSH("World::getMouseY","com/haxepunk/World.hx",130);
	HX_STACK_THIS(this);
	HX_STACK_LINE(130)
	return ::Std_obj::_int((::com::haxepunk::HXP_obj::screen->getMouseY() + ::com::haxepunk::HXP_obj::camera->y));
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getMouseY,return )

int World_obj::getMouseX( ){
	HX_STACK_PUSH("World::getMouseX","com/haxepunk/World.hx",121);
	HX_STACK_THIS(this);
	HX_STACK_LINE(121)
	return ::Std_obj::_int((::com::haxepunk::HXP_obj::screen->getMouseX() + ::com::haxepunk::HXP_obj::camera->x));
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,getMouseX,return )

Void World_obj::render( ){
{
		HX_STACK_PUSH("World::render","com/haxepunk/World.hx",99);
		HX_STACK_THIS(this);
		HX_STACK_LINE(101)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		Dynamic fe;		HX_STACK_VAR(fe,"fe");
		int i = this->_layerList->length;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(104)
		while((((i)-- > (int)0))){
			HX_STACK_LINE(106)
			fe = this->_renderLast->get(this->_layerList->__get(i));
			HX_STACK_LINE(107)
			while(((fe != null()))){
				HX_STACK_LINE(109)
				e = hx::TCast< com::haxepunk::Entity >::cast(fe);
				HX_STACK_LINE(110)
				if ((e->visible)){
					HX_STACK_LINE(110)
					e->render();
				}
				HX_STACK_LINE(111)
				fe = fe->__Field(HX_CSTRING("_renderPrev"),true);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,render,(void))

Void World_obj::update( ){
{
		HX_STACK_PUSH("World::update","com/haxepunk/World.hx",76);
		HX_STACK_THIS(this);
		HX_STACK_LINE(78)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		Dynamic fe = this->_updateFirst;		HX_STACK_VAR(fe,"fe");
		HX_STACK_LINE(80)
		while(((fe != null()))){
			HX_STACK_LINE(82)
			e = hx::TCast< com::haxepunk::Entity >::cast(fe);
			HX_STACK_LINE(83)
			if ((e->active)){
				HX_STACK_LINE(85)
				if ((e->getTween())){
					HX_STACK_LINE(85)
					e->updateTweens();
				}
				HX_STACK_LINE(86)
				e->update();
			}
			HX_STACK_LINE(88)
			if (((bool((e->_graphic != null())) && bool(e->_graphic->active)))){
				HX_STACK_LINE(88)
				e->_graphic->update();
			}
			HX_STACK_LINE(89)
			fe = fe->__Field(HX_CSTRING("_updateNext"),true);
		}
	}
return null();
}


Void World_obj::focusLost( ){
{
		HX_STACK_PUSH("World::focusLost","com/haxepunk/World.hx",68);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,focusLost,(void))

Void World_obj::focusGained( ){
{
		HX_STACK_PUSH("World::focusGained","com/haxepunk/World.hx",63);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,focusGained,(void))

Void World_obj::end( ){
{
		HX_STACK_PUSH("World::end","com/haxepunk/World.hx",58);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,end,(void))

Void World_obj::begin( ){
{
		HX_STACK_PUSH("World::begin","com/haxepunk/World.hx",53);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(World_obj,begin,(void))

Float World_obj::squareRects( Float x1,Float y1,Float w1,Float h1,Float x2,Float y2,Float w2,Float h2){
	HX_STACK_PUSH("World::squareRects","com/haxepunk/World.hx",1226);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(w1,"w1");
	HX_STACK_ARG(h1,"h1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
	HX_STACK_ARG(w2,"w2");
	HX_STACK_ARG(h2,"h2");
	HX_STACK_LINE(1227)
	if (((bool((x1 < (x2 + w2))) && bool((x2 < (x1 + w1)))))){
		HX_STACK_LINE(1229)
		if (((bool((y1 < (y2 + h2))) && bool((y2 < (y1 + h1)))))){
			HX_STACK_LINE(1229)
			return (int)0;
		}
		HX_STACK_LINE(1230)
		if (((y1 > y2))){
			HX_STACK_LINE(1230)
			return (((y1 - ((y2 + h2)))) * ((y1 - ((y2 + h2)))));
		}
		HX_STACK_LINE(1231)
		return (((y2 - ((y1 + h1)))) * ((y2 - ((y1 + h1)))));
	}
	HX_STACK_LINE(1233)
	if (((bool((y1 < (y2 + h2))) && bool((y2 < (y1 + h1)))))){
		HX_STACK_LINE(1235)
		if (((x1 > x2))){
			HX_STACK_LINE(1235)
			return (((x1 - ((x2 + w2)))) * ((x1 - ((x2 + w2)))));
		}
		HX_STACK_LINE(1236)
		return (((x2 - ((x1 + w1)))) * ((x2 - ((x1 + w1)))));
	}
	HX_STACK_LINE(1238)
	if (((x1 > x2))){
		HX_STACK_LINE(1240)
		if (((y1 > y2))){
			HX_STACK_LINE(1240)
			return ::com::haxepunk::World_obj::squarePoints(x1,y1,(x2 + w2),(y2 + h2));
		}
		HX_STACK_LINE(1241)
		return ::com::haxepunk::World_obj::squarePoints(x1,(y1 + h1),(x2 + w2),y2);
	}
	HX_STACK_LINE(1243)
	if (((y1 > y2))){
		HX_STACK_LINE(1243)
		return ::com::haxepunk::World_obj::squarePoints((x1 + w1),y1,x2,(y2 + h2));
	}
	HX_STACK_LINE(1244)
	return ::com::haxepunk::World_obj::squarePoints((x1 + w1),(y1 + h1),x2,y2);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC8(World_obj,squareRects,return )

Float World_obj::squarePoints( Float x1,Float y1,Float x2,Float y2){
	HX_STACK_PUSH("World::squarePoints","com/haxepunk/World.hx",1249);
	HX_STACK_ARG(x1,"x1");
	HX_STACK_ARG(y1,"y1");
	HX_STACK_ARG(x2,"x2");
	HX_STACK_ARG(y2,"y2");
	HX_STACK_LINE(1249)
	return ((((x1 - x2)) * ((x1 - x2))) + (((y1 - y2)) * ((y1 - y2))));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(World_obj,squarePoints,return )

Float World_obj::squarePointRect( Float px,Float py,Float rx,Float ry,Float rw,Float rh){
	HX_STACK_PUSH("World::squarePointRect","com/haxepunk/World.hx",1255);
	HX_STACK_ARG(px,"px");
	HX_STACK_ARG(py,"py");
	HX_STACK_ARG(rx,"rx");
	HX_STACK_ARG(ry,"ry");
	HX_STACK_ARG(rw,"rw");
	HX_STACK_ARG(rh,"rh");
	HX_STACK_LINE(1256)
	if (((bool((px >= rx)) && bool((px <= (rx + rw)))))){
		HX_STACK_LINE(1258)
		if (((bool((py >= ry)) && bool((py <= (ry + rh)))))){
			HX_STACK_LINE(1258)
			return (int)0;
		}
		HX_STACK_LINE(1259)
		if (((py > ry))){
			HX_STACK_LINE(1259)
			return (((py - ((ry + rh)))) * ((py - ((ry + rh)))));
		}
		HX_STACK_LINE(1260)
		return (((ry - py)) * ((ry - py)));
	}
	HX_STACK_LINE(1262)
	if (((bool((py >= ry)) && bool((py <= (ry + rh)))))){
		HX_STACK_LINE(1264)
		if (((px > rx))){
			HX_STACK_LINE(1264)
			return (((px - ((rx + rw)))) * ((px - ((rx + rw)))));
		}
		HX_STACK_LINE(1265)
		return (((rx - px)) * ((rx - px)));
	}
	HX_STACK_LINE(1267)
	if (((px > rx))){
		HX_STACK_LINE(1269)
		if (((py > ry))){
			HX_STACK_LINE(1269)
			return ::com::haxepunk::World_obj::squarePoints(px,py,(rx + rw),(ry + rh));
		}
		HX_STACK_LINE(1270)
		return ::com::haxepunk::World_obj::squarePoints(px,py,(rx + rw),ry);
	}
	HX_STACK_LINE(1272)
	if (((py > ry))){
		HX_STACK_LINE(1272)
		return ::com::haxepunk::World_obj::squarePoints(px,py,rx,(ry + rh));
	}
	HX_STACK_LINE(1273)
	return ::com::haxepunk::World_obj::squarePoints(px,py,rx,ry);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC6(World_obj,squarePointRect,return )


World_obj::World_obj()
{
}

void World_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(World);
	HX_MARK_MEMBER_NAME(_entityNames,"_entityNames");
	HX_MARK_MEMBER_NAME(_recycled,"_recycled");
	HX_MARK_MEMBER_NAME(_typeCount,"_typeCount");
	HX_MARK_MEMBER_NAME(_typeFirst,"_typeFirst");
	HX_MARK_MEMBER_NAME(_classCount,"_classCount");
	HX_MARK_MEMBER_NAME(_layerSort,"_layerSort");
	HX_MARK_MEMBER_NAME(_layerCount,"_layerCount");
	HX_MARK_MEMBER_NAME(_layerList,"_layerList");
	HX_MARK_MEMBER_NAME(_renderLast,"_renderLast");
	HX_MARK_MEMBER_NAME(_renderFirst,"_renderFirst");
	HX_MARK_MEMBER_NAME(_count,"_count");
	HX_MARK_MEMBER_NAME(_updateFirst,"_updateFirst");
	HX_MARK_MEMBER_NAME(_recycle,"_recycle");
	HX_MARK_MEMBER_NAME(_remove,"_remove");
	HX_MARK_MEMBER_NAME(_add,"_add");
	HX_MARK_MEMBER_NAME(uniqueTypes,"uniqueTypes");
	HX_MARK_MEMBER_NAME(layerNearest,"layerNearest");
	HX_MARK_MEMBER_NAME(layerFarthest,"layerFarthest");
	HX_MARK_MEMBER_NAME(nearest,"nearest");
	HX_MARK_MEMBER_NAME(farthest,"farthest");
	HX_MARK_MEMBER_NAME(layers,"layers");
	HX_MARK_MEMBER_NAME(first,"first");
	HX_MARK_MEMBER_NAME(count,"count");
	HX_MARK_MEMBER_NAME(mouseY,"mouseY");
	HX_MARK_MEMBER_NAME(mouseX,"mouseX");
	HX_MARK_MEMBER_NAME(camera,"camera");
	HX_MARK_MEMBER_NAME(visible,"visible");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void World_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_entityNames,"_entityNames");
	HX_VISIT_MEMBER_NAME(_recycled,"_recycled");
	HX_VISIT_MEMBER_NAME(_typeCount,"_typeCount");
	HX_VISIT_MEMBER_NAME(_typeFirst,"_typeFirst");
	HX_VISIT_MEMBER_NAME(_classCount,"_classCount");
	HX_VISIT_MEMBER_NAME(_layerSort,"_layerSort");
	HX_VISIT_MEMBER_NAME(_layerCount,"_layerCount");
	HX_VISIT_MEMBER_NAME(_layerList,"_layerList");
	HX_VISIT_MEMBER_NAME(_renderLast,"_renderLast");
	HX_VISIT_MEMBER_NAME(_renderFirst,"_renderFirst");
	HX_VISIT_MEMBER_NAME(_count,"_count");
	HX_VISIT_MEMBER_NAME(_updateFirst,"_updateFirst");
	HX_VISIT_MEMBER_NAME(_recycle,"_recycle");
	HX_VISIT_MEMBER_NAME(_remove,"_remove");
	HX_VISIT_MEMBER_NAME(_add,"_add");
	HX_VISIT_MEMBER_NAME(uniqueTypes,"uniqueTypes");
	HX_VISIT_MEMBER_NAME(layerNearest,"layerNearest");
	HX_VISIT_MEMBER_NAME(layerFarthest,"layerFarthest");
	HX_VISIT_MEMBER_NAME(nearest,"nearest");
	HX_VISIT_MEMBER_NAME(farthest,"farthest");
	HX_VISIT_MEMBER_NAME(layers,"layers");
	HX_VISIT_MEMBER_NAME(first,"first");
	HX_VISIT_MEMBER_NAME(count,"count");
	HX_VISIT_MEMBER_NAME(mouseY,"mouseY");
	HX_VISIT_MEMBER_NAME(mouseX,"mouseX");
	HX_VISIT_MEMBER_NAME(camera,"camera");
	HX_VISIT_MEMBER_NAME(visible,"visible");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic World_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		if (HX_FIELD_EQ(inName,"end") ) { return end_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"_add") ) { return _add; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"first") ) { return inCallProp ? getFirst() : first; }
		if (HX_FIELD_EQ(inName,"count") ) { return inCallProp ? getCount() : count; }
		if (HX_FIELD_EQ(inName,"begin") ) { return begin_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_count") ) { return _count; }
		if (HX_FIELD_EQ(inName,"getAll") ) { return getAll_dyn(); }
		if (HX_FIELD_EQ(inName,"layers") ) { return inCallProp ? getLayers() : layers; }
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		if (HX_FIELD_EQ(inName,"remove") ) { return remove_dyn(); }
		if (HX_FIELD_EQ(inName,"mouseY") ) { return inCallProp ? getMouseY() : mouseY; }
		if (HX_FIELD_EQ(inName,"mouseX") ) { return inCallProp ? getMouseX() : mouseX; }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"camera") ) { return camera; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_remove") ) { return _remove; }
		if (HX_FIELD_EQ(inName,"addType") ) { return addType_dyn(); }
		if (HX_FIELD_EQ(inName,"getType") ) { return getType_dyn(); }
		if (HX_FIELD_EQ(inName,"nearest") ) { return inCallProp ? getNearest() : nearest; }
		if (HX_FIELD_EQ(inName,"recycle") ) { return recycle_dyn(); }
		if (HX_FIELD_EQ(inName,"addMask") ) { return addMask_dyn(); }
		if (HX_FIELD_EQ(inName,"addList") ) { return addList_dyn(); }
		if (HX_FIELD_EQ(inName,"visible") ) { return visible; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_recycle") ) { return _recycle; }
		if (HX_FIELD_EQ(inName,"getLayer") ) { return getLayer_dyn(); }
		if (HX_FIELD_EQ(inName,"getClass") ) { return getClass_dyn(); }
		if (HX_FIELD_EQ(inName,"farthest") ) { return inCallProp ? getFarthest() : farthest; }
		if (HX_FIELD_EQ(inName,"getFirst") ) { return getFirst_dyn(); }
		if (HX_FIELD_EQ(inName,"getCount") ) { return getCount_dyn(); }
		if (HX_FIELD_EQ(inName,"isAtBack") ) { return isAtBack_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_recycled") ) { return _recycled; }
		if (HX_FIELD_EQ(inName,"addRender") ) { return addRender_dyn(); }
		if (HX_FIELD_EQ(inName,"addUpdate") ) { return addUpdate_dyn(); }
		if (HX_FIELD_EQ(inName,"layerSort") ) { return layerSort_dyn(); }
		if (HX_FIELD_EQ(inName,"layerLast") ) { return layerLast_dyn(); }
		if (HX_FIELD_EQ(inName,"typeFirst") ) { return typeFirst_dyn(); }
		if (HX_FIELD_EQ(inName,"getLayers") ) { return getLayers_dyn(); }
		if (HX_FIELD_EQ(inName,"typeCount") ) { return typeCount_dyn(); }
		if (HX_FIELD_EQ(inName,"isAtFront") ) { return isAtFront_dyn(); }
		if (HX_FIELD_EQ(inName,"removeAll") ) { return removeAll_dyn(); }
		if (HX_FIELD_EQ(inName,"getMouseY") ) { return getMouseY_dyn(); }
		if (HX_FIELD_EQ(inName,"getMouseX") ) { return getMouseX_dyn(); }
		if (HX_FIELD_EQ(inName,"focusLost") ) { return focusLost_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_typeCount") ) { return _typeCount; }
		if (HX_FIELD_EQ(inName,"_typeFirst") ) { return _typeFirst; }
		if (HX_FIELD_EQ(inName,"_layerSort") ) { return _layerSort; }
		if (HX_FIELD_EQ(inName,"_layerList") ) { return _layerList; }
		if (HX_FIELD_EQ(inName,"removeType") ) { return removeType_dyn(); }
		if (HX_FIELD_EQ(inName,"getNearest") ) { return getNearest_dyn(); }
		if (HX_FIELD_EQ(inName,"layerFirst") ) { return layerFirst_dyn(); }
		if (HX_FIELD_EQ(inName,"classFirst") ) { return classFirst_dyn(); }
		if (HX_FIELD_EQ(inName,"layerCount") ) { return layerCount_dyn(); }
		if (HX_FIELD_EQ(inName,"classCount") ) { return classCount_dyn(); }
		if (HX_FIELD_EQ(inName,"sendToBack") ) { return sendToBack_dyn(); }
		if (HX_FIELD_EQ(inName,"addGraphic") ) { return addGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"removeList") ) { return removeList_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"squareRects") ) { return squareRects_dyn(); }
		if (HX_FIELD_EQ(inName,"_classCount") ) { return _classCount; }
		if (HX_FIELD_EQ(inName,"_layerCount") ) { return _layerCount; }
		if (HX_FIELD_EQ(inName,"_renderLast") ) { return _renderLast; }
		if (HX_FIELD_EQ(inName,"updateLists") ) { return updateLists_dyn(); }
		if (HX_FIELD_EQ(inName,"getInstance") ) { return getInstance_dyn(); }
		if (HX_FIELD_EQ(inName,"uniqueTypes") ) { return inCallProp ? getUniqueTypes() : uniqueTypes; }
		if (HX_FIELD_EQ(inName,"getFarthest") ) { return getFarthest_dyn(); }
		if (HX_FIELD_EQ(inName,"collideLine") ) { return collideLine_dyn(); }
		if (HX_FIELD_EQ(inName,"collideRect") ) { return collideRect_dyn(); }
		if (HX_FIELD_EQ(inName,"focusGained") ) { return focusGained_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"squarePoints") ) { return squarePoints_dyn(); }
		if (HX_FIELD_EQ(inName,"_entityNames") ) { return _entityNames; }
		if (HX_FIELD_EQ(inName,"_renderFirst") ) { return _renderFirst; }
		if (HX_FIELD_EQ(inName,"_updateFirst") ) { return _updateFirst; }
		if (HX_FIELD_EQ(inName,"registerName") ) { return registerName_dyn(); }
		if (HX_FIELD_EQ(inName,"removeRender") ) { return removeRender_dyn(); }
		if (HX_FIELD_EQ(inName,"removeUpdate") ) { return removeUpdate_dyn(); }
		if (HX_FIELD_EQ(inName,"layerNearest") ) { return inCallProp ? getLayerNearest() : layerNearest; }
		if (HX_FIELD_EQ(inName,"collidePoint") ) { return collidePoint_dyn(); }
		if (HX_FIELD_EQ(inName,"sendBackward") ) { return sendBackward_dyn(); }
		if (HX_FIELD_EQ(inName,"bringForward") ) { return bringForward_dyn(); }
		if (HX_FIELD_EQ(inName,"bringToFront") ) { return bringToFront_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"layerFarthest") ) { return inCallProp ? getLayerFarthest() : layerFarthest; }
		if (HX_FIELD_EQ(inName,"nearestToRect") ) { return nearestToRect_dyn(); }
		if (HX_FIELD_EQ(inName,"clearRecycled") ) { return clearRecycled_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"unregisterName") ) { return unregisterName_dyn(); }
		if (HX_FIELD_EQ(inName,"getUniqueTypes") ) { return getUniqueTypes_dyn(); }
		if (HX_FIELD_EQ(inName,"nearestToPoint") ) { return nearestToPoint_dyn(); }
		if (HX_FIELD_EQ(inName,"nearestToClass") ) { return nearestToClass_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"squarePointRect") ) { return squarePointRect_dyn(); }
		if (HX_FIELD_EQ(inName,"getLayerNearest") ) { return getLayerNearest_dyn(); }
		if (HX_FIELD_EQ(inName,"nearestToEntity") ) { return nearestToEntity_dyn(); }
		if (HX_FIELD_EQ(inName,"collideRectInto") ) { return collideRectInto_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"getLayerFarthest") ) { return getLayerFarthest_dyn(); }
		if (HX_FIELD_EQ(inName,"collidePointInto") ) { return collidePointInto_dyn(); }
		if (HX_FIELD_EQ(inName,"clearRecycledAll") ) { return clearRecycledAll_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"collideCircleInto") ) { return collideCircleInto_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic World_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"_add") ) { _add=inValue.Cast< Array< ::com::haxepunk::Entity > >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"first") ) { first=inValue.Cast< ::com::haxepunk::Entity >(); return inValue; }
		if (HX_FIELD_EQ(inName,"count") ) { count=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_count") ) { _count=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"layers") ) { layers=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mouseY") ) { mouseY=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mouseX") ) { mouseX=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"camera") ) { camera=inValue.Cast< ::native::geom::Point >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_remove") ) { _remove=inValue.Cast< Array< ::com::haxepunk::Entity > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"nearest") ) { nearest=inValue.Cast< ::com::haxepunk::Entity >(); return inValue; }
		if (HX_FIELD_EQ(inName,"visible") ) { visible=inValue.Cast< bool >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_recycle") ) { _recycle=inValue.Cast< Array< ::com::haxepunk::Entity > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"farthest") ) { farthest=inValue.Cast< ::com::haxepunk::Entity >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_recycled") ) { _recycled=inValue.Cast< ::Hash >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_typeCount") ) { _typeCount=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_typeFirst") ) { _typeFirst=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_layerSort") ) { _layerSort=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_layerList") ) { _layerList=inValue.Cast< Array< int > >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_classCount") ) { _classCount=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_layerCount") ) { _layerCount=inValue.Cast< Array< int > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_renderLast") ) { _renderLast=inValue.Cast< ::IntHash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"uniqueTypes") ) { uniqueTypes=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_entityNames") ) { _entityNames=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_renderFirst") ) { _renderFirst=inValue.Cast< ::IntHash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_updateFirst") ) { _updateFirst=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"layerNearest") ) { layerNearest=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"layerFarthest") ) { layerFarthest=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void World_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_entityNames"));
	outFields->push(HX_CSTRING("_recycled"));
	outFields->push(HX_CSTRING("_typeCount"));
	outFields->push(HX_CSTRING("_typeFirst"));
	outFields->push(HX_CSTRING("_classCount"));
	outFields->push(HX_CSTRING("_layerSort"));
	outFields->push(HX_CSTRING("_layerCount"));
	outFields->push(HX_CSTRING("_layerList"));
	outFields->push(HX_CSTRING("_renderLast"));
	outFields->push(HX_CSTRING("_renderFirst"));
	outFields->push(HX_CSTRING("_count"));
	outFields->push(HX_CSTRING("_updateFirst"));
	outFields->push(HX_CSTRING("_recycle"));
	outFields->push(HX_CSTRING("_remove"));
	outFields->push(HX_CSTRING("_add"));
	outFields->push(HX_CSTRING("uniqueTypes"));
	outFields->push(HX_CSTRING("layerNearest"));
	outFields->push(HX_CSTRING("layerFarthest"));
	outFields->push(HX_CSTRING("nearest"));
	outFields->push(HX_CSTRING("farthest"));
	outFields->push(HX_CSTRING("layers"));
	outFields->push(HX_CSTRING("first"));
	outFields->push(HX_CSTRING("count"));
	outFields->push(HX_CSTRING("mouseY"));
	outFields->push(HX_CSTRING("mouseX"));
	outFields->push(HX_CSTRING("camera"));
	outFields->push(HX_CSTRING("visible"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("squareRects"),
	HX_CSTRING("squarePoints"),
	HX_CSTRING("squarePointRect"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_entityNames"),
	HX_CSTRING("_recycled"),
	HX_CSTRING("_typeCount"),
	HX_CSTRING("_typeFirst"),
	HX_CSTRING("_classCount"),
	HX_CSTRING("_layerSort"),
	HX_CSTRING("_layerCount"),
	HX_CSTRING("_layerList"),
	HX_CSTRING("_renderLast"),
	HX_CSTRING("_renderFirst"),
	HX_CSTRING("_count"),
	HX_CSTRING("_updateFirst"),
	HX_CSTRING("_recycle"),
	HX_CSTRING("_remove"),
	HX_CSTRING("_add"),
	HX_CSTRING("unregisterName"),
	HX_CSTRING("registerName"),
	HX_CSTRING("removeType"),
	HX_CSTRING("addType"),
	HX_CSTRING("removeRender"),
	HX_CSTRING("addRender"),
	HX_CSTRING("removeUpdate"),
	HX_CSTRING("addUpdate"),
	HX_CSTRING("layerSort"),
	HX_CSTRING("updateLists"),
	HX_CSTRING("getInstance"),
	HX_CSTRING("getAll"),
	HX_CSTRING("getLayer"),
	HX_CSTRING("getClass"),
	HX_CSTRING("getType"),
	HX_CSTRING("getUniqueTypes"),
	HX_CSTRING("uniqueTypes"),
	HX_CSTRING("getLayerNearest"),
	HX_CSTRING("layerNearest"),
	HX_CSTRING("getLayerFarthest"),
	HX_CSTRING("layerFarthest"),
	HX_CSTRING("getNearest"),
	HX_CSTRING("nearest"),
	HX_CSTRING("getFarthest"),
	HX_CSTRING("farthest"),
	HX_CSTRING("layerLast"),
	HX_CSTRING("layerFirst"),
	HX_CSTRING("classFirst"),
	HX_CSTRING("typeFirst"),
	HX_CSTRING("getLayers"),
	HX_CSTRING("layers"),
	HX_CSTRING("getFirst"),
	HX_CSTRING("first"),
	HX_CSTRING("layerCount"),
	HX_CSTRING("classCount"),
	HX_CSTRING("typeCount"),
	HX_CSTRING("getCount"),
	HX_CSTRING("count"),
	HX_CSTRING("nearestToPoint"),
	HX_CSTRING("nearestToClass"),
	HX_CSTRING("nearestToEntity"),
	HX_CSTRING("nearestToRect"),
	HX_CSTRING("collidePointInto"),
	HX_CSTRING("collideCircleInto"),
	HX_CSTRING("collideRectInto"),
	HX_CSTRING("collideLine"),
	HX_CSTRING("collidePoint"),
	HX_CSTRING("collideRect"),
	HX_CSTRING("isAtBack"),
	HX_CSTRING("isAtFront"),
	HX_CSTRING("sendBackward"),
	HX_CSTRING("bringForward"),
	HX_CSTRING("sendToBack"),
	HX_CSTRING("bringToFront"),
	HX_CSTRING("clearRecycledAll"),
	HX_CSTRING("clearRecycled"),
	HX_CSTRING("recycle"),
	HX_CSTRING("create"),
	HX_CSTRING("addMask"),
	HX_CSTRING("addGraphic"),
	HX_CSTRING("removeList"),
	HX_CSTRING("addList"),
	HX_CSTRING("removeAll"),
	HX_CSTRING("remove"),
	HX_CSTRING("add"),
	HX_CSTRING("getMouseY"),
	HX_CSTRING("mouseY"),
	HX_CSTRING("getMouseX"),
	HX_CSTRING("mouseX"),
	HX_CSTRING("render"),
	HX_CSTRING("update"),
	HX_CSTRING("focusLost"),
	HX_CSTRING("focusGained"),
	HX_CSTRING("end"),
	HX_CSTRING("begin"),
	HX_CSTRING("camera"),
	HX_CSTRING("visible"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(World_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(World_obj::__mClass,"__mClass");
};

Class World_obj::__mClass;

void World_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.World"), hx::TCanCast< World_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void World_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
