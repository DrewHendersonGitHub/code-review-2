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
      if (val === "p") {
        python++;
      }
      if (val === "c") {
        c++;
      }
      if (val === "b") {
        basic++;
      }
      if (val === "j") {
        javascript++;
      }
      if (val === "g") {
        go++;
      }
    }
    
    count($("#q1").val());
    count($("#q2").val());
    count($("#q3").val());
    count($("#q4").val());
    count($("#q5").val());
    count($("#q6").val());
    count($("#q7").val());
    count($("#q8").val());
    count($("#q9").val());
    count($("#q10").val());

    console.log(python);
    console.log(c);
    console.log(basic);
    console.log(javascript);
    console.log(go);
    
    if (python > 0) {
      max = python;
      winner = 1;
    }
    max = python;
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
    if (winner === 1) {
      $(".answer").text(" Python");
    }
    if (winner === 2) {
      $(".answer").text(" C");
    }
    if (winner === 3) {
      $(".answer").text(" BASIC");
    }
    if (winner === 4) {
      $(".answer").text(" JavaScript");
    }
    if (winner === 5) {
      $(".answer").text(" Go");
    }
    
    $("#results").fadeIn();
    $("#mainForm").toggle();
  });
});