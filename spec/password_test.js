/**
 * Created by lyf on 17-3-13.
 */
describe('password test', () =>{
    it('validating password: 12345678912345 , the result is false', () =>{
        let expectedText = false;
        let password = validatePassword('12345678912345#');
        expect(password).toBe(expectedText);
    });

    it('validating password: bfbrwcvhg$rfgA , the result is false', () =>{
        let expectedText = false;
        let password = validatePassword('bfbrwcvhg$rfgA');
        expect(password).toBe(expectedText);
    });

    it('validating password: bfbrwcvhgrfgA , the result is false', () =>{
        let expectedText = false;
        let password = validatePassword('bfbrwcvhgrfgA');
        expect(password).toBe(expectedText);
    });

    it('validating password: gr@fgA , the result is false', () =>{
        let expectedText = false;
        let password = validatePassword('gr@fgA');
        expect(password).toBe(expectedText);
    });
});
