const quizData = [
  {
    question: "Você já <span class='highlight-red'>perdeu</span> <span class='highlight-green'>dinheiro</span> em apostas achando que tinha uma boa chance?",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Não, mas sempre fico preocupado"],
    feedback: "Sozinho é fácil <span class='highlight-red'>perder</span>. Mas há uma forma de virar o jogo."
  },
  {
    question: "Quando aposta, você tem certeza que está explorando todas as oportunidades?",
    answers: ["Nunca", "Quase nunca", "Às vezes", "Sim, mas sempre com dúvida"],
    feedback: "É impossível analisar sozinho todas as chances; a IA faz isso para você."
  },
  {
    question: "Você confia mais na sorte ou em informação real para <span class='highlight-green'>ganhar</span>?",
    answers: ["Só na sorte (e perco)", "Mais sorte que análise", "Tento analisar, mas erro", "Uso análise, mas sozinho não basta"],
    feedback: "Informação real separa quem <span class='highlight-red'>perde</span> de quem <span class='highlight-green'>ganha</span>."
  },
  {
    question: "Já viu pessoas explorando falhas e pensou 'por que não eu'?",
    answers: ["Sim, várias vezes", "Sim, algumas vezes", "Poucas vezes", "Não, mas sei que existe"],
    feedback: "Elas aproveitaram bugs que passam despercebidos. A IA identifica antes de você."
  },
  {
    question: "Se tivesse uma IA que varre casas 24h por dia encontrando bugs, você usaria?",
    answers: ["Sim, agora mesmo", "Claro, perfeito", "Sem dúvida", "Talvez, mas perderia ficando de fora"],
    feedback: "Exato. Esse é o diferencial do nosso grupo."
  },
  {
    question: "Prefere continuar sozinho ou receber alertas prontos da IA?",
    answers: ["Quero alertas da IA", "IA + comunidade é o que preciso", "Sozinho já vi que não dá", "IA é o futuro, não tem como competir"],
    feedback: "Sozinho = <span class='highlight-red'>perda</span>. Com IA = <span class='highlight-green'>ganho</span>."
  },
  {
    question: "Quando um bug aparece, o tempo para aproveitar é curto. Você prefere ser informado imediatamente ou depois?",
    answers: ["Imediatamente", "Antes de todos", "Não quero perder oportunidades", "Qualquer opção mostra que não quero ficar de fora"],
    feedback: "No grupo, você recebe alertas no tempo certo e maximiza o <span class='highlight-green'>lucro</span>."
  },
  {
    question: "Você está pronto para entrar no grupo e ter acesso direto à IA que encontra os bugs mais lucrativos?",
    answers: ["Sim, quero agora", "Com certeza, não dá para perder", "Sim, preciso disso", "Sim, sem dúvida"],
    feedback: "Perfeito. O próximo passo é garantir sua vaga."
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
    <h2>${q.question}</h2>
    ${q.answers.map(ans => `<button class="answer-btn">${ans}</button>`).join('')}
  `;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => selectAnswer(btn));
  });
}

function selectAnswer(button) {
  document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  feedbackEl.innerHTML = quizData[currentQuestion].feedback;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.querySelector(".quiz-container").classList.add("hidden");
      resultEl.classList.remove("hidden");
    }
  }, 800); // espera 0,8s antes de ir pra próxima
}

loadQuestion();
