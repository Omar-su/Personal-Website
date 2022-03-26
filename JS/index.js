$(document).ready(function(){

// Variables
  $highWay = $('.carHighWay');
  $car = $('.car');
  $img = $('.car img');
  let flag = true;


 const cars =['../assets/assets/Img_05.png','../assets/assets/Img_06.png' ] 

  // Keypressed event
  $(document).on('keypress',function(e){

    if(e.which == 13){
      $($highWay).toggleClass('moveRight');
      $($car).toggleClass('susp');

    }
  })

  $(document).on('keypress',function(e){

    if(e.which == 119){
      if(flag){
        flag = false;
        $img.attr('src', cars[0]);
      }else{
        flag = true;
        $img.attr('src', cars[1]);
      }

    }
  })

  



});






