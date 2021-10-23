// eslint-disable-next-line @typescript-eslint/no-var-requires
const shelljs = require('shelljs')

shelljs.cd('./site/demo')
shelljs.exec('yarn real:h5')
