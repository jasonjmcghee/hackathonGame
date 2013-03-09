#include <hxcpp.h>

#include <sys/io/FileSeek.h>
#include <sys/io/FileOutput.h>
#include <sys/io/FileInput.h>
#include <sys/io/File.h>
#include <sys/FileSystem.h>
#include <sys/_FileSystem/FileKind.h>
#include <nme/installer/Assets.h>
#include <nme/VectorHelper.h>
#include <nme/Lib.h>
#include <native/utils/WeakRef.h>
#include <native/utils/Endian.h>
#include <native/utils/CompressionAlgorithm.h>
#include <native/utils/ByteArray.h>
#include <native/utils/IDataInput.h>
#include <native/utils/IMemoryRange.h>
#include <native/ui/Keyboard.h>
#include <native/text/TextFormatAlign.h>
#include <native/text/TextFormat.h>
#include <native/text/TextFieldType.h>
#include <native/text/TextFieldAutoSize.h>
#include <native/text/TextField.h>
#include <native/text/FontType.h>
#include <native/text/FontStyle.h>
#include <native/text/Font.h>
#include <native/text/AntiAliasType.h>
#include <native/system/System.h>
#include <native/net/URLVariables.h>
#include <native/net/URLRequestMethod.h>
#include <native/net/URLRequestHeader.h>
#include <native/net/URLRequest.h>
#include <native/net/URLLoaderDataFormat.h>
#include <native/net/URLLoader.h>
#include <native/media/SoundLoaderContext.h>
#include <native/media/SoundChannel.h>
#include <native/media/Sound.h>
#include <native/media/ID3Info.h>
#include <native/geom/Transform.h>
#include <native/geom/ColorTransform.h>
#include <native/filters/BitmapFilter.h>
#include <native/events/SampleDataEvent.h>
#include <native/events/ProgressEvent.h>
#include <native/events/KeyboardEvent.h>
#include <native/events/JoystickEvent.h>
#include <native/events/IOErrorEvent.h>
#include <native/events/HTTPStatusEvent.h>
#include <native/events/FocusEvent.h>
#include <native/events/EventPhase.h>
#include <native/events/Listener.h>
#include <native/events/ErrorEvent.h>
#include <native/events/TextEvent.h>
#include <native/errors/RangeError.h>
#include <native/errors/EOFError.h>
#include <native/errors/ArgumentError.h>
#include <native/errors/Error.h>
#include <native/display/TriangleCulling.h>
#include <native/display/Tilesheet.h>
#include <native/display/StageScaleMode.h>
#include <native/display/StageQuality.h>
#include <native/display/StageDisplayState.h>
#include <native/display/StageAlign.h>
#include <native/display/TouchInfo.h>
#include <native/display/SpreadMethod.h>
#include <native/display/PixelSnapping.h>
#include <native/display/MovieClip.h>
#include <native/display/ManagedStage.h>
#include <native/display/Stage.h>
#include <native/events/TouchEvent.h>
#include <native/events/MouseEvent.h>
#include <native/display/LineScaleMode.h>
#include <native/display/JointStyle.h>
#include <native/display/InterpolationMethod.h>
#include <native/display/IGraphicsData.h>
#include <native/display/GraphicsPathWinding.h>
#include <native/display/Graphics.h>
#include <native/display/GradientType.h>
#include <native/display/CapsStyle.h>
#include <native/display/BlendMode.h>
#include <native/display/OptimizedPerlin.h>
#include <native/display/BitmapData.h>
#include <native/display/Bitmap.h>
#include <native/Lib.h>
#include <haxe/io/Error.h>
#include <haxe/io/Eof.h>
#include <haxe/io/BytesBuffer.h>
#include <haxe/Unserializer.h>
#include <haxe/Timer.h>
#include <haxe/Log.h>
#include <format/display/MovieClip.h>
#include <format/display/FrameLabel.h>
#include <entities/Wall.h>
#include <entities/Hero.h>
#include <cpp/zip/Uncompress.h>
#include <cpp/zip/Flush.h>
#include <cpp/zip/Compress.h>
#include <cpp/vm/Gc.h>
#include <com/haxepunk/utils/Key.h>
#include <com/haxepunk/utils/Joystick.h>
#include <com/haxepunk/utils/JoyButtonState.h>
#include <com/haxepunk/utils/Input.h>
#include <com/haxepunk/utils/Ease.h>
#include <com/haxepunk/utils/Draw.h>
#include <com/haxepunk/tweens/misc/MultiVarTween.h>
#include <com/haxepunk/tweens/TweenEvent.h>
#include <native/events/Event.h>
#include <com/haxepunk/masks/Polygon.h>
#include <com/haxepunk/math/Projection.h>
#include <com/haxepunk/math/Vector.h>
#include <com/haxepunk/masks/Pixelmask.h>
#include <com/haxepunk/masks/Masklist.h>
#include <com/haxepunk/masks/Grid.h>
#include <com/haxepunk/masks/Circle.h>
#include <com/haxepunk/masks/Hitbox.h>
#include <com/haxepunk/graphics/atlas/TileAtlas.h>
#include <com/haxepunk/graphics/atlas/TextureAtlas.h>
#include <com/haxepunk/graphics/atlas/AtlasRegion.h>
#include <com/haxepunk/graphics/atlas/Atlas.h>
#include <com/haxepunk/graphics/atlas/Layer.h>
#include <com/haxepunk/graphics/Tilemap.h>
#include <com/haxepunk/graphics/Text.h>
#include <com/haxepunk/graphics/Image.h>
#include <com/haxepunk/graphics/Graphiclist.h>
#include <com/haxepunk/graphics/Canvas.h>
#include <com/haxepunk/debug/Console.h>
#include <com/haxepunk/Tween.h>
#include <com/haxepunk/TweenType.h>
#include <com/haxepunk/Screen.h>
#include <com/haxepunk/Mask.h>
#include <com/haxepunk/HXP.h>
#include <native/geom/Rectangle.h>
#include <native/geom/Matrix.h>
#include <cpp/rtti/FieldNumericIntegerLookup.h>
#include <native/geom/Point.h>
#include <native/media/SoundTransform.h>
#include <com/haxepunk/Graphic.h>
#include <com/haxepunk/Entity.h>
#include <Xml.h>
#include <XmlType.h>
#include <Type.h>
#include <ValueType.h>
#include <Sys.h>
#include <StringTools.h>
#include <StringBuf.h>
#include <Reflect.h>
#include <Main.h>
#include <com/haxepunk/Engine.h>
#include <native/display/Sprite.h>
#include <native/display/DisplayObjectContainer.h>
#include <native/display/InteractiveObject.h>
#include <native/display/DisplayObject.h>
#include <Std.h>
#include <sys/io/_Process/Stdout.h>
#include <haxe/io/Input.h>
#include <haxe/io/Bytes.h>
#include <sys/io/_Process/Stdin.h>
#include <haxe/io/Output.h>
#include <sys/io/Process.h>
#include <cpp/Lib.h>
#include <native/Loader.h>
#include <native/display/IBitmapDrawable.h>
#include <native/events/EventDispatcher.h>
#include <native/events/IEventDispatcher.h>
#include <List.h>
#include <Lambda.h>
#include <IntIter.h>
#include <IntHash.h>
#include <Hash.h>
#include <GameWorld.h>
#include <com/haxepunk/World.h>
#include <com/haxepunk/Tweener.h>
#include <Date.h>
#include <ApplicationMain.h>

