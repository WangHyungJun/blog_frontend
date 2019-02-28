import mainpage from './components/main/main_page'
import listtest from './components/list/list'
import write from './components/write/write'

export default [
  {path:'/', component: mainpage},
  {path: '/:foo', component: mainpage},
  {path: '/write/', component: write}
]
