// without inference
const user_details = {
  name: "          emilio ",
  age: 23,
};
user_details.name = user_details.name.trim();
console.log(user_details);
// how to manage property declarations and ensure strict typing in TypeScript:

// You can explicitly describe this object’s shape using an interface declaration:
// inference are used to explicitly define the object shape
//1. strict object property types
interface User {
  name: string;
  age: number;
}
const user: User = {
  name: "emilio",
  age: 23,
};
user.age = 20;
console.log(user);

// 2. Index Signatures
// In TypeScript, index signatures are a powerful feature that allows you to type objects with unknown structures.
interface UserDetails {
  name: string;
  [key: string]: any;
}
let details: UserDetails = {
  name: "emilio",
};
details.age = 20;
console.log(details);

// extended interfaces
interface Rectangle {
  height: number;
  width: number;
}

interface Clouredrectangle extends Rectangle{
    color:string
}

const colouredrectangle: Clouredrectangle={
    height:10,
    width:20,
    color:"nice"
}
