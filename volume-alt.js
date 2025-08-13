import {assertNumbers, assertString} from './helpers.js';

class Figure {
    
    constructor () {
        if (this.constructor === Figure) {
            throw new TypeError('Abstract class "Figure" cannot be instantiated directly');
        }    
    }

}

class Cylinder extends Figure {

    constructor (height, radius) {
        super()

        assertNumbers(height, radius);

        this.height = height;
        this.radius = radius;
    }
    
}

class Cuboid extends Figure {

    constructor (height, lenght, width) {
        super()

        assertNumbers(height, lenght, width);

        this.height = height;
        this.lenght = lenght;
        this.width  = width;
    }

}

class Pyramid extends Figure {

    static PYRAMID_SHAPE_TRIANGULAR    = 'triangular';
    static PYRAMID_SHAPE_SQUARE        = 'square';
    static PYRAMID_SHAPE_RECTANGULAR   = 'recrangular';
    static PYRAMID_SHAPE_PENTAGONAL    = 'pentagonal';
    static PYRAMID_SHAPE_HEXAGONAL     = 'hexagonal';

    // this is a bit silly, but for now
    // values of one "enum" can't be used as keys of another
    static PYRAMID_SHAPE_COEFFICIENTS = {
        'triangular'    : 1/6,
        'square'        : 1/3,
        'recrangular'   : 1/3,
        'pentagonal'    : 5/6,
        'hexagonal'     : 1.,
    }

    /**
     * 
     * @param {number} height 
     * @param {number} baseLength 
     * @param {number} apothem 
     * @param {string} type
     * 
     */
    constructor (height, baseLength, apothem, type = PYRAMID_SHAPE_TRIANGILAR) {

        super()

        assertNumbers(height, baseLength, apothem);
        assertString(type);

        this.height     = height;
        this.baseLength = baseLength;
        this.apothem    = apothem;
        this.type       = type;
    }

}

class Volume {

    /**
     * 
     * @param {Figure} figure 
     * 
     * @returns {number}
     */
    static calculate(figure) {
        return this.factoryMethod(figure);
    }

    /**
     * 
     * @param {Figure} figure 
     * 
     * @returns the method to calculate the volume
     */
    static factoryMethod(figure) {
        const figureClass = figure.constructor.name.toLowerCase();

        const method = this[figureClass];

        if ( typeof method !== 'function' ) {
            throw new TypeError(`Figure "${figure}" is not recognized or implementation is missing`);
        }

        return method(figure);
    }

    /**
     * 
     * @param {Cylinder} cylinder
     *  
     * @returns {number}
     */
    static cylinder(cylinder) {
        return cylinder.height * Math.PI * cylinder.radius * cylinder.radius;
    }

    static cuboid(cuboid) {
        return cuboid.height * cuboid.lenght * cuboid.width;
    }

    static pyramid(pyramid) {
        const coefficient = Pyramid.PYRAMID_SHAPE_COEFFICIENTS[pyramid.type];

        if ( !coefficient ) {
            throw new TypeError(`Pyramid type "${pyramid.type}" is not recognized or implementation is missing`);
        }

        return coefficient * pyramid.height * pyramid.baseLength * pyramid.apothem;
    }

}

export {
    Figure,
    Cylinder,
    Cuboid,
    Pyramid,
    Volume
}