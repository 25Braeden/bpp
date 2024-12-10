function go(direction) {
    // Get the current file name from the URL
    const currentFile = window.location.pathname.split('/').pop();
    
    // Determine the current slide number
    const match = currentFile.match(/slide(\d+)\.html$/);
    const currentSlide = match ? parseInt(match[1]) : 1; // Default to 1 if no match

    const newSlide = currentSlide + direction;

    // Get the total number of slides from the data attribute
    const totalSlides = parseInt(document.body.getAttribute('total-slides'));

    // Handle out-of-bounds navigation
    if (newSlide < 1) {
        alert("You are already on the first slide.");
        return;
    }

    if (newSlide > totalSlides) {
        alert("You are already on the last slide.");
        return;
    }

    // Navigate to the new slide
    const newSlideFile = newSlide === 1 ? 'index.html' : `slide${newSlide}.html`;
    window.location.href = newSlideFile;
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const updateButton = document.getElementById('updateButton');
    const userNameSpan = document.getElementById('userName');

    if (updateButton) {
        updateButton.addEventListener('click', () => {
            const name = nameInput.value.trim() || "friend";
            userNameSpan.textContent = name;
        });
    }

    const questions = [
        {
            question: "What is the value of x after the following code is executed?",
            code: "x = 5<br>y = 3<br>x = x + y",
            answer: "8"
        },
        {
            question: "What is the value of z after the following code is executed?",
            code: "z = 10<br>z = z - 2",
            answer: "8"
        },
        {
            question: "What is the value of name after the following code is executed?",
            code: "fName = 'John'<br>lName = 'Doe'<br>name = fName + ' ' + lName",
            answer: "John Doe"
        },
        {
            question: "What is the value of the variable result after the following code is executed?",
            code: "result = 5 * 3 + 2<br>result = result + 1",
            answer: "18"
        },
        {
            question: "What is the value of the variable total after the following code is executed?",
            code: "total = 10<br>total = total / 2",
            answer: "5"
        }
    ];

    const quizContainer = document.getElementById('quizContainer');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${q.question}</p>
            <pre><code>${q.code}</code></pre>
            <input type="text" id="quizAnswer${index}" placeholder="Enter your answer">
        `;
        quizContainer.appendChild(questionElement);
    });

    const checkAnswersButton = document.getElementById('checkAnswersButton');
    const feedback = document.getElementById('feedback');

    if (checkAnswersButton) {
        checkAnswersButton.addEventListener('click', () => {
            let allCorrect = true;
            questions.forEach((q, index) => {
                const quizAnswer = document.getElementById(`quizAnswer${index}`);
                const answer = quizAnswer.value.trim();
                if (answer === q.answer) {
                    quizAnswer.classList.add('correct');
                    quizAnswer.classList.remove('incorrect');
                } else {
                    quizAnswer.classList.add('incorrect');
                    quizAnswer.classList.remove('correct');
                    allCorrect = false;
                }
            });
            feedback.textContent = allCorrect ? 'All answers are correct!' : 'Some answers are incorrect, try again.';
            feedback.classList.add(allCorrect ? 'correct' : 'incorrect');
            feedback.classList.remove(allCorrect ? 'incorrect' : 'correct');
            feedback.style.display = 'block';
        });
    }
});
