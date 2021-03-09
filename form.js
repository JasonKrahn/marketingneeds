/*

find lowest score name

find lowest score value

make value of lowest score 40
*/
function results() {
  //Awareness
  let question1 = parseInt(document.getElementById("question1").value);
  let question2 = parseInt(document.getElementById("question2").value);
  let question3 = parseInt(document.getElementById("question3").value);
  let question4 = parseInt(document.getElementById("question4").value);
  //Engagement
  let question5 = parseInt(document.getElementById("question5").value);
  let question6 = parseInt(document.getElementById("question6").value);
  let question7 = parseInt(document.getElementById("question7").value);
  let question8 = parseInt(document.getElementById("question8").value);
  //Conversion
  let question9 = parseInt(document.getElementById("question9").value);
  let question10 = parseInt(document.getElementById("question10").value);
  let question11 = parseInt(document.getElementById("question11").value);
  let question12 = parseInt(document.getElementById("question12").value);
  //Retention
  let question13 = parseInt(document.getElementById("question13").value);
  let question14 = parseInt(document.getElementById("question14").value);
  let question15 = parseInt(document.getElementById("question15").value);
  let question16 = parseInt(document.getElementById("question16").value);
  //Adding up each
  let awareness = question1 + question2 + question3 + question4;
  let engagement = question5 + question6 + question7 + question8;
  let conversion = question9 + question10 + question11 + question12;
  let retention = question13 + question14 + question15 + question16;

  var numericValues = {
      Awareness: awareness,
      Engagement: engagement,
      Conversion: conversion,
      Retention: retention
};

// FIND THE LOWEST NUMBER
function lowestNum(numericValues) {

    var min = 40; // calling Math.max with no arguments returns -Infinity
    var minName = null;
    for (var key in numericValues) {
       var num = numericValues[key];

       if (num < min) {
           min = num;
           minName = key;
       }

       min = (num < min && num) || min;
    }

    return min
}

// FIND THE LOWEST NUMBER'S ASSOCIATED CATEGORY

function lowestName(numericValues) {

  var min = 40; // calling Math.max with no arguments returns -Infinity
  var minName = null;
  for (var key in numericValues) {
     var num = numericValues[key];

     if (num < min) {
         min = num;
         minName = key;
     }

     min = (num < min && num) || min;
  }

  return minName
}

let lowName = lowestName(numericValues);
let lowNum = lowestNum(numericValues);
let response = " ";

document.write(`${lowNum} is the lowest number and it belongs to ${lowName}`);

if (lowName === "Retention") {
  awareness = 0;
  engagement = 0;
  conversion = 0;
  retention = 40;
  response = "Bit of a fly-by-night organization you got there, eh? Do you set the bridges on fire after you cross them? For shame..."
} else if (lowName === "Engagement") {
  awareness = 0;
  engagement = 40;
  conversion = 0;
  retention = 0;
  response = "Not anything can be engageing, but you look like you aren't even trying"

} else if (lowName === "Awareness") {
  awareness = 40;
  engagement = 0;
  conversion = 0;
  retention = 0 
  response = "I gotta ask, are you even aware of your companies products and services? Based on this score, I'm guessing you aren't."
} else if (lowName === "Conversion") {
  awareness = 0;
  engagement = 0;
  conversion = 40;
  retention = 0 
  response = "For conversion, if you are this low one begins to wonder what kind of business you are even running there. I'd guess government or not-for-profit"
}


  //IMPORT CSS AND WRITE TO DOCUMENT

  document.write(`<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Your Results</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='testing.css'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js'></script>

</head><h1>Output</h1><h2>Wow, your are way low on ${lowName}. So low, you should be embarassed.</h2> <p>${response}</p> `);

/*
  document.write(`<p>Your total awareness score is ${awareness}/40</p><p>Your total engagement score is ${engagement}/40</p>
  <p>Your total conversion score is ${conversion}/40</p><p>Your total retention score is ${retention}/40</p>`);
*/

  document.write(`<canvas id="radarchart"></canvas>`);

  document.write(`
  <p><b>1</b> ${question1}/10,  <b>2</b> ${question2}/10,  <b>3</b> ${question3}/10,  <b>4</b> ${question4}/10</p>
  <p><b>5</b> ${question5}/10,  <b>6</b> ${question6}/10,  <b>7</b> ${question7}/10,  <b>8</b> ${question8}/10</p>
  <p><b>9</b> ${question9}/10,  <b>10</b> ${question10}/10,  <b>11</b> ${question11}/10,  <b>12</b> ${question12}/10</p>
  <p><b>13</b> ${question13}/10,  <b>14</b> ${question14}/10,  <b>15</b> ${question15}/10,  <b>16</b> ${question16}/10</p>
  `);


  // CANVAS JAVASCRIPT

  const canvas = document.getElementById("radarchart");
  const data = {
    labels: ["Awareness", "Engagement", "Conversion", "Retention"],
    datasets: [
      {
        data: [awareness, engagement, conversion, retention],
        backgroundColor: [
          "rgba(94,167, 119, 0.7)",
          "rgba(67,140,199, 0.7)",
          "rgba(154,116,182, 0.7)",
          "rgba(232,139,57, 0.7)",
        ],
      },
    ],
  };

 const polarAreaChart = new Chart(canvas, {
    type: "polarArea",
    data: data,
    options: {
      borderWidth: 10,
      scale: {
        responsive: true,
        ticks: {
          min: 0,
          max: 40,
        },
      },
    },
  });
}
