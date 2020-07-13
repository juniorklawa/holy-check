import getRealm from '../services/getRealm';

export default async function createOneBookProgress(bookProgress) {
  try {
    const data = {
      id: bookProgress.id,
      totalRead: bookProgress.totalRead,
      concludedAt: bookProgress.concludedAt,
      section: bookProgress.section,
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('BookProgress', data, 'modified');
    });
  } catch (err) {
    console.log(err);
  }
}
