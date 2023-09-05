//Loader vinduet med eventlistener load
window.addEventListener("load", sidenVises);

let myRand;
let myRand2;
let myRand3;
let myRand4;
let myRand5;

let myDelay;
let myDelay2;
let meDelay3;
let meDelay4;
let meDelay5;

let points = 0;
let lives = 3;

let oelContainer;
let drinkContainer;
let shotContainer;
let sodavandContainer;
let vandContainer;

//Funktionen sidenVises med følgende funktionalitet
function sidenVises() {
  console.log("siden vises");

  oelContainer = document.querySelector("#oel_container");
  drinkContainer = document.querySelector("#drink_container");
  shotContainer = document.querySelector("#shot_container");
  sodavandContainer = document.querySelector("#sodavand_container");
  vandContainer = document.querySelector("#vand_container");

  /*Skjul andre skærme*/
  document.querySelector("#level_complete").classList = "hide";
  document.querySelector("#game_over").classList = "hide";
  document.querySelector("#game").classList = "hide";

  /*Vis start skærm*/
  document.querySelector("#start").classList = "";

  /*Klik på start knap*/
  document.querySelector("#spil_knap").addEventListener("click", startGame);

  /*Klik på info knap*/
  document.querySelector("#info_knap").addEventListener("click", infoSide);

  window.addEventListener("resize", windowResize);
}

//Med myFontInProcent kan man ændre på, hvis din font skal være større eller mindre
function windowResize() {
  console.log("windowResize");

  let widthScreen = document.querySelector("#screen").clientWidth;

  let myFontInProcent1 = 5;
  let myFont1 = (widthScreen / 100) * myFontInProcent1;
  document.querySelector("#score_board").style.fontSize = myFont1 + "px";

  let myFontinProcent2 = 5;
  let myFont2 = (widthScreen / 100) * myFontinProcent2;
  document.querySelector("#life_board").style.fontSize = myFont2 + "px";

  let myFontinProcent3 = 4;
  let myFont3 = (widthScreen / 100) * myFontinProcent3;
  document.querySelector("#game_over_points").style.fontSize = myFont3 + "px";

  let myFontinProcent4 = 4;
  let myFont4 = (widthScreen / 100) * myFontinProcent4;
  document.querySelector("#level_complete_points").style.fontSize = myFont4 + "px";
}

function infoSide() {
  console.log("information side");

  /*Skjul andre skærme*/
  document.querySelector("#level_complete").classList = "hide";
  document.querySelector("#game_over").classList = "hide";
  document.querySelector("#game").classList = "hide";
  document.querySelector("#start").classList = "hide";

  /*Vis info skærm*/
  document.querySelector("#info").classList = "";

  /*Klik på start knap*/
  document.querySelector("#spil_knap2").addEventListener("click", startGame);
}

