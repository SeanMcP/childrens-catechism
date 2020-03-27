const fs = require('fs')
const mkdirp = require('mkdirp')

const BUILD_DIR = 'lib'
const SRC_FILE = 'data.json'

try {
    const raw = fs.readFileSync(SRC_FILE)
    const parsed = JSON.parse(raw)

    // Create build directory
    mkdirp.sync(BUILD_DIR)

    // JavaScript
    fs.writeFileSync(`${BUILD_DIR}/cc.js`, `module.exports=${JSON.stringify(parsed)}\n`)
    console.log('Successfully wrote: `cc.js`')

    // JSON
    fs.copyFileSync(SRC_FILE, `${BUILD_DIR}/cc.json`)
    console.log('Successfully copied: `cc.json`')
} catch (error) {
    console.log('Error', error)
    process.exit(1)
}