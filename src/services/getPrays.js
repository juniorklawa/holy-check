import getRealm from '../services/getRealm';

export default async function getPrays() {
  const realm = await getRealm();
  const result = realm.objects('Pray');

  return result;
}
