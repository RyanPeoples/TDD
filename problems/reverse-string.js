module.exports = function reverseString(string) {
  let strArr = string.split("");
  let result = [];
  for (let i = strArr.length - 1 ; i>=0;i--){
    let letter = strArr[i];
    result.push(letter)
  }
  // return result.join('')
};
