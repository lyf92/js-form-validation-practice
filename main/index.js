function validateUserInput(){
    let validationResult = false;

    /***
     * Validation Rules
     * Username:
     *  - only allow word character (letter, number, underscore)
     *  - at least 8 characters
     *  - at most 32 characters
     * Email:
     *  - must be in the form of XXX@xxx.xx,
     *  - only allow word character (letter, number, underscore)
     *  - can not be empty
     * Phone:
     *  - acceptable forms:
     *   1. +XX XXX XXXX XXXX
     *   2. +(XX) XXX-XXXX-XXXX
     *   3. +XXXXXXXXXXXXX
     *   4. XXXXXXXXXXX
     *  - only allow following characters: +, ,-,[0-9]
     *  - can not be empty
     * Password:
     *  - at least contain one capital letter
     *  - at least contain one number
     *  - at least contain one special character
     *  - at least 12 characters
     *  - at most 128 characters
     * Password Confirmation:
     *  - must be the same as password
     ***/

    // Write your code here...

    let userNameR = validateUseName(document.getElementById('username').value);
    let emailR = validateEmail(document.getElementById('email').value);
    let phoneR = validatePhone(document.getElementById('phone').value);
    let passwordR = validatePassword(document.getElementById('password').value);
    let passwordCR = passwordConfirmation(document.getElementById('password').value, document.getElementById('passwordConfirmation').value);
    if(!passwordCR){
      document.getElementById('passwordConfirmationError').innerHTML = 'Password confirmation is wrong!';
    }
    else{
        document.getElementById('passwordConfirmationError').innerHTML = '';
    }

    validationResult = userNameR && emailR && phoneR && passwordR && passwordCR;
    if (validationResult) {
        alert("validation passed, you're now allowed to submit.");
    }
}

function showMessage(funcName, id1, id2){
    let result = funcName(document.getElementById(id1).value);
    if(!result){
        document.getElementById(id2).innerHTML = 'This is wrong!';
    }
    else{
        document.getElementById(id2).innerHTML = '';
    }
}