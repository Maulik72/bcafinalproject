const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value.trim(); // Fix ID for name field
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Create a FormData object to send the form data to the server
    const formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);

    // Send the data to register.php using Fetch API
    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Change this based on your expected response format
    .then(data => {
        if (data.includes('Error')) {
            alert('Registration failed: ' + data);
        } else {
            alert('Registration successful!');
            window.location.href = 'login.html'; // Redirect to login page upon successful registration
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again.');
    });
});
