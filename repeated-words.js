function findRepeatedWords(sentence) {
  /**
   * problem statement:
   * Given a string, count the occurence of each words and print those which has count greater than 1
   */
  if (typeof sentence != "string") return [];
  let wordsArray = sentence.split(/\s+/);
  let wordCountTracker = new Map();

  for (let word of wordsArray) {
    wordCountTracker.set(word, (wordCountTracker.get(word) || 0) + 1);
  }

  // filter entries where count > 1
  let repeatedWords = Array.from(wordCountTracker.entries()).filter(
    ([word, count]) => count > 1,
  );

  return repeatedWords;
}

function findRepeatedWordsImproved(sentence) {
  /**
   * Given a string, count occurrences of each word and return those with count > 1
   */
  if (typeof sentence !== "string" || !sentence.trim()) return [];

  // Clean and normalize: lowercase, remove punctuation, split on whitespace
  const words = sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // keeps letters, digits, underscores, and spaces, and strips everything else
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0); // Remove empty strings

  // Use reduce for more functional approach (slightly more efficient than loop)
  const wordCount = words.reduce((map, word) => {
    map.set(word, (map.get(word) || 0) + 1);
    return map;
  }, new Map());

  // Return only repeated words as array of [word, count]
  return Array.from(wordCount.entries()).filter(([_, count]) => count > 1);
}

export { findRepeatedWords, findRepeatedWordsImproved };
