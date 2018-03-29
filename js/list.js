// old function for fetching info from json
function fetchInfo() {
    $.getJSON( "kohteet.json", function( data ) {
        var items = [];
        $.each(data.kohteet, function( key, d ) {
            items.push( "<tr><th scope=\"row\">" + (key+1) + "</th><td>" + d.name + "</td>" +
                        "<td>" + d.address.street + "</td>" +
                        "<td>" + d.address.city + "</td>" +
                        "<td><a href=\"modify/" + d._id + "\">Modify</a></td>" +
                        "<td><a href=\"delete/" + d._id + "\">DELETE</a></td></tr>" );
        });
        $("tbody").append(items.join(""));
    });
}

// make datatable with json
var table = $('.table').DataTable({
    ajax: {
        url: 'kohteet.json',
        dataSrc: 'kohteet'
    },
    columns: [
      { 
        searchable: false,
        data: null,
        className: "text-center",
        "render": function(data, type, full, meta) {
            return (meta.row+1)
        }
      },
      { data: null,
        "render": function(data, type, full, meta) {
            return "<a href=\"view/" + full._id + "\">" + full.name + "</a>"
        }
      }, 
      { data: "address.street" },
      { data: "address.city" },
      { data: "type" },
      { sortable: false,
        data: null,
        className: "text-center",
        "render": function(data, type, full, meta) {
            return "<a role=\"button\" class=\"button btn-sm btn-primary glyphicon glyphicon-edit\" href=\"modify/" + full._id + "\"></a>"
        }
      },
      { sortable: false,
        data: null,
        className: "text-center",
        "render": function(data, type, full, meta) {
            return "<a id=\""+ full._id + "\" name=\""+ full.name + "\" role=\"button\" class=\"delete button btn-sm btn-danger glyphicon glyphicon-trash\" href=\"#\"></a>"
        }
      }
    ]
})
