/**
 * Created by lyf on 17-3-13.
 */
describe('username test', () =>{
    it('validating username:12345678 , the result is true', () =>{
        let expectedResult = true;
        let userName = validateUseName('12345678');
        expect(userName).toBe(expectedResult);
    });

    it('validating username:123# , the result is false', () =>{
        let expectedResult = false;
        let userName = validateUseName('123#');
        expect(userName).toBe(expectedResult);
    });

    it('validating username:123 , the result is  false', () =>{
        let expectedResult = false;
        let userName = validateUseName('123');
        expect(userName).toBe(expectedResult);
    });
});
