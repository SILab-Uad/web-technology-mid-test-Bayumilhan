// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let CharacterSet= "";

   // TODO: Generate the password based on the selected criteria
   if (options.includeUppercase) CharacterSet += uppercase;
   if (options.includeLowercase) CharacterSet += lowercase;
   if (options.includeNumbers) CharacterSet += numbers;
   if (options.includeSpecialChars) CharacterSet += specialChars;

   if(CharacterSet ===""){
    alert("Please select at least one option for the password.")
    return"";
   }
   
   let password ="";
   for (let i = 0; i<length; i++) {
       const randomIndex = Math.floor(Math.random() * CharacterSet.length);
       password += CharacterSet[randomIndex];
   }
   
   return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById("generateBtn").addEventListener("click", function() {
    const length = document.getElementById("length").value;

    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChar").checked
    };

    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
});

// BONUS: Implement the copy to clipboard functionality

