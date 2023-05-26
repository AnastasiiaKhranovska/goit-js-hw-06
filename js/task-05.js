const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (e) => {
    output.textContent = e.target.value

    if (e.target.value === '') {
        output.textContent = 'Anonymous'
    }
})