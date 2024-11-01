class Arithmetics {
  constructor(arr) {
    this.arr = arr;
  }
  sumArr() {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i];
    }
    return sum;
  }
  sortValues() {
    this.arr.sort((a, b) => a - b);
    return this.arr;
  }
  getMean() {
    return this.sumArr() / 2;
  }
  getMedian() {
    let medianIndex;
    let median;

    if (this.sortValues().length % 2 == 0) {
      median = (this.sortValues().length + 1) / 2;

      return median;
    } else {
      median = (this.sortValues().length - 1) / 2 + 1;

      medianIndex = median - 1;

      return this.sortValues()[medianIndex - 1];
    }
  }
  getVariance() {
    let variance = this.arr.map((elem) => (elem - this.getMean()) ** 2);
    let sum = 0;
    for (let i = 0; i < variance.length; i++) {
      sum += variance[i];
    }
    return sum;
  }
  getStandardDeviation() {
    let standardDeviation = Math.sqrt(this.getVariance());
    return standardDeviation;
  }
  getRange() {
    let maxNum = this.sortValues()[this.sortValues().length - 1];
    let minNum = this.sortValues()[0];
    return maxNum - minNum;
  }
  mode() {
    let frequency = {};
    let maxFreq = 0;

    for (const val of this.arr) {
      frequency[val] ? (frequency[val] += 1) : (frequency[val] = 1);
      if (frequency[val] > maxFreq) {
        maxFreq = frequency[val];
      }
    }
    for (const num in frequency) {
      if (frequency[num] == maxFreq) {
        return "mode is " + num;
      }
    }
  }
}

let arithmetics = new Arithmetics([5, 4, 3, 4, 10, 1, 6, 3, 4, 1]);
console.log(arithmetics.getMean());
console.log(arithmetics.getMedian());
console.log(arithmetics.mode());
console.log(arithmetics.getVariance());
