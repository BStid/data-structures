//Initiate a new Map Instance
let myMapName = new Map();

//Declare some variables
let keyString = "KeyThatIsAString";
let keyObj = { a: "a", b: "b", c: "c" };
let keyFunc = (num1, num2) => num1 + num2;

//Setting values to the Keys
myMapName.set(keyString, "Value Associated with this key...");
myMapName.set(keyObj, "value associated with the obj");
myMapName.set(keyFunc, "value associated with the function");

// console.log(myMapName.get(keyFunc));
console.log(myMapName.get("KeyThatIsAString"));
