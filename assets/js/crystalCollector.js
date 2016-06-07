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
   
var numberToGuess = Math.floor(Math.random() * 120) + 19;  
    // Then dump the random number into our randomNumber div. 
    $('.randomNumber').html(numberToGuess);
    
    // When randomButton is clicked...
    $(".crystal1, .crystal2, .crystal3, .crystal4").on("click", function(){
        // Generate a random number
        var random = Math.floor(Math.random() * 12) +1;  
        counter = counter + random;
        // Then dump the random number into our randomNumber div. 
        $('.result').html(counter);

        if (counter === numberToGuess){
            wins++;
            // alert('You won!!!!');
        }else if( counter > numberToGuess){
            losses++;
           alert('Unfortunately, you lost my friend =(');
      };
    });

    
   
    // When randomButton crystal2 is clicked...
    // $(".crystal2").on("click", function(){
    //     // Generate a random number
    //     var random = Math.floor(Math.random() * 12) + 1;  
    //     // Then dump the random number into our randomNumber div. 
    //     $('.result').html(random);
    // });
   
    // When randomButton crystal3 is clicked...
    // $(".crystal3").on("click", function(){
    //     // Generate a random number
    //     var random = Math.floor(Math.random() * 12) + 1;  
    //     counter = counter + random;
    //     // Then dump the random number into our randomNumber div. 
    //     $('.result').html(random);
    // });
   
    // // When randomButton crystal4 is clicked...
    // $(".crystal4").on("click", function(){
    //     // Generate a random number
    //     var random4 = Math.floor(Math.random() * 12) + 1;
    //     //counter = 0 in large scope, this adds the random number to itself but different number is generated each time
    //     counter = counter + random4;  
    //     // Then dump the random number into our randomNumber div. 
    //     $(".result").html(counter);

        // wins here
         
    
    
    });
// });


//add later
// if (counter === numberToGuess){
//             alert('You Won! Congratulations')
//         }else if (counter>numberToGuess){
//             alert('Unfortunately you just lost the game.=(')
//         }


     // if (counter == numberToGuess){
     //    alert('You won!!!!');
     //  }else if( counter > numberToGuess){
     //    alert('You lost!');
     //  }