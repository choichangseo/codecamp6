import { Component, ReactNode } from "react";
// 리액트에서 extends 컴포넌트를 추가해 클래스를 가진 컴포넌트로 만들어줌

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // state라는 이름이 이미 존재하고 임의대로 바꿀 수 없음
  state = {
    count: 0,
  };

  //일반 함수에서는 this가 동적 스코프가 되어 실행되지 않고 화살표함수로 바꿔야 같은 this로 인식되어(언어적) 사용된다.

  onClickCounter = () => {
    console.log(this.state.count);
    // class 자체에 setState기능이 내장되어있음
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  aaa() {}

  //  render 또한 react 에서 제공해주는 가능 위에 aaa는 우리가 만든 부분
  render() {
    return (
      <div>
        {/* this는 전체를 감싸는 class 안에 있는것을 가져올때 사용됨 함수뿐만 아니라 변수도 가능*/}
        {/* this는 누가 실행을 시켰느냐에 따라 다름 개발자도구에서 console을 찍어보면 window로 설정되어있음 */}
        <div>현재카운트:{this.state.count}</div>
        {/* 그렇지않으면 bind를 사용해 4가지의 this가 모두 같다는 것을 알려주어야 함 */}
        <button onClick={this.onClickCounter.bind(this)}>카운트올리기!!</button>
      </div>
    );
  }
}
