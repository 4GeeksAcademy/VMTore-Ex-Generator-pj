/* eslint-disable */

window.onload = function() {
  //write your code here

  //Arrays

  const who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  const action = ["ate ", "peed ", "crushed ", "broke "];
  const what = ["my homework ", "my phone ", "the car "];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  //Función

  function excuseGenerator() {
    let randomWho = [Math.floor(Math.random() * who.length)];
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    const excuse =
      who[randomWho] +
      action[randomAction] +
      what[randomWhat] +
      when[randomWhen];

    document.querySelector("#excuses").textContent = excuse;
  }
  excuseGenerator();
};
