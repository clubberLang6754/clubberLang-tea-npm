// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Helper function to generate a random hex color
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Helper function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Helper function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Helper function to format a date to "DD-MM-YYYY" format
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Example usage
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));               // true
console.log("Random Hex Color:", getRandomHexColor());                        // e.g., "#a3f4d2"
console.log("Average of [5, 10, 15]:", findAverage([5, 10, 15]));             // 10
console.log("Vowel count in 'hello world':", countVowels("hello world"));     // 3
console.log("Formatted Date:", formatDate(new Date()));                       // e.g., "27-10-2024"
