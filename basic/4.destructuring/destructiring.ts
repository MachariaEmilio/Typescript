// arrays 
const graph : [x:number,y:number]=[1,23]

const [x,y]= graph  
// objects
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
const {brand,...rest }= vehicleOne
console.log(brand)
console.log(rest)  