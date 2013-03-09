#include <hxcpp.h>

#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_haxepunk_Graphic
#include <com/haxepunk/Graphic.h>
#endif
#ifndef INCLUDED_com_haxepunk_HXP
#include <com/haxepunk/HXP.h>
#endif
#ifndef INCLUDED_com_haxepunk_Screen
#include <com/haxepunk/Screen.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Canvas
#include <com/haxepunk/graphics/Canvas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_Tilemap
#include <com/haxepunk/graphics/Tilemap.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_Atlas
#include <com/haxepunk/graphics/atlas/Atlas.h>
#endif
#ifndef INCLUDED_com_haxepunk_graphics_atlas_TileAtlas
#include <com/haxepunk/graphics/atlas/TileAtlas.h>
#endif
#ifndef INCLUDED_native_display_BitmapData
#include <native/display/BitmapData.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_geom_Point
#include <native/geom/Point.h>
#endif
#ifndef INCLUDED_native_geom_Rectangle
#include <native/geom/Rectangle.h>
#endif
namespace com{
namespace haxepunk{
namespace graphics{

Void Tilemap_obj::__construct(Dynamic tileset,int width,int height,int tileWidth,int tileHeight)
{
HX_STACK_PUSH("Tilemap::new","com/haxepunk/graphics/Tilemap.hx",32);
{
	HX_STACK_LINE(33)
	this->_rect = ::com::haxepunk::HXP_obj::rect;
	HX_STACK_LINE(36)
	this->_width = (width - hx::Mod(width,tileWidth));
	HX_STACK_LINE(37)
	this->_height = (height - hx::Mod(height,tileHeight));
	HX_STACK_LINE(38)
	this->_columns = ::Std_obj::_int((Float(this->_width) / Float(tileWidth)));
	HX_STACK_LINE(39)
	this->_rows = ::Std_obj::_int((Float(this->_height) / Float(tileHeight)));
	HX_STACK_LINE(40)
	if (((bool((this->_columns == (int)0)) || bool((this->_rows == (int)0))))){
		HX_STACK_LINE(40)
		hx::Throw (HX_CSTRING("Cannot create a bitmapdata of width/height = 0"));
	}
	HX_STACK_LINE(47)
	hx::SubEq(this->_maxWidth,hx::Mod(this->_maxWidth,tileWidth));
	HX_STACK_LINE(48)
	hx::SubEq(this->_maxHeight,hx::Mod(this->_maxHeight,tileHeight));
	HX_STACK_LINE(51)
	super::__construct(this->_width,this->_height);
	HX_STACK_LINE(54)
	this->_tile = ::native::geom::Rectangle_obj::__new((int)0,(int)0,tileWidth,tileHeight);
	HX_STACK_LINE(55)
	this->_map = Array_obj< Array< int > >::__new();
	HX_STACK_LINE(56)
	{
		HX_STACK_LINE(56)
		int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
		int _g = this->_rows;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(56)
		while(((_g1 < _g))){
			HX_STACK_LINE(56)
			int y = (_g1)++;		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(58)
			this->_map[y] = Array_obj< int >::__new();
			HX_STACK_LINE(59)
			{
				HX_STACK_LINE(59)
				int _g3 = (int)0;		HX_STACK_VAR(_g3,"_g3");
				int _g2 = this->_columns;		HX_STACK_VAR(_g2,"_g2");
				HX_STACK_LINE(59)
				while(((_g3 < _g2))){
					HX_STACK_LINE(59)
					int x = (_g3)++;		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(61)
					this->_map->__get(y)[x] = (int)-1;
				}
			}
		}
	}
	HX_STACK_LINE(66)
	if ((::Std_obj::is(tileset,hx::ClassOf< ::com::haxepunk::graphics::atlas::TileAtlas >()))){
		HX_STACK_LINE(68)
		this->_blit = false;
		HX_STACK_LINE(69)
		this->_atlas = hx::TCast< com::haxepunk::graphics::atlas::TileAtlas >::cast(tileset);
	}
	else{
		HX_STACK_LINE(85)
		this->_blit = false;
		HX_STACK_LINE(86)
		this->_atlas = ::com::haxepunk::graphics::atlas::TileAtlas_obj::__new(tileset,tileWidth,tileHeight);
	}
	HX_STACK_LINE(90)
	if (((bool((this->_set == null())) && bool((this->_atlas == null()))))){
		HX_STACK_LINE(90)
		hx::Throw (HX_CSTRING("Invalid tileset graphic provided."));
	}
	HX_STACK_LINE(92)
	if ((this->_blit)){
		HX_STACK_LINE(94)
		this->_setColumns = ::Std_obj::_int((Float(this->_set->get_width()) / Float(tileWidth)));
		HX_STACK_LINE(95)
		this->_setRows = ::Std_obj::_int((Float(this->_set->get_height()) / Float(tileHeight)));
	}
	else{
		HX_STACK_LINE(99)
		this->_setColumns = ::Std_obj::_int((Float(this->_atlas->width) / Float(tileWidth)));
		HX_STACK_LINE(100)
		this->_setRows = ::Std_obj::_int((Float(this->_atlas->height) / Float(tileHeight)));
	}
	HX_STACK_LINE(102)
	this->_setCount = (this->_setColumns * this->_setRows);
}
;
	return null();
}

Tilemap_obj::~Tilemap_obj() { }

Dynamic Tilemap_obj::__CreateEmpty() { return  new Tilemap_obj; }
hx::ObjectPtr< Tilemap_obj > Tilemap_obj::__new(Dynamic tileset,int width,int height,int tileWidth,int tileHeight)
{  hx::ObjectPtr< Tilemap_obj > result = new Tilemap_obj();
	result->__construct(tileset,width,height,tileWidth,tileHeight);
	return result;}

Dynamic Tilemap_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Tilemap_obj > result = new Tilemap_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4]);
	return result;}

