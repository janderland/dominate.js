const {
    keys,
    tail,
    join,
    first,
    reduce,
    isEmpty,
    isString
} = require('lodash');


const attributes = (map) =>
    reduce(keys(map), (attributes, key) =>
        attributes + ' ' + key + '="' + map[key] + '"',
    '');


const element = (tag, attributeMap, children) =>
    '<' + tag + attributes(attributeMap)
        + (isEmpty(children)
          ? '/>'
          : '>'
            + join(children, (''))
            + '</' + tag + '>');


module.exports = reduce(require('./tags'), (exports, tag) => {
    exports[tag] = function() {
        return (isEmpty(arguments)
               ? element(tag, {}, [])
               : (isString(first(arguments))
                 ? element(tag, {}, arguments)
                 : element(tag, first(arguments), tail(arguments))));
    };
    return exports;
}, {});

