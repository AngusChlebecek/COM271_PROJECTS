

function evaluateAnswer(artist, venue) {
    if (!artist && !venue) {
        return 'Please make a selection.';
    }

    if (artist === 'Artist') {
        return "As an artist, you can share links to your music platforms, post photos, videos, and bios, and upload flyers for your events.";
    }
    else if (venue === 'Venue'){
    return "As a venue, you can post pictures and videos, share event schedules, and upload flyers.";
    }
}

document.getElementById('user_type').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const artist = document.querySelector('input[id="artist"]:checked')?.value;
    const venue = document.querySelector('input[id="venue"]:checked')?.value;
    
    const message = evaluateAnswer(artist, venue);
    
    document.getElementById('result').textContent = message;
});

