console.log("testing");
// function getRandom(){
// 	return Math.random();
// }

var wins = 0;
var losses = 0;

$(document).ready(function(){
	 var random = Math.floor(Math.random() * 120) + 19;  
        // Then dump the random number into our randomNumber div. 
        $('.randomNumber').html(random);
    });
$(document).ready(function(){
    // When randomButton is clicked...
    $(".crystal1").on("click", function(){
        // Generate a random number
        var random = Math.floor(Math.random() * 12) + 1;  
        // Then dump the random number into our randomNumber div. 
        $('.result').html(random);
    })
})
$(document).ready(function(){
    // When randomButton is clicked...
    $(".crystal2").on("click", function(){
        // Generate a random number
        var random = Math.floor(Math.random() * 12) + 1;  
        // Then dump the random number into our randomNumber div. 
        $('.result').html(random);
    })
})
$(document).ready(function(){
    // When randomButton is clicked...
    $(".crystal4").on("click", function(){
        // Generate a random number
        var random = Math.floor(Math.random() * 12) + 1;  
        // Then dump the random number into our randomNumber div. 
        $('.result').html(random);
    })
})
$(document).ready(function(){
    // When randomButton is clicked...
    $(".crystal3").on("click", function(){
        // Generate a random number
        var random = Math.floor(Math.random() * 12) + 1;  
        // Then dump the random number into our randomNumber div. 
        $('.result').html(random);
    })
})
