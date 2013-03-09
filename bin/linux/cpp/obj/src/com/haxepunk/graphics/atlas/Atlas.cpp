#include <hxcpp.h>

#ifndef INCLUDED_IntHash
#include <IntHash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion
#include <com/haxepunk/graphics/atlas/AtlasRegion.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Layer
#include <com/haxepunk/graphics/atlas/Layer.h>
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
#ifndef INCLUDED_native_display_Graphics
#include <native/display/Graphics.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_display_InteractiveObject
#include <native/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_display_Stage
#include <native/display/Stage.h>
#endif
#ifndef INCLUDED_native_display_Tilesheet
#include <native/display/Tilesheet.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{

Void Atlas_obj::__construct(::native::display::BitmapData bd)
{
HX_STACK_PUSH("Atlas::new","com/haxepunk/graphics/atlas/Atlas.hx",43);
{
	HX_STACK_LINE(44)
	this->_layers = ::IntHash_obj::__new();
	HX_STACK_LINE(45)
	this->_tilesheet = ::native::display::Tilesheet_obj::__new(bd);
	HX_STACK_LINE(47)
	this->width = bd->get_width();
	HX_STACK_LINE(48)
	this->height = bd->get_height();
	HX_STACK_LINE(50)
	this->_renderFlags = (int)28;
	HX_STACK_LINE(52)
	::com::haxepunk::graphics::atlas::Atlas_obj::_atlases->push(hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(53)
	this->_tileIndex = (int)0;
}
;
	return null();
}

Atlas_obj::~Atlas_obj() { }

Dynamic Atlas_obj::__CreateEmpty() { return  new Atlas_obj; }
hx::ObjectPtr< Atlas_obj > Atlas_obj::__new(::native::display::BitmapData bd)
{  hx::ObjectPtr< Atlas_obj > result = new Atlas_obj();
	result->__construct(bd);
	return result;}

Dynamic Atlas_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Atlas_obj > result = new Atlas_obj();
	result->__construct(inArgs[0]);
	return result;}

::com::haxepunk::graphics::atlas::AtlasRegion Atlas_obj::createRegion( ::native::geom::Rectangle rect,::native::geom::Point center){
	HX_STACK_PUSH("Atlas::createRegion","com/haxepunk/graphics/atlas/Atlas.hx",198);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rect,"rect");
	HX_STACK_ARG(center,"center");
	HX_STACK_LINE(199)
	this->_tilesheet->addTileRect(rect,center);
	HX_STACK_LINE(200)
	::com::haxepunk::graphics::atlas::AtlasRegion region = ::com::haxepunk::graphics::atlas::AtlasRegion_obj::__new(hx::ObjectPtr<OBJ_>(this),this->_tileIndex,rect);		HX_STACK_VAR(region,"region");
	HX_STACK_LINE(201)
	hx::AddEq(this->_tileIndex,(int)1);
	HX_STACK_LINE(202)
	return region;
}


HX_DEFINE_DYNAMIC_FUNC2(Atlas_obj,createRegion,return )

