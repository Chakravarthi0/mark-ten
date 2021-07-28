let billAmount = document.getElementById("billAmountInput");

let billAmountButton = document.getElementById("billAmountButton");

let errorOne = document.getElementById("errorOne");

let divTwo = document.getElementById("divTwo")

let cashGiven = document.getElementById("cashGivenInput");

let cashGivenButton = document.getElementById("cashGivenButton");

let result = document.getElementById("result");

let noReturn = document.getElementById("noReturn");

let notesCol = document.getElementsByClassName("noOfNotes");

const validCurrencies = [1, 5, 10, 20, 100, 500, 2000];

billAmountButton.addEventListener("click", () => {
    let amount = Number(billAmount.value);
    if (amount < 1) {
        errorOne.style.display = "block";
    }
    else {
        errorOne.style.display = "none";
        divTwo.style.display = "block";
        billAmountButton.style.display = "none";
    }
    console.log(billAmount)
    console.log("clicked")
});

cashGivenButton.addEventListener("click", () => {
    let cash = Number(cashGiven.value);
    let amount = Number(billAmount.value);
    let balance = Number(cash - amount);
    // console.log("cash...", cash);
    // console.log("amt..", amount);
    // console.log("bal..", balance);
    if (cash < amount) {
        errorTwo.style.display = "block";
        result.style.display = "none";
        noReturn.style.display = "none";
    }
    else if(cash === amount){
        noReturn.style.display = "block";
        errorTwo.style.display = "none";
        result.style.display = "none";
    }
    else {
        noReturn.style.display = "none";
        errorTwo.style.display = "none";
        result.style.display = "block";
        for (let i = validCurrencies.length-1; i >=0; i--) {
            if (balance >= validCurrencies[i]) {
                // console.log("iter..", i);
                // console.log("Bal..", balance)
                let notes = Math.floor((balance / validCurrencies[i]));
                // console.log("notes..", notes)
                notesCol[i].innerText = notes;
                balance = balance - (notes*validCurrencies[i]);
            }
            else{
                notesCol[i].innerText = "";
            }
        }
    }
})