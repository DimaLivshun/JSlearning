/*alert('Dimas');///2

let a = 10;////3
alert(a);
a = 20;
alert(a);

let a = 10;////4
let b = 20;
alert('a:' + a);
alert('b:' + b);
b = a;
alert('b:' + b);


let name = prompt('Your name?');////5
alert('Hi,' + name + '!')*////////////////////////////////////////////////////////////////////Task01

/*let a = 5;
let s = a * a;///1

let a = 15;
let b = a / a;
console.log(b);
let c = 20 % a;
console.log(c);///2

let a = 4;
let b = 3;
console.log(a > 2);
console.log(b <= 3);///3

let a = 1;
let b = 2;
let c = 3;
console.log(a < b < c);///4

let a = 111;
console.log(a > 100 && a % 2 != 0);///5

let x = 1;
let y = 2;
let res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);///6

let res2 = Boolean(x) + '' + y;
console.log(res2);
console.log(typeof res2);

var res3 = y > 1
console.log(res3);
console.log(typeof res3);

var res4 = parseInt( Boolean(x + y))
console.log(res4);
console.log(typeof res4);

let arr = [];
arr[0] = 1;
arr[1] = 'Hi';
arr[2] = true;
arr[3] = null;
console.log(arr.length);
let b = prompt('?');
arr[4] = b;
console.log(arr[4]);*///7//////////////////////////////////////////////////////Task02


/*let num = 0;
if(num > 0){
	num += 1;
}
else if(num < 0){
	num -= 2;
}
else{
	num = 10;
}
alert(num)*/

/*let num = 0;
debugger
if( num == 0){
	alert('Нулевое число!')
}
if( (num > 0) && (num % 2 == 0) ){
	alert('Положительное четное число!')
}
if( (num > 0) && (num % 2 != 0) ){
	alert('Положительное не четное число!')
}
if( (num < 0) && (num % 2 == 0) ){
	alert('Отрицательное четное число!')
}
if( (num < 0) && (num % 2 != 0) ){
	alert('Отрицательное не четное число!')
}*/

/*let a = +prompt('Num?', '');
let b = +prompt('Num?', '');
let c = +prompt('Num?', '');
let d = +prompt('Num?', '');
if ( (a === b) && (b === d) ){
	alert('Номер числа, отличного от остальных: ' + 3);
}
else if ( (a === b) && (a === c) ){
	alert('Номер числа, отличного от остальных: ' + 4)
}
else if ( (a === c) && (c === d) ){
	alert('Номер числа, отличного от остальных: ' + 2)
}
else if ( (b === c) && (c === d) ){
	alert('Номер числа, отличного от остальных: ' + 1)
}*

/*let k = 2
switch(k){
	case 1:
		alert('плохо')
		break
	case 2:
		alert('неудовлетворительно')
		break
	case 3:
		alert('удовлетворительно')
		break
	case 4:
		alert('хорошо')
		break
	case 5:
		alert('отлично')
		break
	default:
		alert('ошибка')
}*/

/*let a = +prompt('Num?', '');
let b = +prompt('Num?', '');

while(a > b){
	a -= b
}
alert('length:' + a)*//////5

/*let n = +prompt('num?','')
while(n > 0){
	console.log(n % 10)
	n /= 10
}*////////////////////////////6??????

/*let a = +prompt('Num?', '');
let b = +prompt('Num?', '');
for(let i = 0; i < b; i++){
	a += i
	console.log(a)
}
console.log(a)*/

/*let n = +prompt('num?','')
let sum = 1
for(let i = 1; i < n; i++){
	sum *= i
}
console.log('n:' + sum)*/


/* let arr = []
let sum = 0
while(true){
	let n = +prompt('num?','')
	if(!n){
	for(let i = 0; i < arr.length; i++){
		sum +=arr[i]
	}
	console.log(sum)
	break
	}
	else{
		arr.push(n)
	}
} */


/* let a = +prompt('Num?', '');
let b = +prompt('Num?', '');
for (let i = a, count = 1; i <= b; i++, count++) {
    for (let j = 0; j < count; j++){
        console.log(i);
    }
} */

/*let x = prompt("x?", '');
let n = prompt("n?", '');
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
alert( pow(x, n) );*/

/*let x = prompt("x?", '');
let n = prompt("n?", '');
function minMax(x, n){
	if(x<n){
		return x
	}
	else{
		return n
	}
}
alert( minMax(x,n) )*/

/*let x = prompt("x?", '');
function sign(x){
	if(x < 0){
		return -1
	}
	else if(x == 0){
		return 0
	}
	else{
		return 1
	}
}
alert(sign(x))*/

