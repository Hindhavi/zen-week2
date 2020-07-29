//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
   if(num1%5===0)
       return true
       else
       return false
    
}
console.log(divisibleByFive(5))
console.log(divisibleByFive(-55))
console.log(divisibleByFive(37))