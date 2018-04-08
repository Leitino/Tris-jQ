$(function() {

  var click=0
  $(".cella").click(function() {
    if (click %2 == 0) {
      $(this).html("X")
    }
    else {
      $(this).html("O")
    }
    click++
  })


})
