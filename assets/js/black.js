/* SHARE BUTTON CONFIG */
config = {
	ui: {
		flyout: 'bottom center',
		button_font: 'false'
	},
	networks: {
		google_plus: {},
		twitter: {},
		facebook: {},
		pinterest: { enabled: false },
		email: {}
	}
};

new Share("#shareButton", config);

/* ALTON SCROLL JACKING CONFIG */

$(document).alton({
    firstClass : 'banner-container', // Set the first container class
    bodyContainer: 'posts-list', // Set the body container
    scrollMode: 'headerScroll', // Set the scroll mode
});

/* SMOOTH ANCHOR SCROLLING */
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});