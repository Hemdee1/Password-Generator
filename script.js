const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_=+";

function getuppercaseLetters() {
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function getlowercaseLetters() {
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function getnumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getsymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  let password = "";
  let len = +lengthEl.value;

  if (len > 15) return;

  for (let i = password.length; i < len; i++) {
    if (uppercaseEl.checked) {
      password += getuppercaseLetters();
    }

    if (lowercaseEl.checked) {
      password += getlowercaseLetters();
    }

    if (numberEl.checked) {
      password += getnumbers();
    }

    if (symbolEl.checked) {
      password += getsymbols();
    }
  }
  password = password.slice(0, len);

  passwordEl.innerText = password;
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});

copyBtn.addEventListener("click", () => {
  const password = passwordEl.innerText;

  if (!password) return;
  navigator.clipboard.writeText(password);

  alert("Password copied to clipboard");
  passwordEl.innerText = "";
});
