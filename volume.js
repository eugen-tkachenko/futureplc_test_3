/* 3. Shapes (JS)

Testing: design patterns, defensive and general programming

---

Write a JS code package that calculates the volume of all of the following:

Cylinder
Cuboid
Pyramid

The pyramid base can be either triangular, square, rectangular or allow all as an option.

Bonus point for implementing all bases. */

import {assertNumbers, assertString} from './helpers.js';

// TODO: upgrade to TypeScript
// TODO: add decorator for easy validation of parameters ?
// TODO: add decorator for Math.abs ?
export default class Volume {

    // TODO: upgrade to TypeScript
    // TODO: change to static const in TS
    static PYRAMID_SHAPE_TRIANGULAR    = 'triangular';
    static PYRAMID_SHAPE_SQUARE        = 'square';
    static PYRAMID_SHAPE_RECTANGULAR   = 'recrangular';
    static PYRAMID_SHAPE_PENTAGONAL    = 'pentagonal';
    static PYRAMID_SHAPE_HEXAGONAL     = 'hexagonal';

    static PYRAMID_SHAPES = [
        Volume.PYRAMID_SHAPE_TRIANGULAR, 
        Volume.PYRAMID_SHAPE_SQUARE,
        Volume.PYRAMID_SHAPE_RECTANGULAR,
        Volume.PYRAMID_SHAPE_PENTAGONAL,
        Volume.PYRAMID_SHAPE_HEXAGONAL,
    ];

    /**
     * 
     * @param {number} height 
     * @param {number} radius 
     * 
     * @returns number
     */
    static cylinder(height, radius) {
        assertNumbers(height, radius);

        return Math.abs(height * Math.PI * radius * radius);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} length
     * @param {number} width 
     * 
     * @returns number
     */
    static cuboid(height, length, width) {
        assertNumbers(height, length, width);
        
        return Math.abs(height * length * width);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} complement that is, the complementary parameter
     * @param {string} type 
     * 
     * @returns number
     */
    static pyramid(height, baseLength, complement, type) {
        assertNumbers(height, baseLength, complement);
        assertString(type);

        if (typeof type === "undefined") {
            throw new Error(`Please provide the pyramid type. Supported types are: '${this.PYRAMID_SHAPES.join("', '")}'`);
        }

        let v;

        // in fact, we can stick to coefficients (C)
        // and just calculate v = h * S * a and then v = v * C
        // although explicit definions will help the user 
        // to know how to pass parameters in this.pyramid()
        // as well as clarify how to add new pyramid types
        switch (type) {
            case this.PYRAMID_SHAPE_TRIANGILAR:
                v = this.pyramidTriangular  (height, baseLength, complement);
                break;
            case this.PYRAMID_SHAPE_SQUARE:
                v = this.pyramidSquare      (height, baseLength, complement);
                break;
            case this.PYRAMID_SHAPE_RECTANGULAR:
                v = this.pyramidRecrangular (height, baseLength, complement);
                break;
            case this.PYRAMID_SHAPE_PENTAGONAL:
                v = this.pyramidPentagonal  (height, baseLength, complement);
                break;
            case this.PYRAMID_SHAPE_HEXAGONAL:
                v = this.pyramidHexagonal   (height, baseLength, complement);
                break;        
            default:
                throw new Error(`The pyramid type '${type}' is not supported (yet?). Supported types are: '${this.PYRAMID_SHAPES.join("', '")}'`);
        }

        return v;
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} baseWidth 
     * 
     * @returns number
     */
    static pyramidSquare(height, baseLength, baseWidth) {
        baseWidth = typeof baseWidth !== "undefined" ? baseWidth : baseLength;

        assertNumbers(height, baseLength, baseWidth);

        return this.pyramidRecrangular(height, baseLength, baseWidth);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} baseWidth 
     * 
     * @returns number
     */
    static pyramidRecrangular(height, baseLength, baseWidth) {
        assertNumbers(height, baseLength, baseWidth);

        return Math.abs(height * baseLength * baseWidth / 3);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} baseHeight 
     * 
     * @returns number
     */
    static pyramidTriangular(height, baseLength, baseHeight) {
        assertNumbers(height, baseLength, baseHeight);

        return Math.abs(height * baseLength * baseHeight / 6);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} apothem 
     * 
     * @returns number
     */
    static pyramidPentagonal(height, baseLength, apothem) {
        assertNumbers(height, baseLength, apothem);

        return Math.abs(height * baseLength * apothem  * 5 / 6);
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} apothem 
     * 
     * @returns number
     */
    static pyramidHexagonal(height, baseLength, apothem) {
        assertNumbers(height, baseLength, apothem);

        return Math.abs(height * baseLength * apothem);
    }
}