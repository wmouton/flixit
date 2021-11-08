import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import pages
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

// routes functional component
const Routes = () => {
	return (
		<Switch>
			<Route path='/:category/search/:keyword' component={Catalog} />
			<Route path='/:category/:id' component={Detail} />
			<Route path='/:category' component={Catalog} />
			<Route path='/' exact component={Home} />
		</Switch>
	);
};

export default Routes;
