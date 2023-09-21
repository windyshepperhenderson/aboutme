let answer1 = confirm("Are you ready to meet Rory?");

if (answer1 === true) {
  console.log("Well come on in");
  alert("Well come on in");
} else {
  console.log("Well, maybe another time then?");
  alert("Well, maybe another time then?");
}
console.log(answer1);

function greet() {
  let username = prompt(
    "Let's get to know each other shall we, whats your name?"
  );
  alert("Hello " + username + ".  How delightful to have you here today");
}
greet();

let q6Ans = ["crash", "bang", "wallop"];
let q6 = prompt(
  "I listed 10 of my favorite words, but, sorry, I tricked you, I only like 3 words on that list, can you guess just 1 of them?, Ill give you 6 trys to get it right"
).toLowerCase();

for (let i = 0; i < q6Ans.length; i++) {
  if (q6 === q6Ans[i]) {
    alert("Yes! Well done you");
  } else q6 !== q6Ans[i];
  prompt("please try again");
}

console.log(greet);

function mybtn1() {
  alert("I'm not working yet, please come back and try me soon");
}

function mybtn2() {
  let userPoints = 0;
  let q1 = prompt("Was I born in Derry? yes/no").toLowerCase();

  if (q1 === "yes") {
    console.log("Correct, good start!");
    alert("Correct, good start!");
    userPoints++;
  } else {
    console.log("oh dear, were you not paying attention?");
    alert("oh dear, were you not paying attention?");
  }
  console.log(q1);

  let q2 = prompt("Did you like Youssef Safri's goal? yes/no").toLowerCase();

  if (q2 === "yes") {
    console.log("Course you did, twas a BANGER!!");
    alert("Course you did, twas a BANGER!!");
    userPoints++;
  } else {
    console.log("Errr, are you blind?!");
    alert("Errr, are you blind?!");
  }
  console.log(q2);

  let q3 = prompt("Which British capital city did I study in?").toLowerCase();

  if (q3 === "london") {
    console.log("Yes, that's right, well done smarty pants!");
    alert("Yes, that's right, well done smarty pants!");
    userPoints++;
  } else {
    console.log("Come on now, are you even trying?");
    alert("Come on now, are you even trying?");
  }
  console.log(q3);

  let q4 = prompt("Who sung 'working 9 till 5'?").toLowerCase();

  if (q4 === "dolly parton") {
    console.log("Correct, what a way to make a living eh?");
    alert("Correct, what a way to make a living eh?");
    userPoints++;
  } else {
    console.log("no, no, NOOOOO!");
    alert("no, no, NOOOOO!");
  }
  console.log(q4);

  let q5 = prompt(
    "How would you describe my hairline?  Would you say I'm Bald or Balding?"
  ).toLowerCase();

  if (q5 === "balding") {
    console.log("Yeah, course right, I'm practically Samson");
    alert("Yeah, course right, I'm practically Samson");
    userPoints++;
  } else {
    console.log("How very dare you, we're gonna fall out if you keep this up");
    alert("How very dare you, we're gonna fall out if you keep this up");
  }
  alert("You got " + userPoints + "/1 questions correct");
  console.log(q5);
}