void __boot_all()
{
hx::RegisterResources( hx::GetResources() );
::sys::io::FileSeek_obj::__register();
::sys::io::FileOutput_obj::__register();
::sys::io::FileInput_obj::__register();
::sys::io::File_obj::__register();
::sys::FileSystem_obj::__register();
::sys::_FileSystem::FileKind_obj::__register();
::nme::installer::Assets_obj::__register();
::nme::VectorHelper_obj::__register();
::nme::Lib_obj::__register();
::native::utils::WeakRef_obj::__register();
::native::utils::Endian_obj::__register();
::native::utils::CompressionAlgorithm_obj::__register();
::native::utils::ByteArray_obj::__register();
::native::utils::IDataInput_obj::__register();
::native::utils::IMemoryRange_obj::__register();
::native::ui::Keyboard_obj::__register();
::native::text::TextFormatAlign_obj::__register();
::native::text::TextFormat_obj::__register();
::native::text::TextFieldType_obj::__register();
::native::text::TextFieldAutoSize_obj::__register();
::native::text::TextField_obj::__register();
::native::text::FontType_obj::__register();
::native::text::FontStyle_obj::__register();
::native::text::Font_obj::__register();
::native::text::AntiAliasType_obj::__register();
::native::system::System_obj::__register();
::native::net::URLVariables_obj::__register();
::native::net::URLRequestMethod_obj::__register();
::native::net::URLRequestHeader_obj::__register();
::native::net::URLRequest_obj::__register();
::native::net::URLLoaderDataFormat_obj::__register();
::native::net::URLLoader_obj::__register();
::native::media::SoundLoaderContext_obj::__register();
::native::media::SoundChannel_obj::__register();
::native::media::Sound_obj::__register();
::native::media::ID3Info_obj::__register();
::native::geom::Transform_obj::__register();
::native::geom::ColorTransform_obj::__register();
::native::filters::BitmapFilter_obj::__register();
::native::events::SampleDataEvent_obj::__register();
::native::events::ProgressEvent_obj::__register();
::native::events::KeyboardEvent_obj::__register();
::native::events::JoystickEvent_obj::__register();
::native::events::IOErrorEvent_obj::__register();
::native::events::HTTPStatusEvent_obj::__register();
::native::events::FocusEvent_obj::__register();
::native::events::EventPhase_obj::__register();
::native::events::Listener_obj::__register();
::native::events::ErrorEvent_obj::__register();
::native::events::TextEvent_obj::__register();
::native::errors::RangeError_obj::__register();
::native::errors::EOFError_obj::__register();
::native::errors::ArgumentError_obj::__register();
::native::errors::Error_obj::__register();
::native::display::TriangleCulling_obj::__register();
::native::display::Tilesheet_obj::__register();
::native::display::StageScaleMode_obj::__register();
::native::display::StageQuality_obj::__register();
::native::display::StageDisplayState_obj::__register();
::native::display::StageAlign_obj::__register();
::native::display::TouchInfo_obj::__register();
::native::display::SpreadMethod_obj::__register();
::native::display::PixelSnapping_obj::__register();
::native::display::MovieClip_obj::__register();
::native::display::ManagedStage_obj::__register();
::native::display::Stage_obj::__register();
::native::events::TouchEvent_obj::__register();
::native::events::MouseEvent_obj::__register();
::native::display::LineScaleMode_obj::__register();
::native::display::JointStyle_obj::__register();
::native::display::InterpolationMethod_obj::__register();
::native::display::IGraphicsData_obj::__register();
::native::display::GraphicsPathWinding_obj::__register();
::native::display::Graphics_obj::__register();
::native::display::GradientType_obj::__register();
::native::display::CapsStyle_obj::__register();
::native::display::BlendMode_obj::__register();
::native::display::OptimizedPerlin_obj::__register();
::native::display::BitmapData_obj::__register();
::native::display::Bitmap_obj::__register();
::native::Lib_obj::__register();
::haxe::io::Error_obj::__register();
::haxe::io::Eof_obj::__register();
::haxe::io::BytesBuffer_obj::__register();
::haxe::Unserializer_obj::__register();
::haxe::Timer_obj::__register();
::haxe::Log_obj::__register();
::format::display::MovieClip_obj::__register();
::format::display::FrameLabel_obj::__register();
::entities::Wall_obj::__register();
::entities::Hero_obj::__register();
::cpp::zip::Uncompress_obj::__register();
::cpp::zip::Flush_obj::__register();
::cpp::zip::Compress_obj::__register();
::cpp::vm::Gc_obj::__register();
::com::haxepunk::utils::Key_obj::__register();
::com::haxepunk::utils::Joystick_obj::__register();
::com::haxepunk::utils::JoyButtonState_obj::__register();
::com::haxepunk::utils::Input_obj::__register();
::com::haxepunk::utils::Ease_obj::__register();
::com::haxepunk::utils::Draw_obj::__register();
::com::haxepunk::tweens::misc::MultiVarTween_obj::__register();
::com::haxepunk::tweens::TweenEvent_obj::__register();
::native::events::Event_obj::__register();
::com::haxepunk::masks::Polygon_obj::__register();
::com::haxepunk::math::Projection_obj::__register();
::com::haxepunk::math::Vector_obj::__register();
::com::haxepunk::masks::Pixelmask_obj::__register();
::com::haxepunk::masks::Masklist_obj::__register();
::com::haxepunk::masks::Grid_obj::__register();
::com::haxepunk::masks::Circle_obj::__register();
::com::haxepunk::masks::Hitbox_obj::__register();
::com::haxepunk::graphics::atlas::TileAtlas_obj::__register();
::com::haxepunk::graphics::atlas::TextureAtlas_obj::__register();
::com::haxepunk::graphics::atlas::AtlasRegion_obj::__register();
::com::haxepunk::graphics::atlas::Atlas_obj::__register();
::com::haxepunk::graphics::atlas::Layer_obj::__register();
::com::haxepunk::graphics::Tilemap_obj::__register();
::com::haxepunk::graphics::Text_obj::__register();
::com::haxepunk::graphics::Image_obj::__register();
::com::haxepunk::graphics::Graphiclist_obj::__register();
::com::haxepunk::graphics::Canvas_obj::__register();
::com::haxepunk::debug::Console_obj::__register();
::com::haxepunk::Tween_obj::__register();
::com::haxepunk::TweenType_obj::__register();
::com::haxepunk::Screen_obj::__register();
::com::haxepunk::Mask_obj::__register();
::com::haxepunk::HXP_obj::__register();
::native::geom::Rectangle_obj::__register();
::native::geom::Matrix_obj::__register();
::cpp::rtti::FieldNumericIntegerLookup_obj::__register();
::native::geom::Point_obj::__register();
::native::media::SoundTransform_obj::__register();
::com::haxepunk::Graphic_obj::__register();
::com::haxepunk::Entity_obj::__register();
::Xml_obj::__register();
::XmlType_obj::__register();
::Type_obj::__register();
::ValueType_obj::__register();
::Sys_obj::__register();
::StringTools_obj::__register();
::StringBuf_obj::__register();
::Reflect_obj::__register();
::Main_obj::__register();
::com::haxepunk::Engine_obj::__register();
::native::display::Sprite_obj::__register();
::native::display::DisplayObjectContainer_obj::__register();
::native::display::InteractiveObject_obj::__register();
::native::display::DisplayObject_obj::__register();
::Std_obj::__register();
::sys::io::_Process::Stdout_obj::__register();
::haxe::io::Input_obj::__register();
::haxe::io::Bytes_obj::__register();
::sys::io::_Process::Stdin_obj::__register();
::haxe::io::Output_obj::__register();
::sys::io::Process_obj::__register();
::cpp::Lib_obj::__register();
::native::Loader_obj::__register();
::native::display::IBitmapDrawable_obj::__register();
::native::events::EventDispatcher_obj::__register();
::native::events::IEventDispatcher_obj::__register();
::List_obj::__register();
::Lambda_obj::__register();
::IntIter_obj::__register();
::IntHash_obj::__register();
::Hash_obj::__register();
::GameWorld_obj::__register();
::com::haxepunk::World_obj::__register();
::com::haxepunk::Tweener_obj::__register();
::Date_obj::__register();
::ApplicationMain_obj::__register();
::Xml_obj::__init__();
::native::utils::ByteArray_obj::__init__();
::cpp::Lib_obj::__boot();
::Xml_obj::__boot();
::cpp::rtti::FieldNumericIntegerLookup_obj::__boot();
::cpp::vm::Gc_obj::__boot();
::cpp::zip::Compress_obj::__boot();
::cpp::zip::Flush_obj::__boot();
::cpp::zip::Uncompress_obj::__boot();
::haxe::Log_obj::__boot();
::ApplicationMain_obj::__boot();
::Date_obj::__boot();
::com::haxepunk::Tweener_obj::__boot();
::com::haxepunk::World_obj::__boot();
::GameWorld_obj::__boot();
::Hash_obj::__boot();
::IntHash_obj::__boot();
::IntIter_obj::__boot();
::Lambda_obj::__boot();
::List_obj::__boot();
::native::events::IEventDispatcher_obj::__boot();
::native::events::EventDispatcher_obj::__boot();
::native::display::IBitmapDrawable_obj::__boot();
::native::Loader_obj::__boot();
::sys::io::Process_obj::__boot();
::haxe::io::Output_obj::__boot();
::sys::io::_Process::Stdin_obj::__boot();
::haxe::io::Bytes_obj::__boot();
::haxe::io::Input_obj::__boot();
::sys::io::_Process::Stdout_obj::__boot();
::Std_obj::__boot();
::native::display::DisplayObject_obj::__boot();
::native::display::InteractiveObject_obj::__boot();
::native::display::DisplayObjectContainer_obj::__boot();
::native::display::Sprite_obj::__boot();
::com::haxepunk::Engine_obj::__boot();
::Main_obj::__boot();
::Reflect_obj::__boot();
::StringBuf_obj::__boot();
::StringTools_obj::__boot();
::Sys_obj::__boot();
::ValueType_obj::__boot();
::Type_obj::__boot();
::XmlType_obj::__boot();
::com::haxepunk::Entity_obj::__boot();
::com::haxepunk::Graphic_obj::__boot();
::native::media::SoundTransform_obj::__boot();
::native::geom::Point_obj::__boot();
::native::geom::Matrix_obj::__boot();
::native::geom::Rectangle_obj::__boot();
::com::haxepunk::HXP_obj::__boot();
::com::haxepunk::Mask_obj::__boot();
::com::haxepunk::Screen_obj::__boot();
::com::haxepunk::TweenType_obj::__boot();
::com::haxepunk::Tween_obj::__boot();
::com::haxepunk::debug::Console_obj::__boot();
::com::haxepunk::graphics::Canvas_obj::__boot();
::com::haxepunk::graphics::Graphiclist_obj::__boot();
::com::haxepunk::graphics::Image_obj::__boot();
::com::haxepunk::graphics::Text_obj::__boot();
::com::haxepunk::graphics::Tilemap_obj::__boot();
::com::haxepunk::graphics::atlas::Layer_obj::__boot();
::com::haxepunk::graphics::atlas::Atlas_obj::__boot();
::com::haxepunk::graphics::atlas::AtlasRegion_obj::__boot();
::com::haxepunk::graphics::atlas::TextureAtlas_obj::__boot();
::com::haxepunk::graphics::atlas::TileAtlas_obj::__boot();
::com::haxepunk::masks::Hitbox_obj::__boot();
::com::haxepunk::masks::Circle_obj::__boot();
::com::haxepunk::masks::Grid_obj::__boot();
::com::haxepunk::masks::Masklist_obj::__boot();
::com::haxepunk::masks::Pixelmask_obj::__boot();
::com::haxepunk::math::Vector_obj::__boot();
::com::haxepunk::math::Projection_obj::__boot();
::com::haxepunk::masks::Polygon_obj::__boot();
::native::events::Event_obj::__boot();
::com::haxepunk::tweens::TweenEvent_obj::__boot();
::com::haxepunk::tweens::misc::MultiVarTween_obj::__boot();
::com::haxepunk::utils::Draw_obj::__boot();
::com::haxepunk::utils::Ease_obj::__boot();
::com::haxepunk::utils::Input_obj::__boot();
::com::haxepunk::utils::JoyButtonState_obj::__boot();
::com::haxepunk::utils::Joystick_obj::__boot();
::com::haxepunk::utils::Key_obj::__boot();
::entities::Hero_obj::__boot();
::entities::Wall_obj::__boot();
::format::display::FrameLabel_obj::__boot();
::format::display::MovieClip_obj::__boot();
::haxe::Timer_obj::__boot();
::haxe::Unserializer_obj::__boot();
::haxe::io::BytesBuffer_obj::__boot();
::haxe::io::Eof_obj::__boot();
::haxe::io::Error_obj::__boot();
::native::Lib_obj::__boot();
::native::display::Bitmap_obj::__boot();
::native::display::BitmapData_obj::__boot();
::native::display::OptimizedPerlin_obj::__boot();
::native::display::BlendMode_obj::__boot();
::native::display::CapsStyle_obj::__boot();
::native::display::GradientType_obj::__boot();
::native::display::Graphics_obj::__boot();
::native::display::GraphicsPathWinding_obj::__boot();
::native::display::IGraphicsData_obj::__boot();
::native::display::InterpolationMethod_obj::__boot();
::native::display::JointStyle_obj::__boot();
::native::display::LineScaleMode_obj::__boot();
::native::events::MouseEvent_obj::__boot();
::native::events::TouchEvent_obj::__boot();
::native::display::Stage_obj::__boot();
::native::display::ManagedStage_obj::__boot();
::native::display::MovieClip_obj::__boot();
::native::display::PixelSnapping_obj::__boot();
::native::display::SpreadMethod_obj::__boot();
::native::display::TouchInfo_obj::__boot();
::native::display::StageAlign_obj::__boot();
::native::display::StageDisplayState_obj::__boot();
::native::display::StageQuality_obj::__boot();
::native::display::StageScaleMode_obj::__boot();
::native::display::Tilesheet_obj::__boot();
::native::display::TriangleCulling_obj::__boot();
::native::errors::Error_obj::__boot();
::native::errors::ArgumentError_obj::__boot();
::native::errors::EOFError_obj::__boot();
::native::errors::RangeError_obj::__boot();
::native::events::TextEvent_obj::__boot();
::native::events::ErrorEvent_obj::__boot();
::native::events::Listener_obj::__boot();
::native::events::EventPhase_obj::__boot();
::native::events::FocusEvent_obj::__boot();
::native::events::HTTPStatusEvent_obj::__boot();
::native::events::IOErrorEvent_obj::__boot();
::native::events::JoystickEvent_obj::__boot();
::native::events::KeyboardEvent_obj::__boot();
::native::events::ProgressEvent_obj::__boot();
::native::events::SampleDataEvent_obj::__boot();
::native::filters::BitmapFilter_obj::__boot();
::native::geom::ColorTransform_obj::__boot();
::native::geom::Transform_obj::__boot();
::native::media::ID3Info_obj::__boot();
::native::media::Sound_obj::__boot();
::native::media::SoundChannel_obj::__boot();
::native::media::SoundLoaderContext_obj::__boot();
::native::net::URLLoader_obj::__boot();
::native::net::URLLoaderDataFormat_obj::__boot();
::native::net::URLRequest_obj::__boot();
::native::net::URLRequestHeader_obj::__boot();
::native::net::URLRequestMethod_obj::__boot();
::native::net::URLVariables_obj::__boot();
::native::system::System_obj::__boot();
::native::text::AntiAliasType_obj::__boot();
::native::text::Font_obj::__boot();
::native::text::FontStyle_obj::__boot();
::native::text::FontType_obj::__boot();
::native::text::TextField_obj::__boot();
::native::text::TextFieldAutoSize_obj::__boot();
::native::text::TextFieldType_obj::__boot();
::native::text::TextFormat_obj::__boot();
::native::text::TextFormatAlign_obj::__boot();
::native::ui::Keyboard_obj::__boot();
::native::utils::IMemoryRange_obj::__boot();
::native::utils::IDataInput_obj::__boot();
::native::utils::ByteArray_obj::__boot();
::native::utils::CompressionAlgorithm_obj::__boot();
::native::utils::Endian_obj::__boot();
::native::utils::WeakRef_obj::__boot();
::nme::Lib_obj::__boot();
::nme::VectorHelper_obj::__boot();
::nme::installer::Assets_obj::__boot();
::sys::_FileSystem::FileKind_obj::__boot();
::sys::FileSystem_obj::__boot();
::sys::io::File_obj::__boot();
::sys::io::FileInput_obj::__boot();
::sys::io::FileOutput_obj::__boot();
::sys::io::FileSeek_obj::__boot();
}

