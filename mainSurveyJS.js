//Set of questions and answers
//Give each answer an identifier
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
      name: "awareness",
      string: `<p>Based on the results of this quiz, the <b>awareness</b> stage within your marketing funnel may be the best place to start when developing a video.</p>
      <p>The awareness stage is at the top of the marketing funnel, often the first step on the way to becoming your customer.</p> 
      <p>Here, the audience is just starting to realize they have a problem that needs solving. They likely do not know how you could help or even that you exist.  At this point, we want to grab attention and make them aware of your brand. You do not want to get too heavy with selling yet, but you do want to educate, entertain, or otherwise engage your leads.</p>
      <p>You might not have considered video as awareness stage content, but certain kinds of videos are ideal for captivating your target audience on a large scale and drawing them in by speaking to their values, cares, and concerns.</p>
      <h3>Here is a showcase of various awareness videos we have developed for our customers: </h3>
      `,
      image: "awareness.png",
      video: `https://vimeo.com/showcase/8327803/embed`,
    };
  } else if (lowestCategory >= engagementDigit) {
    lowest = {
      value: engagementDigit,
      name: "engagement",
      string: `<p>Based on the results of this quiz, the <b>engagement</b> stage within your marketing funnel may be the best place to start when developing a video plan.</p>
      <p>The engagement (sometimes refered to as <em>consideration</em>) stage is within the middle of the marketing funnel, often the second step on the way to becoming your customer.</p> 
      <p>Here, the audience is more knowledgeable about their problem or need than they were at the awareness stage, and now they're researching all the potential solutions. They likely don't know how you could help or even that you exist.  At this point, we want to grab attention and make them aware of your brand. You don't want to get too heavy with selling yet, but you do want to educate, entertain or otherwise engage your leads.</p>
      <p>At this level, leads are more engaged than they were at the top of the funnel, but they're also becoming more aware of their options, your competitors and how they differ from you.</p>
      <h3>Here is a showcase of various engagement videos we have developed for our customers: </h3>
      `,
      image: "engagement.png",
      video: `https://vimeo.com/showcase/8328080/embed`,
    };
  } else if (lowestCategory >= conversionDigit) {
    lowest = {
      value: conversionDigit,
      name: "conversion",
      string: `<p>Based on the results of this quiz, the <b>conversion</b> stage within your marketing funnel may be the best place to start when developing a video plan.</p>
      <p>The conversion stage is one of the last stops within the marketing funnel, and your potential customer already has a degree of purchase intent.</p> 
      <p>Here, the audience is sufficiently educated about their needs, knows the solution to their problem and is at the point of making a purchase decision. They have you, along with all your competitors, in mind and likely are seeking answers to more nuanced questions they have left before becoming a customer.</p>
      <p>At this level, leads are looking at the finer details the video content should reflect this along with presenting an easy path to making a purchase, or conversion. Depending on the type of product or service, these details usually refer to price, quality, process and timelines.</p>
      <h3>Here is a showcase of various conversion videos we have developed for our customers: </h3>
      `,
      image: "conversion.png",
      video: `https://vimeo.com/showcase/8328098/embed`,
    };
  } else if (lowestCategory >= retentionDigit) {
    lowest = {
      value: retentionDigit,
      name: "retention",
      string: `<p>Based on the results of this quiz, the <b>retention</b> stage within your marketing funnel may be the best place to start when developing a video plan.</p>
      <p>The retention stage is the last stop within the marketing funnel and is a tactic used to keep a customer you already have. Within this stage, the customer has used your product or service and may need a reason, or reminder, to come back in the future.</p> 
      <p>At this stage, consumers are expecting more interaction with their brands, which means a brand’s content needs to build an ongoing relationship with its customers. In an era of increased competition (mostly because of the internet), thoughtfully building a video portfolio designed around retaining and delighting your customers is crucial.</p>
      <h3>Here is a showcase of various retention videos we have developed for our customers: </h3>
      `,
      image: "retention.png",
      video: `https://vimeo.com/showcase/8328122/embed`,
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
  //            <p>Awareness Score: ${awarenessDigit}/8, Engagement Score: ${engagementDigit}/8 </br>Conversion Score ${conversionDigit}/8, Retention Score ${retentionDigit}/8</p>
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = `
         <div class="summary">
            <h1>Results Summary</h1>
            <p>Your lowest score was within the <em>${lowest.name}</em> stage of the marketing funnel.</p>
            ${lowest.string}
            <iframe title="vimeo-player" src="${lowest.video}" width="800" height="520" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="result">
        <hr></hr>
            <h2>More on the Marketing Funnel Framework</h2>
            <p>The full funnel framework is a handy model for the individual stages a potential customer goes through when 
            making a purchasing decision. Using this framework as a backbone to a video strategy helps place your video marketing assets along the funnel top 
            to bottom. Ideally, potential customers will be able to view a video for your business across each stage of the funnel.</p> 
            <p>Having at least one video per stage 
            is the key to a full video marketing strategy. </p>
            <hr></hr>
            <img class="funnelimg" src="https://www.tripwiremedia.com/wp-content/uploads/2021/04/Tunnel-v3-02.svg"></img>
            <br/>
            <h3>Funnel Stages</h3>
            <p><b>Awareness:</b> Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get 
            people to buy in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher 
            stake action. Here you&rsquo;re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
            
            <p><b>Engagement:</b> By building your community (whether via email list, social media following, subscribers or other methods), and positioning your 
            brand as a trusted expert in your field you’ll be solidifying the brand awareness achieved and moving your customer towards a conversion. The goal 
            here is to create and encourage engagement around helpful content, which provides value for your audience and aims to educate, inspire or entertain 
            (not to sell). Open up the conversation with your ideal customer and become their go-to source for the niche.</p>
            
            <p><b>Conversion:</b> Probably the most important goal in a marketing strategy, as without conversions (eg; customers, subscribers, registrations, sales) 
            you don’t have a business. The goal here is to reduce any friction around a conversion taking place. Deal with any final concerns that a potential 
            customer has to ensure the sale. Improve your conversion ratio by humanizing the sales process or overcoming any lingering trust concerns. Here you 
            do need to communicate the facts and figures around your product or service, And the end goal here is to increase your bottom line.</p>
            
            <p><b>Retention:</b> Once a customer is gained it is important to ensure a positive customer experience through the initial post-sale period and onwards 
            toward building a long-term relationship with each customer and therefore an increased lifetime value. The goal here is to surprise, delight and deepen 
            the relationship with your customer to build loyalty and advocacy. Where possible video content implemented for this goal should be personalized, direct 
            and allow for human connection.</p>
            </div>
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
