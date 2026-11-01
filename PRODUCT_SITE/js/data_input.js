
        const outputs = {
            Artist: "As an artist, you can share links to your music platforms, post photos, videos, and bios, and upload flyers for your events.",
            Venue: "As a venue, you can post pictures and videos, share event schedules, and upload flyers."
        };  

        document.getElementById('user_type').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            // 2. Find the checked radio button within the 'topping' group
            const selectedRadio = document.querySelector('input[name="choice"]:checked');
            
            if (selectedRadio) {
                const selectedValue = selectedRadio.value;
                document.getElementById('result').textContent = outputs[selectedValue];
            } else {
                document.getElementById('result').textContent = '';
            }
        });
