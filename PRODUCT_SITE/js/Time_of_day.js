function timeOfDay() {
  const currentHour = new Date().getHours();
  let message = "";

  if (currentHour >= 5 && currentHour < 12) {
    message = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    message = "Good afternoon!.";
  } else if (currentHour >= 17 && currentHour < 21) {
    message = "Good evening!";
  } else {
    message = "Working late? Take it easy tonight—here is everything you need for a quiet evening.";
  }

  document.getElementById("greeting").textContent = message;
}

timeOfDay();