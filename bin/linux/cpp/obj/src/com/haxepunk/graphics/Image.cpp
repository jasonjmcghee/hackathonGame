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
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_Screen
#include <com/haxepunk/Screen.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Image
#include <com/haxepunk/graphics/Image.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_AtlasRegion
#include <com/haxepunk/graphics/atlas/AtlasRegion.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_TextureAtlas
#include <com/haxepunk/graphics/atlas/TextureAtlas.h>
#endif
#ifndef INCLUDED_native_display_Bitmap
#include <native/display/Bitmap.h>
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
#ifndef INCLUDED_native_display_PixelSnapping
#include <native/display/PixelSnapping.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
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
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{

Void Image_obj::__construct(Dynamic source,::native::geom::Rectangle clipRect,::String __o_name)
{
HX_STACK_PUSH("Image::new","com/haxepunk/graphics/Image.hx",70);
::String name = __o_name.Default(HX_CSTRING(""));
{
	HX_STACK_LINE(71)
	super::__construct();
	HX_STACK_LINE(72)
	{
		HX_STACK_LINE(72)
		this->angle = (int)0;
		HX_STACK_LINE(72)
		this->scale = this->scaleX = this->scaleY = (int)1;
		HX_STACK_LINE(72)
		this->originX = this->originY = (int)0;
		HX_STACK_LINE(72)
		this->_alpha = (int)1;
		HX_STACK_LINE(72)
		this->_flipped = false;
		HX_STACK_LINE(72)
		this->_color = (int)16777215;
		HX_STACK_LINE(72)
		this->_matrix = ::com::haxepunk::HXP_obj::matrix;
	}
	HX_STACK_LINE(75)
	if (((bool((this->_source == null())) && bool((this->_region == null()))))){
		HX_STACK_LINE(77)
		this->_class = name;
		HX_STACK_LINE(78)
		if ((::Std_obj::is(source,hx::ClassOf< ::native::display::BitmapData >()))){
			HX_STACK_LINE(79)
			{
				HX_STACK_LINE(80)
				this->_blit = true;
				HX_STACK_LINE(80)
				this->_sourceRect = source->__Field(HX_CSTRING("get_rect"),true)();
				HX_STACK_LINE(80)
				this->_source = source;
			}
		}
		else{
			HX_STACK_LINE(82)
			if ((::Std_obj::is(source,hx::ClassOf< ::com::haxepunk::graphics::atlas::TextureAtlas >()))){
				HX_STACK_LINE(83)
				{
					HX_STACK_LINE(84)
					this->_blit = false;
					HX_STACK_LINE(84)
					this->_region = (hx::TCast< com::haxepunk::graphics::atlas::TextureAtlas >::cast(source))->getRegion(name);
					HX_STACK_LINE(84)
					this->_sourceRect = ::native::geom::Rectangle_obj::__new((int)0,(int)0,this->_region->rect->width,this->_region->rect->height);
				}
			}
			else{
				HX_STACK_LINE(86)
				if ((::Std_obj::is(source,hx::ClassOf< ::com::haxepunk::graphics::atlas::AtlasRegion >()))){
					HX_STACK_LINE(87)
					{
						HX_STACK_LINE(88)
						this->_blit = false;
						HX_STACK_LINE(88)
						this->_region = source;
						HX_STACK_LINE(88)
						this->_sourceRect = ::native::geom::Rectangle_obj::__new((int)0,(int)0,this->_region->rect->width,this->_region->rect->height);
					}
				}
				else{
					HX_STACK_LINE(92)
					if ((::Std_obj::is(source,hx::ClassOf< ::String >()))){
						HX_STACK_LINE(93)
						this->_class = source;
					}
					else{
						HX_STACK_LINE(94)
						if (((name == HX_CSTRING("")))){
							HX_STACK_LINE(95)
							this->_class = ::Type_obj::getClassName(::Type_obj::getClass(source));
						}
					}
					HX_STACK_LINE(96)
					{
						HX_STACK_LINE(96)
						::native::display::BitmapData bitmap = ::com::haxepunk::HXP_obj::getBitmap(source);		HX_STACK_VAR(bitmap,"bitmap");
						HX_STACK_LINE(96)
						this->_blit = true;
						HX_STACK_LINE(96)
						this->_sourceRect = bitmap->get_rect();
						HX_STACK_LINE(96)
						this->_source = bitmap;
					}
				}
			}
		}
		HX_STACK_LINE(99)
		if (((bool((this->_source == null())) && bool((this->_region == null()))))){
			HX_STACK_LINE(99)
			hx::Throw (HX_CSTRING("Invalid source image."));
		}
	}
	HX_STACK_LINE(102)
	if (((clipRect != null()))){
		HX_STACK_LINE(104)
		if (((clipRect->width == (int)0))){
			HX_STACK_LINE(104)
			clipRect->width = this->_sourceRect->width;
		}
		HX_STACK_LINE(105)
		if (((clipRect->height == (int)0))){
			HX_STACK_LINE(105)
			clipRect->height = this->_sourceRect->height;
		}
		HX_STACK_LINE(106)
		if ((!(this->_blit))){
			HX_STACK_LINE(107)
			this->_region = this->_region->clip(clipRect,null());
		}
		HX_STACK_LINE(110)
		this->_sourceRect = clipRect;
	}
	HX_STACK_LINE(113)
	if ((this->_blit)){
		HX_STACK_LINE(115)
		this->_bitmap = ::native::display::Bitmap_obj::__new(null(),null(),null());
		HX_STACK_LINE(116)
		this->_colorTransform = ::native::geom::ColorTransform_obj::__new(null(),null(),null(),null(),null(),null(),null(),null());
		HX_STACK_LINE(118)
		this->createBuffer();
		HX_STACK_LINE(119)
		this->updateBuffer(null());
	}
}
;
	return null();
}

Image_obj::~Image_obj() { }

Dynamic Image_obj::__CreateEmpty() { return  new Image_obj; }
hx::ObjectPtr< Image_obj > Image_obj::__new(Dynamic source,::native::geom::Rectangle clipRect,::String __o_name)
{  hx::ObjectPtr< Image_obj > result = new Image_obj();
	result->__construct(source,clipRect,__o_name);
	return result;}

Dynamic Image_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Image_obj > result = new Image_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

::native::geom::Rectangle Image_obj::getClipRect( ){
	HX_STACK_PUSH("Image::getClipRect","com/haxepunk/graphics/Image.hx",398);
	HX_STACK_THIS(this);
	HX_STACK_LINE(398)
	return this->_sourceRect;
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getClipRect,return )

int Image_obj::getScaledHeight( ){
	HX_STACK_PUSH("Image::getScaledHeight","com/haxepunk/graphics/Image.hx",392);
	HX_STACK_THIS(this);
	HX_STACK_LINE(392)
	return ::Std_obj::_int(((this->getHeight() * this->scaleY) * this->scale));
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getScaledHeight,return )

int Image_obj::getScaledWidth( ){
	HX_STACK_PUSH("Image::getScaledWidth","com/haxepunk/graphics/Image.hx",386);
	HX_STACK_THIS(this);
	HX_STACK_LINE(386)
	return ::Std_obj::_int(((this->getWidth() * this->scaleX) * this->scale));
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getScaledWidth,return )

int Image_obj::getHeight( ){
	HX_STACK_PUSH("Image::getHeight","com/haxepunk/graphics/Image.hx",380);
	HX_STACK_THIS(this);
	HX_STACK_LINE(380)
	return ::Std_obj::_int((  ((this->_blit)) ? Float(this->_bufferRect->height) : Float(this->_region->rect->height) ));
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getHeight,return )

int Image_obj::getWidth( ){
	HX_STACK_PUSH("Image::getWidth","com/haxepunk/graphics/Image.hx",374);
	HX_STACK_THIS(this);
	HX_STACK_LINE(374)
	return ::Std_obj::_int((  ((this->_blit)) ? Float(this->_bufferRect->width) : Float(this->_region->rect->width) ));
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getWidth,return )

Void Image_obj::centerOO( ){
{
		HX_STACK_PUSH("Image::centerOO","com/haxepunk/graphics/Image.hx",362);
		HX_STACK_THIS(this);
		HX_STACK_LINE(363)
		hx::AddEq(this->x,this->originX);
		HX_STACK_LINE(364)
		hx::AddEq(this->y,this->originY);
		HX_STACK_LINE(365)
		this->centerOrigin();
		HX_STACK_LINE(366)
		hx::SubEq(this->x,this->originX);
		HX_STACK_LINE(367)
		hx::SubEq(this->y,this->originY);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,centerOO,(void))

Void Image_obj::centerOrigin( ){
{
		HX_STACK_PUSH("Image::centerOrigin","com/haxepunk/graphics/Image.hx",353);
		HX_STACK_THIS(this);
		HX_STACK_LINE(354)
		this->originX = ::Std_obj::_int((Float(this->getWidth()) / Float((int)2)));
		HX_STACK_LINE(355)
		this->originY = ::Std_obj::_int((Float(this->getHeight()) / Float((int)2)));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,centerOrigin,(void))

bool Image_obj::setFlipped( bool value){
	HX_STACK_PUSH("Image::setFlipped","com/haxepunk/graphics/Image.hx",319);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(320)
	if (((bool((this->_flipped == value)) || bool((this->_class == HX_CSTRING("")))))){
		HX_STACK_LINE(320)
		return value;
	}
	HX_STACK_LINE(322)
	this->_flipped = value;
	HX_STACK_LINE(323)
	if ((this->_blit)){
		HX_STACK_LINE(325)
		::native::display::BitmapData temp = this->_source;		HX_STACK_VAR(temp,"temp");
		HX_STACK_LINE(326)
		if (((bool(!(value)) || bool((this->_flip != null()))))){
			HX_STACK_LINE(327)
			this->_source = this->_flip;
		}
		else{
			HX_STACK_LINE(330)
			if ((::com::haxepunk::graphics::Image_obj::_flips->exists(this->_class))){
				HX_STACK_LINE(331)
				this->_source = ::com::haxepunk::graphics::Image_obj::_flips->get(this->_class);
			}
			else{
				HX_STACK_LINE(336)
				this->_source = ::com::haxepunk::HXP_obj::createBitmap(this->_source->get_width(),this->_source->get_height(),true,null());
				HX_STACK_LINE(337)
				::com::haxepunk::graphics::Image_obj::_flips->set(this->_class,this->_source);
				HX_STACK_LINE(338)
				::com::haxepunk::HXP_obj::matrix->identity();
				HX_STACK_LINE(339)
				::com::haxepunk::HXP_obj::matrix->a = (int)-1;
				HX_STACK_LINE(340)
				::com::haxepunk::HXP_obj::matrix->tx = this->_source->get_width();
				HX_STACK_LINE(341)
				this->_source->draw(temp,::com::haxepunk::HXP_obj::matrix,null(),null(),null(),null());
			}
		}
		HX_STACK_LINE(343)
		this->_flip = temp;
		HX_STACK_LINE(344)
		this->updateBuffer(null());
	}
	HX_STACK_LINE(346)
	return this->_flipped;
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,setFlipped,return )

bool Image_obj::getFlipped( ){
	HX_STACK_PUSH("Image::getFlipped","com/haxepunk/graphics/Image.hx",317);
	HX_STACK_THIS(this);
	HX_STACK_LINE(317)
	return this->_flipped;
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getFlipped,return )

int Image_obj::setColor( int value){
	HX_STACK_PUSH("Image::setColor","com/haxepunk/graphics/Image.hx",289);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(290)
	hx::AndEq(value,(int)16777215);
	HX_STACK_LINE(291)
	if (((this->_color == value))){
		HX_STACK_LINE(291)
		return value;
	}
	HX_STACK_LINE(292)
	this->_color = value;
	HX_STACK_LINE(293)
	if ((this->_blit)){
		HX_STACK_LINE(295)
		if (((bool((this->_alpha == (int)1)) && bool((this->_color == (int)16777215))))){
			HX_STACK_LINE(296)
			this->_tint = null();
		}
		else{
			HX_STACK_LINE(301)
			this->_tint = this->_colorTransform;
			HX_STACK_LINE(302)
			this->_tint->redMultiplier = (Float(((int((int(this->_color) >> int((int)16))) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(303)
			this->_tint->greenMultiplier = (Float(((int((int(this->_color) >> int((int)8))) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(304)
			this->_tint->blueMultiplier = (Float(((int(this->_color) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(305)
			this->_tint->alphaMultiplier = this->_alpha;
		}
		HX_STACK_LINE(307)
		this->updateBuffer(null());
	}
	HX_STACK_LINE(309)
	return this->_color;
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,setColor,return )

int Image_obj::getColor( ){
	HX_STACK_PUSH("Image::getColor","com/haxepunk/graphics/Image.hx",287);
	HX_STACK_THIS(this);
	HX_STACK_LINE(287)
	return this->_color;
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getColor,return )

Float Image_obj::setAlpha( Float value){
	HX_STACK_PUSH("Image::setAlpha","com/haxepunk/graphics/Image.hx",260);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(261)
	value = (  (((value < (int)0))) ? Float((int)0) : Float((  (((value > (int)1))) ? Float((int)1) : Float(value) )) );
	HX_STACK_LINE(262)
	if (((this->_alpha == value))){
		HX_STACK_LINE(262)
		return value;
	}
	HX_STACK_LINE(263)
	this->_alpha = value;
	HX_STACK_LINE(264)
	if ((this->_blit)){
		HX_STACK_LINE(266)
		if (((bool((this->_alpha == (int)1)) && bool((this->_color == (int)16777215))))){
			HX_STACK_LINE(267)
			this->_tint = null();
		}
		else{
			HX_STACK_LINE(272)
			this->_tint = this->_colorTransform;
			HX_STACK_LINE(273)
			this->_tint->redMultiplier = (Float(((int((int(this->_color) >> int((int)16))) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(274)
			this->_tint->greenMultiplier = (Float(((int((int(this->_color) >> int((int)8))) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(275)
			this->_tint->blueMultiplier = (Float(((int(this->_color) & int((int)255)))) / Float((int)255));
			HX_STACK_LINE(276)
			this->_tint->alphaMultiplier = this->_alpha;
		}
		HX_STACK_LINE(278)
		this->updateBuffer(null());
	}
	HX_STACK_LINE(280)
	return this->_alpha;
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,setAlpha,return )

Float Image_obj::getAlpha( ){
	HX_STACK_PUSH("Image::getAlpha","com/haxepunk/graphics/Image.hx",258);
	HX_STACK_THIS(this);
	HX_STACK_LINE(258)
	return this->_alpha;
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,getAlpha,return )

Void Image_obj::clear( ){
{
		HX_STACK_PUSH("Image::clear","com/haxepunk/graphics/Image.hx",249);
		HX_STACK_THIS(this);
		HX_STACK_LINE(250)
		if (((this->_buffer == null()))){
			HX_STACK_LINE(250)
			return null();
		}
		HX_STACK_LINE(251)
		this->_buffer->fillRect(this->_bufferRect,(int)0);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,clear,(void))

Void Image_obj::updateBuffer( hx::Null< bool >  __o_clearBefore){
bool clearBefore = __o_clearBefore.Default(false);
	HX_STACK_PUSH("Image::updateBuffer","com/haxepunk/graphics/Image.hx",238);
	HX_STACK_THIS(this);
	HX_STACK_ARG(clearBefore,"clearBefore");
{
		HX_STACK_LINE(239)
		if (((this->_source == null()))){
			HX_STACK_LINE(239)
			return null();
		}
		HX_STACK_LINE(240)
		if ((clearBefore)){
			HX_STACK_LINE(240)
			this->_buffer->fillRect(this->_bufferRect,(int)0);
		}
		HX_STACK_LINE(241)
		this->_buffer->copyPixels(this->_source,this->_sourceRect,::com::haxepunk::HXP_obj::zero,null(),null(),null());
		HX_STACK_LINE(242)
		if (((this->_tint != null()))){
			HX_STACK_LINE(242)
			this->_buffer->colorTransform(this->_bufferRect,this->_tint);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,updateBuffer,(void))

Void Image_obj::render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  __o_layer){
int layer = __o_layer.Default(10);
	HX_STACK_PUSH("Image::render","com/haxepunk/graphics/Image.hx",160);
	HX_STACK_THIS(this);
	HX_STACK_ARG(target,"target");
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(camera,"camera");
	HX_STACK_ARG(layer,"layer");
{
		HX_STACK_LINE(162)
		this->_point->x = (((point->x + this->x) - this->originX) - (camera->x * this->scrollX));
		HX_STACK_LINE(163)
		this->_point->y = (((point->y + this->y) - this->originY) - (camera->y * this->scrollY));
		HX_STACK_LINE(165)
		if ((this->_blit)){
			HX_STACK_LINE(166)
			if (((this->_buffer != null()))){
				HX_STACK_LINE(169)
				if (((bool((bool((bool((this->angle == (int)0)) && bool(((this->scaleX * this->scale) == (int)1)))) && bool(((this->scaleY * this->scale) == (int)1)))) && bool((this->blend == null()))))){
					HX_STACK_LINE(174)
					target->copyPixels(this->_buffer,this->_bufferRect,this->_point,null(),null(),true);
				}
				else{
					HX_STACK_LINE(181)
					this->_matrix->b = this->_matrix->c = (int)0;
					HX_STACK_LINE(182)
					this->_matrix->a = (this->scaleX * this->scale);
					HX_STACK_LINE(183)
					this->_matrix->d = (this->scaleY * this->scale);
					HX_STACK_LINE(184)
					this->_matrix->tx = (-(this->originX) * this->_matrix->a);
					HX_STACK_LINE(185)
					this->_matrix->ty = (-(this->originY) * this->_matrix->d);
					HX_STACK_LINE(186)
					if (((this->angle != (int)0))){
						HX_STACK_LINE(186)
						this->_matrix->rotate((this->angle * ((Float(::Math_obj::PI) / Float((int)-180)))));
					}
					HX_STACK_LINE(187)
					hx::AddEq(this->_matrix->tx,(this->originX + this->_point->x));
					HX_STACK_LINE(188)
					hx::AddEq(this->_matrix->ty,(this->originY + this->_point->y));
					HX_STACK_LINE(189)
					target->draw(this->_bitmap,this->_matrix,null(),this->blend,null(),this->smooth);
				}
			}
		}
		else{
			HX_STACK_LINE(195)
			if ((this->_flipped)){
				HX_STACK_LINE(195)
				hx::AddEq(this->_point->x,this->_sourceRect->width);
			}
			HX_STACK_LINE(196)
			Float sx = ((::com::haxepunk::HXP_obj::screen->getFullScaleX() * this->scale) * this->scaleX);		HX_STACK_VAR(sx,"sx");
			Float sy = ((::com::haxepunk::HXP_obj::screen->getFullScaleY() * this->scale) * this->scaleY);		HX_STACK_VAR(sy,"sy");
			HX_STACK_LINE(199)
			{
				HX_STACK_LINE(199)
				::com::haxepunk::graphics::atlas::AtlasRegion _this = this->_region;		HX_STACK_VAR(_this,"_this");
				Float angle = this->angle;		HX_STACK_VAR(angle,"angle");
				HX_STACK_LINE(199)
				if ((_this->rotated)){
					HX_STACK_LINE(199)
					angle = (angle - (int)90);
				}
				HX_STACK_LINE(199)
				_this->parent->prepareTile(_this->tileIndex,(this->_point->x * sx),(this->_point->y * sy),layer,(sx * ((  ((this->_flipped)) ? int((int)-1) : int((int)1) ))),sy,angle,(Float(((int((int(this->_color) >> int((int)16))) & int((int)255)))) / Float((int)255)),(Float(((int((int(this->_color) >> int((int)8))) & int((int)255)))) / Float((int)255)),(Float(((int(this->_color) & int((int)255)))) / Float((int)255)),this->_alpha);
			}
		}
	}
return null();
}


Void Image_obj::createBuffer( ){
{
		HX_STACK_PUSH("Image::createBuffer","com/haxepunk/graphics/Image.hx",152);
		HX_STACK_THIS(this);
		HX_STACK_LINE(153)
		this->_buffer = ::com::haxepunk::HXP_obj::createBitmap(::Std_obj::_int(this->_sourceRect->width),::Std_obj::_int(this->_sourceRect->height),true,null());
		HX_STACK_LINE(154)
		this->_bufferRect = this->_buffer->get_rect();
		HX_STACK_LINE(155)
		this->_bitmap->set_bitmapData(this->_buffer);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,createBuffer,(void))

Void Image_obj::init( ){
{
		HX_STACK_PUSH("Image::init","com/haxepunk/graphics/Image.hx",139);
		HX_STACK_THIS(this);
		HX_STACK_LINE(140)
		this->angle = (int)0;
		HX_STACK_LINE(141)
		this->scale = this->scaleX = this->scaleY = (int)1;
		HX_STACK_LINE(142)
		this->originX = this->originY = (int)0;
		HX_STACK_LINE(144)
		this->_alpha = (int)1;
		HX_STACK_LINE(145)
		this->_flipped = false;
		HX_STACK_LINE(146)
		this->_color = (int)16777215;
		HX_STACK_LINE(147)
		this->_matrix = ::com::haxepunk::HXP_obj::matrix;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Image_obj,init,(void))

Void Image_obj::setBitmapSource( ::native::display::BitmapData bitmap){
{
		HX_STACK_PUSH("Image::setBitmapSource","com/haxepunk/graphics/Image.hx",131);
		HX_STACK_THIS(this);
		HX_STACK_ARG(bitmap,"bitmap");
		HX_STACK_LINE(132)
		this->_blit = true;
		HX_STACK_LINE(133)
		this->_sourceRect = bitmap->get_rect();
		HX_STACK_LINE(134)
		this->_source = bitmap;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,setBitmapSource,(void))

Void Image_obj::setAtlasRegion( ::com::haxepunk::graphics::atlas::AtlasRegion region){
{
		HX_STACK_PUSH("Image::setAtlasRegion","com/haxepunk/graphics/Image.hx",124);
		HX_STACK_THIS(this);
		HX_STACK_ARG(region,"region");
		HX_STACK_LINE(125)
		this->_blit = false;
		HX_STACK_LINE(126)
		this->_region = region;
		HX_STACK_LINE(127)
		this->_sourceRect = ::native::geom::Rectangle_obj::__new((int)0,(int)0,this->_region->rect->width,this->_region->rect->height);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Image_obj,setAtlasRegion,(void))

::com::haxepunk::graphics::Image Image_obj::createRect( int width,int height,hx::Null< int >  __o_color){
int color = __o_color.Default(16777215);
	HX_STACK_PUSH("Image::createRect","com/haxepunk/graphics/Image.hx",213);
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_ARG(color,"color");
{
		HX_STACK_LINE(214)
		::native::display::BitmapData source = ::com::haxepunk::HXP_obj::createBitmap(width,height,true,(int((int)-16777216) | int(color)));		HX_STACK_VAR(source,"source");
		HX_STACK_LINE(215)
		return ::com::haxepunk::graphics::Image_obj::__new(source,null(),null());
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC3(Image_obj,createRect,return )

::com::haxepunk::graphics::Image Image_obj::createCircle( int radius,hx::Null< int >  __o_color){
int color = __o_color.Default(16777215);
	HX_STACK_PUSH("Image::createCircle","com/haxepunk/graphics/Image.hx",225);
	HX_STACK_ARG(radius,"radius");
	HX_STACK_ARG(color,"color");
{
		HX_STACK_LINE(226)
		::com::haxepunk::HXP_obj::sprite->get_graphics()->clear();
		HX_STACK_LINE(227)
		::com::haxepunk::HXP_obj::sprite->get_graphics()->beginFill(color,null());
		HX_STACK_LINE(228)
		::com::haxepunk::HXP_obj::sprite->get_graphics()->drawCircle(radius,radius,radius);
		HX_STACK_LINE(229)
		::native::display::BitmapData data = ::com::haxepunk::HXP_obj::createBitmap((radius * (int)2),(radius * (int)2),true,null());		HX_STACK_VAR(data,"data");
		HX_STACK_LINE(230)
		data->draw(::com::haxepunk::HXP_obj::sprite,null(),null(),null(),null(),null());
		HX_STACK_LINE(231)
		return ::com::haxepunk::graphics::Image_obj::__new(data,null(),null());
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(Image_obj,createCircle,return )

::Hash Image_obj::_flips;


Image_obj::Image_obj()
{
}

void Image_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Image);
	HX_MARK_MEMBER_NAME(_flip,"_flip");
	HX_MARK_MEMBER_NAME(_flipped,"_flipped");
	HX_MARK_MEMBER_NAME(_class,"_class");
	HX_MARK_MEMBER_NAME(_matrix,"_matrix");
	HX_MARK_MEMBER_NAME(_colorTransform,"_colorTransform");
	HX_MARK_MEMBER_NAME(_tint,"_tint");
	HX_MARK_MEMBER_NAME(_color,"_color");
	HX_MARK_MEMBER_NAME(_alpha,"_alpha");
	HX_MARK_MEMBER_NAME(_region,"_region");
	HX_MARK_MEMBER_NAME(_bitmap,"_bitmap");
	HX_MARK_MEMBER_NAME(_bufferRect,"_bufferRect");
	HX_MARK_MEMBER_NAME(_buffer,"_buffer");
	HX_MARK_MEMBER_NAME(_sourceRect,"_sourceRect");
	HX_MARK_MEMBER_NAME(_source,"_source");
	HX_MARK_MEMBER_NAME(clipRect,"clipRect");
	HX_MARK_MEMBER_NAME(scaledHeight,"scaledHeight");
	HX_MARK_MEMBER_NAME(scaledWidth,"scaledWidth");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(flipped,"flipped");
	HX_MARK_MEMBER_NAME(color,"color");
	HX_MARK_MEMBER_NAME(alpha,"alpha");
	HX_MARK_MEMBER_NAME(smooth,"smooth");
	HX_MARK_MEMBER_NAME(blend,"blend");
	HX_MARK_MEMBER_NAME(originY,"originY");
	HX_MARK_MEMBER_NAME(originX,"originX");
	HX_MARK_MEMBER_NAME(scaleY,"scaleY");
	HX_MARK_MEMBER_NAME(scaleX,"scaleX");
	HX_MARK_MEMBER_NAME(scale,"scale");
	HX_MARK_MEMBER_NAME(angle,"angle");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Image_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_flip,"_flip");
	HX_VISIT_MEMBER_NAME(_flipped,"_flipped");
	HX_VISIT_MEMBER_NAME(_class,"_class");
	HX_VISIT_MEMBER_NAME(_matrix,"_matrix");
	HX_VISIT_MEMBER_NAME(_colorTransform,"_colorTransform");
	HX_VISIT_MEMBER_NAME(_tint,"_tint");
	HX_VISIT_MEMBER_NAME(_color,"_color");
	HX_VISIT_MEMBER_NAME(_alpha,"_alpha");
	HX_VISIT_MEMBER_NAME(_region,"_region");
	HX_VISIT_MEMBER_NAME(_bitmap,"_bitmap");
	HX_VISIT_MEMBER_NAME(_bufferRect,"_bufferRect");
	HX_VISIT_MEMBER_NAME(_buffer,"_buffer");
	HX_VISIT_MEMBER_NAME(_sourceRect,"_sourceRect");
	HX_VISIT_MEMBER_NAME(_source,"_source");
	HX_VISIT_MEMBER_NAME(clipRect,"clipRect");
	HX_VISIT_MEMBER_NAME(scaledHeight,"scaledHeight");
	HX_VISIT_MEMBER_NAME(scaledWidth,"scaledWidth");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(flipped,"flipped");
	HX_VISIT_MEMBER_NAME(color,"color");
	HX_VISIT_MEMBER_NAME(alpha,"alpha");
	HX_VISIT_MEMBER_NAME(smooth,"smooth");
	HX_VISIT_MEMBER_NAME(blend,"blend");
	HX_VISIT_MEMBER_NAME(originY,"originY");
	HX_VISIT_MEMBER_NAME(originX,"originX");
	HX_VISIT_MEMBER_NAME(scaleY,"scaleY");
	HX_VISIT_MEMBER_NAME(scaleX,"scaleX");
	HX_VISIT_MEMBER_NAME(scale,"scale");
	HX_VISIT_MEMBER_NAME(angle,"angle");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Image_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_flip") ) { return _flip; }
		if (HX_FIELD_EQ(inName,"_tint") ) { return _tint; }
		if (HX_FIELD_EQ(inName,"width") ) { return inCallProp ? getWidth() : width; }
		if (HX_FIELD_EQ(inName,"color") ) { return inCallProp ? getColor() : color; }
		if (HX_FIELD_EQ(inName,"alpha") ) { return inCallProp ? getAlpha() : alpha; }
		if (HX_FIELD_EQ(inName,"clear") ) { return clear_dyn(); }
		if (HX_FIELD_EQ(inName,"blend") ) { return blend; }
		if (HX_FIELD_EQ(inName,"scale") ) { return scale; }
		if (HX_FIELD_EQ(inName,"angle") ) { return angle; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_flips") ) { return _flips; }
		if (HX_FIELD_EQ(inName,"_class") ) { return _class; }
		if (HX_FIELD_EQ(inName,"_color") ) { return _color; }
		if (HX_FIELD_EQ(inName,"_alpha") ) { return _alpha; }
		if (HX_FIELD_EQ(inName,"height") ) { return inCallProp ? getHeight() : height; }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		if (HX_FIELD_EQ(inName,"smooth") ) { return smooth; }
		if (HX_FIELD_EQ(inName,"scaleY") ) { return scaleY; }
		if (HX_FIELD_EQ(inName,"scaleX") ) { return scaleX; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { return _matrix; }
		if (HX_FIELD_EQ(inName,"_region") ) { return _region; }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { return _bitmap; }
		if (HX_FIELD_EQ(inName,"_buffer") ) { return _buffer; }
		if (HX_FIELD_EQ(inName,"_source") ) { return _source; }
		if (HX_FIELD_EQ(inName,"flipped") ) { return inCallProp ? getFlipped() : flipped; }
		if (HX_FIELD_EQ(inName,"originY") ) { return originY; }
		if (HX_FIELD_EQ(inName,"originX") ) { return originX; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_flipped") ) { return _flipped; }
		if (HX_FIELD_EQ(inName,"clipRect") ) { return inCallProp ? getClipRect() : clipRect; }
		if (HX_FIELD_EQ(inName,"getWidth") ) { return getWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"centerOO") ) { return centerOO_dyn(); }
		if (HX_FIELD_EQ(inName,"setColor") ) { return setColor_dyn(); }
		if (HX_FIELD_EQ(inName,"getColor") ) { return getColor_dyn(); }
		if (HX_FIELD_EQ(inName,"setAlpha") ) { return setAlpha_dyn(); }
		if (HX_FIELD_EQ(inName,"getAlpha") ) { return getAlpha_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getHeight") ) { return getHeight_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"createRect") ) { return createRect_dyn(); }
		if (HX_FIELD_EQ(inName,"setFlipped") ) { return setFlipped_dyn(); }
		if (HX_FIELD_EQ(inName,"getFlipped") ) { return getFlipped_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_bufferRect") ) { return _bufferRect; }
		if (HX_FIELD_EQ(inName,"_sourceRect") ) { return _sourceRect; }
		if (HX_FIELD_EQ(inName,"getClipRect") ) { return getClipRect_dyn(); }
		if (HX_FIELD_EQ(inName,"scaledWidth") ) { return inCallProp ? getScaledWidth() : scaledWidth; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"createCircle") ) { return createCircle_dyn(); }
		if (HX_FIELD_EQ(inName,"scaledHeight") ) { return inCallProp ? getScaledHeight() : scaledHeight; }
		if (HX_FIELD_EQ(inName,"centerOrigin") ) { return centerOrigin_dyn(); }
		if (HX_FIELD_EQ(inName,"updateBuffer") ) { return updateBuffer_dyn(); }
		if (HX_FIELD_EQ(inName,"createBuffer") ) { return createBuffer_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"getScaledWidth") ) { return getScaledWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"setAtlasRegion") ) { return setAtlasRegion_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"_colorTransform") ) { return _colorTransform; }
		if (HX_FIELD_EQ(inName,"getScaledHeight") ) { return getScaledHeight_dyn(); }
		if (HX_FIELD_EQ(inName,"setBitmapSource") ) { return setBitmapSource_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Image_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"_flip") ) { _flip=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_tint") ) { _tint=inValue.Cast< ::native::geom::ColorTransform >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"color") ) { if (inCallProp) return setColor(inValue);color=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"alpha") ) { if (inCallProp) return setAlpha(inValue);alpha=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"blend") ) { blend=inValue.Cast< ::native::display::BlendMode >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scale") ) { scale=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"angle") ) { angle=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_flips") ) { _flips=inValue.Cast< ::Hash >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_class") ) { _class=inValue.Cast< ::String >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_color") ) { _color=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_alpha") ) { _alpha=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"smooth") ) { smooth=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaleY") ) { scaleY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaleX") ) { scaleX=inValue.Cast< Float >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { _matrix=inValue.Cast< ::native::geom::Matrix >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_region") ) { _region=inValue.Cast< ::com::haxepunk::graphics::atlas::AtlasRegion >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_bitmap") ) { _bitmap=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_buffer") ) { _buffer=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_source") ) { _source=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		if (HX_FIELD_EQ(inName,"flipped") ) { if (inCallProp) return setFlipped(inValue);flipped=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originY") ) { originY=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"originX") ) { originX=inValue.Cast< Float >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_flipped") ) { _flipped=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"clipRect") ) { clipRect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_bufferRect") ) { _bufferRect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_sourceRect") ) { _sourceRect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scaledWidth") ) { scaledWidth=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"scaledHeight") ) { scaledHeight=inValue.Cast< int >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"_colorTransform") ) { _colorTransform=inValue.Cast< ::native::geom::ColorTransform >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Image_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_flip"));
	outFields->push(HX_CSTRING("_flipped"));
	outFields->push(HX_CSTRING("_class"));
	outFields->push(HX_CSTRING("_matrix"));
	outFields->push(HX_CSTRING("_colorTransform"));
	outFields->push(HX_CSTRING("_tint"));
	outFields->push(HX_CSTRING("_color"));
	outFields->push(HX_CSTRING("_alpha"));
	outFields->push(HX_CSTRING("_region"));
	outFields->push(HX_CSTRING("_bitmap"));
	outFields->push(HX_CSTRING("_bufferRect"));
	outFields->push(HX_CSTRING("_buffer"));
	outFields->push(HX_CSTRING("_sourceRect"));
	outFields->push(HX_CSTRING("_source"));
	outFields->push(HX_CSTRING("clipRect"));
	outFields->push(HX_CSTRING("scaledHeight"));
	outFields->push(HX_CSTRING("scaledWidth"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("flipped"));
	outFields->push(HX_CSTRING("color"));
	outFields->push(HX_CSTRING("alpha"));
	outFields->push(HX_CSTRING("smooth"));
	outFields->push(HX_CSTRING("blend"));
	outFields->push(HX_CSTRING("originY"));
	outFields->push(HX_CSTRING("originX"));
	outFields->push(HX_CSTRING("scaleY"));
	outFields->push(HX_CSTRING("scaleX"));
	outFields->push(HX_CSTRING("scale"));
	outFields->push(HX_CSTRING("angle"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("createRect"),
	HX_CSTRING("createCircle"),
	HX_CSTRING("_flips"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_flip"),
	HX_CSTRING("_flipped"),
	HX_CSTRING("_class"),
	HX_CSTRING("_matrix"),
	HX_CSTRING("_colorTransform"),
	HX_CSTRING("_tint"),
	HX_CSTRING("_color"),
	HX_CSTRING("_alpha"),
	HX_CSTRING("_region"),
	HX_CSTRING("_bitmap"),
	HX_CSTRING("_bufferRect"),
	HX_CSTRING("_buffer"),
	HX_CSTRING("_sourceRect"),
	HX_CSTRING("_source"),
	HX_CSTRING("getClipRect"),
	HX_CSTRING("clipRect"),
	HX_CSTRING("getScaledHeight"),
	HX_CSTRING("scaledHeight"),
	HX_CSTRING("getScaledWidth"),
	HX_CSTRING("scaledWidth"),
	HX_CSTRING("getHeight"),
	HX_CSTRING("height"),
	HX_CSTRING("getWidth"),
	HX_CSTRING("width"),
	HX_CSTRING("centerOO"),
	HX_CSTRING("centerOrigin"),
	HX_CSTRING("setFlipped"),
	HX_CSTRING("getFlipped"),
	HX_CSTRING("flipped"),
	HX_CSTRING("setColor"),
	HX_CSTRING("getColor"),
	HX_CSTRING("color"),
	HX_CSTRING("setAlpha"),
	HX_CSTRING("getAlpha"),
	HX_CSTRING("alpha"),
	HX_CSTRING("clear"),
	HX_CSTRING("updateBuffer"),
	HX_CSTRING("render"),
	HX_CSTRING("createBuffer"),
	HX_CSTRING("init"),
	HX_CSTRING("setBitmapSource"),
	HX_CSTRING("setAtlasRegion"),
	HX_CSTRING("smooth"),
	HX_CSTRING("blend"),
	HX_CSTRING("originY"),
	HX_CSTRING("originX"),
	HX_CSTRING("scaleY"),
	HX_CSTRING("scaleX"),
	HX_CSTRING("scale"),
	HX_CSTRING("angle"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Image_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Image_obj::_flips,"_flips");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Image_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Image_obj::_flips,"_flips");
};

Class Image_obj::__mClass;

void Image_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.Image"), hx::TCanCast< Image_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Image_obj::__boot()
{
	_flips= ::Hash_obj::__new();
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
