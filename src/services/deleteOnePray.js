import getRealm from '../services/getRealm';

export default async function deleteOnePray(selectedPray) {
  const realm = await getRealm();
  realm.write(() => {
    realm.delete(selectedPray);
  });
}
