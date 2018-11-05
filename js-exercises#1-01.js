//Create an array and add three numbers to it.
let myArray = [1, 2, 3]

//Use your array to return the second number.
myArray[1]

//What data type is 123/12? "Things in quotes!"? undefined?
    //Number, String, Undefined

//Write an if statement that returns true.
if(myArray[1] === 2){
  true
}

//Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = []. Use a for loop to add our names to emptyArray. 

let myArray2 = ['Thomas', 'Amber', 'Raoul'] 
let emptyArray = []

let n = myArray2.length

for(let i = 0; i<n; i++){
  emptyArray.push(myArray2[i])
}
emptyArray
