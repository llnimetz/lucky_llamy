$(document).ready(function () {
  $('form').on('submit', function(e){
    e.preventDefault();

    $.ajax({
      type: this.method,
      url: this.action,
    }).done(function(response){
      $('img').attr("src", response+".png");
    }).fail(function(){
      console.log("FAIL");
    });
  });



});
