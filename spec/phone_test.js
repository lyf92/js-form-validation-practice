/**
 * Created by lyf on 17-3-13.
 */
describe('phone test', () =>{
    it('validating phone: +86 130 1234 5678 , the result is true', () =>{
        let expectedResult = true;
        let phone = validatePhone('+86 130 1234 5678');
        expect(phone).toBe(expectedResult);
    });

    it('validating phone: +(86) 130-1234-5678 , the result is true', () =>{
        let expectedResult = true;
        let phone = validatePhone('+(86) 130-1234-5678');
        expect(phone).toBe(expectedResult);
    });

    it('validating phone: +13012345678 , the result is true', () =>{
        let expectedResult = true;
        let phone = validatePhone('+1213012345678');
        expect(phone).toBe(expectedResult);
    });

    it('validating phone: 13012345678 , the result is true', () =>{
        let expectedResult = true;
        let phone = validatePhone('13012345678');
        expect(phone).toBe(expectedResult);
    });

    it('validating phone:  , the result is false', () =>{
        let expectedResult = false;
        let phone = validatePhone('');
        expect(phone).toBe(expectedResult);
    });
});
