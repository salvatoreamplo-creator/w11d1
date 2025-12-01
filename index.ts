//1)string, number, boolean, null, undefined
//2)
let userName: string 
let age: number 
let studyingTypeScript: boolean   

userName = "salvatore"
age = 28    
studyingTypeScript = true
//3)
const greet = (name: string): string => {
  return "Ciao " + name;
}
console.log(greet(userName));
//4)
const sum = (a: number, b: number): number => {
  return a + b;
}
console.log(sum(7, 10));
//5)
const calculatePriceWithVAT = (price: number): number => {
  const vatRate = 0.22;
  return price + (price * vatRate);
}
console.log(calculatePriceWithVAT(56));
//6)
const concatenateAndGetLength = (str1: string, str2: string): number => {
  return (str1 + str2).length;
}
console.log(concatenateAndGetLength("cane, ", "gatto"));
//7)Un Type Union in TypeScript consente di combinare più  variabili
let value: string | number;  
value = "cavallo";
value = 75;  
//8)
let value2: number | null | undefined;
value2 = 10; 
value2 = null;  
value2 = undefined;  
//9)
type DayOfWeek = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
//10)
const numbers1: number[] = [1, 2, 3];  
const numbers2: Array<number> = [1, 2, 3]; 
//11)
let myTuple: [string, string, string, number, number] = ["Alice", "Bob", "Charlie", 25, 30];
//12)interface serve per definire la struttura di un oggetto mentre type serve per unire  diversi  tipi di dati in un unico tipo
//13)
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}
//14)
interface User {
  email: string;
  phone?: string;
}
//15)
interface Student {
  name: string;
  voto: number;
}

const students: Student[] = [
  { name: "Mario", voto: 7 },
  { name: "Luigi", voto: 6 },
  { name: "Pino", voto: 5}
];
//16)
interface Veicolo {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Veicolo {
  isElectric: boolean;
}
//17)
const myCar: Car = {
  brand: "fiat",
  model: "500",
  year: 2020,
  isElectric: true
};



