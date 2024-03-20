function submitQuiz() {

    var userAnswers = []

    const reason = document.querySelector('input[name="reason"]:checked').value;
    userAnswers.push(reason);
    const scent = document.querySelector('input[name="scent"]:checked').value;
    userAnswers.push(scent);
    const location = document.querySelector('input[name="location"]:checked').value;
    userAnswers.push(location);
    const time = document.querySelector('input[name="time"]:checked').value;
    userAnswers.push(time);

    console.log(userAnswers)

    determinecandle(userAnswers)


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

function determinecandle(userAnswers) {

    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Floral" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Evening") {
        alert("option 1");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Floral" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Late Night") {
        alert("option 2");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Floral" && userAnswers[2] === "Living Room" && userAnswers[3] === "Evening") {
        alert("option 3");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Floral" && userAnswers[2] === "Living Room" && userAnswers[3] === "Late Night") {
        alert("option 4");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Woody" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Evening") {
        alert("option 5");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Woody" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Late Night") {
        alert("option 6");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Woody" && userAnswers[2] === "Living Room" && userAnswers[3] === "Evening") {
        alert("option 7");
    }
    if (userAnswers[0] === "Relaxation" && userAnswers[1] === "Woody" && userAnswers[2] === "Living Room" && userAnswers[3] === "Late Night") {
        alert("option 8");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Floral" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Evening") {
        alert("option 9");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Floral" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Late Night") {
        alert("option 10");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Floral" && userAnswers[2] === "Living Room" && userAnswers[3] === "Evening") {
        alert("option 11");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Floral" && userAnswers[2] === "Living Room" && userAnswers[3] === "Late Night") {
        alert("option 12");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Woody" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Evening") {
        alert("option 13");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Woody" && userAnswers[2] === "Bedroom" && userAnswers[3] === "Late Night") {
        alert("option 14");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Woody" && userAnswers[2] === "Living Room" && userAnswers[3] === "Evening") {
        alert("option 15");
    }
    if (userAnswers[0] === "Decoration" && userAnswers[1] === "Woody" && userAnswers[2] === "Living Room" && userAnswers[3] === "Late Night") {
        alert("option 16");
    }




}

$(document).ready(function () {
    $.ajax({
        url: 'candles.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            products = data;
            console.log(data);
            //thank fuck this works
        },
        error: function (error) {
            console.log('Error loading the JSON File')
        }
    })
})