export default class PraySchema {
  static schema = {
    name: 'Pray',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      createdAt: 'date',
      updatedAt: 'date',
      title: 'string',
      description: 'string',
    },
  };
}
