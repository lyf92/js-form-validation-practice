/**
 * Created by lyf on 17-3-13.
 */
function validatePassword(password){
    if(password.length < 12 || password.length > 128
        || !/[A-Z]/.test(password) || !/\d/.test(password) || !/\W/.test(password)){
        return false;
    }
    return true;
}