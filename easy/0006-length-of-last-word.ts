function lengthOfLastWord(s: string): number {
  let lastWordLength = 0
  let charIndex = s.length - 1

  while (charIndex >= 0) {
    if (s.charAt(charIndex) !== ' ') {
      lastWordLength++
    } else if (s.charAt(charIndex) === ' ' && lastWordLength !== 0) {
      break
    }

    charIndex--
  }

  return lastWordLength
}

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // 4
console.log(lengthOfLastWord('luffy is still joyboy')) // 6
console.log(lengthOfLastWord('a')) // 1
