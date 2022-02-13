document.getElementById("generate-pin").addEventListener('click', function () {
const randomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById("generate-number").value = randomNumber;
})
//onclick function for button 
function display(value) {
   document.getElementById("generatePin").value+=value;
}
//clear button 
document.getElementById("clear").addEventListener("click", function() {
   document.getElementById("generatePin").value = '';
})
// varify pin 

document.getElementById("submit").addEventListener("click", function() {
const inputForMatch = document.getElementById("generatePin").value;
const matchNumber = parseFloat(inputForMatch);
const generatePinValue= document.getElementById("generate-number").value;
const generatePinNumber = parseFloat(generatePinValue);

const notifyMatch = document.getElementById("notify-match");
const notifyNotMatch = document.getElementById("notify-not-match");

if(matchNumber == generatePinNumber) {
   
   notifyMatch.style.display = "block";
   notifyNotMatch.style.display = "none";
}
else{
     notifyMatch.style.display = "none";
     notifyNotMatch.style.display = "block";
}
})

