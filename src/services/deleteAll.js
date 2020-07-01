import getRealm from '../services/getRealm';

export default async function deleteAll() {
  const realm = await getRealm();
  realm.write(() => {
    realm.deleteAll();
  });
}
