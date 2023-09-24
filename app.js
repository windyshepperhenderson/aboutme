let answer1 = confirm("Are you ready to meet Rory?");

if (answer1 === true) {
  console.log("Glad to hear it");
  alert("Glad to hear it");
} else {
  console.log("Well, maybe another time then?");
  alert("Well, maybe another time then?");
  window.close();
}
console.log(answer1);

function mybtn1() {
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
  alert("You got " + userPoints + "/5 questions correct");
  console.log(q5);
}

function mybtn2() {
  let numb = prompt(
    "Guess my favourite number, its between 1 and 10.  I'll give you 3 trys"
  );
  for (let guessesUsed = 0; guessesUsed < 2; guessesUsed++) {
    if (numb == 3) {
      alert("CORRR--ECT---TI---MUNDO!");
      break;
    } else if (numb > 3) {
      alert("Sorry that's too high!");
      numb = prompt("Guess again buster");
    } else if (numb < 3) {
      alert("Sorry that's too low!");
      numb = prompt("Guess again buster");
    } else {
      alert("Please pick a number between 1 and 10");
      numb = prompt("Guess again buster");
    }
  }
  if ((GuessesUsed) => 3) {
    alert("Didn't get it this time my friend, why not try again?");
  }
}

function mybtn3() {
  let q6Ans = ["crash", "bang", "wallop"];
  let maxAttempts = 6;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let q6 = prompt(
      "I listed 10 of my favorite words, but, sorry, I tricked you, I only like 3 words on that list, can you guess just 1 of them?  I'll give you 6 trys"
    ).toLowerCase();

    let found = false;

    for (let i = 0; i < q6Ans.length; i++) {
      if (q6 === q6Ans[i]) {
        alert(
          "Yay! All the answers were - Crash, bang, and wallop. Also I tricked you again, I like all those words. What a crazy fun person I am."
        );
        found = true;
        break;
      }
    }

    if (found) {
      break;
    }

    if (attempt === maxAttempts) {
      alert("Not quite my friend, why not have another go eh?");
    } else {
      alert("Bah, I hate that word, have another go");
    }
  }
}
