/**
 * @param {Function} f The function to defer
 * @param {Array|Arguments} [args] Arguments to apply to the function
 * @param {Object} [context] The context to execute the function in
 */
salt.defer = function(f, args, context) {
    setTimeout(args || context ? function() { f.apply(context, args); } : f, 0);
};
