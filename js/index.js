var  backgroundOrigin = "#221d23";
var  backgroundChange = "#D0E37F";

$(document).ready(function() {

  
  gridSize();

  $("#clear").click(function() {
    $(".div-node").css("background-color", backgroundOrigin);
  });

  $("#restart").click(function() {
    gridSize();
  })

  $("#gay-mode").click(function() {
      $(".div-node").css("background-color", backgroundOrigin);
      gayMode();
    })
    
    /*  
      $("#blacken").click(function(){
        $(".div-node").css("background-color", "blue");
        blacken();
      })
    */
    
});


//Helper function to prompt user for a grid size
function gridSize() {

  var num = prompt("How big?");

  if (num <= 32) {
    createGrid(num);
  }
  else {
    alert("Too big!");
    gridSize();
  }
}


//Helper fuction to create html grid from user input
function createGrid(num) {
  var gridNum = num
  var divNodeSize = 320 / num;
  
  //Removes any .div-wrapper from the page
  $(".div-wrapper").each(function() {
    $(this).remove();
  });
  
  //Adds a .div-wrapper then loops through adding num .div-wrapper(s) every num .div-node(s)
  $("#div-grid").append("<div class = 'div-wrapper' </div>");
  for (var i = 0; i < gridNum; i++) {
    for (var j = 0; j < gridNum; j++) {
      $(".div-wrapper").last().append("<div class = 'div-node' </div>");
    }
    $("#div-grid").append("<div class = 'div-wrapper' </div>");
  }
  
  //CSS styling ensures the #div-grid size remains constant and the .div-nodes are square
  $(".div-node").css("height", divNodeSize);
  $(".div-node").css("width", divNodeSize);
  $(".div-node").css("background-color", backgroundOrigin);
  
  colorStay();
}

//Helper function of normal game play changing div-node background color on hover
function colorStay() {
  $(".div-node").hover(function() {
    $(this).css("background-color", backgroundChange);
  });
}

////Helper function of game play changing div-node background color to random on hover
function gayMode() {
  $(".div-node").hover(function() {
    $(this).css("background-color", getRandomColor());
  });
}

//Following helper function from Anatoliy at Stack Overflow
//http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
//Helper function returns a random hexadecimal color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
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