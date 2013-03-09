#ifndef INCLUDED_Main
#define INCLUDED_Main

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/Engine.h>
HX_DECLARE_CLASS0(Main)
HX_DECLARE_CLASS2(com,haxepunk,Engine)
HX_DECLARE_CLASS2(native,display,DisplayObject)
HX_DECLARE_CLASS2(native,display,DisplayObjectContainer)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,display,InteractiveObject)
HX_DECLARE_CLASS2(native,display,Sprite)
HX_DECLARE_CLASS2(native,events,EventDispatcher)
HX_DECLARE_CLASS2(native,events,IEventDispatcher)


class Main_obj : public ::com::haxepunk::Engine_obj{
	public:
		typedef ::com::haxepunk::Engine_obj super;
		typedef Main_obj OBJ_;
		Main_obj();
		Void __construct(Dynamic width,Dynamic height,Dynamic frameRate,Dynamic fixed);

	public:
		static hx::ObjectPtr< Main_obj > __new(Dynamic width,Dynamic height,Dynamic frameRate,Dynamic fixed);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Main_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Main"); }

		virtual Void init( );

		static Void main( );
		static Dynamic main_dyn();

};


#endif /* INCLUDED_Main */ 
