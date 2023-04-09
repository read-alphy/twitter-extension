const targetSelector =
  "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c";

const container = document.createElement("div");

const waitForElement = async (selector) => {
  while (!document.querySelector(selector)) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};

const getIdFromUrl = () => {
  const regex = /spaces\/(.+)/;
  const match = window.location.href.match(regex);
  return match ? match[1] : null;
};

const fetchSummary = async (id) => {
  const response = await fetch(
    `https://backend-production-33df.up.railway.app/summaries/spaces/${id}`
  );
  if (response.status === 404) {
    return null;
  }
  const data = await response.json();
  return data.key_qa;
};

const injectButton = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.padding = "12px";
  wrapper.style.margin = "12px 0px";
  wrapper.style.border = "1px solid #2F3336";
  wrapper.style.borderRight = "none";
  wrapper.style.borderLeft = "none";

  const prompt = document.createElement("div");
  prompt.innerText =
    "Looks like this spaces haven't been summarized yet. Would you like to summarize it now?";
  prompt.style.marginBottom = "10px";
  prompt.style.fontSize = "20px";

  const button = document.createElement("button");
  button.innerText = "Call Alphy";
  button.addEventListener("click", () => {
    window.location.href = "https://alphy.app";
  });
  button.style.backgroundColor = "#EDF1F2";
  button.style.border = "none";
  button.style.borderRadius = "9999px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.color = "rgb(56,61,64)";
  // Add custom button styles here
  wrapper.appendChild(prompt);
  wrapper.appendChild(button);
  container.appendChild(wrapper);
};

