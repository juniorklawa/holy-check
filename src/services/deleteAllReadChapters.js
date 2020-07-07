import getRealm from '../services/getRealm';

export default async function deleteAll() {
  const realm = await getRealm();
  const allReadChapters = realm.objects('Chapter');
  realm.write(() => {
    realm.delete(allReadChapters);
  });
}
