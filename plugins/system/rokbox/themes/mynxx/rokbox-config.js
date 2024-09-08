var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* All the presets options are the custom ones */

var rokbox;
window.addEvent('domready', function() {
	rokbox = new RokBox({
		'theme': 'mynxx', // this string must match the theme folder name (string, no space, lowercase)
		'transition': Fx.Transitions.Cubic.easeOut, // Transition to use when opening RokBox
		'duration': 500, // Duration of opening RokBox Effect (integer, milliseconds)
		'chase': 80, // Chase to use for the animation. works only for growl, see next line. (integer)
		'frame-border': 34, // Width of each border if any (integer, pixels)
		'content-padding': 0, // Padding of internal content wrapper (integer, pixels)
		'arrows-height': 16, // Height of arrows div (integer, pixels)
		'effect': 'growl', // Type of effect to use. Presets are: 'quicksilver', 'growl', 'explode'
		'captions': 1, // Whether to enable or disable captions (boolean, 1 or 0)
		'captionsDelay': 100, // How long captions effect should last, when captions are enabled (integer, milliseconds)
		'scrolling': 0, // Makes RokBox follow when scrolling the page (boolean, 1 or 0)
		'keyEvents': 1, // Enable keyevents. Esc, Left, Right to close and change previous or next (boolean, 1 or 0)
		'overlay': {
			'background': '#fff', // Overlay background color (string, hex color format with starting hash #)
			'opacity': 0.7, // Opacity of the overlay (float, from 0 to 1, 0.1 makes it invisible but clickable)
			'duration': 300, // Duration of overlay effect (integer, milliseconds)
			'transition': Fx.Transitions.Quad.easeInOut // Transition to use for opacity effect
		},
		'defaultSize': {
			'width': 640, // Default RokBox window width (integer)
			'height': 460 // Default RokBox window height (integer)
		},
		'autoplay': 'true', // Enable or disable autoplay for QuickTimes and WM videos (string, 'true' or 'false')
		'controller': 'true', // Enable or disable controllers for QuickTimes and WM videos (string, 'true' or 'false')
		'bgcolor': '#ffffff', // Set Background colors for all videos and flash services that support it (string, hex color format with starting hash #)
		'youtubeAutoplay': 1, // Enable or disable autoplay for YouTube (boolean, 1 or 0)
		'vimeoColor': '00adef', // Vimeo Color Scheme (string, hex color format WITHOUT starting hash #)
		'vimeoPortrait': 0, // Enable or disable Vimeo Portrait Button (boolean, 1 or 0)
		'vimeoTitle': 0, // Enable or disable Vimeo Title caption (boolean, 1 or 0)
		'vimeoFullScreen': 1, // Enable or disable Vimeo FullScreen button (boolean, 1 or 0)
		'vimeoByline': 0 // Enable or disable Vimeo's Author line (boolean, 1 or 0)
	});
});

}
/*
     FILE ARCHIVED ON 16:45:59 Feb 09, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:30:45 Sep 07, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.497
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.008
  cdx.remote: 5.717
  LoadShardBlock: 98.521 (3)
  PetaboxLoader3.datanode: 55.688 (4)
  PetaboxLoader3.resolve: 104.81 (2)
  load_resource: 79.077
*/