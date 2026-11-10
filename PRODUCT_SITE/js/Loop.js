const Words = ["Art.", "Culture.", "Connection."];

let combinedText = "";

for (let i = 0; i < Words.length; i++) {
  combinedText += Words[i] + " "; 
}

document.getElementById("output-paragraph").innerText = combinedText.trim();

const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    
    paragraph.style.fontWeight = 'bold';
}