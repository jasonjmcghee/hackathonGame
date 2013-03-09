#ifndef INCLUDED_com_haxepunk_masks_Circle
#define INCLUDED_com_haxepunk_masks_Circle

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/masks/Hitbox.h>
HX_DECLARE_CLASS2(com,haxepunk,Mask)
HX_DECLARE_CLASS3(com,haxepunk,masks,Circle)
HX_DECLARE_CLASS3(com,haxepunk,masks,Grid)
HX_DECLARE_CLASS3(com,haxepunk,masks,Hitbox)
HX_DECLARE_CLASS3(com,haxepunk,math,Projection)
HX_DECLARE_CLASS3(com,haxepunk,math,Vector)
HX_DECLARE_CLASS2(native,display,Graphics)
HX_DECLARE_CLASS2(native,geom,Point)
namespace com{
namespace haxepunk{
namespace masks{


class Circle_obj : public ::com::haxepunk::masks::Hitbox_obj{
	public:
		typedef ::com::haxepunk::masks::Hitbox_obj super;
		typedef Circle_obj OBJ_;
		Circle_obj();
		Void __construct(hx::Null< int >  __o_radius,hx::Null< int >  __o_x,hx::Null< int >  __o_y);

	public:
		static hx::ObjectPtr< Circle_obj > __new(hx::Null< int >  __o_radius,hx::Null< int >  __o_x,hx::Null< int >  __o_y);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Circle_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Circle"); }

		int _squaredRadius; /* REM */ 
		int _radius; /* REM */ 
		virtual Void update( );

		virtual int setRadius( int value);
		Dynamic setRadius_dyn();

		virtual int getRadius( );
		Dynamic getRadius_dyn();

		int radius; /* REM */ 
		virtual int getY( );

		virtual int getX( );

		virtual Void debugDraw( ::native::display::Graphics graphics,Float scaleX,Float scaleY);

		virtual Void project( ::com::haxepunk::math::Vector axis,::com::haxepunk::math::Projection projection);

		virtual bool collideHitbox( ::com::haxepunk::masks::Hitbox other);

		virtual bool collideGrid( ::com::haxepunk::masks::Grid other);
		Dynamic collideGrid_dyn();

		virtual bool collideCircle( ::com::haxepunk::masks::Circle other);
		Dynamic collideCircle_dyn();

		virtual bool collideMask( ::com::haxepunk::Mask other);

};

} // end namespace com
} // end namespace haxepunk
} // end namespace masks

#endif /* INCLUDED_com_haxepunk_masks_Circle */ 
