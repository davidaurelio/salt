/**
 * Mixes properties of objects into another objects.
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
