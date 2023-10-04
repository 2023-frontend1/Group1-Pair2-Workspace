/*
변수 위치 찾기

변수 a는 main 함수 안에서 사용된다
변수 b는 dom api selector로 다른 함수에서 재사용 될 수 있다

변수 c와 solution은 각각 main의 매개변수 및 콜백함수이다.
변수 c는 콜백함수 solution의 매게변수로 사용된다.

변수 d는 main의 콜백함수인 솔루션 함수에서 전달받은 c와 연산할 변수이다.
변수 e는 main함수의 최종 반환 값으로 solution에서 d와 c를 더한 값의 반환 값이기도 하다.

문제 해석은 각기 다를 수 있습니다. 중요한 것은 자신만의 관념으로 변수 위치를 찾는 것으로
따로 답이 존재하지 않습니다.
*/

function solution(c) {
  let d = 123
  const e = c+d
  return e
}

function parse() {}

const b = querySelect();
function main(c) {
  let a = 1;

  const e = solution(c);

  return e;
}