document.getElementById("generate-pin").addEventListener('click', function () {
const randomNumber = Math.floor(1000 + Math.random() * 9000);
document.getElementById("generate-number").value = randomNumber;
})
//onclick function for button 
function display(value) {
   document.getElementById("generatePin").value+=value;
}

//is match or not match

document.getElementById("submit").addEventListener("click", function() {
const match = document.getElementById("generatePin").value;
const matchNumber = parseFloat(match);
const inputNumber= document.getElementById("generate-number").value;
const parseInputNumber = parseFloat(inputNumber);
if(matchNumber == parseInputNumber) {
     
   const notifySection1 = document.getElementById("notify1");
   notifySection1.classList.add('d-none');

   const notifySection2 = document.getElementById("notify2");
   notifySection2.style.display = "block";
}
else{
     const notifySection1 = document.getElementById("notify1");
     notifySection1.style.display = "block";
}
})

