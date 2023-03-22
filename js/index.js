const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
const form = document.getElementById("form");

function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    let p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    let bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    let result = "";
    if (bmi < 18.5) {
        result = "Kekurangan Berat Badan";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Normal (Ideal)";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Kelebihan Berat Badan";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Kegemukan (obesitas)";
    }

    bmi = bmi.toFixed(2);
    document.getElementById("result-bmi").innerHTML = result
    document.getElementById("bmi-output").innerHTML = bmi

    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);