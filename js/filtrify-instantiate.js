$(function() {
    
    var container = $("#container");
    
    container.isotope({
        itemSelector : 'ul#container > li',
        layoutMode : 'fitRows'
    });
    
    $.filtrify("containerID", "placeHolder", {
        hide     : false,
        callback : function ( query, match, mismatch ) {
            container.isotope({ filter : $(match) });
        }
    });

});