let frequency = {};
let maxFreq = 0;
let arr = [1, 2, 3, 4, 5, 3, 4, 2, 2];
for (const val in arr) {
  frequency[val] ? (frequency[val] += 1) : (frequency[val] = 1);
  if (frequency[val] > maxFreq) {
    maxFreq = frequency[val];
  }
}
console.log(maxFreq);
for (const num in frequency) {
  if (frequency[num] == maxFreq) {
    return "mode is " + num;
  }
}
