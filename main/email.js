/**
 * Created by lyf on 17-3-13.
 */
function validateEmail(email){
    let emailR = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return emailR.test(email);
}