function toggleInstructions() {
    const para = document.getElementById("instructions");
    para.style.color = "black";
}

document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let filipino = Number(document.getElementById("filipino").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let math = Number(document.getElementById("math").value);
    let social = Number(document.getElementById("social").value);

    let average = Math.round((filipino + english + science + math + social) / 5 * 100) / 100;

    let rating = "";
    if (average >= 94) {
        rating = "Excellent";
    } else if (average >= 87) {
        rating = "Above Satisfactory";
    } else if (average >= 80) {
        rating = "Satisfactory";
    } else if (average >= 75) {
        rating = "Needs Improvement";
    } else if (average >= 70) {
        rating = "Poor";
    } else {
        rating = "Failing";
    }

    document.getElementById("result").innerHTML = `Your average is <strong>${average}</strong> - ${rating}`;
});
