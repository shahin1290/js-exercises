//Q: What is 'this'? Does it have an equivalent in Ruby?

//A: 'this' in JS allows us to access the instance variable. This is like 'self' in Ruby.

//The above Person class is written with ES5, now that we've learned about ES2015, convert the above code class to an ES2015 version using the new class syntax

class Person {
    constructor(first,last){
      this.first = first
      this.last = last
    }
  
    setName(){
  
      console.log(`My full name is ${this.first} ${this.last}`)
  
    }
  
  
  }
  
  let fullName = new Person('Thomas','Ochman')
  
  fullName.setName()