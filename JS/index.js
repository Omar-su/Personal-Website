$(document).ready(function(){

// Variables
  $highWay = $('.carHighWay');
  $car = $('.car');
  $img = $('.car img');
  let flag = true;
  var x = 0;
  var y = 0;
  var z = 0;
  var x_highWay = 0;
  var y_highWay = 0;



const cars =['../assets/assets/Img_05.png','../assets/assets/Img_06.png' ] 

// Keypressed event
$(document).on('keypress',function(e){



  if(e.which == 100){
    x = x + 10
    x_highWay = x_highWay -10;
    z = anim(x,z, x_highWay)

  }
  if(e.which == 97){
    x = x - 10
    z = anim(x,z, x_highWay)

  }


})

function anim(x, z, x_highWay){
if(z == 0){

  console.log(z);
  $($car).css({"transform":"translate("+x + "px," + -1 + "px)" });
  $($highWay).css({"transform":"translateX("+ x_highWay + "px)" });
  z = 1;
}else if(z==1){
  console.log(z);

  $($car).css({"transform":"translate("+x + "px," + 2 + "px)" });
  $($highWay).css({"transform":"translateX("+ x_highWay + "px)" });
  z = 2;
}else if(z==2){
  console.log(z);

  $($car).css({"transform":"translate("+x + "px," + -1 + "px)" });
  $($highWay).css({"transform":"translateX("+ x_highWay + "px)" });
  z = 0;
}
return z;

}

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






