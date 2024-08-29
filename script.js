document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');
    const screamer = document.getElementById('screamer');

    payButton.addEventListener('click', function() {
        screamer.style.display = 'flex'; // Show the image
    });

    // Optional: Hide the image if clicking outside of it or some other event
    screamer.addEventListener('click', function(e) {
        if (e.target === screamer) {
            screamer.style.display = 'none'; // Hide the image
        }
    });
});
