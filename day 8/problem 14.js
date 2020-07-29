//Given a number, “isEven” returns whether it is even


function isEven(num){
    if(typeof num==="number"){
 if(num%2==0){
 return true
 }else{
 return false
}
}
return -1
}
console.log(isEven(12))
console.log(isEven(10))
console.log(isEven(11))
console.log(isEven("11h"))