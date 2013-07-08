/*Initialized the carousel and to add active class for the slide item*/
jQuery(document).ready(function() {
	jQuery('.carousel-inner .item:first-child').addClass('active');

	// Js for slideshow
	jQuery('.carousel').each(function() {
		var properties = $.parseJSON($(this).find('span.properties').attr('data-type'));
		jQuery(this).carousel({
			interval: parseInt(properties['intervalTime'])
		});
		if (parseInt(properties['galleryWidth'])) {
			var width = parseInt(properties['galleryWidth']);
			var parentWidth = jQuery('.slideshow-wrapper').parent().width();
			var percent = Math.round(100 * width / parentWidth);
			jQuery('.slideshow-wrapper').width(percent + '%');
		}
		if (!properties['controls']) {
			jQuery(this).children('a.carousel-control').addClass('hide');
		}
		if (properties['lightBox']) {
			//This function is for light box
			jQuery('.carousel-inner a').lightBox({
				imageLoading: '/_Resources/Static/Packages/Lelesys.Plugin.SlideShow/Images/lightbox-ico-loading.gif',
				imageBtnPrev: '/_Resources/Static/Packages/Lelesys.Plugin.SlideShow/Images/lightbox-btn-prev.gif',
				imageBtnNext: '/_Resources/Static/Packages/Lelesys.Plugin.SlideShow/Images/lightbox-btn-next.gif',
				imageBtnClose: '/_Resources/Static/Packages/Lelesys.Plugin.SlideShow/Images/lightbox-btn-close.gif',
				imageBlank: '/_Resources/Static/Packages/Lelesys.Plugin.SlideShow/Images/lightbox-blank.gif'
			});
		}
	});
// end of js for slideshow

	//This function is for Tab structure
	jQuery('#myTab a').click(function(e) {
		e.preventDefault();
		jQuery(this).tab('show');
	});

});


