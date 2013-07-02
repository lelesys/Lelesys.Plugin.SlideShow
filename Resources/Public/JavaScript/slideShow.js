/*Initialized the carousel and to add active class for the slide item*/
jQuery(document).ready(function() {
	jQuery('.carousel-inner .item:first-child').addClass('active');
	jQuery('.carousel').carousel({
		interval: 2000
	})
	jQuery('#myTab a').click(function(e) {
		e.preventDefault();
		jQuery(this).tab('show');
	})
});


