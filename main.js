$(function() {

  var click=0
  $(".cella").click(function() {
  if (!$(this).hasClass("cliccato")) {
    if (click %2 == 0) {
      $(this).html("X").addClass("cliccato")
    }
    else {
      $(this).html("O").addClass("cliccato")
    }
    click++
  }
  })

})
