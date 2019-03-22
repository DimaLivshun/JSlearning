/*alert('Dimas');///2

var a = 10;////3
alert(a);
a = 20;
alert(a);

var a = 10;////4
var b = 20;
alert('a:' + a);
alert('b:' + b);
b = a;
alert('b:' + b);


var name = prompt('Your name?');////5
alert('Hi,' + name + '!')*////////////////////////////////////////////////////////////////////Task01

/*var a = 5;
var s = a * a;///1

var a = 15;
var b = a / a;
console.log(b);
var c = 20 % a;
console.log(c);///2

var a = 4;
var b = 3;
console.log(a > 2);
console.log(b <= 3);///3

var a = 1;
var b = 2;
var c = 3;
console.log(a < b < c);///4

var a = 111;
console.log(a > 100 && a % 2 != 0);///5

var x = 1;
var y = 2;
var res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);///6

var res2 = Boolean(x) + '' + y;
console.log(res2);
console.log(typeof res2);

var res3 = y > 1
console.log(res3);
console.log(typeof res3);

var res4 = parseInt( Boolean(x + y))
console.log(res4);
console.log(typeof res4);

var arr = [];
arr[0] = 1;
arr[1] = 'Hi';
arr[2] = true;
arr[3] = null;
console.log(arr.length);
var b = prompt('?');
arr[4] = b;
console.log(arr[4]);*///7//////////////////////////////////////////////////////Task02


/*var num = 0;
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

/*var num = 0;
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

/*var a = +prompt('Num?', '');
var b = +prompt('Num?', '');
var c = +prompt('Num?', '');
var d = +prompt('Num?', '');
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

/*var k = 2
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

/*var a = +prompt('Num?', '');
var b = +prompt('Num?', '');

while(a > b){
	a -= b
}
alert('length:' + a)*//////5

/*var n = +prompt('num?','')
while(n > 0){
	console.log(n % 10)
	n /= 10
}*////////////////////////////6??????

/*var a = +prompt('Num?', '');
var b = +prompt('Num?', '');
for(var i = 0; i < b; i++){
	a += i
	console.log(a)
}
console.log(a)*/

/*var n = +prompt('num?','')
var sum = 1
for(var i = 1; i < n; i++){
	sum *= i
}
console.log('n:' + sum)*/


/* var arr = []
var sum = 0
while(true){
	var n = +prompt('num?','')
	if(!n){
	for(var i = 0; i < arr.length; i++){
		sum +=arr[i]
	}
	console.log(sum)
	break
	}
	else{
		arr.push(n)
	}
} */


/* var a = +prompt('Num?', '');
var b = +prompt('Num?', '');
for (var i = a, count = 1; i <= b; i++, count++) {
    for (var j = 0; j < count; j++){
        console.log(i);
    }
} */

/*var x = prompt("x?", '');
var n = prompt("n?", '');
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
alert( pow(x, n) );*/

/* var x = prompt("x?", '');
var n = prompt("n?", '');
function minMax(x, n){
	return x < n ? x : n
}
alert( minMax(x,n) ) */

/*var x = prompt("x?", '');
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

/*var a = prompt("x?", '');
var b = prompt("x?", '');
var op = prompt("x?", '');

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

/* var n = +prompt("n?", '');
var k = prompt("k?", '');
function digitN(k,n){
	var rev = k.split("").reverse().join("");
	return n > rev.length ? -1 : rev[n]
}
alert(digitN(k,n)) *////////////////////////////////////////////////////////Task03

/* var add = function(x, y){
	return x + y;
} */

/* function createArrayIterator(array) {
	var i = 0
	if(i > array.length){
		return undefined
	}
	else{
		return function(){
			return array[i++]
		}
	}
}
var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr());
console.log(itr());
console.log(itr());
console.log(itr()); */

/* function createtrg() {
	var a = 0;
	var b = 0;
	var c = 0;
	var arr = [];
	arr[0] = function (newA,newB,newC) {
		if ( newA >= 0 && newB >= 0 && newC >= 0 ) {
			 a = newA;
			 b = newB;
			 c = newC;
		}
	};
	arr[1] = function () {
		var p = (a+b+c)/2;
		return {
			pl: Math.sqrt(p*(p-a)*(p-b)*(p-c)),
			perim: a+b+c}
	};
	return arr;
}
var trg = createtrg();
trg[0](9,8,8);
console.log(trg[1]())
trg[0](-9, 9, 0);
console.log(trg[1]());

trg[0](-9, 'asf', 0);
console.log(trg[1]());

/* function digitSum(k) {
	return k == 0 ? false : digitSum(k / 10) + k % 10
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



//////////////////////////////////////////////////////////////////////////////////////////////////////SPRINT01




/* var user = {
	name: 'Cris',
	surname: 'Simons'
}
user.name = 'Brain'
devare user.name */


/* var car = {}
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


var car = {}
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


var car = {
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

/* var tv = {
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

/* var player = {
	model:"SONY NW-WM1Z/N",
	memory: 256,
	memoryCard: true,
	bluetooth: true,
	color: 'gold',
	sonorScreen: true
} */

/* var arr = [
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

/* var obj = {

}
function isEmpty(obj){
	for (var key in obj){
		return obj.hasOwnProperty(key) ? true : false
	}
}
alert(isEmpty(obj));
obj.name = 'John'
alert(isEmpty(obj)) */

/* var salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
}
function sum(obj){
debugger
	var sum = 0
	for(var key in obj){
		sum += obj[key]
	}
	return sum / Object.keys(obj).length
}
alert(sum(salaries));
salaries.Piter = 200
salaries.Polly = 500
alert(sum(salaries)) *///////////////////////Task05








