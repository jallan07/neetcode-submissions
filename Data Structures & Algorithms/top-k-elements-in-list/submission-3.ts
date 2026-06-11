class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    // if (k === 0) return []; -- unnecessary because it specifies that k is <= 1

    const count = new Map();
    for (const num of nums) {
      // set a key/value pair in the count map
      // key = the number
      // value = the number of times the number appears in the input array
      count.set(num, (count.get(num) || 0) + 1);
    }

    return [...count.entries()]
      // sort the count array by the values (highest to lowest frequency)
      .sort((a, b) => b[1] - a[1])
      // slice off only the top k frequency items
      .slice(0, k)
      // create an array of just the keys that remain in the map
      .map(entry => entry[0])


  }
}
