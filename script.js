const quizData = [
  { question: "Você está perdendo dinheiro com apostas? 💸",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Não, mas sempre fico preocupado"],
    feedback: "Boa! Você deu o primeiro passo, continue para desbloquear sua recompensa 🎁" },
  { question: "Você se sente confiante ao identificar oportunidades reais sozinho? 🤔",
    answers: ["Nunca", "Quase nunca", "Às vezes", "Sim, mas com dúvidas"],
    feedback: "Excelente! Você está cada vez mais perto da recompensa 🚀" },
  { question: "Com que frequência você confia apenas na sorte ao apostar? 🎲",
    answers: ["Sempre", "Frequentemente", "Às vezes", "Quase nunca"],
    feedback: "Ótima escolha, continue que falta pouco para liberar seu bônus 🔥" },
  { question: "Você já perdeu oportunidades de lucro por não ter alertas rápidos? ⏱️",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Nunca"],
    feedback: "Perfeito, você está quase no fim! 🎯" },
  { question: "Ter alertas prontos e uma comunidade ativa ajudaria você a ganhar mais? 📈",
    answers: ["Sim, imediatamente", "Claro", "Com certeza", "Talvez, mas vale tentar"],
    feedback: "Incrível! Falta só 1 pergunta para destravar sua recompensa 💎" },
  { question: "Você quer parar de perder e começar a aproveitar cada oportunidade de lucro? 💰",
    answers: ["Sim, quero agora", "Sim, definitivamente", "Claro", "Com certeza"],
    feedback: "Show! Agora finalize para liberar seu acesso exclusivo 🚀" }
];

const quizEl = document.getElementById("quiz");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizEl.innerHTML = `<h2>${q.question}</h2>`;
  feedbackEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = answer;
    btn.onclick = () => selectAnswer(btn);
    quizEl.appendChild(btn);
  });

  progressText.innerText = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
}

function selectAnswer(button) {
  // remover seleção anterior
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.classList.remove("selected"));

  // aplicar seleção
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
      startCountdown(3 * 60); // 3 minutos
    }
  }, 700);
}

function startCountdown(seconds) {
  const countdownEl = document.getElementById("countdown");
  let time = seconds;

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    countdownEl.innerText = `⏳ Sua recompensa expira em ${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    
    if (time <= 0) {
      clearInterval(interval);
      countdownEl.innerText = "⚠️ Sua recompensa expirou!";
      document.querySelector(".cta-btn").classList.add("hidden");
    }

    time--;
  }, 1000);
}

loadQuestion();
