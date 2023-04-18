
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; // начальное значение

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    const currentArr = arrOfArr[i];
    const currentResult = func(...currentArr); // результат насадки
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult; // перезаписываем максимум
    }
    }

  }
}