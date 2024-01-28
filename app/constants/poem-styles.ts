import { PoemStyle } from "../context";

type ModalPoemStyles = {
  ident: PoemStyle;
  title: string;
  description: string;
  disabled: boolean;
  example?: string;
};

export const POEM_STYLES: ModalPoemStyles[] = [
  {
    ident: "limerick",
    title: "LIMERICK (5 LINES)",
    description:
      "Rhymes and syllables galore! The first, second and fifth lines rhyme and must have the same number of syllables. The third and fourth lines also rhyme using a different word! ",
    disabled: false,
    example:
      "The beach is super duper great<br />But water in my eyes, I hate<br />Running full speed on the sand <br />Surfing with the entire band<br />The beach is super duper great",
  },
  {
    ident: "sonnet",
    title: "SONNET (14 LINES)",
    description:
      "Go all the way! Fourteen lines, ten syllables each. Here’s a sonnet’s rhyming scheme from the first line to the last: ABAB CDCD EFEF GG ",
    disabled: false,
    example:
      "Shall I compare thee to a summer’s day?<br />Thou art more lovely and more temperate:<br />Rough winds do shake the darling buds of May,<br />And summer’s lease hath all too short a date:<br />Sometime too hot the eye of heaven shines,<br />And often is his gold complexion dimmed;<br />And every fair from fair sometime declines,<br /><br />By chance, or nature’s changing course, untrimmed:<br />But thy eternal summer shall not fade,<br />Nor lose possession of that fair thou ow’st;<br />Nor shall Death brag thou wander’st in his shade<br />When in eternal lines to time thou grow’st:<br />So long as men can breathe or eyes can see,<br />So long lives this, and this gives life to thee.",
  },
  {
    ident: "haiku",
    title: "HAIKU (3 LINES)",
    description:
      "Poems of utmost precision. The first and last lines are five syllables and second line requires seven. ",
    disabled: false,
    example:
      "Bones, aged a-creaky<br />Press snooze, press snooze, press again<br />Oh, the lumbago",
  },
  {
    ident: "free",
    title: "FREE VERSE",
    description: "Write your poem however you see fit!",
    disabled: false,
  },
];
