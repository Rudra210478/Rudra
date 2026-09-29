function askAI() {
    const question = document.getElementById("question").value.trim();
    const chatBox = document.getElementById("chatBox");

    if (question === "") {
        alert("Please enter a question.");
        return;
    }

    chatBox.innerHTML += `
        <p><strong>You:</strong> ${question}</p>
    `;

    let answer = getAnswer(question);

    chatBox.innerHTML += `
        <p><strong>Pocket Smart AI:</strong> ${answer}</p>
    `;

    document.getElementById("question").value = "";
}

function getAnswer(question) {
    question = question.toLowerCase();

    if (question.includes("hello") || question.includes("hi")) {
        return "Hello! Welcome to Pocket Smart AI. How can I help you?";
    }

    if (question.includes("html")) {
        return "HTML is used to create the structure of web pages.";
    }

    if (question.includes("javascript")) {
        return "JavaScript is used to add interactive features to web applications.";
    }

    if (question.includes("study")) {
        return "Create a simple study timetable, set small goals, and take regular breaks.";
    }

    if (question.includes("java")) {
        return "Java is an object-oriented programming language used to develop many types of applications.";
    }

    if (question.includes("thank")) {
        return "You're welcome! Keep learning!";
    }

    return "I am Pocket Smart AI. I can currently answer basic student-related questions. More AI features can be added in future.";
}
