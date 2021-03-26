//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
// add in an option 4
const option4 = document.querySelector(".option4");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".result");

//Function to generate question
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  //Populate html elements
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute("data-total", `${option1Total}`);
  option2.setAttribute("data-total", `${option2Total}`);
  option3.setAttribute("data-total", `${option3Total}`);
  option4.setAttribute("data-total", `${option4Total}`);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
  option3.innerHTML = `${question.answer3}`;
  option4.innerHTML = `${question.answer4}`;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert("Please select an answer to continue");
    return;
  }
  //Get value of selected radio
  const answerScore = Number(
    selectedOption.nextElementSibling.getAttribute("data-total")
  );

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push();

  const totalScore = score.reduce((total, currentNum) => total + currentNum);
  let lowest = "";

  const awarenessDigit = ("" + totalScore)[3];
  const engagementDigit = ("" + totalScore)[2];
  const conversionDigit = ("" + totalScore)[1];
  const retentionDigit = ("" + totalScore)[0];
  const lowestCategory = Math.min(
    awarenessDigit,
    engagementDigit,
    conversionDigit,
    retentionDigit
  );

  if (lowestCategory >= awarenessDigit) {
    lowest = {
      value: awarenessDigit,
      name: "Awareness",
      string: "",
      image: "awareness.png",
    };
  } else if (lowestCategory >= engagementDigit) {
    lowest = {
      value: engagementDigit,
      name: "Engagement",
      string: "",
      image: "engagement.png",
    };
  } else if (lowestCategory >= conversionDigit) {
    lowest = {
      value: conversionDigit,
      name: "Conversion",
      string: "",
      image: "conversion.png",
    };
  } else if (lowestCategory >= retentionDigit) {
    lowest = {
      value: retentionDigit,
      name: "Retention",
      string: "",
      image: "retention.png",
    };
  }

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  //If the quiz is finished then we hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = `
         <div class="summary">
            <h1>Here are your results:</h1>
            <p>Awareness Score: ${awarenessDigit}, Engagement Score: ${engagementDigit} </br>Conversion Score ${conversionDigit}, Retention Score ${retentionDigit}</p>
            <p>Your lowest value was within the <em>${lowest.name}</em> marketing pillar.</p>
            <p>${lowest.string}</p>
            <img src="${lowest.image}">
        </div>
        <div class="result">
        
            <h2>About The Funnel Framework</h2><p>The full funnel framework is a handy model for the individual stages a potential customer goes through when 
            making a purchasing decision. Using this framework as a backbone to a video strategy helps place our video marketing assets along the funnel top 
            to bottom. Ideally, potential customers will be able to view a video for your business across each stage of the funnel.</p>
            <h3>Funnel Stages</h3>
            
            <p><b>Awareness:</b>Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get 
            people to buy-in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher 
            stake action. Here you&rsquo;re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
            
            <p><b>Engagement:</b> By building your community (whether via email list, social media following, subscribers or other method), and positioning your 
            brand as a trusted expert in your field you’ll be solidifying the brand awareness achieved and moving your customer towards a conversion. The goal 
            here is to create and encourage engagement around helpful content, which provides value for your audience and aims to educate, inspire or entertain 
            (not to sell). Open up the conversation with your ideal customer and become their go-to source for niche.</p>
            
            <p><b>Conversion:</b> Probably the most important goal in a marketing strategy, as without conversions (eg; customers, subscribers, registrations, sales) 
            you don’t have a business. The goal here is to reduce any friction around a conversion taking place. Deal with any final concerns that a potential 
            customer has to ensure the sale. Improve your conversion ratio by humanising the sales process or overcoming any lingering trust concerns. Here you 
            do need to communicate the rational facts and figures around your product or service, And the end-goal here, is to increase your bottom line.</p>
            
            <p><b>Retention:</b> Once a customer is gained it is important to ensure a positive customer experience through the initial post-sale period and onwards 
            toward building a long-term relationship with each customer and therefore an increased life time value. The goal here is to surprise, delight and deepen 
            the relationship with your customer to build loyalty and advocacy. Where possible video content implemented for this goal should be personalised, direct 
            and allow for human connection.</p>

        </div>


<button onclick="emailCurrentPage()">Email page</button><br />
        <button class="restart">Restart Quiz</button>
         `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches("button")) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload(); 
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener("click", loadNextQuestion);
previousButton.addEventListener("click", loadPreviousQuestion);
result.addEventListener("click", restartQuiz);
