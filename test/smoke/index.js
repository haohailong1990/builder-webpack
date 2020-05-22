const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

// 冒烟测试
const mocha = new Mocha({
    timeout: '10000ms'
})

process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', ()=> {
    const prdConfig = require('../../lib/webpack.prod.js')
    webpack(prdConfig, (err, stats) => {
        if(err){
            console.error(err)
            process.exit(2)
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false
        }))

        console.log('Webpack build success, begin run test.');

        mocha.addFile(path.join(__dirname, 'html-test.js'))
        mocha.addFile(path.join(__dirname, 'css-js-test.js'));
        mocha.run()
    })
})