// Signup Form Handling
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Simulate signup (in real app: send to backend API)
        alert(`Signup successful for ${username}! Redirecting to login...`);
        window.location.href = 'login.html';
    });
}

// Login Form Handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Simulate login (in real app: authenticate with backend, use sessions/JWT)
        if (email && password) {
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'home.html';
        } else {
            alert('Please enter valid credentials.');
        }
    });
}

// Add Item Form Handling (on home page)
const addItemForm = document.getElementById('addItemForm');
if (addItemForm) {
    addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = addItemForm.querySelector('input[type="text"]').value;
        const price = addItemForm.querySelector('input[type="number"]:nth-of-type(1)').value;
        const quantity = addItemForm.querySelector('input[type="number"]:nth-of-type(2)').value;
        // Simulate adding item (in real app: POST to backend/database)
        alert(`Added: ${name} (Price: $${price}, Qty: ${quantity})`);
        addItemForm.reset();
    });
}

// Smooth scrolling for sidebar menu links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});