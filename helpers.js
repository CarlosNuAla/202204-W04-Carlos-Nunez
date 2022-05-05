export function strictEquals(a, b) {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN)) {
            // Special case #1.
            return false;
        } else {
            return true;
        }
    } else {
        if (
            (Object.is(a, 0) && Object.is(b, -0)) ||
            (Object.is(a, -0) && Object.is(b, 0))
        ) {
            // Special case #2.
            return true;
        } else {
            return false;
        }
    }
}
