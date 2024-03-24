let currentQuestionIndex = 0;
let score = 0;
let questions = [];

fetch('index.json')
    .then(response => response.json())
    .then(data => {
        // Randomly select 20 questions from the question bank
        questions = data.questions.sort(() => Math.random() - 0.5).slice(0, 20);

        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');

        function loadQuestion(question) {
            questionElement.textContent = question.question;
            optionsElement.innerHTML = '';
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => {
                    if (option === question.answer) {
                        score++;
                    }
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        loadQuestion(questions[currentQuestionIndex]);
                    } else {
                        alert(`Quiz finished! Your score: ${score}/${questions.length}`);
                        window.location.reload();
                    }
                });
                optionsElement.appendChild(button);
            });
        }

        loadQuestion(questions[currentQuestionIndex]);
    });