function startGame() {
  console.log("game started");

  document.querySelector("#sound_sang").currentTime = 0;
  document.querySelector("#sound_sang").volume = 0.1;
  document.querySelector("#sound_sang").play();

  /*Skjul andre skærme*/
  document.querySelector("#level_complete").classList = "hide";
  document.querySelector("#game_over").classList = "hide";
  document.querySelector("#start").classList = "hide";
  document.querySelector("#info").classList = "hide";

  /*Vis spil skærm*/
  document.querySelector("#game").classList = "";

  /*Nustil point*/
  points = 0;
  document.querySelector("#score").textContent = points;

  /*reset liv til 3*/
  lives = 3;
  document.querySelector("#liv").textContent = lives;

  // Tid
  document.querySelector("#minut_viser").classList.add("minut_animation");
  document.querySelector("#minut_viser").addEventListener("animationend", stopSpillet);

  // Positioner og delay
  //Giver et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  myRand2 = Math.floor(Math.random() * 5) + 1;
  myRand3 = Math.floor(Math.random() * 5) + 1;
  myRand4 = Math.floor(Math.random() * 5) + 1;
  myRand5 = Math.floor(Math.random() * 5) + 1;

  myDelay = Math.floor(Math.random() * 5) + 1;
  myDelay2 = Math.floor(Math.random() * 5) + 1;
  myDelay3 = Math.floor(Math.random() * 5) + 1;
  myDelay4 = Math.floor(Math.random() * 5) + 1;
  myDelay5 = Math.floor(Math.random() * 5) + 1;

  oelContainer.classList.add("pos" + myRand);
  oelContainer.classList.add("delay" + myDelay);

  drinkContainer.classList.add("pos" + myRand2);
  drinkContainer.classList.add("delay" + myDelay2);

  shotContainer.classList.add("pos" + myRand3);
  shotContainer.classList.add("delay" + myDelay3);

  sodavandContainer.classList.add("pos" + myRand4);
  sodavandContainer.classList.add("delay" + myDelay4);

  vandContainer.classList.add("pos" + myRand5);
  vandContainer.classList.add("delay" + myDelay5);

  // Start animation
  oelContainer.classList.add("forstoer_hop");
  drinkContainer.classList.add("forstoer_hop");
  shotContainer.classList.add("forstoer_hop");
  sodavandContainer.classList.add("forstoer_hop");
  vandContainer.classList.add("forstoer_hop");

  oelContainer.addEventListener("mousedown", clickOelHandler);
  drinkContainer.addEventListener("mousedown", clickDrinkHandler);
  shotContainer.addEventListener("mousedown", clickShotHandler);
  sodavandContainer.addEventListener("mousedown", clickSodavandHandler);
  vandContainer.addEventListener("mousedown", clickVandHandler);

  //Animationiteration udløses når en CSS-animation slutter
  oelContainer.addEventListener("animationiteration", forstoer_hopEnGang);
  drinkContainer.addEventListener("animationiteration", forstoer_hopEnGang);
  shotContainer.addEventListener("animationiteration", forstoer_hopEnGang);
  sodavandContainer.addEventListener("animationiteration", forstoer_hopEnGang);
  vandContainer.addEventListener("animationiteration", forstoer_hopEnGang);
}

function forstoer_hopEnGang() {
  console.log("Forstoer hop en gang");

  oelContainer.classList.remove("forstoer_hop");
  oelContainer.classList.add("fade_out");

  oelContainer.addEventListener("animationend", genstartOel);

  drinkContainer.classList.remove("forstoer_hop");
  drinkContainer.classList.add("fade_out");

  drinkContainer.addEventListener("animationend", genstartDrink);

  shotContainer.classList.remove("forstoer_hop");
  shotContainer.classList.add("fade_out");

  shotContainer.addEventListener("animationend", genstartShot);

  sodavandContainer.classList.remove("forstoer_hop");
  sodavandContainer.classList.add("fade_out");

  sodavandContainer.addEventListener("animationend", genstartSodavand);

  vandContainer.classList.remove("forstoer_hop");
  vandContainer.classList.add("fade_out");

  vandContainer.addEventListener("animationend", genstartVand);
}

/*Gode elementer*/
function clickOelHandler() {
  console.log("Øl clicked");

  //Fjerner eventlisteren mousedown
  oelContainer.removeEventListener("mousedown", clickOelHandler);

  oelContainer.classList.add("frys");
  //Tilføjer animationen "drej_skrump" på oel_spriten
  oelContainer.firstElementChild.classList.add("drej_skrump");

  /*Lyd*/
  document.querySelector("#sound_aaben").currentTime = 0;
  document.querySelector("#sound_aaben").play();

  //Tilføjer eventlisteren animationend når animationen er slet går den til funktionen genstart øl
  oelContainer.addEventListener("animationend", genstartOel);

  //Point
  //Der bliver tilføjet 5 til den nuværende værdi
  //Vi erstartter teksten på id: score med variablen points
  points += 5;
  document.querySelector("#score").textContent = points;
}

