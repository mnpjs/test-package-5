const { debuglog } = require('util');

const LOG = debuglog('@mnpjs/test-package-5')

/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
               async function testPackage_5(config = {}) {
  const {
    type,
  } = config
  LOG('@mnpjs/test-package-5 called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */

module.exports = testPackage_5
//# sourceMappingURL=index.js.map