/* var calculator = {
   read: function(){
		 this.firstNum = +prompt('Num?','')
		 this.secondNum = +prompt('Num?','')
	 },
	 sum: function(){
		 return this.firstNum + this.secondNum
	 },
	 mul: function(){
		 return this.firstNum * this.secondNum
	 }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul()); */

/* var arr = []
function createPlayer(){
		arr.push({
		model: prompt('Model?',''),
		memory: +prompt('memory?',''),
		memoryCard: Boolean(prompt('memoryCard?','')),
		bluetooth: Boolean(prompt('bluetooth?','')),
		color: prompt('color?',''),
		sonorScreen: Boolean(prompt('sonorScreen?','')),
	})
}
createPlayer()
createPlayer()
console.log(arr)
createPlayer()
console.log(arr) */


/* var salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
};
function maxVal(obj){
	var max = 0
	for(var key in obj){
		if(obj[key] > max) max = obj[key]
	}
	return max
}
console.log(maxVal(salaries)) */


/* var sony = {
	model:"SONY NW-WM1Z/N",
	memory: 256,
	memoryCard: true,
	bluetooth: true,
	color: 'gold',
	sonorScreen: true
}

var samsung = {
	model:"Samsung WM1Z/N",
	memory: 256,
	memoryCard: true,
	bluetooth: true,
	color: 'black',
	sonorScreen: true
}

function Player(obj){
	this.model = obj.model
	this.memory = obj.memory
	this.memoryCard = obj.memoryCard
	this.bluetooth = obj.bluetooth
	this.color = obj.color
	this.sonorScreen = obj.sonorScreen
	this.logInfo = function(){
		console.log('Model:' + this.model)
	}
}
var sonyPlayer = new Player(sony)
console.log(sonyPlayer.model)
sonyPlayer.logInfo()

var samsungPlayer = new Player(samsung)
console.log(samsungPlayer.model)
samsungPlayer.logInfo() */

/* function mul() {
	var count = 0;
	var tmp = 1;
	for (var i = 0; i < arguments.length; i++){
		if (typeof(arguments[i])==="number"){
			tmp *=arguments[i];
			count++;
		}
	}
	return count == 0 ? 0 : tmp
}
console.log(mul(1, "str", 2, 3, 5, 7, 8));
console.log(mul(null, 5, "string", false, true)); */


/* var country = {
	name: "Украина",
	language: "украинский",
	capital: {
		 name: "Киев",
		 population: 2907817,
		 area: 847.66
	}
};
function format(beginMsg, endMsg) {
	console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>');
format.apply(country, ['[', ']']);
format.call(country.capital, '"', '"');
format.apply(country.capital, ['', '']); *//////////////////////////////Task06




/* var user = {
	name: "Tom"
};
function format(start, end) {
	console.log(start + this.name + end);
}
var tomFormat = function(start,end){
	format.apply(user,[start,end])
}
tomFormat("<<<", ">>>"); // <<<Tom>>>

var tomFormat2 = format.bind(user)
tomFormat2("<<<", ">>>"); */


/* function mul(a, b) {
	return a * b;
}
var doubleMul = mul.bind(null, 2)
var qudraMul = mul.bind(null, 4)
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20 */


/* function bind(func, context) {
	func.call(context)
}
function func() {
	console.log(this.name + " - "+ this.age);
}
var user = {
	name: "Tom",
	age: 20
};
var f = bind(func, user);
f(); // "Tom – 20" */


/* function Valume(number) {
	var _valume = 0; // Приватное свойство
	function _numberValid(number) { // Приватный метод
		 if (number >= 0 && number <= 100) _valume = number
	}
	_numberValid(number); // Вызов приватного метода
	this.getNumber = function () { // Публичный метод
		 return _valume;
	};
	this.setNumber = function (number) { // Публичный метод
		 _numberValid(number); // Вызов приватного метода
	};
}

var valume = new Valume(9);
console.log(valume.getNumber());
valume.setNumber(-2);
console.log(valume.getNumber());
valume.setNumber(16);
console.log(valume.getNumber());
valume.setNumber(111);
console.log(valume.getNumber()); */


/* function Valume(number) {
	var _valume = 0;
	this.valume = function (number) {
		if (number === undefined) {
			 return _valume;
		}
		_numberValid(number);
 };
	function _numberValid(number) {
		 if (number >= 0 && number <= 100) {
			_valume = number;
		 }
	}
}
var val = new Valume(9);
console.log(val.valume());
val.valume(16);
console.log(val.valume()); */

/* function Sum(){
	var _firstNumber = 0;
	var _secondNumber = 0;
	this.result = 0;
	function validationNumber(firstNumber, secondNumber){
		if (typeof (firstNumber) === "number"){
			_firstNumber = firstNumber;
		}
		if (typeof (secondNumber) === "number"){
			_secondNumber = secondNumber;
		}
	}
	function calc(firstNumber,secondNumber){
		return result = _firstNumber + _secondNumber;
	}
	this.sumSetterGetter = function(firstNumber,secondNumber){
		if (firstNumber === undefined && secondNumber === undefined){
			return result;
		}	else{
			validationNumber(firstNumber, secondNumber);
			return calc(_firstNumber, _secondNumber);
		}
	}
}
var sum = new Sum();
console.log(sum.sumSetterGetter(4,5)); *//////////////////////////////////////////////////////////SPRINT02




