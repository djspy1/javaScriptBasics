//Objects
     //method-1 ===> new obj
/*var obj=new Object();
console.log(obj) 
*/
    //method- 2 ====>object literal

/*var obj2={};
console.log(obj2)  */
  
   //       =======>object.create  it takes proto type if no prototype we can pass null
/*var obj3=Object.create(null);
console.log(obj3)
*/
     //construcor function

/*function Person(){

}

var obj4=new  Person();
console.log(obj4)
*/
     //console.log(typeof obj3)

//creating empty obj

//var object1=new Object();           /*using new object()*/
//var object2={};                     /*using object literal*/
//var object3=Object.create(null);    /*using object.create()*/
//function Person(){ 
//	var object4=new Person()
//}
//var obj={} /*using squre brakets*/
//var obj={
//	id:1
///};                         
 //obj["name"]="Su"; /*1st way to add property*/
//obj.city="Hyd";  /*1st way to add property*/
//Object.defineProperty(obj,'state',{  /*3rd function constructor*/
//	value:"fnd"
//})

//delete obj.city;
//console.log(obj);

//modifying obj
 
     //preventExtensions()
   /*
   allows to modify existing property
   deleting existing property
   wont allow to add new property
  */

/* var person1={name:"s",age:24}
 Object.preventExtensions(person1)
 person1.name="su"
 person1.city="Banglore";
 delete person1.age;
 console.log(person1)
*/
     //seal

  /*

  alllo modification of existing property

  */
/* var person2={name:"s",age:24}
 Object.seal(person2)
 person2.name="su" //edit
 person2.city="Banglore";
 delete person2.age;
 console.log(person2)
*/  
  //freeze()

  /*
   wont allows to modify existing property
   wont deleting existing property
   wont allow to add new property

  */

/*  var person3={name:"s",age:24}
 Object.seal(person3)
 //person3.name="su" //edit
 //person3.city="Banglore";
 delete person3.age;
 console.log(person3)
*/

/******************Adding properties and methods to object***************************
*/
/*var person={
	firstName:"Divya",
    lastName :"Dj",
    fullname :function(){
    	return this.firstName+ " "+this.lastName;
    }
}

var firstName=person.firstName;
var fullName=person.fullname();
console.log(firstName);
console.log(fullName)
*/
/******************get keys from an obj****************************/
var customer={
	name:"Djspy",
	city:"India",
	role:"CEO"
	age :27
}
var keys=Object.keys(customer);
console.log(keys)
var values=Object.values()