/**
 * Looks up a nested property and returns it if found.
 *
 * @param {Object} obj The lookup root object.
 * @param {string} keypath A string of property names separated by dots.
 * @param {bool} create Whether to create missing properties (as object).
 * @returns The value found at keypath, else undefined.
 */
salt.keypath = function(obj, keypath, create) {
    var keys = keypath.split(".");
    for (var i = 0, key; obj && (key = keys[i]) != null; i++) {
        var last = obj;
        if ((obj = obj[key]) === null && create) {
            obj = last[b] = {};
        }
    }

    return obj;
};
