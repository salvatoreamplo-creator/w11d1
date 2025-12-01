//1)string, number, boolean, null, undefined
//2)
var userName;
var age;
var studyingTypeScript;
userName = "salvatore";
age = 28;
studyingTypeScript = true;
//3)
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet(userName));
//4)
var sum = function (a, b) {
    return a + b;
};
console.log(sum(7, 10));
//5)
var calculatePriceWithVAT = function (price) {
    var vatRate = 0.22;
    return price + (price * vatRate);
};
console.log(calculatePriceWithVAT(56));
//6)
var concatenateAndGetLength = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(concatenateAndGetLength("cane, ", "gatto"));
//7)Un Type Union in TypeScript consente di combinare più  variabili
var value;
value = "cavallo";
value = 75;
//8)
var value2;
value2 = 10;
value2 = null;
value2 = undefined;
//10)
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
//11)
var myTuple = ["Alice", "Bob", "Charlie", 25, 30];
var students = [
    { name: "Mario", voto: 7 },
    { name: "Luigi", voto: 6 },
    { name: "Pino", voto: 5 }
];
//17)
var myCar = {
    brand: "fiat",
    model: "500",
    year: 2020,
    isElectric: true
};