Void Atlas_obj::prepareTile( int tile,Float x,Float y,int layer,Float scaleX,Float scaleY,Float angle,Float red,Float green,Float blue,Float alpha){
{
		HX_STACK_PUSH("Atlas::prepareTile","com/haxepunk/graphics/atlas/Atlas.hx",130);
		HX_STACK_THIS(this);
		HX_STACK_ARG(tile,"tile");
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_ARG(layer,"layer");
		HX_STACK_ARG(scaleX,"scaleX");
		HX_STACK_ARG(scaleY,"scaleY");
		HX_STACK_ARG(angle,"angle");
		HX_STACK_ARG(red,"red");
		HX_STACK_ARG(green,"green");
		HX_STACK_ARG(blue,"blue");
		HX_STACK_ARG(alpha,"alpha");
		HX_STACK_LINE(131)
		if (((this->_layerIndex != layer))){
			HX_STACK_LINE(131)
			{
				HX_STACK_LINE(131)
				if ((this->_layers->exists(layer))){
					HX_STACK_LINE(131)
					this->_layer = this->_layers->get(layer);
				}
				else{
					HX_STACK_LINE(131)
					this->_layer = ::com::haxepunk::graphics::atlas::Layer_obj::__new();
					HX_STACK_LINE(131)
					this->_layers->set(layer,this->_layer);
				}
				HX_STACK_LINE(131)
				this->_layerIndex = layer;
			}
		}
		HX_STACK_LINE(132)
		Array< Float > d = this->_layer->data;		HX_STACK_VAR(d,"d");
		HX_STACK_LINE(133)
		this->_layer->dirty = true;
		HX_STACK_LINE(135)
		d[(this->_layer->index)++] = x;
		HX_STACK_LINE(136)
		d[(this->_layer->index)++] = y;
		HX_STACK_LINE(137)
		d[(this->_layer->index)++] = tile;
		HX_STACK_LINE(140)
		if (((angle == (int)0))){
			HX_STACK_LINE(143)
			d[(this->_layer->index)++] = scaleX;
			HX_STACK_LINE(144)
			d[(this->_layer->index)++] = (int)0;
			HX_STACK_LINE(145)
			d[(this->_layer->index)++] = (int)0;
			HX_STACK_LINE(146)
			d[(this->_layer->index)++] = scaleY;
		}
		else{
			HX_STACK_LINE(150)
			Float cos = ::Math_obj::cos((angle * ((Float(::Math_obj::PI) / Float((int)-180)))));		HX_STACK_VAR(cos,"cos");
			HX_STACK_LINE(151)
			Float sin = ::Math_obj::sin((angle * ((Float(::Math_obj::PI) / Float((int)-180)))));		HX_STACK_VAR(sin,"sin");
			HX_STACK_LINE(152)
			d[(this->_layer->index)++] = (cos * scaleX);
			HX_STACK_LINE(153)
			d[(this->_layer->index)++] = (sin * scaleX);
			HX_STACK_LINE(154)
			d[(this->_layer->index)++] = (-(sin) * scaleY);
			HX_STACK_LINE(155)
			d[(this->_layer->index)++] = (cos * scaleY);
		}
		HX_STACK_LINE(158)
		d[(this->_layer->index)++] = red;
		HX_STACK_LINE(159)
		d[(this->_layer->index)++] = green;
		HX_STACK_LINE(160)
		d[(this->_layer->index)++] = blue;
		HX_STACK_LINE(161)
		d[(this->_layer->index)++] = alpha;
		HX_STACK_LINE(163)
		if (((this->_layer->index > ::com::haxepunk::graphics::atlas::Atlas_obj::drawCallThreshold))){
			HX_STACK_LINE(165)
			{
				HX_STACK_LINE(165)
				::com::haxepunk::graphics::atlas::Layer _this = this->_layer;		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(165)
				if (((_this->index < _this->data->length))){
					HX_STACK_LINE(165)
					_this->data->splice(_this->index,(_this->data->length - _this->index));
				}
				HX_STACK_LINE(165)
				_this->index = (int)0;
				HX_STACK_LINE(165)
				_this->dirty = false;
			}
			struct _Function_2_1{
				inline static ::native::display::Sprite Block( int &layer){
					HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/Atlas.hx",166);
					{
						HX_STACK_LINE(166)
						::native::display::Sprite sprite = ::native::display::Sprite_obj::__new();		HX_STACK_VAR(sprite,"sprite");
						HX_STACK_LINE(166)
						int idx = (int)0;		HX_STACK_VAR(idx,"idx");
						HX_STACK_LINE(166)
						for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->keys());  __it->hasNext(); ){
							int l = __it->next();
							{
								HX_STACK_LINE(166)
								if (((l < layer))){
									HX_STACK_LINE(166)
									break;
								}
								HX_STACK_LINE(166)
								hx::AddEq(idx,(int)1);
							}
;
						}
						HX_STACK_LINE(166)
						::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->set(layer,sprite);
						HX_STACK_LINE(166)
						::com::haxepunk::HXP_obj::stage->addChildAt(sprite,idx);
						HX_STACK_LINE(166)
						return sprite;
					}
					return null();
				}
			};
			HX_STACK_LINE(166)
			((  ((::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->exists(layer))) ? ::native::display::Sprite(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->get(layer)) : ::native::display::Sprite(_Function_2_1::Block(layer)) ))->get_graphics()->drawTiles(this->_tilesheet,this->_layer->data,::com::haxepunk::graphics::atlas::Atlas_obj::smooth,this->_renderFlags);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC11(Atlas_obj,prepareTile,(void))

Void Atlas_obj::setLayer( int layer){
{
		HX_STACK_PUSH("Atlas::setLayer","com/haxepunk/graphics/atlas/Atlas.hx",100);
		HX_STACK_THIS(this);
		HX_STACK_ARG(layer,"layer");
		HX_STACK_LINE(101)
		if ((this->_layers->exists(layer))){
			HX_STACK_LINE(102)
			this->_layer = this->_layers->get(layer);
		}
		else{
			HX_STACK_LINE(107)
			this->_layer = ::com::haxepunk::graphics::atlas::Layer_obj::__new();
			HX_STACK_LINE(108)
			this->_layers->set(layer,this->_layer);
		}
		HX_STACK_LINE(110)
		this->_layerIndex = layer;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Atlas_obj,setLayer,(void))

Void Atlas_obj::render( ){
{
		HX_STACK_PUSH("Atlas::render","com/haxepunk/graphics/atlas/Atlas.hx",62);
		HX_STACK_THIS(this);
		HX_STACK_LINE(63)
		::com::haxepunk::graphics::atlas::Layer l;		HX_STACK_VAR(l,"l");
		HX_STACK_LINE(65)
		for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(this->_layers->keys());  __it->hasNext(); ){
			int layer = __it->next();
			{
				HX_STACK_LINE(67)
				l = this->_layers->get(layer);
				HX_STACK_LINE(69)
				if ((l->dirty)){
					HX_STACK_LINE(71)
					{
						HX_STACK_LINE(71)
						if (((l->index < l->data->length))){
							HX_STACK_LINE(71)
							l->data->splice(l->index,(l->data->length - l->index));
						}
						HX_STACK_LINE(71)
						l->index = (int)0;
						HX_STACK_LINE(71)
						l->dirty = false;
					}
					struct _Function_3_1{
						inline static ::native::display::Sprite Block( int &layer){
							HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/Atlas.hx",72);
							{
								HX_STACK_LINE(72)
								::native::display::Sprite sprite = ::native::display::Sprite_obj::__new();		HX_STACK_VAR(sprite,"sprite");
								HX_STACK_LINE(72)
								int idx = (int)0;		HX_STACK_VAR(idx,"idx");
								HX_STACK_LINE(72)
								for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->keys());  __it->hasNext(); ){
									int l1 = __it->next();
									{
										HX_STACK_LINE(72)
										if (((l1 < layer))){
											HX_STACK_LINE(72)
											break;
										}
										HX_STACK_LINE(72)
										hx::AddEq(idx,(int)1);
									}
;
								}
								HX_STACK_LINE(72)
								::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->set(layer,sprite);
								HX_STACK_LINE(72)
								::com::haxepunk::HXP_obj::stage->addChildAt(sprite,idx);
								HX_STACK_LINE(72)
								return sprite;
							}
							return null();
						}
					};
					HX_STACK_LINE(72)
					((  ((::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->exists(layer))) ? ::native::display::Sprite(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->get(layer)) : ::native::display::Sprite(_Function_3_1::Block(layer)) ))->get_graphics()->drawTiles(this->_tilesheet,l->data,::com::haxepunk::graphics::atlas::Atlas_obj::smooth,this->_renderFlags);
				}
			}
;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Atlas_obj,render,(void))

int Atlas_obj::drawCallThreshold;

bool Atlas_obj::smooth;

Void Atlas_obj::clear( ){
{
		HX_STACK_PUSH("Atlas::clear","com/haxepunk/graphics/atlas/Atlas.hx",78);
		HX_STACK_LINE(78)
		for(::cpp::FastIterator_obj< ::native::display::Sprite > *__it = ::cpp::CreateFastIterator< ::native::display::Sprite >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->iterator());  __it->hasNext(); ){
			::native::display::Sprite sprite = __it->next();
			sprite->get_graphics()->clear();
		}
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(Atlas_obj,clear,(void))

Void Atlas_obj::renderAll( ){
{
		HX_STACK_PUSH("Atlas::renderAll","com/haxepunk/graphics/atlas/Atlas.hx",89);
		HX_STACK_LINE(89)
		if (((::com::haxepunk::graphics::atlas::Atlas_obj::_atlases->length > (int)0))){
			HX_STACK_LINE(92)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::graphics::atlas::Atlas > _g1 = ::com::haxepunk::graphics::atlas::Atlas_obj::_atlases;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(92)
			while(((_g < _g1->length))){
				HX_STACK_LINE(92)
				::com::haxepunk::graphics::atlas::Atlas atlas = _g1->__get(_g);		HX_STACK_VAR(atlas,"atlas");
				HX_STACK_LINE(92)
				++(_g);
				HX_STACK_LINE(94)
				{
					HX_STACK_LINE(94)
					::com::haxepunk::graphics::atlas::Layer l;		HX_STACK_VAR(l,"l");
					HX_STACK_LINE(94)
					for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(atlas->_layers->keys());  __it->hasNext(); ){
						int layer = __it->next();
						{
							HX_STACK_LINE(94)
							l = atlas->_layers->get(layer);
							HX_STACK_LINE(94)
							if ((l->dirty)){
								HX_STACK_LINE(94)
								{
									HX_STACK_LINE(94)
									if (((l->index < l->data->length))){
										HX_STACK_LINE(94)
										l->data->splice(l->index,(l->data->length - l->index));
									}
									HX_STACK_LINE(94)
									l->index = (int)0;
									HX_STACK_LINE(94)
									l->dirty = false;
								}
								struct _Function_6_1{
									inline static ::native::display::Sprite Block( int &layer){
										HX_STACK_PUSH("*::closure","com/haxepunk/graphics/atlas/Atlas.hx",94);
										{
											HX_STACK_LINE(94)
											::native::display::Sprite sprite = ::native::display::Sprite_obj::__new();		HX_STACK_VAR(sprite,"sprite");
											HX_STACK_LINE(94)
											int idx = (int)0;		HX_STACK_VAR(idx,"idx");
											HX_STACK_LINE(94)
											for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->keys());  __it->hasNext(); ){
												int l1 = __it->next();
												{
													HX_STACK_LINE(94)
													if (((l1 < layer))){
														HX_STACK_LINE(94)
														break;
													}
													HX_STACK_LINE(94)
													hx::AddEq(idx,(int)1);
												}
;
											}
											HX_STACK_LINE(94)
											::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->set(layer,sprite);
											HX_STACK_LINE(94)
											::com::haxepunk::HXP_obj::stage->addChildAt(sprite,idx);
											HX_STACK_LINE(94)
											return sprite;
										}
										return null();
									}
								};
								HX_STACK_LINE(94)
								((  ((::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->exists(layer))) ? ::native::display::Sprite(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->get(layer)) : ::native::display::Sprite(_Function_6_1::Block(layer)) ))->get_graphics()->drawTiles(atlas->_tilesheet,l->data,::com::haxepunk::graphics::atlas::Atlas_obj::smooth,atlas->_renderFlags);
							}
						}
;
					}
				}
			}
		}
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(Atlas_obj,renderAll,(void))

::native::display::Sprite Atlas_obj::getSpriteByLayer( int layer){
	HX_STACK_PUSH("Atlas::getSpriteByLayer","com/haxepunk/graphics/atlas/Atlas.hx",171);
	HX_STACK_ARG(layer,"layer");
	HX_STACK_LINE(171)
	if ((::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->exists(layer))){
		HX_STACK_LINE(173)
		return ::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->get(layer);
	}
	else{
		HX_STACK_LINE(178)
		::native::display::Sprite sprite = ::native::display::Sprite_obj::__new();		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(179)
		int idx = (int)0;		HX_STACK_VAR(idx,"idx");
		HX_STACK_LINE(180)
		for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->keys());  __it->hasNext(); ){
			int l = __it->next();
			{
				HX_STACK_LINE(182)
				if (((l < layer))){
					HX_STACK_LINE(182)
					break;
				}
				HX_STACK_LINE(183)
				hx::AddEq(idx,(int)1);
			}
;
		}
		HX_STACK_LINE(185)
		::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->set(layer,sprite);
		HX_STACK_LINE(186)
		::com::haxepunk::HXP_obj::stage->addChildAt(sprite,idx);
		HX_STACK_LINE(187)
		return sprite;
	}
	HX_STACK_LINE(171)
	return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(Atlas_obj,getSpriteByLayer,return )

