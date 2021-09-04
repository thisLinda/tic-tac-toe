// todo: refactor button eventListener, code to id/alert win and tie

let currentPlayer = 'X';

// hide alerts
  document.getElementById("tie").classList.remove("hide")
  document.getElementById("winner").classList.remove("hide")

function changePlayer() {
	if (currentPlayer === 'X'){
		currentPlayer = 'O';
	}
	else {
		currentPlayer = 'X';
	}
  turnPrompt()
 }
 
 let promptMessage = document.getElementById("turn-prompt");

 function turnPrompt() {
   promptMessage.innerHTML = ('Turn: Player ' + currentPlayer)
 }

let button1 = document.getElementById("sq1");
let button2 = document.getElementById("sq2");
let button3 = document.getElementById("sq3");
let button4 = document.getElementById("sq4");
let button5 = document.getElementById("sq5");
let button6 = document.getElementById("sq6");
let button7 = document.getElementById("sq7");
let button8 = document.getElementById("sq8");
let button9 = document.getElementById("sq9");

button1.addEventListener("click", () => {
  button1.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq1").disabled = true;
})

button2.addEventListener("click", () => {
  button2.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq2").disabled = true;
})

button3.addEventListener("click", () => {
  button3.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq3").disabled = true;
})

button4.addEventListener("click", () => {
  button4.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq4").disabled = true;
})

button5.addEventListener("click", () => {
  button5.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq5").disabled = true;
})

button6.addEventListener("click", () => {
  button6.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq6").disabled = true;
})

button7.addEventListener("click", () => {
  button7.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq7").disabled = true;
})

button8.addEventListener("click", () => {
  button8.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq8").disabled = true;
})

button9.addEventListener("click", () => {
  button9.innerHTML = currentPlayer;
  changePlayer();
  document.getElementById("sq9").disabled = true;
})

if ((button1 == 'x' || button1 == 'X') && (button2 == 'x' ||
    button2 == 'X') && (button3 == 'x' || button3 == 'X')) {
    $("#winner").show();
  }
  else if ((button1 == 'x' || button1 == 'X') && (button4 == 'x' ||
    button4 == 'X') && (button7 == 'x' || button7 == 'X')) {
    $("#winner").show();
  }
  else if ((button7 == 'x' || button7 == 'X') && (button8 == 'x' ||
    button8 == 'X') && (button9 == 'x' || button9 == 'X')) {
    $("#winner").show();
  }
  else if ((button3 == 'x' || button3 == 'X') && (button6 == 'x' ||
    button6 == 'X') && (button9 == 'x' || button9 == 'X')) {
    $("#winner").show();
  }
  else if ((button1 == 'x' || button1 == 'X') && (button5 == 'x' ||
    button5 == 'X') && (button9 == 'x' || button9 == 'X')) {
    $("#winner").show();
  }
  else if ((button3 == 'x' || button3 == 'X') && (button5 == 'x' ||
    button5 == 'X') && (button7 == 'x' || button7 == 'X')) {
    $("#winner").show();
  }
  else if ((button2 == 'x' || button2 == 'X') && (button5 == 'x' ||
    button5 == 'X') && (button8 == 'x' || button8 == 'X')) {
    $("#winner").show();
  }
  else if ((button4 == 'x' || button4 == 'X') && (button5 == 'x' ||
    button5 == 'X') && (button6 == 'x' || button6 == 'X')) {
    $("#winner").show();
  }
  else if ((button1 == 'o' || button1 == 'O') && (button2 == 'o' ||
    button2 == 'O') && (button3 == 'o' || button3 == 'O')) {
    $("#winner").show();
  }
  else if ((button1 == 'o' || button1 == 'O') && (button4 == 'o' ||
    button4 == 'O') && (button7 == 'o' || button7 == 'O')) {
    $("#winner").show();
  }
  else if ((button7 == 'o' || button7 == 'O') && (button8 == 'o' ||
    button8 == 'O') && (button9 == 'o' || button9 == 'O')) {
    $("#winner").show();
  }
  else if ((button3 == 'o' || button3 == 'O') && (button6 == 'o' ||
    button6 == 'O') && (button9 == 'o' || button9 == 'O')) {
    $("#winner").show();
  }
  else if ((button1 == 'o' || button1 == 'O') && (button5 == 'o' ||
    button5 == 'O') && (button9 == 'o' || button9 == 'O')) {
    $("#winner").show();
  }
  else if ((button3 == 'o' || button3 == 'O') && (button5 == 'o' ||
    button5 == 'O') && (button7 == 'o' || button7 == 'O')) {
    $("#winner").show();
  }
  else if ((button2 == 'o' || button2 == 'O') && (button5 == 'o' ||
    button5 == 'O') && (button8 == 'o' || button8 == 'O')) {
    $("#winner").show();
  }
  else if ((button4 == 'o' || button4 == 'O') && (button5 == 'o' ||
    button5 == 'O') && (button6 == 'o' || button6 == 'O')) {
    $("#winner").show();
  } else {
    $("tie").show();
  // }
  // resetBoard()
}

// let buttons = document.getElementsByClassName("btn");

// function resetBoard() {
//   // need to loop through array when getting elements by class
//   for (let i = 0; i < buttons.length; i++) {
    
//     document.getElementsByClassName("btn").value = "";
//     console.log('in reset loop')
    
//   }
//   console.log('in reset')
//   // console.log(value)
// }
// resetBoard();

//  let buttonReset = document.getElementById("sq1");

//  buttonReset.addEventListener("click", () => {
//    document.getElementById("sq1").value = '';
//  })

//  function resetBoard() {
//   console.log('in the reset')
//   buttonReset.addEventListener("click", () => {
//     document.getElementById("sq1").value = '';
//     document.getElementById("sq2").value = '';
//     document.getElementById("sq3").value = '';
//     document.getElementById("sq4").value = '';
//     document.getElementById("sq5").value = '';
//     document.getElementById("sq6").value = '';
//     document.getElementById("sq7").value = '';
//     document.getElementById("sq8").value = '';
//     document.getElementById("sq9").value = '';
//   }
//   console.log('outside reset if')
// }