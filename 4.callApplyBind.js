var person1={name :"jamesGlosing",age:68}
var person2={name:"patric napthton",age:60}

/*
every function have acces to call,apply,bind mehods
we acn decide what shoud be the this for that function
*/
function sayHello(message,wish) {
	return message +" "+
	       this.name +" "+
	       this.age+" "+wish
}

       //way-1
/*var msg1=sayHello.bind(person1,"Hello");
//console.log(msg1) 
console.log(msg1())

var msg2=sayHello.bind(person2,"Hello");
//console.log(msg1) 
console.log(msg2())*/
    
    //way-2

var msg1=sayHello.bind(person1);
//console.log(msg1) /**/
console.log(msg1("Hello"))

var msg2=sayHello.bind(person2);/*return fun*/
//console.log(msg1) /**/
console.log(msg2("Hello"))

var msg3=sayHello.call(person2,"Hello","Be happy");/*return valus*/
console.log(msg3)

var msg4=sayHello.apply(person1,["Hello","Be happy"]); /*return value  in array format*/
console.log(msg4)

/*if we pass person1 the sayHello() method calls msg1
  if we pass person2 the sayHello() method calls msg2
  if we pass person3 the sayHello() method calls msg3
*/