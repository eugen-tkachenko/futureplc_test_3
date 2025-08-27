const {Cylinder, Cuboid, Pyramid, Volume} = require('./volume-alt');

console.log("Cylinder(1, 2) -> " + Volume.calculate(new Cylinder(1, 2)));
console.log("Cuboid(1, 2, 3) -> " + Volume.calculate(new Cuboid(1, 2, 3)));
console.log("Pyramid(1, 2, 3, 'triangular') -> " + Volume.calculate(new Pyramid(1, 2, 3, 'triangular')));
console.log("Pyramid(1, 2, 3, 'square') -> " + Volume.calculate(new Pyramid(1, 2, 3, 'square')));
console.log("Pyramid(1, 2, 3, 'recrangular') -> " + Volume.calculate(new Pyramid(1, 2, 3, 'recrangular')));
console.log("Pyramid(1, 2, 3, 'pentagonal') -> " + Volume.calculate(new Pyramid(1, 2, 3, 'pentagonal')));
console.log("Pyramid(1, 2, 3, 'hexagonal') -> " + Volume.calculate(new Pyramid(1, 2, 3, 'hexagonal')));
