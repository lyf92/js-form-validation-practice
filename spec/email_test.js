/**
 * Created by lyf on 17-3-13.
 */
describe('email test', () =>{
    it('validating Email:123@123.com , the result is true', () =>{
        let expectedResult = true;
        let email = validateEmail('123@123.com');
        expect(email).toBe(expectedResult);
    });

    it('validating Email:123123.com , the result is false', () =>{
        let expectedResult = false;
        let email = validateEmail('123123.com');
        expect(email).toBe(expectedResult);
    });

    it('validating Email:  , the result is false', () =>{
        let expectedResult = false;
        let email = validateEmail('');
        expect(email).toBe(expectedResult);
    });
});