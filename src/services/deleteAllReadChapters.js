import getRealm from '../services/getRealm';

export default async function deleteAll() {
  const realm = await getRealm();
  const allReadChapters = realm.objects('Chapter');
  const allBookProgress = realm.objects('BookProgress');
  realm.write(() => {
    realm.delete(allReadChapters);
    realm.delete(allBookProgress);
  });
}
