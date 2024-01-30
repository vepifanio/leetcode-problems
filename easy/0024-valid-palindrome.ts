function isPalindrome(s: string): boolean {
  const sanitizedString = s.replace(/[^A-Z0-9]+/gi, '').toLowerCase()

  for (let i = 0; i < sanitizedString.length; i++) {
    if (
      sanitizedString.charAt(i) !==
      sanitizedString.charAt(sanitizedString.length - 1 - i)
    ) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false
console.log(isPalindrome(' ')) // true
