function  sayHello(message){
  return function(firstName,lastName){
  	return message+" "+
  	      firstName+ " "+
  	      lastName
  }
}
var sendWish=sayHello("Hello");
console.log(sendWish)
console.log(sendWish("uma","mahesh"))

/*
here message is the parent propperty ,firstNmae&lastName are chaild propertiys 
when we are calli console.log(sendWish("uma","mahesh"))
parent propery value will be appended to chaild propery withfirstNmae&lastName*/