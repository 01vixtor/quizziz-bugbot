const quizData = [
  {
    question: "Você já perdeu dinheiro em apostas acreditando que tinha encontrado uma boa chance?",
    answers: ["Sim, várias vezes", "Algumas vezes", "Poucas vezes", "Não, mas sempre fico com medo disso"],
    feedback: "Todos já passaram por isso… mas existe uma forma de virar o jogo."
  },
  {
    question: "Quando aposta, você tem 100% de certeza que está explorando a melhor oportunidade?",
    answers: ["Nunca", "Quase nunca", "Às vezes", "Sim, mas sempre fico em dúvida"],
    feedback: "A verdade é que sozinho ninguém consegue identificar todas as melhores chances."
  },
  {
    question: "Você confia mais na sorte ou em informação real para lucrar?",
    answers: ["Só na sorte (e perco)", "Mais sorte que informação", "Tento analisar, mas erro bastante", "Uso análise, mas sei que sozinho não é suficiente"],
    feedback: "Informação é poder. E a IA é a única que consegue analisar tudo em tempo real."
  },
  {
    question: "Já ficou sabendo de pessoas que lucraram explorando falhas das casas e pensou 'por que não eu'?",
    answers: ["Sim, várias vezes", "Sim, já", "Algumas vezes", "Não, mas sei que existe"],
    feedback: "Essas pessoas aproveitaram o que outros deixaram passar. Você também pode."
  },
  {
    question: "Se tivesse uma IA que varre as casas 24h por dia, encontrando bugs e oportunidades, você usaria?",
    answers: ["Sim, agora mesmo", "Claro, seria perfeito", "Sem dúvida", "Talvez, mas sei que perderia ficando fora"],
    feedback: "É exatamente isso que nosso grupo oferece."
  },
  {
    question: "Você prefere continuar testando sozinho e perdendo dinheiro, ou receber alertas prontos da IA com bugs confirmados?",
    answers: ["Quero os alertas da IA", "IA + comunidade é o que preciso", "Sozinho já vi que não dá", "IA é o futuro, não tem como competir"],
    feedback: "Faz sentido: sozinho é perda, em grupo com IA é ganho."
  },
  {
    question: "Quando um bug aparece, o tempo para aproveitar é curto. Você prefere estar informado imediatamente ou descobrir depois que já acabou?",
    answers: ["Imediatamente, claro", "Antes de todos", "Não quero perder oportunidades", "Qualquer opção mostra que não quero ficar de fora"],
    feedback: "No grupo, você recebe o alerta na hora certa."
  },
  {
    question: "Você está pronto para entrar no grupo e ter acesso direto à IA que encontra os bugs mais lucrativos?",
    answers: ["Sim, quero agora", "Com certeza, não dá pra perder", "Sim, preciso disso", "Sim, sem dúvida"],
    feedback: "Ótimo, você já entendeu que o próximo passo é entrar no grupo."
  }
];

const quizEl = document.getElementById("quiz");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

let currentQuestion = 0;

function loadQuestion() {
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");

  const q = quizData[currentQuestion];
  progressEl.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;

  quizEl.innerHTML = `
    <h2>${q.question}</h2>
    ${q.answers.map((answer, i) => 
      `<button onclick="selectAnswer(${i})">${answer}</button>`
    ).join("")}
  `;
}

function selectAnswer(index) {
  feedbackEl.textContent = quizData[currentQuestion].feedback;
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").classList.add("hidden");
    resultEl.classList.remove("hidden");
  }
});

loadQuestion();
