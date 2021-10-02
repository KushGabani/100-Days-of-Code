const revModule = require('./reverseString');

test("reverseString function exists (true)", () => {
    expect(revModule.rev).toBeDefined();
});

test("string reverses (true)", () => {
    const actual = revModule.rev("Hello");
    expect(actual).toBe("olleH");
});

test("String is palindrome (true)", () => {
    const actual = revModule.checkPalin("MOM");
    expect(actual).toBeTruthy();
});

test("String is palindrome (false)", () => {
    const actual = revModule.checkPalin("Mom");
    expect(actual).toBeFalsy();
});

test("isAnagram function exists (true)", () => {
    expect(typeof revModule.checkAnagram).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', () => {
    expect(revModule.checkAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(revModule.checkAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(revModule.checkAnagram('Hello', 'Aloha')).toBeFalsy();
});