const createQAToggle = (question, answer) => {
  const id = window.location.href.split("/").pop();
  const qaElement = document.createElement("div");
  const horizontalDiv = document.createElement("div");
  const textContainer = document.createElement("div");
  const questionElement = document.createElement("div");
  const answerElement = document.createElement("div");
  const rightDiv = document.createElement("div");
  const watermark = document.createElement("div");
  const shareDiv = document.createElement("div");

  watermark.innerHTML = "AI answer powered by ";
  //   add @alphy a link
  const waterMarkLink = document.createElement("a");
  waterMarkLink.style.color = "rgb(29,155,240)";
  waterMarkLink.style.textDecoration = "none";
  waterMarkLink.style.fontSize = "15px";
  //   on mouseover
  waterMarkLink.onmouseover = function () {
    waterMarkLink.style.textDecoration = "underline";
  };
  waterMarkLink.onmouseout = function () {
    waterMarkLink.style.textDecoration = "none";
  };

  // inner html is @alphy
  waterMarkLink.innerHTML = "@alphyapp";
  //   add a link to the alphy app
  waterMarkLink.href = "https://twitter.com/alphyapp";
  watermark.appendChild(waterMarkLink);

  watermark.style.fontSize = "15px";
  watermark.style.color = "rgb(113, 118, 123)";
  watermark.style.margin = "5px 0px";

  // Set up the main container
  qaElement.style.display = "flex";
  qaElement.style.borderBottom = "0.1px solid #2F3336";
  qaElement.style.padding = "12px";
  qaElement.style.transition = "background-color 0.3s ease-in-out";

  // Set up the horizontal div
  horizontalDiv.style.width = "48px";
  horizontalDiv.style.flexShrink = "0"; // Prevent the div from shrinking

  // craeate an image with 48 48 with full round and add it to the horizontal div as flex items start
  const img = document.createElement("img");
  img.src =
    "https://pps.whatsapp.net/v/t61.24694-24/328739635_909547710387432_3889929867912741049_n.jpg?ccb=11-4&oh=01_AdRErrJz2BDEwF4yS6a3AUqK7nTb2defUSB99N-Jya9ECA&oe=643EED71";
  img.style.width = "48px";
  img.style.height = "48px";
  img.style.borderRadius = "50%";
  img.style.objectFit = "cover";
  img.style.cursor = "pointer";
  //   href to the alphy app
  img.onclick = function () {
    // window.open("https://twitter.com/alphyapp"); this is the old way
    window.location.href = "https://twitter.com/alphyapp";
  };

  horizontalDiv.appendChild(img);

  // Set up the text container
  textContainer.style.display = "flex";
  textContainer.style.flexDirection = "column";
  textContainer.style.justifyContent = "flex-start";
  //   1.5 is the default line height
  textContainer.style.lineHeight = "1.3";

  shareDiv.style.display = "flex";
  shareDiv.style.justifyContent = "space-around";
  shareDiv.style.width = "calc(100% - 48px)";
  const shareWrapper = document.createElement("div");
  shareWrapper.style.display = "flex";
  shareWrapper.style.justifyContent = "center";
  shareWrapper.style.alignItems = "center";
  shareWrapper.style.width = "35px";
  shareWrapper.style.height = "35px";
  shareWrapper.style.borderRadius = "50%";

  const linkWrapper = document.createElement("div");
  linkWrapper.style.display = "flex";
  linkWrapper.style.justifyContent = "center";
  linkWrapper.style.alignItems = "center";
  linkWrapper.style.width = "35px";
  linkWrapper.style.height = "35px";
  linkWrapper.style.borderRadius = "50%";

  // Create the share icon SVG element
  const shareIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  shareIcon.setAttribute("viewBox", "0 0 24 24");
  shareIcon.style.width = "18.75px";
  shareIcon.style.height = "18.75px";

  // Create the share icon path element
  const shareIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  shareIconPath.setAttribute("fill", "#575A5E");
  shareIconPath.setAttribute(
    "d",
    "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
  );

  // Append the share icon path to the share icon SVG
  shareIcon.appendChild(shareIconPath);
  shareWrapper.appendChild(shareIcon);
  shareWrapper.style.cursor = "pointer";
  //   on click, share a tweet with the question and answer
  shareWrapper.onclick = function () {
    const maxTweetLength = 280;
    let baseText = "";
    const initialLength =
      `🤔 ${question}\n\n@alphyapp 🤖: ${answer}\n\nhttps://alphy.app/sp/${id}`
        .length;
    if (initialLength < maxTweetLength) {
      baseText = `🤔 ${question}\n\n@alphyapp 🤖: ${answer}\n\nhttps://alphy.app/sp/${id}`;
    } else {
      baseText = `🤔 ${question} - a 🧵 by @alphyapp\n\n 🤖: ${answer}`;
    }

    const words = baseText.split(" ");
    let currentTweet = "";
    let tweetParts = [];

    words.forEach((word) => {
      if ((currentTweet + word).length > maxTweetLength - 4) {
        tweetParts.push(currentTweet.trim() + "👇");
        currentTweet = "";
      }

      currentTweet += word + " ";
    });

    tweetParts.push(currentTweet.trim());
    const encodedTweetParts = tweetParts.map((part) =>
      encodeURIComponent(part)
    );
    const tweet = `https://twitter.com/intent/tweet?text=${encodedTweetParts.join(
      "%0A%0A"
    )}`;

    console.log(tweet);

    window.open(tweet);
  };

  shareWrapper.addEventListener("mouseover", () => {
    shareWrapper.style.backgroundColor = "rgba(0,186,124,0.1)";
    shareIconPath.setAttribute("fill", "green");
  });
  shareWrapper.addEventListener("mouseout", () => {
    shareWrapper.style.backgroundColor = "transparent";
    shareIconPath.setAttribute("fill", "#575A5E");
  });

  shareDiv.appendChild(shareWrapper);

  const linkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  linkIcon.setAttribute("viewBox", "0 0 24 24");
  linkIcon.style.width = "18.75px";
  linkIcon.style.height = "18.75px";

  const linkIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  linkIconPath.setAttribute("fill", "#575A5E");
  linkIconPath.setAttribute(
    "d",
    "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
  );

  linkIcon.appendChild(linkIconPath);
  linkWrapper.appendChild(linkIcon);
  linkWrapper.style.cursor = "pointer";
  linkWrapper.addEventListener("mouseover", () => {
    linkWrapper.style.backgroundColor = "rgba(29,155,240,0.1)";
    linkIconPath.setAttribute("fill", "rgb(29,155,240)");
  });
  linkWrapper.addEventListener("mouseout", () => {
    linkWrapper.style.backgroundColor = "transparent";
    linkIconPath.setAttribute("fill", "#575A5E");
  });

  linkWrapper.addEventListener("click", () => {
    window.open(`https://alphy.app/sp/${id}`, "_blank");
  });

  shareDiv.appendChild(linkWrapper);

  // Set up the question and answer elements
  questionElement.textContent = question;
  questionElement.style.fontWeight = "bold";
  questionElement.style.cursor = "pointer";

  answerElement.textContent = answer;
  answerElement.style.display = "block";

  questionElement.addEventListener("click", () => {
    answerElement.style.display =
      answerElement.style.display === "none" ? "block" : "none";
    horizontalDiv.style.display =
      horizontalDiv.style.display === "none" ? "block" : "none";
    watermark.style.display =
      watermark.style.display === "none" ? "block" : "none";
    shareDiv.style.display =
      shareDiv.style.display === "none" ? "flex" : "none";
  });

  qaElement.addEventListener("mouseover", () => {
    qaElement.style.backgroundColor = "#090908";
  });
  qaElement.addEventListener("mouseout", () => {
    qaElement.style.backgroundColor = "#010001";
  });

  // Append the elements to their respective containers
  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "column";
  rightDiv.style.paddingLeft = "12px";
  rightDiv.appendChild(questionElement);
  rightDiv.appendChild(watermark);
  rightDiv.appendChild(answerElement);

  textContainer.appendChild(rightDiv);
  textContainer.appendChild(shareDiv);
  qaElement.appendChild(horizontalDiv);
  qaElement.appendChild(textContainer);

  return qaElement;
};

