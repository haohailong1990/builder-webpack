const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/aikucun/workspace/webpack/my-project/21持续集成和Travis Ci/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, '/Users/aikucun/workspace/webpack/my-project/21持续集成和Travis Ci/builder-webpack/test/smoke/template/src/search/index.js')
    })
})