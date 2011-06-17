/**
 * Mixes own properties of objects into another objects.
 *
 * Only takes own properties into consideration and skips enumerable properties
 * in the prototype chain.
 *
 * @param {Object} objTo The object to mix properties into.
 * @param {Object} objFrom... Objects to copy properties from.
 * @returns {Object} returns `objTo`
 */
salt.mixin = function(objTo, objFrom) {
    var i = 2;
    do {
        for (var name in objFrom) {
            if (objFrom.hasOwnProperty(name)) {
                objTo[name] = objFrom[name];
            }
        }
    } while ((objFrom = arguments[i++]));
    return objTo;
};

/**
 * Mixes all properties of objects into another objects.
 *
 * Mixes in both own properties and properties in the prototype chain.
 *
 * @param {Object} objTo The object to mix properties into.
 * @param {Object} objFrom... Objects to copy properties from.
 * @returns {Object} returns `objTo`
 */
salt.mixin.all = function(objTo, objFrom) {
    var i = 2;
    do {
        for (var name in objFrom) {
            objTo[name] = objFrom[name];
        }
    } while ((objFrom = arguments[i++]));
    return objTo;
};
