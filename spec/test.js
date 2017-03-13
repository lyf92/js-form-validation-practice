/**
 * Created by lyf on 17-3-13.
 */
function userNameTest(){
    let expectedResult = true;
    let userName = validateUseName('12345678');
    console.log('validating username:12345678 , the result is ' + (expectedResult === userName));

    expectedResult = false;
    userName = validateUseName('123#');
    console.log('validating username:123# , the result is ' + (expectedResult === userName));

    expectedResult = true;
    userName = validateUseName('123');
    console.log('validating username:123 , the result is ' + (expectedResult === userName));
}
//userNameTest();

function emailTest(){
    let expectedResult = true;
    let email = validateEmail('123@123.com');
    console.log('validating Email:123@123.com , the result is ' + (expectedResult === email));

    expectedResult = false;
    email = validateEmail('123123.com');
    console.log('validating Email:123123.com , the result is ' + (expectedResult === email));

    expectedResult = false;
    email = validateEmail('');
    console.log('validating Email:  , the result is ' + (expectedResult === email));
}
//emailTest();

function phoneTest(){
    let expectedResult = true;
    let phone = validatePhone('+86 130 1234 5678');
    console.log('validating phone: +86 130 1234 5678 , the result is ' + (expectedResult === phone));

    expectedResult = true;
    phone = validatePhone('+(86) 130-1234-5678');
    console.log('validating phone: +(86) 130-1234-5678 , the result is ' + (expectedResult === phone));

    expectedResult = true;
    phone = validatePhone('+13012345678');
    console.log('validating phone: +13012345678 , the result is ' + (expectedResult === phone));

    expectedResult = true;
    phone = validatePhone('13012345678');
    console.log('validating phone: 13012345678 , the result is ' + (expectedResult === phone));

    expectedResult = false;
    phone = validatePhone('');
    console.log('validating phone:  , the result is ' + (expectedResult === phone));
}
//phoneTest();

function passwordTest(){
    let expectedText = false;
    let password = validatePassword('12345678912345#');
    console.log('validating password: 12345678912345 , the result is ' + (expectedText === password));

    expectedText = false;
    password = validatePassword('bfbrwcvhg$rfgA');
    console.log('validating password: bfbrwcvhg$rfgA , the result is ' + (expectedText === password));

    expectedText = false;
    password = validatePassword('bfbrwcvhgrfgA');
    console.log('validating password: bfbrwcvhgrfgA , the result is ' + (expectedText === password));

    expectedText = false;
    password = validatePassword('gr@fgA');
    console.log('validating password: gr@fgA , the result is ' + (expectedText === password));
}
//passwordTest();

function passwordConfirmationTest(){
    let expectedText = false;
    let password = passwordConfirmation('123456');
    console.log('password Confirmation: 123456 , the result is ' + (expectedText === password));
}
//passwordConfirmationTest();
