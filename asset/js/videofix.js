$(function() {
	
	$('iframe').parents('.media-render').addClass('iframe-fix');
	
    var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed"),
    $fluidEl = $(".exhibitioncontent");
    
		console.log("$allVideos Size: " + $allVideos.length);
		
	$allVideos.each(function() {
		//console.log("In videofix allVideo function");
	  $(this)
	    // jQuery .data does not work on object/embed elements
	    //.attr('data-aspectRatio', this.height / this.width)
	    .attr('data-aspectRatio', 0.5625)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {
		//console.log("In videofix resize function");
	  
	  $allVideos.each(function() {
			console.log("In videofix:resize:allVideo function");
	    var $el = $(this);
	    var newWidth = $el.parents('.exhibitioncontent').width();
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	}).resize();

});