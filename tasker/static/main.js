$(document).on('ready', function () {
        $("add_stat_form").submit(function() {
        var myformdata = $(this).serializeArray()
        var id = $(this).data("task-id") }
        console.log(myformdata)
        $.ajax({
            type: "POST",
            url: "/api/v1/activities/" + id + "/stats",
            data: myformdata,
            success: function (data) {
              $(".stat_rows").children("<tr class='stat_row'><td <strong>"+
                                     "data['date']:</strong></td>"+
                                     "<td>  data['value']</td> </tr>");
                                     }, //success
            dataType: "json"
              }); //ajax
           });//add_stat_click
}); //document
