var result = document.getElementById("result");
var rand = Math.floor(Math.random() * 10) + 1;

if (rand == 1) {
  result.textContent = "We couldn't find anything matching your search.";
} else if (rand == 2) {
  result.textContent = "We found nothing.";
} else if (rand == 3) {
  result.textContent = "Huh... it's like that query never existed.";
} else if (rand == 4) {
  result.textContent = "Did you mean to search for air? Because that’s all we found.";
} else if (rand == 5) {
  result.textContent = "Not a single result. Is it opposite day?";
} else if (rand == 6) {
  result.textContent = "Our algorithm tried really hard, but it gave up.";
} else if (rand == 7) {
  result.textContent = "Sorry, we looked under every digital rock. Nothing there.";
} else if (rand == 8) {
  result.textContent = "This search was too much for us—results not found!";
} else if (rand == 9) {
  result.textContent = "Zero. Nada. Zilch. That's what we found.";
} else if (rand == 10) {
  result.textContent = "Nope, the internet doesn't have anything like that. Try again?";
}
