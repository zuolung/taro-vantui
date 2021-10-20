const shelljs = require('shelljs')

shelljs.exec('yarn docs:build')
shelljs.cd('./site/demo')
shelljs.exec('yarn real:h5')