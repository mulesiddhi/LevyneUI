const path = require('path')
console.log(path.join(__dirname, 'styles'))
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}