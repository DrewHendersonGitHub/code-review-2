$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    
    let l1 = 0;
    let l2 = 0;
    let l3 = 0;
    let l4 = 0;
    let l5 = 0;
    let max = 0;
    let winner = 1;

    function count (val) {
      val = parseInt(val);
      if (val === 1) {
        l1++;
      }
      if (val === 2) {
        l2++;
      }
      if (val === 3) {
        l3++;
      }
      if (val === 4) {
        l4++;
      }
      if (val === 5) {
        l5++;
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

    console.log(l1);
    console.log(l2);
    console.log(l3);
    console.log(l4);
    console.log(l5);
    
    max = l1;
    if (l2 > max) {
      max = l2;
      winner = 2;
    }
    if (l3 > max) {
      max = l3;
      winner = 3;
    }
    if (l4 > max) {
      max = l4;
      winner = 4;
    }
    if (l5 > max) {
      max = l5;
      winner = 5;
    }
    
    $(".answer").text(winner);    
    $("#results").show();
  });
});