// RegExp for email pattern --------------------------------------------------------------------------------------
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
}

// RegExp with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character. ------------
function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{8,}$/;
    return passwordPattern.test(password);
}
// RegExp for name pattern --------------------------------------------------------------------------------------
function validateName(name) {
    const namePattern = /^.{3,}$/;
    return namePattern.teste(name) 
}
// RegExp for confirmEmail pattern --------------------------------------------------------------------------------------
function confirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

export {validateEmail, validatePassword, validateName, confirmPassword}