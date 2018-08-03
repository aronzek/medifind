jQuery(document).ready( function(){
			
    jQuery( '#medifind_form_submit' ).on( 'click', function(e) {
        e.preventDefault();
        
        var medicament = jQuery( '#search_medicaments' ).val(),
        place = jQuery( '#search_location' ).val(),
        form = jQuery( '#medifind_form' ),
        position = form.scrollTop(),
        info_div = jQuery( '#medifind_search_info' );
        
        jQuery( 'body' ).animate({scrollTop:position}, '500');
        
        info_div.removeClass( 'waiting loaded' ).addClass( 'loading' );
        jQuery( '#medifind_search_results_table' ).html( '' );
        
        jQuery.ajax({
            type: 'POST',
            url: '../medifind_ajax/get-medicaments',
            data: { 'search_medicaments': medicament, 'search_location': place },
            //dataType: 'json',
            success: function(response) {
                info_div.removeClass( 'loading' ).addClass( 'loaded' );
                jQuery( '#medifind_search_results_table' ).html( response );
                
            }
        });
    });
});