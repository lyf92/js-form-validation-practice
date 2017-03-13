/**
 * Created by lyf on 17-3-13.
 */
function validateUseName(userName){
    let userNameR = /^\w{8,32}$/;
    return userNameR.test(userName);
}