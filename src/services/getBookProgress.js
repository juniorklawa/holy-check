import getRealm from '../services/getRealm';

export default async function getBookProgress() {
  const realm = await getRealm();
  const result = realm.objects('BookProgress');

  return result;
}
