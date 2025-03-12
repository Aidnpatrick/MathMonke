//-373, 63, -1964


function lessonLibrary(input) {
    if(input == 1) {
        
    }
}


function getRandomFloat(min, max, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.floor((Math.random() * (max - min) + min) * factor) / factor;
}

function newQuestion() {
    const questionParent = document.getElementById("questionDiv");
    questionParent.innerHTML = ""; // Clear previous question

    const lessonContent = document.getElementById("lessonContent");
    lessonContent.classList.add("show"); 

    const num1Value = getRandomFloat(1, 30, 0); 
    const num2Value = getRandomFloat(1, 30, 0);

    const num1 = document.createElement("p");
    num1.textContent = num1Value;

    const num2 = document.createElement("p");
    num2.textContent = num2Value;

    const symbol = document.createElement("p");
    symbol.textContent = "+";

    const equals = document.createElement("p");
    equals.textContent = "= ?";

    questionParent.appendChild(num1);
    questionParent.appendChild(symbol);
    questionParent.appendChild(num2);
    questionParent.appendChild(equals);

    localStorage.setItem("num_1", num1Value);
    localStorage.setItem("num_2", num2Value);
}

function checkQuestion() {
    const input = parseFloat(document.getElementById("userInput").value);
    const num1 = parseFloat(localStorage.getItem("num_1"));
    const num2 = parseFloat(localStorage.getItem("num_2"));

    if (input === num1 + num2) {
        console.log("Nice!");
    } else {
        console.log("Wrong.");
    }
    const clearInput = document.getElementById("userInput");
    clearInput.value = "";
    if(localStorage.getItem("questions") != 5) {
        newQuestion(); // Generate new question after checking
        let tempNum = localStorage.getItem("questions");
        localStorage.setItem("questions", tempNum++);

    } else {
        
    }
}

function togglePopup() {
    const popup = document.getElementById("lessonContent");
    popup.classList.toggle("show");
}

function toggleHelpPopup() {
    const helpPopup = document.getElementById("helpContent");
    helpPopup.classList.toggle("show");
}

document.getElementById("helpButton").addEventListener("click", () => {
    const lessonContent = document.getElementById("helpContent");
    lessonContent.classList.add("show"); 
});


/*

    */