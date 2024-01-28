import { Entry } from "@/app/context";
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

  rhymer.getSyllables = (sentence: string) => {
    const split = sentence.split(" ");
    const words = split.map((s) =>
      s
        .match(/^[a-zA-Z]+$/)
        ?.toString()
        .toUpperCase()
    );

    const syllables = words.map((word) =>
      word
        ? rhymer.dict[word]?.filter((p) => ["0", "1", "2"].includes(p.at(-1)))
            .length
        : 0
    );
    const totalSyllables = syllables.reduce((first, next) => first + next);

    return totalSyllables;
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

export const PoetryStyle = ({
  rhymingLines,
  lineSyllables,
}: {
  rhymingLines: Array<Array<number>>;
  lineSyllables: Array<number | null> | null;
}) => {
  let style: any = { rhymingLines, lineSyllables };

  style.rhymer = Rhymer();

  style.rhymingIndices = rhymingLines.map((s) => s.map((i: number) => i - 1));
  style.rhymingGraph = Object.fromEntries(
    style.rhymingIndices
      .map((s: Array<number>) =>
        s.map((i: number) => [i, s.filter((j: number) => i != j)])
      )
      .flat()
  );

  style.checkSyllablesValid = (value: string, entries: Array<Entry>) =>
    lineSyllables != null
      ? style.lineSyllables[entries.length] != null
        ? style.rhymer.getSyllables(value) ==
          style.lineSyllables[entries.length]
        : true
      : true;

  style.checkRhymeValid = (value: string, entries: Array<Entry>) => {
    const rhymeLines = entries.filter(
      (e, i) => style.rhymingGraph[entries.length]?.includes(i) || false
    );

    if (rhymeLines.length == 0) {
      return true;
    }

    const line = rhymeLines[0];
    return style.rhymer.match(
      value.split(" ").at(-1),
      line.text.split(" ").at(-1)
    );
  };

  style.getCurrentRhymingWord = (entries: Array<Entry>) => {
    if (!style.rhymingGraph[entries.length]) {
      return [];
    }

    const currentRhymingWords = style.rhymingGraph[entries.length]
      .map((i) => entries[i]?.text.split(" ").at(-1) || null)
      .filter((x) => x);

    const currentRhyme =
      currentRhymingWords.length > 0
        ? currentRhymingWords[0].replace(/[^a-zA-Z0-9]/g, "")
        : null;

    return currentRhyme;
  };

  return style;
};
