$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    
    let python = 0;
    let c = 0;
    let basic = 0;
    let javascript = 0;
    let go = 0;
    let max = 0;
    let winner = 0;

    function count (val) {
      if (val !== '0') {
        if (val === "p") {
          python++;
        }
        else if (val === "c") {
          c++;
        }
        else if (val === "b") {
          basic++;
        }
        else if (val === "j") {
          javascript++;
        }
        else {
          go++;
        }
      }
    }
    
    count($("#q1").val());
    count($("#q2").val());
    count($("#q3").val());
    count($("#q4").val());
    count($("#q5").val());
    
    if (python > 0) {
      max = python;
      winner = 1;
    }
    if (c > max) {
      max = c;
      winner = 2;
    }
    if (basic > max) {
      max = basic;
      winner = 3;
    }
    if (javascript > max) {
      max = javascript;
      winner = 4;
    }
    if (go > max) {
      max = go;
      winner = 5;
    }
    
    if (winner === 0) {
      $(".answer").text("... none of them, you gotta at least answer one question");
    }
    else if (winner === 1) {
      $(".answer").text(" Python");
    }
    else if (winner === 2) {
      $(".answer").text(" C");
    }
    else if (winner === 3) {
      $(".answer").text(" BASIC");
    }
    else if (winner === 4) {
      $(".answer").text(" JavaScript");
    }
    else {
      $(".answer").text(" Go");
    }
    
    $("#results").fadeIn();
    $("#mainForm").toggle();
  });
});