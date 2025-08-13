// Some validation helpers

export function isNumber (arg) {
    return !isNaN(parseFloat(arg)) && isFinite(arg);
}

export function isString(arg) {
    return (typeof arg === 'string' || arg instanceof String);
}

export function assertNumber(arg) {
    assertType(arg, 'number', isNumber);
}

export function assertNumbers() {
    [...arguments].map(arg => assertNumber(arg));
}

export function assertString(arg) {
    assertType(arg, 'string', isString);
}

export function assertType(arg, expectedType, assertFn) {
    if ( typeof assertFn !== 'function' ) {
        throw new Error(`Assert function '${assertFn}' is not defined`);
    }

    if ( ! assertFn(arg) ) {
        throw new Error(`Argument must be of type '${expectedType}': value '${arg}' of type '${typeof arg}' is given`);
    }
}
