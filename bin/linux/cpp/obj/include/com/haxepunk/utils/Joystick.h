#ifndef INCLUDED_com_haxepunk_utils_Joystick
#define INCLUDED_com_haxepunk_utils_Joystick

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(IntHash)
HX_DECLARE_CLASS3(com,haxepunk,utils,Joystick)
HX_DECLARE_CLASS2(native,geom,Point)
namespace com{
namespace haxepunk{
namespace utils{


class Joystick_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Joystick_obj OBJ_;
		Joystick_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Joystick_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Joystick_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Joystick"); }

		Float _timeout; /* REM */ 
		virtual bool set_connected( bool value);
		Dynamic set_connected_dyn();

		virtual bool get_connected( );
		Dynamic get_connected_dyn();

		virtual Float getAxis( int a);
		Dynamic getAxis_dyn();

		virtual bool check( int button);
		Dynamic check_dyn();

		virtual bool pressed( int button);
		Dynamic pressed_dyn();

		virtual Void update( );
		Dynamic update_dyn();

		bool connected; /* REM */ 
		::native::geom::Point ball; /* REM */ 
		::native::geom::Point hat; /* REM */ 
		Array< Float > axis; /* REM */ 
		::IntHash buttons; /* REM */ 
		static Float deadZone; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace utils

#endif /* INCLUDED_com_haxepunk_utils_Joystick */ 
