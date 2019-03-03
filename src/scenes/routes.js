import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import movie from './movie'
import Header from '../components/header'
/* import Login from './Login' */

export default function Routes() {
	return (
		<Router>
			<div>
				<Header className="App-header" />
				<Route exact path="/" component={Home} />
				<Route path="/movie/:id" component={movie} />
			</div>
		</Router>
	)
}
