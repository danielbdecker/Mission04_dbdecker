$("#btnSend").click(function () {
    //grabs the values from the form and weights them together to get the grade for the class
    var grade = (($("#assignments").val() * 0.5) + ($("#groupProject").val() * 0.1) +
        ($("#quizzes").val()*0.1) + ($("#midtermExam").val()*0.1) +
        ($("#finalExam").val() * 0.1) + ($("#intex").val()) * 0.1);
    var letterGrade
    //checks what the final letter grade is
    if (grade >= 94) {
        letterGrade = "A";
    } else if (grade >= 90) {
        letterGrade = "A-";
    } else if (grade >= 87) {
        letterGrade = "B+";
    } else if (grade >= 84) {
        letterGrade = "B";
    } else if (grade >= 80) {
        letterGrade = "B";
    } else if (grade >= 77) {
        letterGrade = "C+";
    } else if (grade >= 74) {
        letterGrade = "C";
    } else if (grade >= 70) {
        letterGrade = "C-";
    } else if (grade >= 67) {
        letterGrade = "D+";
    } else if (grade >= 64) {
        letterGrade = "D";
    } else if (grade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    //prints both values to a p tag in the form
    $("#grade").text(`The percentage was ${grade}, which is a(n) ${letterGrade}.`);
});