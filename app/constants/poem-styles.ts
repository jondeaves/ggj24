import { PoemStyle } from "../context";

type ModalPoemStyles = {
  ident: PoemStyle;
  title: string;
  description: string;
  disabled: boolean;
  example?: string;
  rhymingLines: Array<Array<number>>;
  lineSyllables: Array<number | null> | null;
};

export const POEM_STYLES: ModalPoemStyles[] = [
  {
    ident: "limerick",
    title: "LIMERICK (5 LINES)",
    description:
      "Rhymes and syllables galore! The first, second and fifth lines rhyme and must have the same number of syllables. The third and fourth lines also rhyme using a different word! ",
    disabled: false,
    example:
      "The beach is super duper great\nBut water in my eyes, I hate\nRunning full speed on the sand \nSurfing with the entire band\nThe beach is super duper great",
    rhymingLines: [
      [1, 2, 5],
      [3, 4],
    ],
    lineSyllables: [null, null, null, null, null],
  },
  {
    ident: "sonnet",
    title: "SONNET (14 LINES)",
    description:
      "Go all the way! Fourteen lines, ten syllables each. Here’s a sonnet’s rhyming scheme from the first line to the last: ABAB CDCD EFEF GG ",
    disabled: false,
    example:
      "Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer’s lease hath all too short a date:\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimmed;\nAnd every fair from fair sometime declines,\n\nBy chance, or nature’s changing course, untrimmed:\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow’st;\nNor shall Death brag thou wander’st in his shade\nWhen in eternal lines to time thou grow’st:\nSo long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.",
    rhymingLines: [
      [1, 3],
      [2, 4],
      [5, 7],
      [6, 8],
      [9, 11],
      [10, 12],
      [13, 14],
    ],
    lineSyllables: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  },
  {
    ident: "haiku",
    title: "HAIKU (3 LINES)",
    description:
      "Poems of utmost precision. The first and last lines are five syllables and second line requires seven. ",
    disabled: false,
    example:
      "Bones, aged a-creaky\nPress snooze, press snooze, press again\nOh, the lumbago",
    rhymingLines: [],
    lineSyllables: [5, 5, 7],
  },
  {
    ident: "free",
    title: "FREE VERSE",
    description: "Write your poem however you see fit!",
    disabled: false,
    rhymingLines: [],
    lineSyllables: null,
  },
];
