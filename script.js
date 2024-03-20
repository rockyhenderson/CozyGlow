var candlesData = []; // Declare globally to ensure accessibility

var userSelections = {
    reason: '',
    scent: '',
    location: '',
    time: ''
};

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
    setTimeout(submitQuiz, 3000);
}