/*let a = prompt("x?", '');
let b = prompt("x?", '');
let op = prompt("x?", '');

function calc(a,b,op){
	switch(op){
		case 1:
			return a - b
		case 2:
			return a * b
		case 3:
			return a / b
		default:
			return a - b
	}
}
alert(calc(a,b,op))*/

/*let n = +prompt("n?", '');
let k = prompt("k?", '');
function digitN(k,n){
	let rev = k.split("").reverse().join("");
	if(n > rev.length){
		return -1
	}
	else{
		return rev[n]
	}
}
alert(digitN(k,n))*////////////////////////////////////////////////////////Task03

/* var add = function(x, y){
	return x + y;
} */

/* function createArrayIterator(array) {
	let i = 0
	if(i > array.length){
		return undefined
	}
	else{
		return function(){
			return array[i++]
		}
	}
}
let arr = [5, 3, 7];
let itr = createArrayIterator(arr);
console.log(itr());
console.log(itr());
console.log(itr());
console.log(itr()); */

/* function createtrg() {
	let a = 0;
	let b = 0;
	let c = 0;
	let arr = [];
	arr[0] = function (newA,newB,newC) {
		if ( newA >= 0 && newB >= 0 && newC >= 0 ) {
			 a = newA;
			 b = newB;
			 c = newC;
		}
	};
	arr[1] = function () {
		let p = (a+b+c)/2;
		return {
			pl: Math.sqrt(p*(p-a)*(p-b)*(p-c)),
			perim: a+b+c}
	};
	return arr;
}
let trg = createtrg();
trg[0](9,8,8);
console.log(trg[1]())
trg[0](-9, 9, 0);
console.log(trg[1]());

trg[0](-9, 'asf', 0);
console.log(trg[1]());

/* function digitSum(k) {
	if (k == 0) {
		 return false;
	} else {
		return digitSum(k / 10) + k % 10;
	}
}
var res = digitSum(111);
console.log(res);

/* function format(data, type) {
	switch (type){
		case 'number':
			format = function () {
				return Number(data)
			};
			break
		case 'string':
			format = function () {
			 return String(data)
			};
			break
		case 'boolean':
			format = function () {
				return Boolean(data)
			};
			break
		default:
		return format()
		break

	}
}
var originFormat = format;

format("1", "number");
console.log(format());
console.log(typeof format());

originFormat("Hello", "boolean");
console.log(format());
console.log(typeof format());

originFormat(true, "string");
console.log(format());
console.log(typeof format());*///////////////////////////Task04


/* let user = {
	name: 'Cris',
	surname: 'Simons'
}
user.name = 'Brain'
delete user.name */


/* let car = {}
car.model = 'Tesla'
car.speed = '100500'
car.run = function(){
	alert(model + 'едет со скоростью' + speed)
}
car.stop = function(){
	alert(model + 'остановилась')
}
car.run()
car.stop()


let car = {}
car['model'] = 'Tesla'
car['speed'] = '100500'
car['run'] = function(){
	alert(model + 'едет со скоростью' + speed)
}
car['stop'] = function(){
	alert(model + 'остановилась')
}
car['run']()
car['stop']()


let car = {
	model: 'Tesla',
	speed: '100500',
	run: function(){
		alert(model + 'едет со скоростью' + speed)
	},
	stop: function(){
		alert(model + 'остановилась')
	}
}
car.run()
car.stop() */

/* let tv = {
	currentChannel: 1,
	nextChannel: function(){
		this.currentChannel++
	},
	previousChannel: function(){
		this.currentChannel--
	},
	setChannel: function(number){
		alert('Swithed to channel: ' + number)
	}
}
tv.nextChannel()
tv.nextChannel()
tv.previousChannel()
tv.setChannel(tv.currentChannel) */

/* let player = {
	model:"SONY NW-WM1Z/N",
	memory: 256,
	memoryCard: true,
	bluetooth: true,
	color: 'gold',
	sonorScreen: true
} */

/* let arr = [
	{
		name: 'John',
		age: 28,
		exp: 1,
		lang: ['Java', 'JavaScript', 'SQL']
	},

	{
		name: 'Bill',
		age: 30,
		exp: 5,
		lang: ['HTML', 'CSS', 'JavaScript']
	},

	{
		name: 'Mike',
		age: 32,
		exp: 4,
		lang: ['Python', 'SQL']
	}
] */

/* let obj = {

}
function isEmpty(obj){
	for (var key in obj){
		if (obj.hasOwnProperty(key)) return true;
    return false;
	}
}
alert(isEmpty(obj));
obj.name = 'John'
alert(isEmpty(obj)) */

/* let salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
}
function sum(obj){
debugger
	let sum = 0
	for(let key in obj){
		sum += obj[key]
	}
	return sum / Object.keys(obj).length
}
alert(sum(salaries));
salaries.Piter = 200
salaries.Polly = 500
alert(sum(salaries)) *///////////////////////Task05

