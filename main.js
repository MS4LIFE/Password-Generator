const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[{]}|;:\'",<.>/?';


const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const lengthEl = document.getElementById('length');
const lowerCaseEl = document.getElementById('lowerCase');
const upperCaseEl = document.getElementById('upperCase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

document.getElementById('passwordForm').addEventListener('submit', function (e) {

    e.preventDefault()

    const length = lengthEl.value;
    let char = '';
    let password = '';


    lowerCaseEl.checked && (char += lowerCaseLetters)
    upperCaseEl.checked && (char += upperCaseLetters)
    numbersEl.checked && (char += numbers);
    symbolsEl.checked && (char += symbols);


    for (let i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
    }
    passwordEl.value = password
})

// generateBtn.addEventListener('click', function (e) {
//     const length = lengthEl.value;
//     let char = '';
//     let password = '';

//     lowerCaseEl.checked && (char += lowerCaseLetters)
//     upperCaseEl.checked && (char += upperCaseLetters)
//     numbersEl.checked && (char += numbers);
//     symbolsEl.checked && (char += symbols);


//     for (let i = 0; i < length; i++) {
//         password += char.charAt(Math.floor(Math.random() * char.length));
//     }
//     passwordEl.value = password
// });
