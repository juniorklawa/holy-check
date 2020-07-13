export default class BookProgressSchema {
  static schema = {
    name: 'BookProgress',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      totalRead: {type: 'int', default: 0},
      section: 'string',
      concludedAt: {type: 'date', optional: true},
    },
  };
}
