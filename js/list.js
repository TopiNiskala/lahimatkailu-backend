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

var $typeFilter = $(".typeFilterContent").html();
$(".typeFilterContent").hide();

var locale = $("#locale").attr("name");
if(locale === "fi") {
    languageUrl = "//cdn.datatables.net/plug-ins/1.10.13/i18n/Finnish.json";
} else if(locale === "sv") {
    languageUrl = "//cdn.datatables.net/plug-ins/1.10.13/i18n/Swedish.json";
} else if(locale === "ru") {
    languageUrl = "//cdn.datatables.net/plug-ins/1.10.13/i18n/Russian.json";
} else {
    languageUrl = "//cdn.datatables.net/plug-ins/1.10.13/i18n/English.json";
}

var sight = $("#locale .sight").text();
var food = $("#locale .food").text();
var service = $("#locale .service").text();



// make datatable with json
var table = $(".table").DataTable({
    preDrawCallback: function( settings ) { 
        var $typeFilter = $(".typeFilterContent").html();
        $(".typeFilterContent").hide();
        $(".typeFilter").html($typeFilter); 
    },
    dom: "<\"row\"<\"col-sm-3\"l><\"col-sm-6\"<\"typeFilter\">><\"col-sm-3\"f>><\"row\"<\"col-sm-12\"tr>><\"row\"<\"col-sm-5\"i><\"col-sm-7\"p>>",
    language: {
        url: languageUrl
    },
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
                type = sight;
            } else if(type === "Palvelu") {
                type = service;
            } else {
                type = food;
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

$(".typeFilterContent .btn").css({"border" : "1px solid #265d8a"});

function filterType(item) {
    
    var parent = $(item).parent();
    var that = $("a", parent);
    var checkbox = $(item).attr("id");
    
    if ($("#" + checkbox + ":checked").length > 0) {
        $(that).addClass("btn-primary");
    } else {
        $(that).removeClass("btn-primary");
    }
    
    if ($(".typeFilter .btn-primary").length === 1 && $(".btn-primary", parent).length === 0) {
        resetFilters();
    } else {
        $(".all").removeClass("btn-primary");
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
    $(".type").removeClass("btn-primary");
    $(".all").addClass("btn-primary");
    table.search("").columns().search("").draw();
}
