const Volume = require('./volume');

console.log(Volume.cylinder(1, 2));
console.log(Volume.cuboid(1, 2, 3));
console.log(Volume.pyramid(1, 2, 3, 'triangular'));
console.log(Volume.pyramidTriangular(1, 2, 3));
console.log(Volume.pyramid(1, 2, 3, 'square'));
console.log(Volume.pyramidSquare(1, 2, 3));
console.log(Volume.pyramid(1, 2, 3, 'recrangular'));
console.log(Volume.pyramidRecrangular(1, 2, 3));
console.log(Volume.pyramid(1, 2, 3, 'pentagonal'));
console.log(Volume.pyramidPentagonal(1, 2, 3));
console.log(Volume.pyramid(1, 2, 3, 'hexagonal'));
console.log(Volume.pyramidHexagonal(1, 2, 3));
// will throw an exception
// console.log(Volume.pyramid(1, 2, 3));