Array< ::com::haxepunk::graphics::atlas::Atlas > Atlas_obj::_atlases;

::IntHash Atlas_obj::_sprites;


Atlas_obj::Atlas_obj()
{
}

void Atlas_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Atlas);
	HX_MARK_MEMBER_NAME(_renderFlags,"_renderFlags");
	HX_MARK_MEMBER_NAME(_layers,"_layers");
	HX_MARK_MEMBER_NAME(_layer,"_layer");
	HX_MARK_MEMBER_NAME(_layerIndex,"_layerIndex");
	HX_MARK_MEMBER_NAME(_tilesheet,"_tilesheet");
	HX_MARK_MEMBER_NAME(_tileIndex,"_tileIndex");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_END_CLASS();
}

void Atlas_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_renderFlags,"_renderFlags");
	HX_VISIT_MEMBER_NAME(_layers,"_layers");
	HX_VISIT_MEMBER_NAME(_layer,"_layer");
	HX_VISIT_MEMBER_NAME(_layerIndex,"_layerIndex");
	HX_VISIT_MEMBER_NAME(_tilesheet,"_tilesheet");
	HX_VISIT_MEMBER_NAME(_tileIndex,"_tileIndex");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
}

Dynamic Atlas_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"clear") ) { return clear_dyn(); }
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"smooth") ) { return smooth; }
		if (HX_FIELD_EQ(inName,"_layer") ) { return _layer; }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_layers") ) { return _layers; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_atlases") ) { return _atlases; }
		if (HX_FIELD_EQ(inName,"_sprites") ) { return _sprites; }
		if (HX_FIELD_EQ(inName,"setLayer") ) { return setLayer_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"renderAll") ) { return renderAll_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_tilesheet") ) { return _tilesheet; }
		if (HX_FIELD_EQ(inName,"_tileIndex") ) { return _tileIndex; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_layerIndex") ) { return _layerIndex; }
		if (HX_FIELD_EQ(inName,"prepareTile") ) { return prepareTile_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_renderFlags") ) { return _renderFlags; }
		if (HX_FIELD_EQ(inName,"createRegion") ) { return createRegion_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"getSpriteByLayer") ) { return getSpriteByLayer_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"drawCallThreshold") ) { return drawCallThreshold; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Atlas_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"smooth") ) { smooth=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_layer") ) { _layer=inValue.Cast< ::com::haxepunk::graphics::atlas::Layer >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_layers") ) { _layers=inValue.Cast< ::IntHash >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_atlases") ) { _atlases=inValue.Cast< Array< ::com::haxepunk::graphics::atlas::Atlas > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_sprites") ) { _sprites=inValue.Cast< ::IntHash >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_tilesheet") ) { _tilesheet=inValue.Cast< ::native::display::Tilesheet >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_tileIndex") ) { _tileIndex=inValue.Cast< int >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_layerIndex") ) { _layerIndex=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_renderFlags") ) { _renderFlags=inValue.Cast< int >(); return inValue; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"drawCallThreshold") ) { drawCallThreshold=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Atlas_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_renderFlags"));
	outFields->push(HX_CSTRING("_layers"));
	outFields->push(HX_CSTRING("_layer"));
	outFields->push(HX_CSTRING("_layerIndex"));
	outFields->push(HX_CSTRING("_tilesheet"));
	outFields->push(HX_CSTRING("_tileIndex"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("drawCallThreshold"),
	HX_CSTRING("smooth"),
	HX_CSTRING("clear"),
	HX_CSTRING("renderAll"),
	HX_CSTRING("getSpriteByLayer"),
	HX_CSTRING("_atlases"),
	HX_CSTRING("_sprites"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_renderFlags"),
	HX_CSTRING("_layers"),
	HX_CSTRING("_layer"),
	HX_CSTRING("_layerIndex"),
	HX_CSTRING("_tilesheet"),
	HX_CSTRING("_tileIndex"),
	HX_CSTRING("createRegion"),
	HX_CSTRING("prepareTile"),
	HX_CSTRING("setLayer"),
	HX_CSTRING("render"),
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Atlas_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Atlas_obj::drawCallThreshold,"drawCallThreshold");
	HX_MARK_MEMBER_NAME(Atlas_obj::smooth,"smooth");
	HX_MARK_MEMBER_NAME(Atlas_obj::_atlases,"_atlases");
	HX_MARK_MEMBER_NAME(Atlas_obj::_sprites,"_sprites");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Atlas_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Atlas_obj::drawCallThreshold,"drawCallThreshold");
	HX_VISIT_MEMBER_NAME(Atlas_obj::smooth,"smooth");
	HX_VISIT_MEMBER_NAME(Atlas_obj::_atlases,"_atlases");
	HX_VISIT_MEMBER_NAME(Atlas_obj::_sprites,"_sprites");
};

Class Atlas_obj::__mClass;

void Atlas_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.atlas.Atlas"), hx::TCanCast< Atlas_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Atlas_obj::__boot()
{
	drawCallThreshold= (int)25000;
	smooth= false;
	_atlases= Array_obj< ::com::haxepunk::graphics::atlas::Atlas >::__new();
	_sprites= ::IntHash_obj::__new();
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas
