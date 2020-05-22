const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/aikucun/workspace/webpack/my-project/20构建共配置包设计/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, '/Users/aikucun/workspace/webpack/my-project/20构建共配置包设计/builder-webpack/test/smoke/template/src/search/index.js')
    })
})