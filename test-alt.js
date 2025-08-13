const assert            = require('node:assert');
const {describe, it}    = require('node:test');

const {Cylinder, Cuboid, Pyramid, Volume} = require('./volume-alt');

const precision = 8;

describe('volume of a cylinder', (t) => {
    it('should work with consts', () => {
        const height = 1;
        const radius = 2;

        cylinder = new Cylinder(height, radius);

        assert.strictEqual(
            Volume.calculate(cylinder).toFixed(precision), 
            (height * radius * radius * Math.PI).toFixed(precision)
        );
    });

    it('should work with randoms', () => {
        for (let i = 0; i < 10; i++) {
            let height = Math.random(100);
            let radius = Math.random(100);

            cylinder = new Cylinder(height, radius);

            assert.strictEqual(
                Volume.calculate(cylinder).toFixed(precision), 
                (height * radius * radius * Math.PI).toFixed(precision)
            );
        }
    });

    it('throws exception when anything but number is given in the Cylinder::constructor()', () => {
        assert.throws(() => Volume.cylinder(new Cylinder(4, 's')));
        try {
            Volume.cylinder(new Cylinder(4, 's'));
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 's' of type 'string' is given");
        }

        assert.throws(() => Volume.cylinder(new Cylinder(new String('a'), 2)));
        try {
            Volume.cylinder(new Cylinder(new String('a'), 2));
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'a' of type 'object' is given");
        }

        assert.throws(() => Volume.cylinder(new Cylinder(false, 2)));
        try {
            Volume.cylinder(new Cylinder(false, 2));
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'false' of type 'boolean' is given");
        }

        assert.throws(() => Volume.cylinder(new Cylinder(4, true)));
        try {
            Volume.cylinder(new Cylinder(4, true));
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'true' of type 'boolean' is given");
        }
    });
});

describe('volume of a cuboid', (t) => {
    it('should work with consts', () => {
        height = 2;
        length = 1;
        width  = 4;

        cuboid = new Cuboid(height, length, width);

        assert.strictEqual(
            Volume.calculate(cuboid).toFixed(precision), 
            (height * length * width).toFixed(precision)
        );
    });

    it('should work with randoms', () => {
        for (let i = 0; i < 10; i++) {
            height = Math.random(100);
            length = Math.random(100);
            width  = Math.random(100);

            cuboid = new Cuboid(height, length, width);

            assert.strictEqual(
                Volume.calculate(cuboid).toFixed(8), 
                (height * length * width).toFixed(precision)
            );
        }
    });

    it('throws exception when anything but number is given in Cuboid::constructor()', () => {
        assert.throws(() => Volume.calculate(new Cuboid(4, 's', 'a')));
        assert.throws(() => Volume.calculate(new Cuboid(new String('a'), 2, 'a')));
        assert.throws(() => Volume.calculate(new Cuboid(false, 2, 'a')));
        assert.throws(() => Volume.calculate(new Cuboid(4, true, 'a')));
    });
});

it('same result for different piramids types via Volume::calculate() and manual calculation', () => {
    assert.strictEqual(
        Volume.calculate(new Pyramid(1, 2, 3, Pyramid.PYRAMID_SHAPE_TRIANGULAR)).toFixed(precision),
        (1 * 2 * 3 * 1/6).toFixed(precision)
    );
    assert.strictEqual(
        Volume.calculate(new Pyramid(2, 2, 3, Pyramid.PYRAMID_SHAPE_SQUARE)).toFixed(precision),
        (2 * 2 * 3 * 1/3).toFixed(precision)
    );
    assert.strictEqual(Volume.calculate(new Pyramid(7, 9, 0.4, 'recrangular')).toFixed(precision),   (7 * 9 * 0.4 * 1/3).toFixed(precision));
    assert.strictEqual(Volume.calculate(new Pyramid(4, 2, 3, 'pentagonal')).toFixed(precision),      (4 * 2 * 3 * 5/6 ).toFixed(precision));
    assert.strictEqual(Volume.calculate(new Pyramid(7, 2, 3, 'hexagonal')).toFixed(precision),       (7 * 2 * 3).toFixed(precision));
})

it('throws exception when a wrong pyramid type is passed', () => {
    assert.throws(() => Volume.calculate(new Pyramid(1, 2, 3)));
    assert.throws(() => Volume.calculate(new Pyramid(1, 2, 3, 'wonderful')));
})