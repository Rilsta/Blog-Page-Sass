$(document).ready(function(){

  $(".fa-comment").click(function(){
    $(".comments").slideDown();
    $(".fa-comment").hide();
    $(".fa-comment-o").show();
  });
  $(".fa-comment-o").click(function(){
    $(".comments").slideUp();
    $(".fa-comment-o").hide();
    $(".fa-comment").show();
  });


  $(".fa-commenting").click(function(){
    $(".field-hidden").slideDown();
    $(".fa-commenting").hide();
    $(".fa-commenting-o").show();
  });
  $(".fa-commenting-o").click(function(){
    $(".field-hidden").slideUp();
    $(".fa-commenting-o").hide();
    $(".fa-commenting").show();
  });

});
