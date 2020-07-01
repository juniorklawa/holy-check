export default class ChapterSchema {
  static schema = {
    name: 'Chapter',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      read: 'bool',
      note: 'string',
      parentId: 'string',
    },
  };
}