int Tilemap_obj::getRows( ){
	HX_STACK_PUSH("Tilemap::getRows","com/haxepunk/graphics/Tilemap.hx",497);
	HX_STACK_THIS(this);
	HX_STACK_LINE(497)
	return this->_rows;
}


HX_DEFINE_DYNAMIC_FUNC0(Tilemap_obj,getRows,return )

int Tilemap_obj::getColumns( ){
	HX_STACK_PUSH("Tilemap::getColumns","com/haxepunk/graphics/Tilemap.hx",491);
	HX_STACK_THIS(this);
	HX_STACK_LINE(491)
	return this->_columns;
}


HX_DEFINE_DYNAMIC_FUNC0(Tilemap_obj,getColumns,return )

int Tilemap_obj::getTileHeight( ){
	HX_STACK_PUSH("Tilemap::getTileHeight","com/haxepunk/graphics/Tilemap.hx",485);
	HX_STACK_THIS(this);
	HX_STACK_LINE(485)
	return ::Std_obj::_int(this->_tile->height);
}


HX_DEFINE_DYNAMIC_FUNC0(Tilemap_obj,getTileHeight,return )

int Tilemap_obj::getTileWidth( ){
	HX_STACK_PUSH("Tilemap::getTileWidth","com/haxepunk/graphics/Tilemap.hx",479);
	HX_STACK_THIS(this);
	HX_STACK_LINE(479)
	return ::Std_obj::_int(this->_tile->width);
}


HX_DEFINE_DYNAMIC_FUNC0(Tilemap_obj,getTileWidth,return )

