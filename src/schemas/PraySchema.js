export default class PraySchema {
  static schema = {
    name: 'Pray',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      createdAt: 'string',
      updatedAt: 'string',
      title: 'string',
      description: 'string',
    },
  };
}
