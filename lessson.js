//-373, 63, -1964




function lessonLibrary(input) {
    if(input == 1) {
        
    }
}


function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

let randomFloat = getRandomFloat(1, 30); 

function startLesson() {
    const num_1 = document.getElementById("num_1");
    const num_2 = document.getElementById("num_2");
    const userAnswer = document.getElementById("userText");

    num_1.innerHTML = getRandomFloat(1, 30);
    num_2.innterHTML = getRandomFloat(1, 30);


}