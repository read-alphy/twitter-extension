const createQAToggle = (question, answer) => {
  const qaElement = document.createElement("div");
  const questionElement = document.createElement("h3");
  const answerElement = document.createElement("p");

  questionElement.textContent = question;
  answerElement.textContent = answer;
  answerElement.style.display = "none";

  questionElement.addEventListener("click", () => {
    answerElement.style.display =
      answerElement.style.display === "none" ? "block" : "none";
  });

  qaElement.appendChild(answerElement);
  return qaElement;
};

const renderQA = (qaData) => {
  const qaContainer = document.getElementById("qa-container");
  for (const question in qaData) {
    const answer = qaData[question].answer;
    const qaToggle = createQAToggle(question, answer);
    qaContainer.appendChild(qaToggle);
  }
};

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "showQA") {
    renderQA(message.data);
  }
});
