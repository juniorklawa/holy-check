export default class ChapterSchema {
  static schema = {
    name: 'Chapter',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      read: 'bool',
      note: 'string',
      section: 'string',
      parentId: 'string',
      readAt: 'date',
    },
  };
}
