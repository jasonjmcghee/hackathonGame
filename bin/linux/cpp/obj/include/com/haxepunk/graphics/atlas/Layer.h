#ifndef INCLUDED_com_haxepunk_graphics_atlas_Layer
#define INCLUDED_com_haxepunk_graphics_atlas_Layer

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Layer)
namespace com{
namespace haxepunk{
namespace graphics{
namespace atlas{


class Layer_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Layer_obj OBJ_;
		Layer_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Layer_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Layer_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Layer"); }

		virtual Void prepare( );
		Dynamic prepare_dyn();

		bool dirty; /* REM */ 
		int index; /* REM */ 
		Array< Float > data; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
} // end namespace atlas

#endif /* INCLUDED_com_haxepunk_graphics_atlas_Layer */ 
