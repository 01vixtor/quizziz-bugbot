const quizData = [
  { question: "Você está perdendo dinheiro com apostas? 💸",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Não, mas sempre fico preocupado"],
    feedback: "Sozinho é fácil perder. Mas existe uma forma de mudar isso." },
  { question: "Você se sente confiante ao identificar oportunidades reais de lucro sozinho? 🤔",
    answers: ["Nunca", "Quase nunca", "Às vezes", "Sim, mas com dúvidas"],
    feedback: "Mesmo apostadores experientes erram sozinho. A IA te dá vantagem." },
  { question: "Com que frequência você confia apenas na sorte ao apostar? 🎲",
    answers: ["Sempre", "Frequentemente", "Às vezes", "Quase nunca"],
    feedback: "Confiar na sorte sozinho é arriscado. Informação = ganho." },
  { question: "Você já perdeu oportunidades de lucro por não ter alertas rápidos? ⏱️",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Nunca"],
    feedback: "A IA garante que você seja informado no momento certo." },
  { question: "Ter alertas prontos e uma comunidade ativa ajudaria você a ganhar mais? 📈",
    answers: ["Sim, imediatamente", "Claro", "Com certeza", "Talvez, mas vale tentar"],
    feedback: "Exatamente, é assim que nosso grupo maximiza oportunidades." },
  { question: "Você quer parar de perder e começar a aproveitar cada oportunidade de lucro? 💰",
    answers: ["Sim, quero agora", "Sim, definitivamente", "Claro", "Com certeza"],
    feedback: "Ótimo! O próximo passo é garantir sua vaga no grupo." }
];

const quizEl = document.getElementById("quiz");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentQuestion = 0;

function loadQuestion() {
  feedbackEl.innerHTML = "";
  const q = quizData[currentQuestion];
  progressText.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
  progressFill.style.width = `${(currentQuestion / quizData.length) * 100}%`;

  const titleHtml = currentQuestion === 0
    ? `<h1>${q.question}</h1>`
    : `<h2 class="question">${q.question}</h2>`;

  quizEl.innerHTML = `${titleHtml} ${q.answers.map(ans => `<button class="answer-btn">${ans}</button>`).join('')}`;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.style.animation = `fadeInBtn 0.5s forwards`;
    btn.style.animationDelay = `${index * 0.1}s`;
    btn.classList.remove("selected");
    btn.addEventListener("click", () => selectAnswer(btn));
  });
}

function selectAnswer(button) {
  // remove seleção anterior da pergunta
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.classList.remove("selected"));

  // marca apenas o botão clicado
  button.classList.add("selected");
  feedbackEl.innerHTML = quizData[currentQuestion].feedback;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      progressFill.style.width = `${(currentQuestion / quizData.length) * 100}%`;
    } else {
      document.querySelector(".quiz-container").classList.add("hidden");
      resultEl.classList.remove("hidden");
      progressFill.style.width = `100%`;
    }
  }, 700);
}

loadQuestion();
