let a = prompt('enter first number');
let b = prompt ('enter second number');

alert(Math.abs(10-a) < Math.abs(10-b)? a  + '  ближче 10' :
Math.abs(10-a) > Math.abs(10-b)? b + '  ближче до 10':
 'Обидва числа близькі до 10' );
