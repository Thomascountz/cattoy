$(document).ready(function(){
  gridSize();
  
  $("#clear").click(function(){
    $(".div-node").css("background-color", "blue");
  });
  
  $("#restart").click(function(){
    gridSize();
  })
  
  $("#gay-mode").click(function(){
    $(".div-node").css("background-color", "blue");
    gayMode();
  })
/*  
  $("#blacken").click(function(){
    $(".div-node").css("background-color", "blue");
    blacken();
  })
*/
});


function gridSize(){   
var num = prompt("How big?");
  if(num <= 32){ 
    createGrid(num);
} else {
    alert("Too big!");
    gridSize();
   }
}

function createGrid(num){
  var gridNum = num
  var divNodeSize = 960/num;
  $(".div-wrapper").each(function(){
    $(this).remove();
  });
  $("#div-grid").append("<div class = 'div-wrapper' </div>");
  for(var i = 0; i < gridNum; i++){    
    for(var j = 0; j < gridNum; j++){
      $(".div-wrapper").last().append("<div class = 'div-node' </div>");
    }
    $("#div-grid").append("<div class = 'div-wrapper' </div>"); 
  }
  $(".div-node").css("height", divNodeSize);
  $(".div-node").css("width", divNodeSize);
  colorStay();
}

function colorStay(){
  $(".div-node").hover(function(){
    $(this).css("background-color", "red");
   });
}

function gayMode(){
  $(".div-node").hover(function(){
    $(this).css("background-color", getRandomColor());
   });
}
//following function from Anatoliy at Stack Overflow
//http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}

/*
function blacken(){
  $(".div-node").hover(function(){
    $(this).css("background-color", darkenColor());
   });
}

function darkenColor(){
  //a function to add black to the back-ground color of the div-node by 10%
}
*/