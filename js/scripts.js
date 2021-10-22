$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    $(".answer").text($("#q1").val());
    
    $("#results").show();
  });
});