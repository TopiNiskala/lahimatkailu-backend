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
var table = $(".table").DataTable({
    dom: "<\"row\"<\"col-sm-4\"l><\"col-sm-4\"<\"typeFilter\">><\"col-sm-4\"f>><\"row\"<\"col-sm-12\"tr>><\"row\"<\"col-sm-5\"i><\"col-sm-7\"p>>",
    ajax: {
        url: "kohteet.json",
        dataSrc: "kohteet"
    },
    columns: [
      { 
        searchable: false,
        data: null,
        className: "text-center",
        render: function(data, type, full, meta) {
            return (meta.row+1)
        }
      },
      {
        data: null,
        render: function(data, type, full, meta) {
            return "<a href=\"view/" + full._id + "\">" + full.name + "</a>"
        }
      }, 
      { data: "address.street" },
      { data: "address.city" },
      { data: null,
        render: function(data, type, full, meta) {
            var type = full.type;
            if(type === "Nähtävyys") {
                type = "Sight";
            } else if(type === "Palvelu") {
                type = "Service"
            } else {
                type = "Food"
            }
            return type
        }
      },      
      { sortable: false,
        data: null,
        className: "text-center",
        render: function(data, type, full, meta) {
            return "<a role=\"button\" class=\"button btn-sm btn-primary glyphicon glyphicon-edit\" href=\"modify/" + full._id + "\"></a>"
        }
      },
      { sortable: false,
        data: null,
        className: "text-center",
        render: function(data, type, full, meta) {
            return "<a id=\""+ full._id + "\" name=\""+ full.name + "\" role=\"button\" class=\"delete button btn-sm btn-danger glyphicon glyphicon-trash\" href=\"#\"></a>"
        }
      }
    ]
})

$(".btn").css({"border" : "1px solid #265d8a"});

var $typeFilter = $(".typeFilterContent").html();
$( ".typeFilterContent" ).hide()
$(".typeFilter").html($typeFilter);

function filterType() {
    if ($(".typeFilter .btn-primary").length < 1) {
        resetFilters();
    } else {
        $(".typeFilter .all").removeClass("btn-primary");
        $(".resetFilters").prop("checked", false);
    }
    
    var types = $("input:checkbox[name=\"type\"]:checked").map(function() {
        return "^" + this.value + "\$";
    }).get().join("|");

    table.columns(4).search(types, true).draw();
    
}

function resetFilters() {
    $(".resetFilters").prop("checked", true); 
    $(".filter").prop("checked", false); 
    $(".typeFilter a").removeClass("btn-primary");
    $(".typeFilter .all").addClass("btn-primary");
    table.search("").columns().search("").draw();
}

$(".typeFilter").on("click", "a", function() {
    var parent = $(this).parent();
    var that = this;
    var checkbox = $("input", parent).attr("id");
    
    if ($("#" + checkbox + ":checked").length < 1) {
        $(that).addClass("btn-primary")
    } else {
        $(that).removeClass("btn-primary")
    }
});

resetFilters();
