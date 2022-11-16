function vowel_count(a) {
  var checklist = 'aeiouAEIOU'; //верхний+нижний регистр
  var count = 0;
  for(var x = 0; x < a.length ; x++) {
    if (checklist.indexOf(a[x]) !== -1) {
      count += 1; //счётчик гласных
    }
  }
  
  return count;
}

console.log(vowel_count("The quick brown fox jumps over the lazy dog"))
console.log(vowel_count("Jackdaws love my big sphinx of quartz"))
console.log(vowel_count("AEIOU"))
console.log(vowel_count("123"))
console.log(vowel_count(jack))//пример некорректного использования
