#include <hxcpp.h>

#ifndef INCLUDED_IntHash
#include <IntHash.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_Engine
#include <com/haxepunk/Engine.h>
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
#ifndef INCLUDED_com_haxepunk_debug_Console
#include <com/haxepunk/debug/Console.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Layer
#include <com/haxepunk/graphics/atlas/Layer.h>
#endif
#ifndef INCLUDED_com_haxepunk_utils_Draw
#include <com/haxepunk/utils/Draw.h>
#endif
#ifndef INCLUDED_com_haxepunk_utils_Input
#include <com/haxepunk/utils/Input.h>
#endif
#ifndef INCLUDED_haxe_Timer
#include <haxe/Timer.h>
#endif
#ifndef INCLUDED_native_Lib
#include <native/Lib.h>
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
#ifndef INCLUDED_native_display_MovieClip
#include <native/display/MovieClip.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_display_Stage
#include <native/display/Stage.h>
#endif
#ifndef INCLUDED_native_display_StageAlign
#include <native/display/StageAlign.h>
#endif
#ifndef INCLUDED_native_display_StageDisplayState
#include <native/display/StageDisplayState.h>
#endif
#ifndef INCLUDED_native_display_StageQuality
#include <native/display/StageQuality.h>
#endif
#ifndef INCLUDED_native_display_StageScaleMode
#include <native/display/StageScaleMode.h>
#endif
#ifndef INCLUDED_native_display_Tilesheet
#include <native/display/Tilesheet.h>
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
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
#ifndef INCLUDED_nme_Lib
#include <nme/Lib.h>
#endif
namespace com{
namespace haxepunk{

Void Engine_obj::__construct(hx::Null< int >  __o_width,hx::Null< int >  __o_height,hx::Null< Float >  __o_frameRate,hx::Null< bool >  __o_fixed)
{
HX_STACK_PUSH("Engine::new","com/haxepunk/Engine.hx",52);
int width = __o_width.Default(0);
int height = __o_height.Default(0);
Float frameRate = __o_frameRate.Default(60);
bool fixed = __o_fixed.Default(false);
{
	HX_STACK_LINE(53)
	super::__construct();
	HX_STACK_LINE(56)
	::com::haxepunk::HXP_obj::bounds = ::native::geom::Rectangle_obj::__new((int)0,(int)0,width,height);
	HX_STACK_LINE(57)
	::com::haxepunk::HXP_obj::assignedFrameRate = frameRate;
	HX_STACK_LINE(58)
	::com::haxepunk::HXP_obj::fixed = fixed;
	HX_STACK_LINE(61)
	::com::haxepunk::HXP_obj::engine = hx::ObjectPtr<OBJ_>(this);
	HX_STACK_LINE(62)
	::com::haxepunk::HXP_obj::screen = ::com::haxepunk::Screen_obj::__new();
	HX_STACK_LINE(63)
	::com::haxepunk::HXP_obj::width = width;
	HX_STACK_LINE(64)
	::com::haxepunk::HXP_obj::height = height;
	HX_STACK_LINE(70)
	if (((::com::haxepunk::HXP_obj::randomSeed == (int)0))){
		HX_STACK_LINE(70)
		{
			HX_STACK_LINE(70)
			::com::haxepunk::HXP_obj::_seed = ::Std_obj::_int(::com::haxepunk::HXP_obj::clamp(::Std_obj::_int(((int)2147483646 * ::Math_obj::random())),1.0,(int)2147483646));
			HX_STACK_LINE(70)
			::com::haxepunk::HXP_obj::randomSeed = ::com::haxepunk::HXP_obj::_seed;
			HX_STACK_LINE(70)
			::com::haxepunk::HXP_obj::_seed;
		}
	}
	HX_STACK_LINE(73)
	::com::haxepunk::HXP_obj::entity = ::com::haxepunk::Entity_obj::__new(null(),null(),null(),null());
	HX_STACK_LINE(74)
	{
		HX_STACK_LINE(74)
		::com::haxepunk::HXP_obj::_time = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(74)
		::com::haxepunk::HXP_obj::_time;
	}
	HX_STACK_LINE(76)
	this->paused = false;
	HX_STACK_LINE(77)
	this->maxElapsed = 0.0333;
	HX_STACK_LINE(78)
	this->maxFrameSkip = (int)5;
	HX_STACK_LINE(79)
	this->tickRate = (int)4;
	HX_STACK_LINE(80)
	this->_frameList = Array_obj< int >::__new();
	HX_STACK_LINE(81)
	this->_flashTime = this->_delta = this->_frameListSum = (int)0;
	HX_STACK_LINE(82)
	this->_frameLast = (int)0;
	HX_STACK_LINE(89)
	this->addEventListener(::native::events::Event_obj::ADDED_TO_STAGE,this->onStage_dyn(),null(),null(),null());
	HX_STACK_LINE(90)
	::nme::Lib_obj::get_current()->addChild(hx::ObjectPtr<OBJ_>(this));
}
;
	return null();
}

Engine_obj::~Engine_obj() { }

Dynamic Engine_obj::__CreateEmpty() { return  new Engine_obj; }
hx::ObjectPtr< Engine_obj > Engine_obj::__new(hx::Null< int >  __o_width,hx::Null< int >  __o_height,hx::Null< Float >  __o_frameRate,hx::Null< bool >  __o_fixed)
{  hx::ObjectPtr< Engine_obj > result = new Engine_obj();
	result->__construct(__o_width,__o_height,__o_frameRate,__o_fixed);
	return result;}

Dynamic Engine_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Engine_obj > result = new Engine_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3]);
	return result;}

