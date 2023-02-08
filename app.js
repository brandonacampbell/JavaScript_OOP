
// // Exercise 1 

// class Person {
// constructor(name, pets, residence, hobbies) {
// this.name = name;
// this.pets = pets;
// this.residence = residence;
// this.hobbies = hobbies;
// }
// addHobby(newhobby){
//     this.hobbies.push(newhobby);
// }
// removeHobby(exhobby){
//    let placeHolder = this.hobbies.indexOf(exhobby);
//    this.hobbies.splice(placeHolder, 1);
// }

// greeting(){
//     console.log("Hello fellow person!");
// }
// }

// // Exercise 2

// class Coder extends Person {
// constructor(name, pets, residence, hobbies){
//     super(name, pets, residence, hobbies);
//     this.occupation = "Full Stack Web Developer"
// }
// greeting(){
//     console.log("Hello, I am learning how to become a" , this.occupation);
// }
// }

// //Exercise 3
// let brandon = new Person("Brandon", 2, "Lexington, Ky", "Interior Design, Cooking, Photography");
// let FutureBrandon = new Coder("Brandon: Web Dev", 4, "Primary: Lexington, Ky. Vacation Residence: Folly Beach, SC.", "Interior Design, Cooking, Photography");
// console.log(brandon);
// console.log(FutureBrandon);
//Ecercise 4

class Calculator{
constructor(result = 0){
    this.result = result;
}

add(var1, var2) {
let ans;

    if (var2 == undefined ){
        ans = this.result + var1;
    } else {
        ans = var1 + var2;
    }

   this.result = ans;
   return this.result;
}

subtract(var1, var2){
    let ans;

    if (var2 == undefined ){
        ans = this.result - var1;
    } else {
        ans = var1 - var2;
    }

   this.result = ans;
return this.result;
}

multiply(var1, var2){
    let ans;

    if (var2 == undefined ){
        ans = this.result * var1;
    } else {
        ans = var1 * var2;
    }

   this.result = ans;
return this.result;
}

divide(var1, var2){
    let ans;

    if (var2 == undefined ){
        ans = this.result / var1;
    } else {
        ans = var1 / var2;
    }

   this.result = ans;
return this.result;
}

displayResult(){
    console.log(this.result);
}
}

let cal1 = new Calculator();
cal1.add(1,0);
cal1.displayResult();

cal1.add(9);
cal1.displayResult();

cal1.subtract(13, 10);
cal1.displayResult();

cal1.multiply(2,3);
cal1.displayResult();

cal1.divide(10, 2);
cal1.displayResult();