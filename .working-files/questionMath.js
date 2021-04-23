
//Set question variables
//AWARENESS QUESTION


let q2 = 69;
let q3 = 90;
let q4 = 87;

var q1 = document.getElementById("a-0");
var output = document.getElementById("1");
output.innerHTML = answer1.value;

answer1.oninput = function() {
  output.innerHTML = this.value;
};

const question1Choices = document.querySelectorAll(`[name="question1"]`);
let question1 = document.querySelector(`[name="question1"]:checked`) ? parseInt(document.querySelector(
    `[name="question1"]:checked`).value) : 0;

function updateChart(event) {
    dataPoint = parseInt(this.value);
     switch (this.name) {
         case 'question1':
               myRadarChart.data.datasets[0].data[0] = dataPoint;
            // addData(myRadarChart, this.name, dataPoint);
              myRadarChart.update();
         default:
                break;
        }
    };

    [...question1Choices].forEach(option => {
        option.addEventListener('change', updateChart);
    });

//ENGAGEMENT QUESTIONS

let q5 = 96;
let q6 = 69;
let q7 = 90;
let q8 = 87;

//CONVERSION QUESTIONS

let q9 = 50;
let q10 = 55;
let q11 = 60;
let q12 = 43;

//RETENTION QUESTIONS

let q13 = 6;
let q14 = 9;
let q15 = 10;
let q16 = 7;

var awarenessTotal = (q1 + q2 + q3 + q4);
var engagementTotal = (q5 + q6 + q7 + q8);
var conversionTotal = (q9 + q10 + q11 + q12);
var retentionTotal = (q13 + q14 + q15 + q16);
