"use strict"

const fs = require('node:fs')

let baseDir = __dirname.split('/')
while (baseDir.length > 0 && !fs.existsSync(baseDir.join('/')+'/.env')) baseDir.pop()
const BASE_DIR = baseDir.join('/')+'/'

module.exports = { absolutePath }

function absolutePath(relativePath) {
    return `${ BASE_DIR }${ relativePath }`
}