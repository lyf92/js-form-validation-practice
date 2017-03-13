/**
 * Created by lyf on 17-3-13.
 */
describe('password confirmation test', () =>{
    it('password Confirmation: 123456 , the result is false', () =>{
        let expectedText = false;
        let password = passwordConfirmation('123456');
        expect(password).toBe(expectedText);
    });
});
