$(function() {
    var parent, item;
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
        if ($(this).closest("#some").length) {
           parent = "#some";
           item = ".some";
        } else {
           parent = "#pictures";
           item = ".picture";
        }
        currentInput = $(this).parents(item + ':first'),
        newInput = $(currentInput.clone()).prependTo(parent + ":first");

        $(parent).find('input:first').val('');
        currentInput.find('.btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e) {
        if ($(this).closest("#some").length) {
           parent = "#some";
           item = ".some";
        } else {
           parent = "#pictures";
           item = ".picture";
        }
        $(this).parents(item + ':first').remove();

        e.preventDefault();
        return false;
	});
});
