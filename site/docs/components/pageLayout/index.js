import React from 'react'
import routes from '../../routes'
import MenuInfo from '../../menu'
import { Route, Switch, HashRouter, Redirect, Link } from 'react-router-dom'
import classNames from 'classnames'
import './index.less'

const preCls = 'antmui-site-pageLayout'
const mobileDomain = process.env.NODE_ENV === 'production' ?
  'https://zuolung.github.io/taro-vantui/demo-dist/index.html#' :
  'http://localhost:10086/#'

const notComponentsMd = ['introduce', 'usage']

export default function PageLayout(props) {
  const [hash, setHash] = React.useState(window.location.hash)

  React.useEffect(() => {
    window.addEventListener('hashchange', function () {
      setHash(window.location.hash)
    })
  }, [])

  const onScroll = function (e) {
    e.stopPropagation()
  }

  return (
    <HashRouter>
      <div className={`${preCls}-container`}>
        <iframe
          className={`${preCls}-example`}
          src={!notComponentsMd.includes(hash.replace('#/', '')) ?
            `${mobileDomain}/pages/${hash.replace('#/', '')}/index` :
            `${mobileDomain}/pages/dashboard/index`
          }
        />
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-header-left`}>
            <img className={`${preCls}-logo`} src="https://img.yzcdn.cn/vant/logo.png" />
            <div className={`${preCls}-uiname`}>taro-vantui</div>
          </div>
        </div>
        <div className={`${preCls}-body`}>
          <div className={`${preCls}-menu`} onScroll={onScroll} style={{ height: document.documentElement.clientHeight - 140 }}>
            {(MenuInfo || []).map((it, index) => (
              <div className={`${preCls}-menu-class`} key={`${index}menuClass`}>
                <div className={`${preCls}-menu-class-title`}>{it.desc}</div>
                {Object.keys(it.items).map((key, ind) => (
                  <Link
                    key={`${ind}menuItem`}
                    className={classNames({
                      [`${preCls}-menu-item`]: true,
                      [`${preCls}-menu-item-active`]: hash.replace('#/', '') === `${key}`,
                    })}
                    to={`/${key}`}
                  >
                    {it.items[key]}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={`${preCls}-main`}>
            <Switch>
              <Redirect path="/" exact to="/introduce" />
              {routes.map((item, index) => (
                <Route
                  exact
                  path={`/${item.path}`}
                  key={`${item.path}${index}`}
                  component={(props) => <item.component {...props} />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}
