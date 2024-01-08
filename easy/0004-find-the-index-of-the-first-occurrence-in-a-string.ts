function strStr(haystack: string, needle: string): number {
  const result = haystack.search(needle)

  return result
}

console.log(strStr('sadbutsad', 'sad')) // 0
