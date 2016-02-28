$(document).ready(function(){

  $(".fa-comment").click(function(){
    $(".comments").show();
    $(".fa-comment").hide();
    $(".fa-comment-o").show();
  });
  $(".fa-comment-o").click(function(){
    $(".comments").hide();
    $(".fa-comment-o").hide();
    $(".fa-comment").show();
  });


  $(".fa-commenting").click(function(){
    $(".field-hidden").show();
    $(".fa-commenting").hide();
    $(".fa-commenting-o").show();
  });
  $(".fa-commenting-o").click(function(){
    $(".field-hidden").hide();
    $(".fa-commenting-o").hide();
    $(".fa-commenting").show();
  });

});
