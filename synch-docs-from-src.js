const fs = require('fs')
const hbs = require('handlebars')
const res = fs.readdirSync('./src/components').filter(item => {
  const flag1 = item !== '.DS_Store'
  const flag2 = fs.existsSync(`./src/components/${item}/${item}.md`)
  return flag1 && flag2
})


const pageTemp = fs.readFileSync('./template/docs-page.hbs', 'utf-8')
const routeTemp = fs.readFileSync('./template/docs-routes.hbs', 'utf-8')

res.forEach(item => {
  fs.writeFileSync(`./site/docs/pages/${item}.js`, hbs.compile(pageTemp)({
    com: item
  }))
})

const routsData = []
res.map(item => routsData.push({
  com: item,
  com_: item.split('-').join('').substring(0, 1).toUpperCase() + item.split('-').join('').substring(1)
}))

console.info(routsData)

fs.writeFileSync(`./site/docs/routes.js`, hbs.compile(routeTemp)({
  routes: routsData
}))