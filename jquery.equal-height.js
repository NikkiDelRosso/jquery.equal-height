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
		for (t in elems) {
			var mh = elems[t].maxHeight;
			for (i in elems[t].e) {
				var e = elems[t].e[i];
				var padding = e.outerHeight() - e.height();
				e.height(mh - padding);
			}
		}
	}

	setHeights();
	setTimeout(setHeights, 100); // Set heights after page elements have rendered, is there a more elegant way to do this?
	$(window).resize(setHeights);
}
