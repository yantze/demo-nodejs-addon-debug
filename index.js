// That is the equivalent of the following JavaScript code:
// module.exports.hello = () => 'world'
const helloAddon = require('./build/Debug/hello.node')

console.log('output:', helloAddon.hello('fakeArgs'))
