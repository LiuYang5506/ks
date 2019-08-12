$(function() {
    $.ajax({
        url: "footer.html",
        type: "get",
        success: function(result) {
            $(result).replaceAll("#footer");
        }
    });
    $.ajax({
        url: "header.html",
        type: "get",
        success: function(result) {
            $(result).replaceAll("#header");
        }
    });
})