import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
/* import Login from './Login' */

export default function Routes() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				{/* <Route path="/login" component={Login} /> */}
			</div>
		</Router>
	)
}