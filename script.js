// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

   
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

    if (dictionary === "") {
        throw new Error("At least one character type must be selected.");
    }        

    
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        password += dictionary[randomIndex];
    }

   
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
};
