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
      string: `<p>Your biggest area of opportunity is in the <b>conversion</b> stage stage of the marketing funnel.</p>
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
      <p>The retention stage is the last stop within the marketing funnel and is a tactic used to keep a customer you already have. Within this stage, the customer has used your product or service and may need a reason, or reminder, to come back in the future.</p> 
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
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = `
    <div id="hero" class="hero">
    <div id="top-banner" class="banner w-container"></div>
    <div class="columns w-row">
      <div class="quiz-results w-col w-col-6 w-col-stack w-col-small-small-stack">
        <h2 class="results-intro">YOUR NEXT VIDEO SHOULD FOCUS ON:</h2>
        <h1 id="result-header" class="result-header"><span style="text-transform: uppercase">${lowest.name}</span></h1>
        <p id="result-text" class="result-text">${lowest.string}</p>
        </div>
        <div class="quiz-results w-col w-col-6 w-col-stack w-col-small-small-stack">
          <div class="video-container w-container"></div>
          <div id="result-showcase" class="video w-video w-embed">${lowest.video}</div>
        <div class="video-caption">Here is a showcase of various ${lowest.name} videos Tripwire has developed for a range of clients</div>
        </div>
        </div>
      </div>
      <div class="marketing-funnel-section">
        <h1 id="video-engagement-funnel" class="section-heading"><span class="thin-fill-span">VIDEO</span> <span class="orange-fill-span">ENGAGEMENT</span> <span class="dark-fill-span">FUNNEL</span></h1>
        <div id="funnel-text" class="funnel-text">The full funnel framework is a handy model for the individual stages a potential customer goes through when making a purchasing decision. Using this framework as a backbone to a video strategy helps place your video marketing assets along the funnel top to bottom. Ideally, potential customers will be able to view a video for your business across each stage of the funnel.Having at least one video per stage is the key to a full video marketing strategy.</div>
        <div data-w-id="a12269bd-490e-cad4-0741-593b002b2688" data-animation-type="lottie" data-src="documents/data.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="4.75" data-duration="0"></div>
      </div>
      <div class="funnel-stage">
        <div class="columns-3 w-row">
          <div class="blank w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
          <div class="column-5 w-col w-col-10 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
            <h1 id="funnel-stage" class="section-heading"><span class="thin-fill-span">FUNNEL</span> <span class="orange-fill-span">STAGE</span></h1>
          </div>
          <div class="blank w-col w-col-1 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"></div>
        </div>
        <div class="card w-clearfix"><img src="images/awareness-icon.png" loading="eager" alt="Awareness Icon">
          <h1 class="card-heading">Awareness</h1>
          <p class="card-copy">Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get people to buy in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher stake action. Here you’re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
          <a href="#" class="card-button w-inline-block w-lightbox">
            <div class="showcase-button">Watch Awareness Video Showcase</div>
            <script type="application/json" class="w-json">{
      "items": [
        {
          "type": "video",
          "originalUrl": "https://youtube.com/playlist?list=PLWXSPKWN6g12GWqO7WGJCNtrNmiTzONa0",
          "url": "https://youtube.com/playlist?list=PLWXSPKWN6g12GWqO7WGJCNtrNmiTzONa0",
          "html": "<iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLWXSPKWN6g12GWqO7WGJCNtrNmiTzONa0&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLWXSPKWN6g12GWqO7WGJCNtrNmiTzONa0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FCnDJT1APo_E%2Fhqdefault.jpg%3Fsqp%3D-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ%3D%3D%26rs%3DAOn4CLBLKZuEm1A_Dbhd8GcmY3rtQHRlLg%26days_since_epoch%3D18739&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
          "thumbnailUrl": "https://i.ytimg.com/vi/CnDJT1APo_E/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBLKZuEm1A_Dbhd8GcmY3rtQHRlLg&days_since_epoch=18739",
          "width": 940,
          "height": 528
        }
      ]
    }</script>
          </a>
        </div>
        <div class="card w-clearfix"><img src="images/engagement-icon.png" loading="eager" alt="Engagement Icon">
          <h1 class="card-heading">Engagement</h1>
          <p class="card-copy">Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get people to buy in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher stake action. Here you’re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
          <a href="#" class="card-button w-inline-block w-lightbox">
            <div class="showcase-button">Watch Engagement Video Showcase</div>
            <script type="application/json" class="w-json">{
      "items": [
        {
          "type": "video",
          "originalUrl": "https://youtube.com/playlist?list=PLWXSPKWN6g10VBk8zcvzr0gR84NpMYSll",
          "url": "https://youtube.com/playlist?list=PLWXSPKWN6g10VBk8zcvzr0gR84NpMYSll",
          "html": "<iframe class=\"embedly-embed\" src=\"//https:cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLWXSPKWN6g10VBk8zcvzr0gR84NpMYSll&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLWXSPKWN6g10VBk8zcvzr0gR84NpMYSll&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FF7Na_71315s%2Fhqdefault.jpg%3Fsqp%3D-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ%3D%3D%26rs%3DAOn4CLBvcj8kBNgr1J00RUOGc8u6yML06A%26days_since_epoch%3D18739&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
          "thumbnailUrl": "https://i.ytimg.com/vi/F7Na_71315s/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBvcj8kBNgr1J00RUOGc8u6yML06A&days_since_epoch=18739",
          "width": 940,
          "height": 528
        }
      ]
    }</script>
          </a>
        </div>
        <div class="card w-clearfix"><img src="images/coversion.png" loading="eager" alt="Conversion Icon">
          <h1 class="card-heading">Conversion</h1>
          <p class="card-copy">Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get people to buy in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher stake action. Here you’re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
          <a href="#" class="card-button w-inline-block w-lightbox">
            <div class="showcase-button">Watch Conversion Video Showcase</div>
            <script type="application/json" class="w-json">{
      "items": [
        {
          "type": "video",
          "originalUrl": "https://youtube.com/playlist?list=PLWXSPKWN6g13JUPvoz8Kpd6EBLXh486_i",
          "url": "https://youtube.com/playlist?list=PLWXSPKWN6g13JUPvoz8Kpd6EBLXh486_i",
          "html": "<iframe class=\"embedly-embed\" src=\"//https:cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLWXSPKWN6g13JUPvoz8Kpd6EBLXh486_i&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLWXSPKWN6g13JUPvoz8Kpd6EBLXh486_i&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWicnbwSO3fw%2Fhqdefault.jpg%3Fsqp%3D-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ%3D%3D%26rs%3DAOn4CLB9ttMKysmF9kQtJ434Wgk0RrRpsA%26days_since_epoch%3D18739&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
          "thumbnailUrl": "https://i.ytimg.com/vi/WicnbwSO3fw/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB9ttMKysmF9kQtJ434Wgk0RrRpsA&days_since_epoch=18739",
          "width": 940,
          "height": 528
        }
      ]
    }</script>
          </a>
        </div>
        <div class="card w-clearfix"><img src="images/Retension.png" loading="eager" alt="Retention Icon">
          <h1 class="card-heading">Retention</h1>
          <p class="card-copy">Increasing your brand’s overall reach, influence and personal emotional connection with your customers. The goal here is to get people to buy in emotionally and choose to engage with your brand and content online further before you ask them to buy from you or take a higher stake action. Here you’re aiming to connect on a human level, to build trust and encourage affinity with your customers.</p>
          <a href="#" class="card-button w-inline-block w-lightbox">
            <div class="showcase-button">Watch Retention Video Showcase</div>
            <script type="application/json" class="w-json">{
      "items": [
        {
          "type": "video",
          "originalUrl": "https://youtube.com/playlist?list=PLWXSPKWN6g101maet8eTeaFVcSNeun98X",
          "url": "https://youtube.com/playlist?list=PLWXSPKWN6g101maet8eTeaFVcSNeun98X",
          "html": "<iframe class=\"embedly-embed\" src=\"//https:cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLWXSPKWN6g101maet8eTeaFVcSNeun98X&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLWXSPKWN6g101maet8eTeaFVcSNeun98X&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fbx-ryAOLHHk%2Fhqdefault.jpg%3Fsqp%3D-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ%3D%3D%26rs%3DAOn4CLA9mWc0jh1u0irEJR2MrbKSyR5DHQ%26days_since_epoch%3D18739&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
          "thumbnailUrl": "https://i.ytimg.com/vi/bx-ryAOLHHk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA9mWc0jh1u0irEJR2MrbKSyR5DHQ&days_since_epoch=18739",
          "width": 940,
          "height": 528
        }
      ]
    }</script>
          </a>
        </div>
      </div>
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