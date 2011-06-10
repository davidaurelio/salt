/**
 * Looks up a nested property and returns it if found.
 *
 * @param {Object} obj The lookup root object.
 * @param {string} keypath A string of property names separated by dots.
 * @param {bool} create Whether to create missing properties (as object).
 * @returns The value found at keypath, else undefined.
 */
salt.keypath = function(obj, keypath, create) {
    var bits = keypath.split(".");
    for (var i = 0, len = bits.length; i < len; i++) {
        var last = obj, b = bits[i];
        obj = obj[b];
        if (typeof current == null) {
            if (create) { obj = last[b] = {}; }
            else { break; }
        }
    }

    return obj;
};
