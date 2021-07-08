export default class PraySchema {
  static schema = {
    name: 'Pray',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      createdAt: 'date',
      updatedAt: { type: 'date', optional: true },
      answeredAt: { type: 'date', optional: true },
      title: 'string',
      description: 'string',
    },
  };
}
