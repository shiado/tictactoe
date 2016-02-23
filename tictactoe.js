var counter = 0;

function changeColor(event) {
  var square = event.target;
  
  if (square.classList.contains('clicked')) {
    return;
  }
  
  if (counter%2===0) {
    square.classList.add('clicked');
    square.classList.add('p1-color');
    square.classList.remove('p2-color');
    square.textContent = 'x';
  } else {
    square.classList.add('clicked');
    square.classList.add('p2-color');
    square.classList.remove('p1-color');
    square.textContent = 'o';
  }
  
  if (winningCombination()) {
    console.log('The winner is: ' + winner);
    alert('The winner is: ' + winner);
  }
  
  counter += 1;
}  

var squares =  document.getElementsByClassName('square');
if (squares == null) {
  console.log('It is null');
}
for (var i =0; i<squares.length;i++){
  squares[i].addEventListener('click', changeColor);
} 

// // document.getElementById("resetButton").addEventListener("click",resetAll);function winningCombination () {
  
function winningCombination () {
  var arr =[[0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [2, 4, 6],
           [0, 4, 8],
          ];
  console.clear();
  for (var i = 0; i < arr.length; i++) {
    console.log(squares[ arr[i][0] ].textContent);
    if ((squares[ arr[i][0] ].textContent !== '') === squares[ arr[i][1] ].textContent  && 
        (squares[ arr[i][1] ].textContent !=='') === squares[ arr[i][2] ].textContent ) {
      console.log('win');
      winner = squares[ arr[i][0] ].textContent;
      return true;
    }
  }
  return false;
}

function reset(){

for (var i = 0; i < squares.length; i++){
    squares[i].innerHTML="";
    counter=0}};



document.getElementById("resetButton").addEventListener("click",function(){reset()});


