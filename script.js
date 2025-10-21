const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

showLogin.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm[0].value;
    const password = loginForm[1].value;
    alert(`Login successful!\nEmail: ${email}`);
    loginForm.reset();
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm[0].value;
    const email = signupForm[1].value;
    const password = signupForm[2].value;
    const confirmPassword = signupForm[3].value;
    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
    signupForm.reset();
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});
