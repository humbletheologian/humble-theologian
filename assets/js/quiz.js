(function () {
  "use strict";

  const container = document.getElementById("bible-quiz");
  if (!container) return;

  const dataUrl = container.dataset.quizUrl;
  const letters = ["A", "B", "C", "D"];
  let quiz = null;
  let questionIndex = 0;
  let score = 0;
  let answered = false;
  const missedLinks = new Map();


  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function questionKey(item, index) {
    return item.id || item.question || String(index);
  }

  function storageKey() {
    return "humble-theologian-quiz-last-set:" + dataUrl;
  }

  function readPreviousQuestionKeys() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey()) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch (error) {
      return [];
    }
  }

  function saveQuestionKeys(items) {
    try {
      localStorage.setItem(
        storageKey(),
        JSON.stringify(items.map(function (item, index) {
          return questionKey(item, index);
        }))
      );
    } catch (error) {
      // The quiz still works when browser storage is unavailable.
    }
  }

  function chooseQuestions(questionBank, numberToChoose) {
    const previous = new Set(readPreviousQuestionKeys());
    const newToReader = [];
    const recentlySeen = [];

    questionBank.forEach(function (item, index) {
      const key = questionKey(item, index);
      if (previous.has(key)) {
        recentlySeen.push(item);
      } else {
        newToReader.push(item);
      }
    });

    let selected = shuffle(newToReader).slice(0, numberToChoose);

    if (selected.length < numberToChoose) {
      selected = selected.concat(
        shuffle(recentlySeen).slice(0, numberToChoose - selected.length)
      );
    }

    selected = shuffle(selected);
    saveQuestionKeys(selected);
    return selected;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderQuestion() {
    answered = false;
    const item = quiz.questions[questionIndex];
    const progress = ((questionIndex + 1) / quiz.questions.length) * 100;

    container.innerHTML = `
      <div class="quiz-status">
        <span>Question ${questionIndex + 1} of ${quiz.questions.length}</span>
        <span>Score: ${score} / ${quiz.questions.length}</span>
      </div>
      <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${quiz.questions.length}" aria-valuenow="${questionIndex + 1}" aria-label="Quiz progress">
        <div class="quiz-progress-bar" style="width:${progress}%"></div>
      </div>
      <p class="eyebrow">${escapeHtml(quiz.title)}</p>
      <h2 class="quiz-question" id="quiz-question">${escapeHtml(item.question)}</h2>
      <div class="quiz-options" role="group" aria-labelledby="quiz-question">
        ${item.options.map((option, index) => `
          <button class="quiz-option" type="button" data-index="${index}">
            <span class="quiz-letter" aria-hidden="true">${letters[index]}</span>
            <span>${escapeHtml(option)}</span>
          </button>
        `).join("")}
      </div>
      <div id="quiz-feedback"></div>
    `;

    container.querySelectorAll(".quiz-option").forEach(function (button) {
      button.addEventListener("click", handleAnswer);
    });

    const firstOption = container.querySelector(".quiz-option");
    if (firstOption) firstOption.focus();
  }

  function handleAnswer(event) {
    if (answered) return;
    answered = true;

    const selectedIndex = Number(event.currentTarget.dataset.index);
    const item = quiz.questions[questionIndex];
    const correct = selectedIndex === item.answer;
    if (correct) score += 1;

    if (!correct && item.link) {
      missedLinks.set(item.link, item.link_text || "Read more");
    }

    const buttons = Array.from(container.querySelectorAll(".quiz-option"));
    buttons.forEach(function (button, index) {
      button.disabled = true;
      if (index === item.answer) button.classList.add("correct");
      if (index === selectedIndex && !correct) button.classList.add("incorrect");
    });

    const feedback = container.querySelector("#quiz-feedback");
    const heading = correct ? "Correct" : "Not quite";
    const link = item.link
      ? `<p><a href="${escapeHtml(item.link)}">${escapeHtml(item.link_text || "Read more")}</a></p>`
      : "";

    feedback.innerHTML = `
      <div class="quiz-feedback" tabindex="-1">
        <h3>${heading}</h3>
        <p>${escapeHtml(item.explanation)}</p>
        ${link}
      </div>
      <div class="quiz-actions">
        <button class="quiz-button" type="button" id="quiz-next">
          ${questionIndex === quiz.questions.length - 1 ? "See my result" : "Next question"}
        </button>
      </div>
    `;

    const feedbackBox = feedback.querySelector(".quiz-feedback");
    if (feedbackBox) feedbackBox.focus();
    feedback.querySelector("#quiz-next").addEventListener("click", nextQuestion);
  }

  function nextQuestion() {
    if (questionIndex < quiz.questions.length - 1) {
      questionIndex += 1;
      renderQuestion();
    } else {
      renderResult();
    }
  }

  function resultMessage() {
    if (score <= 3) return ["A good place to begin", "The explanations and linked articles will help you build a stronger foundation."];
    if (score <= 6) return ["Building a solid foundation", "You have a useful foundation and several clear areas for further exploration."];
    if (score <= 8) return ["Strong understanding", "You have a strong grasp of the Bible’s message, structure and interpretation."];
    return ["Excellent result", "You demonstrated an excellent understanding across the full range of questions."];
  }

  function renderResult() {
    const message = resultMessage();
    const recommendations = Array.from(missedLinks.entries()).slice(0, 4);
    const recommendationHtml = recommendations.length
      ? `
        <h3>Suggested next reading</h3>
        <div class="quiz-result-links">
          ${recommendations.map(([url, label]) => `<a class="quiz-result-link" href="${escapeHtml(url)}">${escapeHtml(label)}</a>`).join("")}
        </div>
      `
      : `
        <h3>Keep exploring</h3>
        <div class="quiz-result-links">
          <a class="quiz-result-link" href="/start-here/">Follow the Start Here pathway</a>
          <a class="quiz-result-link" href="/articles/">Browse all articles</a>
        </div>
      `;

    container.innerHTML = `
      <div class="quiz-result">
        <p class="eyebrow">Quiz complete</p>
        <h2>${message[0]}</h2>
        <p class="quiz-score">${score} / ${quiz.questions.length}</p>
        <p>${message[1]}</p>
        ${recommendationHtml}
        <div class="quiz-actions" style="justify-content:center">
          <button class="quiz-button" id="quiz-restart" type="button">Try again</button>
          <a class="quiz-button secondary" href="/articles/">Browse articles</a>
        </div>
      </div>
    `;

    container.querySelector("#quiz-restart").addEventListener("click", restartQuiz);
    container.querySelector("h2").setAttribute("tabindex", "-1");
    container.querySelector("h2").focus();
  }

  function restartQuiz() {
    questionIndex = 0;
    score = 0;
    answered = false;
    missedLinks.clear();
    renderQuestion();
  }

  function showError() {
    container.innerHTML = `
      <div class="quiz-error">
        <h2>The quiz could not be loaded</h2>
        <p>Please refresh the page. If the problem continues, check that the quiz data file has been uploaded to <code>assets/data</code>.</p>
      </div>
    `;
  }

  fetch(dataUrl)
    .then(function (response) {
      if (!response.ok) throw new Error("Quiz data request failed");
      return response.json();
    })
    .then(function (data) {
      if (!data || !Array.isArray(data.questions) || data.questions.length < 10) {
        throw new Error("The quiz must contain at least ten questions");
      }

      quiz = Object.assign({}, data, {
        questions: chooseQuestions(data.questions, 10)
      });
      renderQuestion();
    })
    .catch(showError);
})();
