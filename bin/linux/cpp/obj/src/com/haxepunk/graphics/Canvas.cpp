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
#ifndef INCLUDED_com_haxepunk_graphics_Canvas
#include <com/haxepunk/graphics/Canvas.h>
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

Void Canvas_obj::__construct(int width,int height)
{
HX_STACK_PUSH("Canvas::new","com/haxepunk/graphics/Canvas.hx",16);
{
	HX_STACK_LINE(313)
	this->_maxHeight = (int)4000;
	HX_STACK_LINE(312)
	this->_maxWidth = (int)4000;
	HX_STACK_LINE(30)
	super::__construct();
	HX_STACK_LINE(31)
	this->_color = (int)16777215;
	HX_STACK_LINE(32)
	this->_alpha = (int)1;
	HX_STACK_LINE(33)
	this->_graphics = ::com::haxepunk::HXP_obj::sprite->get_graphics();
	HX_STACK_LINE(34)
	this->_matrix = ::native::geom::Matrix_obj::__new(null(),null(),null(),null(),null(),null());
	HX_STACK_LINE(35)
	this->_rect = ::native::geom::Rectangle_obj::__new(null(),null(),null(),null());
	HX_STACK_LINE(36)
	this->_colorTransform = ::native::geom::ColorTransform_obj::__new(null(),null(),null(),null(),null(),null(),null(),null());
	HX_STACK_LINE(37)
	this->_buffers = Array_obj< ::native::display::BitmapData >::__new();
	HX_STACK_LINE(39)
	this->_width = width;
	HX_STACK_LINE(40)
	this->_height = height;
	HX_STACK_LINE(41)
	this->_refWidth = ::Math_obj::ceil((Float(width) / Float(this->_maxWidth)));
	HX_STACK_LINE(42)
	this->_refHeight = ::Math_obj::ceil((Float(height) / Float(this->_maxHeight)));
	HX_STACK_LINE(43)
	this->_ref = ::com::haxepunk::HXP_obj::createBitmap(this->_refWidth,this->_refHeight,null(),null());
	HX_STACK_LINE(44)
	int x = (int)0;		HX_STACK_VAR(x,"x");
	int y = (int)0;		HX_STACK_VAR(y,"y");
	int w;		HX_STACK_VAR(w,"w");
	int h;		HX_STACK_VAR(h,"h");
	int i = (int)0;		HX_STACK_VAR(i,"i");
	int ww = hx::Mod(this->_width,this->_maxWidth);		HX_STACK_VAR(ww,"ww");
	int hh = hx::Mod(this->_height,this->_maxHeight);		HX_STACK_VAR(hh,"hh");
	HX_STACK_LINE(47)
	if (((ww == (int)0))){
		HX_STACK_LINE(47)
		ww = this->_maxWidth;
	}
	HX_STACK_LINE(48)
	if (((hh == (int)0))){
		HX_STACK_LINE(48)
		hh = this->_maxHeight;
	}
	HX_STACK_LINE(49)
	while(((y < this->_refHeight))){
		HX_STACK_LINE(51)
		h = (  (((y < (this->_refHeight - (int)1)))) ? int(this->_maxHeight) : int(hh) );
		HX_STACK_LINE(52)
		while(((x < this->_refWidth))){
			HX_STACK_LINE(54)
			w = (  (((x < (this->_refWidth - (int)1)))) ? int(this->_maxWidth) : int(ww) );
			HX_STACK_LINE(55)
			this->_ref->setPixel(x,y,i);
			HX_STACK_LINE(56)
			this->_buffers[i] = ::com::haxepunk::HXP_obj::createBitmap(w,h,true,null());
			HX_STACK_LINE(57)
			(i)++;
			HX_STACK_LINE(57)
			(x)++;
		}
		HX_STACK_LINE(59)
		x = (int)0;
		HX_STACK_LINE(59)
		(y)++;
	}
}
;
	return null();
}

Canvas_obj::~Canvas_obj() { }

Dynamic Canvas_obj::__CreateEmpty() { return  new Canvas_obj; }
hx::ObjectPtr< Canvas_obj > Canvas_obj::__new(int width,int height)
{  hx::ObjectPtr< Canvas_obj > result = new Canvas_obj();
	result->__construct(width,height);
	return result;}

