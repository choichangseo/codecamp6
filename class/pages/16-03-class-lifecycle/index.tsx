import { Component, createRef, ReactNode } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
    this.inputRef.current?.focus();
    // 포커스 깜빡깜빡
  }

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐!!");
  }

  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기
    // api 요청!! 꼭 채팅방 나가기 함수에서 나가기 버튼을 눌러서 나가는게 아니라 다른 방법으로 나가더라도 무조건 실행됨
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트:{this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트올리기!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
