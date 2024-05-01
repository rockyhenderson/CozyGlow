var state = "m";
var candlesData = []; // Declare globally to ensure accessibility

var userSelections = {
    reason: '',
    scent: '',
    location: '',
    time: ''
};
function producdropdown(){
    alert("hi")
}



function mangooption(){
    state = "m"
    var mangoElements = document.getElementsByClassName("mangoul");
    for (var i = 0; i < mangoElements.length; i++) {
      mangoElements[i].style.color = "#FFFFFF"; 
    }
    var appleElements = document.getElementsByClassName("appleul");
    for (var i = 0; i < appleElements.length; i++) {
      appleElements[i].style.color = "#413b45"; 
    } 
    var guavaElements = document.getElementsByClassName("guavaul");
    for (var i = 0; i < guavaElements.length; i++) {
      guavaElements[i].style.color = "#413b45"; 
    }
    var peachElements = document.getElementsByClassName("peachul");
    for (var i = 0; i < peachElements.length; i++) {
      peachElements[i].style.color = "#413b45"; 
    }
    for (let i = 1; i <= 5; i++) {
        let mangoElements = document.getElementsByClassName("mango" + i);
    
        for (let j = 0; j < mangoElements.length; j++) {
          mangoElements[j].style.backgroundImage = "url('img/mango/mango" + i + ".webp')";
        }
    }

    var elements = document.getElementsByClassName("product-image");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url('img/mango/mango1.webp')";
    }


document.getElementById("secret-daddy-container-mango").style.display = "block"
document.getElementById("secret-daddy-container-apple").style.display = "none"
document.getElementById("secret-daddy-container-guava").style.display = "none"
document.getElementById("secret-daddy-container-peach").style.display = "none"

const newColor = "#fec844"
document.documentElement.style.setProperty('--user-color', newColor);
}



function appleoption(){
    state = "a"
    var mangoElements = document.getElementsByClassName("mangoul");
    for (var i = 0; i < mangoElements.length; i++) {
      mangoElements[i].style.color = "#413b45"; 
    }
    var appleElements = document.getElementsByClassName("appleul");
    for (var i = 0; i < appleElements.length; i++) {
      appleElements[i].style.color = "#FFFFFF"; 
    } 
    var guavaElements = document.getElementsByClassName("guavaul");
    for (var i = 0; i < guavaElements.length; i++) {
      guavaElements[i].style.color = "#413b45"; 
    }
    var peachElements = document.getElementsByClassName("peachul");
    for (var i = 0; i < peachElements.length; i++) {
      peachElements[i].style.color = "#413b45"; 
    }


    for (let i = 1; i <= 5; i++) {
        let mangoElements = document.getElementsByClassName("mango" + i);
    
        for (let j = 0; j < mangoElements.length; j++) {
          mangoElements[j].style.backgroundImage = "url('img/apple/apple" + i + ".webp')";
        }
    }

    var elements = document.getElementsByClassName("product-image");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url('img/apple/apple1.webp')";
    }


    document.getElementById("secret-daddy-container-mango").style.display = "none"
    document.getElementById("secret-daddy-container-apple").style.display = "block"
    document.getElementById("secret-daddy-container-guava").style.display = "none"
    document.getElementById("secret-daddy-container-peach").style.display = "none"

    const newColor = "#ff6347"
    document.documentElement.style.setProperty('--user-color', newColor);
}



function guavaoption(){
    state = "g"
    var mangoElements = document.getElementsByClassName("mangoul");
    for (var i = 0; i < mangoElements.length; i++) {
      mangoElements[i].style.color = "#413b45"; 
    }
    var appleElements = document.getElementsByClassName("appleul");
    for (var i = 0; i < appleElements.length; i++) {
      appleElements[i].style.color = "#413b45"; 
    } 
    var guavaElements = document.getElementsByClassName("guavaul");
    for (var i = 0; i < guavaElements.length; i++) {
      guavaElements[i].style.color = "#FFFFFF"; 
    }
    var peachElements = document.getElementsByClassName("peachul");
    for (var i = 0; i < peachElements.length; i++) {
      peachElements[i].style.color = "#413b45"; 
    }

    for (let i = 1; i <= 5; i++) {
        let mangoElements = document.getElementsByClassName("mango" + i);
    
        for (let j = 0; j < mangoElements.length; j++) {
          mangoElements[j].style.backgroundImage = "url('img/guava/guava" + i + ".webp')";
        }
    }


    var elements = document.getElementsByClassName("product-image");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url('img/guava/guava1.webp')";
    }


    document.getElementById("secret-daddy-container-mango").style.display = "none"
    document.getElementById("secret-daddy-container-apple").style.display = "none"
    document.getElementById("secret-daddy-container-guava").style.display = "block"
    document.getElementById("secret-daddy-container-peach").style.display = "none"

    const newColor = "#ADFF2F"
    document.documentElement.style.setProperty('--user-color', newColor);
}



