const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email === '' || password === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Create a FormData object to send the form data to the server
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Send the data to login.php using Fetch API
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())  // Change this based on your expected response format
    .then(data => {
        if (data.includes('Invalid')) {
            alert('Invalid login credentials!');
        } else {
            window.location.href = 'dashboard.php'; // Redirect to dashboard upon successful login
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again.');
    });
});
