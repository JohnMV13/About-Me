// alert('Hello There. You are about  to take a questionare about me.');
// var name = prompt("What is your name?")
// console.log('name' + name)

// var guess = prompt("What is my favorite number " + name);
// console.log('Guess is: ' + guess);
// var guessCount = 1;

// while (guess !== '-13' & guessCount < 7) {
//     guess = Number(guess);
//     console.log (guess);
//     if (isNaN(guess)) {
//         console.log('Guess is null; breaking');
//         break;
//     }

//     var promptWarning = 'Wrong';
//     if (guess > -13) {
//         promptWarning = 'TOO High!';
//     } else if (guess < -13) {
//         promptWarning = 'Too Low. I\'m not that mean';
//     } 
//     console.log(promptWarning);

//     guess = prompt(promptWarning + ' Keep trying. What is my favorite number');

//     console.log('Guess is: ' + guess);

//     guessCount = guessCount + 1;
//     console.log('guessCount is ' + guessCount);
//     console.log('end of the while loop');

// }

// console.log('while loop exited');

// if (isNaN(guess) || guessCount >=7) {
//         alert('Geez. Couldn\'t solve a simple guess and check? My favorite number is -13.');
// } else {
//     alert('It took you ' + guessCount + ' guesses to find my favorite number. Congrats!');
// }

// function askQuestion(questionText, correctWord, correctMessage, incorrectMessage)
// {
//     var correctLetter = correctWord[0];

//     var answer = prompt(questionText).toLowerCase();
    
//     if (answer === correctWord || answer[0] === correctLetter) {
//         alert('That\'s right, ' + name + '!' + correctMessage);
//     }else {
//             alert(incorrectMessage + " " + name);
//         }
//     console.log('response is' +answer);
// }

// var questionText ='Am I legally allowed to drink?'; 
// var correctWord = 'yes';
// var correctMessage = 'Correct, I am 21 years old.';
// var incorrectMessage = 'Incorrect, I am 21 years old.';

// askQuestion(questionText, correctWord, correctMessage, incorrectMessage);



// var answer = prompt(name + ', Am I legally allowed to drink?');
// if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
//     alert('Correct. I am 21 years old.')
// }
// else if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO' ) {
//     alert('Incorrect. I\'m 21 years old.')
// }
// else {
//     alert("I'm sorry, " + name + ", I couldn't understand you. Please try again.")
// }
// answer = prompt("I have gone shark fishing before. Yes or No, " + name + "?");
// if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
//     alert('Correct. I used to shark fish with my dad\'s side of the family for several years. The largest one I\'ve caught was 6ft long.')
// }
// else if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO' ) {
//     alert('Incorrect. I used to go down to the Gulf of Mexico every Summer and fish for sharks.')
// }
// else {
//     alert("I'm sorry. You need to speak up. I'm hard of hearing")
// }
// answer = prompt("I made it into the top 5 bowlers at state bowling my senior year of high school. " + name + " Yes or No?");
// if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO' ) {
//     alert("Correct. I actually missed the top 5 bowlers in Iowa high school bowling by 7 pins")
// }
// else if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
//     alert("Incorrect. I missed the top 5 bowlers at Iowa state bowling by 7 pins")
// }
// else {
//     alert('Please speak up. You\'re typing too quietly')
// }
// answer = prompt("Did I attain the rank of Eagle in Boy Scouts, " + name + "?");
// if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
//     alert('Correct. I am the first person in my family to be an Eagle Scout.')
// }
// else if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO' ) {
//     alert('Incorrect. I actually am the first person in my family to achieve the rank of Eagle Scout.')
// }
// else {
//     alert("I couldn't see what you did there. Please try again")
// }
// answer = prompt(name + " Do I prefer movie adaptations of books over reading books?");
// if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO' ) {
//     alert('Correct. I prefer the books because so many movies have ruined the books I read while I was younger')
// }
// else if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
//     alert('Incorrect. I prefer books to movie adaptations because some of those movies were awful compared to the books.')
// }
// else {
//     alert("Please retype your answer. There seems to have been a mistake.")
// }

// var names = ['TEXAS', 'MISSOURI', 'ALABAMA'];
// console.log(names.length);
// var nameGuess = prompt('Guess three places I have vacationed at');
// var nameGuessTrimmedToUpper = nameGuess.toUpperCase();

// if (names.indexOf(nameGuessTrimmedToUpper) >= 0 || names.indexOf(nameGuessTrimmedToUpper) <= 3) {
//     alert('Correct. ' + nameGuess + ' is a place I vacation at');
// } else {
//     alert(wrong);
// }
