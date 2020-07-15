import getRealm from '../services/getRealm';

export default async function createOnePray(pray) {
  try {
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Pray', pray, 'modified');
    });
  } catch (err) {
    console.log(err);
  }
}
