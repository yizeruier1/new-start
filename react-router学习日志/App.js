import React, { Component }                             from 'react';
import { BrowserRouter as Router, Route, Switch }       from 'react-router-dom';
import Login                                            from './pages/login'
import Home                                             from './pages/home'
import List                                             from './pages/lists'
import Order                                            from './pages/orders'
import User                                             from './pages/users'


class App extends Component {

    // 路由匹配
  	render() {
    	return (
    		<Router>
    			<Switch>
    				<Route exact path="/" component={Login} />
    				<Home>
                        <Route path="/order" component={Order} />
                        <Route path="/user" component={User} />
                        <Route path="/home" component={List} />
                    </Home>
    			</Switch>
    		</Router>
    	);
  	}
}

export default App;
