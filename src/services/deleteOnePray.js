import getRealm from '../services/getRealm';

export default async function deleteOnePray(pray) {
  const realm = await getRealm();

  const db = realm.objects('Pray');
  const result = db.filtered(`id = "${pray.id}"`)
  realm.write(() => {
    realm.delete(result);
  });
}
