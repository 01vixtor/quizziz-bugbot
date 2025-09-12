const quizData = [
  {
    question: "Você está <span class='highlight-red'>perdendo</span> <span class='highlight-green'>dinheiro</span> com apostas? 💸",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Não, mas sempre fico preocupado"],
    feedback: "Sozinho é fácil <span class='highlight-red'>perder</span>. Mas existe uma forma de mudar isso."
  },
  {
    question: "Você se sente confiante ao identificar oportunidades reais de lucro sozinho? 🤔",
    answers: ["Nunca", "Quase nunca", "Às vezes", "Sim, mas com dúvidas"],
    feedback: "Mesmo apostadores experientes erram sozinho. A IA te dá vantagem."
  },
  {
    question: "Com que frequência você confia apenas na sorte ao apostar? 🎲",
    answers: ["Sempre", "Frequentemente", "Às vezes", "Quase nunca"],
    feedback: "Confiar na sorte sozinho é arriscado. Informação = <span class='highlight-green'>ganho</span>."
  },
  {
    question: "Você já perdeu oportunidades de lucro por não ter alertas rápidos? ⏱️",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Nunca"],
    feedback: "A IA garante que você seja informado no momento certo."
  },
  {
    question: "Ter alertas prontos e uma comunidade ativa ajudaria você a <span class='highlight-green'>ganhar</span> mais? 📈",
    answers: ["Sim, imediatamente", "Claro", "Com certeza", "Talvez, mas vale tentar"],
    feedback: "Exatamente, é assim que nosso grupo maximiza oportunidades."
  },
  {
    question: "Você quer parar de perder e começar a aproveitar cada oportunidade de lucro? 💰",
    answers: ["Sim, quero agora", "Sim, definitivamente", "Claro", "Com certeza"],
    feedback: "Ótimo! O próximo passo é garantir sua vaga no grupo."
  }
];

const quizEl = document.getElementById("quiz");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

let currentQuestion = 0;

function loadQuestion() {
  feedbackEl.innerHTML = "";
  const q = quizData[currentQuestion];
  progressEl.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;

  quizEl.innerHTML = `
    ${currentQuestion === 0 ? `<h1>${q.question}</h1>` : `<h2 class="question">${q.question}</h2>`}
    ${q.answers.map(ans => `<button class="answer-btn">${ans}</button>`).join('')}
  `;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.style.animationDelay = `${index * 0.1}s`;
    btn.addEventListener("click", () => selectAnswer(btn));
  });
}

function selectAnswer(button
