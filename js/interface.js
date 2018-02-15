$(function() {
    
    var type = $("#typeName").text();
    if(type) {
        $("#type").val(type).change();
    } else {
        $("#type").val("Tyyppi").change();
    }
    
    var city = $("#cityName").text();
    if(city) {
        $("#city").val(city).change();
    } else {
        $("#city").val("Paikkakunta").change();
    }
    
    $(document).on('click', '.btn-add', function(e) {
        e.preventDefault();
        
        currentInput = $(this).parents('.picture:first'),
        newInput = $(currentInput.clone()).prependTo("#pictures:first");

        $('#pictures').find('input:first').val('');
        currentInput.find('.btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e) {
        $(this).parents('.picture:first').remove();

        e.preventDefault();
        return false;
	});
});
