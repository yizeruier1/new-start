import React, { Component }     from 'react';
import { Link }                 from 'react-router-dom';

class Login extends Component {

  login(){
    // console.log(this.props);
    // js 控制 路由 跳转
    // this.props.history.push('/home');
  }

  render() {
    return (
    	<div>
    		<div>Login Page!</div>
    		<div>
				<button onClick={ () => this.login() }>
          <Link to="/home">登录</Link>
        </button>
    		</div>
    	</div>
    );
  }
}

export default Login;