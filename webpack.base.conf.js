const { resolve } = require("core-js/fn/promise")

module.exports= {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
}