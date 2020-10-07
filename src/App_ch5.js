import React from 'react';

// Class-Type Component : Component 클래스를 반드시 상속받아야 한다.
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello_constructor');
  }

  componentDidMount() {
    console.log('component was rendered');
  }

  // 화면이 업데이트 될 때 실행된다.
  componentDidUpdate() {
    console.log('component was updated');
  }

  componentWillUnmount() {
    console.log('component will be terminated');
  }


  // state는 객체 형태로 정의하고, 소문자 state란 이름을 사용한다.
  state = {
    count: 0,
  };

  plus = () => {
    console.log('plus');
    // 아래와 같이 state를 직접적으로 변경하는것은 react에서 허용하지 않는다.
    // react는 state가 변경되면 render(); 를 다시 실행하여 변경된 state를 화면에 출력하게 되는데
    // state가 직접적으로 변경된 경우는 render(); 를 다시 실행하지 않는다.
    // => Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.state.count += 1;

    // 아래와 같이 setState 메서드를 통해 접근한다.
    // setState(); 의 인자는 새로운 state 객체를 넘겨주면 된다.
    //this.setState({ count: this.state.count + 1});
    // 하지만 위와 같이 작성하면 성능상 이슈가 된다고 함. (원인은 아직 모름. 확인해봐야함)
    // 성능 이슈 방지를 위해서는 setState();의 인자로 함수롤 넣어야 된다고 함.
    this.setState(current => ({
      count: current.count + 1,
    }));


    // state의 값이 변경되어 render(); 가 다시 호출된 경우, 변경된 HTML만 반영된다. 
    // DOM을 새로 그리지않으므로 갱신속도가 훨씬 빠르다.


  };

  minus = () => {
    console.log('minus');
    //this.setState({count: this.state.count - 1});
    this.setState(current => {
      return {
        count: current.count - 1
      }; 
    });
  };

  render() {
    console.log('render');
    //return <h1>The number is : {this.state.count} </h1>
    return (
      <div>
        <h1>The number is : {this.state.count} </h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
