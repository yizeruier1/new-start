import React, { Component } 	from 'react';
import { NavLink } 				from 'react-router-dom';
import './linkstyle.css'


class Home extends Component {

    render() {

	  	const style = {
			minHeight: '100px',
			color: 'red',
			overflow: 'hidden'
		}

	    return (

	    	<div>

	    		<div>Home Page!</div>

	    		<div style={ style }>
					<NavLink to="/home" className="nav" activeClassName="acnav">list  </NavLink>
					<NavLink to="/order" className="nav" activeClassName="acnav">order  </NavLink>
					<NavLink to="/user" className="nav" activeClassName="acnav">user  </NavLink>
					<NavLink to="/" className="nav">回登陆页  </NavLink>
	    		</div>

				<div>
					{ this.props.children }
				</div>
		    	

	    	</div>
	    );
    }
}

export default Home;