function genstartOel() {
  console.log("genstart øl");
  //Force reflow
  //Man er nød til at gennemtvinge (force) et reflow, når man vil fjerne en animations class og sætter den samme på igen

  //Fjerner classerne fra oelContainer og Oel sprite
  oelContainer.classList = "";
  oelContainer.firstElementChild.classList = "";

  oelContainer.offsetLeft;

  //Tilføjer animationen, random position og random delay
  myRand = Math.floor(Math.random() * 5) + 1;
  myDelay = Math.floor(Math.random() * 5) + 1;
  oelContainer.classList.add("pos" + myRand);
  oelContainer.classList.add("delay" + myDelay);

  oelContainer.classList.add("forstoer_hop");

  oelContainer.addEventListener("mousedown", clickOelHandler);
}

function clickDrinkHandler() {
  console.log("Drink clicked");

  drinkContainer.removeEventListener("mousedown", clickDrinkHandler);

  drinkContainer.classList.add("frys");
  drinkContainer.firstElementChild.classList.add("drej_skrump");

  /*Lyd*/
  document.querySelector("#sounds_skaaler").currentTime = 0;
  document.querySelector("#sounds_skaaler").play();

  drinkContainer.addEventListener("animationend", genstartDrink);

  points += 10;
  document.querySelector("#score").textContent = points;
}

function genstartDrink() {
  console.log("genstart drink");
  drinkContainer.classList = "";
  drinkContainer.firstElementChild.classList = "";

  drinkContainer.offsetLeft;

  myRand2 = Math.floor(Math.random() * 5) + 1;
  myDelay2 = Math.floor(Math.random() * 5) + 1;
  drinkContainer.classList.add("pos" + myRand2);
  drinkContainer.classList.add("delay" + myDelay2);

  drinkContainer.classList.add("forstoer_hop");

  drinkContainer.addEventListener("mousedown", clickDrinkHandler);
}

function clickShotHandler() {
  console.log("Shot clicked");

  shotContainer.removeEventListener("mousedown", clickShotHandler);

  /*Lyd*/
  document.querySelector("#sounds_skaal").currentTime = 0;
  document.querySelector("#sounds_skaal").play();

  shotContainer.classList.add("frys");
  shotContainer.firstElementChild.classList.add("drej_skrump");

  shotContainer.addEventListener("animationend", genstartShot);

  points += 15;
  document.querySelector("#score").textContent = points;
}

function genstartShot() {
  console.log("genstart shot");
  shotContainer.classList = "";
  shotContainer.firstElementChild.classList = "";

  shotContainer.offsetLeft;

  myRand3 = Math.floor(Math.random() * 5) + 1;
  myDelay3 = Math.floor(Math.random() * 5) + 1;
  shotContainer.classList.add("pos" + myRand3);
  shotContainer.classList.add("delay" + myDelay3);

  shotContainer.classList.add("forstoer_hop");

  shotContainer.addEventListener("mousedown", clickShotHandler);
}

/*Dårlige elementer*/
function clickSodavandHandler() {
  console.log("Sodavand clicked");

  sodavandContainer.removeEventListener("mousedown", clickSodavandHandler);

  sodavandContainer.classList.add("frys");
  sodavandContainer.firstElementChild.classList.add("drej_skrump2");

  /*Lyd*/
  document.querySelector("#sound_smadre").currentTime = 0;
  document.querySelector("#sound_smadre").play();

  sodavandContainer.addEventListener("animationend", genstartSodavand);

  points -= 5;
  document.querySelector("#score").textContent = points;
}

function genstartSodavand() {
  console.log("genstart sodavand");
  sodavandContainer.classList = "";
  sodavandContainer.firstElementChild.classList = "";

  sodavandContainer.offsetLeft;

  myRand4 = Math.floor(Math.random() * 5) + 1;
  myDelay4 = Math.floor(Math.random() * 5) + 1;
  sodavandContainer.classList.add("pos" + myRand4);
  sodavandContainer.classList.add("delay" + myDelay4);

  sodavandContainer.classList.add("forstoer_hop");

  sodavandContainer.addEventListener("mousedown", clickSodavandHandler);
}

