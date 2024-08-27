const names: string[] = [];
names.push("emilio ", "james");
console.log(names); // output [ 'emilio ', 'james' ]

// names.push (10) Argument of type 'number' is not assignable to parameter of type 'string'.
const age: number[] = [];
age.push(10.12, 13);
console.log(age); //[ 10.12, 13 ]

// read only - prevemts arrays from being changed
const Student_name: readonly string[] = ["macharia", "otieno"];
//  Student_name.push("macharia2") // Error: Property 'push' does not exist on type 'readonly string[]'.

// type inference  : you can infer the type of an array if it has values

const number = [1, 2, 2, 44];
// number.push("233") error :Argument of type 'string' is not assignable to parameter of type 'number'.

// let head: string = number[0] error: Type 'number' is not assignable to type 'string'.

console.log(typeof number);
console.log(number);


// TUPLE ARRAYS
// A tuple is a typed array with a pre-defined length and types for each index.
let ourtuple : [number,string,boolean]
ourtuple= [6, " name ",false]
console.log(ourtuple)// [6, " name ",false] 
//ourtuple= ["name",true,6] // initialized incorrectly which throws an error
ourtuple.push(4)
console.log(ourtuple) //output: [ 6, ' name ', false, 4 ]