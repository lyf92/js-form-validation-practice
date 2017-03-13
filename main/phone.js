/**
 * Created by lyf on 17-3-13.
 */
function validatePhone(phone){
    let phoneR1 = /^\+\d{2}\s\d{3}\s\d{4}\s\d{4}$/;
    let phoneR2 = /^\+\(\d{2}\)\s\d{3}-\d{4}-\d{4}$/;
    let phoneR3 = /^\+\d{13}/;
    let phoneR4 = /^\d{11}$/;
    return phoneR1.test(phone) || phoneR2.test(phone) || phoneR3.test(phone) || phoneR4.test(phone);
}