function clickVandHandler() {
  console.log("Vand clicked");

  vandContainer.removeEventListener("mousedown", clickVandHandler);

  vandContainer.classList.add("frys");
  vandContainer.firstElementChild.classList.add("drej_skrump2");

  /*Lyd*/
  document.querySelector("#sound_smadre").currentTime = 0;
  document.querySelector("#sound_smadre").play();

  vandContainer.addEventListener("animationend", genstartVand);

  //Minuser med 1 liv fra værdien
  lives--;
  document.querySelector("#liv").textContent = lives;

  //Hvis lives er mindre eller ligmed 0, går den i funktionen stopSpillet
  if (lives <= 0) {
    stopSpillet();
  }
}

function genstartVand() {
  console.log("genstart vand");
  vandContainer.classList = "";
  vandContainer.firstElementChild.classList = "";

  vandContainer.offsetLeft;

  myRand5 = Math.floor(Math.random() * 5) + 1;
  myDelay5 = Math.floor(Math.random() * 5) + 1;
  vandContainer.classList.add("pos" + myRand5);
  vandContainer.classList.add("delay" + myDelay5);

  vandContainer.classList.add("forstoer_hop");

  vandContainer.addEventListener("mousedown", clickVandHandler);
}
function stopSpillet() {
  console.log("Spillet stoppet");

  /*Fjern alle klasser*/
  vandContainer.classList = "";
  vandContainer.firstElementChild.classList = "";

  sodavandContainer.classList = "";
  sodavandContainer.firstElementChild.classList = "";

  oelContainer.classList = "";
  oelContainer.firstElementChild.classList = "";

  drinkContainer.classList = "";
  drinkContainer.firstElementChild.classList = "";

  shotContainer.classList = "";
  shotContainer.firstElementChild.classList = "";

  /*Fjern alle eventlisteners*/
  vandContainer.removeEventListener("mousedown", clickVandHandler);
  vandContainer.removeEventListener("animationend", genstartVand);
  vandContainer.removeEventListener("animationiteration", forstoer_hopEnGang);

  sodavandContainer.removeEventListener("mousedown", clickSodavandHandler);
  sodavandContainer.removeEventListener("animationend", genstartSodavand);
  sodavandContainer.removeEventListener("animationiteration", forstoer_hopEnGang);

  oelContainer.removeEventListener("mousedown", clickOelHandler);
  oelContainer.removeEventListener("animationend", genstartOel);
  oelContainer.removeEventListener("animationiteration", forstoer_hopEnGang);

  drinkContainer.removeEventListener("mousedown", clickOelHandler);
  drinkContainer.removeEventListener("animationend", genstartDrink);
  drinkContainer.removeEventListener("animationiteration", forstoer_hopEnGang);

  shotContainer.removeEventListener("mousedown", clickOelHandler);
  shotContainer.removeEventListener("animationend", genstartShot);
  shotContainer.removeEventListener("animationiteration", forstoer_hopEnGang);

  /*Frys tiden*/
  document.querySelector("#minut_viser").classList = "";

  /*Game over og level complete*/
  if (lives <= 0) {
    //Hvis liv er mindre eller ligmed 0 går den i gameOver
    gameOver();
  } else if (points >= 100) {
    //Ellers hvis der er mere end eller 100 point går den i levelComplete
    levelComplete();
  } else {
    //Ellers går den i gameOver
    gameOver();
  }
}

function gameOver() {
  console.log("game over");

  /*Lyd*/
  document.querySelector("#sound_oev").currentTime = 0;
  document.querySelector("#sound_oev").play();

  /*Tekst*/
  document.querySelector("#game_over_points").textContent = "Du fik kun " + points + "point";

  /*Vis gameover skærm*/
  document.querySelector("#game_over").classList = "";

  /*klik på prøv igen*/
  document.querySelector("#proev-igen_knap").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("level complete");

  /*Lyd*/
  document.querySelector("#sound_wuhu").currentTime = 0;
  document.querySelector("#sound_wuhu").play();

  /*Tekst*/
  document.querySelector("#level_complete_points").textContent = "Du fik " + points + "point";

  /*Vis gameover skærm*/
  document.querySelector("#level_complete").classList = "";

  /*klik på prøv igen*/
  document.querySelector("#spil-igen_knap").addEventListener("click", startGame);
}
