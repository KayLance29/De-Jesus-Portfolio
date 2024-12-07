const username = 'KayLance29';
    
// Fetch profile
fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Profile not found');
        }
        return response.json();
    })
    .then(profile => {
        // Display profile
        document.getElementById('profile').innerHTML = `
            <img src="${profile.avatar_url}" alt="${profile.login}" width="100">
            <p><strong>Username:</strong> ${profile.login}</p>
            <p><strong>Bio:</strong> ${profile.bio || 'No bio available'}</p>
            <p><strong>Followers:</strong> ${profile.followers}</p>
            <p><strong>Following:</strong> ${profile.following}</p>
            <p><a href="${profile.html_url}" target="_blank">View on GitHub</a></p>
        `;
    })
    .catch(error => {
        document.getElementById('profile').innerHTML = 'Error fetching profile: ' + error.message;
    });

    document.addEventListener('DOMContentLoaded', function() {
        console.log('Document is ready!');
    
        function displayCurrentTime() {

            const timeZone = "Asia/Manila"; 
            const currentTime = moment.tz(timeZone).format('hh:mm:ss A'); 
    
            document.getElementById('current-time').innerText = `Current Time in ${timeZone}: ${currentTime}`;
        }
    
        displayCurrentTime();
    });
    