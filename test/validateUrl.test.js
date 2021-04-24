import { checkForName } from "../src/client/js/nameChecker";

describe("Test: 'checkForName()'", () => {
    test('Should be defined', () => {
        expect(checkForName).toBeDefined();
    });


    test("it returns true when valid urls are entered", () => {
        const urls = [
            "https://example.com",
            "http://example.com",
            "https://www.example.com",
        ];
            
            
       

        urls.forEach(url => {
            expect(checkForName(url)).toBeTruthy();
        });
    });

    test('It should be return false if invalid URL is passed into it', () => {
        expect(checkForName("google.")).toBeFalsy();
    });
});