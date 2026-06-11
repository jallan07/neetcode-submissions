class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    // If the input list is empty, return an empty string.
    if (!strs.length || strs.length === 0) return ""

    // Create an empty list to store the sizes of each string.
    const wordLengths = []

    // For each string, append its length to the sizes list.
    for (let str of strs) {
      wordLengths.push(str.length)
    }

    // - Writing all sizes separated by commas.
    const stringifiedWordLengths = wordLengths.join(',');
    const stringifiedInput = strs.join("");
    // - Use a | as a delimiter between the sizes and input
    const res = `${stringifiedWordLengths}|${stringifiedInput}`

    // Return the final encoded string.
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    // If the encoded string is empty, return an empty list.
    if (!str.length || str.length === 0) return []

    // mark the first instance of the delimiter
    const delimiterPosition = str.indexOf('|');

    // Extract everything before the first pipe
    const sizesStr = str.substring(0, delimiterPosition);
    const sizes = Array.from(sizesStr.split(','));

    // Extract everything after the first pipe
    let chars = str.substring(delimiterPosition + 1);

    let offset = delimiterPosition + 1;

    let result = []

      // find the substrings (words) based on each stored size
    for (let size of sizes) {
      const numSize = parseInt(size);
      // push the substring to the result, and increment the offset
      // based on the numSize so next time around it points to the next word
      result.push(str.substring(offset, offset + numSize));
      offset += numSize;
    }

    return result
  }
}
