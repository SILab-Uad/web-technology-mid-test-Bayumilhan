// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
   let dictionary = "";
   let password= "";

   
   if (options.includeUppercase) {
       dictionary += uppercase;
       password += uppercase[Math.floor(Math.random() * uppercase.length)];
   }    
   if (options.includeLowercase) {
       dictionary += lowercase;
       password += lowercase[Math.floor(Math.random() * lowercase.length)];
   } 
   if (options.includeNumbers) {
       dictionary += numbers;
       password += numbers[Math.floor(Math.random() * numbers.length)];
   }
   if (options.includeSpecialChars) {
       dictionary += specialChars;
       password += specialChars[Math.floor(Math.random() * specialChars.length)];
   }

   if(dictionary ==="") { 
    throw new Error("Please select at least one option for the password..");
   }
   
   for (let i = password.length; i<length; i++) {
       const randomIndex = Math.floor(Math.random() * dictionary.length);
       password += dictionary[randomIndex];
   }
   
   password = password.split('').sort(() => Math.random() - 0,5).join('');

   return password;
};

module.exports = {
    generatePassword,
};


