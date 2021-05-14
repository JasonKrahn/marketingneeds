//set initial variables

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;
var lowest = "";
let awarenessDigit = "";
let engagementDigit = "";
let conversionDigit = "";
let retentionDigit = "";

//set variables for html elements
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

  
    let awarenessDigit = ("" + totalScore)[3];
    let engagementDigit = ("" + totalScore)[2];
    let conversionDigit = ("" + totalScore)[1];
    let retentionDigit = ("" + totalScore)[0];
  
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
      string: `<p>Your biggest area of opportunity is in the <b>awareness</b> stage of your marketing funnel.</p>
      <p>The  awareness stage is at the top of the marketing funnel, often the first step on the way to becoming your customer.</p> 
      <p>Here, the audience is just starting to realize they have a problem that needs solving. They likely do not know how you could help or even that you exist. At this point, we want to grab attention and make them aware of your brand. You do not want to get too heavy with selling yet, but you do want to educate, entertain, or otherwise engage your leads.</p>
      <p>You might not have considered video as awareness stage content, but certain kinds of videos are ideal for captivating your target audience on a large scale and drawing them in by speaking to their values, cares, and concerns.</p>
      `,
      image: "",
      video: `<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/8327803/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>`,
    };
  } else if (lowestCategory >= engagementDigit) {
    lowest = {
      value: engagementDigit,
      name: "engagement",
      string: `<p>Your biggest area of opportunity is in the <b>engagement</b> stage of your marketing funnel.</p>
      <p>The engagement (sometimes refered to as <em>consideration</em>) stage is within the middle of the marketing funnel, often the second step on the way to becoming your customer.</p> 
      <p>Here, the audience is more knowledgeable about their problem or need than they were at the awareness stage, and now they're researching all the potential solutions. They likely don't know how you could help or even that you exist. At this point, we want to grab attention and make them aware of your brand. You don't want to get too heavy with selling yet, but you do want to educate, entertain or otherwise engage your leads.</p>
      <p>At this level, leads are more engaged than they were at the top of the funnel, but they're also becoming more aware of their options, your competitors and how they differ from you.</p>
      `,
      image: "",
      video: `<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/8328080/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>`,
    };
  } else if (lowestCategory >= conversionDigit) {
    lowest = {
      value: conversionDigit,
      name: "conversion",
      string: `<p>Your biggest area of opportunity is in the <b>conversion</b> stage of the marketing funnel.</p>
      <p>The conversion stage is one of the last stops within the marketing funnel, and your potential customer already has a degree of purchase intent.</p> 
      <p>Here, the audience is sufficiently educated about their needs, knows the solution to their problem and is at the point of making a purchase decision. They have you, along with all your competitors, in mind and likely are seeking answers to more nuanced questions they have left before becoming a customer.</p>
      <p>At this level, leads are looking at the finer details the video content should reflect this along with presenting an easy path to making a purchase, or conversion. Depending on the type of product or service, these details usually refer to price, quality, process and timelines.</p>
      `,
      image: "",
      video: `<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/8328098/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>`,
    };
  } else if (lowestCategory >= retentionDigit) {
    lowest = {
      value: retentionDigit,
      name: "retention",
      string: `<p>Your biggest area of opportunity is in the <b>retention</b> stage of the marketing funnel.</p>
      <p>The retention stage is the last stop within the marketing funnel and is a tactic used to keep a customer you already have. Here, the customer has used your product or service and may need a reason, or reminder, to come back in the future.</p> 
      <p>At this stage, consumers are expecting more interaction with their brands, which means a brand’s content needs to build an ongoing relationship with its customers. In an era of increased competition (mostly because of the internet), thoughtfully building a video portfolio designed around retaining and delighting your customers is crucial.</p>
      `,
      image: "",
      video: `<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://vimeo.com/showcase/8328122/embed' allowfullscreen frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe></div>`,
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
  
  const externalHTML = ` <div id="hero" class="hero-section">
  <div id="top-banner" class="top-banner w-container"></div>
  <div class="results-columns w-row">
    <div class="quiz-results w-col w-col-6 w-col-stack w-col-small-small-stack">
      <h2 class="results-intro">YOUR NEXT VIDEO SHOULD FOCUS ON:</h2>
      <h1 id="result-header" class="result-header">${lowest.name}</h1>
      <p id="result-text" class="result-text">${lowest.string}</p>

      <a href="#footer" id="send-results" class="contact-button w-button">SEND RESULTS</a>
      </div>
      <div class="quiz-results w-col w-col-6 w-col-stack w-col-small-small-stack">
        <div class="video-container w-container"></div>
        <div id="result-showcase" class="video w-video w-embed">${lowest.video}</div>
        <div class="video-caption">Here is a showcase of various ${lowest.name} videos Tripwire has developed for a range of clients</div>
        </div>
        </div>
      </div>
      <div></div>
      <div class="marketing-funnel-section">
      <h1 id="video-engagement-funnel" class="section-heading"><span class="thin-fill-span">VIDEO</span> <span class="orange-fill-span">ENGAGEMENT</span> <span class="dark-fill-span">FUNNEL</span></h1>
      <div id="funnel-text" class="funnel-framework-intro">The full funnel framework is a handy model for the individual stages a potential customer goes through when making a purchasing decision. Using this framework as a backbone to a video strategy helps place your video marketing assets along the funnel top to bottom. Ideally, potential customers will be able to view a video for your business across each stage of the funnel. Having at least one video per stage is the key to a full video marketing strategy.</div><img src="images/Engagement_Funnel.gif" loading="lazy" id="animated-funnel" alt="Video engagement funnel animation shows hierarchy of marketing funnel, top to bottom: awareness, engagement, conversion, and retention" width="1000" class="animated-funnel-graphic">
    </div>
    <div class="funnel-stage">
      <div class="funnel-stage-header w-row">
        <div class="spacer w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
        <div class="column-5 w-col w-col-10 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
          <h1 id="funnel-stage" class="section-heading"><span class="thin-fill-span">FUNNEL</span> <span class="orange-fill-span">STAGE</span></h1>
        </div>
        <div class="spacer w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
      </div>
      <div id="awareness-card" class="funnel-details-card w-clearfix"><img src="images/awareness-icon_1awareness-icon.png" loading="eager" id="awareness-icon" alt="Awareness Icon" class="icons">
        <h1 id="awareness-card-heading" class="card-heading">Awareness</h1>
        <p class="card-copy">Increasing your brand’s overall reach, influence, and personal emotional connection with your customers. The goal here is to get people to buy-in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher stake action. Here you are aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
        <a href="https://awareness.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz" target="_blank" class="video-showcase-button w-button">WATCH SHOWCASE</a>
        <link rel="prefetch" href="https://awareness.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz">
      </div>
      <div id="engagement-card" class="funnel-details-card w-clearfix"><img src="images/engagement-icon_1engagement-icon.png" loading="eager" id="engagement-icon" alt="Engagement Icon" class="icons">
        <h1 id="engagement-card-heading" class="card-heading">Engagement</h1>
        <p class="card-copy">By building your community (whether via email list, social media following, subscribers or other method), and positioning your brand as a trusted expert in your field you will be solidifying the brand awareness achieved and moving your customer towards a conversion. The goal here is to create and encourage engagement around helpful content, which provides value for your audience and aims to educate, inspire, or entertain (not to sell). Open the conversation with your ideal customer and become their go-to source for niche.</p>
        <a href="https://engagement.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz" target="_blank" class="video-showcase-button w-button">WATCH SHOWCASE</a>
        <link rel="prefetch" href="https://engagement.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz">
      </div>
      <div id="conversion-card" class="funnel-details-card w-clearfix"><img src="images/coversion_1coversion.png" loading="eager" id="conversion-icon" alt="Conversion Icon" class="icons">
        <h1 id="conversion-card-heading" class="card-heading">Conversion</h1>
        <p class="card-copy">Probably the most important goal in a marketing strategy, as without conversions (eg; customers ,subscribers, registrations, sales) you don’t have a business. The goal here is to reduce any friction around a conversion taking place. Deal with any final concerns that a potential customer has to ensure the sale. Improve your conversion ratio by humanizing the sales process or overcoming any lingering trust concerns. Here you do need to communicate the rational facts and figures around your product or service, And the end-goal here, is to increase your bottom line.</p>
        <a href="https://conversion.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz" target="_blank" class="video-showcase-button w-button">WATCH SHOWCASE</a>
        <link rel="prefetch" href="https://conversion.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz">
      </div>
      <div id="retention-card" class="funnel-details-card w-clearfix"><img src="images/Retension_1Retension.png" loading="eager" id="retention-icon" alt="Retention Icon" class="icons">
        <h1 id="retention-card-heading" class="card-heading">Retention</h1>
        <p class="card-copy">Once a customer is gained it is important to ensure a positive customer experience through the initial post-sale period and onwards toward building a long-term relationship with each customer and therefore an increased lifetime value. The goal here is to surprise, delight and deepen the relationship with your customer to build loyalty and advocacy. Where possible video content implemented for this goal should be personalized, direct and allow for human connection.</p>
        <a href="https://retention.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz" target="_blank" class="video-showcase-button w-button">WATCH SHOWCASE</a>
        <link rel="prefetch" href="https://retention.tripwiremedia.com/?utm_source=marketing-needs&amp;utm_medium=quiz">
      </div>
    </div>
    <div id="contact" class="contact">
    <h1 id="video-engagement-funnel" class="section-heading"><span class="thin-fill-span">SEND</span> <span class="orange-fill-span">RESULTS</span> </h1>
  </div>;`
  
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = externalHTML;
    $("#footer").toggle();
    return retentionDigit;
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

generateQuestions(currentQuestion);
nextButton.addEventListener("click", loadNextQuestion);
previousButton.addEventListener("click", loadPreviousQuestion);

var check = false;
  $('#checkbox').click(function() {
      if($(this).is(':checked'))
          check = (true);
      else
          check = (false);
  });

// used to grab onto firebase -> connection
var firebaseConfig = {
  apiKey: "AIzaSyAAxVbOTVPjJSSem2UbSWBqtVj6W6nL3L0",
  authDomain: "form-9df88.firebaseapp.com",
  databaseURL: "https://form-9df88-default-rtdb.firebaseio.com",
  projectId: "form-9df88",
  storageBucket: "form-9df88.appspot.com",
  messagingSenderId: "899881916214",
  appId: "1:899881916214:web:5624fc7f28d5ab1bc4c597"
};

//init firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// start grabbing our DOM Element
const sendBtn = document.querySelector('#send');

const db = firestore.collection("contactData");

let validEmail = false;

function validateEmail(email) {
  var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(mailformat)) {
      sendEmail();
      return;
  } else {
      alert("You have entered an invalid email address!");
      validEmail= false;
      return;
  };
}



if (sendBtn) {
  sendBtn.addEventListener('click', function() {
    let userEmail = document.querySelector('#userEmail');
    let userEmailInput = userEmail.value;
    validateEmail(userEmailInput);
  });


function sendEmail() {
  let userName = document.querySelector('#userFullName');
  let userEmail = document.querySelector('#userEmail');

  let current = new Date();
  // let area = result.childNodes[1].innerText

  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let timeStamp = current.toLocaleString();
  let source = "Marketing Survey";
  // let areaWeakness = area.value;



// access the database collction
  db.doc().set({
      name: userNameInput,
      email: userEmailInput,
      meeting: check,
      result: score,
      time: timeStamp,
      source: source,
      area: lowest.name,
  })
  .then(function() {
    $("#form-body").toggle();
    $("#successForm").toggle();
      console.log("Data Saved");
  })
  .catch(function(error) {
      console.log(error);
  })
}
}