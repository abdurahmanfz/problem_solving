// fungsi replace palindrome

const str_replace = (str, pos, x) => {
  let str_arr = str.split('')
  str_arr[pos] = x
  return str_arr.join().replace(',', '')
}

const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  
  let str_left = str.slice(1, str.length - 1)
  let length = str.length
  
  if (str[0] > str[length - 1]) {
    str = str_replace(str, length - 1, str[0])
  } else {
    str = str_replace(str, 0, str[length - 1])
  }
  
  return str[0] === str[str.length - 1] && isPalindrome(str_left);
}

let vault = []
let k = 1;
const str = "3943";

if (isPalindrome(str)) {
  console.log(`${str} is the highest palindrome`);
} else {
  console.log(-1);
}