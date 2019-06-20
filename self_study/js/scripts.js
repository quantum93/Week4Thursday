document.write("Hello world" + '<br />')
// Here is an example of an epicodusStudent object:
var HumanPlayer = {name: "Tae", id: 1, score = 0, playNumber = 0}
var ComputerPlayer = {name: "Computer", id: 2, score = 0, playNumber = 0}
//When the value of a property is a function, we call it a method.
var HumanPlayer = {
  name: "Tae",
  id: 1,
  score = 0,
  playNumber = 0,
  play: function() {
    console.log("Play pig dice game");
  }
};
console.log(HumanPlayer.name);
console.log(HumanPlayer.id);
console.log(HumanPlayer.play());

var ComputerPlayer = {
  name: "iMac",
  id: 2,
  score = 0,
  playNumber = 0,
  play: function() {
    console.log("Play pig dice game");
  }
};
console.log(ComputerPlayer.name);
console.log(ComputerPlayer.id);
console.log(ComputerPlayer.play());

// add function into the object, ComputerPlayer...
ComputerPlayer.auto = function{
  console.log("turn at the every two plays.");
  }

// The reason to make constructors ....
// multiple object with same properties (variable, datatype, even function)
var dog1 = {name: "Falcor", colors: ["black"], age: 4};
var dog2 = {name: "Nola", colors: ["white", "black"], age: 6};
var dog3 = {name: "Patsy", colors: ["brown"], age: 7};

//we see that String is a constructor for creating string objects.
function Dog(name, colors, age) {
  this.name = name;
  this.color = colors;
  this.age = age;
}

// "Dog" is constructor and "myPuppy" is object (a bunch of dog objects)
// and an instance of the Dog type.
// The instance means an object by constructor.
var myPuppy = new Dog("Ernie", ["brown","black"], 3);
