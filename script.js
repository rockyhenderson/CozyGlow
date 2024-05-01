var candlesData = []; // Declare globally to ensure accessibility

var userSelections = {
    reason: '',
    scent: '',
    location: '',
    time: ''
};

// Array of image URLs
const images = [
    "url('img/mango/mango1.webp')",
    "url('img/mango/mango2.webp')",
    "url('img/mango/mango3.webp')",
    "url('img/mango/mango4.webp')",
    "url('img/mango/mango5.webp')"
  ];
  
  let currentIndex = 0; // Start with the first image
  
  function changeBackgroundImage() {
    const element = document.getElementById("product-image");
    // Set the image
    element.style.backgroundImage = images[currentIndex];
    // Move to the next image index or loop back to the start
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Set interval to change the background image every 5 seconds
  setInterval(changeBackgroundImage, 5000);
function changemango1(){
    document.getElementById("product-image").style.backgroundImage = "url('img/mango/mango1.webp')";
}
function changemango2(){
    document.getElementById("product-image").style.backgroundImage = "url('img/mango/mango2.webp')";
}

function changemango3(){
    document.getElementById("product-image").style.backgroundImage = "url('img/mango/mango3.webp')";
}

function changemango4(){
    document.getElementById("product-image").style.backgroundImage = "url('img/mango/mango4.webp')";
}

function changemango5(){
    document.getElementById("product-image").style.backgroundImage = "url('img/mango/mango5.webp')";
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

// Make sure this is correctly cased as used in the `submitQuiz` function
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