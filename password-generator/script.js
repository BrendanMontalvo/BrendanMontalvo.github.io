let characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ];
  
  let newPassword = null;
  
  let password1text = document.getElementById("password-el1")
  let password2text = document.getElementById("password-el2")
  let password3text = document.getElementById("password-el3")
  let password4text = document.getElementById("password-el4")
  /*function generateRandomCharacter() {
    let randomPasswordIndex = Math.floor(Math.random() * characters.length)
    return characters[randomPasswordIndex]
  }*/
  
  
  function generatePassword() {
    let randomPasswordIndex = ''
    let randomCharacter = characters[randomPasswordIndex];
    let createdPassword = ''
    
    for (i = 0; i < 14; i++) {
      randomPasswordIndex = Math.floor(Math.random() * characters.length);
      createdPassword += characters[randomPasswordIndex];
    }
    return createdPassword
  }
  
  function displayPassword() {
    password1text.textContent = generatePassword()
    password2text.textContent = generatePassword()
    password3text.textContent = generatePassword()
    password4text.textContent = generatePassword()
  }
  
  
  
  function passwordLength() {
    
  }
  function copyPassword() {
    
  }
  