function random(min, max) {
  return (min+Math.random()*(max-min));//задаём интервал необходимых значений с помощью выражения
}

console.log(random(2, 6));
console.log(random(3, 9));
console.log(random(2, 14));
console.log(random(2, 14));
console.log(random(2, 14));
console.log(random(-6, 0));
console.log(random(-a, b));//некорректное использование функции => ошибка
