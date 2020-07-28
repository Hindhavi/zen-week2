https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5


problem-0 (PART A)
/*var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", 'eat bread omblet'],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}

console.log();
// Adding height and weight to Fluffy
cat.height=10;
cat.weight=5;
console.log(cat.name+"'s height was"+cat.height);
console.log(cat.name+"'s weight was"+cat.weight);
console.log("------------------------------------------------------------");
console.log();


// Changing Fluffy to Fluffyy
cat.name="Fluffyy"
console.log("Fluffy's updated name is "+cat.name);
console.log("------------------------------------------------------------");
console.log();


// // Activities of Fluffyy's Friends
console.log(cat.catFriends[0].name+"'s activitis are: "+cat.catFriends[0]["activities"]);
console.log(cat.catFriends[1].name+"'s activitis are: "+cat.catFriends[1]["activities"]);
console.log("------------------------------------------------------------");
console.log();


// Fluffyy's Friends names
console.log("Fluffyy's Friends are: "+cat.catFriends[0].name+" and "+cat.catFriends[1].name);
console.log("------------------------------------------------------------");
console.log();


//Total Weight of Fluffy's friends 
console.log("total weight of "+cat.catFriends[0].name+" and "+cat.catFriends[1].name+" is: "+parseInt(cat.catFriends[0].weight+cat.catFriends[1]["weight"]));
console.log("------------------------------------------------------------");
console.log();


// Total activities of Bar and foo are:
console.log(cat.catFriends[0].name+" and "+cat.catFriends[1].name+"'s activitis are: "+cat.catFriends[0]["activities"].concat(cat.catFriends[0]["activities"]));
console.log("------------------------------------------------------------");
console.log();


// Adding two more activities to Bar and Foo
cat.catFriends[0]["activities"][2]="food hunting";
cat.catFriends[0]["activities"][3]="playing with toys";
cat.catFriends[1]["activities"][2]="chase other cats";
cat.catFriends[1]["activities"][3]="taking naps";

console.log(cat.catFriends[0].name+"'s updated activitis are: "+cat.catFriends[0]["activities"]);
console.log(cat.catFriends[1].name+"'s updated activitis are: "+cat.catFriends[1]["activities"]);
console.log("------------------------------------------------------------");
console.log();


// Updating Fur Color of Bar
cat.catFriends[0].furcolor="grey";
console.log(cat.catFriends[0].name+"'s updated furcolor is "+cat.catFriends[0].furcolor);
console.log("------------------------------------------------------------");
console.log();

// console.log(cat);*/

problem-0 part B 

/*var myCar = {
make: "Bugatti",
model: "Bugatti La Voiture Noire",
  year: 2019,
 accidents: [
    {
      date: "3/15/2019",
      damage_points: "5000",
      atFaultForAccident: true,
    },
    {
      date: "7/4/2022",
      damage_points: "2200",
      atFaultForAccident: true,
   },
   {
     date: "6/22/2021",
     damage_points: "7900",
     atFaultForAccident: true,
   },
  ],
};
//1. Loop over the accidents array. Change atFaultForAccident from true to false.
 for (i in myCar.accidents) {
     myCar.accidents[i].atFaultForAccident = false;
 }
 console.log(myCar.accidents);

//2. Print the dated of my accidents
let result = [];
for (i in myCar.accidents) {
  result.push(myCar.accidents[i].date);
}
 console.log(result.join(","));*/


PROBLEM-1

/*var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    var myArr=[];
    for(let ind in obj){
        myArr.push(obj[ind]);
    }
    return myArr

}

// Printing All Values
console.log(printAllValues(obj));*/

PROBLEM-2

/*var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllKeys(obj) {
    return Object.keys(obj);
}

// Printing All Values
console.log(printAllKeys(obj));*/

PROBLEM-3

/*var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    return Object.entries(obj)  
}

console.log(convertListToObject(obj))*/

PROBLEM-4

/*var arr = ['GUVI', 'I', 'am', 'geek'];
function transformFirstAndLast(arr) {
    var obj={};
    obj[arr[0]]=arr[arr.length-1];
    return obj;
}

console.log(transformFirstAndLast(arr));*/

PROBLEM-5

/*var arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
 ];
 function fromListToObject(arr) {
   var newObject = {};
   for (let i in arr) {
     newObject[arr[i][0]] = arr[i][1];
   }
   return newObject;
 }
 console.log(fromListToObject(arr));*/

PROBLEM-6

/*var arr = [
  [
    ["firstName", "Vasanth"],
     ["lastName", "Raja"],
     ["age", 24],
     ["role", "JSWizard"],
   ],
   [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
   ],
  ];
 function transformEmployeeData(arr) {
  var arr1 = [];
   for (let i in arr) {
     let obj = {};
     for (let j in arr[i]) {
      obj[arr[i][j][0]] = arr[i][j][1];
     }
     arr1.push(obj);
   }

   return arr1;
 }
 console.log(transformEmployeeData(arr));*/


PROBLEM-7
 /*var expected = { foo: 5, bar: 6 };
 var actual = { foo: 6, bar: 5 };
 function assertObjectsEqual(actual, expected, testName) {
   // your code here
   if (JSON.stringify(expected) == JSON.stringify(actual)) {
     return "Passed";
   } else {
    return `Failed ${testName} Expected ${JSON.stringify(
       expected
   )}, but got ${JSON.stringify(actual)}`;
   }
 }
 console.log(
   assertObjectsEqual(actual, expected, "detects that two objects are equal")
 );*/

PROBLEM-8

/*var securityQuestions = [
   {
     question: "What was your first pet’s name?",
     expectedAnswer: "FlufferNutter",
   },
   {
     question: "What was the model year of your first car?",
     expectedAnswer: "1985",
   },
   {
     question: "What city were you born in?",
     expectedAnswer: "NYC",
   },
 ];
 function chksecurityQuestions(securityQuestions, question, answer) {
   // your code here
   for (let i in securityQuestions) {
    if (
        securityQuestions[i].question == question &&
        securityQuestions[i].expectedAnswer == answer
     ) {
       return true;
     }
   }
   return false;
 }
 var ques = "What was your first pet’s name?";
 var ans = "FlufferNutter";
 var ques = "What was your first pet’s name?";
 var ans = "DufferNutter";
 var status = chksecurityQuestions(securityQuestions, ques, ans);
 console.log(status);*/

PROBLEM-9

/*var students = [
  {
      name: "Siddharth Abhimanyu",
      age: 21,
   },
   { name: "Malar", age: 25 },
   { name: "Maari", age: 18 },
   { name: "Bhallala Deva", age: 17 },
   { name: "Baahubali", age: 16 },
   { name: "AAK chandran", age: 23 },
   { name: "Gabbar Singh", age: 33 },
   { name: "Mogambo", age: 53 },
   { name: "Munnabhai", age: 40 },
   { name: "Sher Khan", age: 20 },
   { name: "Chulbul Pandey", age: 19 },
   { name: "Anthony", age: 28 },
   { name: "Devdas", age: 56 },
 ];
 function returnMinors(arr) {
   let result = [];
   for (let i in arr) {
     if (arr[i].age < 20) {
       result.push(arr[i].name);
     }
   }
   return result;
 }
 console.log(returnMinors(students));*/