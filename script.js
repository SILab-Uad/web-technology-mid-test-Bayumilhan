// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet= '';

   // TODO: Generate the password based on the selected criteria
   if (options.includeUppercase) charSet += uppercase;
   if (options.includeLowercase) charSet += lowercase;
   if (options.includeNumbers) charSet += numbers;
   if (options.includeSpecialChars) charSet += specialChars;

   if(charSet ===''){
     throw new Error('Please select at least one option for the password.');  
   }
   
   let password ='';
   for (let i = 0; i<length; i++) {
       const randomIndex = Math.floor(Math.random() * charSet.length);
       password += charSet[randomIndex];
   }
   
   return password;
};

