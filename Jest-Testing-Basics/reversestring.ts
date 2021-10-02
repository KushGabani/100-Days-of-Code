const reverseString: Function = (str: string) =>
    str
        .split('')
        .reverse()
        .join('');

const checkPalindrome: Function = (str: string): boolean => {
    const reversed: string = reverseString(str);
    return reversed == str;
}

const formatString: Function = (str: string) => {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

const isAnagram: Function = (str1: string, str2: string): boolean => {
    return formatString(str1) == formatString(str2);
}

module.exports = {
    rev: reverseString,
    checkPalin: checkPalindrome,
    checkAnagram: isAnagram
}