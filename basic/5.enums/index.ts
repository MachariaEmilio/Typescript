// enums are special  "class" that represents a group of constants

// they are in two flavours :numeric and string

// numeric enum - default
enum direction {
  north,
  south,
  west,
  east,
}
const currentdirection = direction.north;
console.log(currentdirection); //output: 0;
// string enum - intialised

enum directions {
  north = 1,
  south,
  west,
  east,
}
const currentdirectionvalue = direction.north;
console.log(currentdirectionvalue); //output: 1;

// string enums

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);


//   