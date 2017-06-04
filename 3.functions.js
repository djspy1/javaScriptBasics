/***************creating functions*************/
 
  /*1.Regular Function*/

/*  function sayHello(){
  	console.log("All the best Divya")
  }
  //sayHello(); invoking fun
  var message=sayHello();
  console.log(message);
*/

/*  console.log(sayHello());
function sayHello(){
  	console.log("All the best Divya")
  }
*/  //sayHello(); invoking fun
  //var message=sayHello();


/***************Annonymus function*********************/
/*var sayAgain=function(){
	return "Hello Again"
}
console.log(sayAgain) //return function
console.log(sayAgain())
*/
/*var sayAgain=function(){
	return "Hello Again"
}
//console.log(sayAgain) //return function
console.log(sayAgain()) 
*/

/**************Constructor functions*******************/
/*
start withcapital letter
*/

            /*constructer function*/
// function Person(firstName,lastName){               
// 	this.firstName=firstName;
// 	this.lastName=lastName;
	
// }
//            /*this is for reusability*/
// Person.prototype.fullName=function(){ 
// 			return this.firstName+ " "+this.lastName;

// }
// var newPerson1=new Person("uma sir","best Trainer");
// var newPerson2=new Person("app","A");
// var newPerson3=new Person("Bat","B");

// console.log(newPerson1.fullName ())
// console.log(newPerson2.fullName ())
// console.log(newPerson3.fullName ())

/*******************self invoking function*******************/
/*
no need to invoke saparately
it will be invoked while writing
only one self invoking function have to be for file&it shoud b at top
*/


/*(function(){
	console.log("Hello")
})()*/

/*(function(name){
	console.log("Hello" +name)
})("Dj")*/