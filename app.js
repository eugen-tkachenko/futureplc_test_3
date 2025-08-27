import Volume from './volume.js';

console.log("Volume.cylinder(1, 2) -> " + Volume.cylinder(1, 2));
console.log("Volume.cuboid(1, 2, 3) -> " + Volume.cuboid(1, 2, 3));
console.log("Volume.pyramid(1, 2, 3, 'triangular') -> " + Volume.pyramid(1, 2, 3, 'triangular'));
console.log("Volume.pyramidTriangular(1, 2, 3) -> " + Volume.pyramidTriangular(1, 2, 3));
console.log("Volume.pyramid(1, 2, 3, 'square') -> " + Volume.pyramid(1, 2, 3, 'square'));
console.log("Volume.pyramidSquare(1, 2, 3) -> " + Volume.pyramidSquare(1, 2, 3));
console.log("Volume.pyramid(1, 2, 3, 'recrangular') -> " + Volume.pyramid(1, 2, 3, 'recrangular'));
console.log("Volume.pyramidRecrangular(1, 2, 3) -> " + Volume.pyramidRecrangular(1, 2, 3));
console.log("Volume.pyramid(1, 2, 3, 'pentagonal') -> " + Volume.pyramid(1, 2, 3, 'pentagonal'));
console.log("Volume.pyramidPentagonal(1, 2, 3) -> " + Volume.pyramidPentagonal(1, 2, 3));
console.log("Volume.pyramid(1, 2, 3, 'hexagonal') -> " + Volume.pyramid(1, 2, 3, 'hexagonal'));
console.log("Volume.pyramidHexagonal(1, 2, 3) -> " + Volume.pyramidHexagonal(1, 2, 3));
// will throw an exception
// console.log(Volume.pyramid(1, 2, 3));

// console.log(Volume.pyramid(1, 2, 3, 'wonderful'));

// console.log(Volume.cylinder(4, 's'));