Void Engine_obj::checkWorld( ){
{
		HX_STACK_PUSH("Engine::checkWorld","com/haxepunk/Engine.hx",323);
		HX_STACK_THIS(this);
		HX_STACK_LINE(324)
		if (((::com::haxepunk::HXP_obj::_goto == null()))){
			HX_STACK_LINE(324)
			return null();
		}
		HX_STACK_LINE(326)
		if (((::com::haxepunk::HXP_obj::_world != null()))){
			HX_STACK_LINE(328)
			::com::haxepunk::HXP_obj::_world->end();
			HX_STACK_LINE(329)
			::com::haxepunk::HXP_obj::_world->updateLists();
			HX_STACK_LINE(330)
			if (((bool(::com::haxepunk::HXP_obj::_world->autoClear) && bool(::com::haxepunk::HXP_obj::_world->getTween())))){
				HX_STACK_LINE(330)
				::com::haxepunk::HXP_obj::_world->clearTweens();
			}
			HX_STACK_LINE(331)
			{
				HX_STACK_LINE(331)
				::com::haxepunk::HXP_obj::_world = ::com::haxepunk::HXP_obj::_goto;
				HX_STACK_LINE(331)
				::com::haxepunk::HXP_obj::_goto = null();
			}
			HX_STACK_LINE(332)
			::com::haxepunk::HXP_obj::camera = ::com::haxepunk::HXP_obj::_world->camera;
			HX_STACK_LINE(333)
			::com::haxepunk::HXP_obj::_world->updateLists();
			HX_STACK_LINE(334)
			::com::haxepunk::HXP_obj::_world->begin();
			HX_STACK_LINE(335)
			::com::haxepunk::HXP_obj::_world->updateLists();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,checkWorld,(void))

Void Engine_obj::onTimer( ){
{
		HX_STACK_PUSH("Engine::onTimer","com/haxepunk/Engine.hx",271);
		HX_STACK_THIS(this);
		HX_STACK_LINE(273)
		this->_time = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(274)
		hx::AddEq(this->_delta,(this->_time - this->_last));
		HX_STACK_LINE(275)
		this->_last = this->_time;
		HX_STACK_LINE(278)
		if (((this->_delta < this->_rate))){
			HX_STACK_LINE(278)
			return null();
		}
		HX_STACK_LINE(281)
		this->_gameTime = ::Std_obj::_int(this->_time);
		HX_STACK_LINE(282)
		::com::haxepunk::HXP_obj::_flashTime = (this->_time - this->_flashTime);
		HX_STACK_LINE(285)
		if (((this->_delta > this->_skip))){
			HX_STACK_LINE(285)
			this->_delta = this->_skip;
		}
		HX_STACK_LINE(286)
		while(((this->_delta >= this->_rate))){
			HX_STACK_LINE(288)
			::com::haxepunk::HXP_obj::elapsed = ((this->_rate * ::com::haxepunk::HXP_obj::rate) * 0.001);
			HX_STACK_LINE(291)
			this->_updateTime = this->_time;
			HX_STACK_LINE(292)
			hx::SubEq(this->_delta,this->_rate);
			HX_STACK_LINE(293)
			this->_prev = this->_time;
			HX_STACK_LINE(296)
			if ((!(this->paused))){
				HX_STACK_LINE(296)
				this->update();
			}
			HX_STACK_LINE(299)
			if ((::com::haxepunk::HXP_obj::consoleEnabled())){
				struct _Function_3_1{
					inline static ::com::haxepunk::debug::Console Block( ){
						HX_STACK_PUSH("*::closure","com/haxepunk/Engine.hx",299);
						{
							HX_STACK_LINE(299)
							if (((::com::haxepunk::HXP_obj::_console == null()))){
								HX_STACK_LINE(299)
								::com::haxepunk::HXP_obj::_console = ::com::haxepunk::debug::Console_obj::__new();
							}
							HX_STACK_LINE(299)
							return ::com::haxepunk::HXP_obj::_console;
						}
						return null();
					}
				};
				HX_STACK_LINE(299)
				(_Function_3_1::Block())->update();
			}
			HX_STACK_LINE(302)
			::com::haxepunk::utils::Input_obj::update();
			HX_STACK_LINE(305)
			this->_time = ::native::Lib_obj::getTimer();
			HX_STACK_LINE(306)
			::com::haxepunk::HXP_obj::_updateTime = (this->_time - this->_updateTime);
		}
		HX_STACK_LINE(310)
		this->_renderTime = this->_time;
		HX_STACK_LINE(313)
		if ((!(this->paused))){
			HX_STACK_LINE(313)
			this->render();
		}
		HX_STACK_LINE(316)
		this->_time = this->_flashTime = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(317)
		::com::haxepunk::HXP_obj::_renderTime = (this->_time - this->_renderTime);
		HX_STACK_LINE(318)
		::com::haxepunk::HXP_obj::_gameTime = (this->_time - this->_gameTime);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,onTimer,(void))

Void Engine_obj::onEnterFrame( ::native::events::Event e){
{
		HX_STACK_PUSH("Engine::onEnterFrame","com/haxepunk/Engine.hx",237);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(239)
		this->_time = this->_gameTime = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(240)
		::com::haxepunk::HXP_obj::_flashTime = (this->_time - this->_flashTime);
		HX_STACK_LINE(241)
		this->_updateTime = this->_time;
		HX_STACK_LINE(242)
		::com::haxepunk::HXP_obj::elapsed = (Float(((this->_time - this->_last))) / Float((int)1000));
		HX_STACK_LINE(243)
		if (((::com::haxepunk::HXP_obj::elapsed > this->maxElapsed))){
			HX_STACK_LINE(243)
			::com::haxepunk::HXP_obj::elapsed = this->maxElapsed;
		}
		HX_STACK_LINE(244)
		hx::MultEq(::com::haxepunk::HXP_obj::elapsed,::com::haxepunk::HXP_obj::rate);
		HX_STACK_LINE(245)
		this->_last = this->_time;
		HX_STACK_LINE(248)
		if ((!(this->paused))){
			HX_STACK_LINE(248)
			this->update();
		}
		HX_STACK_LINE(251)
		if ((::com::haxepunk::HXP_obj::consoleEnabled())){
			struct _Function_2_1{
				inline static ::com::haxepunk::debug::Console Block( ){
					HX_STACK_PUSH("*::closure","com/haxepunk/Engine.hx",251);
					{
						HX_STACK_LINE(251)
						if (((::com::haxepunk::HXP_obj::_console == null()))){
							HX_STACK_LINE(251)
							::com::haxepunk::HXP_obj::_console = ::com::haxepunk::debug::Console_obj::__new();
						}
						HX_STACK_LINE(251)
						return ::com::haxepunk::HXP_obj::_console;
					}
					return null();
				}
			};
			HX_STACK_LINE(251)
			(_Function_2_1::Block())->update();
		}
		HX_STACK_LINE(254)
		::com::haxepunk::utils::Input_obj::update();
		HX_STACK_LINE(257)
		this->_time = this->_renderTime = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(258)
		::com::haxepunk::HXP_obj::_updateTime = (this->_time - this->_updateTime);
		HX_STACK_LINE(261)
		if ((!(this->paused))){
			HX_STACK_LINE(261)
			this->render();
		}
		HX_STACK_LINE(264)
		this->_time = this->_flashTime = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(265)
		::com::haxepunk::HXP_obj::_renderTime = (this->_time - this->_renderTime);
		HX_STACK_LINE(266)
		::com::haxepunk::HXP_obj::_gameTime = (this->_time - this->_gameTime);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Engine_obj,onEnterFrame,(void))

Void Engine_obj::onStage( ::native::events::Event e){
{
		HX_STACK_PUSH("Engine::onStage","com/haxepunk/Engine.hx",195);
		HX_STACK_THIS(this);
		HX_STACK_ARG(e,"e");
		HX_STACK_LINE(203)
		this->removeEventListener(::native::events::Event_obj::ADDED_TO_STAGE,this->onStage_dyn(),null());
		HX_STACK_LINE(204)
		::com::haxepunk::HXP_obj::stage = this->get_stage();
		HX_STACK_LINE(206)
		this->setStageProperties();
		HX_STACK_LINE(209)
		::com::haxepunk::utils::Input_obj::enable();
		HX_STACK_LINE(212)
		if ((!(((::com::haxepunk::HXP_obj::_goto == null()))))){
			HX_STACK_LINE(212)
			this->checkWorld();
		}
		HX_STACK_LINE(215)
		this->init();
		HX_STACK_LINE(218)
		this->_rate = (Float((int)1000) / Float(::com::haxepunk::HXP_obj::assignedFrameRate));
		HX_STACK_LINE(219)
		if ((::com::haxepunk::HXP_obj::fixed)){
			HX_STACK_LINE(222)
			this->_skip = (this->_rate * ((this->maxFrameSkip + (int)1)));
			HX_STACK_LINE(223)
			this->_last = this->_prev = ::native::Lib_obj::getTimer();
			HX_STACK_LINE(224)
			this->_timer = ::haxe::Timer_obj::__new(this->tickRate);
			HX_STACK_LINE(225)
			this->_timer->run = this->onTimer_dyn();
		}
		else{
			HX_STACK_LINE(230)
			this->_last = ::native::Lib_obj::getTimer();
			HX_STACK_LINE(231)
			this->addEventListener(::native::events::Event_obj::ENTER_FRAME,this->onEnterFrame_dyn(),null(),null(),null());
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Engine_obj,onStage,(void))

Void Engine_obj::resize( ){
{
		HX_STACK_PUSH("Engine::resize","com/haxepunk/Engine.hx",184);
		HX_STACK_THIS(this);
		HX_STACK_LINE(185)
		if (((::com::haxepunk::HXP_obj::width == (int)0))){
			HX_STACK_LINE(185)
			::com::haxepunk::HXP_obj::width = ::com::haxepunk::HXP_obj::stage->get_stageWidth();
		}
		HX_STACK_LINE(186)
		if (((::com::haxepunk::HXP_obj::height == (int)0))){
			HX_STACK_LINE(186)
			::com::haxepunk::HXP_obj::height = ::com::haxepunk::HXP_obj::stage->get_stageHeight();
		}
		HX_STACK_LINE(188)
		::com::haxepunk::HXP_obj::screen->setScaleX((Float(::com::haxepunk::HXP_obj::stage->get_stageWidth()) / Float(::com::haxepunk::HXP_obj::width)));
		HX_STACK_LINE(189)
		::com::haxepunk::HXP_obj::screen->setScaleY((Float(::com::haxepunk::HXP_obj::stage->get_stageHeight()) / Float(::com::haxepunk::HXP_obj::height)));
		HX_STACK_LINE(190)
		::com::haxepunk::HXP_obj::resize(::com::haxepunk::HXP_obj::stage->get_stageWidth(),::com::haxepunk::HXP_obj::stage->get_stageHeight());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,resize,(void))

Void Engine_obj::setStageProperties( ){
{
		HX_STACK_PUSH("Engine::setStageProperties","com/haxepunk/Engine.hx",155);
		HX_STACK_THIS(this);
		HX_STACK_LINE(154)
		Array< ::com::haxepunk::Engine > _g = Array_obj< ::com::haxepunk::Engine >::__new().Add(hx::ObjectPtr<OBJ_>(this));		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(156)
		::com::haxepunk::HXP_obj::stage->set_frameRate(::com::haxepunk::HXP_obj::assignedFrameRate);
		HX_STACK_LINE(157)
		::com::haxepunk::HXP_obj::stage->set_align(::native::display::StageAlign_obj::TOP_LEFT_dyn());
		HX_STACK_LINE(158)
		::com::haxepunk::HXP_obj::stage->set_quality(::native::display::StageQuality_obj::HIGH_dyn());
		HX_STACK_LINE(159)
		::com::haxepunk::HXP_obj::stage->set_scaleMode(::native::display::StageScaleMode_obj::NO_SCALE_dyn());
		HX_STACK_LINE(160)
		::com::haxepunk::HXP_obj::stage->set_displayState(::native::display::StageDisplayState_obj::NORMAL_dyn());
		HX_STACK_LINE(162)
		this->resize();

		HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_1_1,Array< ::com::haxepunk::Engine >,_g)
		Void run(::native::events::Event e){
			HX_STACK_PUSH("*::_Function_1_1","com/haxepunk/Engine.hx",165);
			HX_STACK_ARG(e,"e");
			{
				HX_STACK_LINE(165)
				_g->__get((int)0)->resize();
			}
			return null();
		}
		HX_END_LOCAL_FUNC1((void))

		HX_STACK_LINE(165)
		::com::haxepunk::HXP_obj::stage->addEventListener(::native::events::Event_obj::RESIZE, Dynamic(new _Function_1_1(_g)),null(),null(),null());

		HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_1_2,Array< ::com::haxepunk::Engine >,_g)
		Void run(::native::events::Event e){
			HX_STACK_PUSH("*::_Function_1_2","com/haxepunk/Engine.hx",169);
			HX_STACK_ARG(e,"e");
			{
				HX_STACK_LINE(170)
				::com::haxepunk::HXP_obj::focused = true;
				HX_STACK_LINE(171)
				_g->__get((int)0)->focusGained();
				HX_STACK_LINE(172)
				::com::haxepunk::HXP_obj::_world->focusGained();
			}
			return null();
		}
		HX_END_LOCAL_FUNC1((void))

		HX_STACK_LINE(169)
		::com::haxepunk::HXP_obj::stage->addEventListener(::native::events::Event_obj::ACTIVATE, Dynamic(new _Function_1_2(_g)),null(),null(),null());

		HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_1_3,Array< ::com::haxepunk::Engine >,_g)
		Void run(::native::events::Event e){
			HX_STACK_PUSH("*::_Function_1_3","com/haxepunk/Engine.hx",175);
			HX_STACK_ARG(e,"e");
			{
				HX_STACK_LINE(176)
				::com::haxepunk::HXP_obj::focused = false;
				HX_STACK_LINE(177)
				_g->__get((int)0)->focusLost();
				HX_STACK_LINE(178)
				::com::haxepunk::HXP_obj::_world->focusLost();
			}
			return null();
		}
		HX_END_LOCAL_FUNC1((void))

		HX_STACK_LINE(175)
		::com::haxepunk::HXP_obj::stage->addEventListener(::native::events::Event_obj::DEACTIVATE, Dynamic(new _Function_1_3(_g)),null(),null(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,setStageProperties,(void))

Void Engine_obj::render( ){
{
		HX_STACK_PUSH("Engine::render","com/haxepunk/Engine.hx",129);
		HX_STACK_THIS(this);
		HX_STACK_LINE(131)
		Float t = ::native::Lib_obj::getTimer();		HX_STACK_VAR(t,"t");
		HX_STACK_LINE(132)
		if (((this->_frameLast == (int)0))){
			HX_STACK_LINE(132)
			this->_frameLast = ::Std_obj::_int(t);
		}
		HX_STACK_LINE(135)
		::com::haxepunk::HXP_obj::screen->swap();
		HX_STACK_LINE(136)
		::com::haxepunk::utils::Draw_obj::resetTarget();
		HX_STACK_LINE(137)
		::com::haxepunk::HXP_obj::screen->refresh();
		HX_STACK_LINE(138)
		for(::cpp::FastIterator_obj< ::native::display::Sprite > *__it = ::cpp::CreateFastIterator< ::native::display::Sprite >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->iterator());  __it->hasNext(); ){
			::native::display::Sprite sprite = __it->next();
			sprite->get_graphics()->clear();
		}
		HX_STACK_LINE(139)
		if ((::com::haxepunk::HXP_obj::_world->visible)){
			HX_STACK_LINE(139)
			::com::haxepunk::HXP_obj::_world->render();
		}
		HX_STACK_LINE(140)
		::com::haxepunk::HXP_obj::screen->redraw();
		HX_STACK_LINE(141)
		if (((::com::haxepunk::graphics::atlas::Atlas_obj::_atlases->length > (int)0))){
			HX_STACK_LINE(141)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::com::haxepunk::graphics::atlas::Atlas > _g1 = ::com::haxepunk::graphics::atlas::Atlas_obj::_atlases;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(141)
			while(((_g < _g1->length))){
				HX_STACK_LINE(141)
				::com::haxepunk::graphics::atlas::Atlas atlas = _g1->__get(_g);		HX_STACK_VAR(atlas,"atlas");
				HX_STACK_LINE(141)
				++(_g);
				HX_STACK_LINE(141)
				{
					HX_STACK_LINE(141)
					::com::haxepunk::graphics::atlas::Layer l;		HX_STACK_VAR(l,"l");
					HX_STACK_LINE(141)
					for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(atlas->_layers->keys());  __it->hasNext(); ){
						int layer = __it->next();
						{
							HX_STACK_LINE(141)
							l = atlas->_layers->get(layer);
							HX_STACK_LINE(141)
							if ((l->dirty)){
								HX_STACK_LINE(141)
								{
									HX_STACK_LINE(141)
									if (((l->index < l->data->length))){
										HX_STACK_LINE(141)
										l->data->splice(l->index,(l->data->length - l->index));
									}
									HX_STACK_LINE(141)
									l->index = (int)0;
									HX_STACK_LINE(141)
									l->dirty = false;
								}
								struct _Function_6_1{
									inline static ::native::display::Sprite Block( int &layer){
										HX_STACK_PUSH("*::closure","com/haxepunk/Engine.hx",141);
										{
											HX_STACK_LINE(141)
											::native::display::Sprite sprite = ::native::display::Sprite_obj::__new();		HX_STACK_VAR(sprite,"sprite");
											HX_STACK_LINE(141)
											int idx = (int)0;		HX_STACK_VAR(idx,"idx");
											HX_STACK_LINE(141)
											for(::cpp::FastIterator_obj< int > *__it = ::cpp::CreateFastIterator< int >(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->keys());  __it->hasNext(); ){
												int l1 = __it->next();
												{
													HX_STACK_LINE(141)
													if (((l1 < layer))){
														HX_STACK_LINE(141)
														break;
													}
													HX_STACK_LINE(141)
													hx::AddEq(idx,(int)1);
												}
;
											}
											HX_STACK_LINE(141)
											::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->set(layer,sprite);
											HX_STACK_LINE(141)
											::com::haxepunk::HXP_obj::stage->addChildAt(sprite,idx);
											HX_STACK_LINE(141)
											return sprite;
										}
										return null();
									}
								};
								HX_STACK_LINE(141)
								((  ((::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->exists(layer))) ? ::native::display::Sprite(::com::haxepunk::graphics::atlas::Atlas_obj::_sprites->get(layer)) : ::native::display::Sprite(_Function_6_1::Block(layer)) ))->get_graphics()->drawTiles(atlas->_tilesheet,l->data,::com::haxepunk::graphics::atlas::Atlas_obj::smooth,atlas->_renderFlags);
							}
						}
;
					}
				}
			}
		}
		HX_STACK_LINE(144)
		t = ::native::Lib_obj::getTimer();
		HX_STACK_LINE(145)
		hx::AddEq(this->_frameListSum,this->_frameList[this->_frameList->length] = ::Std_obj::_int((t - this->_frameLast)));
		HX_STACK_LINE(146)
		if (((this->_frameList->length > (int)10))){
			HX_STACK_LINE(146)
			hx::SubEq(this->_frameListSum,this->_frameList->shift());
		}
		HX_STACK_LINE(147)
		::com::haxepunk::HXP_obj::frameRate = (Float((int)1000) / Float(((Float(this->_frameListSum) / Float(this->_frameList->length)))));
		HX_STACK_LINE(148)
		this->_frameLast = t;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,render,(void))

Void Engine_obj::update( ){
{
		HX_STACK_PUSH("Engine::update","com/haxepunk/Engine.hx",113);
		HX_STACK_THIS(this);
		HX_STACK_LINE(114)
		if (((bool(::com::haxepunk::HXP_obj::tweener->active) && bool(::com::haxepunk::HXP_obj::tweener->getTween())))){
			HX_STACK_LINE(114)
			::com::haxepunk::HXP_obj::tweener->updateTweens();
		}
		HX_STACK_LINE(116)
		if ((::com::haxepunk::HXP_obj::_world->active)){
			HX_STACK_LINE(118)
			if ((::com::haxepunk::HXP_obj::_world->getTween())){
				HX_STACK_LINE(118)
				::com::haxepunk::HXP_obj::_world->updateTweens();
			}
			HX_STACK_LINE(119)
			::com::haxepunk::HXP_obj::_world->update();
		}
		HX_STACK_LINE(121)
		::com::haxepunk::HXP_obj::_world->updateLists();
		HX_STACK_LINE(122)
		if ((!(((::com::haxepunk::HXP_obj::_goto == null()))))){
			HX_STACK_LINE(122)
			this->checkWorld();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,update,(void))

Void Engine_obj::focusLost( ){
{
		HX_STACK_PUSH("Engine::focusLost","com/haxepunk/Engine.hx",107);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,focusLost,(void))

Void Engine_obj::focusGained( ){
{
		HX_STACK_PUSH("Engine::focusGained","com/haxepunk/Engine.hx",102);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,focusGained,(void))

Void Engine_obj::init( ){
{
		HX_STACK_PUSH("Engine::init","com/haxepunk/Engine.hx",97);
		HX_STACK_THIS(this);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Engine_obj,init,(void))


Engine_obj::Engine_obj()
{
}

void Engine_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Engine);
	HX_MARK_MEMBER_NAME(_frameList,"_frameList");
	HX_MARK_MEMBER_NAME(_frameListSum,"_frameListSum");
	HX_MARK_MEMBER_NAME(_frameLast,"_frameLast");
	HX_MARK_MEMBER_NAME(_flashTime,"_flashTime");
	HX_MARK_MEMBER_NAME(_gameTime,"_gameTime");
	HX_MARK_MEMBER_NAME(_renderTime,"_renderTime");
	HX_MARK_MEMBER_NAME(_updateTime,"_updateTime");
	HX_MARK_MEMBER_NAME(_prev,"_prev");
	HX_MARK_MEMBER_NAME(_skip,"_skip");
	HX_MARK_MEMBER_NAME(_rate,"_rate");
	HX_MARK_MEMBER_NAME(_timer,"_timer");
	HX_MARK_MEMBER_NAME(_last,"_last");
	HX_MARK_MEMBER_NAME(_time,"_time");
	HX_MARK_MEMBER_NAME(_delta,"_delta");
	HX_MARK_MEMBER_NAME(tickRate,"tickRate");
	HX_MARK_MEMBER_NAME(maxFrameSkip,"maxFrameSkip");
	HX_MARK_MEMBER_NAME(maxElapsed,"maxElapsed");
	HX_MARK_MEMBER_NAME(paused,"paused");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Engine_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_frameList,"_frameList");
	HX_VISIT_MEMBER_NAME(_frameListSum,"_frameListSum");
	HX_VISIT_MEMBER_NAME(_frameLast,"_frameLast");
	HX_VISIT_MEMBER_NAME(_flashTime,"_flashTime");
	HX_VISIT_MEMBER_NAME(_gameTime,"_gameTime");
	HX_VISIT_MEMBER_NAME(_renderTime,"_renderTime");
	HX_VISIT_MEMBER_NAME(_updateTime,"_updateTime");
	HX_VISIT_MEMBER_NAME(_prev,"_prev");
	HX_VISIT_MEMBER_NAME(_skip,"_skip");
	HX_VISIT_MEMBER_NAME(_rate,"_rate");
	HX_VISIT_MEMBER_NAME(_timer,"_timer");
	HX_VISIT_MEMBER_NAME(_last,"_last");
	HX_VISIT_MEMBER_NAME(_time,"_time");
	HX_VISIT_MEMBER_NAME(_delta,"_delta");
	HX_VISIT_MEMBER_NAME(tickRate,"tickRate");
	HX_VISIT_MEMBER_NAME(maxFrameSkip,"maxFrameSkip");
	HX_VISIT_MEMBER_NAME(maxElapsed,"maxElapsed");
	HX_VISIT_MEMBER_NAME(paused,"paused");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Engine_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_prev") ) { return _prev; }
		if (HX_FIELD_EQ(inName,"_skip") ) { return _skip; }
		if (HX_FIELD_EQ(inName,"_rate") ) { return _rate; }
		if (HX_FIELD_EQ(inName,"_last") ) { return _last; }
		if (HX_FIELD_EQ(inName,"_time") ) { return _time; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_timer") ) { return _timer; }
		if (HX_FIELD_EQ(inName,"_delta") ) { return _delta; }
		if (HX_FIELD_EQ(inName,"resize") ) { return resize_dyn(); }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"paused") ) { return paused; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"onTimer") ) { return onTimer_dyn(); }
		if (HX_FIELD_EQ(inName,"onStage") ) { return onStage_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"tickRate") ) { return tickRate; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_gameTime") ) { return _gameTime; }
		if (HX_FIELD_EQ(inName,"focusLost") ) { return focusLost_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_frameList") ) { return _frameList; }
		if (HX_FIELD_EQ(inName,"_frameLast") ) { return _frameLast; }
		if (HX_FIELD_EQ(inName,"_flashTime") ) { return _flashTime; }
		if (HX_FIELD_EQ(inName,"checkWorld") ) { return checkWorld_dyn(); }
		if (HX_FIELD_EQ(inName,"maxElapsed") ) { return maxElapsed; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_renderTime") ) { return _renderTime; }
		if (HX_FIELD_EQ(inName,"_updateTime") ) { return _updateTime; }
		if (HX_FIELD_EQ(inName,"focusGained") ) { return focusGained_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"onEnterFrame") ) { return onEnterFrame_dyn(); }
		if (HX_FIELD_EQ(inName,"maxFrameSkip") ) { return maxFrameSkip; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_frameListSum") ) { return _frameListSum; }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"setStageProperties") ) { return setStageProperties_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Engine_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"_prev") ) { _prev=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_skip") ) { _skip=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_rate") ) { _rate=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_last") ) { _last=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_time") ) { _time=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_timer") ) { _timer=inValue.Cast< ::haxe::Timer >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_delta") ) { _delta=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"paused") ) { paused=inValue.Cast< bool >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"tickRate") ) { tickRate=inValue.Cast< int >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_gameTime") ) { _gameTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"_frameList") ) { _frameList=inValue.Cast< Array< int > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_frameLast") ) { _frameLast=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_flashTime") ) { _flashTime=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"maxElapsed") ) { maxElapsed=inValue.Cast< Float >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_renderTime") ) { _renderTime=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_updateTime") ) { _updateTime=inValue.Cast< Float >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"maxFrameSkip") ) { maxFrameSkip=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_frameListSum") ) { _frameListSum=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Engine_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_frameList"));
	outFields->push(HX_CSTRING("_frameListSum"));
	outFields->push(HX_CSTRING("_frameLast"));
	outFields->push(HX_CSTRING("_flashTime"));
	outFields->push(HX_CSTRING("_gameTime"));
	outFields->push(HX_CSTRING("_renderTime"));
	outFields->push(HX_CSTRING("_updateTime"));
	outFields->push(HX_CSTRING("_prev"));
	outFields->push(HX_CSTRING("_skip"));
	outFields->push(HX_CSTRING("_rate"));
	outFields->push(HX_CSTRING("_timer"));
	outFields->push(HX_CSTRING("_last"));
	outFields->push(HX_CSTRING("_time"));
	outFields->push(HX_CSTRING("_delta"));
	outFields->push(HX_CSTRING("tickRate"));
	outFields->push(HX_CSTRING("maxFrameSkip"));
	outFields->push(HX_CSTRING("maxElapsed"));
	outFields->push(HX_CSTRING("paused"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_frameList"),
	HX_CSTRING("_frameListSum"),
	HX_CSTRING("_frameLast"),
	HX_CSTRING("_flashTime"),
	HX_CSTRING("_gameTime"),
	HX_CSTRING("_renderTime"),
	HX_CSTRING("_updateTime"),
	HX_CSTRING("_prev"),
	HX_CSTRING("_skip"),
	HX_CSTRING("_rate"),
	HX_CSTRING("_timer"),
	HX_CSTRING("_last"),
	HX_CSTRING("_time"),
	HX_CSTRING("_delta"),
	HX_CSTRING("checkWorld"),
	HX_CSTRING("onTimer"),
	HX_CSTRING("onEnterFrame"),
	HX_CSTRING("onStage"),
	HX_CSTRING("resize"),
	HX_CSTRING("setStageProperties"),
	HX_CSTRING("render"),
	HX_CSTRING("update"),
	HX_CSTRING("focusLost"),
	HX_CSTRING("focusGained"),
	HX_CSTRING("init"),
	HX_CSTRING("tickRate"),
	HX_CSTRING("maxFrameSkip"),
	HX_CSTRING("maxElapsed"),
	HX_CSTRING("paused"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Engine_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Engine_obj::__mClass,"__mClass");
};

Class Engine_obj::__mClass;

void Engine_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.Engine"), hx::TCanCast< Engine_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Engine_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
