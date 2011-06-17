/**
 * @param {Object} obj The object to clone.
 * @returns {Object} A deep clone of `obj`.
 */
salt.clone = function clone(obj) {
    var O = Object;
    if (obj instanceof Array) {
        var theClone = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            var value = obj[i];
            theClone[i] = value instanceof O ? clone(value) : value;
        }
    }
    else if (obj instanceof O) {
        var theClone = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                theClone[key] = value instanceof O ? clone(value) : value;
            }
        }
    }
    else {
        theClone = obj;
    }

    return theClone;
};
