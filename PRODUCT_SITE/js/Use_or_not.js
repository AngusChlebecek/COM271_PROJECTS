

        document.getElementById('use_or_not').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const communityChoice = document.querySelector('input[name="community"]:checked');
            const musicChoice = document.querySelector('input[name="music"]:checked');
            const artsChoice = document.querySelector('input[name="arts"]:checked');
            
            const resultElement = document.getElementById('result');
            
        if (communityChoice && musicChoice && artsChoice) {
        
            const community = communityChoice.value;
            const music = musicChoice.value;
            const arts = artsChoice.value;
            
            if (community === 'no' && music === 'no' && arts === 'no') {
                resultElement.textContent = "LocalScene probably doesn't have what you're looking for.";
            } else if (community === 'yes' && music === 'yes' && arts === 'yes') {
                resultElement.textContent = "Yes! LocalScene has a use for you.";
            } else {
                resultElement.textContent = "Yes! LocalScene has a use for you.";
            }
            
        } else {
            resultElement.textContent = 'Please make a selection in all three categories.';
        }
});
