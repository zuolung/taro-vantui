// eslint-disable-next-line @typescript-eslint/no-var-requires
const shelljs = require('shelljs')

shelljs.exec('yarn')
shelljs.exec('npm link')
shelljs.cd('./site/demo')
shelljs.exec('yarn')
shelljs.exec('npm link taro-vantui')
