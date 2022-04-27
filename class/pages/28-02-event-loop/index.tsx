// setTimeout(() =>{
//     console.log("안녕하세요")
// },1000)

// setInterval(() => {
//     document.getElementById("timer")?.innerText = "59:30"
// },1000)

export default function EventLoopPage() {
    // 시간이 걸리는것들은 바로 실행되지 않고 다른 공간에서 따로 실행된다.
    // 스택(CallStack)은 차곡차고 쌓이고 먼저 들어온게 나중에 나가지만 큐(TaskQueue)는 먼저 들어오는 순서대로 바로 나가게된다.
    // CallStack에서 실행이 되다가 시간이 걸리는것들은 Background로 빠지고 거기서 실행하게되는데 결과가 나오면 이제 Queue로 들어가게 된다. 거기서 대기하고 있다가
    // CallStack이 비워지게되면 TaskQueue에서 CallStack으로 들어가 실행되게된다.
  const onClickTimer = () => {
    console.log("========시작=========");
    setTimeout(() => {
      console.log("1초 뒤에 실행될거에요");
    }, 1000);
    console.log("========끝=========");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}
