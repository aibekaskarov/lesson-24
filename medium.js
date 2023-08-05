// //1
// let array = ["radar"];
// let z = array.length -1;
// let palindrome = true;
// for (let i = 0; i < array.length; i++){
//     if (array[i] !== array[z]){
//         palindrome == false;
//         break;
//     } 
//     i++;
//     z--;  
// } if (palindrome){
//        console.log("Массив является палиндромом")
//      } else {
//        console.log("Массив не является палиндромом")
//      }

// //2
// let arr = [1, 2, 3, 4, 3, 2, 1];
// for (let i = arr.length - 1; i >= 0; i--){
//     if (arr[i] === 3){
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)  

// //3
// let num = 0;
// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0 || i % 3 === 0){
//         num += i;
//     }
// } console.log(num)

//4


// //5
// let number = 1234;
// let numString = number.toString();
// let digitsCount = numString.length;

// for (let i = 0; i < digitsCount; i++) {
//   console.log(digitsCount);
// }