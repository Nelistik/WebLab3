const fizzbuzz = n => {
  for(let k = 1; k <= n; k++) {
    if(k%3===0 && k%5===0) { //fizzbuzz проверка
      console.log('fizzbuzz')
    }
      else if(k%3===0) { //fizz проверка
      console.log('fizz')
    }
      else if(k%5===0) { //buzz проверка
      console.log('buzz')
    } else { //вывод
      console.log(k)
    }
  }
}

fizzbuzz(17)
