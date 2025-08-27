let heartCount = 0;

function heartCountValue() {
  heartCount++;
  document.getElementById("output").innerText = heartCount;
}

document.getElementById("heart_plus-1").addEventListener("click", function () {
  heartCountValue("heart_plus-1");
});

document.getElementById("heart_plus-2").addEventListener("click", function () {
  heartCountValue("heart_plus-2");
});
document.getElementById("heart_plus-3").addEventListener("click", function () {
  heartCountValue("heart_plus-3");
});
document.getElementById("heart_plus-4").addEventListener("click", function () {
  heartCountValue("heart_plus-4");
});
document.getElementById("heart_plus-5").addEventListener("click", function () {
  heartCountValue("heart_plus-5");
});
document.getElementById("heart_plus-6").addEventListener("click", function () {
  heartCountValue("heart_plus-6");
});
document.getElementById("heart_plus-7").addEventListener("click", function () {
  heartCountValue("heart_plus-7");
});
document.getElementById("heart_plus-8").addEventListener("click", function () {
  heartCountValue("heart_plus-8");
});
document.getElementById("heart_plus-9").addEventListener("click", function () {
  heartCountValue("heart_plus-9");
});
