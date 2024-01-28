import { CLEAN_PROMPTS, DIRTY_PROMPTS } from "./constants/prompts";

export const removeDuplicates = <T>(arr: T[]): T[] => {
  const uniqueSet = new Set<T>();

  return arr.filter((item: T) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      return true;
    }
    return false;
  });
};

export const formatAuthorList = (authors: string[]) => {
  if (authors.length === 0) {
    return;
  }

  let finalArray = authors;
  if (authors.length > 1) {
    finalArray = [
      authors.slice(0, authors.length - 1).join(", "),
      authors.slice(-1)[0],
    ];
  }

  return finalArray.join(" and ");
};

export const getRandomPrompt = (includeDirty = true) => {
  let fullList = CLEAN_PROMPTS;
  if (includeDirty) {
    fullList = [...CLEAN_PROMPTS, ...DIRTY_PROMPTS];
  }

  const uniquePrompts = removeDuplicates(fullList);

  return uniquePrompts[Math.floor(Math.random() * uniquePrompts.length)];
};
