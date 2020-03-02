console.log('Hello World');

function changeText(id) {
  if (id.innerHTML = '  ') {
    var value = change(string);
    id.innerHTML = value;
  } else {
    console.log('invalid move');
  }
}

var string = 'O';
var change = function(value) {
if (string === 'X') {
  string ='O';
  return string;
} else {
  string = 'X';
  return string;
}
return string;
}