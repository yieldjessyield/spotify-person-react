import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import PeopleList from './components/PeopleList'
import Home from './components/Home'

const Routes = (
  <Route path="/" component={App}>
  	<IndexRoute component={Home} />
    <Route path="/extra" component={PeopleList} />
  </Route>
)

module.exports = Routes