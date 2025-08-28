import assert from 'node:assert';
import {describe, it} from 'node:test';

import Volume from './volume.js';

const precision = 8;

describe('volume of a cylinder', (t) => {
    it('should work with consts', () => {
        const height = 1;
        const radius = 2;
        assert.strictEqual(
            Volume.cylinder(height, radius).toFixed(precision), 
            (height * radius * radius * Math.PI).toFixed(precision)
        );
    });

    it('should work with randoms', () => {
        for (let i = 0; i < 10; i++) {
            let height = Math.random(100);
            let radius = Math.random(100);
            assert.strictEqual(
                Volume.cylinder(height, radius).toFixed(8), 
                (height * radius * radius * Math.PI).toFixed(precision)
            );
        }
    });

    it('throws exception when it is given anything but number', () => {
        assert.throws(() => Volume.cylinder(4, 's'));
        try {
            Volume.cylinder(4, 's');
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 's' of type 'string' is given");
        }

        assert.throws(() => Volume.cylinder(new String('a'), 2));
        try {
            Volume.cylinder(new String('a'), 2);
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'a' of type 'object' is given");
        }

        assert.throws(() => Volume.cylinder(false, 2));
        try {
            Volume.cylinder(false, 2);
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'false' of type 'boolean' is given");
        }

        assert.throws(() => Volume.cylinder(4, true));
        try {
            Volume.cylinder(4, true);
        } catch (err) {
            assert.strictEqual(err.message, "Argument must be of type 'number': value 'true' of type 'boolean' is given");
        }
    });
});

describe('volume of a cuboid', (t) => {
    it('should work with consts', () => {
        const height = 2;
        const length = 1;
        const width  = 4;
        assert.strictEqual(
            Volume.cuboid(height, length, width).toFixed(precision), 
            (height * length * width).toFixed(precision)
        );
    });

    it('should work with randoms', () => {
        for (let i = 0; i < 10; i++) {
            let height = Math.random(100);
            let length = Math.random(100);
            let width  = Math.random(100);
            assert.strictEqual(
                Volume.cuboid(height, length, width).toFixed(8), 
                (height * length * width).toFixed(precision)
            );
        }
    });

    it('throws exception when it is given anything but number', () => {
        assert.throws(() => Volume.cuboid(4, 's', 'a'));
        assert.throws(() => Volume.cuboid(new String('a'), 2, 'a'));
        assert.throws(() => Volume.cuboid(false, 2, 'a'));
        assert.throws(() => Volume.cuboid(4, true, 'a'));
    });
});

it('same result for different piramids types via the direct call and the wrapper', () => {
    assert.strictEqual(Volume.pyramid(1, 2, 3, 'triangular'),   Volume.pyramidTriangular(1, 2, 3));
    assert.strictEqual(Volume.pyramid(2, 2, 3, 'square'),       Volume.pyramidSquare(2, 2, 3));
    assert.strictEqual(Volume.pyramid(7, 9, 0.4, 'recrangular'),  Volume.pyramidRecrangular(7, 9, 0.4));
    assert.strictEqual(Volume.pyramid(4, 2, 3, 'pentagonal'),   Volume.pyramidPentagonal(4, 2, 3));
    assert.strictEqual(Volume.pyramid(7, 2, 3, 'hexagonal'),    Volume.pyramidHexagonal(7, 2, 3));
})

it('throws exception when wrong pyramid type is passed', () => {
    assert.throws(() => Volume.pyramid(1, 2, 3));
    assert.throws(() => Volume.pyramid(1, 2, 3, 'wonderful'));
})

// and so on if I had more time this time round
