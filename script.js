document.addEventListener("DOMContentLoaded", function () {
    const filePath = 'classData.json';

    fetch(filePath)
        .then(response => response.json())
        .then(data => {
            const classesParent = document.getElementById("classesDiv");
            const classId = localStorage.getItem("classId"); // Retrieve classId from localStorage

            data.classes.forEach((classItem) => {
                console.log(classItem.classAbout);
                
                // Create a container for each class
                const divClassChild = document.createElement("div");
                divClassChild.className = "class-div";

                // Hover effect (mouseenter instead of hover)
                divClassChild.addEventListener("mouseenter", () => {
                    discChange(classItem.id);
                });

                // Start button
                const button = document.createElement("a");
                button.href = "lesson-page.html";
                button.className = "classButton";
                button.textContent = "START";

                button.addEventListener("click", () => {
                    localStorage.setItem("classId", classItem.id);
                });

                // Title
                const title = document.createElement("h3");
                title.className = "title";
                title.textContent = classItem.className;

                const br = document.createElement("br");

                // Append elements
                divClassChild.appendChild(title);
                divClassChild.appendChild(button);
                classesParent.appendChild(divClassChild);
                classesParent.appendChild(br);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});

// Function to update description
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
