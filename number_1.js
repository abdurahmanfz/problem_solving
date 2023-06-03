// fungsi weightend strings

let string = "abbcccd";
let query = "1398";

const cekBobot = (arr) => {
  let new_arr = [];
  let freq = arr.reduce((count, ele) => {
    count[ele] = count[ele] || 0;
    count[ele]++;
    new_arr.push(count[ele] * (ele.charCodeAt(0) - 96));
    return count;
  }, {});
  
  return new_arr;
}

const cekStatus = (string, query) => {
  const status = [];
  const aoq = query.split("");
  const aos = string.split("");
  let weights = cekBobot(aos);
  
  aoq.forEach((val) => {
    if (weights.includes(Number(val))) {
      status.push('Yes');
    } else {
      status.push('No');
    }
  })

  return status;
}

const hasil = cekStatus(string, query);
console.log("Status dari angka dalam queries:", hasil);
