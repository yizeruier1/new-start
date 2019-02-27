import React, { Component } from 'react';
import { connect } from 'react-redux';

// 异步 ACTION  示例
const delayAdd = () => (dispatch, getState) =>　{
  setTimeout(() => {
    dispatch({ type: 'add' });
  }, 1000);
}

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  } 
  render() {
    const { add, minus, dela } = this.props;
    return (
      <div className="App">
        <h2>{this.props.person.name}的年龄为{this.props.person.age}</h2>
        <button onClick={add}>next year</button>
        <button onClick={minus}>prev year</button>
        <button onClick={dela}>delay add</button>
      </div>
    );
  }
}

//  需要渲染的state数据
function mapStateToProps(state) {
  return {
    person: state
  }
}

//  修改state的reducers
function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: 'add' }),
    minus: () => dispatch({ type: 'minus' }),
    dela: () => dispatch(delayAdd())
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)