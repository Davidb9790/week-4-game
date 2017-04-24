console.log("testing");


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var counter = 0;

//var numberToGuess = 45;

//checking array, it works
console.log(numbers.length);

// $(document).ready(function(){
// 	 var numberToGuess = Math.floor(Math.random() * 120) + 19;  
//         // Then dump the random number into our randomNumber div. 
//         $('.randomNumber').html(numberToGuess);
//     });


$(document).ready(function(){
     var wins = 0;
     var losses = 0;
     
   var numberToGuess = Math.floor(Math.random() * (120 - 19 +1)) + 19; 
   var random = Math.floor(Math.random() * 12) +1; 
    // Then dump the random number into our randomNumber div. 
    $('.randomNumber').html(numberToGuess);

    //crystals her before 
    $(".crystal1, .crystal2, .crystal3, .crystal4").on("click", function(){   
    
    $('.wins').text("Wins: " + wins);

    $('.losses').text("Losses: "+ losses);
    
    // When randomButton is clicked...
        // Generate a random number
          
        counter = counter + random;
        // Then dump the random number into our randomNumber div. 
        $('.result').html(counter);

        if (counter === numberToGuess){
            wins++;
            alert('You won!!!!');
        }else if( counter > numberToGuess){
            losses++;
            numberToGuess=Math.floor(Math.random()*(120 - 19 + 1))+19;
            $('.randomNumber').text(numberToGuess);
            counter=0;
           alert('Unfortunately, you lost my friend =(');
      };
    });
});
