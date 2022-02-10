function myMap(inputArray, callback) {
  let arr = [];

  for(let i = 0; i< inputArray.length;i++){
    let ele = inputArray[i];
    arr.push(callback(ele));
  }
  
  return arr;
}

module.exports = myMap;
