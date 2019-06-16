/*!
 * jQuery Equal Height v0.4.2 (https://github.com/NikkiDelRosso/jquery.equal-height)
 * Copyright 2015-2019 Nikki DelRosso
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('The jQuery equal height extension requires jQuery!');
}

jQuery.fn.equalHeight = function() {

	var $ = jQuery;
	var that = this;

	var setHeights = function() {
		var elems = {};
		var cont = $(that);

		// Reset the elements heights
		cont.each(function() {
			$(this).height('');
		});

		// Create a mapping of elements and the max height for all elements at that top offset
		cont.each(function() {
			var t = $(this).offset().top;
			if (typeof elems[t] == "undefined") elems[t] = {maxHeight: 0, e: []};
			elems[t].e.push($(this));
			elems[t].maxHeight = Math.max($(this).outerHeight(), elems[t].maxHeight);
		});

		// Apply the max height to all elements in each offset class
		for (var t in elems) {
			var mh = elems[t].maxHeight;
			for (var i in elems[t].e) {
				var e = elems[t].e[i];
				var padding = e.outerHeight() - e.height();
				e.height(mh - padding);
			}
		}
	};

	
	var images = $(this).find('img');
	
	setHeights();
	$(window).resize(setHeights);
	if (images.length > 0) {
		images.load(setHeights);
	}
	$(window).bind('load', setHeights);
};
