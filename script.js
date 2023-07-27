const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const minus = document.querySelector(".minus");
const buttonReset = document.querySelector(".reset-button")

let counterValue = 1;

plus.addEventListener("click", ()=>{
    counterValue++;
    counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
    number.innerText = counterValue;
});

minus.addEventListener("click", ()=>{
    if(counterValue > 0){
        counterValue--;
        counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
        number.innerText = counterValue;
    }
});
buttonReset.addEventListener("click",()=>{
    counterValue = "00"
    number.innerText = counterValue;
});