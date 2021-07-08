import { BookType } from '../enums/BookType';
import { TestmentEnum } from '../enums/TestmentEnum';
import { translate } from '../locales';

export const OLD_TESTMENT_DATA = [
  {
    title: translate('books.genesis'),
    id: 'genesis',
    totalChapters: 50,
    type: BookType.LAW,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.exodus'),
    id: 'exodus',
    totalChapters: 40,
    type: BookType.LAW,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.leviticus'),
    id: 'leviticus',
    totalChapters: 27,
    type: BookType.LAW,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.numbers'),
    id: 'numbers',
    totalChapters: 36,
    type: BookType.LAW,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.deuteronomy'),
    id: 'deuteronomy',
    totalChapters: 34,
    type: BookType.LAW,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.joshua'),
    id: 'joshua',
    totalChapters: 24,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.judges'),
    id: 'judges',
    totalChapters: 21,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.ruth'),
    id: 'ruth',
    totalChapters: 4,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.fsamuel'),
    id: 'fsamuel',
    totalChapters: 31,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.ssamuel'),
    id: 'ssamuel',
    totalChapters: 24,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.fkings'),
    id: 'fkings',
    totalChapters: 22,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.skings'),
    id: 'skings',
    totalChapters: 25,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.fchronicles'),
    id: 'fchronicles',
    totalChapters: 29,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.schronicles'),
    id: 'schronicles',
    totalChapters: 36,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.ezra'),
    id: 'ezra',
    totalChapters: 10,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.nehemiah'),
    id: 'nehemiah',
    totalChapters: 13,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.esther'),
    id: 'esther',
    totalChapters: 10,
    type: BookType.HISTORY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.job'),
    id: 'job',
    totalChapters: 42,
    type: BookType.POETRY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.psalms'),
    id: 'psalms',
    totalChapters: 150,
    type: BookType.POETRY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.proverbs'),
    id: 'proverbs',
    totalChapters: 31,
    type: BookType.POETRY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.ecclesiastes'),
    id: 'ecclesiastes',
    totalChapters: 12,
    type: BookType.POETRY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.songofsolomon'),
    id: 'songofsolomon',
    totalChapters: 8,
    type: BookType.POETRY,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.isaiah'),
    id: 'isaiah',
    totalChapters: 66,
    type: BookType.MAJOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.jeremiah'),
    id: 'jeremiah',
    totalChapters: 52,
    type: BookType.MAJOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.lamentations'),
    id: 'lamentations',
    totalChapters: 5,
    type: BookType.MAJOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.ezekiel'),
    id: 'ezekiel',
    totalChapters: 48,
    type: BookType.MAJOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.daniel'),
    id: 'daniel',
    totalChapters: 12,
    type: BookType.MAJOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.hosea'),
    id: 'hosea',
    totalChapters: 14,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.joel'),
    id: 'joel',
    totalChapters: 3,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.amos'),
    id: 'amos',
    totalChapters: 9,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.obadiah'),
    id: 'obadiah',
    totalChapters: 1,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.jonah'),
    id: 'jonah',
    totalChapters: 4,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.micah'),
    id: 'micah',
    totalChapters: 7,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.nahum'),
    id: 'nahum',
    totalChapters: 3,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.habakkuk'),
    id: 'habakkuk',
    totalChapters: 3,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.zephaniah'),
    id: 'zephaniah',
    totalChapters: 3,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.haggai'),
    id: 'haggai',
    totalChapters: 2,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.zechariah'),
    id: 'zechariah',
    totalChapters: 14,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
  {
    title: translate('books.malachi'),
    id: 'malachi',
    totalChapters: 4,
    type: BookType.MINOR,
    section: TestmentEnum.OLD,
  },
];

export const NEW_TESTMENT_DATA = [
  {
    title: translate('books.matthew'),
    id: 'matthew',
    totalChapters: 28,
    type: BookType.GOSPEL,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.mark'),
    id: 'mark',
    totalChapters: 16,
    type: BookType.GOSPEL,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.luke'),
    id: 'luke',
    totalChapters: 24,
    type: BookType.GOSPEL,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.john'),
    id: 'john',
    totalChapters: 21,
    type: BookType.GOSPEL,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.acts'),
    id: 'acts',
    totalChapters: 28,
    type: BookType.CHURCH_HISTORY,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.romans'),
    id: 'romans',
    totalChapters: 16,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.fcorinthians'),
    id: 'fcorinthians',
    totalChapters: 16,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.scorinthians'),
    id: 'scorinthians',
    totalChapters: 13,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.galatians'),
    id: 'galatians',
    totalChapters: 6,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.ephesians'),
    id: 'ephesians',
    totalChapters: 6,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.philippians'),
    id: 'philippians',
    totalChapters: 4,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.colossians'),
    id: 'colossians',
    totalChapters: 4,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.fthessalonians'),
    id: 'fthessalonians',
    totalChapters: 5,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.sthessalonians'),
    id: 'sthessalonians',
    totalChapters: 3,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.ftimothy'),
    id: 'ftimothy',
    totalChapters: 6,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.stimothy'),
    id: 'stimothy',
    totalChapters: 4,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.titus'),
    id: 'titus',
    totalChapters: 3,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.philemon'),
    id: 'philemon',
    totalChapters: 1,
    type: BookType.PAUL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.hebrews'),
    id: 'hebrews',
    totalChapters: 13,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.james'),
    id: 'james',
    totalChapters: 5,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.fpeter'),
    id: 'fpeter',
    totalChapters: 5,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.speter'),
    id: 'speter',
    totalChapters: 3,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.fjohn'),
    id: 'fjohn',
    totalChapters: 5,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.sjohn'),
    id: 'sjohn',
    totalChapters: 1,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.tjohn'),
    id: 'tjohn',
    totalChapters: 1,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.jude'),
    id: 'jude',
    totalChapters: 1,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
  {
    title: translate('books.revelation'),
    id: 'revelation',
    totalChapters: 22,
    type: BookType.GENERAL_EPISTLE,
    section: TestmentEnum.NEW,
  },
];
