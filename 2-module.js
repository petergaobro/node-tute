// commonjs, everyfile is module by default
// Modules - encapsulated code only share minimum

// local
const secret = 'super secret'

// share (global)
const jason = 'jason'

console.log(module);

module.exports = { jason }