import { PROMPTS } from "./constants/prompts";

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

export const getRandomPrompts = () => {
  return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
};
