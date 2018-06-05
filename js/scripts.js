$(function() {
  $("#stressTest").submit(function(event) {
    var tiger = 0;

    $("input:checkbox[name=signs]:checked").each(function() {
      tiger++;
    });
    alert(tiger);
  });

});
