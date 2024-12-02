document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate an API call for authentication
    if (username === 'testuser' && password === 'password1') { // Replace with actual validation logic
        localStorage.setItem('jwt', 'your-token-here'); // Store token
        window.location.href = 'index.html'; // Redirect to index.html after successful login
    } else {
        alert('Invalid credentials!'); // Show error message
    }
});
