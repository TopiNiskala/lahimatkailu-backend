
$(".delete").click(function() {
    var id = $(this).attr("id");
$.ajax({
    url: '/v1/delete/' + id,
    type: 'delete',
    success: function(result) {
        console.log(result)
        
    }
    
    } )
    
})