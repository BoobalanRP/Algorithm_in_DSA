function isPalindrome(word) {
    // Convert the word to lowercase
    word = word.toLowerCase();
    
    // Loop through the word from both ends
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      // If the characters at the two ends are not the same, the word is not a palindrome
      if (word[i] !== word[j]) {
        return false;
      }
    }
    
    // If we have made it to the middle of the word, it is a palindrome
    return true;
  }
  
  // Example usage
  console.log(isPalindrome("racecarutuyt")); // true
//   console.log(isPalindrome("hello")); // false
  