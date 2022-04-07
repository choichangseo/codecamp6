// 데코레이터는 뭘까요?!
function qqq(aaaaaa: any) {
  console.log("=============");
  console.log(aaaaaa);
  console.log("=============");
}

// qqq는 함수의 인자로 class가 들어갔다는 뜻
// Entity, Primary..., 등등 마찬가지이다.
@qqq
class Product {}
