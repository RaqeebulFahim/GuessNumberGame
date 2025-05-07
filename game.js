let number = Math.ceil(Math.random()*100);
console.log(number);
let count=1;


do {
    let guessNumber=parseInt(prompt("Guess a number between 1 to 100"));
    // console.log(guessNumber);

    if (number>guessNumber) {
        alert("Your number is smaller than guess number");
    }else if( number<guessNumber){
alert("Your number is greater than guess number");
    }else if(number===guessNumber){
        alert(`Hurrah! You win in ${count} attemps`);
        break;
    }else if(cancelIdleCallback){
        // alert("Input a number");
        alert(`Sad! You Failed!`)
        break;
    };
    count++;

    if (count>=6) {
        alert(`Sad! You Failed!`)
        break;
    }
} while (true);


