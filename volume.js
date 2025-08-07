/* 3. Shapes (JS)

Testing: design patterns, defensive and general programming

---

Write a JS code package that calculates the volume of all of the following:

Cylinder
Cuboid
Pyramid

The pyramid base can be either triangular, square, rectangular or allow all as an option.

Bonus point for implementing all bases. */

// TODO: upgrade to TypeScript
class Volume {

    // TODO: upgrade to TypeScript
    // TODO: change to static const
    static PYRAMID_SHAPE_TRIANGILAR    = 'triangular';
    static PYRAMID_SHAPE_SQUARE        = 'square';
    static PYRAMID_SHAPE_RECTANGULAR   = 'recrangular';
    static PYRAMID_SHAPE_PENTAGONAL    = 'pentagonal';
    static PYRAMID_SHAPE_HEXAGONAL     = 'hexagonal';

    static PYRAMID_SHAPES = [
        this.PYRAMID_SHAPE_TRIANGILAR, 
        this.PYRAMID_SHAPE_SQUARE,
        this.PYRAMID_SHAPE_RECTANGULAR,
        this.PYRAMID_SHAPE_PENTAGONAL,
        this.PYRAMID_SHAPE_HEXAGONAL,
    ];

    static cylinder(h, r) {
        return h * Math.PI * r * r;
    }

    static cuboid(h, b, l) {
        return h * b * l;
    }

    static pyramid(h, S, a, type) {

        if (typeof type === "undefined") {
            throw 'Please provide the pyramid type. Supported types are: "' + this.PYRAMID_SHAPES.join('", "') + '"';
        }

        let v;

        // in fact, we can stick to coefficients (C)
        // and calculate v = C * h * S * a based on C
        // although explicit definions will help the user 
        // to know how to pass parameters in this.PYRAMID()
        // as well as speed up addition of new pyramid types
        switch (type) {
            case this.PYRAMID_SHAPE_TRIANGILAR:
                v = this.pyramidTriangular(h, S, a);
                break;
            case this.PYRAMID_SHAPE_SQUARE:
                v = this.pyramidSquare(h, S, a);
                break;
            case this.PYRAMID_SHAPE_RECTANGULAR:
                v = this.pyramidRecrangular(h, S, a);
                break;
            case this.PYRAMID_SHAPE_PENTAGONAL:
                v = this.pyramidPentagonal(h, S, a);
                break;
            case this.PYRAMID_SHAPE_HEXAGONAL:
                v = this.pyramidHexagonal(h, S, a);
                break;        
            default:
                throw 'The pyramid type "' + type + '"is not supported (yet?). Supported types are: "' + this.PYRAMID_SHAPES.join('", "') + '"';
        }

        return v;
    }

    static pyramidSquare(h, S, a) {
        a = typeof a !== "undefined" ? a : 1;

        return this.pyramidRecrangular(h, S, a);
    }

    static pyramidRecrangular(h, S, a) {
        return h * S * a / 3;
    }

    static pyramidTriangular(h, S, H) {
        return h * S * H / 6;
    }

    static pyramidPentagonal(h, S, a) {
        return h * S * a  * 5 / 6;
    }

    static pyramidHexagonal(h, S, a) {
        return h * S * a;
    }
}

module.exports = Volume; 