function peachoption(){
    state = "p"
    var mangoElements = document.getElementsByClassName("mangoul");
    for (var i = 0; i < mangoElements.length; i++) {
      mangoElements[i].style.color = "#413b45"; 
    }
    var appleElements = document.getElementsByClassName("appleul");
    for (var i = 0; i < appleElements.length; i++) {
      appleElements[i].style.color = "#413b45"; 
    } 
    var guavaElements = document.getElementsByClassName("guavaul");
    for (var i = 0; i < guavaElements.length; i++) {
      guavaElements[i].style.color = "#413b45"; 
    }
    var peachElements = document.getElementsByClassName("peachul");
    for (var i = 0; i < peachElements.length; i++) {
      peachElements[i].style.color = "#FFFFFF"; 
    }

    for (let i = 1; i <= 5; i++) {
        let mangoElements = document.getElementsByClassName("mango" + i);
    
        for (let j = 0; j < mangoElements.length; j++) {
          mangoElements[j].style.backgroundImage = "url('img/peach/peach" + i + ".webp')";
        }
    }

    var elements = document.getElementsByClassName("product-image");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url('img/peach/peach1.webp')";
    }



    document.getElementById("secret-daddy-container-mango").style.display = "none"
    document.getElementById("secret-daddy-container-apple").style.display = "none"
    document.getElementById("secret-daddy-container-guava").style.display = "none"
    document.getElementById("secret-daddy-container-peach").style.display = "block"

    const newColor = "#ff9a8a"
    document.documentElement.style.setProperty('--user-color', newColor);
    }




function changeFruit(index) {
    var images = document.getElementsByClassName("product-image");

    var baseUrl;
    switch (state) {
        case 'm':
            baseUrl = "url('img/mango/mango";
            break;
        case 'a':
            baseUrl = "url('img/apple/apple";
            break;
        case 'g':
            baseUrl = "url('img/guava/guava";
            break;
        case 'p':
            baseUrl = "url('img/peach/peach";
            break;
        default:
            console.error("Invalid state:", state);
            return;
    }

    for (var i = 0; i < images.length; i++) {
        images[i].style.backgroundImage = baseUrl + index + ".webp')";
    }
}






















$(document).ready(function () {
    $('.button-option').click(function () {
        var question = $(this).data('question');
        var value = $(this).data('value');
        
        // Update user selections
        userSelections[question] = value;
        console.log('Updated Selection:', question, value);
        console.log('Current User Selections:', userSelections)
        });
    $.ajax({
        url: 'candles.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            candlesData = data; // Store the fetched data in the global variable
            console.log(candlesData);
        },
        error: function (error) {
            console.log('Error loading the JSON File');
        }
    });
});

function submitQuiz() {
    
    var userAnswers = [
        userSelections.reason,
        userSelections.scent,
        userSelections.location,
        userSelections.time
    ];

    console.log(userAnswers);

    var matchingCandle = determineCandle(userAnswers); // Ensure this is 'determineCandle', correctly cased

    // Update the webpage with the matching candle's details
    if (matchingCandle) {
        $("#candleResult").show();
        $("#candleImage").show();
        console.log("IT WORKS!!!")
        $("#candleName").text(matchingCandle.candlename);
        $("#candleDescription").text(matchingCandle.candledescription);
        $("#candleImage").attr("src", matchingCandle.candleimage);
        $("#candleNumber").text(matchingCandle.reviewNumber);
        $("#candlePrice").text(matchingCandle.price);
        $("#countdown").hide();
    } else {
        console.log("No matching candle found.");
        // Optionally, update the webpage to indicate no match was found
    }
}


function determineCandle(userAnswers) {
    var userPreferences = {
        mood: userAnswers[0],
        scent: userAnswers[1],
        location: userAnswers[2],
        timeOfDay: userAnswers[3]
    };
    var matchingCandle = candlesData.find(candle =>
        candle.mood === userPreferences.mood &&
        candle.scent === userPreferences.scent &&
        candle.location === userPreferences.location &&
        candle.timeOfDay === userPreferences.timeOfDay
    );

    return matchingCandle;
}
function questiononenext() {
    $("#candlequizquestionone").hide();
    $("#candlequizquestiontwo").show();
}

function questiontwonext() {
    $("#candlequizquestiontwo").hide();
    $("#candlequizquestionthree").show();
}

function questionthreenext() {
    $("#candlequizquestionthree").hide();
    $("#candlequizquestionfour").show();
}

function questionfournext() {
    $("#candlequizquestionfour").hide();
    $("#candle-modal").hide();
    $("#countdown").show();
    setTimeout(submitQuiz, 3000);
}
function candleModalPopup(){
    $("#candle-modal-popup").show();
    $("#candleResult").hide();
    $("#candle-modal-questions").show();
    $('html, body').scrollTop(0);
    $('body').css('overflow-y', 'hidden');


}
function closeChooseCandleModal(){
    $("#candle-modal-popup").hide();
    $('body').css('overflow-y', 'scroll');

}