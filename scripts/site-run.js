const shelljs = require('shelljs')

shelljs.exec('yarn docs')
shelljs.cd('./site/demo')
shelljs.exec('yarn watch:h5')