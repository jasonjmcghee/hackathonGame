#ifndef INCLUDED_com_haxepunk_masks_Pixelmask
#define INCLUDED_com_haxepunk_masks_Pixelmask

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/masks/Hitbox.h>
HX_DECLARE_CLASS2(com,haxepunk,Mask)
HX_DECLARE_CLASS3(com,haxepunk,masks,Hitbox)
HX_DECLARE_CLASS3(com,haxepunk,masks,Pixelmask)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace masks{


class Pixelmask_obj : public ::com::haxepunk::masks::Hitbox_obj{
	public:
		typedef ::com::haxepunk::masks::Hitbox_obj super;
		typedef Pixelmask_obj OBJ_;
		Pixelmask_obj();
		Void __construct(Dynamic source,hx::Null< int >  __o_x,hx::Null< int >  __o_y);

	public:
		static hx::ObjectPtr< Pixelmask_obj > __new(Dynamic source,hx::Null< int >  __o_x,hx::Null< int >  __o_y);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Pixelmask_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Pixelmask"); }

		::native::geom::Point _point2; /* REM */ 
		::native::geom::Point _point; /* REM */ 
		::native::geom::Rectangle _rect; /* REM */ 
		::native::display::BitmapData _data; /* REM */ 
		virtual ::native::display::BitmapData setData( ::native::display::BitmapData value);
		Dynamic setData_dyn();

		virtual ::native::display::BitmapData getData( );
		Dynamic getData_dyn();

		::native::display::BitmapData data; /* REM */ 
		virtual bool collidePixelmask( ::com::haxepunk::masks::Pixelmask other);
		Dynamic collidePixelmask_dyn();

		virtual bool collideHitbox( ::com::haxepunk::masks::Hitbox other);

		virtual bool collideMask( ::com::haxepunk::Mask other);

		int threshold; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace masks

#endif /* INCLUDED_com_haxepunk_masks_Pixelmask */ 
