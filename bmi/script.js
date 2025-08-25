function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    document.getElementById("result").innerHTML = "⚠️ Please enter valid values!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";
  let cssClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    cssProperties = "underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    cssProperties = "normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    cssProperties = "overweight";
  } else {
    category = "Obese";
    cssProperties = "obese";
  }

  document.getElementById("result").innerHTML = 
    `Your BMI is <b>${bmi}</b><br>Category: <span class="${cssProperties}">${category}</span>`;
}
