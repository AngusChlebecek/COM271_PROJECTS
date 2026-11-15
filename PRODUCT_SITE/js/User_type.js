
function evaluateAnswer(community, music, arts) {
    if (!community || !music || !arts) {
        return 'Please make a selection in all three categories.';
    }

    if (community === 'no' && music === 'no' && arts === 'no') {
        return "LocalScene probably doesn't have what you're looking for.";
    }

    return "Yes! LocalScene has a use for you.";
}

document.getElementById('use_or_not').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const community = document.querySelector('input[name="community"]:checked')?.value;
    const music = document.querySelector('input[name="music"]:checked')?.value;
    const arts = document.querySelector('input[name="arts"]:checked')?.value;
    
    const message = evaluateAnswer(community, music, arts);
    
    document.getElementById('result').textContent = message;
});