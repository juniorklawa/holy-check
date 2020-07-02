export default class PraySchema {
  static schema = {
    name: 'Pray',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      answeredDate: 'string',
      title: 'string',
      description: 'string',
    },
  };
}
