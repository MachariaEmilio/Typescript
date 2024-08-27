// the type of value returned can be explicitly defined
function gettime(): number {
  return new Date().getTime();
}
console.log(gettime());

// Void Return Type
function printHello(): void {
  console.log("Hello!");
}
printHello();
// parameter

function addvalues({x,y}:{x: number, y: number }) {
  return x ** (y||10);
}
console.log(addvalues({x:2,y:3}));
