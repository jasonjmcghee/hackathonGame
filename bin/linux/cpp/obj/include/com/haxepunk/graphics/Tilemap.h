#ifndef INCLUDED_com_haxepunk_graphics_Tilemap
#define INCLUDED_com_haxepunk_graphics_Tilemap

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/haxepunk/graphics/Canvas.h>
HX_DECLARE_CLASS2(com,haxepunk,Graphic)
HX_DECLARE_CLASS3(com,haxepunk,graphics,Canvas)
HX_DECLARE_CLASS3(com,haxepunk,graphics,Tilemap)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,Atlas)
HX_DECLARE_CLASS4(com,haxepunk,graphics,atlas,TileAtlas)
HX_DECLARE_CLASS2(native,display,BitmapData)
HX_DECLARE_CLASS2(native,display,IBitmapDrawable)
HX_DECLARE_CLASS2(native,geom,Point)
HX_DECLARE_CLASS2(native,geom,Rectangle)
namespace com{
namespace haxepunk{
namespace graphics{


class Tilemap_obj : public ::com::haxepunk::graphics::Canvas_obj{
	public:
		typedef ::com::haxepunk::graphics::Canvas_obj super;
		typedef Tilemap_obj OBJ_;
		Tilemap_obj();
		Void __construct(Dynamic tileset,int width,int height,int tileWidth,int tileHeight);

	public:
		static hx::ObjectPtr< Tilemap_obj > __new(Dynamic tileset,int width,int height,int tileWidth,int tileHeight);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Tilemap_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Tilemap"); }

		::native::geom::Rectangle _tile; /* REM */ 
		int _setCount; /* REM */ 
		int _setRows; /* REM */ 
		int _setColumns; /* REM */ 
		::com::haxepunk::graphics::atlas::TileAtlas _atlas; /* REM */ 
		::native::display::BitmapData _set; /* REM */ 
		int _rows; /* REM */ 
		int _columns; /* REM */ 
		Array< Array< int > > _map; /* REM */ 
		virtual int getRows( );
		Dynamic getRows_dyn();

		int rows; /* REM */ 
		virtual int getColumns( );
		Dynamic getColumns_dyn();

		int columns; /* REM */ 
		virtual int getTileHeight( );
		Dynamic getTileHeight_dyn();

		int tileHeight; /* REM */ 
		virtual int getTileWidth( );
		Dynamic getTileWidth_dyn();

		int tileWidth; /* REM */ 
		virtual Void updateTile( int column,int row);
		Dynamic updateTile_dyn();

		virtual Void render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  layer);

		virtual Void updateRect( ::native::geom::Rectangle rect,bool clear);
		Dynamic updateRect_dyn();

		virtual Void shiftTiles( int columns,int rows,hx::Null< bool >  wrap);
		Dynamic shiftTiles_dyn();

		virtual int getIndex( int tilesColumn,int tilesRow);
		Dynamic getIndex_dyn();

		virtual ::String saveToString( ::String columnSep,::String rowSep);
		Dynamic saveToString_dyn();

		virtual Void loadFromString( ::String str,::String columnSep,::String rowSep);
		Dynamic loadFromString_dyn();

		virtual Void loadFrom2DArray( Array< Array< int > > array);
		Dynamic loadFrom2DArray_dyn();

		virtual Void clearRect( int column,int row,hx::Null< int >  width,hx::Null< int >  height);
		Dynamic clearRect_dyn();

		virtual Void setRect( int column,int row,hx::Null< int >  width,hx::Null< int >  height,hx::Null< int >  index);
		Dynamic setRect_dyn();

		virtual int getTile( int column,int row);
		Dynamic getTile_dyn();

		virtual Void clearTile( int column,int row);
		Dynamic clearTile_dyn();

		virtual Void setTile( int column,int row,hx::Null< int >  index);
		Dynamic setTile_dyn();

		bool usePositions; /* REM */ 
};

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics

#endif /* INCLUDED_com_haxepunk_graphics_Tilemap */ 
