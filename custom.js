jQuery(document).ready( function(){
			
	jQuery( '#bbppress-reply-showhide-btn' ).on( 'click', function(e) {
		e.preventDefault();
		jQuery( '.bbp-reply-form' ).slideToggle( 'slow' );
	});
});