$(document).on('click', '.delete', function() {
    $('.destinationName').text(' ' + $(this).attr('name') + '?');
    $('.deleteConfirm').attr('id', $(this).attr('id'));
    $('#deleteModal').modal('show');
});

$(document).on('click', '.deleteConfirm', function() {
    var id = $(this).attr('id');
    var that = this;
    $.ajax({
        url: '/v1/delete/' + id,
        type: 'delete',
        success: function(result) {
                    console.log(result)
                    if ($(that).hasClass('redirect')) {
                        window.location.href = '/v1/list'
                    }
                    $('#deleteModal').modal('hide');
                    table.ajax.reload();
                }
        });
});
