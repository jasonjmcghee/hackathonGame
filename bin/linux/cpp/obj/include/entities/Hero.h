#ifndef INCLUDED_entities_Hero
#define INCLUDED_entities_Hero

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/Entity.h>
HX_DECLARE_CLASS2(com,haxepunk,Entity)
HX_DECLARE_CLASS2(com,haxepunk,Tweener)
HX_DECLARE_CLASS1(entities,Hero)
namespace entities{


class Hero_obj : public ::com::haxepunk::Entity_obj{
	public:
		typedef ::com::haxepunk::Entity_obj super;
		typedef Hero_obj OBJ_;
		Hero_obj();
		Void __construct(int x,int y);

	public:
		static hx::ObjectPtr< Hero_obj > __new(int x,int y);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Hero_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Hero"); }

		virtual Void move( );
		Dynamic move_dyn();

		virtual Void update( );

		virtual Void handleInput( );
		Dynamic handleInput_dyn();

		Float yAccel; /* REM */ 
		Float xAccel; /* REM */ 
		Float yVel; /* REM */ 
		Float xVel; /* REM */ 
		static Float maxVelocity; /* REM */ 
		static Float speed; /* REM */ 
		static Float drag; /* REM */ 
};

} // end namespace entities

#endif /* INCLUDED_entities_Hero */ 