Dynamic Canvas_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Canvas_obj > result = new Canvas_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

int Canvas_obj::getHeight( ){
	HX_STACK_PUSH("Canvas::getHeight","com/haxepunk/graphics/Canvas.hx",306);
	HX_STACK_THIS(this);
	HX_STACK_LINE(306)
	return this->_height;
}


HX_DEFINE_DYNAMIC_FUNC0(Canvas_obj,getHeight,return )

int Canvas_obj::getWidth( ){
	HX_STACK_PUSH("Canvas::getWidth","com/haxepunk/graphics/Canvas.hx",300);
	HX_STACK_THIS(this);
	HX_STACK_LINE(300)
	return this->_width;
}


HX_DEFINE_DYNAMIC_FUNC0(Canvas_obj,getWidth,return )

Void Canvas_obj::shift( hx::Null< int >  __o_x,hx::Null< int >  __o_y){
int x = __o_x.Default(0);
int y = __o_y.Default(0);
	HX_STACK_PUSH("Canvas::shift","com/haxepunk/graphics/Canvas.hx",292);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(292)
		this->drawGraphic(x,y,hx::ObjectPtr<OBJ_>(this));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Canvas_obj,shift,(void))

Float Canvas_obj::setAlpha( Float value){
	HX_STACK_PUSH("Canvas::setAlpha","com/haxepunk/graphics/Canvas.hx",268);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(269)
	if (((value < (int)0))){
		HX_STACK_LINE(269)
		value = (int)0;
	}
	HX_STACK_LINE(270)
	if (((value > (int)1))){
		HX_STACK_LINE(270)
		value = (int)1;
	}
	HX_STACK_LINE(271)
	if (((this->_alpha == value))){
		HX_STACK_LINE(271)
		return this->_alpha;
	}
	HX_STACK_LINE(272)
	this->_alpha = value;
	HX_STACK_LINE(273)
	if (((bool((this->_alpha == (int)1)) && bool((this->_color == (int)16777215))))){
		HX_STACK_LINE(275)
		this->_tint = null();
		HX_STACK_LINE(276)
		return this->_alpha;
	}
	HX_STACK_LINE(278)
	this->_tint = this->_colorTransform;
	HX_STACK_LINE(279)
	this->_tint->redMultiplier = (Float(((int((int(this->_color) >> int((int)16))) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(280)
	this->_tint->greenMultiplier = (Float(((int((int(this->_color) >> int((int)8))) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(281)
	this->_tint->blueMultiplier = (Float(((int(this->_color) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(282)
	this->_tint->alphaMultiplier = this->_alpha;
	HX_STACK_LINE(283)
	return this->_alpha;
}


HX_DEFINE_DYNAMIC_FUNC1(Canvas_obj,setAlpha,return )

Float Canvas_obj::getAlpha( ){
	HX_STACK_PUSH("Canvas::getAlpha","com/haxepunk/graphics/Canvas.hx",266);
	HX_STACK_THIS(this);
	HX_STACK_LINE(266)
	return this->_alpha;
}


HX_DEFINE_DYNAMIC_FUNC0(Canvas_obj,getAlpha,return )

int Canvas_obj::setColor( int value){
	HX_STACK_PUSH("Canvas::setColor","com/haxepunk/graphics/Canvas.hx",245);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(246)
	hx::ModEq(value,(int)16777215);
	HX_STACK_LINE(247)
	if (((this->_color == value))){
		HX_STACK_LINE(247)
		return this->_color;
	}
	HX_STACK_LINE(248)
	this->_color = value;
	HX_STACK_LINE(249)
	if (((bool((this->_alpha == (int)1)) && bool((this->_color == (int)16777215))))){
		HX_STACK_LINE(251)
		this->_tint = null();
		HX_STACK_LINE(252)
		return this->_color;
	}
	HX_STACK_LINE(254)
	this->_tint = this->_colorTransform;
	HX_STACK_LINE(255)
	this->_tint->redMultiplier = (Float(((int((int(this->_color) >> int((int)16))) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(256)
	this->_tint->greenMultiplier = (Float(((int((int(this->_color) >> int((int)8))) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(257)
	this->_tint->blueMultiplier = (Float(((int(this->_color) & int((int)255)))) / Float((int)255));
	HX_STACK_LINE(258)
	this->_tint->alphaMultiplier = this->_alpha;
	HX_STACK_LINE(259)
	return this->_color;
}


HX_DEFINE_DYNAMIC_FUNC1(Canvas_obj,setColor,return )

int Canvas_obj::getColor( ){
	HX_STACK_PUSH("Canvas::getColor","com/haxepunk/graphics/Canvas.hx",243);
	HX_STACK_THIS(this);
	HX_STACK_LINE(243)
	return this->_color;
}


HX_DEFINE_DYNAMIC_FUNC0(Canvas_obj,getColor,return )

Void Canvas_obj::drawGraphic( int x,int y,::com::haxepunk::Graphic source){
{
		HX_STACK_PUSH("Canvas::drawGraphic","com/haxepunk/graphics/Canvas.hx",223);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_ARG(source,"source");
		HX_STACK_LINE(224)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		HX_STACK_LINE(225)
		{
			HX_STACK_LINE(225)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(225)
			while(((_g < _g1->length))){
				HX_STACK_LINE(225)
				::native::display::BitmapData buffer = _g1->__get(_g);		HX_STACK_VAR(buffer,"buffer");
				HX_STACK_LINE(225)
				++(_g);
				HX_STACK_LINE(227)
				this->_point->x = (x - xx);
				HX_STACK_LINE(228)
				this->_point->y = (y - yy);
				HX_STACK_LINE(229)
				source->render(buffer,this->_point,::com::haxepunk::HXP_obj::zero,null());
				HX_STACK_LINE(230)
				hx::AddEq(xx,this->_maxWidth);
				HX_STACK_LINE(231)
				if (((xx >= this->_width))){
					HX_STACK_LINE(233)
					xx = (int)0;
					HX_STACK_LINE(234)
					hx::AddEq(yy,this->_maxHeight);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Canvas_obj,drawGraphic,(void))

Void Canvas_obj::fillTexture( ::native::geom::Rectangle rect,::native::display::BitmapData texture){
{
		HX_STACK_PUSH("Canvas::fillTexture","com/haxepunk/graphics/Canvas.hx",198);
		HX_STACK_THIS(this);
		HX_STACK_ARG(rect,"rect");
		HX_STACK_ARG(texture,"texture");
		HX_STACK_LINE(199)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		HX_STACK_LINE(200)
		{
			HX_STACK_LINE(200)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(200)
			while(((_g < _g1->length))){
				HX_STACK_LINE(200)
				::native::display::BitmapData buffer = _g1->__get(_g);		HX_STACK_VAR(buffer,"buffer");
				HX_STACK_LINE(200)
				++(_g);
				HX_STACK_LINE(202)
				this->_graphics->clear();
				HX_STACK_LINE(203)
				this->_graphics->beginBitmapFill(texture,null(),null(),null());
				HX_STACK_LINE(204)
				this->_graphics->drawRect((rect->x - xx),(rect->y - yy),rect->width,rect->height);
				HX_STACK_LINE(205)
				buffer->draw(::com::haxepunk::HXP_obj::sprite,null(),null(),null(),null(),null());
				HX_STACK_LINE(206)
				hx::AddEq(xx,this->_maxWidth);
				HX_STACK_LINE(207)
				if (((xx >= this->_width))){
					HX_STACK_LINE(209)
					xx = (int)0;
					HX_STACK_LINE(210)
					hx::AddEq(yy,this->_maxHeight);
				}
			}
		}
		HX_STACK_LINE(213)
		this->_graphics->endFill();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Canvas_obj,fillTexture,(void))

Void Canvas_obj::drawRect( ::native::geom::Rectangle rect,hx::Null< int >  __o_color,hx::Null< Float >  __o_alpha){
int color = __o_color.Default(0);
Float alpha = __o_alpha.Default(1);
	HX_STACK_PUSH("Canvas::drawRect","com/haxepunk/graphics/Canvas.hx",155);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rect,"rect");
	HX_STACK_ARG(color,"color");
	HX_STACK_ARG(alpha,"alpha");
{
		HX_STACK_LINE(156)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		::native::display::BitmapData buffer;		HX_STACK_VAR(buffer,"buffer");
		HX_STACK_LINE(157)
		if (((alpha >= (int)1))){
			HX_STACK_LINE(159)
			this->_rect->width = rect->width;
			HX_STACK_LINE(160)
			this->_rect->height = rect->height;
			HX_STACK_LINE(162)
			{
				HX_STACK_LINE(162)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(162)
				while(((_g < _g1->length))){
					HX_STACK_LINE(162)
					::native::display::BitmapData buffer1 = _g1->__get(_g);		HX_STACK_VAR(buffer1,"buffer1");
					HX_STACK_LINE(162)
					++(_g);
					HX_STACK_LINE(164)
					this->_rect->x = (rect->x - xx);
					HX_STACK_LINE(165)
					this->_rect->y = (rect->y - yy);
					HX_STACK_LINE(166)
					buffer1->fillRect(this->_rect,(int((int)-16777216) | int(color)));
					HX_STACK_LINE(167)
					hx::AddEq(xx,this->_maxWidth);
					HX_STACK_LINE(168)
					if (((xx >= this->_width))){
						HX_STACK_LINE(170)
						xx = (int)0;
						HX_STACK_LINE(171)
						hx::AddEq(yy,this->_maxHeight);
					}
				}
			}
			HX_STACK_LINE(174)
			return null();
		}
		HX_STACK_LINE(176)
		{
			HX_STACK_LINE(176)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(176)
			while(((_g < _g1->length))){
				HX_STACK_LINE(176)
				::native::display::BitmapData buffer1 = _g1->__get(_g);		HX_STACK_VAR(buffer1,"buffer1");
				HX_STACK_LINE(176)
				++(_g);
				HX_STACK_LINE(178)
				this->_graphics->clear();
				HX_STACK_LINE(179)
				this->_graphics->beginFill(color,alpha);
				HX_STACK_LINE(180)
				this->_graphics->drawRect((rect->x - xx),(rect->y - yy),rect->width,rect->height);
				HX_STACK_LINE(181)
				buffer1->draw(::com::haxepunk::HXP_obj::sprite,null(),null(),null(),null(),null());
				HX_STACK_LINE(182)
				hx::AddEq(xx,this->_maxWidth);
				HX_STACK_LINE(183)
				if (((xx >= this->_width))){
					HX_STACK_LINE(185)
					xx = (int)0;
					HX_STACK_LINE(186)
					hx::AddEq(yy,this->_maxHeight);
				}
			}
		}
		HX_STACK_LINE(189)
		this->_graphics->endFill();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Canvas_obj,drawRect,(void))

Void Canvas_obj::fill( ::native::geom::Rectangle rect,hx::Null< int >  __o_color,hx::Null< Float >  __o_alpha){
int color = __o_color.Default(0);
Float alpha = __o_alpha.Default(1);
	HX_STACK_PUSH("Canvas::fill","com/haxepunk/graphics/Canvas.hx",127);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rect,"rect");
	HX_STACK_ARG(color,"color");
	HX_STACK_ARG(alpha,"alpha");
{
		HX_STACK_LINE(128)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		::native::display::BitmapData buffer;		HX_STACK_VAR(buffer,"buffer");
		HX_STACK_LINE(129)
		this->_rect->width = rect->width;
		HX_STACK_LINE(130)
		this->_rect->height = rect->height;
		HX_STACK_LINE(131)
		if (((alpha >= (int)1))){
			HX_STACK_LINE(131)
			hx::OrEq(color,(int)-16777216);
		}
		else{
			HX_STACK_LINE(132)
			if (((alpha <= (int)0))){
				HX_STACK_LINE(132)
				color = (int)0;
			}
			else{
				HX_STACK_LINE(133)
				color = (int((int(::Std_obj::_int((alpha * (int)255))) << int((int)24))) | int((int((int)16777215) & int(color))));
			}
		}
		HX_STACK_LINE(134)
		{
			HX_STACK_LINE(134)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(134)
			while(((_g < _g1->length))){
				HX_STACK_LINE(134)
				::native::display::BitmapData buffer1 = _g1->__get(_g);		HX_STACK_VAR(buffer1,"buffer1");
				HX_STACK_LINE(134)
				++(_g);
				HX_STACK_LINE(136)
				this->_rect->x = (rect->x - xx);
				HX_STACK_LINE(137)
				this->_rect->y = (rect->y - yy);
				HX_STACK_LINE(138)
				buffer1->fillRect(this->_rect,color);
				HX_STACK_LINE(139)
				hx::AddEq(xx,this->_maxWidth);
				HX_STACK_LINE(140)
				if (((xx >= this->_width))){
					HX_STACK_LINE(142)
					xx = (int)0;
					HX_STACK_LINE(143)
					hx::AddEq(yy,this->_maxHeight);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Canvas_obj,fill,(void))

Void Canvas_obj::draw( int x,int y,::native::display::BitmapData source,::native::geom::Rectangle rect){
{
		HX_STACK_PUSH("Canvas::draw","com/haxepunk/graphics/Canvas.hx",104);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_ARG(source,"source");
		HX_STACK_ARG(rect,"rect");
		HX_STACK_LINE(105)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		HX_STACK_LINE(106)
		{
			HX_STACK_LINE(106)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::native::display::BitmapData > _g1 = this->_buffers;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(106)
			while(((_g < _g1->length))){
				HX_STACK_LINE(106)
				::native::display::BitmapData buffer = _g1->__get(_g);		HX_STACK_VAR(buffer,"buffer");
				HX_STACK_LINE(106)
				++(_g);
				HX_STACK_LINE(108)
				this->_point->x = (x - xx);
				HX_STACK_LINE(109)
				this->_point->y = (y - yy);
				HX_STACK_LINE(110)
				buffer->copyPixels(source,(  (((rect != null()))) ? ::native::geom::Rectangle(rect) : ::native::geom::Rectangle(source->get_rect()) ),this->_point,null(),null(),true);
				HX_STACK_LINE(111)
				hx::AddEq(xx,this->_maxWidth);
				HX_STACK_LINE(112)
				if (((xx >= this->_width))){
					HX_STACK_LINE(114)
					xx = (int)0;
					HX_STACK_LINE(115)
					hx::AddEq(yy,this->_maxHeight);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Canvas_obj,draw,(void))

Void Canvas_obj::render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  __o_layer){
int layer = __o_layer.Default(10);
	HX_STACK_PUSH("Canvas::render","com/haxepunk/graphics/Canvas.hx",65);
	HX_STACK_THIS(this);
	HX_STACK_ARG(target,"target");
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(camera,"camera");
	HX_STACK_ARG(layer,"layer");
{
		HX_STACK_LINE(67)
		this->_point->x = ((point->x + this->x) - (camera->x * this->scrollX));
		HX_STACK_LINE(68)
		this->_point->y = ((point->y + this->y) - (camera->y * this->scrollY));
		HX_STACK_LINE(71)
		int xx = (int)0;		HX_STACK_VAR(xx,"xx");
		int yy = (int)0;		HX_STACK_VAR(yy,"yy");
		::native::display::BitmapData buffer;		HX_STACK_VAR(buffer,"buffer");
		Float px = this->_point->x;		HX_STACK_VAR(px,"px");
		HX_STACK_LINE(72)
		target->lock();
		HX_STACK_LINE(73)
		while(((yy < this->_refHeight))){
			HX_STACK_LINE(75)
			while(((xx < this->_refWidth))){
				HX_STACK_LINE(77)
				buffer = this->_buffers->__get(this->_ref->getPixel(xx,yy));
				HX_STACK_LINE(78)
				if (((bool((this->_tint != null())) || bool((this->blend != null()))))){
					HX_STACK_LINE(80)
					this->_matrix->tx = this->_point->x;
					HX_STACK_LINE(81)
					this->_matrix->ty = this->_point->y;
					HX_STACK_LINE(82)
					target->draw(buffer,this->_matrix,this->_tint,this->blend,null(),null());
				}
				else{
					HX_STACK_LINE(84)
					target->copyPixels(buffer,buffer->get_rect(),this->_point,null(),null(),true);
				}
				HX_STACK_LINE(85)
				hx::AddEq(this->_point->x,this->_maxWidth);
				HX_STACK_LINE(86)
				(xx)++;
			}
			HX_STACK_LINE(88)
			this->_point->x = px;
			HX_STACK_LINE(89)
			hx::AddEq(this->_point->y,this->_maxHeight);
			HX_STACK_LINE(90)
			xx = (int)0;
			HX_STACK_LINE(91)
			(yy)++;
		}
		HX_STACK_LINE(93)
		target->unlock(null());
	}
return null();
}



Canvas_obj::Canvas_obj()
{
}

void Canvas_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Canvas);
	HX_MARK_MEMBER_NAME(_graphics,"_graphics");
	HX_MARK_MEMBER_NAME(_rect,"_rect");
	HX_MARK_MEMBER_NAME(_refHeight,"_refHeight");
	HX_MARK_MEMBER_NAME(_refWidth,"_refWidth");
	HX_MARK_MEMBER_NAME(_ref,"_ref");
	HX_MARK_MEMBER_NAME(_matrix,"_matrix");
	HX_MARK_MEMBER_NAME(_colorTransform,"_colorTransform");
	HX_MARK_MEMBER_NAME(_tint,"_tint");
	HX_MARK_MEMBER_NAME(_alpha,"_alpha");
	HX_MARK_MEMBER_NAME(_color,"_color");
	HX_MARK_MEMBER_NAME(_maxHeight,"_maxHeight");
	HX_MARK_MEMBER_NAME(_maxWidth,"_maxWidth");
	HX_MARK_MEMBER_NAME(_height,"_height");
	HX_MARK_MEMBER_NAME(_width,"_width");
	HX_MARK_MEMBER_NAME(_buffers,"_buffers");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(alpha,"alpha");
	HX_MARK_MEMBER_NAME(color,"color");
	HX_MARK_MEMBER_NAME(blend,"blend");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Canvas_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_graphics,"_graphics");
	HX_VISIT_MEMBER_NAME(_rect,"_rect");
	HX_VISIT_MEMBER_NAME(_refHeight,"_refHeight");
	HX_VISIT_MEMBER_NAME(_refWidth,"_refWidth");
	HX_VISIT_MEMBER_NAME(_ref,"_ref");
	HX_VISIT_MEMBER_NAME(_matrix,"_matrix");
	HX_VISIT_MEMBER_NAME(_colorTransform,"_colorTransform");
	HX_VISIT_MEMBER_NAME(_tint,"_tint");
	HX_VISIT_MEMBER_NAME(_alpha,"_alpha");
	HX_VISIT_MEMBER_NAME(_color,"_color");
	HX_VISIT_MEMBER_NAME(_maxHeight,"_maxHeight");
	HX_VISIT_MEMBER_NAME(_maxWidth,"_maxWidth");
	HX_VISIT_MEMBER_NAME(_height,"_height");
	HX_VISIT_MEMBER_NAME(_width,"_width");
	HX_VISIT_MEMBER_NAME(_buffers,"_buffers");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(alpha,"alpha");
	HX_VISIT_MEMBER_NAME(color,"color");
	HX_VISIT_MEMBER_NAME(blend,"blend");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Canvas_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"_ref") ) { return _ref; }
		if (HX_FIELD_EQ(inName,"fill") ) { return fill_dyn(); }
		if (HX_FIELD_EQ(inName,"draw") ) { return draw_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_rect") ) { return _rect; }
		if (HX_FIELD_EQ(inName,"_tint") ) { return _tint; }
		if (HX_FIELD_EQ(inName,"width") ) { return inCallProp ? getWidth() : width; }
		if (HX_FIELD_EQ(inName,"shift") ) { return shift_dyn(); }
		if (HX_FIELD_EQ(inName,"alpha") ) { return inCallProp ? getAlpha() : alpha; }
		if (HX_FIELD_EQ(inName,"color") ) { return inCallProp ? getColor() : color; }
		if (HX_FIELD_EQ(inName,"blend") ) { return blend; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_alpha") ) { return _alpha; }
		if (HX_FIELD_EQ(inName,"_color") ) { return _color; }
		if (HX_FIELD_EQ(inName,"_width") ) { return _width; }
		if (HX_FIELD_EQ(inName,"height") ) { return inCallProp ? getHeight() : height; }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { return _matrix; }
		if (HX_FIELD_EQ(inName,"_height") ) { return _height; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_buffers") ) { return _buffers; }
		if (HX_FIELD_EQ(inName,"getWidth") ) { return getWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"setAlpha") ) { return setAlpha_dyn(); }
		if (HX_FIELD_EQ(inName,"getAlpha") ) { return getAlpha_dyn(); }
		if (HX_FIELD_EQ(inName,"setColor") ) { return setColor_dyn(); }
		if (HX_FIELD_EQ(inName,"getColor") ) { return getColor_dyn(); }
		if (HX_FIELD_EQ(inName,"drawRect") ) { return drawRect_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_graphics") ) { return _graphics; }
		if (HX_FIELD_EQ(inName,"_refWidth") ) { return _refWidth; }
		if (HX_FIELD_EQ(inName,"_maxWidth") ) { return _maxWidth; }
		if (HX_FIELD_EQ(inName,"getHeight") ) { return getHeight_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_refHeight") ) { return _refHeight; }
		if (HX_FIELD_EQ(inName,"_maxHeight") ) { return _maxHeight; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"drawGraphic") ) { return drawGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"fillTexture") ) { return fillTexture_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"_colorTransform") ) { return _colorTransform; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Canvas_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"_ref") ) { _ref=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_rect") ) { _rect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_tint") ) { _tint=inValue.Cast< ::native::geom::ColorTransform >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"alpha") ) { if (inCallProp) return setAlpha(inValue);alpha=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"color") ) { if (inCallProp) return setColor(inValue);color=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"blend") ) { blend=inValue.Cast< ::native::display::BlendMode >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_alpha") ) { _alpha=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_color") ) { _color=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_width") ) { _width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_matrix") ) { _matrix=inValue.Cast< ::native::geom::Matrix >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_height") ) { _height=inValue.Cast< int >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_buffers") ) { _buffers=inValue.Cast< Array< ::native::display::BitmapData > >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_graphics") ) { _graphics=inValue.Cast< ::native::display::Graphics >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_refWidth") ) { _refWidth=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_maxWidth") ) { _maxWidth=inValue.Cast< int >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_refHeight") ) { _refHeight=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_maxHeight") ) { _maxHeight=inValue.Cast< int >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"_colorTransform") ) { _colorTransform=inValue.Cast< ::native::geom::ColorTransform >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Canvas_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_graphics"));
	outFields->push(HX_CSTRING("_rect"));
	outFields->push(HX_CSTRING("_refHeight"));
	outFields->push(HX_CSTRING("_refWidth"));
	outFields->push(HX_CSTRING("_ref"));
	outFields->push(HX_CSTRING("_matrix"));
	outFields->push(HX_CSTRING("_colorTransform"));
	outFields->push(HX_CSTRING("_tint"));
	outFields->push(HX_CSTRING("_alpha"));
	outFields->push(HX_CSTRING("_color"));
	outFields->push(HX_CSTRING("_maxHeight"));
	outFields->push(HX_CSTRING("_maxWidth"));
	outFields->push(HX_CSTRING("_height"));
	outFields->push(HX_CSTRING("_width"));
	outFields->push(HX_CSTRING("_buffers"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("alpha"));
	outFields->push(HX_CSTRING("color"));
	outFields->push(HX_CSTRING("blend"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_graphics"),
	HX_CSTRING("_rect"),
	HX_CSTRING("_refHeight"),
	HX_CSTRING("_refWidth"),
	HX_CSTRING("_ref"),
	HX_CSTRING("_matrix"),
	HX_CSTRING("_colorTransform"),
	HX_CSTRING("_tint"),
	HX_CSTRING("_alpha"),
	HX_CSTRING("_color"),
	HX_CSTRING("_maxHeight"),
	HX_CSTRING("_maxWidth"),
	HX_CSTRING("_height"),
	HX_CSTRING("_width"),
	HX_CSTRING("_buffers"),
	HX_CSTRING("getHeight"),
	HX_CSTRING("height"),
	HX_CSTRING("getWidth"),
	HX_CSTRING("width"),
	HX_CSTRING("shift"),
	HX_CSTRING("setAlpha"),
	HX_CSTRING("getAlpha"),
	HX_CSTRING("alpha"),
	HX_CSTRING("setColor"),
	HX_CSTRING("getColor"),
	HX_CSTRING("color"),
	HX_CSTRING("drawGraphic"),
	HX_CSTRING("fillTexture"),
	HX_CSTRING("drawRect"),
	HX_CSTRING("fill"),
	HX_CSTRING("draw"),
	HX_CSTRING("render"),
	HX_CSTRING("blend"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Canvas_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Canvas_obj::__mClass,"__mClass");
};

Class Canvas_obj::__mClass;

void Canvas_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.Canvas"), hx::TCanCast< Canvas_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Canvas_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
