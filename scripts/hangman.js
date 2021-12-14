let word = "mcgarvey";

let allLetters = document.querySelectorAll('.alphabetContainer .letter');
let guessContainer = document.querySelector('.guessContainer');
//console.log(allLetters);

let guessLetterHTML = '<div class="guessLetter"></div>';
for (counter=0; counter < word.length; counter++){
    guessContainer.insertAdjacentHTML('beforeend', guessLetterHTML);
}

let guessLetters = document.querySelectorAll('.guessLetter');
//looping through each html letter to add an event listener
allLetters.forEach(function(letter){
    //console.log(letter);
    //adding event listener to individual letter
    letter.addEventListener('click',function(event){
        //selecting the html of the clicked item
        let currentLetterHTML = event.target;
        //checking to see if class clicked is not on the letter 
        if(!currentLetterHTML.classList.contains('clicked')){
            //getting the character stored within the letter we clicked on and making it lowercase
            let currentLetter = event.target.innerHTML.toLowerCase();
            // console.log(currentLetter);
            // adding the class of clicked for single use
            currentLetterHTML.classList.add('clicked');
            // returns an array containing the indexes of where the letter appears in the word
            let answers = [...word.matchAll(currentLetter)];
            console.log(answers); 
            // if answers array is not empty...
            if(answers){
                // loop through each answer in the answers array
                answers.forEach(function(answer){
                    //console.log(answer.index);
                    // looping through guessLetters html
                    for(counter=0; counter < guessLetters.length; counter++){
                        // if the html appears in the same position as the answer index
                        if(counter == answer.index){
                            //console.log('Correct letter');
                            // update inner html of current guessed letter to show letter clicked on
                            guessLetters[answer.index].innerHTML = currentLetter.toUpperCase();
                        }
                    }
                })
            } else {
                //show next part of hangman
            }
        }
    });
});