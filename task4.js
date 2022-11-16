const palindrome = str => {
  str = str.toLowerCase() //нечуствительность к регистру
  return (str.split('').reverse().join('')) === str //сравнение перевернутой и входной строк
}

console.log(palindrome("122321"))
console.log(palindrome("12,,21"))
console.log(palindrome("12  21"))
console.log(palindrome("WebLab3"))
console.log(palindrome("AudDua"))
console.log(palindrome("1D_/.,Ere,./_D1"))
console.log(palindrome(1)) //некорректное использование => ошибка
