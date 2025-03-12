document.addEventListener("DOMContentLoaded", function () {
    const filePath = 'classData.json';

    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            const classesParent = document.getElementById("classesDiv");
            const classId = localStorage.getItem("classId"); 

            data.classes.forEach((classItem) => {
                console.log(classItem.classAbout);
                
                const divClassChild = document.createElement("div");
                divClassChild.className = "class-div";

                divClassChild.addEventListener("click", () => {
                    discChange(classItem.id);
                });

                // Start button
                const button = document.createElement("a");
                button.className = "classButton";
                button.textContent = "START";

                button.addEventListener("click", () => {
                    localStorage.setItem("classId", classItem.id);
                    newQuestion();
                    localStorage.setItem("questions", 0);
                });

                // Title
                const title = document.createElement("h3");
                title.className = "title";
                title.textContent = classItem.className;

                const br = document.createElement("br");
                br.style.height = "5px";

                divClassChild.appendChild(title);
                divClassChild.appendChild(button);
                classesParent.appendChild(divClassChild);
                classesParent.appendChild(br);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});

function discChange(id) {
    const filePath = 'classData.json';

    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            let p = document.getElementById("discText");
            const classItem = data.classes.find(item => item.id === id);

            if (classItem && classItem.info) {
                p.textContent = classItem.info;
            } else {
                p.textContent = "No description available.";
            }
        })
        .catch(error => console.error("Error loading JSON:", error));
}


document.addEventListener("DOMContentLoaded", function() {
    const p = document.getElementById("discText");
    const placeHolder = document.getElementById("placeHolderDisc");

    if (p.textContent.trim() === "") { 
        placeHolder.textContent = "[Click a lesson to see its description]";
    } else {
        placeHolder.textContent = "";
    }
});

function showSideBar() {
    const column = document.getElementById("sideBar");
    const button = document.getElementById("barButton");
    const content = document.getElementById("content");
    // Get computed style to check actual display value
    const columnStyle = window.getComputedStyle(column).display;

    if (columnStyle === "flex") {
        column.style.display = "none";
        button.style.right = "0%";
    } else {
        column.style.display = "flex";  // Fixed typo
        button.style.right = "430px";
    }
}
