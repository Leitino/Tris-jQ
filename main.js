$(function() {

  var click=0
  $(".cella").on('click', function() {
  if (!$(this).hasClass("cliccato")) {
    if (click %2 == 0) {
      $(this).html("X").show(2000).addClass("cliccato").addClass("X")
    }
    else {
      $(this).html("O").addClass("cliccato").addClass("O")
    }
    click++
   }
  })
  var X = $
})
