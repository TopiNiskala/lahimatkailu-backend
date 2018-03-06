    // JSON tulostaminen lista elementtiin
$.getJSON( "kohteet.json", function( data ) {
    var items = [];
    $.each(data.kohteet, function( key, d ) {
        items.push( "<li>" + "Name: " + d.name + "<br>" +
                    "City: " + d.address.city + ", " + d.address.street + " " +
                    "<a href=\"modify/" + d._id + "\">Modify</a>" + "   " + "<a href=\"delete/" + d._id + "\">DELETE</a>" +
                    "</li>" );
    });
$( "<ul/>", {
html: items.join( "" )
}).appendTo( "body" );
});