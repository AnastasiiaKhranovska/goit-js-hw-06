const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault()
    const {
        elements: {email, password},
    } = e.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('All fields must be completed!')
    }
    const userDetails = {email: email.value, password: password.value};
    console.log(userDetails);
    e.currentTarget.reset();
}
