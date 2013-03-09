#ifndef INCLUDED_GameWorld
#define INCLUDED_GameWorld

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/World.h>
HX_DECLARE_CLASS0(GameWorld)
HX_DECLARE_CLASS2(com,haxepunk,Entity)
HX_DECLARE_CLASS2(com,haxepunk,Tweener)
HX_DECLARE_CLASS2(com,haxepunk,World)
HX_DECLARE_CLASS1(entities,Hero)


class GameWorld_obj : public ::com::haxepunk::World_obj{
	public:
		typedef ::com::haxepunk::World_obj super;
		typedef GameWorld_obj OBJ_;
		GameWorld_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< GameWorld_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~GameWorld_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("GameWorld"); }

		virtual Void begin( );

		::entities::Hero hero; /* REM */ 
};


#endif /* INCLUDED_GameWorld */ 
