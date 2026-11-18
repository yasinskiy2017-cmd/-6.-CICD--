const assert = require('assert');
const app = require('./index');

console.log('Running basic application tests...');
assert.strictEqual(typeof app, 'function', 'Express app should be exported');
console.log('All tests passed successfully!');
process.exit(0);
