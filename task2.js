
function checkSpam(str) { //объявляем функцию, параметр -- строка
  let str_2 = str.toLowerCase(); //перевод строки в н.регистр (необходимо для выполн. задания)
  return (str_2.includes('viagra') || str_2.includes('xxx')); //возврат условия
}

console.log( checkSpam('xxX_CLICK_HERE_Xxx') );
console.log( checkSpam('hello') );
console.log( checkSpam("viAgrA") );
console.log( checkSpam("nye") );
console.log( checkSpam("click") );
console.log( checkSpam("click12341234") );
console.log( checkSpam("viаgra") ); //русская "а" => false
