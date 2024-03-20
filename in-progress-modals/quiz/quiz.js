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
    

}
function questiononenext(){
    document.getElementById("candlequizquestionone").style.display = "none";
    document.getElementById("candlequizquestiontwo").style.display = "block";
}
function questiontwonext(){
    document.getElementById("candlequizquestiontwo").style.display = "none";
    document.getElementById("candlequizquestionthree").style.display = "block";
}
function questionthreenext(){
    document.getElementById("candlequizquestionthree").style.display = "none";
    document.getElementById("candlequizquestionfour").style.display = "block";
}
function questionfournext(){
    document.getElementById("candlequizquestionfour").style.display = "none";
    submitQuiz()
}