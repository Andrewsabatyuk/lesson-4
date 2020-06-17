let a = prompt('Введіть перше число');
let b = prompt('Введіть друге число');
let c = prompt('Введіть третє число');
let d = Math.pow (b, 2) - 4 * a * c;
let x1;
let x2;
if (d < 0 ){
    alert('Немає коренів');
} else if (d == 0){
    x1 = -b/(2*a);
    alert('Розвязок має один корінь: x = ' + x1);
} else  {
x1 = (-b + Math.sqrt(d))/(2*a);
x2 = (-b - Math.sqrt(d))/(2*a);
alert('Розвязок має два корені: x1 = ' + x1 + '; x2 = ' + x2);
}