Void Tilemap_obj::updateTile( int column,int row){
{
		HX_STACK_PUSH("Tilemap::updateTile","com/haxepunk/graphics/Tilemap.hx",471);
		HX_STACK_THIS(this);
		HX_STACK_ARG(column,"column");
		HX_STACK_ARG(row,"row");
		HX_STACK_LINE(471)
		this->setTile(column,row,this->_map->__get(hx::Mod(row,this->_rows))->__get(hx::Mod(column,this->_columns)));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,updateTile,(void))

Void Tilemap_obj::render( ::native::display::BitmapData target,::native::geom::Point point,::native::geom::Point camera,hx::Null< int >  __o_layer){
int layer = __o_layer.Default(10);
	HX_STACK_PUSH("Tilemap::render","com/haxepunk/graphics/Tilemap.hx",413);
	HX_STACK_THIS(this);
	HX_STACK_ARG(target,"target");
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(camera,"camera");
	HX_STACK_ARG(layer,"layer");
{
		HX_STACK_LINE(413)
		if ((this->_blit)){
			HX_STACK_LINE(415)
			this->super::render(target,point,camera,layer);
		}
		else{
			HX_STACK_LINE(421)
			this->_point->x = ((point->x + this->x) - (camera->x * this->scrollX));
			HX_STACK_LINE(422)
			this->_point->y = ((point->y + this->y) - (camera->y * this->scrollY));
			HX_STACK_LINE(424)
			Float scalex = ::com::haxepunk::HXP_obj::screen->getFullScaleX();		HX_STACK_VAR(scalex,"scalex");
			Float scaley = ::com::haxepunk::HXP_obj::screen->getFullScaleY();		HX_STACK_VAR(scaley,"scaley");
			int tw = ::Std_obj::_int(this->getTileWidth());		HX_STACK_VAR(tw,"tw");
			int th = ::Std_obj::_int(this->getTileHeight());		HX_STACK_VAR(th,"th");
			HX_STACK_LINE(428)
			int startx = -(::Math_obj::floor((Float(this->_point->x) / Float(tw))));		HX_STACK_VAR(startx,"startx");
			int starty = -(::Math_obj::floor((Float(this->_point->y) / Float(th))));		HX_STACK_VAR(starty,"starty");
			int destx = (startx + ::Math_obj::ceil((Float(::com::haxepunk::HXP_obj::width) / Float(tw))));		HX_STACK_VAR(destx,"destx");
			int desty = (starty + ::Math_obj::ceil((Float(::com::haxepunk::HXP_obj::height) / Float(th))));		HX_STACK_VAR(desty,"desty");
			HX_STACK_LINE(434)
			startx = (startx - (int)1);
			HX_STACK_LINE(434)
			starty = (starty - (int)1);
			HX_STACK_LINE(437)
			if (((bool((bool((bool((startx > this->_columns)) || bool((starty > this->_rows)))) || bool((destx < (int)0)))) || bool((desty < (int)0))))){
				HX_STACK_LINE(438)
				return null();
			}
			HX_STACK_LINE(441)
			if (((startx < (int)0))){
				HX_STACK_LINE(441)
				startx = (int)0;
			}
			HX_STACK_LINE(442)
			if (((destx > this->_columns))){
				HX_STACK_LINE(442)
				destx = this->_columns;
			}
			HX_STACK_LINE(443)
			if (((starty < (int)0))){
				HX_STACK_LINE(443)
				starty = (int)0;
			}
			HX_STACK_LINE(444)
			if (((desty > this->_rows))){
				HX_STACK_LINE(444)
				desty = this->_rows;
			}
			HX_STACK_LINE(446)
			Float r = (Float(((int((int(this->getColor()) >> int((int)16))) & int((int)255)))) / Float((int)255));		HX_STACK_VAR(r,"r");
			Float g = (Float(((int((int(this->getColor()) >> int((int)8))) & int((int)255)))) / Float((int)255));		HX_STACK_VAR(g,"g");
			Float b = (Float(((int(this->getColor()) & int((int)255)))) / Float((int)255));		HX_STACK_VAR(b,"b");
			Float wx = (((this->_point->x + (startx * tw))) * scalex);		HX_STACK_VAR(wx,"wx");
			Float wy = (((this->_point->y + (starty * th))) * scaley);		HX_STACK_VAR(wy,"wy");
			int tile = (int)0;		HX_STACK_VAR(tile,"tile");
			HX_STACK_LINE(451)
			{
				HX_STACK_LINE(451)
				int _g = starty;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(451)
				while(((_g < desty))){
					HX_STACK_LINE(451)
					int y = (_g)++;		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(453)
					{
						HX_STACK_LINE(453)
						int _g1 = startx;		HX_STACK_VAR(_g1,"_g1");
						HX_STACK_LINE(453)
						while(((_g1 < destx))){
							HX_STACK_LINE(453)
							int x = (_g1)++;		HX_STACK_VAR(x,"x");
							HX_STACK_LINE(455)
							tile = this->getTile(x,y);
							HX_STACK_LINE(456)
							if (((tile >= (int)0))){
								HX_STACK_LINE(457)
								this->_atlas->prepareTile(tile,wx,wy,layer,scalex,scaley,(int)0,r,g,b,this->getAlpha());
							}
							HX_STACK_LINE(461)
							hx::AddEq(wx,(tw * scalex));
						}
					}
					HX_STACK_LINE(463)
					wx = (((this->_point->x + (startx * tw))) * scalex);
					HX_STACK_LINE(464)
					hx::AddEq(wy,(th * scaley));
				}
			}
		}
	}
return null();
}


Void Tilemap_obj::updateRect( ::native::geom::Rectangle rect,bool clear){
{
		HX_STACK_PUSH("Tilemap::updateRect","com/haxepunk/graphics/Tilemap.hx",384);
		HX_STACK_THIS(this);
		HX_STACK_ARG(rect,"rect");
		HX_STACK_ARG(clear,"clear");
		HX_STACK_LINE(385)
		int x = ::Std_obj::_int(rect->x);		HX_STACK_VAR(x,"x");
		int y = ::Std_obj::_int(rect->y);		HX_STACK_VAR(y,"y");
		int w = ::Std_obj::_int((x + rect->width));		HX_STACK_VAR(w,"w");
		int h = ::Std_obj::_int((y + rect->height));		HX_STACK_VAR(h,"h");
		bool u = this->usePositions;		HX_STACK_VAR(u,"u");
		HX_STACK_LINE(390)
		this->usePositions = false;
		HX_STACK_LINE(391)
		if ((clear)){
			HX_STACK_LINE(392)
			while(((y < h))){
				HX_STACK_LINE(395)
				while(((x < w))){
					HX_STACK_LINE(395)
					this->clearTile((x)++,y);
				}
				HX_STACK_LINE(396)
				x = ::Std_obj::_int(rect->x);
				HX_STACK_LINE(397)
				(y)++;
			}
		}
		else{
			HX_STACK_LINE(401)
			while(((y < h))){
				HX_STACK_LINE(404)
				while(((x < w))){
					HX_STACK_LINE(404)
					this->updateTile((x)++,y);
				}
				HX_STACK_LINE(405)
				x = ::Std_obj::_int(rect->x);
				HX_STACK_LINE(406)
				(y)++;
			}
		}
		HX_STACK_LINE(409)
		this->usePositions = u;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,updateRect,(void))

Void Tilemap_obj::shiftTiles( int columns,int rows,hx::Null< bool >  __o_wrap){
bool wrap = __o_wrap.Default(false);
	HX_STACK_PUSH("Tilemap::shiftTiles","com/haxepunk/graphics/Tilemap.hx",310);
	HX_STACK_THIS(this);
	HX_STACK_ARG(columns,"columns");
	HX_STACK_ARG(rows,"rows");
	HX_STACK_ARG(wrap,"wrap");
{
		HX_STACK_LINE(311)
		if ((this->usePositions)){
			HX_STACK_LINE(313)
			columns = ::Std_obj::_int((Float(columns) / Float(this->_tile->width)));
			HX_STACK_LINE(314)
			rows = ::Std_obj::_int((Float(rows) / Float(this->_tile->height)));
		}
		HX_STACK_LINE(317)
		if (((columns != (int)0))){
			HX_STACK_LINE(319)
			{
				HX_STACK_LINE(319)
				int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
				int _g = this->_rows;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(319)
				while(((_g1 < _g))){
					HX_STACK_LINE(319)
					int y = (_g1)++;		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(321)
					Array< int > row = this->_map->__get(y);		HX_STACK_VAR(row,"row");
					HX_STACK_LINE(322)
					if (((columns > (int)0))){
						HX_STACK_LINE(324)
						int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
						HX_STACK_LINE(324)
						while(((_g2 < columns))){
							HX_STACK_LINE(324)
							int x = (_g2)++;		HX_STACK_VAR(x,"x");
							HX_STACK_LINE(326)
							int tile = row->pop();		HX_STACK_VAR(tile,"tile");
							HX_STACK_LINE(327)
							if ((wrap)){
								HX_STACK_LINE(327)
								row->unshift(tile);
							}
						}
					}
					else{
						HX_STACK_LINE(332)
						int _g3 = (int)0;		HX_STACK_VAR(_g3,"_g3");
						int _g2 = ::Std_obj::_int(::Math_obj::abs(columns));		HX_STACK_VAR(_g2,"_g2");
						HX_STACK_LINE(332)
						while(((_g3 < _g2))){
							HX_STACK_LINE(332)
							int x = (_g3)++;		HX_STACK_VAR(x,"x");
							HX_STACK_LINE(334)
							int tile = row->shift();		HX_STACK_VAR(tile,"tile");
							HX_STACK_LINE(335)
							if ((wrap)){
								HX_STACK_LINE(335)
								row->push(tile);
							}
						}
					}
				}
			}
			HX_STACK_LINE(339)
			this->_columns = this->_map->__get(::Std_obj::_int(this->y))->length;
		}
		HX_STACK_LINE(351)
		if (((rows != (int)0))){
			HX_STACK_LINE(353)
			if (((rows > (int)0))){
				HX_STACK_LINE(355)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(355)
				while(((_g < rows))){
					HX_STACK_LINE(355)
					int y = (_g)++;		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(357)
					Array< int > row = this->_map->pop();		HX_STACK_VAR(row,"row");
					HX_STACK_LINE(358)
					if ((wrap)){
						HX_STACK_LINE(358)
						this->_map->unshift(row);
					}
				}
			}
			else{
				HX_STACK_LINE(363)
				int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
				int _g = ::Std_obj::_int(::Math_obj::abs(rows));		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(363)
				while(((_g1 < _g))){
					HX_STACK_LINE(363)
					int y = (_g1)++;		HX_STACK_VAR(y,"y");
					HX_STACK_LINE(365)
					Array< int > row = this->_map->shift();		HX_STACK_VAR(row,"row");
					HX_STACK_LINE(366)
					if ((wrap)){
						HX_STACK_LINE(366)
						this->_map->push(row);
					}
				}
			}
			HX_STACK_LINE(369)
			this->_rows = this->_map->length;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Tilemap_obj,shiftTiles,(void))

int Tilemap_obj::getIndex( int tilesColumn,int tilesRow){
	HX_STACK_PUSH("Tilemap::getIndex","com/haxepunk/graphics/Tilemap.hx",299);
	HX_STACK_THIS(this);
	HX_STACK_ARG(tilesColumn,"tilesColumn");
	HX_STACK_ARG(tilesRow,"tilesRow");
	HX_STACK_LINE(299)
	return ((hx::Mod(tilesRow,this->_setRows) * this->_setColumns) + hx::Mod(tilesColumn,this->_setColumns));
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,getIndex,return )

::String Tilemap_obj::saveToString( ::String __o_columnSep,::String __o_rowSep){
::String columnSep = __o_columnSep.Default(HX_CSTRING(","));
::String rowSep = __o_rowSep.Default(HX_CSTRING("\n"));
	HX_STACK_PUSH("Tilemap::saveToString","com/haxepunk/graphics/Tilemap.hx",277);
	HX_STACK_THIS(this);
	HX_STACK_ARG(columnSep,"columnSep");
	HX_STACK_ARG(rowSep,"rowSep");
{
		HX_STACK_LINE(278)
		::String s = HX_CSTRING("");		HX_STACK_VAR(s,"s");
		int x;		HX_STACK_VAR(x,"x");
		int y;		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(280)
		{
			HX_STACK_LINE(280)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->_rows;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(280)
			while(((_g1 < _g))){
				HX_STACK_LINE(280)
				int y1 = (_g1)++;		HX_STACK_VAR(y1,"y1");
				HX_STACK_LINE(282)
				{
					HX_STACK_LINE(282)
					int _g3 = (int)0;		HX_STACK_VAR(_g3,"_g3");
					int _g2 = this->_columns;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(282)
					while(((_g3 < _g2))){
						HX_STACK_LINE(282)
						int x1 = (_g3)++;		HX_STACK_VAR(x1,"x1");
						HX_STACK_LINE(284)
						hx::AddEq(s,::Std_obj::string(this->getTile(x1,y1)));
						HX_STACK_LINE(285)
						if (((x1 != (this->_columns - (int)1)))){
							HX_STACK_LINE(285)
							hx::AddEq(s,columnSep);
						}
					}
				}
				HX_STACK_LINE(287)
				if (((y1 != (this->_rows - (int)1)))){
					HX_STACK_LINE(287)
					hx::AddEq(s,rowSep);
				}
			}
		}
		HX_STACK_LINE(289)
		return s;
	}
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,saveToString,return )

Void Tilemap_obj::loadFromString( ::String str,::String __o_columnSep,::String __o_rowSep){
::String columnSep = __o_columnSep.Default(HX_CSTRING(","));
::String rowSep = __o_rowSep.Default(HX_CSTRING("\n"));
	HX_STACK_PUSH("Tilemap::loadFromString","com/haxepunk/graphics/Tilemap.hx",254);
	HX_STACK_THIS(this);
	HX_STACK_ARG(str,"str");
	HX_STACK_ARG(columnSep,"columnSep");
	HX_STACK_ARG(rowSep,"rowSep");
{
		HX_STACK_LINE(255)
		Array< ::String > row = str.split(rowSep);		HX_STACK_VAR(row,"row");
		int rows = row->length;		HX_STACK_VAR(rows,"rows");
		Array< ::String > col;		HX_STACK_VAR(col,"col");
		int cols;		HX_STACK_VAR(cols,"cols");
		int x;		HX_STACK_VAR(x,"x");
		int y;		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(258)
		{
			HX_STACK_LINE(258)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(258)
			while(((_g < rows))){
				HX_STACK_LINE(258)
				int y1 = (_g)++;		HX_STACK_VAR(y1,"y1");
				HX_STACK_LINE(260)
				if (((row->__get(y1) == HX_CSTRING("")))){
					HX_STACK_LINE(260)
					continue;
				}
				HX_STACK_LINE(261)
				col = row->__get(y1).split(columnSep);
				HX_STACK_LINE(262)
				cols = col->length;
				HX_STACK_LINE(263)
				{
					HX_STACK_LINE(263)
					int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(263)
					while(((_g1 < cols))){
						HX_STACK_LINE(263)
						int x1 = (_g1)++;		HX_STACK_VAR(x1,"x1");
						HX_STACK_LINE(265)
						if (((col->__get(x1) == HX_CSTRING("")))){
							HX_STACK_LINE(265)
							continue;
						}
						HX_STACK_LINE(266)
						this->setTile(x1,y1,::Std_obj::parseInt(col->__get(x1)));
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Tilemap_obj,loadFromString,(void))

Void Tilemap_obj::loadFrom2DArray( Array< Array< int > > array){
{
		HX_STACK_PUSH("Tilemap::loadFrom2DArray","com/haxepunk/graphics/Tilemap.hx",236);
		HX_STACK_THIS(this);
		HX_STACK_ARG(array,"array");
		HX_STACK_LINE(236)
		this->_map = array;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Tilemap_obj,loadFrom2DArray,(void))

Void Tilemap_obj::clearRect( int column,int row,hx::Null< int >  __o_width,hx::Null< int >  __o_height){
int width = __o_width.Default(1);
int height = __o_height.Default(1);
	HX_STACK_PUSH("Tilemap::clearRect","com/haxepunk/graphics/Tilemap.hx",207);
	HX_STACK_THIS(this);
	HX_STACK_ARG(column,"column");
	HX_STACK_ARG(row,"row");
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
{
		HX_STACK_LINE(208)
		if ((this->usePositions)){
			HX_STACK_LINE(210)
			column = ::Std_obj::_int((Float(column) / Float(this->_tile->width)));
			HX_STACK_LINE(211)
			row = ::Std_obj::_int((Float(row) / Float(this->_tile->height)));
			HX_STACK_LINE(212)
			width = ::Std_obj::_int((Float(width) / Float(this->_tile->width)));
			HX_STACK_LINE(213)
			height = ::Std_obj::_int((Float(height) / Float(this->_tile->height)));
		}
		HX_STACK_LINE(215)
		hx::ModEq(column,this->_columns);
		HX_STACK_LINE(216)
		hx::ModEq(row,this->_rows);
		HX_STACK_LINE(217)
		int c = column;		HX_STACK_VAR(c,"c");
		int r = (column + width);		HX_STACK_VAR(r,"r");
		int b = (row + height);		HX_STACK_VAR(b,"b");
		bool u = this->usePositions;		HX_STACK_VAR(u,"u");
		HX_STACK_LINE(221)
		this->usePositions = false;
		HX_STACK_LINE(222)
		while(((row < b))){
			HX_STACK_LINE(224)
			while(((column < r))){
				HX_STACK_LINE(226)
				this->clearTile(column,row);
				HX_STACK_LINE(227)
				(column)++;
			}
			HX_STACK_LINE(229)
			column = c;
			HX_STACK_LINE(230)
			(row)++;
		}
		HX_STACK_LINE(232)
		this->usePositions = u;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(Tilemap_obj,clearRect,(void))

Void Tilemap_obj::setRect( int column,int row,hx::Null< int >  __o_width,hx::Null< int >  __o_height,hx::Null< int >  __o_index){
int width = __o_width.Default(1);
int height = __o_height.Default(1);
int index = __o_index.Default(0);
	HX_STACK_PUSH("Tilemap::setRect","com/haxepunk/graphics/Tilemap.hx",171);
	HX_STACK_THIS(this);
	HX_STACK_ARG(column,"column");
	HX_STACK_ARG(row,"row");
	HX_STACK_ARG(width,"width");
	HX_STACK_ARG(height,"height");
	HX_STACK_ARG(index,"index");
{
		HX_STACK_LINE(172)
		if ((this->usePositions)){
			HX_STACK_LINE(174)
			column = ::Std_obj::_int((Float(column) / Float(this->_tile->width)));
			HX_STACK_LINE(175)
			row = ::Std_obj::_int((Float(row) / Float(this->_tile->height)));
			HX_STACK_LINE(176)
			width = ::Std_obj::_int((Float(width) / Float(this->_tile->width)));
			HX_STACK_LINE(177)
			height = ::Std_obj::_int((Float(height) / Float(this->_tile->height)));
		}
		HX_STACK_LINE(179)
		hx::ModEq(column,this->_columns);
		HX_STACK_LINE(180)
		hx::ModEq(row,this->_rows);
		HX_STACK_LINE(181)
		int c = column;		HX_STACK_VAR(c,"c");
		int r = (column + width);		HX_STACK_VAR(r,"r");
		int b = (row + height);		HX_STACK_VAR(b,"b");
		bool u = this->usePositions;		HX_STACK_VAR(u,"u");
		HX_STACK_LINE(185)
		this->usePositions = false;
		HX_STACK_LINE(186)
		while(((row < b))){
			HX_STACK_LINE(188)
			while(((column < r))){
				HX_STACK_LINE(190)
				this->setTile(column,row,index);
				HX_STACK_LINE(191)
				(column)++;
			}
			HX_STACK_LINE(193)
			column = c;
			HX_STACK_LINE(194)
			(row)++;
		}
		HX_STACK_LINE(196)
		this->usePositions = u;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC5(Tilemap_obj,setRect,(void))

int Tilemap_obj::getTile( int column,int row){
	HX_STACK_PUSH("Tilemap::getTile","com/haxepunk/graphics/Tilemap.hx",153);
	HX_STACK_THIS(this);
	HX_STACK_ARG(column,"column");
	HX_STACK_ARG(row,"row");
	HX_STACK_LINE(154)
	if ((this->usePositions)){
		HX_STACK_LINE(156)
		column = ::Std_obj::_int((Float(column) / Float(this->_tile->width)));
		HX_STACK_LINE(157)
		row = ::Std_obj::_int((Float(row) / Float(this->_tile->height)));
	}
	HX_STACK_LINE(159)
	return this->_map->__get(hx::Mod(row,this->_rows))->__get(hx::Mod(column,this->_columns));
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,getTile,return )

Void Tilemap_obj::clearTile( int column,int row){
{
		HX_STACK_PUSH("Tilemap::clearTile","com/haxepunk/graphics/Tilemap.hx",133);
		HX_STACK_THIS(this);
		HX_STACK_ARG(column,"column");
		HX_STACK_ARG(row,"row");
		HX_STACK_LINE(134)
		if ((this->usePositions)){
			HX_STACK_LINE(136)
			column = ::Std_obj::_int((Float(column) / Float(this->_tile->width)));
			HX_STACK_LINE(137)
			row = ::Std_obj::_int((Float(row) / Float(this->_tile->height)));
		}
		HX_STACK_LINE(139)
		hx::ModEq(column,this->_columns);
		HX_STACK_LINE(140)
		hx::ModEq(row,this->_rows);
		HX_STACK_LINE(141)
		this->_tile->x = (column * this->_tile->width);
		HX_STACK_LINE(142)
		this->_tile->y = (row * this->_tile->height);
		HX_STACK_LINE(143)
		if ((this->_blit)){
			HX_STACK_LINE(143)
			this->fill(this->_tile,(int)0,(int)0);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Tilemap_obj,clearTile,(void))

Void Tilemap_obj::setTile( int column,int row,hx::Null< int >  __o_index){
int index = __o_index.Default(0);
	HX_STACK_PUSH("Tilemap::setTile","com/haxepunk/graphics/Tilemap.hx",112);
	HX_STACK_THIS(this);
	HX_STACK_ARG(column,"column");
	HX_STACK_ARG(row,"row");
	HX_STACK_ARG(index,"index");
{
		HX_STACK_LINE(113)
		if ((this->usePositions)){
			HX_STACK_LINE(115)
			column = ::Std_obj::_int((Float(column) / Float(this->_tile->width)));
			HX_STACK_LINE(116)
			row = ::Std_obj::_int((Float(row) / Float(this->_tile->height)));
		}
		HX_STACK_LINE(118)
		hx::ModEq(index,this->_setCount);
		HX_STACK_LINE(119)
		hx::ModEq(column,this->_columns);
		HX_STACK_LINE(120)
		hx::ModEq(row,this->_rows);
		HX_STACK_LINE(121)
		this->_tile->x = (hx::Mod(index,this->_setColumns) * this->_tile->width);
		HX_STACK_LINE(122)
		this->_tile->y = (::Std_obj::_int((Float(index) / Float(this->_setColumns))) * this->_tile->height);
		HX_STACK_LINE(123)
		this->_map->__get(row)[column] = index;
		HX_STACK_LINE(124)
		if ((this->_blit)){
			HX_STACK_LINE(124)
			this->draw(::Std_obj::_int((column * this->_tile->width)),::Std_obj::_int((row * this->_tile->height)),this->_set,this->_tile);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(Tilemap_obj,setTile,(void))


Tilemap_obj::Tilemap_obj()
{
}

void Tilemap_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Tilemap);
	HX_MARK_MEMBER_NAME(_tile,"_tile");
	HX_MARK_MEMBER_NAME(_setCount,"_setCount");
	HX_MARK_MEMBER_NAME(_setRows,"_setRows");
	HX_MARK_MEMBER_NAME(_setColumns,"_setColumns");
	HX_MARK_MEMBER_NAME(_atlas,"_atlas");
	HX_MARK_MEMBER_NAME(_set,"_set");
	HX_MARK_MEMBER_NAME(_rows,"_rows");
	HX_MARK_MEMBER_NAME(_columns,"_columns");
	HX_MARK_MEMBER_NAME(_map,"_map");
	HX_MARK_MEMBER_NAME(rows,"rows");
	HX_MARK_MEMBER_NAME(columns,"columns");
	HX_MARK_MEMBER_NAME(tileHeight,"tileHeight");
	HX_MARK_MEMBER_NAME(tileWidth,"tileWidth");
	HX_MARK_MEMBER_NAME(usePositions,"usePositions");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Tilemap_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_tile,"_tile");
	HX_VISIT_MEMBER_NAME(_setCount,"_setCount");
	HX_VISIT_MEMBER_NAME(_setRows,"_setRows");
	HX_VISIT_MEMBER_NAME(_setColumns,"_setColumns");
	HX_VISIT_MEMBER_NAME(_atlas,"_atlas");
	HX_VISIT_MEMBER_NAME(_set,"_set");
	HX_VISIT_MEMBER_NAME(_rows,"_rows");
	HX_VISIT_MEMBER_NAME(_columns,"_columns");
	HX_VISIT_MEMBER_NAME(_map,"_map");
	HX_VISIT_MEMBER_NAME(rows,"rows");
	HX_VISIT_MEMBER_NAME(columns,"columns");
	HX_VISIT_MEMBER_NAME(tileHeight,"tileHeight");
	HX_VISIT_MEMBER_NAME(tileWidth,"tileWidth");
	HX_VISIT_MEMBER_NAME(usePositions,"usePositions");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Tilemap_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"_set") ) { return _set; }
		if (HX_FIELD_EQ(inName,"_map") ) { return _map; }
		if (HX_FIELD_EQ(inName,"rows") ) { return inCallProp ? getRows() : rows; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_tile") ) { return _tile; }
		if (HX_FIELD_EQ(inName,"_rows") ) { return _rows; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_atlas") ) { return _atlas; }
		if (HX_FIELD_EQ(inName,"render") ) { return render_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getRows") ) { return getRows_dyn(); }
		if (HX_FIELD_EQ(inName,"columns") ) { return inCallProp ? getColumns() : columns; }
		if (HX_FIELD_EQ(inName,"setRect") ) { return setRect_dyn(); }
		if (HX_FIELD_EQ(inName,"getTile") ) { return getTile_dyn(); }
		if (HX_FIELD_EQ(inName,"setTile") ) { return setTile_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_setRows") ) { return _setRows; }
		if (HX_FIELD_EQ(inName,"_columns") ) { return _columns; }
		if (HX_FIELD_EQ(inName,"getIndex") ) { return getIndex_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_setCount") ) { return _setCount; }
		if (HX_FIELD_EQ(inName,"tileWidth") ) { return inCallProp ? getTileWidth() : tileWidth; }
		if (HX_FIELD_EQ(inName,"clearRect") ) { return clearRect_dyn(); }
		if (HX_FIELD_EQ(inName,"clearTile") ) { return clearTile_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"getColumns") ) { return getColumns_dyn(); }
		if (HX_FIELD_EQ(inName,"tileHeight") ) { return inCallProp ? getTileHeight() : tileHeight; }
		if (HX_FIELD_EQ(inName,"updateTile") ) { return updateTile_dyn(); }
		if (HX_FIELD_EQ(inName,"updateRect") ) { return updateRect_dyn(); }
		if (HX_FIELD_EQ(inName,"shiftTiles") ) { return shiftTiles_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_setColumns") ) { return _setColumns; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"getTileWidth") ) { return getTileWidth_dyn(); }
		if (HX_FIELD_EQ(inName,"saveToString") ) { return saveToString_dyn(); }
		if (HX_FIELD_EQ(inName,"usePositions") ) { return usePositions; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"getTileHeight") ) { return getTileHeight_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"loadFromString") ) { return loadFromString_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"loadFrom2DArray") ) { return loadFrom2DArray_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Tilemap_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"_set") ) { _set=inValue.Cast< ::native::display::BitmapData >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_map") ) { _map=inValue.Cast< Array< Array< int > > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"rows") ) { rows=inValue.Cast< int >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_tile") ) { _tile=inValue.Cast< ::native::geom::Rectangle >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_rows") ) { _rows=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_atlas") ) { _atlas=inValue.Cast< ::com::haxepunk::graphics::atlas::TileAtlas >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"columns") ) { columns=inValue.Cast< int >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_setRows") ) { _setRows=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_columns") ) { _columns=inValue.Cast< int >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_setCount") ) { _setCount=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"tileWidth") ) { tileWidth=inValue.Cast< int >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"tileHeight") ) { tileHeight=inValue.Cast< int >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_setColumns") ) { _setColumns=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"usePositions") ) { usePositions=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Tilemap_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_tile"));
	outFields->push(HX_CSTRING("_setCount"));
	outFields->push(HX_CSTRING("_setRows"));
	outFields->push(HX_CSTRING("_setColumns"));
	outFields->push(HX_CSTRING("_atlas"));
	outFields->push(HX_CSTRING("_set"));
	outFields->push(HX_CSTRING("_rows"));
	outFields->push(HX_CSTRING("_columns"));
	outFields->push(HX_CSTRING("_map"));
	outFields->push(HX_CSTRING("rows"));
	outFields->push(HX_CSTRING("columns"));
	outFields->push(HX_CSTRING("tileHeight"));
	outFields->push(HX_CSTRING("tileWidth"));
	outFields->push(HX_CSTRING("usePositions"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_tile"),
	HX_CSTRING("_setCount"),
	HX_CSTRING("_setRows"),
	HX_CSTRING("_setColumns"),
	HX_CSTRING("_atlas"),
	HX_CSTRING("_set"),
	HX_CSTRING("_rows"),
	HX_CSTRING("_columns"),
	HX_CSTRING("_map"),
	HX_CSTRING("getRows"),
	HX_CSTRING("rows"),
	HX_CSTRING("getColumns"),
	HX_CSTRING("columns"),
	HX_CSTRING("getTileHeight"),
	HX_CSTRING("tileHeight"),
	HX_CSTRING("getTileWidth"),
	HX_CSTRING("tileWidth"),
	HX_CSTRING("updateTile"),
	HX_CSTRING("render"),
	HX_CSTRING("updateRect"),
	HX_CSTRING("shiftTiles"),
	HX_CSTRING("getIndex"),
	HX_CSTRING("saveToString"),
	HX_CSTRING("loadFromString"),
	HX_CSTRING("loadFrom2DArray"),
	HX_CSTRING("clearRect"),
	HX_CSTRING("setRect"),
	HX_CSTRING("getTile"),
	HX_CSTRING("clearTile"),
	HX_CSTRING("setTile"),
	HX_CSTRING("usePositions"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Tilemap_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Tilemap_obj::__mClass,"__mClass");
};

Class Tilemap_obj::__mClass;

void Tilemap_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.haxepunk.graphics.Tilemap"), hx::TCanCast< Tilemap_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Tilemap_obj::__boot()
{
}

} // end namespace com
} // end namespace haxepunk
} // end namespace graphics
