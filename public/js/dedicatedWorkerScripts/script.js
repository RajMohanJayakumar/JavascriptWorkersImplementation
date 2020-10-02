
let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let multiply = document.getElementById('multiply');
let result = document.getElementById('result');

if(window.Worker){
    let calculationWorker = new Worker("/js/dedicatedWorkerScripts/dedicatedworker.js");
    multiply.onclick = () => {
      calculationWorker.postMessage({
        action: 'multiply',
        values: [+input1.value, +input2.value],
      })
    }
    
    calculationWorker.onmessage = (e) => {
      result.innerText = e.data;
    }
}