$(document).ready(function(){

  $('img').click(function(){
    console.log(this);
    var curImg = $(this).attr('src');
    var nextImg = $(this).attr('data-alt-src');
    console.log(curImg);
    console.log(nextImg);
    $(this).attr('src', nextImg);
    $(this).attr('data-alt-scr', curImg);


  });

  $('#genButts').click(function(){
    $('body').append('<button id="newButts">new button</button>')
  });

  $(document).on('click','#newButts',function(){
    alert("you click the but");
  });



});
