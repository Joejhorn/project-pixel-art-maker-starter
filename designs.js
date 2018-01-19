// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var color = {
  currentColor: "#245232"
}

$('#inputSumbit').click((event) => {
  let width = 1,
      height =1;
  width = parseInt($('#input_width').val());
  height = parseInt($('#input_height').val());
  getTableNumbers(width, height);
});
// need to understand where to put these types of commands ( on window?)
function makeClickable(){
$('#myTable tr').on("click",(e) => {
  var cell = $(e.target).get(0);
  $(cell).css({background: color.currentColor});
});
};

function makeGrid(rows, columns) {
  var grid = '<table id = myTable>';
  for (row =1; row <= rows; row++) {
    grid += '<tr>';
    for (col = 1; col <= columns; col++){
      grid += '<td></td>';
    }
    grid += '</tr>';
  }
  grid += '</table>';
  console.log(grid);
  return grid;
}
const getTableNumbers = (rows, columns) => {
  //need to clear out old form
  //need to research type of button to undersand sumnit vs other ones
  $(".gridTable").empty();
  $( ".gridTable" ).append(makeGrid(rows, columns));
 makeClickable();
};

$(document).ready(function(){

$('#colorPicker').on('change', function(){
    color.currentColor = $(this).val();
    console.log(color.currentColor);
});

});
