/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division2(길이,분해할_수){
    let count = 0;
    const answer = [];
    let subRes = [];
    while(count < 길이){
        if (count!=0 && count % (분해할_수) === 0){
            answer.push([...subRes])
            subRes = []
        }
        subRes.push(count+1)
        count++;
    };
    answer.push([...subRes])
    console.log(answer);
}

division2(80,5)