const renderQA = (qaData) => {
  const loading = document.createElement("div");
  // loading
  loading.style.display = "flex";
  loading.style.justifyContent = "center";
  loading.style.alignItems = "center";
  loading.style.backgroundColor = "#010001";
  loading.style.padding = "15px 0";

  const spinner = document.createElement("div");
  spinner.style.border = "4px solid rgba(0, 0, 0, 0.1)";
  spinner.style.width = "36px";
  spinner.style.height = "36px";
  spinner.style.borderRadius = "50%";
  spinner.style.borderLeftColor = "#1C9BF1";
  spinner.style.animation = "spin 1s linear infinite";
  loading.appendChild(spinner);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @font-face {
        font-family: 'Twitter Chirp';
        src: url('/fonts/chirp_heavy.otf') format('opentype'),
            url('/fonts/chirp_light.otf') format('opentype'),
            url('/fonts/chirp_medium.otf') format('opentype'),
            url('/fonts/chirp_regular.otf') format('opentype'),
            url('/fonts/chirp_bold.otf') format('opentype'),
            url('/fonts/chirp_thin.ttf') format('truetype'),
            url('/fonts/Chirp Web Bold.ttf') format('truetype'),
            url('/fonts/Chirp Web Heavy.ttf') format('truetype'),
            url('/fonts/Chirp Web Medium.ttf') format('truetype'),
            url('/fonts/Chirp Web.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
  `;
  document.head.appendChild(style);

  loading.style.display = "none";

  const askQuestion = document.createElement("form");
  askQuestion.style.display = "flex";
  askQuestion.style.alignItems = "center";
  askQuestion.style.padding = "12px 0px";
  askQuestion.style.margin = "0px 12px";
  askQuestion.style.borderTop = "0.1px solid #2F3336";

  const askQuestionImage = document.createElement("img");
  askQuestionImage.src =
    "https://pps.whatsapp.net/v/t61.24694-24/328739635_909547710387432_3889929867912741049_n.jpg?ccb=11-4&oh=01_AdRErrJz2BDEwF4yS6a3AUqK7nTb2defUSB99N-Jya9ECA&oe=643EED71";
  askQuestionImage.style.width = "48px";
  askQuestionImage.style.height = "48px";
  askQuestionImage.style.borderRadius = "50%";
  askQuestionImage.style.objectFit = "cover";
  askQuestionImage.style.marginRight = "12px";

  const askQuestionInput = document.createElement("input");
  askQuestionInput.type = "text";
  askQuestionInput.placeholder = "Ask a Question to the trancript...";
  askQuestionInput.style.width = "100%";
  askQuestionInput.style.border = "none";
  askQuestionInput.style.borderRadius = "4px";
  askQuestion.style.height = "50px";
  askQuestionInput.style.padding = "12px 0px";
  askQuestionInput.style.fontSize = "20px";
  askQuestionInput.style.backgroundColor = "transparent";
  askQuestionInput.style.color = "white";
  //   on focus no border
  askQuestionInput.addEventListener("focus", () => {
    askQuestionInput.style.border = "none";
    askQuestionInput.style.outline = "none";
  });

  const askQuestionButton = document.createElement("button");
  askQuestionButton.type = "submit";
  askQuestionButton.textContent = "Ask!";
  askQuestionButton.style.fontSize = "15px";
  askQuestionButton.style.fontWeight = "bold";
  askQuestionButton.style.border = "none";
  askQuestionButton.style.borderRadius = "9999px";
  askQuestionButton.style.padding = "0 16px";
  askQuestionButton.style.backgroundColor = "#1C9BF1";
  askQuestionButton.style.color = "white";
  askQuestionButton.style.cursor = "pointer";
  askQuestionButton.style.marginLeft = "12px";
  askQuestionButton.style.height = "36px";
  askQuestionButton.disabled = true;
  askQuestionButton.style.filter = "brightness(50%)";
  //   if the input is empty, or if the input is more than 1000 characters, then disable the button
  askQuestionInput.addEventListener("input", () => {
    if (askQuestionInput.value.length === 0) {
      askQuestionButton.disabled = true;
      askQuestionButton.style.filter = "brightness(50%)";
    } else if (askQuestionInput.value.length > 1000) {
      askQuestionButton.disabled = true;
      askQuestionButton.style.filter = "brightness(50%)";
    } else {
      askQuestionButton.disabled = false;
      askQuestionButton.style.backgroundColor = "#1C9BF1";
      askQuestionButton.style.filter = "brightness(100%)";
    }
  });

  askQuestionButton.addEventListener("mouseover", () => {
    // blend darken
    askQuestionButton.style.backgroundColor = "#1F8BD8";
  });
  askQuestionButton.addEventListener("mouseout", () => {
    askQuestionButton.style.backgroundColor = "#1C9BF1";
  });

  askQuestion.appendChild(askQuestionImage);
  askQuestion.appendChild(askQuestionInput);
  askQuestion.appendChild(askQuestionButton);

  //   make the request to the backend
  askQuestion.addEventListener("submit", (e) => {
    e.preventDefault();
    // first check if the question is empty or is more than 1000 characters
    if (askQuestionInput.value.length === 0) {
      alert("Please enter a question");
      return;
    }
    if (askQuestionInput.value.length > 1000) {
      alert("Please enter a question that is less than 1000 characters");
      return;
    }

    loading.style.display = "flex";
    const id = window.location.pathname.split("/").pop();
    const url = `https://backend-production-33df.up.railway.app/summaries/spaces/${id}/question`;
    const body = askQuestionInput.value;
    const question = askQuestionInput.value;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // update the qaData
        qaData[question] = data;
        // clear the input
        askQuestionInput.value = "";
        // render the new qa
        const qaToggle = createQAToggle(question, data.answer);
        const qaContainer = document.getElementById("qa-container");
        // qaContainer.appendChild(qaToggle);
        qaContainer.insertBefore(qaToggle, qaContainer.firstChild);
      })
      .finally(() => {
        loading.style.display = "none";
      });
  });
  const hrLine = document.createElement("hr");

  hrLine.style.border = "none";
  hrLine.style.borderTop = "0.1px solid #2F3336";

  const qaContainer = document.createElement("div");
  qaContainer.id = "qa-container";

  for (const question in qaData) {
    const answer = qaData[question].answer;
    const qaToggle = createQAToggle(question, answer);
    qaContainer.appendChild(qaToggle);
  }

  container.appendChild(askQuestion);
  container.appendChild(loading);
  container.appendChild(hrLine);
  container.appendChild(qaContainer);
};

(async () => {
  await waitForElement(targetSelector);
  const id = getIdFromUrl();
  container.id = "wrapper";

  container.style.backgroundColor = "#010001";
  container.style.color = "white";
  container.style.padding = "12px 0px";
  container.style.margin = "16px 0px";
  container.style.borderRadius = "12px";
  container.style.fontFamily = "Chirp Heavy, sans-serif";
  if (id) {
    const qaData = await fetchSummary(id);
    if (!qaData) {
      injectButton();
    } else {
      renderQA(qaData);
      console.log("qa will be showed");
    }
  }

  document.querySelector(targetSelector).appendChild(container);
})();
