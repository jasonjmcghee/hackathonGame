#ifndef INCLUDED_entities_Wall
#define INCLUDED_entities_Wall

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/Entity.h>
HX_DECLARE_CLASS2(com,haxepunk,Entity)
HX_DECLARE_CLASS2(com,haxepunk,Tweener)
HX_DECLARE_CLASS1(entities,Wall)
namespace entities{


class Wall_obj : public ::com::haxepunk::Entity_obj{
	public:
		typedef ::com::haxepunk::Entity_obj super;
		typedef Wall_obj OBJ_;
		Wall_obj();
		Void __construct(int posX,int posY);

	public:
		static hx::ObjectPtr< Wall_obj > __new(int posX,int posY);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Wall_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Wall"); }

};

} // end namespace entities

#endif /* INCLUDED_entities_Wall */ 
