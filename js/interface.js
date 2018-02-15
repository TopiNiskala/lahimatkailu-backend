$(function() {
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
