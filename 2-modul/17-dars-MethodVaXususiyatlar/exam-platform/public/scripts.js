// public/scripts.js
$(document).ready(() => {
    $.get('/api/questions', (questions) => {
        const questionList = $('#question-list');
        questions.forEach((question) => {
            questionList.append(`<li class="list-group-item">${question.question}</li>`);
        });

        questionList.on('click', 'li', (event) => {
            const questionText = $(event.target).text();
            $.get(`/api/questions/${questionText}`, (question) => {
                alert(`Question: ${question.question}\nAnswer: ${question.answer}`);
            });
        });
    });
});