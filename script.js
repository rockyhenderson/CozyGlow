var candlesData = []; // Declare globally to ensure accessibility

$(document).ready(function () {
    // Fetch the candles JSON data
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
    var userAnswers = [];

    const reason = document.querySelector('input[name="reason"]:checked').value;
    userAnswers.push(reason);
    const scent = document.querySelector('input[name="scent"]:checked').value;
    userAnswers.push(scent);
    const location = document.querySelector('input[name="location"]:checked').value;
    userAnswers.push(location);
    const time = document.querySelector('input[name="time"]:checked').value;
    userAnswers.push(time);

    console.log(userAnswers);

    var matchingCandle = determineCandle(userAnswers); // Ensure this is 'determineCandle', correctly cased

    // Update the webpage with the matching candle's details
    if (matchingCandle) {
        console.log("IT WORKS!!!")
        $("#candleName").text(matchingCandle.candlename);
        $("#candleDescription").text(matchingCandle.candledescription);
        $("#candleImage").attr("src", matchingCandle.candleimage);
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
    document.getElementById("candlequizquestionone").style.display = "none";
    document.getElementById("candlequizquestiontwo").style.display = "block";
}
function questiontwonext() {
    document.getElementById("candlequizquestiontwo").style.display = "none";
    document.getElementById("candlequizquestionthree").style.display = "block";
}
function questionthreenext() {
    document.getElementById("candlequizquestionthree").style.display = "none";
    document.getElementById("candlequizquestionfour").style.display = "block";
}
function questionfournext() {
    document.getElementById("candlequizquestionfour").style.display = "none";
    submitQuiz()
}