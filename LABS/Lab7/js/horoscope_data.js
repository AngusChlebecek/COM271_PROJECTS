var mySign = "Capircorn"
var myMonth = "January"
var myDay = 5;
var myLucky = 5.0;
var myScope = "Today you could complete a creative project that you've been working on for a while, Capricorn. You will be more than happy with the results and inspired to move on to bigger and better things. Don't wear yourself out!"
var believeOrNot = false;

var element = document.getElementById("sign");
element.innerHTML = mySign;

var element = document.getElementsByClassName("birthday")[0];
element.textContent= 'Birthday: ' + myMonth + " " + myDay;

var element = document.getElementsByClassName("luckyNum")[0];
element.textContent= 'Lucky Number: ' + " " + myLucky;

var element = document.getElementsByTagName("p")[0];
element.textContent= myScope;
var element = document.getElementsByTagName("p")[1];
element.innerHTML = "Do I believe in astrology?: <strong>" + believeOrNot + "</strong";

var AngusMood = 3.0;
var IsaacMood = 3.0;
var EnmanuelMood = 3.0;
var averageMood = (AngusMood + IsaacMood + EnmanuelMood)/3;

var element = document.getElementsByTagName("p")[2];
element.textContent= "Today's mood for Capircorn is " + AngusMood + " out of 5.  " + "Average mood for Capircorn, Capircorn, and Aeries is " + averageMood + " out of 5.";

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var AngusSign = signs[0]; 
console.log(AngusSign); 
var EnmauelSign = signs[0]; 
console.log(EnmauelSign); 
var IsaacSign = signs[3]; 
console.log(IsaacSign); 

var element = document.getElementsByTagName("p")[3];
element.textContent= "My zodiac sign is " + AngusSign + ": " + AngusScope;
var element = document.getElementsByTagName("p")[4];
element.textContent= "Enmauel's zodiac sign is " + EnmauelSign + ": " + EnmauelScope;
var element = document.getElementsByTagName("p")[5];
element.textContent= "Isaac's zodiac sign is " + IsaacSign + ": " + IsaacScope;

var scopes = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
"Your determination will lead to success today. Stay focused on your goals.",
"Communication is key today. Express yourself clearly and listen to others.",
"Trust your intuition. It will guide you in making the right decisions.",
"Your creativity shines today. Use it to inspire and lead others.",
"Pay attention to the details. Your meticulous work will pay off.",
"Balance is essential. Find harmony in all aspects of your life.",
"Embrace transformation. Let go of what no longer serves you.",
"Adventure awaits. Explore new horizons and expand your horizons.",
"Hard work leads to success. Keep pushing toward your goals.",
"Your unique perspective is an asset. Share your ideas with others.",
"Trust your emotions. They will guide you in making the right choices."];

var AngusScope = scopes[1]; 
console.log(AngusScope); 
var EnmauelScope = scopes[4]; 
console.log(EnmauelScope); 
var IsaacScope = scopes[6]; 
console.log(IsaacScope); 

var element = document.getElementsByTagName("p")[3];
element.textContent= "My zodiac sign is " + AngusSign + ": " + AngusScope;
var element = document.getElementsByTagName("p")[4];
element.textContent= "Enmauel's zodiac sign is " + EnmauelSign + ": " + EnmauelScope;
var element = document.getElementsByTagName("p")[5];
element.textContent= "Isaac's zodiac sign is " + IsaacSign + ": " + IsaacScope;