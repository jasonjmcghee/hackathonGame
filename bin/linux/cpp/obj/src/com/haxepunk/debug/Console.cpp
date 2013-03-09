#include <hxcpp.h>

#ifndef INCLUDED_Lambda
#include <Lambda.h>
#endif
#ifndef INCLUDED_List
#include <List.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_Sys
#include <Sys.h>
#endif
#ifndef INCLUDED_Type
#include <Type.h>
#endif
#ifndef INCLUDED_com_haxepunk_Engine
#include <com/haxepunk/Engine.h>
#endif
#ifndef INCLUDED_com_haxepunk_Entity
#include <com/haxepunk/Entity.h>
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
#ifndef INCLUDED_com_haxepunk_debug_Console
#include <com/haxepunk/debug/Console.h>
#endif
#ifndef INCLUDED_com_haxepunk_utils_Input
#include <com/haxepunk/utils/Input.h>
#endif
#ifndef INCLUDED_haxe_Log
#include <haxe/Log.h>
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
#ifndef INCLUDED_native_display_CapsStyle
#include <native/display/CapsStyle.h>
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
#ifndef INCLUDED_native_display_JointStyle
#include <native/display/JointStyle.h>
#endif
#ifndef INCLUDED_native_display_LineScaleMode
#include <native/display/LineScaleMode.h>
#endif
#ifndef INCLUDED_native_display_PixelSnapping
#include <native/display/PixelSnapping.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_display_Stage
#include <native/display/Stage.h>
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
#ifndef INCLUDED_native_system_System
#include <native/system/System.h>
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
#ifndef INCLUDED_native_text_TextFormatAlign
#include <native/text/TextFormatAlign.h>
#endif
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
namespace com{
namespace haxepunk{
namespace debug{

Void Console_obj::__construct()
{
HX_STACK_PUSH("Console::new","com/haxepunk/debug/Console.hx",42);
{
	HX_STACK_LINE(43)
	this->init();
	HX_STACK_LINE(45)
	::com::haxepunk::utils::Input_obj::define(HX_CSTRING("_ARROWS"),Array_obj< int >::__new().Add((int)39).Add((int)37).Add((int)40).Add((int)38));
}
;
	return null();
}

Console_obj::~Console_obj() { }

Dynamic Console_obj::__CreateEmpty() { return  new Console_obj; }
hx::ObjectPtr< Console_obj > Console_obj::__new()
{  hx::ObjectPtr< Console_obj > result = new Console_obj();
	result->__construct();
	return result;}

Dynamic Console_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Console_obj > result = new Console_obj();
	result->__construct();
	return result;}

int Console_obj::getHeight( ){
	HX_STACK_PUSH("Console::getHeight","com/haxepunk/debug/Console.hx",1023);
	HX_STACK_THIS(this);
	HX_STACK_LINE(1023)
	return ::com::haxepunk::HXP_obj::windowHeight;
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,getHeight,return )

int Console_obj::getWidth( ){
	HX_STACK_PUSH("Console::getWidth","com/haxepunk/debug/Console.hx",1020);
	HX_STACK_THIS(this);
	HX_STACK_LINE(1020)
	return ::com::haxepunk::HXP_obj::windowWidth;
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,getWidth,return )

::native::text::TextFormat Console_obj::format( hx::Null< int >  __o_size,hx::Null< int >  __o_color,::String __o_align){
int size = __o_size.Default(16);
int color = __o_color.Default(16777215);
::String align = __o_align.Default(HX_CSTRING("left"));
	HX_STACK_PUSH("Console::format","com/haxepunk/debug/Console.hx",999);
	HX_STACK_THIS(this);
	HX_STACK_ARG(size,"size");
	HX_STACK_ARG(color,"color");
	HX_STACK_ARG(align,"align");
{
		HX_STACK_LINE(1000)
		this->_format->size = size;
		HX_STACK_LINE(1001)
		this->_format->color = color;
		HX_STACK_LINE(1002)
		::String _switch_1 = (align);
		if (  ( _switch_1==HX_CSTRING("left"))){
			HX_STACK_LINE(1004)
			this->_format->align = ::native::text::TextFormatAlign_obj::LEFT;
		}
		else if (  ( _switch_1==HX_CSTRING("right"))){
			HX_STACK_LINE(1006)
			this->_format->align = ::native::text::TextFormatAlign_obj::RIGHT;
		}
		else if (  ( _switch_1==HX_CSTRING("center"))){
			HX_STACK_LINE(1008)
			this->_format->align = ::native::text::TextFormatAlign_obj::CENTER;
		}
		else if (  ( _switch_1==HX_CSTRING("justify"))){
			HX_STACK_LINE(1010)
			this->_format->align = ::native::text::TextFormatAlign_obj::JUSTIFY;
		}
		HX_STACK_LINE(1013)
		return this->_format;
	}
}


HX_DEFINE_DYNAMIC_FUNC3(Console_obj,format,return )

Void Console_obj::updateButtons( ){
{
		HX_STACK_PUSH("Console::updateButtons","com/haxepunk/debug/Console.hx",960);
		HX_STACK_THIS(this);
		HX_STACK_LINE(962)
		this->_butRead->set_x((((this->_fpsInfo->get_x() + this->_fpsInfo->get_width()) + ::Std_obj::_int((Float(((this->_entRead->get_x() - ((this->_fpsInfo->get_x() + this->_fpsInfo->get_width()))))) / Float((int)2)))) - (int)30));
		HX_STACK_LINE(963)
		this->_butDebug->set_visible(!(this->_debug));
		HX_STACK_LINE(964)
		this->_butOutput->set_visible(this->_debug);
		HX_STACK_LINE(965)
		this->_butPlay->set_visible(::com::haxepunk::HXP_obj::engine->paused);
		HX_STACK_LINE(966)
		this->_butPause->set_visible(!(::com::haxepunk::HXP_obj::engine->paused));
		HX_STACK_LINE(969)
		if ((this->_butDebug->bitmapData->get_rect()->contains(this->_butDebug->get_mouseX(),this->_butDebug->get_mouseY()))){
			HX_STACK_LINE(971)
			this->_butDebug->set_alpha(this->_butOutput->set_alpha((int)1));
			HX_STACK_LINE(972)
			if ((::com::haxepunk::utils::Input_obj::mousePressed)){
				HX_STACK_LINE(972)
				this->setDebug(!(this->_debug));
			}
		}
		else{
			HX_STACK_LINE(974)
			this->_butDebug->set_alpha(this->_butOutput->set_alpha(.5));
		}
		HX_STACK_LINE(977)
		if ((this->_butPlay->bitmapData->get_rect()->contains(this->_butPlay->get_mouseX(),this->_butPlay->get_mouseY()))){
			HX_STACK_LINE(979)
			this->_butPlay->set_alpha(this->_butPause->set_alpha((int)1));
			HX_STACK_LINE(980)
			if ((::com::haxepunk::utils::Input_obj::mousePressed)){
				HX_STACK_LINE(982)
				::com::haxepunk::HXP_obj::engine->paused = !(::com::haxepunk::HXP_obj::engine->paused);
				HX_STACK_LINE(983)
				this->renderEntities();
			}
		}
		else{
			HX_STACK_LINE(986)
			this->_butPlay->set_alpha(this->_butPause->set_alpha(.5));
		}
		HX_STACK_LINE(989)
		if ((this->_butStep->bitmapData->get_rect()->contains(this->_butStep->get_mouseX(),this->_butStep->get_mouseY()))){
			HX_STACK_LINE(991)
			this->_butStep->set_alpha((int)1);
			HX_STACK_LINE(992)
			if ((::com::haxepunk::utils::Input_obj::mousePressed)){
				HX_STACK_LINE(992)
				this->stepFrame();
			}
		}
		else{
			HX_STACK_LINE(994)
			this->_butStep->set_alpha(.5);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateButtons,(void))

Void Console_obj::updateEntityCount( ){
{
		HX_STACK_PUSH("Console::updateEntityCount","com/haxepunk/debug/Console.hx",954);
		HX_STACK_THIS(this);
		HX_STACK_LINE(954)
		this->_entReadText->set_text((::Std_obj::string(::com::haxepunk::HXP_obj::_world->_count) + HX_CSTRING(" Entities")));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateEntityCount,(void))

Void Console_obj::updateDebugRead( ){
{
		HX_STACK_PUSH("Console::updateDebugRead","com/haxepunk/debug/Console.hx",899);
		HX_STACK_THIS(this);
		HX_STACK_LINE(900)
		::String str;		HX_STACK_VAR(str,"str");
		HX_STACK_LINE(902)
		bool big = (this->getWidth() >= (int)480);		HX_STACK_VAR(big,"big");
		HX_STACK_LINE(905)
		::String s = (((((((HX_CSTRING("Mouse: ") + ::Std_obj::string(::Std_obj::_int((::com::haxepunk::HXP_obj::screen->getMouseX() + ::com::haxepunk::HXP_obj::camera->x)))) + HX_CSTRING(", ")) + ::Std_obj::string(::Std_obj::_int((::com::haxepunk::HXP_obj::screen->getMouseY() + ::com::haxepunk::HXP_obj::camera->y)))) + HX_CSTRING("\nCamera: ")) + ::Std_obj::string(::com::haxepunk::HXP_obj::camera->x)) + HX_CSTRING(", ")) + ::Std_obj::string(::com::haxepunk::HXP_obj::camera->y));		HX_STACK_VAR(s,"s");
		HX_STACK_LINE(908)
		if (((this->SELECT_LIST->length != (int)0))){
			HX_STACK_LINE(909)
			if (((this->SELECT_LIST->length > (int)1))){
				HX_STACK_LINE(911)
				hx::AddEq(s,(HX_CSTRING("\n\nSelected: ") + ::Std_obj::string(this->SELECT_LIST->length)));
			}
			else{
				HX_STACK_LINE(916)
				::com::haxepunk::Entity e = this->SELECT_LIST->first();		HX_STACK_VAR(e,"e");
				HX_STACK_LINE(917)
				hx::AddEq(s,((HX_CSTRING("\n\n- ") + ::Type_obj::getClassName(::Type_obj::getClass(e))) + HX_CSTRING(" -\n")));
				HX_STACK_LINE(918)
				for(::cpp::FastIterator_obj< ::String > *__it = ::cpp::CreateFastIterator< ::String >(this->WATCH_LIST->iterator());  __it->hasNext(); ){
					::String str1 = __it->next();
					{
						HX_STACK_LINE(923)
						Dynamic field = ::Reflect_obj::field(e,str1);		HX_STACK_VAR(field,"field");
						HX_STACK_LINE(925)
						if (((field != null()))){
							HX_STACK_LINE(926)
							hx::AddEq(s,(((HX_CSTRING("\n") + str1) + HX_CSTRING(": ")) + field->toString()));
						}
					}
;
				}
			}
		}
		HX_STACK_LINE(934)
		this->_debReadText1->set_text(s);
		HX_STACK_LINE(935)
		this->_debReadText1->setTextFormat(this->format((  ((big)) ? int((int)16) : int((int)8) ),null(),null()),null(),null());
		HX_STACK_LINE(936)
		this->_debReadText1->set_width(::Math_obj::max((this->_debReadText1->get_textWidth() + (int)4),this->_debReadText0->get_width()));
		HX_STACK_LINE(937)
		this->_debReadText1->set_height(((this->_debReadText1->get_y() + this->_debReadText1->get_textHeight()) + (int)4));
		HX_STACK_LINE(940)
		this->_debRead->set_y(::Std_obj::_int((this->getHeight() - this->_debReadText1->get_height())));
		HX_STACK_LINE(941)
		this->_debRead->get_graphics()->clear();
		HX_STACK_LINE(942)
		this->_debRead->get_graphics()->beginFill((int)0,.75);
		HX_STACK_LINE(947)
		this->_debRead->get_graphics()->drawRect((int)0,(int)0,this->_debReadText0->get_width(),(int)20);
		HX_STACK_LINE(948)
		this->_debRead->get_graphics()->drawRect((int)0,(int)20,(this->_debReadText1->get_width() + (int)20),((this->getHeight() - this->_debRead->get_y()) - (int)20));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateDebugRead,(void))

Void Console_obj::updateFPSRead( ){
{
		HX_STACK_PUSH("Console::updateFPSRead","com/haxepunk/debug/Console.hx",885);
		HX_STACK_THIS(this);
		HX_STACK_LINE(886)
		this->_fpsReadText->set_text((HX_CSTRING("FPS: ") + ::Std_obj::_int(::com::haxepunk::HXP_obj::frameRate)));
		HX_STACK_LINE(887)
		this->_fpsInfoText0->set_text((((((HX_CSTRING("Update: ") + ::Std_obj::string(::com::haxepunk::HXP_obj::_updateTime)) + HX_CSTRING("ms\n")) + HX_CSTRING("Render: ")) + ::Std_obj::string(::com::haxepunk::HXP_obj::_renderTime)) + HX_CSTRING("ms")));
		HX_STACK_LINE(890)
		this->_fpsInfoText1->set_text((((((HX_CSTRING("Game: ") + ::Std_obj::string(::com::haxepunk::HXP_obj::_gameTime)) + HX_CSTRING("ms\n")) + HX_CSTRING("Flash: ")) + ::Std_obj::string(::com::haxepunk::HXP_obj::_flashTime)) + HX_CSTRING("ms")));
		struct _Function_1_1{
			inline static Float Block( ){
				HX_STACK_PUSH("*::closure","com/haxepunk/debug/Console.hx",894);
				{
					HX_STACK_LINE(894)
					Float exp = ::Math_obj::pow((int)10,(int)2);		HX_STACK_VAR(exp,"exp");
					HX_STACK_LINE(894)
					return (Float(::Math_obj::round(((Float((Float(::native::system::System_obj::get_totalMemory()) / Float((int)1024))) / Float((int)1024)) * exp))) / Float(exp));
				}
				return null();
			}
		};
		HX_STACK_LINE(893)
		this->_memReadText->set_text(((HX_CSTRING("Mem: ") + _Function_1_1::Block()) + HX_CSTRING("MB")));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateFPSRead,(void))

Void Console_obj::updateLog( ){
{
		HX_STACK_PUSH("Console::updateLog","com/haxepunk/debug/Console.hx",789);
		HX_STACK_THIS(this);
		HX_STACK_LINE(790)
		this->_logHeight = (this->getHeight() - (int)60);
		HX_STACK_LINE(791)
		this->_logBar->height = (this->_logHeight - (int)8);
		HX_STACK_LINE(794)
		if ((this->_paused)){
			HX_STACK_LINE(797)
			this->_logRead->set_y((int)40);
			HX_STACK_LINE(798)
			this->_logRead->get_graphics()->clear();
			HX_STACK_LINE(799)
			this->_logRead->get_graphics()->beginFill((int)0,.75);
			HX_STACK_LINE(803)
			this->_logRead->get_graphics()->drawRect((int)0,(int)0,this->_logReadText0->get_width(),(int)20);
			HX_STACK_LINE(805)
			this->_logRead->get_graphics()->drawRect((int)0,(int)20,this->getWidth(),this->_logHeight);
			HX_STACK_LINE(808)
			this->_logRead->get_graphics()->beginFill((int)2105376,(int)1);
			HX_STACK_LINE(812)
			this->_logRead->get_graphics()->drawRoundRect(this->_logBar->x,this->_logBar->y,this->_logBar->width,this->_logBar->height,(int)8,(int)8);
			HX_STACK_LINE(816)
			if (((this->LOG->length > this->_logLines))){
				HX_STACK_LINE(819)
				this->_logRead->get_graphics()->beginFill((int)16777215,(int)1);
				HX_STACK_LINE(820)
				int y = ::Std_obj::_int(((this->_logBar->y + (int)2) + (((this->_logBar->height - (int)16)) * this->_logScroll)));		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(824)
				this->_logRead->get_graphics()->drawRoundRect((this->_logBar->x + (int)2),y,(int)12,(int)12,(int)6,(int)6);
			}
			HX_STACK_LINE(829)
			if (((this->LOG->length != (int)0))){
				HX_STACK_LINE(831)
				int i = (  (((this->LOG->length > this->_logLines))) ? int(::Std_obj::_int(::Math_obj::round((((this->LOG->length - this->_logLines)) * this->_logScroll)))) : int((int)0) );		HX_STACK_VAR(i,"i");
				int n = ::Std_obj::_int((i + ::Math_obj::min(this->_logLines,this->LOG->length)));		HX_STACK_VAR(n,"n");
				::String s = HX_CSTRING("");		HX_STACK_VAR(s,"s");
				HX_STACK_LINE(834)
				while(((i < n))){
					HX_STACK_LINE(834)
					hx::AddEq(s,(this->LOG->__get((i)++) + HX_CSTRING("\n")));
				}
				HX_STACK_LINE(835)
				this->_logReadText1->set_text(s);
			}
			else{
				HX_STACK_LINE(837)
				this->_logReadText1->set_text(HX_CSTRING(""));
			}
			HX_STACK_LINE(840)
			this->_logReadText1->set_height(this->_logHeight);
			HX_STACK_LINE(841)
			this->_logReadText1->set_x((int)32);
			HX_STACK_LINE(842)
			this->_logReadText1->set_y((int)24);
			HX_STACK_LINE(845)
			this->_fpsReadText->set_selectable(true);
			HX_STACK_LINE(846)
			this->_fpsInfoText0->set_selectable(true);
			HX_STACK_LINE(847)
			this->_fpsInfoText1->set_selectable(true);
			HX_STACK_LINE(848)
			this->_memReadText->set_selectable(true);
			HX_STACK_LINE(849)
			this->_entReadText->set_selectable(true);
			HX_STACK_LINE(850)
			this->_debReadText1->set_selectable(true);
		}
		else{
			HX_STACK_LINE(855)
			this->_logRead->set_y((this->getHeight() - (int)40));
			HX_STACK_LINE(856)
			this->_logReadText1->set_height((int)20);
			HX_STACK_LINE(857)
			this->_logRead->get_graphics()->clear();
			HX_STACK_LINE(858)
			this->_logRead->get_graphics()->beginFill((int)0,.75);
			HX_STACK_LINE(862)
			this->_logRead->get_graphics()->drawRect((int)0,(int)0,this->_logReadText0->get_width(),(int)20);
			HX_STACK_LINE(864)
			this->_logRead->get_graphics()->drawRect((int)0,(int)20,this->getWidth(),(int)20);
			HX_STACK_LINE(867)
			this->_logReadText1->set_text((  (((this->LOG->length != (int)0))) ? ::String(this->LOG->__get((this->LOG->length - (int)1))) : ::String(HX_CSTRING("")) ));
			HX_STACK_LINE(868)
			this->_logReadText1->set_x((int)2);
			HX_STACK_LINE(869)
			this->_logReadText1->set_y((int)21);
			HX_STACK_LINE(872)
			this->_logReadText1->set_selectable(false);
			HX_STACK_LINE(873)
			this->_fpsReadText->set_selectable(false);
			HX_STACK_LINE(874)
			this->_fpsInfoText0->set_selectable(false);
			HX_STACK_LINE(875)
			this->_fpsInfoText1->set_selectable(false);
			HX_STACK_LINE(876)
			this->_memReadText->set_selectable(false);
			HX_STACK_LINE(877)
			this->_entReadText->set_selectable(false);
			HX_STACK_LINE(878)
			this->_debReadText0->set_selectable(false);
			HX_STACK_LINE(879)
			this->_debReadText1->set_selectable(false);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateLog,(void))

Void Console_obj::renderEntities( ){
{
		HX_STACK_PUSH("Console::renderEntities","com/haxepunk/debug/Console.hx",735);
		HX_STACK_THIS(this);
		HX_STACK_LINE(736)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(738)
		this->_entScreen->set_visible(this->_debug);
		HX_STACK_LINE(739)
		if ((this->_debug)){
			HX_STACK_LINE(741)
			::native::display::Graphics g = this->_entScreen->get_graphics();		HX_STACK_VAR(g,"g");
			Float sx = ::com::haxepunk::HXP_obj::screen->getFullScaleX();		HX_STACK_VAR(sx,"sx");
			Float sy = ::com::haxepunk::HXP_obj::screen->getFullScaleY();		HX_STACK_VAR(sy,"sy");
			HX_STACK_LINE(744)
			g->clear();
			HX_STACK_LINE(745)
			for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->SCREEN_LIST->iterator());  __it->hasNext(); ){
				::com::haxepunk::Entity e1 = __it->next();
				if (((::Lambda_obj::indexOf(this->SELECT_LIST,e1) < (int)0))){
					HX_STACK_LINE(752)
					if (((bool((e1->width != (int)0)) && bool((e1->height != (int)0))))){
						HX_STACK_LINE(754)
						g->lineStyle((int)1,(int)16711680,null(),null(),null(),null(),null(),null());
						HX_STACK_LINE(755)
						g->drawRect(((((e1->x - e1->originX) - ::com::haxepunk::HXP_obj::camera->x)) * sx),((((e1->y - e1->originY) - ::com::haxepunk::HXP_obj::camera->y)) * sy),(e1->width * sx),(e1->height * sy));
						HX_STACK_LINE(757)
						if (((e1->_mask != null()))){
							HX_STACK_LINE(759)
							g->lineStyle((int)1,(int)255,null(),null(),null(),null(),null(),null());
							HX_STACK_LINE(760)
							e1->_mask->debugDraw(g,sx,sy);
						}
					}
					HX_STACK_LINE(763)
					g->lineStyle((int)1,(int)65280,null(),null(),null(),null(),null(),null());
					HX_STACK_LINE(764)
					g->drawRect(((((e1->x - ::com::haxepunk::HXP_obj::camera->x)) * sx) - (int)3),((((e1->y - ::com::haxepunk::HXP_obj::camera->y)) * sy) - (int)3),(int)6,(int)6);
				}
				else{
					HX_STACK_LINE(769)
					if (((bool((e1->width != (int)0)) && bool((e1->height != (int)0))))){
						HX_STACK_LINE(771)
						g->lineStyle((int)1,(int)16777215,null(),null(),null(),null(),null(),null());
						HX_STACK_LINE(772)
						g->drawRect(((((e1->x - e1->originX) - ::com::haxepunk::HXP_obj::camera->x)) * sx),((((e1->y - e1->originY) - ::com::haxepunk::HXP_obj::camera->y)) * sy),(e1->width * sx),(e1->height * sy));
						HX_STACK_LINE(774)
						if (((e1->_mask != null()))){
							HX_STACK_LINE(776)
							g->lineStyle((int)1,(int)255,null(),null(),null(),null(),null(),null());
							HX_STACK_LINE(777)
							e1->_mask->debugDraw(g,sx,sy);
						}
					}
					HX_STACK_LINE(780)
					g->lineStyle((int)1,(int)16777215,null(),null(),null(),null(),null(),null());
					HX_STACK_LINE(781)
					g->drawRect(((((e1->x - ::com::haxepunk::HXP_obj::camera->x)) * sx) - (int)3),((((e1->y - ::com::haxepunk::HXP_obj::camera->y)) * sy) - (int)3),(int)6,(int)6);
				}
;
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,renderEntities,(void))

Void Console_obj::updateEntityLists( hx::Null< bool >  __o_fetchList){
bool fetchList = __o_fetchList.Default(true);
	HX_STACK_PUSH("Console::updateEntityLists","com/haxepunk/debug/Console.hx",716);
	HX_STACK_THIS(this);
	HX_STACK_ARG(fetchList,"fetchList");
{
		HX_STACK_LINE(718)
		if ((fetchList)){
			HX_STACK_LINE(720)
			{
				HX_STACK_LINE(720)
				Dynamic array = this->ENTITY_LIST;		HX_STACK_VAR(array,"array");
				HX_STACK_LINE(720)
				array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
			}
			HX_STACK_LINE(721)
			::com::haxepunk::HXP_obj::_world->getAll(this->ENTITY_LIST);
		}
		HX_STACK_LINE(725)
		this->SCREEN_LIST->clear();
		HX_STACK_LINE(726)
		{
			HX_STACK_LINE(726)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::Entity > _g1 = this->ENTITY_LIST;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(726)
			while(((_g < _g1->length))){
				HX_STACK_LINE(726)
				::com::haxepunk::Entity e = _g1->__get(_g);		HX_STACK_VAR(e,"e");
				HX_STACK_LINE(726)
				++(_g);
				HX_STACK_LINE(728)
				if ((e->collideRect(e->x,e->y,::com::haxepunk::HXP_obj::camera->x,::com::haxepunk::HXP_obj::camera->y,::com::haxepunk::HXP_obj::width,::com::haxepunk::HXP_obj::height))){
					HX_STACK_LINE(729)
					this->SCREEN_LIST->push(e);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,updateEntityLists,(void))

Void Console_obj::updateKeyPanning( ){
{
		HX_STACK_PUSH("Console::updateKeyPanning","com/haxepunk/debug/Console.hx",708);
		HX_STACK_THIS(this);
		HX_STACK_LINE(709)
		::com::haxepunk::HXP_obj::point->x = (((  ((::com::haxepunk::utils::Input_obj::check((int)39))) ? int((int)1) : int((int)0) )) - ((  ((::com::haxepunk::utils::Input_obj::check((int)37))) ? int((int)1) : int((int)0) )));
		HX_STACK_LINE(710)
		::com::haxepunk::HXP_obj::point->y = (((  ((::com::haxepunk::utils::Input_obj::check((int)40))) ? int((int)1) : int((int)0) )) - ((  ((::com::haxepunk::utils::Input_obj::check((int)38))) ? int((int)1) : int((int)0) )));
		HX_STACK_LINE(711)
		if (((bool((::com::haxepunk::HXP_obj::point->x != (int)0)) || bool((::com::haxepunk::HXP_obj::point->y != (int)0))))){
			HX_STACK_LINE(711)
			this->panCamera(::Std_obj::_int(::com::haxepunk::HXP_obj::point->x),::Std_obj::_int(::com::haxepunk::HXP_obj::point->y));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateKeyPanning,(void))

Void Console_obj::updateKeyMoving( ){
{
		HX_STACK_PUSH("Console::updateKeyMoving","com/haxepunk/debug/Console.hx",700);
		HX_STACK_THIS(this);
		HX_STACK_LINE(701)
		::com::haxepunk::HXP_obj::point->x = (((  ((::com::haxepunk::utils::Input_obj::pressed((int)39))) ? int((int)1) : int((int)0) )) - ((  ((::com::haxepunk::utils::Input_obj::pressed((int)37))) ? int((int)1) : int((int)0) )));
		HX_STACK_LINE(702)
		::com::haxepunk::HXP_obj::point->y = (((  ((::com::haxepunk::utils::Input_obj::pressed((int)40))) ? int((int)1) : int((int)0) )) - ((  ((::com::haxepunk::utils::Input_obj::pressed((int)38))) ? int((int)1) : int((int)0) )));
		HX_STACK_LINE(703)
		if (((bool((::com::haxepunk::HXP_obj::point->x != (int)0)) || bool((::com::haxepunk::HXP_obj::point->y != (int)0))))){
			HX_STACK_LINE(703)
			this->moveSelected(::Std_obj::_int(::com::haxepunk::HXP_obj::point->x),::Std_obj::_int(::com::haxepunk::HXP_obj::point->y));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateKeyMoving,(void))

Void Console_obj::updateScrolling( ){
{
		HX_STACK_PUSH("Console::updateScrolling","com/haxepunk/debug/Console.hx",692);
		HX_STACK_THIS(this);
		HX_STACK_LINE(693)
		this->_scrolling = ::com::haxepunk::utils::Input_obj::mouseDown;
		HX_STACK_LINE(694)
		this->_logScroll = ::com::haxepunk::HXP_obj::scaleClamp(::com::haxepunk::utils::Input_obj::getMouseFlashY(),this->_logBarGlobal->y,this->_logBarGlobal->get_bottom(),(int)0,(int)1);
		HX_STACK_LINE(695)
		this->updateLog();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateScrolling,(void))

Void Console_obj::startScrolling( ){
{
		HX_STACK_PUSH("Console::startScrolling","com/haxepunk/debug/Console.hx",686);
		HX_STACK_THIS(this);
		HX_STACK_LINE(686)
		if (((this->LOG->length > this->_logLines))){
			HX_STACK_LINE(687)
			this->_scrolling = this->_logBarGlobal->contains(::com::haxepunk::utils::Input_obj::getMouseFlashX(),::com::haxepunk::utils::Input_obj::getMouseFlashY());
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,startScrolling,(void))

Void Console_obj::selectAll( ){
{
		HX_STACK_PUSH("Console::selectAll","com/haxepunk/debug/Console.hx",677);
		HX_STACK_THIS(this);
		HX_STACK_LINE(678)
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(679)
		this->SELECT_LIST->clear();
		HX_STACK_LINE(680)
		for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->SCREEN_LIST->iterator());  __it->hasNext(); ){
			::com::haxepunk::Entity e1 = __it->next();
			this->SELECT_LIST->push(e1);
		}
		HX_STACK_LINE(681)
		this->renderEntities();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,selectAll,(void))

Void Console_obj::selectEntities( ::native::geom::Rectangle rect){
{
		HX_STACK_PUSH("Console::selectEntities","com/haxepunk/debug/Console.hx",638);
		HX_STACK_THIS(this);
		HX_STACK_ARG(rect,"rect");
		HX_STACK_LINE(639)
		if (((rect->width < (int)0))){
			HX_STACK_LINE(639)
			hx::SubEq(rect->x,rect->width = -(rect->width));
		}
		else{
			HX_STACK_LINE(640)
			if (((rect->width == (int)0))){
				HX_STACK_LINE(640)
				rect->width = (int)1;
			}
		}
		HX_STACK_LINE(641)
		if (((rect->height < (int)0))){
			HX_STACK_LINE(641)
			hx::SubEq(rect->y,rect->height = -(rect->height));
		}
		else{
			HX_STACK_LINE(642)
			if (((rect->height == (int)0))){
				HX_STACK_LINE(642)
				rect->height = (int)1;
			}
		}
		HX_STACK_LINE(644)
		::com::haxepunk::HXP_obj::rect->width = ::com::haxepunk::HXP_obj::rect->height = (int)6;
		HX_STACK_LINE(645)
		Float sx = ::com::haxepunk::HXP_obj::screen->getFullScaleX();		HX_STACK_VAR(sx,"sx");
		Float sy = ::com::haxepunk::HXP_obj::screen->getFullScaleY();		HX_STACK_VAR(sy,"sy");
		::com::haxepunk::Entity e;		HX_STACK_VAR(e,"e");
		HX_STACK_LINE(649)
		if ((::com::haxepunk::utils::Input_obj::check((int)17))){
			HX_STACK_LINE(650)
			for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->SCREEN_LIST->iterator());  __it->hasNext(); ){
				::com::haxepunk::Entity e1 = __it->next();
				if (((::Lambda_obj::indexOf(this->SELECT_LIST,e1) < (int)0))){
					HX_STACK_LINE(656)
					::com::haxepunk::HXP_obj::rect->x = ((((e1->x - ::com::haxepunk::HXP_obj::camera->x)) * sx) - (int)3);
					HX_STACK_LINE(657)
					::com::haxepunk::HXP_obj::rect->y = ((((e1->y - ::com::haxepunk::HXP_obj::camera->y)) * sy) - (int)3);
					HX_STACK_LINE(658)
					if ((rect->intersects(::com::haxepunk::HXP_obj::rect))){
						HX_STACK_LINE(658)
						this->SELECT_LIST->push(e1);
					}
				}
;
			}
		}
		else{
			HX_STACK_LINE(665)
			this->SELECT_LIST->clear();
			HX_STACK_LINE(666)
			for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->SCREEN_LIST->iterator());  __it->hasNext(); ){
				::com::haxepunk::Entity e1 = __it->next();
				{
					HX_STACK_LINE(668)
					::com::haxepunk::HXP_obj::rect->x = ((((e1->x - ::com::haxepunk::HXP_obj::camera->x)) * sx) - (int)3);
					HX_STACK_LINE(669)
					::com::haxepunk::HXP_obj::rect->y = ((((e1->y - ::com::haxepunk::HXP_obj::camera->y)) * sy) - (int)3);
					HX_STACK_LINE(670)
					if ((rect->intersects(::com::haxepunk::HXP_obj::rect))){
						HX_STACK_LINE(670)
						this->SELECT_LIST->push(e1);
					}
				}
;
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,selectEntities,(void))

Void Console_obj::updateSelection( ){
{
		HX_STACK_PUSH("Console::updateSelection","com/haxepunk/debug/Console.hx",618);
		HX_STACK_THIS(this);
		HX_STACK_LINE(619)
		this->_entRect->width = (::com::haxepunk::utils::Input_obj::getMouseFlashX() - this->_entRect->x);
		HX_STACK_LINE(620)
		this->_entRect->height = (::com::haxepunk::utils::Input_obj::getMouseFlashY() - this->_entRect->y);
		HX_STACK_LINE(621)
		if ((::com::haxepunk::utils::Input_obj::mouseReleased)){
			HX_STACK_LINE(623)
			this->selectEntities(this->_entRect);
			HX_STACK_LINE(624)
			this->renderEntities();
			HX_STACK_LINE(625)
			this->_selecting = false;
			HX_STACK_LINE(626)
			this->_entSelect->get_graphics()->clear();
		}
		else{
			HX_STACK_LINE(630)
			this->_entSelect->get_graphics()->clear();
			HX_STACK_LINE(631)
			this->_entSelect->get_graphics()->lineStyle((int)1,(int)16777215,null(),null(),null(),null(),null(),null());
			HX_STACK_LINE(632)
			this->_entSelect->get_graphics()->drawRect(this->_entRect->x,this->_entRect->y,this->_entRect->width,this->_entRect->height);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateSelection,(void))

Void Console_obj::startSelection( ){
{
		HX_STACK_PUSH("Console::startSelection","com/haxepunk/debug/Console.hx",608);
		HX_STACK_THIS(this);
		HX_STACK_LINE(609)
		this->_selecting = true;
		HX_STACK_LINE(610)
		this->_entRect->x = ::com::haxepunk::utils::Input_obj::getMouseFlashX();
		HX_STACK_LINE(611)
		this->_entRect->y = ::com::haxepunk::utils::Input_obj::getMouseFlashY();
		HX_STACK_LINE(612)
		this->_entRect->width = (int)0;
		HX_STACK_LINE(613)
		this->_entRect->height = (int)0;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,startSelection,(void))

Void Console_obj::setCamera( int x,int y){
{
		HX_STACK_PUSH("Console::setCamera","com/haxepunk/debug/Console.hx",598);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_LINE(599)
		::com::haxepunk::HXP_obj::camera->x = x;
		HX_STACK_LINE(600)
		::com::haxepunk::HXP_obj::camera->y = y;
		HX_STACK_LINE(601)
		::com::haxepunk::HXP_obj::engine->render();
		HX_STACK_LINE(602)
		this->updateEntityLists(true);
		HX_STACK_LINE(603)
		this->renderEntities();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Console_obj,setCamera,(void))

Void Console_obj::panCamera( int xDelta,int yDelta){
{
		HX_STACK_PUSH("Console::panCamera","com/haxepunk/debug/Console.hx",588);
		HX_STACK_THIS(this);
		HX_STACK_ARG(xDelta,"xDelta");
		HX_STACK_ARG(yDelta,"yDelta");
		HX_STACK_LINE(589)
		hx::AddEq(::com::haxepunk::HXP_obj::camera->x,xDelta);
		HX_STACK_LINE(590)
		hx::AddEq(::com::haxepunk::HXP_obj::camera->y,yDelta);
		HX_STACK_LINE(591)
		::com::haxepunk::HXP_obj::engine->render();
		HX_STACK_LINE(592)
		this->updateEntityLists(true);
		HX_STACK_LINE(593)
		this->renderEntities();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Console_obj,panCamera,(void))

Void Console_obj::updatePanning( ){
{
		HX_STACK_PUSH("Console::updatePanning","com/haxepunk/debug/Console.hx",579);
		HX_STACK_THIS(this);
		HX_STACK_LINE(580)
		if ((::com::haxepunk::utils::Input_obj::mouseReleased)){
			HX_STACK_LINE(580)
			this->_panning = false;
		}
		HX_STACK_LINE(581)
		this->panCamera(::Std_obj::_int((this->_entRect->x - ::com::haxepunk::utils::Input_obj::getMouseX())),::Std_obj::_int((this->_entRect->y - ::com::haxepunk::utils::Input_obj::getMouseY())));
		HX_STACK_LINE(582)
		this->_entRect->x = ::com::haxepunk::utils::Input_obj::getMouseX();
		HX_STACK_LINE(583)
		this->_entRect->y = ::com::haxepunk::utils::Input_obj::getMouseY();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updatePanning,(void))

Void Console_obj::startPanning( ){
{
		HX_STACK_PUSH("Console::startPanning","com/haxepunk/debug/Console.hx",571);
		HX_STACK_THIS(this);
		HX_STACK_LINE(572)
		this->_panning = true;
		HX_STACK_LINE(573)
		this->_entRect->x = ::com::haxepunk::utils::Input_obj::getMouseX();
		HX_STACK_LINE(574)
		this->_entRect->y = ::com::haxepunk::utils::Input_obj::getMouseY();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,startPanning,(void))

Void Console_obj::moveSelected( int xDelta,int yDelta){
{
		HX_STACK_PUSH("Console::moveSelected","com/haxepunk/debug/Console.hx",558);
		HX_STACK_THIS(this);
		HX_STACK_ARG(xDelta,"xDelta");
		HX_STACK_ARG(yDelta,"yDelta");
		HX_STACK_LINE(559)
		for(::cpp::FastIterator_obj< ::com::haxepunk::Entity > *__it = ::cpp::CreateFastIterator< ::com::haxepunk::Entity >(this->SELECT_LIST->iterator());  __it->hasNext(); ){
			::com::haxepunk::Entity e = __it->next();
			{
				HX_STACK_LINE(561)
				hx::AddEq(e->x,xDelta);
				HX_STACK_LINE(562)
				hx::AddEq(e->y,yDelta);
			}
;
		}
		HX_STACK_LINE(564)
		::com::haxepunk::HXP_obj::engine->render();
		HX_STACK_LINE(565)
		this->renderEntities();
		HX_STACK_LINE(566)
		this->updateEntityLists(true);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Console_obj,moveSelected,(void))

Void Console_obj::updateDragging( ){
{
		HX_STACK_PUSH("Console::updateDragging","com/haxepunk/debug/Console.hx",549);
		HX_STACK_THIS(this);
		HX_STACK_LINE(550)
		this->moveSelected(::Std_obj::_int((::com::haxepunk::utils::Input_obj::getMouseX() - this->_entRect->x)),::Std_obj::_int((::com::haxepunk::utils::Input_obj::getMouseY() - this->_entRect->y)));
		HX_STACK_LINE(551)
		this->_entRect->x = ::com::haxepunk::utils::Input_obj::getMouseX();
		HX_STACK_LINE(552)
		this->_entRect->y = ::com::haxepunk::utils::Input_obj::getMouseY();
		HX_STACK_LINE(553)
		if ((::com::haxepunk::utils::Input_obj::mouseReleased)){
			HX_STACK_LINE(553)
			this->_dragging = false;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,updateDragging,(void))

Void Console_obj::startDragging( ){
{
		HX_STACK_PUSH("Console::startDragging","com/haxepunk/debug/Console.hx",541);
		HX_STACK_THIS(this);
		HX_STACK_LINE(542)
		this->_dragging = true;
		HX_STACK_LINE(543)
		this->_entRect->x = ::com::haxepunk::utils::Input_obj::getMouseX();
		HX_STACK_LINE(544)
		this->_entRect->y = ::com::haxepunk::utils::Input_obj::getMouseY();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,startDragging,(void))

Void Console_obj::stepFrame( ){
{
		HX_STACK_PUSH("Console::stepFrame","com/haxepunk/debug/Console.hx",531);
		HX_STACK_THIS(this);
		HX_STACK_LINE(532)
		::com::haxepunk::HXP_obj::engine->update();
		HX_STACK_LINE(533)
		::com::haxepunk::HXP_obj::engine->render();
		HX_STACK_LINE(534)
		this->updateEntityCount();
		HX_STACK_LINE(535)
		this->updateEntityLists(null());
		HX_STACK_LINE(536)
		this->renderEntities();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,stepFrame,(void))

bool Console_obj::setDebug( bool value){
	HX_STACK_PUSH("Console::setDebug","com/haxepunk/debug/Console.hx",513);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(515)
	if ((!(this->_enabled))){
		HX_STACK_LINE(515)
		return false;
	}
	HX_STACK_LINE(518)
	this->_debug = value;
	HX_STACK_LINE(519)
	this->_debRead->set_visible(value);
	HX_STACK_LINE(520)
	this->_logRead->set_visible(!(value));
	HX_STACK_LINE(523)
	if ((value)){
		HX_STACK_LINE(523)
		this->updateEntityLists(null());
	}
	else{
		HX_STACK_LINE(524)
		this->updateLog();
	}
	HX_STACK_LINE(525)
	this->renderEntities();
	HX_STACK_LINE(526)
	return this->_debug;
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,setDebug,return )

bool Console_obj::getDebug( ){
	HX_STACK_PUSH("Console::getDebug","com/haxepunk/debug/Console.hx",511);
	HX_STACK_THIS(this);
	HX_STACK_LINE(511)
	return this->_debug;
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,getDebug,return )

bool Console_obj::setPaused( bool value){
	HX_STACK_PUSH("Console::setPaused","com/haxepunk/debug/Console.hx",474);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(476)
	if ((!(this->_enabled))){
		HX_STACK_LINE(476)
		return false;
	}
	HX_STACK_LINE(479)
	this->_paused = value;
	HX_STACK_LINE(480)
	::com::haxepunk::HXP_obj::engine->paused = value;
	HX_STACK_LINE(483)
	this->_back->set_visible(value);
	HX_STACK_LINE(484)
	this->_entScreen->set_visible(value);
	HX_STACK_LINE(485)
	this->_butRead->set_visible(value);
	HX_STACK_LINE(488)
	if ((value)){
		HX_STACK_LINE(489)
		if ((this->_debug)){
			HX_STACK_LINE(491)
			this->setDebug(true);
		}
		else{
			HX_STACK_LINE(492)
			this->updateLog();
		}
	}
	else{
		HX_STACK_LINE(497)
		this->_debRead->set_visible(false);
		HX_STACK_LINE(498)
		this->_logRead->set_visible(true);
		HX_STACK_LINE(499)
		this->updateLog();
		HX_STACK_LINE(500)
		{
			HX_STACK_LINE(500)
			Dynamic array = this->ENTITY_LIST;		HX_STACK_VAR(array,"array");
			HX_STACK_LINE(500)
			array->__Field(HX_CSTRING("splice"),true)((int)0,array->__Field(HX_CSTRING("length"),true));
		}
		HX_STACK_LINE(501)
		this->SCREEN_LIST->clear();
		HX_STACK_LINE(502)
		this->SELECT_LIST->clear();
	}
	HX_STACK_LINE(504)
	return this->_paused;
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,setPaused,return )

bool Console_obj::getPaused( ){
	HX_STACK_PUSH("Console::getPaused","com/haxepunk/debug/Console.hx",472);
	HX_STACK_THIS(this);
	HX_STACK_LINE(472)
	return this->_paused;
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,getPaused,return )

Void Console_obj::update( ){
{
		HX_STACK_PUSH("Console::update","com/haxepunk/debug/Console.hx",379);
		HX_STACK_THIS(this);
		HX_STACK_LINE(381)
		if ((!(this->_enabled))){
			HX_STACK_LINE(381)
			return null();
		}
		HX_STACK_LINE(383)
		this->_entRead->set_x((this->getWidth() - this->_entReadText->get_width()));
		HX_STACK_LINE(386)
		if ((this->_paused)){
			HX_STACK_LINE(389)
			this->updateButtons();
			HX_STACK_LINE(392)
			if ((this->_debug)){
				HX_STACK_LINE(395)
				if ((::com::haxepunk::HXP_obj::engine->paused)){
					HX_STACK_LINE(398)
					if ((::com::haxepunk::utils::Input_obj::mousePressed)){
						HX_STACK_LINE(399)
						if (((bool((::com::haxepunk::utils::Input_obj::getMouseFlashY() > (int)20)) && bool(((bool((::com::haxepunk::utils::Input_obj::getMouseFlashX() > this->_debReadText1->get_width())) || bool((::com::haxepunk::utils::Input_obj::getMouseFlashY() < this->_debRead->get_y())))))))){
							HX_STACK_LINE(402)
							if ((::com::haxepunk::utils::Input_obj::check((int)16))){
								HX_STACK_LINE(404)
								if (((this->SELECT_LIST->length != (int)0))){
									HX_STACK_LINE(405)
									this->startDragging();
								}
								else{
									HX_STACK_LINE(406)
									this->startPanning();
								}
							}
							else{
								HX_STACK_LINE(408)
								this->startSelection();
							}
						}
					}
					else{
						HX_STACK_LINE(414)
						if ((this->_selecting)){
							HX_STACK_LINE(414)
							this->updateSelection();
						}
						HX_STACK_LINE(415)
						if ((this->_dragging)){
							HX_STACK_LINE(415)
							this->updateDragging();
						}
						HX_STACK_LINE(416)
						if ((this->_panning)){
							HX_STACK_LINE(416)
							this->updatePanning();
						}
					}
					HX_STACK_LINE(420)
					if ((::com::haxepunk::utils::Input_obj::pressed((int)97))){
						HX_STACK_LINE(420)
						this->selectAll();
					}
					HX_STACK_LINE(423)
					if ((::com::haxepunk::utils::Input_obj::check((int)16))){
						HX_STACK_LINE(424)
						if (((this->SELECT_LIST->length != (int)0))){
							HX_STACK_LINE(427)
							if ((::com::haxepunk::utils::Input_obj::pressed(HX_CSTRING("_ARROWS")))){
								HX_STACK_LINE(429)
								this->updateKeyMoving();
							}
						}
						else{
							HX_STACK_LINE(432)
							if ((::com::haxepunk::utils::Input_obj::check(HX_CSTRING("_ARROWS")))){
								HX_STACK_LINE(434)
								this->updateKeyPanning();
							}
						}
					}
				}
				else{
					HX_STACK_LINE(441)
					this->updateEntityLists((::com::haxepunk::HXP_obj::_world->_count != this->ENTITY_LIST->length));
					HX_STACK_LINE(442)
					this->renderEntities();
					HX_STACK_LINE(443)
					this->updateFPSRead();
					HX_STACK_LINE(444)
					this->updateEntityCount();
				}
				HX_STACK_LINE(448)
				this->updateDebugRead();
			}
			else{
				HX_STACK_LINE(451)
				if ((this->_scrolling)){
					HX_STACK_LINE(453)
					this->updateScrolling();
				}
				else{
					HX_STACK_LINE(454)
					if ((::com::haxepunk::utils::Input_obj::mousePressed)){
						HX_STACK_LINE(454)
						this->startScrolling();
					}
				}
			}
		}
		else{
			HX_STACK_LINE(460)
			this->updateFPSRead();
			HX_STACK_LINE(461)
			this->updateEntityCount();
		}
		HX_STACK_LINE(465)
		if ((::com::haxepunk::utils::Input_obj::pressed(this->toggleKey))){
			HX_STACK_LINE(465)
			this->setPaused(!(this->_paused));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,update,(void))

bool Console_obj::setVisible( bool value){
	HX_STACK_PUSH("Console::setVisible","com/haxepunk/debug/Console.hx",369);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(370)
	this->_sprite->set_visible(value);
	HX_STACK_LINE(371)
	if (((bool(this->_enabled) && bool(value)))){
		HX_STACK_LINE(371)
		this->updateLog();
	}
	HX_STACK_LINE(372)
	return this->_sprite->get_visible();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,setVisible,return )

bool Console_obj::getVisible( ){
	HX_STACK_PUSH("Console::getVisible","com/haxepunk/debug/Console.hx",367);
	HX_STACK_THIS(this);
	HX_STACK_LINE(367)
	return this->_sprite->get_visible();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,getVisible,return )

Void Console_obj::onResize( ::native::events::Event e){
{
		HX_STACK_PUSH("Console::onResize","com/haxepunk/debug/Console.hx",347);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(348)
		if (((this->_back->bitmapData != null()))){
			HX_STACK_LINE(349)
			this->_back->bitmapData->dispose();
		}
		HX_STACK_LINE(352)
		this->_back->set_bitmapData(::com::haxepunk::HXP_obj::createBitmap(this->getWidth(),this->getHeight(),true,(int)-1));
		HX_STACK_LINE(353)
		::com::haxepunk::HXP_obj::matrix->identity();
		HX_STACK_LINE(354)
		::com::haxepunk::HXP_obj::matrix->tx = ::Math_obj::max((Float(((this->_back->bitmapData->get_width() - this->_bmpLogo->get_width()))) / Float((int)2)),(int)0);
		HX_STACK_LINE(355)
		::com::haxepunk::HXP_obj::matrix->ty = ::Math_obj::max((Float(((this->_back->bitmapData->get_height() - this->_bmpLogo->get_height()))) / Float((int)2)),(int)0);
		HX_STACK_LINE(356)
		::com::haxepunk::HXP_obj::matrix->scale(::Math_obj::min((Float(this->getWidth()) / Float(this->_back->bitmapData->get_width())),(int)1),::Math_obj::min((Float(this->getHeight()) / Float(this->_back->bitmapData->get_height())),(int)1));
		HX_STACK_LINE(357)
		this->_back->bitmapData->draw(this->_bmpLogo,::com::haxepunk::HXP_obj::matrix,null(),::native::display::BlendMode_obj::MULTIPLY_dyn(),null(),null());
		HX_STACK_LINE(358)
		this->_back->bitmapData->draw(this->_back->bitmapData,null(),null(),::native::display::BlendMode_obj::INVERT_dyn(),null(),null());
		HX_STACK_LINE(359)
		this->_back->bitmapData->colorTransform(this->_back->bitmapData->get_rect(),::native::geom::ColorTransform_obj::__new((int)1,(int)1,(int)1,0.5,null(),null(),null(),null()));
		HX_STACK_LINE(360)
		this->updateLog();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,onResize,(void))

Void Console_obj::enable( ){
{
		HX_STACK_PUSH("Console::enable","com/haxepunk/debug/Console.hx",161);
		HX_STACK_THIS(this);
		HX_STACK_LINE(163)
		if ((this->_enabled)){
			HX_STACK_LINE(163)
			return null();
		}
		HX_STACK_LINE(167)
		try{
			HX_STACK_LINE(169)
			this->_bmpLogo = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_logo.png"),null()),null(),null());
			HX_STACK_LINE(170)
			this->_butDebug = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_debug.png"),null()),null(),null());
			HX_STACK_LINE(171)
			this->_butOutput = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_output.png"),null()),null(),null());
			HX_STACK_LINE(172)
			this->_butPlay = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_play.png"),null()),null(),null());
			HX_STACK_LINE(173)
			this->_butPause = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_pause.png"),null()),null(),null());
			HX_STACK_LINE(174)
			this->_butStep = ::native::display::Bitmap_obj::__new(::nme::installer::Assets_obj::getBitmapData(HX_CSTRING("gfx/debug/console_step.png"),null()),null(),null());
		}
		catch(Dynamic __e){
			{
				Dynamic e = __e;{
					HX_STACK_LINE(175)
					return null();
				}
			}
		}
		HX_STACK_LINE(195)
		this->_enabled = true;
		HX_STACK_LINE(196)
		::com::haxepunk::HXP_obj::engine->addChild(this->_sprite);
		HX_STACK_LINE(199)
		bool big = (this->getWidth() >= (int)480);		HX_STACK_VAR(big,"big");
		HX_STACK_LINE(202)
		this->_sprite->addChild(this->_back);
		HX_STACK_LINE(205)
		this->_sprite->addChild(this->_entScreen);
		HX_STACK_LINE(206)
		this->_entScreen->addChild(this->_entSelect);
		HX_STACK_LINE(209)
		this->_sprite->addChild(this->_entRead);
		HX_STACK_LINE(210)
		this->_entRead->addChild(this->_entReadText);
		HX_STACK_LINE(211)
		this->_entReadText->set_defaultTextFormat(this->format((int)16,(int)16777215,HX_CSTRING("right")));
		HX_STACK_LINE(215)
		this->_entReadText->set_width((int)100);
		HX_STACK_LINE(216)
		this->_entReadText->set_height((int)20);
		HX_STACK_LINE(219)
		this->_entRead->get_graphics()->clear();
		HX_STACK_LINE(220)
		this->_entRead->get_graphics()->beginFill((int)0,.5);
		HX_STACK_LINE(224)
		this->_entRead->get_graphics()->drawRoundRect((int)0,(int)-20,(this->_entReadText->get_width() + (int)40),(int)40,(int)20,(int)20);
		HX_STACK_LINE(228)
		this->_sprite->addChild(this->_fpsRead);
		HX_STACK_LINE(229)
		this->_fpsRead->addChild(this->_fpsReadText);
		HX_STACK_LINE(230)
		this->_fpsReadText->set_defaultTextFormat(this->format((int)16,null(),null()));
		HX_STACK_LINE(234)
		this->_fpsReadText->set_width((int)70);
		HX_STACK_LINE(235)
		this->_fpsReadText->set_height((int)20);
		HX_STACK_LINE(236)
		this->_fpsReadText->set_x((int)2);
		HX_STACK_LINE(237)
		this->_fpsReadText->set_y((int)1);
		HX_STACK_LINE(240)
		this->_fpsRead->get_graphics()->clear();
		HX_STACK_LINE(241)
		this->_fpsRead->get_graphics()->beginFill((int)0,.75);
		HX_STACK_LINE(245)
		this->_fpsRead->get_graphics()->drawRoundRect((int)-20,(int)-20,(  ((big)) ? int((int)220) : int((int)120) ),(int)40,(int)20,(int)20);
		HX_STACK_LINE(249)
		if ((big)){
			HX_STACK_LINE(249)
			this->_sprite->addChild(this->_fpsInfo);
		}
		HX_STACK_LINE(250)
		this->_fpsInfo->addChild(this->_fpsInfoText0);
		HX_STACK_LINE(251)
		this->_fpsInfo->addChild(this->_fpsInfoText1);
		HX_STACK_LINE(252)
		this->_fpsInfoText0->set_defaultTextFormat(this->format((int)8,(int)11184810,null()));
		HX_STACK_LINE(253)
		this->_fpsInfoText1->set_defaultTextFormat(this->format((int)8,(int)11184810,null()));
		HX_STACK_LINE(258)
		this->_fpsInfoText0->set_width(this->_fpsInfoText1->set_width((int)60));
		HX_STACK_LINE(259)
		this->_fpsInfoText0->set_height(this->_fpsInfoText1->set_height((int)20));
		HX_STACK_LINE(260)
		this->_fpsInfo->set_x((int)75);
		HX_STACK_LINE(261)
		this->_fpsInfoText1->set_x((int)60);
		HX_STACK_LINE(263)
		this->_fpsRead->addChild(this->_memReadText);
		HX_STACK_LINE(264)
		this->_memReadText->set_defaultTextFormat(this->format((int)16,null(),null()));
		HX_STACK_LINE(265)
		this->_memReadText->set_embedFonts(true);
		HX_STACK_LINE(266)
		this->_memReadText->set_width((int)110);
		HX_STACK_LINE(267)
		this->_memReadText->set_height((int)20);
		HX_STACK_LINE(268)
		this->_memReadText->set_x(((this->_fpsInfo->get_x() + this->_fpsInfo->get_width()) + (int)5));
		HX_STACK_LINE(269)
		this->_memReadText->set_y((int)1);
		HX_STACK_LINE(272)
		this->_sprite->addChild(this->_logRead);
		HX_STACK_LINE(273)
		this->_logRead->addChild(this->_logReadText0);
		HX_STACK_LINE(274)
		this->_logRead->addChild(this->_logReadText1);
		HX_STACK_LINE(275)
		this->_logReadText0->set_defaultTextFormat(this->format((int)16,(int)16777215,null()));
		HX_STACK_LINE(276)
		this->_logReadText1->set_defaultTextFormat(this->format((  ((big)) ? int((int)16) : int((int)8) ),(int)16777215,null()));
		HX_STACK_LINE(281)
		this->_logReadText0->set_selectable(false);
		HX_STACK_LINE(282)
		this->_logReadText0->set_width((int)80);
		HX_STACK_LINE(283)
		this->_logReadText0->set_height((int)20);
		HX_STACK_LINE(284)
		this->_logReadText1->set_width(this->getWidth());
		HX_STACK_LINE(285)
		this->_logReadText0->set_x((int)2);
		HX_STACK_LINE(286)
		this->_logReadText0->set_y((int)3);
		HX_STACK_LINE(287)
		this->_logReadText0->set_text(HX_CSTRING("OUTPUT:"));
		HX_STACK_LINE(288)
		this->_logHeight = (this->getHeight() - (int)60);
		HX_STACK_LINE(289)
		this->_logBar = ::native::geom::Rectangle_obj::__new((int)8,(int)24,(int)16,(this->_logHeight - (int)8));
		HX_STACK_LINE(290)
		this->_logBarGlobal = this->_logBar->clone();
		HX_STACK_LINE(291)
		hx::AddEq(this->_logBarGlobal->y,(int)40);
		HX_STACK_LINE(292)
		this->_logLines = ::Std_obj::_int((Float(this->_logHeight) / Float(((  ((big)) ? Float(16.5) : Float(8.5) )))));
		HX_STACK_LINE(295)
		this->_sprite->addChild(this->_debRead);
		HX_STACK_LINE(296)
		this->_debRead->addChild(this->_debReadText0);
		HX_STACK_LINE(297)
		this->_debRead->addChild(this->_debReadText1);
		HX_STACK_LINE(298)
		this->_debReadText0->set_defaultTextFormat(this->format((int)16,(int)16777215,null()));
		HX_STACK_LINE(299)
		this->_debReadText1->set_defaultTextFormat(this->format((int)8,(int)16777215,null()));
		HX_STACK_LINE(304)
		this->_debReadText0->set_selectable(false);
		HX_STACK_LINE(305)
		this->_debReadText0->set_width((int)80);
		HX_STACK_LINE(306)
		this->_debReadText0->set_height((int)20);
		HX_STACK_LINE(307)
		this->_debReadText1->set_width((int)160);
		HX_STACK_LINE(308)
		this->_debReadText1->set_height(::Std_obj::_int((Float(this->getHeight()) / Float((int)4))));
		HX_STACK_LINE(309)
		this->_debReadText0->set_x((int)2);
		HX_STACK_LINE(310)
		this->_debReadText0->set_y((int)3);
		HX_STACK_LINE(311)
		this->_debReadText1->set_x((int)2);
		HX_STACK_LINE(312)
		this->_debReadText1->set_y((int)24);
		HX_STACK_LINE(313)
		this->_debReadText0->set_text(HX_CSTRING("DEBUG:"));
		HX_STACK_LINE(314)
		this->_debRead->set_y((this->getHeight() - ((this->_debReadText1->get_y() + this->_debReadText1->get_height()))));
		HX_STACK_LINE(317)
		this->_sprite->addChild(this->_butRead);
		HX_STACK_LINE(318)
		this->_butRead->addChild(this->_butDebug);
		HX_STACK_LINE(319)
		this->_butRead->addChild(this->_butOutput);
		HX_STACK_LINE(320)
		this->_butRead->addChild(this->_butPlay)->set_x((int)20);
		HX_STACK_LINE(321)
		this->_butRead->addChild(this->_butPause)->set_x((int)20);
		HX_STACK_LINE(322)
		this->_butRead->addChild(this->_butStep)->set_x((int)40);
		HX_STACK_LINE(323)
		this->updateButtons();
		HX_STACK_LINE(326)
		this->_butRead->get_graphics()->clear();
		HX_STACK_LINE(327)
		this->_butRead->get_graphics()->beginFill((int)0,.75);
		HX_STACK_LINE(331)
		this->_butRead->get_graphics()->drawRoundRect((int)-20,(int)-20,(int)100,(int)40,(int)20,(int)20);
		HX_STACK_LINE(333)
		this->setDebug(true);
		HX_STACK_LINE(336)
		::com::haxepunk::HXP_obj::stage->addEventListener(::native::events::Event_obj::RESIZE,this->onResize_dyn(),null(),null(),null());
		HX_STACK_LINE(339)
		this->setPaused(false);
		HX_STACK_LINE(341)
		::haxe::Log_obj::trace = this->traceLog_dyn();
		HX_STACK_LINE(342)
		this->LOG->push(((HX_CSTRING("-- HaxePunk v") + HX_CSTRING("2.0.3")) + HX_CSTRING(" --")));
		HX_STACK_LINE(343)
		if (((bool(this->_enabled) && bool(this->_sprite->get_visible())))){
			HX_STACK_LINE(343)
			this->updateLog();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,enable,(void))

Void Console_obj::watch( Dynamic properties){
{
		HX_STACK_PUSH("Console::watch","com/haxepunk/debug/Console.hx",145);
		HX_STACK_THIS(this);
		HX_STACK_ARG(properties,"properties");
		HX_STACK_LINE(146)
		::String i;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(147)
		if (((properties->__Field(HX_CSTRING("length"),true) > (int)1))){
			HX_STACK_LINE(149)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(149)
			while(((_g < properties->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(149)
				Dynamic i1 = properties->__GetItem(_g);		HX_STACK_VAR(i1,"i1");
				HX_STACK_LINE(149)
				++(_g);
				HX_STACK_LINE(149)
				this->WATCH_LIST->push(i1);
			}
		}
		else{
			HX_STACK_LINE(152)
			this->WATCH_LIST->push(properties->__GetItem((int)0));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,watch,(void))

Void Console_obj::log( Dynamic data){
{
		HX_STACK_PUSH("Console::log","com/haxepunk/debug/Console.hx",118);
		HX_STACK_THIS(this);
		HX_STACK_ARG(data,"data");
		HX_STACK_LINE(119)
		::String s;		HX_STACK_VAR(s,"s");
		HX_STACK_LINE(120)
		if (((data->__Field(HX_CSTRING("length"),true) > (int)1))){
			HX_STACK_LINE(122)
			s = HX_CSTRING("");
			HX_STACK_LINE(123)
			int i = (int)0;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(124)
			while(((i < data->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(126)
				if (((i > (int)0))){
					HX_STACK_LINE(126)
					hx::AddEq(s,HX_CSTRING(" "));
				}
				HX_STACK_LINE(127)
				hx::AddEq(s,::Std_obj::string(data->__GetItem((i)++)));
			}
		}
		else{
			HX_STACK_LINE(130)
			s = data->__GetItem((int)0)->toString();
		}
		HX_STACK_LINE(131)
		if (((s.indexOf(HX_CSTRING("\n"),null()) >= (int)0))){
			HX_STACK_LINE(133)
			Array< ::String > a = s.split(HX_CSTRING("\n"));		HX_STACK_VAR(a,"a");
			HX_STACK_LINE(134)
			{
				HX_STACK_LINE(134)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(134)
				while(((_g < a->length))){
					HX_STACK_LINE(134)
					::String s1 = a->__get(_g);		HX_STACK_VAR(s1,"s1");
					HX_STACK_LINE(134)
					++(_g);
					HX_STACK_LINE(134)
					this->LOG->push(s1);
				}
			}
		}
		else{
			HX_STACK_LINE(136)
			this->LOG->push(s);
		}
		HX_STACK_LINE(137)
		if (((bool(this->_enabled) && bool(this->_sprite->get_visible())))){
			HX_STACK_LINE(137)
			this->updateLog();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Console_obj,log,(void))

Void Console_obj::traceLog( Dynamic v,Dynamic infos){
{
		HX_STACK_PUSH("Console::traceLog","com/haxepunk/debug/Console.hx",104);
		HX_STACK_THIS(this);
		HX_STACK_ARG(v,"v");
		HX_STACK_ARG(infos,"infos");
		HX_STACK_LINE(105)
		::String log = ((((infos->__Field(HX_CSTRING("className"),true) + HX_CSTRING("(")) + infos->__Field(HX_CSTRING("lineNumber"),true)) + HX_CSTRING("): ")) + ::Std_obj::string(v));		HX_STACK_VAR(log,"log");
		HX_STACK_LINE(106)
		this->LOG->push(log);
		HX_STACK_LINE(108)
		::Sys_obj::println(log);
		HX_STACK_LINE(110)
		if (((bool(this->_enabled) && bool(this->_sprite->get_visible())))){
			HX_STACK_LINE(110)
			this->updateLog();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Console_obj,traceLog,(void))

Void Console_obj::init( ){
{
		HX_STACK_PUSH("Console::init","com/haxepunk/debug/Console.hx",50);
		HX_STACK_THIS(this);
		HX_STACK_LINE(51)
		this->toggleKey = (int)192;
		HX_STACK_LINE(53)
		this->_sprite = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(55)
		::native::text::Font font = ::nme::installer::Assets_obj::getFont(HX_CSTRING("font/04B_03__.ttf"));		HX_STACK_VAR(font,"font");
		HX_STACK_LINE(56)
		if (((font == null()))){
			HX_STACK_LINE(57)
			font = ::nme::installer::Assets_obj::getFont(::com::haxepunk::HXP_obj::defaultFont);
		}
		HX_STACK_LINE(60)
		this->_format = ::native::text::TextFormat_obj::__new(font->fontName,(int)8,(int)16777215,null(),null(),null(),null(),null(),null(),null(),null(),null(),null());
		HX_STACK_LINE(64)
		this->_back = ::native::display::Bitmap_obj::__new(null(),null(),null());
		HX_STACK_LINE(66)
		this->_fpsRead = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(67)
		this->_fpsReadText = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(68)
		this->_fpsInfo = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(69)
		this->_fpsInfoText0 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(70)
		this->_fpsInfoText1 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(71)
		this->_memReadText = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(73)
		this->_logRead = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(74)
		this->_logReadText0 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(75)
		this->_logReadText1 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(76)
		this->_logScroll = (int)0;
		HX_STACK_LINE(77)
		this->_logLines = (int)33;
		HX_STACK_LINE(79)
		this->_entRead = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(80)
		this->_entReadText = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(82)
		this->_debRead = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(83)
		this->_debReadText0 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(84)
		this->_debReadText1 = ::native::text::TextField_obj::__new();
		HX_STACK_LINE(86)
		this->_butRead = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(88)
		this->_entScreen = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(89)
		this->_entSelect = ::native::display::Sprite_obj::__new();
		HX_STACK_LINE(90)
		this->_entRect = ::native::geom::Rectangle_obj::__new(null(),null(),null(),null());
		HX_STACK_LINE(92)
		this->LOG = Array_obj< ::String >::__new();
		HX_STACK_LINE(94)
		this->ENTITY_LIST = Array_obj< ::com::haxepunk::Entity >::__new();
		HX_STACK_LINE(95)
		this->SCREEN_LIST = ::List_obj::__new();
		HX_STACK_LINE(96)
		this->SELECT_LIST = ::List_obj::__new();
		HX_STACK_LINE(98)
		this->WATCH_LIST = ::List_obj::__new();
		HX_STACK_LINE(99)
		this->WATCH_LIST->push(HX_CSTRING("x"));
		HX_STACK_LINE(100)
		this->WATCH_LIST->push(HX_CSTRING("y"));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Console_obj,init,(void))


Console_obj::Console_obj()
{
}

void Console_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Console);
	HX_MARK_MEMBER_NAME(WATCH_LIST,"WATCH_LIST");
	HX_MARK_MEMBER_NAME(SELECT_LIST,"SELECT_LIST");
	HX_MARK_MEMBER_NAME(SCREEN_LIST,"SCREEN_LIST");
	HX_MARK_MEMBER_NAME(ENTITY_LIST,"ENTITY_LIST");
	HX_MARK_MEMBER_NAME(LOG,"LOG");
	HX_MARK_MEMBER_NAME(_logLines,"_logLines");
	HX_MARK_MEMBER_NAME(_entRect,"_entRect");
	HX_MARK_MEMBER_NAME(_entSelect,"_entSelect");
	HX_MARK_MEMBER_NAME(_entScreen,"_entScreen");
	HX_MARK_MEMBER_NAME(_bmpLogo,"_bmpLogo");
	HX_MARK_MEMBER_NAME(_butStep,"_butStep");
	HX_MARK_MEMBER_NAME(_butPause,"_butPause");
	HX_MARK_MEMBER_NAME(_butPlay,"_butPlay");
	HX_MARK_MEMBER_NAME(_butOutput,"_butOutput");
	HX_MARK_MEMBER_NAME(_butDebug,"_butDebug");
	HX_MARK_MEMBER_NAME(_butRead,"_butRead");
	HX_MARK_MEMBER_NAME(_debReadText1,"_debReadText1");
	HX_MARK_MEMBER_NAME(_debReadText0,"_debReadText0");
	HX_MARK_MEMBER_NAME(_debRead,"_debRead");
	HX_MARK_MEMBER_NAME(_entReadText,"_entReadText");
	HX_MARK_MEMBER_NAME(_entRead,"_entRead");
	HX_MARK_MEMBER_NAME(_logScroll,"_logScroll");
	HX_MARK_MEMBER_NAME(_logBarGlobal,"_logBarGlobal");
	HX_MARK_MEMBER_NAME(_logBar,"_logBar");
	HX_MARK_MEMBER_NAME(_logHeight,"_logHeight");
	HX_MARK_MEMBER_NAME(_logReadText1,"_logReadText1");
	HX_MARK_MEMBER_NAME(_logReadText0,"_logReadText0");
	HX_MARK_MEMBER_NAME(_logRead,"_logRead");
	HX_MARK_MEMBER_NAME(_memReadText,"_memReadText");
	HX_MARK_MEMBER_NAME(_fpsInfoText1,"_fpsInfoText1");
	HX_MARK_MEMBER_NAME(_fpsInfoText0,"_fpsInfoText0");
	HX_MARK_MEMBER_NAME(_fpsInfo,"_fpsInfo");
	HX_MARK_MEMBER_NAME(_fpsReadText,"_fpsReadText");
	HX_MARK_MEMBER_NAME(_fpsRead,"_fpsRead");
	HX_MARK_MEMBER_NAME(_back,"_back");
	HX_MARK_MEMBER_NAME(_format,"_format");
	HX_MARK_MEMBER_NAME(_sprite,"_sprite");
	HX_MARK_MEMBER_NAME(_panning,"_panning");
	HX_MARK_MEMBER_NAME(_dragging,"_dragging");
	HX_MARK_MEMBER_NAME(_selecting,"_selecting");
	HX_MARK_MEMBER_NAME(_scrolling,"_scrolling");
	HX_MARK_MEMBER_NAME(_debug,"_debug");
	HX_MARK_MEMBER_NAME(_paused,"_paused");
	HX_MARK_MEMBER_NAME(_enabled,"_enabled");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(debug,"debug");
	HX_MARK_MEMBER_NAME(paused,"paused");
	HX_MARK_MEMBER_NAME(visible,"visible");
	HX_MARK_MEMBER_NAME(toggleKey,"toggleKey");
	HX_MARK_END_CLASS();
}

void Console_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(WATCH_LIST,"WATCH_LIST");
	HX_VISIT_MEMBER_NAME(SELECT_LIST,"SELECT_LIST");
	HX_VISIT_MEMBER_NAME(SCREEN_LIST,"SCREEN_LIST");
	HX_VISIT_MEMBER_NAME(ENTITY_LIST,"ENTITY_LIST");
	HX_VISIT_MEMBER_NAME(LOG,"LOG");
	HX_VISIT_MEMBER_NAME(_logLines,"_logLines");
	HX_VISIT_MEMBER_NAME(_entRect,"_entRect");
	HX_VISIT_MEMBER_NAME(_entSelect,"_entSelect");
	HX_VISIT_MEMBER_NAME(_entScreen,"_entScreen");
	HX_VISIT_MEMBER_NAME(_bmpLogo,"_bmpLogo");
	HX_VISIT_MEMBER_NAME(_butStep,"_butStep");
	HX_VISIT_MEMBER_NAME(_butPause,"_butPause");
	HX_VISIT_MEMBER_NAME(_butPlay,"_butPlay");
	HX_VISIT_MEMBER_NAME(_butOutput,"_butOutput");
	HX_VISIT_MEMBER_NAME(_butDebug,"_butDebug");
	HX_VISIT_MEMBER_NAME(_butRead,"_butRead");
	HX_VISIT_MEMBER_NAME(_debReadText1,"_debReadText1");
	HX_VISIT_MEMBER_NAME(_debReadText0,"_debReadText0");
	HX_VISIT_MEMBER_NAME(_debRead,"_debRead");
	HX_VISIT_MEMBER_NAME(_entReadText,"_entReadText");
	HX_VISIT_MEMBER_NAME(_entRead,"_entRead");
	HX_VISIT_MEMBER_NAME(_logScroll,"_logScroll");
	HX_VISIT_MEMBER_NAME(_logBarGlobal,"_logBarGlobal");
	HX_VISIT_MEMBER_NAME(_logBar,"_logBar");
	HX_VISIT_MEMBER_NAME(_logHeight,"_logHeight");
	HX_VISIT_MEMBER_NAME(_logReadText1,"_logReadText1");
	HX_VISIT_MEMBER_NAME(_logReadText0,"_logReadText0");
	HX_VISIT_MEMBER_NAME(_logRead,"_logRead");
	HX_VISIT_MEMBER_NAME(_memReadText,"_memReadText");
	HX_VISIT_MEMBER_NAME(_fpsInfoText1,"_fpsInfoText1");
	HX_VISIT_MEMBER_NAME(_fpsInfoText0,"_fpsInfoText0");
	HX_VISIT_MEMBER_NAME(_fpsInfo,"_fpsInfo");
	HX_VISIT_MEMBER_NAME(_fpsReadText,"_fpsReadText");
	HX_VISIT_MEMBER_NAME(_fpsRead,"_fpsRead");
	HX_VISIT_MEMBER_NAME(_back,"_back");
	HX_VISIT_MEMBER_NAME(_format,"_format");
	HX_VISIT_MEMBER_NAME(_sprite,"_sprite");
	HX_VISIT_MEMBER_NAME(_panning,"_panning");
	HX_VISIT_MEMBER_NAME(_dragging,"_dragging");
	HX_VISIT_MEMBER_NAME(_selecting,"_selecting");
	HX_VISIT_MEMBER_NAME(_scrolling,"_scrolling");
	HX_VISIT_MEMBER_NAME(_debug,"_debug");
	HX_VISIT_MEMBER_NAME(_paused,"_paused");
	HX_VISIT_MEMBER_NAME(_enabled,"_enabled");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(debug,"debug");
	HX_VISIT_MEMBER_NAME(paused,"paused");
	HX_VISIT_MEMBER_NAME(visible,"visible");
	HX_VISIT_MEMBER_NAME(toggleKey,"toggleKey");
}

Dynamic Console_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"LOG") ) { return LOG; }
		if (HX_FIELD_EQ(inName,"log") ) { return log_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_back") ) { return _back; }
		if (HX_FIELD_EQ(inName,"width") ) { return inCallProp ? getWidth() : width; }
		if (HX_FIELD_EQ(inName,"debug") ) { return inCallProp ? getDebug() : debug; }
		if (HX_FIELD_EQ(inName,"watch") ) { return watch_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_debug") ) { return _debug; }
		if (HX_FIELD_EQ(inName,"height") ) { return inCallProp ? getHeight() : height; }
		if (HX_FIELD_EQ(inName,"format") ) { return format_dyn(); }
		if (HX_FIELD_EQ(inName,"paused") ) { return inCallProp ? getPaused() : paused; }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"enable") ) { return enable_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_logBar") ) { return _logBar; }
		if (HX_FIELD_EQ(inName,"_format") ) { return _format; }
		if (HX_FIELD_EQ(inName,"_sprite") ) { return _sprite; }
		if (HX_FIELD_EQ(inName,"_paused") ) { return _paused; }
		if (HX_FIELD_EQ(inName,"visible") ) { return inCallProp ? getVisible() : visible; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_entRect") ) { return _entRect; }
		if (HX_FIELD_EQ(inName,"_bmpLogo") ) { return _bmpLogo; }
		if (HX_FIELD_EQ(inName,"_butStep") ) { return _butStep; }
		if (HX_FIELD_EQ(inName,"_butPlay") ) { return _butPlay; }
		if (HX_FIELD_EQ(inName,"_butRead") ) { return _butRead; }
		if (HX_FIELD_EQ(inName,"_debRead") ) { return _debRead; }
		if (HX_FIELD_EQ(inName,"_entRead") ) { return _entRead; }
		if (HX_FIELD_EQ(inName,"_logRead") ) { return _logRead; }
		if (HX_FIELD_EQ(inName,"_fpsInfo") ) { return _fpsInfo; }
		if (HX_FIELD_EQ(inName,"_fpsRead") ) { return _fpsRead; }
		if (HX_FIELD_EQ(inName,"_panning") ) { return _panning; }
		if (HX_FIELD_EQ(inName,"_enabled") ) { return _enabled; }
		if (HX_FIELD_EQ(inName,"getWidth") ) { return getWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"setDebug") ) { return setDebug_dyn(); }
		if (HX_FIELD_EQ(inName,"getDebug") ) { return getDebug_dyn(); }
		if (HX_FIELD_EQ(inName,"onResize") ) { return onResize_dyn(); }
		if (HX_FIELD_EQ(inName,"traceLog") ) { return traceLog_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_logLines") ) { return _logLines; }
		if (HX_FIELD_EQ(inName,"_butPause") ) { return _butPause; }
		if (HX_FIELD_EQ(inName,"_butDebug") ) { return _butDebug; }
		if (HX_FIELD_EQ(inName,"_dragging") ) { return _dragging; }
		if (HX_FIELD_EQ(inName,"getHeight") ) { return getHeight_dyn(); }
		if (HX_FIELD_EQ(inName,"updateLog") ) { return updateLog_dyn(); }
		if (HX_FIELD_EQ(inName,"selectAll") ) { return selectAll_dyn(); }
		if (HX_FIELD_EQ(inName,"setCamera") ) { return setCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"panCamera") ) { return panCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"stepFrame") ) { return stepFrame_dyn(); }
		if (HX_FIELD_EQ(inName,"setPaused") ) { return setPaused_dyn(); }
		if (HX_FIELD_EQ(inName,"getPaused") ) { return getPaused_dyn(); }
		if (HX_FIELD_EQ(inName,"toggleKey") ) { return toggleKey; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"WATCH_LIST") ) { return WATCH_LIST; }
		if (HX_FIELD_EQ(inName,"_entSelect") ) { return _entSelect; }
		if (HX_FIELD_EQ(inName,"_entScreen") ) { return _entScreen; }
		if (HX_FIELD_EQ(inName,"_butOutput") ) { return _butOutput; }
		if (HX_FIELD_EQ(inName,"_logScroll") ) { return _logScroll; }
		if (HX_FIELD_EQ(inName,"_logHeight") ) { return _logHeight; }
		if (HX_FIELD_EQ(inName,"_selecting") ) { return _selecting; }
		if (HX_FIELD_EQ(inName,"_scrolling") ) { return _scrolling; }
		if (HX_FIELD_EQ(inName,"setVisible") ) { return setVisible_dyn(); }
		if (HX_FIELD_EQ(inName,"getVisible") ) { return getVisible_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"SELECT_LIST") ) { return SELECT_LIST; }
		if (HX_FIELD_EQ(inName,"SCREEN_LIST") ) { return SCREEN_LIST; }
		if (HX_FIELD_EQ(inName,"ENTITY_LIST") ) { return ENTITY_LIST; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_entReadText") ) { return _entReadText; }
		if (HX_FIELD_EQ(inName,"_memReadText") ) { return _memReadText; }
		if (HX_FIELD_EQ(inName,"_fpsReadText") ) { return _fpsReadText; }
		if (HX_FIELD_EQ(inName,"startPanning") ) { return startPanning_dyn(); }
		if (HX_FIELD_EQ(inName,"moveSelected") ) { return moveSelected_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_debReadText1") ) { return _debReadText1; }
		if (HX_FIELD_EQ(inName,"_debReadText0") ) { return _debReadText0; }
		if (HX_FIELD_EQ(inName,"_logBarGlobal") ) { return _logBarGlobal; }
		if (HX_FIELD_EQ(inName,"_logReadText1") ) { return _logReadText1; }
		if (HX_FIELD_EQ(inName,"_logReadText0") ) { return _logReadText0; }
		if (HX_FIELD_EQ(inName,"_fpsInfoText1") ) { return _fpsInfoText1; }
		if (HX_FIELD_EQ(inName,"_fpsInfoText0") ) { return _fpsInfoText0; }
		if (HX_FIELD_EQ(inName,"updateButtons") ) { return updateButtons_dyn(); }
		if (HX_FIELD_EQ(inName,"updateFPSRead") ) { return updateFPSRead_dyn(); }
		if (HX_FIELD_EQ(inName,"updatePanning") ) { return updatePanning_dyn(); }
		if (HX_FIELD_EQ(inName,"startDragging") ) { return startDragging_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"renderEntities") ) { return renderEntities_dyn(); }
		if (HX_FIELD_EQ(inName,"startScrolling") ) { return startScrolling_dyn(); }
		if (HX_FIELD_EQ(inName,"selectEntities") ) { return selectEntities_dyn(); }
		if (HX_FIELD_EQ(inName,"startSelection") ) { return startSelection_dyn(); }
		if (HX_FIELD_EQ(inName,"updateDragging") ) { return updateDragging_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"updateDebugRead") ) { return updateDebugRead_dyn(); }
		if (HX_FIELD_EQ(inName,"updateKeyMoving") ) { return updateKeyMoving_dyn(); }
		if (HX_FIELD_EQ(inName,"updateScrolling") ) { return updateScrolling_dyn(); }
		if (HX_FIELD_EQ(inName,"updateSelection") ) { return updateSelection_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"updateKeyPanning") ) { return updateKeyPanning_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"updateEntityCount") ) { return updateEntityCount_dyn(); }
		if (HX_FIELD_EQ(inName,"updateEntityLists") ) { return updateEntityLists_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Console_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"LOG") ) { LOG=inValue.Cast< Array< ::String > >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_back") ) { _back=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { width=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"debug") ) { if (inCallProp) return setDebug(inValue);debug=inValue.Cast< bool >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_debug") ) { _debug=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { height=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"paused") ) { if (inCallProp) return setPaused(inValue);paused=inValue.Cast< bool >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_logBar") ) { _logBar=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_format") ) { _format=inValue.Cast< ::native::text::TextFormat >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_sprite") ) { _sprite=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_paused") ) { _paused=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"visible") ) { if (inCallProp) return setVisible(inValue);visible=inValue.Cast< bool >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_entRect") ) { _entRect=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_bmpLogo") ) { _bmpLogo=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butStep") ) { _butStep=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butPlay") ) { _butPlay=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butRead") ) { _butRead=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_debRead") ) { _debRead=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_entRead") ) { _entRead=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logRead") ) { _logRead=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_fpsInfo") ) { _fpsInfo=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_fpsRead") ) { _fpsRead=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_panning") ) { _panning=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_enabled") ) { _enabled=inValue.Cast< bool >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_logLines") ) { _logLines=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butPause") ) { _butPause=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butDebug") ) { _butDebug=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_dragging") ) { _dragging=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"toggleKey") ) { toggleKey=inValue.Cast< int >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"WATCH_LIST") ) { WATCH_LIST=inValue.Cast< ::List >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_entSelect") ) { _entSelect=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_entScreen") ) { _entScreen=inValue.Cast< ::native::display::Sprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_butOutput") ) { _butOutput=inValue.Cast< ::native::display::Bitmap >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logScroll") ) { _logScroll=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logHeight") ) { _logHeight=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_selecting") ) { _selecting=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_scrolling") ) { _scrolling=inValue.Cast< bool >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"SELECT_LIST") ) { SELECT_LIST=inValue.Cast< ::List >(); return inValue; }
		if (HX_FIELD_EQ(inName,"SCREEN_LIST") ) { SCREEN_LIST=inValue.Cast< ::List >(); return inValue; }
		if (HX_FIELD_EQ(inName,"ENTITY_LIST") ) { ENTITY_LIST=inValue.Cast< Array< ::com::haxepunk::Entity > >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_entReadText") ) { _entReadText=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_memReadText") ) { _memReadText=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_fpsReadText") ) { _fpsReadText=inValue.Cast< ::native::text::TextField >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_debReadText1") ) { _debReadText1=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_debReadText0") ) { _debReadText0=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logBarGlobal") ) { _logBarGlobal=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logReadText1") ) { _logReadText1=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_logReadText0") ) { _logReadText0=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_fpsInfoText1") ) { _fpsInfoText1=inValue.Cast< ::native::text::TextField >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_fpsInfoText0") ) { _fpsInfoText0=inValue.Cast< ::native::text::TextField >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Console_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("WATCH_LIST"));
	outFields->push(HX_CSTRING("SELECT_LIST"));
	outFields->push(HX_CSTRING("SCREEN_LIST"));
	outFields->push(HX_CSTRING("ENTITY_LIST"));
	outFields->push(HX_CSTRING("LOG"));
	outFields->push(HX_CSTRING("_logLines"));
	outFields->push(HX_CSTRING("_entRect"));
	outFields->push(HX_CSTRING("_entSelect"));
	outFields->push(HX_CSTRING("_entScreen"));
	outFields->push(HX_CSTRING("_bmpLogo"));
	outFields->push(HX_CSTRING("_butStep"));
	outFields->push(HX_CSTRING("_butPause"));
	outFields->push(HX_CSTRING("_butPlay"));
	outFields->push(HX_CSTRING("_butOutput"));
	outFields->push(HX_CSTRING("_butDebug"));
	outFields->push(HX_CSTRING("_butRead"));
	outFields->push(HX_CSTRING("_debReadText1"));
	outFields->push(HX_CSTRING("_debReadText0"));
	outFields->push(HX_CSTRING("_debRead"));
	outFields->push(HX_CSTRING("_entReadText"));
	outFields->push(HX_CSTRING("_entRead"));
	outFields->push(HX_CSTRING("_logScroll"));
	outFields->push(HX_CSTRING("_logBarGlobal"));
	outFields->push(HX_CSTRING("_logBar"));
	outFields->push(HX_CSTRING("_logHeight"));
	outFields->push(HX_CSTRING("_logReadText1"));
	outFields->push(HX_CSTRING("_logReadText0"));
	outFields->push(HX_CSTRING("_logRead"));
	outFields->push(HX_CSTRING("_memReadText"));
	outFields->push(HX_CSTRING("_fpsInfoText1"));
	outFields->push(HX_CSTRING("_fpsInfoText0"));
	outFields->push(HX_CSTRING("_fpsInfo"));
	outFields->push(HX_CSTRING("_fpsReadText"));
	outFields->push(HX_CSTRING("_fpsRead"));
	outFields->push(HX_CSTRING("_back"));
	outFields->push(HX_CSTRING("_format"));
	outFields->push(HX_CSTRING("_sprite"));
	outFields->push(HX_CSTRING("_panning"));
	outFields->push(HX_CSTRING("_dragging"));
	outFields->push(HX_CSTRING("_selecting"));
	outFields->push(HX_CSTRING("_scrolling"));
	outFields->push(HX_CSTRING("_debug"));
	outFields->push(HX_CSTRING("_paused"));
	outFields->push(HX_CSTRING("_enabled"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("debug"));
	outFields->push(HX_CSTRING("paused"));
	outFields->push(HX_CSTRING("visible"));
	outFields->push(HX_CSTRING("toggleKey"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("WATCH_LIST"),
	HX_CSTRING("SELECT_LIST"),
	HX_CSTRING("SCREEN_LIST"),
	HX_CSTRING("ENTITY_LIST"),
	HX_CSTRING("LOG"),
	HX_CSTRING("_logLines"),
	HX_CSTRING("_entRect"),
	HX_CSTRING("_entSelect"),
	HX_CSTRING("_entScreen"),
	HX_CSTRING("_bmpLogo"),
	HX_CSTRING("_butStep"),
	HX_CSTRING("_butPause"),
	HX_CSTRING("_butPlay"),
	HX_CSTRING("_butOutput"),
	HX_CSTRING("_butDebug"),
	HX_CSTRING("_butRead"),
	HX_CSTRING("_debReadText1"),
	HX_CSTRING("_debReadText0"),
	HX_CSTRING("_debRead"),
	HX_CSTRING("_entReadText"),
	HX_CSTRING("_entRead"),
	HX_CSTRING("_logScroll"),
	HX_CSTRING("_logBarGlobal"),
	HX_CSTRING("_logBar"),
	HX_CSTRING("_logHeight"),
	HX_CSTRING("_logReadText1"),
	HX_CSTRING("_logReadText0"),
	HX_CSTRING("_logRead"),
	HX_CSTRING("_memReadText"),
	HX_CSTRING("_fpsInfoText1"),
	HX_CSTRING("_fpsInfoText0"),
	HX_CSTRING("_fpsInfo"),
	HX_CSTRING("_fpsReadText"),
	HX_CSTRING("_fpsRead"),
	HX_CSTRING("_back"),
	HX_CSTRING("_format"),
	HX_CSTRING("_sprite"),
	HX_CSTRING("_panning"),
	HX_CSTRING("_dragging"),
	HX_CSTRING("_selecting"),
	HX_CSTRING("_scrolling"),
	HX_CSTRING("_debug"),
	HX_CSTRING("_paused"),
	HX_CSTRING("_enabled"),
	HX_CSTRING("getHeight"),
	HX_CSTRING("height"),
	HX_CSTRING("getWidth"),
	HX_CSTRING("width"),
	HX_CSTRING("format"),
	HX_CSTRING("updateButtons"),
	HX_CSTRING("updateEntityCount"),
	HX_CSTRING("updateDebugRead"),
	HX_CSTRING("updateFPSRead"),
	HX_CSTRING("updateLog"),
	HX_CSTRING("renderEntities"),
	HX_CSTRING("updateEntityLists"),
	HX_CSTRING("updateKeyPanning"),
	HX_CSTRING("updateKeyMoving"),
	HX_CSTRING("updateScrolling"),
	HX_CSTRING("startScrolling"),
	HX_CSTRING("selectAll"),
	HX_CSTRING("selectEntities"),
	HX_CSTRING("updateSelection"),
	HX_CSTRING("startSelection"),
	HX_CSTRING("setCamera"),
	HX_CSTRING("panCamera"),
	HX_CSTRING("updatePanning"),
	HX_CSTRING("startPanning"),
	HX_CSTRING("moveSelected"),
	HX_CSTRING("updateDragging"),
	HX_CSTRING("startDragging"),
	HX_CSTRING("stepFrame"),
	HX_CSTRING("setDebug"),
	HX_CSTRING("getDebug"),
	HX_CSTRING("debug"),
	HX_CSTRING("setPaused"),
	HX_CSTRING("getPaused"),
	HX_CSTRING("paused"),
	HX_CSTRING("update"),
	HX_CSTRING("setVisible"),
	HX_CSTRING("getVisible"),
	HX_CSTRING("visible"),
	HX_CSTRING("onResize"),
	HX_CSTRING("enable"),
	HX_CSTRING("watch"),
	HX_CSTRING("log"),
	HX_CSTRING("traceLog"),
	HX_CSTRING("init"),
	HX_CSTRING("toggleKey"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Console_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Console_obj::__mClass,"__mClass");
};

Class Console_obj::__mClass;

void Console_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.debug.Console"), hx::TCanCast< Console_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Console_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace debug
