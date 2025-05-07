let number = Math.ceil(Math.random() * 100);
console.log(number);
let count = 1;
let remaining = 4;


do {
  let guessNumber = parseInt(prompt("Guess a number between 1 to 100"));
  // console.log(guessNumber);

  if(guessNumber<1 || guessNumber>100) {
    alert(`Your number must between 1 to 100, remaining attempt ${remaining--}`);
  } else if (number < guessNumber) {
    alert(`Your number is greater than guess number, remaining attempt ${remaining--}`);
  } else if (number > guessNumber) {
    alert(`Your number is smaller than guess number, remaining attempt ${remaining--}`);
  } else if (number === guessNumber) {
    alert(`Hurrah! You win in ${count} attempt!`);
    break;
  } else if (cancelIdleCallback) {
    // alert("Input a number");
    alert(`Sad! You Failed!`);
    break;
  }
  count++;
  
  if (count > 5) {
    alert(`Sad! You Failed! The correct number was ${number}`);
    break;
  }
} while (true);