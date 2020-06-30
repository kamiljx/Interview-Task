var userA = {
    firstname: "Jan",
    lastname: "Kowalski",
    gender: "male",
    age: 17
}
var userB = {
    firstname: "Mark",
    lastname: "Nowak",
    gender: "male",
    age: 47
}
var userC = {
    firstname: "Joe",
    lastname: "Sak",
    gender: "female",
    age: 29
}
var userD = {
    firstname: "Josh",
    lastname: "Audi",
    gender: "male",
    age: 19
}
var userE = {
    firstname: "Marry",
    lastname: "Spider",
    gender: "female",
    age: 37
}

var userArray = new Array;
userArray.push(userA)
userArray.push(userB)
userArray.push(userC)
userArray.push(userD)
userArray.push(userE)
console.log(userArray)



 //TASK 1 
userArray[1].age = 88;
console.log(userArray)

//TASK 2
userArray.map(value => value.student = true);
console.log(userArray)
//We also can change the student value to false using statement bellow
//userArray[2].student = false 
          

// TASK 3
 const female = userArray.filter(function(x) {
	return x.gender == "female";
});
 console.log(female)