import cmudict from "./cmudict.json";

export const Rhymer = () => {
  let rhymer: any = {};

  rhymer.dict = cmudict;

  rhymer.getRhyme = (word: string) => {
    const alpha = word
      .match(/^[a-zA-Z]+$/)
      ?.toString()
      .toUpperCase();

    if (!alpha) {
      return null;
    }

    if (!(alpha in rhymer.dict)) {
      return null;
    }

    return rhymer.dict[alpha].at(-1);
  };

  rhymer.match = (first: string, second: string) => {
    if (first == null || second == null) {
      return true;
    }

    const firstRhyme = rhymer.getRhyme(first);
    const secondRhyme = rhymer.getRhyme(second);

    return firstRhyme && secondRhyme && firstRhyme == secondRhyme;
  };

  return rhymer;
};
