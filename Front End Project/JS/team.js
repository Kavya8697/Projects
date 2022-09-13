$(document).ready(function(){
$.getJSON("team.json", function(data){
    $.each(data, function() {			
        $.each(this, function(key, value) {
            $("#team").append(					
            "<tr>" +
                "<td>" + value.NAME + "<br>" + "</td>" + 
                "<td>" +  value.TITLE + "<br>" + "</td>" +
                "<td>" +  value.DEPARTMENT + "<br>" + "</td>" + 
                "<td>" +  value.BIO + "<br><br>" + "</td>" + "</tr>"
            );
        });
    }); 
});
});
    